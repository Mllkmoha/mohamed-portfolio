"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { RINGS, type Ring } from "@/data/orbit";

const TAU = Math.PI * 2;
const MAX_CARD = 380; // px, card width on desktop
const CARD_RATIO = 0.72; // card width as a share of its container
const RADIUS_RATIO = 0.56; // orbit radius as a share of card width
const CHIP_SPACE = 100; // px kept free around the orbit for the chips
const COMPACT_BELOW = 420; // container width (px) under which the layout is compact
const COMPACT_CHIPS = 4; // chips per ring in compact mode
const SPEED = 0.00018; // orbit speed, radians per ms
const DEPTH = 0.45; // how far chips move toward and away from the viewer
const TILT = 11; // max tilt in degrees

function useWidth<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, width] as const;
}

function useTilt(enabled: boolean) {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const spring = { stiffness: 150, damping: 15 };

  const rotateY = useSpring(useTransform(mx, [0, 1], [-TILT, TILT]), spring);
  const rotateX = useSpring(useTransform(my, [0, 1], [TILT, -TILT]), spring);
  const gx = useTransform(mx, (v) => v * 100);
  const gy = useTransform(my, (v) => v * 100);
  const glare = useMotionTemplate`radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,.28), transparent 55%)`;

  const handlers = {
    onPointerMove: (e: React.PointerEvent<HTMLElement>) => {
      if (!enabled || e.pointerType !== "mouse") return;
      const r = e.currentTarget.getBoundingClientRect();
      mx.set((e.clientX - r.left) / r.width);
      my.set((e.clientY - r.top) / r.height);
    },
    onPointerLeave: () => {
      mx.set(0.5);
      my.set(0.5);
    },
  };

  return { rotateX, rotateY, glare, handlers };
}

type ChipProps = {
  label: string;
  color: string;
  index: number;
  count: number;
  ring: Ring;
  time: MotionValue<number>;
  radius: number;
  compact: boolean;
};

function OrbitChip({ label, color, index, count, ring, time, radius, compact }: ChipProps) {
  const angle = useTransform(time, (t) => t * SPEED * ring.speed * ring.dir + (index / count) * TAU);
  const depth = useTransform(angle, (a) => (Math.cos(a) + 1) / 2);
  const x = useTransform(angle, (a) => Math.sin(a) * radius);
  const z = useTransform(angle, (a) => Math.cos(a) * radius * DEPTH);
  const scale = useTransform(depth, (d) => 0.85 + 0.15 * d);
  const opacity = useTransform(depth, (d) => 0.4 + 0.6 * d);

  return (
    <motion.div
      style={{ x, z, scale, opacity, top: `${ring.y * 100}%` }}
      className={`absolute left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-white/15 bg-zinc-900/70 font-semibold text-white shadow-xl backdrop-blur-md ${
        compact ? "px-2.5 py-1.5 text-[11px]" : "px-3.5 py-2 text-[13px]"
      }`}
    >
      <i className="size-2 rounded-full" style={{ background: color }} />
      {label}
    </motion.div>
  );
}

type TiltPhotoProps = { src?: string; name?: string; role?: string };

export default function TiltPhoto({
  src = "/photo.webp",
  name = "Mohamed Rafik Mellouk",
  role = "Full-Stack Developer · Algeria",
}: TiltPhotoProps) {
  const [wrapRef, width] = useWidth<HTMLDivElement>();
  const inView = useInView(wrapRef);
  const reduceMotion = useReducedMotion();
  const { rotateX, rotateY, glare, handlers } = useTilt(!reduceMotion);

  const time = useMotionValue(0);
  useAnimationFrame((t) => {
    if (inView && !reduceMotion) time.set(t);
  });

  const cardWidth = Math.min(MAX_CARD, width * CARD_RATIO);
  const radius = Math.max(0, Math.min(cardWidth * RADIUS_RATIO, (width - CHIP_SPACE) / 2));
  const compact = width < COMPACT_BELOW;

  return (
    <div ref={wrapRef} {...handlers} className="relative w-full [perspective:1000px]">
      <div className="relative mx-auto w-[72%] max-w-[380px]">
        <div className="absolute -inset-5 rounded-[2.4rem] bg-[conic-gradient(from_180deg,rgba(99,102,241,.45),rgba(16,185,129,.35),rgba(99,102,241,.45))] opacity-70 blur-3xl" />

        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative aspect-[4/5] rounded-[2rem] shadow-2xl"
        >
          <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-white/20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={name}
              width={640}
              height={800}
              decoding="async"
              fetchPriority="high"
              className="size-full object-cover"
            />
            <motion.div style={{ background: glare }} className="pointer-events-none absolute inset-0" />
            {!compact && (
              <div className="absolute inset-x-3.5 bottom-3.5 rounded-2xl border border-white/15 bg-black/55 px-4 py-3 text-white backdrop-blur-lg">
                <strong className="block text-[15px]">{name}</strong>
                <span className="text-[12.5px] text-zinc-400">{role}</span>
              </div>
            )}
          </div>

          {width > 0 && (
            <div className="pointer-events-none absolute inset-0 [transform-style:preserve-3d]">
              {RINGS.map((ring) => {
                const skills = ring.skills.slice(0, compact ? COMPACT_CHIPS : undefined);
                return skills.map(([label, color], i) => (
                  <OrbitChip
                    key={label}
                    label={label}
                    color={color}
                    index={i}
                    count={skills.length}
                    ring={ring}
                    time={time}
                    radius={radius}
                    compact={compact}
                  />
                ));
              })}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

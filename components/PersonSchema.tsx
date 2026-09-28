export default function PersonSchema() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Mohamed Rafik Mellouk",
      url: "https://mohamed-portfolio-b2d.pages.dev",
      jobTitle: "Junior Full-Stack Web Developer",
      sameAs: [
        "https://github.com/Mllkmoha",
        "https://www.linkedin.com/in/mohamed-mellouk-a9114233a/",
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(personSchema),
      }}
    />
  );
}

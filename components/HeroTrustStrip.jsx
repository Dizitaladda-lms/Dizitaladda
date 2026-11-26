const trustMarks = [
  {
    name: "Skill India",
    image: "/assets/img/trusted-by/Skill-India.webp",
    href: "https://www.skillindiadigital.gov.in/",
  },
  {
    name: "Digital India",
    image: "/assets/img/trusted-by/Digital-India.webp",
    href: "https://www.digitalindia.gov.in/",
  },
  {
    name: "SWAYAM Central",
    image: "https://storage.googleapis.com/swayam2_central/assets/img/swayam_images/swayam_logo.png",
    href: "https://swayam.gov.in/",
  },
  {
    name: "AICTE",
    image: "https://www.technomainsaltlake.ticollege.ac.in/images/aicte.png",
    href: "https://www.aicte-india.org/",
  },
];

export default function HeroTrustStrip() {
  return (
    <section className="hero-trust-strip" aria-label="Authorised training and learning partners">
      <div className="hero-trust-inner">
        <div className="hero-trust-logos">
          {trustMarks.map((mark) => (
            <a className="hero-trust-logo" href={mark.href} key={mark.name} target="_blank" rel="noreferrer" aria-label={mark.name}>
              <img src={mark.image} alt={mark.name} loading="lazy" decoding="async" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

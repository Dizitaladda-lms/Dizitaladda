const campusSpaces = [
  { title: "Modern classrooms", image: "/assets/img/gallery/dizitaladda-classroom.webp" },
  { title: "Student workspaces", image: "/assets/img/gallery/dizitaladda-office.webp" },
  { title: "Campus lounge", image: "/assets/img/gallery/dizitaladda-waiting-area.webp" },
  { title: "Live learning sessions", image: "/assets/img/gallery/dizitaladda-morning-batch.webp" },
  { title: "Project presentations", image: "/assets/img/gallery/presentation.webp" },
  { title: "Collaborative learning", image: "/assets/img/gallery/classes-with-gulshan-sir.webp" },
];

export default function CampusInfrastructureGallery() {
  return (
    <section className="campus-infrastructure" aria-labelledby="campus-infrastructure-title">
      <div className="campus-infrastructure-inner">
        <header className="campus-infrastructure-heading">
          <p>Inside DizitalAdda</p>
          <h2 id="campus-infrastructure-title">Explore Our Campus</h2>
          <span>Take a look at the classrooms, workspaces, and learning spaces where students build their skills.</span>
        </header>
        <div className="campus-infrastructure-gallery">
          {campusSpaces.map((space) => (
            <figure className="campus-infrastructure-item" key={space.title}>
              <a href={space.image} target="_blank" rel="noreferrer" aria-label={`View full image: ${space.title}`}>
                <img src={space.image} alt={space.title} loading="lazy" decoding="async" />
              </a>
              <figcaption>{space.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

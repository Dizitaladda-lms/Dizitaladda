const trainers = [
  { name: "Dr. Gulshan Kumar", role: "Digital Marketing & Data Science", image: "/courses/images/trainer/Gulshan.png", videoUrl: "" },
  { name: "Mr. Ram Kumar", role: "Web Development & E-commerce", image: "/courses/images/trainer/Ram.png", videoUrl: "" },
  { name: "Mr. Saurabh Kumar", role: "Performance Marketing & Paid Ads", image: "/courses/images/trainer/Saurabh.png", videoUrl: "" },
  { name: "Miss Shagun Srivastava", role: "Data Science, AI & Automation", image: "/courses/images/trainer/shagun.png", videoUrl: "" },
  { name: "Mr. Ravi Kumar", role: "SEO & Analytics", image: "/courses/images/trainer/Ravi.png", videoUrl: "" },
  { name: "Mr. Kaushal", role: "Local SEO & Paid Marketing", image: "/courses/images/trainer/Kaushal.png", videoUrl: "" },
  { name: "Mr. Deepanshu Soni", role: "Data Analytics & Web Development", image: "/courses/images/trainer/deepanshu.jpeg", videoUrl: "" },
  { name: "Mr. Govind Bisht", role: "Search AI & SEO", image: "/courses/images/trainer/Govind.png", videoUrl: "" },
];

export default function IndustryTrainerVideos() {
  return (
    <section className="industry-trainer-videos" aria-labelledby="industry-trainer-videos-title">
      <div className="industry-trainer-videos-inner">
        <header className="industry-trainer-videos-heading">
          <p>Learn from the people doing the work</p>
          <h2 id="industry-trainer-videos-title">Learn with Industry Expert Trainers</h2>
          <span>Meet the experts who bring practical, real-world experience into every class.</span>
        </header>
        <div className="industry-trainer-videos-grid">
          {trainers.map((trainer) => (
            <article className="industry-trainer-video-card" key={trainer.name}>
              <div className="industry-trainer-video-thumb">
                <img src={trainer.image} alt={`${trainer.name}, ${trainer.role} trainer`} loading="lazy" decoding="async" />
                {trainer.videoUrl ? (
                  <a className="industry-trainer-video-play" href={trainer.videoUrl} target="_blank" rel="noreferrer" aria-label={`Watch ${trainer.name}'s trainer video`}>
                    <span aria-hidden="true">▶</span>
                  </a>
                ) : (
                  <span className="industry-trainer-video-pending" aria-label="Trainer video link pending">Video coming soon</span>
                )}
              </div>
              <div className="industry-trainer-video-copy">
                <h3>{trainer.name}</h3>
                <p>{trainer.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import styles from "./SalaryComparison.module.css";

const salaryRoles = [
  {
    label: "General marketing role",
    title: "Marketing Executive",
    salary: "₹2.51 LPA",
    annualSalary: "₹2,50,697/year",
    sampleSize: "174 salary profiles",
    href: "https://www.payscale.com/research/IN/Job=Marketing_Executive/Salary",
    barWidth: "89%",
  },
  {
    label: "Digital marketing role",
    title: "Digital Marketing Specialist",
    salary: "₹2.83 LPA",
    annualSalary: "₹2,82,531/year",
    sampleSize: "29 salary profiles",
    href: "https://www.payscale.com/research/IN/Job=Digital_Marketing_Specialist/Salary",
    barWidth: "100%",
  },
];

export default function SalaryComparison() {
  return (
    <section
      className={`career-outcome dark-theme ${styles.section}`}
      aria-labelledby="salary-comparison-title"
    >
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Career &amp; Salary Snapshot</p>
        <h2 className={styles.title} id="salary-comparison-title">
          See How Digital Skills Can Expand Your Career Options
        </h2>
        <p className={styles.description}>
          Compare reported entry-level pay for general marketing and digital
          marketing roles in India.
        </p>

        <div className={styles.comparison}>
          {salaryRoles.map((role) => (
            <article className={styles.roleCard} key={role.title}>
              <p className={styles.roleLabel}>{role.label}</p>
              <h3 className={styles.roleTitle}>{role.title}</h3>
              <p className={styles.salary}>{role.salary}</p>
              <p className={styles.salaryDetail}>
                {role.annualSalary} average total compensation
              </p>
              <div
                className={styles.barTrack}
                role="img"
                aria-label={`${role.title} average pay comparison`}
              >
                <span
                  className={styles.bar}
                  style={{ width: role.barWidth }}
                />
              </div>
              <p className={styles.sampleSize}>
                Entry-level, under 1 year experience · {role.sampleSize}
              </p>
              <a
                className={styles.source}
                href={role.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                View PayScale source
              </a>
            </article>
          ))}
        </div>

        <p className={styles.disclaimer}>
          These are market-reported role averages, not a guaranteed salary hike
          or a direct before-and-after comparison. Pay varies by experience,
          skills, location, and employer; the source profiles have different
          sample sizes.
        </p>
      </div>
    </section>
  );
}

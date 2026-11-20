import styles from "./SalaryComparison.module.css";

const jobRoles = [
  "Digital Marketing Executive",
  "SEO Executive",
  "Social Media Executive",
  "PPC / Performance Marketing Executive",
  "Content Marketing Executive",
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
          Compare entry-level market averages for a general marketing role and
          a digital marketing role.
        </p>

        <div className={styles.tableScroll}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">Course</th>
                <th scope="col">Before digital specialization</th>
                <th scope="col">After building digital marketing skills</th>
                <th scope="col">Reported average difference</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Digital Marketing Course</th>
                <td>
                  <strong>Marketing Executive</strong>
                  <span>₹2.51 LPA</span>
                  <small>₹2,50,697/year · under 1 year experience · 174 profiles</small>
                  <a
                    href="https://www.payscale.com/research/IN/Job=Marketing_Executive/Salary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PayScale source
                  </a>
                </td>
                <td>
                  <strong>Digital Marketing Specialist</strong>
                  <span>₹2.83 LPA</span>
                  <small>₹2,82,531/year · under 1 year experience · 29 profiles</small>
                  <a
                    href="https://www.payscale.com/research/IN/Job=Digital_Marketing_Specialist/Salary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PayScale source
                  </a>
                </td>
                <td className={styles.difference}>
                  <strong>+₹31,834/year</strong>
                  <span>about 13%</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.jobs}>
          <h3>Roles you can target with relevant skills and a portfolio</h3>
          <ul>
            {jobRoles.map((role) => <li key={role}>{role}</li>)}
          </ul>
        </div>

        <p className={styles.disclaimer}>
          These are reported role averages, not a guaranteed course outcome or
          an individual before-and-after salary comparison. Pay varies by
          experience, skills, location, and employer; source profiles have
          different sample sizes. Job titles are examples, not placement
          guarantees.
        </p>
      </div>
    </section>
  );
}

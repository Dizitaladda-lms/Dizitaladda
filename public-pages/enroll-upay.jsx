import PublicNavbar from "../../components/PublicNavbar.jsx";
import LegacyPageContent from "../../components/LegacyPageContent.jsx";

export const pageMetadata = {"title":"Enroll with PayU | DizitalAdda","description":""};

export default function LegacyPage_enroll_upay() {
  return (
    <>
      <PublicNavbar />
      <LegacyPageContent>
        

<meta charSet="UTF-8" />


<meta name="viewport" content="width=device-width, initial-scale=1.0" />




<link rel="canonical" href="https://dizitaladda.com/enroll-upay" />


<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />


<style dangerouslySetInnerHTML={{__html:"\r\n*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}\r\nbody{font-family:'Inter',sans-serif;min-height:100vh;background:linear-gradient(135deg,#0f0c29,#302b63,#24243e);display:flex;align-items:center;justify-content:center;padding:24px}\r\n.card{background:#fff;border-radius:20px;width:100%;max-width:520px;overflow:hidden;box-shadow:0 25px 60px rgba(0,0,0,.4)}\r\n.card-header{background:linear-gradient(135deg,#14532d,#22c55e);padding:32px 36px}\r\n.card-header h1{color:#fff;font-size:1.5rem;font-weight:800;line-height:1.3}\r\n.card-header p{color:rgba(255,255,255,.85);font-size:.9rem;margin-top:6px}\r\n.course-pill{display:inline-block;background:rgba(255,255,255,.18);color:#fff;font-size:.8rem;font-weight:600;padding:5px 14px;border-radius:20px;margin-top:12px;border:1px solid rgba(255,255,255,.3)}\r\n.card-body{padding:32px 36px}\r\n.form-group{margin-bottom:20px}\r\n.form-group label{display:block;font-size:.85rem;font-weight:600;color:#374151;margin-bottom:6px}\r\n.form-group label span{color:#ef4444}\r\n.form-group input,.form-group select{width:100%;padding:12px 16px;border:2px solid #e5e7eb;border-radius:10px;font-size:.95rem;font-family:'Inter',sans-serif;transition:border-color .2s,box-shadow .2s;outline:none;color:#111827;background:#fff}\r\n.form-group input:focus,.form-group select:focus{border-color:#16a34a;box-shadow:0 0 0 3px rgba(34,197,94,.12)}\r\n.form-group input[readonly]{background:#f9fafb;color:#6b7280}\r\n.amount-wrapper{position:relative}\r\n.amount-wrapper .rupee{position:absolute;left:14px;top:50%;transform:translateY(-50%);font-weight:700;color:#374151}\r\n.amount-wrapper input{padding-left:30px}\r\n.btn-enroll{width:100%;padding:15px;background:linear-gradient(135deg,#166534,#22c55e);color:#fff;font-size:1rem;font-weight:700;border:none;border-radius:12px;cursor:pointer;transition:transform .2s,box-shadow .2s;letter-spacing:.3px;margin-top:8px}\r\n.btn-enroll:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(34,197,94,.35)}\r\n.security-note{display:flex;align-items:center;gap:8px;margin-top:16px;color:#6b7280;font-size:.8rem;justify-content:center}\r\n.security-note svg{width:16px;height:16px;flex-shrink:0}\r\n.back-link{display:block;text-align:center;margin-top:16px;color:#166534;font-size:.85rem;text-decoration:none;font-weight:500}\r\n.back-link:hover{text-decoration:underline}\r\n.error-msg{background:#fef2f2;color:#991b1b;border:1px solid #fecaca;border-radius:8px;padding:12px 14px;font-size:.85rem;margin-bottom:16px;line-height:1.5}\r\n@media(max-width:540px){.card-header,.card-body{padding:24px 20px}.card-header h1{font-size:1.25rem}}\r\n"}} />




<div className="card">
  <div className="card-header">
    <h1>Secure Enrollment with PayU</h1>
    <p>Fill in your details and continue to the PayU payment gateway</p>
    <span className="course-pill">Course: Selected Course</span>
  </div>
  <div className="card-body">
    
    <form method="post" action="/enroll-upay" id="upayForm">
      <div className="form-group">
        <label htmlFor="upay_name">Full Name <span>*</span></label>
        <input type="text" id="upay_name" name="name" value="" placeholder="Enter your full name" required={true} autoComplete="name" />
      </div>
      <div className="form-group">
        <label htmlFor="upay_email">Email Address <span>*</span></label>
        <input type="email" id="upay_email" name="email" value="" placeholder="your@email.com" required={true} autoComplete="email" />
      </div>
      <div className="form-group">
        <label htmlFor="upay_phone">Phone Number <span>*</span></label>
        <input type="tel" id="upay_phone" name="phone" value="" placeholder="10-digit mobile number" maxLength="10" required={true} autoComplete="tel" />
      </div>
      <div className="form-group">
        <label htmlFor="upay_course">Select Course <span>*</span></label>
                  <select id="upay_course" name="course_name" required={true}>
            <option value="">-- Select a Course --</option>
            <optgroup label="Digital Marketing">
              <option value="Digital Marketing for Beginners">Digital Marketing for Beginners</option>
              <option value="Digital Marketing for Professionals">Digital Marketing for Professionals</option>
              <option value="Advanced Digital Marketing">Advanced Digital Marketing</option>
              <option value="Expert in Digital Marketing">Expert in Digital Marketing</option>
            </optgroup>
            <optgroup label="Cyber Security">
              <option value="Foundation in Cyber Security and Ethical Hacking">Foundation in Cyber Security and Ethical Hacking</option>
              <option value="Advanced Cyber Security and Ethical Hacking">Advanced Cyber Security and Ethical Hacking</option>
              <option value="Expert Training in Cyber Security and Ethical Hacking">Expert Training in Cyber Security and Ethical Hacking</option>
              <option value="Digital Forensic and Cyber Investigation">Digital Forensic and Cyber Investigation</option>
              <option value="Expert Training in Bug Bounty">Expert Training in Bug Bounty</option>
            </optgroup>
            <optgroup label="Generative AI">
              <option value="Diploma in Gen AI and Prompt Engineering">Diploma in Gen AI and Prompt Engineering</option>
              <option value="Advanced Gen AI and Prompt Engineering">Advanced Gen AI and Prompt Engineering</option>
              <option value="Diploma in Machine Learning and AI">Diploma in Machine Learning and AI</option>
              <option value="Advanced Machine Learning and AI">Advanced Machine Learning and AI</option>
            </optgroup>
            <optgroup label="Data Science & Analytics">
              <option value="Diploma in Data Science and AI">Diploma in Data Science and AI</option>
              <option value="Advanced Data Science and AI">Advanced Data Science and AI</option>
              <option value="Diploma in Data Analytics and AI">Diploma in Data Analytics and AI</option>
              <option value="Advanced Data Analytics and AI">Advanced Data Analytics and AI</option>
              <option value="Certification in Data Analytics and AI">Certification in Data Analytics and AI</option>
            </optgroup>
            <optgroup label="Web Development">
              <option value="Web Development Course">Web Development Course</option>
              <option value="Graphic Design and Video Editing">Graphic Design and Video Editing</option>
              <option value="Graphic Design and Motion Graphics">Graphic Design and Motion Graphics</option>
            </optgroup>
          </select>
              </div>
      <div className="form-group">
        <label htmlFor="upay_amount">Fee Amount (Rs) <span>*</span></label>
        <div className="amount-wrapper">
          <span className="rupee">Rs</span>
          <input type="number" id="upay_amount" name="amount" value="" placeholder="Enter amount" min="1" max="500000" required={true} />
        </div>
      </div>

      <button className="btn-enroll" id="upaySubmitBtn" type="submit">Continue to PayU Checkout</button>
    </form>

    <div className="security-note">
      <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
      Secure payment powered by PayU
    </div>
    <a className="back-link" href="javascript:history.back()">Go Back</a>
  </div>
</div>


<script dangerouslySetInnerHTML={{__html:"\r\ndocument.getElementById('upayForm').addEventListener('submit', function () {\r\n  var btn = document.getElementById('upaySubmitBtn');\r\n  btn.disabled = true;\r\n  btn.textContent = 'Redirecting to PayU...';\r\n});\r\n"}} />


      </LegacyPageContent>
    </>
  );
}

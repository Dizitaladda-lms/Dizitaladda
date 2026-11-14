import PublicNavbar from "../../components/PublicNavbar.jsx";
import LegacyPageContent from "../../components/LegacyPageContent.jsx";

export const pageMetadata = {"title":"Enroll in Selected Course | DizitalAdda","description":""};

export default function LegacyPage_enroll() {
  return (
    <>
      <PublicNavbar />
      <LegacyPageContent>
        

<meta charSet="UTF-8" />


<meta name="viewport" content="width=device-width, initial-scale=1.0" />




<link rel="canonical" href="https://dizitaladda.com/enroll.php" />


<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />


<script src="https://checkout.razorpay.com/v1/checkout.js" />


<style dangerouslySetInnerHTML={{__html:"\r\n*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}\r\nbody{font-family:'Inter',sans-serif;min-height:100vh;background:linear-gradient(135deg,#0f0c29,#302b63,#24243e);display:flex;align-items:center;justify-content:center;padding:24px}\r\n.card{background:#fff;border-radius:20px;width:100%;max-width:520px;overflow:hidden;box-shadow:0 25px 60px rgba(0,0,0,.4)}\r\n.card-header{background:linear-gradient(135deg,#6d28d9,#9333ea);padding:32px 36px}\r\n.card-header h1{color:#fff;font-size:1.5rem;font-weight:800;line-height:1.3}\r\n.card-header p{color:rgba(255,255,255,.8);font-size:.9rem;margin-top:6px}\r\n.course-pill{display:inline-block;background:rgba(255,255,255,.2);color:#fff;font-size:.8rem;font-weight:600;padding:5px 14px;border-radius:20px;margin-top:12px;border:1px solid rgba(255,255,255,.3)}\r\n.card-body{padding:32px 36px}\r\n.form-group{margin-bottom:20px}\r\n.form-group label{display:block;font-size:.85rem;font-weight:600;color:#374151;margin-bottom:6px}\r\n.form-group label span{color:#ef4444}\r\n.form-group input{width:100%;padding:12px 16px;border:2px solid #e5e7eb;border-radius:10px;font-size:.95rem;font-family:'Inter',sans-serif;transition:border-color .2s,box-shadow .2s;outline:none;color:#111827}\r\n.form-group input:focus{border-color:#7c3aed;box-shadow:0 0 0 3px rgba(124,58,237,.1)}\r\n.form-group input[readonly]{background:#f9fafb;color:#6b7280}\r\n.amount-wrapper{position:relative}\r\n.amount-wrapper .rupee{position:absolute;left:14px;top:50%;transform:translateY(-50%);font-weight:700;color:#374151}\r\n.amount-wrapper input{padding-left:30px}\r\n.btn-enroll{width:100%;padding:15px;background:linear-gradient(135deg,#6d28d9,#9333ea);color:#fff;font-size:1rem;font-weight:700;border:none;border-radius:12px;cursor:pointer;transition:transform .2s,box-shadow .2s;letter-spacing:.3px;margin-top:8px}\r\n.btn-enroll:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(109,40,217,.4)}\r\n.btn-enroll:disabled{opacity:.7;cursor:not-allowed;transform:none}\r\n.security-note{display:flex;align-items:center;gap:8px;margin-top:16px;color:#6b7280;font-size:.8rem;justify-content:center}\r\n.security-note svg{width:16px;height:16px;flex-shrink:0}\r\n.back-link{display:block;text-align:center;margin-top:16px;color:#7c3aed;font-size:.85rem;text-decoration:none;font-weight:500}\r\n.back-link:hover{text-decoration:underline}\r\n.error-msg{background:#fef2f2;color:#991b1b;border:1px solid #fecaca;border-radius:8px;padding:12px 14px;font-size:.85rem;margin-bottom:16px;display:none;line-height:1.5}\r\n@media(max-width:540px){.card-header,.card-body{padding:24px 20px}.card-header h1{font-size:1.25rem}}\r\n"}} />




<div className="card">
  <div className="card-header">
    <h1>🎓 Secure Enrollment</h1>
    <p>Complete your details to begin your learning journey</p>
    <span className="course-pill">📚 Selected Course</span>
  </div>
  <div className="card-body">
    <div id="errorMsg" className="error-msg"></div>

    <div className="form-group">
      <label>Full Name <span>*</span></label>
      <input type="text" id="enroll_name" placeholder="Enter your full name" required={true} autoComplete="name" />
    </div>
    <div className="form-group">
      <label>Email Address <span>*</span></label>
      <input type="email" id="enroll_email" placeholder="your@email.com" required={true} autoComplete="email" />
    </div>
    <div className="form-group">
      <label>Phone Number <span>*</span></label>
      <input type="tel" id="enroll_phone" placeholder="10-digit mobile number" maxLength="10" required={true} autoComplete="tel" />
    </div>
    <div className="form-group">
      <label>Select Course <span>*</span></label>
              <select id="enroll_course_select" required={true} style={{"width":"100%","padding":"12px 16px","border":"2px solid #e5e7eb","borderRadius":"10px","fontSize":".95rem","fontFamily":"'Inter',sans-serif","outline":"none","color":"#111827","background":"#fff","transition":"border-color .2s,box-shadow .2s"}}>
          <option value="">-- Select a Course --</option>
          <optgroup label="Digital Marketing">
            <option>Digital Marketing for Beginners</option>
            <option>Digital Marketing for Professionals</option>
            <option>Advanced Digital Marketing</option>
            <option>Expert in Digital Marketing</option>
          </optgroup>
          <optgroup label="Cyber Security">
            <option>Foundation in Cyber Security and Ethical Hacking</option>
            <option>Advanced Cyber Security and Ethical Hacking</option>
            <option>Expert Training in Cyber Security and Ethical Hacking</option>
            <option>Digital Forensic and Cyber Investigation</option>
            <option>Expert Training in Bug Bounty</option>
          </optgroup>
          <optgroup label="Generative AI">
            <option>Diploma in Gen AI and Prompt Engineering</option>
            <option>Advanced Gen AI and Prompt Engineering</option>
            <option>Diploma in Machine Learning and AI</option>
            <option>Advanced Machine Learning and AI</option>
          </optgroup>
          <optgroup label="Data Science & Analytics">
            <option>Diploma in Data Science and AI</option>
            <option>Advanced Data Science and AI</option>
            <option>Diploma in Data Analytics and AI</option>
            <option>Advanced Data Analytics and AI</option>
            <option>Certification in Data Analytics and AI</option>
          </optgroup>
          <optgroup label="Web Development">
            <option>Web Development Course</option>
            <option>Graphic Design and Video Editing</option>
            <option>Graphic Design and Motion Graphics</option>
          </optgroup>
        </select>
          </div>
    <div className="form-group">
      <label>Fee Amount (₹) <span>*</span></label>
      <div className="amount-wrapper">
        <span className="rupee">₹</span>
        <input type="number" id="enroll_amount" placeholder="Enter amount" min="1" max="500000" required={true} />
      </div>
    </div>

    <button className="btn-enroll" id="enrollBtn" type="button" data-legacy-onclick={"startPayment()"}>
      🔒 Proceed to Secure Payment
    </button>

    <div className="security-note">
      <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
      100% Secure payment powered by Razorpay
    </div>
    <a className="back-link" href="javascript:history.back()">← Go Back</a>
  </div>
</div>



{/*  Hidden form posted to success page after Razorpay confirms payment  */}


<form method="post" action="/enroll-success.php" id="paySuccessForm" style={{"display":"none"}}>
  <input type="hidden" name="rzp_payment_id" id="rzp_payment_id" />
  <input type="hidden" name="rzp_order_id" id="rzp_order_id" />
  <input type="hidden" name="rzp_signature" id="rzp_signature" />
  <input type="hidden" name="name" id="f_name" />
  <input type="hidden" name="email" id="f_email" />
  <input type="hidden" name="phone" id="f_phone" />
  <input type="hidden" name="course_name" id="f_course" />
  <input type="hidden" name="amount" id="f_amount" />
</form>



<script dangerouslySetInnerHTML={{__html:"\r\nvar enrollCourseName = \"Selected Course\";\r\n// Ajax URL points to THIS file with ?ajax=order — no separate file, no redirect\r\nvar orderUrl = window.location.pathname + '?ajax=order';\r\n\r\nfunction showError(msg) {\r\n  var el = document.getElementById('errorMsg');\r\n  el.textContent = msg;\r\n  el.style.display = 'block';\r\n  el.scrollIntoView({ behavior: 'smooth', block: 'center' });\r\n}\r\n\r\nfunction startPayment() {\r\n  var name   = document.getElementById('enroll_name').value.trim();\r\n  var email  = document.getElementById('enroll_email').value.trim();\r\n  var phone  = document.getElementById('enroll_phone').value.trim();\r\n  var amount = document.getElementById('enroll_amount').value.trim();\r\n\r\n  // If dropdown is shown (no pre-selected course), read from it\r\n  var selectEl = document.getElementById('enroll_course_select');\r\n  if (selectEl) {\r\n    enrollCourseName = selectEl.value;\r\n    if (!enrollCourseName) { showError('Please select a course.'); return; }\r\n  }\r\n\r\n  document.getElementById('errorMsg').style.display = 'none';\r\n\r\n  if (!name)                             { showError('Please enter your full name.'); return; }\r\n  if (!email || !email.includes('@'))    { showError('Please enter a valid email address.'); return; }\r\n  if (!/^[6-9][0-9]{9}$/.test(phone))   { showError('Please enter a valid 10-digit phone number.'); return; }\r\n  if (!amount || isNaN(amount) || +amount < 1) { showError('Please enter a valid amount.'); return; }\r\n\r\n  var btn = document.getElementById('enrollBtn');\r\n  btn.disabled = true;\r\n  btn.textContent = '⏳ Creating order...';\r\n\r\n  var formData = new FormData();\r\n  formData.append('name',        name);\r\n  formData.append('email',       email);\r\n  formData.append('phone',       phone);\r\n  formData.append('course_name', enrollCourseName);\r\n  formData.append('amount',      amount);\r\n\r\n  fetch(orderUrl, { method: 'POST', body: formData })\r\n    .then(function(r) { return r.json(); })\r\n    .then(function(data) {\r\n      if (data.error) {\r\n        showError('⚠️ ' + data.error);\r\n        btn.disabled = false;\r\n        btn.textContent = '🔒 Proceed to Secure Payment';\r\n        return;\r\n      }\r\n\r\n      var rzp = new Razorpay({\r\n        key:         data.key_id,\r\n        amount:      data.amount,\r\n        currency:    'INR',\r\n        name:        'DizitalAdda',\r\n        description: data.course_name,\r\n        image:       'https://dizitaladda.com/assets/img/logo.webp',\r\n        order_id:    data.order_id,\r\n        prefill:     { name: name, email: email, contact: phone },\r\n        theme:       { color: '#7c3aed' },\r\n        handler: function(response) {\r\n          document.getElementById('rzp_payment_id').value = response.razorpay_payment_id || '';\r\n          document.getElementById('rzp_order_id').value   = response.razorpay_order_id   || '';\r\n          document.getElementById('rzp_signature').value  = response.razorpay_signature  || '';\r\n          document.getElementById('f_name').value    = name;\r\n          document.getElementById('f_email').value   = email;\r\n          document.getElementById('f_phone').value   = phone;\r\n          document.getElementById('f_course').value  = enrollCourseName;\r\n          document.getElementById('f_amount').value  = data.txn_amount;\r\n          document.getElementById('paySuccessForm').submit();\r\n        },\r\n        modal: {\r\n          ondismiss: function() {\r\n            btn.disabled = false;\r\n            btn.textContent = '🔒 Proceed to Secure Payment';\r\n          }\r\n        }\r\n      });\r\n\r\n      rzp.on('payment.failed', function(r) {\r\n        var msg = 'Payment failed.';\r\n        if (r && r.error && r.error.description) { msg += ' ' + r.error.description; }\r\n        showError(msg);\r\n        btn.disabled = false;\r\n        btn.textContent = '🔒 Proceed to Secure Payment';\r\n      });\r\n\r\n      rzp.open();\r\n    })\r\n    .catch(function() {\r\n      showError('Network error. Please check your connection and try again.');\r\n      btn.disabled = false;\r\n      btn.textContent = '🔒 Proceed to Secure Payment';\r\n    });\r\n}\r\n"}} />


      </LegacyPageContent>
    </>
  );
}

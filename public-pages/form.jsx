import PublicNavbar from "../components/PublicNavbar.jsx";
import LegacyPageContent from "../components/LegacyPageContent.jsx";

export const pageMetadata = {"title":"Dynamic Inquiry Form","description":""};

export default function LegacyPage_form() {
  return (
    <>
      <PublicNavbar />
      <LegacyPageContent>
        

<meta charSet="UTF-8" />


<meta name="viewport" content="width=device-width, initial-scale=1.0" />




{/*  Bootstrap 5.2 CSS and Bootstrap Icons  */}


<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous" />


<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css" />



{/* noindex teg */}


<meta name="robots" content="noindex" />



<style dangerouslySetInnerHTML={{__html:"\r\n  .inquiry-form-container {\r\n    position: fixed;\r\n    right: 20px;\r\n    bottom: 20px;\r\n    width: 320px;\r\n    max-width: 100%;\r\n    z-index: 1000;\r\n    display: none;\r\n    background: #fff;\r\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\r\n    border-radius: 8px;\r\n    overflow: hidden;\r\n  }\r\n  .form-toggle {\r\n    position: fixed;\r\n    right: 20px;\r\n    bottom: 20px;\r\n    background-color: #007bff;\r\n    color: #fff;\r\n    border: none;\r\n    border-radius: 50%;\r\n    padding: 10px 15px;\r\n    cursor: pointer;\r\n    z-index: 1001;\r\n  }\r\n  .inquiry-form-header {\r\n    background: #007bff;\r\n    color: #fff;\r\n    padding: 10px;\r\n    text-align: center;\r\n  }\r\n  /* Transition for icon */\r\n  #toggleIcon {\r\n    transition: transform 0.3s ease;\r\n  }\r\n"}} />




{/*  Form Toggle Button  */}


<button id="formToggle" className="form-toggle">
  <i className="bi bi-chat-square-text" id="toggleIcon"></i>
</button>



{/*  Inquiry Form  */}


<div id="inquiryForm" className="inquiry-form-container">
  <div className="inquiry-form-header">Enquiry Form</div>
  <div className="p-3">
    <form id="dynamicForm" name="dynamicForm">
      <div className="mb-3">
        <input type="text" className="form-control" id="name" name="name" placeholder="Your Name" required={true} />
      </div>
      <div className="mb-3">
        <input type="tel" className="form-control" id="phone" name="phone" placeholder="Your Phone" required={true} />
      </div>
      <div className="mb-3">
        <input type="email" className="form-control" id="email" name="email" placeholder="Your Email" required={true} />
      </div>
      <div className="mb-3">
        <select className="form-select" id="course" name="course" required={true}>
          <option value="" disabled={true} selected={true}>Select Course</option>
          <option value="Digital-Marketing-for-Professional">Digital Marketing for Professional</option>
          <option value="Expert-in-digital-marketing">Expert in digital marketing</option>
          <option value="Advance-digital-marketing">Advance digital marketing</option>
          <option value="Graphic-design-&-professional-Video-Editing">Graphic design &amp; professional Video Editing</option>
          <option value="Graphic-design-and-Motion-Graphics">Graphic design and Motion Graphics</option>
          <option value="Web-Development-Course">Web Development Course</option>
          <option value="UI/UX-Design">UI/UX Design</option>
          <option value="Diploma-in-Computer-software-and-Technology">Diploma in Computer software and Technology</option>
        </select>
      </div>
      <div className="mb-3">
        <select className="form-select" id="class_mode" name="class_mode" required={true}>
          <option value="" disabled={true} selected={true}>Class Mode</option>
          <option value="Online">Online</option>
          <option value="Offline">Offline</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary w-100">Submit</button>
    </form>
  </div>
</div>



{/*  Bootstrap 5.2 JS Bundle (with Popper) and jQuery  */}


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossOrigin="anonymous" />


<script src="https://code.jquery.com/jquery-3.6.0.min.js" />



<script dangerouslySetInnerHTML={{__html:"\r\n\r\n  // JavaScript to Auto-Click the Form Toggle Button\r\n  window.addEventListener('load', function() {\r\n    const formToggle = document.getElementById('inquiryForm');\r\n    formToggle.click();\r\n  });\r\n\r\n  // Fixed small form in the right bottom corner\r\n  $(document).ready(function() {\r\n    const formContainer = $('#inquiryForm');\r\n    const formToggle = $('#formToggle');\r\n    const toggleIcon = $('#toggleIcon');\r\n\r\n    // Automatically show the form after 3 seconds on page load\r\n    setTimeout(() => {\r\n      formContainer.show('slide');\r\n    }, 3000);\r\n\r\n    // Toggle form display and icon change\r\n    formToggle.on('click', () => {\r\n      formContainer.toggle('slide');\r\n\r\n      // Change icon between chat and close\r\n      if (toggleIcon.hasClass('bi-chat-square-text')) {\r\n        toggleIcon.removeClass('bi-chat-square-text').addClass('bi-x-lg');\r\n        toggleIcon.css('transform', 'rotate(180deg)');\r\n      } else {\r\n        toggleIcon.removeClass('bi-x-lg').addClass('bi-chat-square-text');\r\n        toggleIcon.css('transform', 'rotate(0deg)');\r\n      }\r\n    });\r\n  });\r\n\r\n  // Google Apps Script form submission\r\n  const scriptURL = '/api/forms/book-demo'\r\n  const form = document.forms['dynamicForm']\r\n\r\n  form.addEventListener('submit', e => {\r\n    e.preventDefault()\r\n    fetch(scriptURL, { method: 'POST', body: new FormData(form)})\r\n      .then(response => console.log('Success!', response))\r\n      .catch(error => console.error('Error!', error.message))\r\n  })\r\n\r\n"}} />



<script src="/common-lead-form.js" defer="" />


      </LegacyPageContent>
    </>
  );
}

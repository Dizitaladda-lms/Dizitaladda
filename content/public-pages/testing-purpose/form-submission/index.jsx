import PublicNavbar from "../../../../components/PublicNavbar.jsx";
import LegacyPageContent from "../../../../components/LegacyPageContent.jsx";

export const pageMetadata = {"title":"Course Registration","description":""};

export default function LegacyPage_testing_purpose_form_submission_index() {
  return (
    <>
      <PublicNavbar />
      <LegacyPageContent>
        
    

    
<link rel="stylesheet" href="assets/css/styles.css" />

    
<script src="assets/js/script.js" defer="" />



    
<h1>Register for a Course</h1>

    
<form className="courseForm">
        <input type="text" name="name" placeholder="Your Name" required={true} />
        <input type="text" name="phone" placeholder="Your Phone" required={true} />
        <input type="email" name="email" placeholder="Your Email" required={true} />
        <select name="course" required={true}>
            <option value="">Select Course</option>
            <option value="course1">Advance Digital Marketing</option>
            <option value="course2">Digital Marketing for Professionals</option>
            <option value="course3">Expert Digital Marketing</option>
        </select>
        <button type="submit">Submit</button>
        <div className="thankYouMessage"></div>
    </form>


      </LegacyPageContent>
    </>
  );
}

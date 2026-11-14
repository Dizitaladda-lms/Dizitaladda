export const metadata = { title: "Check Scholarship Eligibility" };

export default function ScholarshipEligibilityPage() {
  return <><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" /><main className="container mt-5"><h2 className="text-center">Check Scholarship Eligibility</h2><form action="/api/testing-purpose/scholarship/check_eligibility" method="post"><div className="mb-3"><label htmlFor="phone_number" className="form-label">Enter Your Phone Number</label><input type="text" className="form-control" id="phone_number" name="phone_number" required /></div><button type="submit" className="btn btn-primary">Check Eligibility</button></form><p className="mt-4">New applicant? <a href="/testing-purpose/shocholar/register_scholarship">Apply for a scholarship</a>.</p></main></>;
}

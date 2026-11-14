document.querySelectorAll(".courseForm").forEach((form) => {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const message = form.querySelector(".thankYouMessage");
    const button = form.querySelector("button[type=submit], button:not([type])");
    const originalText = button?.textContent;
    if (button) { button.disabled = true; button.textContent = "Submitting…"; }
    if (message) message.textContent = "";
    try {
      const response = await fetch("/api/testing-purpose/submissions", { method: "POST", body: new FormData(form) });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.message || "Could not submit the form.");
      if (message) { message.textContent = result.message; message.style.color = "#137333"; }
      form.reset();
    } catch (error) {
      if (message) { message.textContent = error.message || "Could not submit the form. Please try again."; message.style.color = "#b42318"; }
    } finally {
      if (button) { button.disabled = false; button.textContent = originalText; }
    }
  });
});

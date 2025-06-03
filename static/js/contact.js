document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      role: formData.getAll("role"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      alert("Message sent!");
      form.reset();
    } catch (err) {
      console.error("❌ Failed to submit form:", err);
      alert("Failed to send message. Please try again.");
    }
  });
});

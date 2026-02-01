console.log("JS loaded ✅");

// --- Dark Mode ---
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// --- Form Validation + Preview ---
const form = document.getElementById("travelForm");
const result = document.getElementById("formResult");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const country = document.getElementById("country").value;
  const message = document.getElementById("message").value.trim();

  // reset styles
  result.classList.remove("error", "success");

  if (!name || !country || !message) {
    result.textContent = "❌ Bitte fülle alle Felder aus.";
    result.classList.add("error");
    return;
  }

  result.innerHTML = `
    <h3>✨ Danke, ${name}!</h3>
    <p><b>Traumreiseziel:</b> ${country}</p>
    <p><b>Grund:</b> ${message}</p>
  `;
  result.classList.add("success");

  form.reset();
});
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((sec) => {
    const top = sec.offsetTop - 140;
    if (window.scrollY >= top) current = sec.id;
  });

  navLinks.forEach((a) => {
    a.classList.toggle("active", a.getAttribute("href") === `#${current}`);
  });
});
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("show", window.scrollY > 300);
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

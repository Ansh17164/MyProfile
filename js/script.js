const siteConfig = {
  ownerName: "Ansh Sharma",
  email: "anshsharma0505@gmail.com",
  phone: "7666195585",
  portfolioPdf: "assets/Ansh_Sharma_CSE_2026.pdf",
  gaMeasurementId: "G-XXXXXXXXXX",
  emailJs: {
    publicKey: "Wk_1SpZumNUrYwz6X",
    serviceId: "service_9ln6lfg",
    templateId: "template_0sjybb8",
    portfolioTemplateId: "YOUR_EMAILJS_PORTFOLIO_TEMPLATE_ID"
  },
  apiEndpoint: "https://your-backend.example.com/api/leads"
};

function setupAnalytics() {
  if (typeof window.gtag === "function") return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(){ window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", siteConfig.gaMeasurementId);

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${siteConfig.gaMeasurementId}`;
  document.head.appendChild(script);
}

const navLinks = [
  ["Home", "index.html"],
  ["About", "about.html"],
  ["Services", "services.html"],
  ["Portfolio", "portfolio.html"],
  ["Contact", "contact.html"]
];

/* ==========================================================================
   UPDATED PROJECT DETAILS ARRAY (ORDERED PER REQUEST)
   ========================================================================== */
const projectDetails = {
  nutragraph: {
    title: "NutraGraph - Health-Tech Optimization Platform",
    summary: "An advanced optimization and diet planning engine built with FastAPI, PostgreSQL, and the PuLP library. Features mathematical linear programming models to process seasonal metrics and a Retrieval-Augmented Generation (RAG) context engine.",
    tech: "FastAPI, PostgreSQL, PuLP Optimization, RAG Model Integration, Python",
    video: "https://www.youtube.com/embed/placeholder1" // Replace with your showcase video URL if available
  },
  trainTicket: {
    title: "Train Ticket Reservation System",
    summary: "A robust, multi-threaded backend architectural solution managing ticket availability matrices, reservation states, user verification loops, and secure transactional query blocks.",
    tech: "Java, Relational Database Frameworks, Multi-threading System Logic",
    video: "https://www.youtube.com/embed/placeholder2" // Replace with your showcase video URL if available
  },
  business: {
    title: "Business Enquiry Website",
    summary: "A conversion-focused multi-page website with strong calls to action, service highlights, testimonials, SEO metadata, and responsive design.",
    tech: "HTML5, CSS3, Vanilla JavaScript, SEO, GA4 events",
    video: "https://www.youtube.com/embed/XufoP80wBgc?si=-MV5CB14uourfHQI"
  },
  python: {
    title: "Python Student Manager",
    summary: "A Python application concept using object-oriented structure, validation logic, and organized record handling for academic or admin workflows.",
    tech: "Python, OOP, Validation, File Handling",
    video: "https://www.youtube.com/embed/6e8IqXVZUBk?si=QfU2zV4j6FhjFGz9"
  },
  sql: {
    title: "SQL Inventory Database",
    summary: "A normalized relational database concept for inventory, suppliers, orders, and reporting queries.",
    tech: "SQL, ER Modeling, Normalization, Joins",
    video: "https://www.youtube.com/embed/ePoEbddIe3c?si=UFysC6AjT5mYPZKc"
  }
};

function trackEvent(eventName, params = {}) {
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}

function currentPage() {
  const page = window.location.pathname.split("/").pop();
  return page || "index.html";
}

/* ==========================================================================
   ADDED THEME SYSTEM CONTROLLER LOGIC
   ========================================================================== */
function setupThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle");
  if (!toggleBtn) return;

  const initialTheme = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", initialTheme);
  toggleBtn.innerHTML = initialTheme === "light" ? "🌙" : "☀️";

  toggleBtn.addEventListener("click", () => {
    const activeTheme = document.documentElement.getAttribute("data-theme");
    if (activeTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      toggleBtn.innerHTML = "🌙";
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      toggleBtn.innerHTML = "☀️";
    }
  });
}

function renderHeader() {
  const mount = document.querySelector("[data-header]");
  if (!mount) return;

  const activePage = currentPage();
  const links = navLinks.map(([label, href]) => {
    const active = activePage === href ? "active" : "";
    return `<li><a class="${active}" href="${href}">${label}</a></li>`;
  }).join("");

  /* Re-engineered HTML string to explicitly group the action items together */
  mount.innerHTML = `
    <header class="site-header">
      <div class="container nav-wrap">
        <a class="brand" href="index.html" aria-label="Ansh Sharma home">
          <span class="brand-mark">
            <img src="images/ansh-sharma-profile.png" alt="" width="42" height="42" class="brand-avatar">
          </span>
          <div class="brand-text">
            <span class="brand-name">Ansh Sharma</span>
            <span class="brand-subtitle">Full Stack Developer</span>
          </div>
        </a>
        <nav aria-label="Primary navigation" style="display: flex; align-items: center; gap: 1rem; margin-left: auto;">
          <ul class="nav-list">${links}</ul>
          <button id="theme-toggle" class="theme-toggle-btn" type="button" aria-label="Toggle visual theme" style="cursor: pointer; background: none; border: none; font-size: 1.3rem; padding: 0.25rem;">☀️</button>
          <button class="nav-toggle" type="button" aria-label="Open navigation menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </nav>
      </div>
    </header>
  `;

  const toggle = mount.querySelector(".nav-toggle");
  const menu = mount.querySelector(".nav-list");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  // Force system initialization of the theme elements instantly
  setupThemeToggle();
}

function renderFooter() {
  const mount = document.querySelector("[data-footer]");
  if (!mount) return;

  mount.innerHTML = `
    <footer class="site-footer">
      <div class="container footer-grid">
        <section>
          <h2>Ansh Sharma</h2>
          <p>Full-Stack Developer and Systems Engineer producing modular backend architectures, automated data scaling processing systems, and professional corporate applications.</p>
        </section>
        <section>
          <h3>Quick Links</h3>
          <div class="footer-links">
            ${navLinks.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}
          </div>
        </section>
        <section>
          <h3>Contact Information</h3>
          <p>${siteConfig.email}</p>
          <p>${siteConfig.phone}</p>
          
          <div class="social-links" style="display: flex; flex-direction: row; gap: 1rem; margin-top: 1rem; align-items: center;">

            <a href="https://github.com/Ansh17164" target="_blank" rel="noopener"aria-label="GitHub Profile" style="display: inline-block; color: inherit; transition: color 0.2s ease;">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" style="display: block;">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
              </svg></a>

            <a href="https://www.linkedin.com/in/ansh-sharma-b99789291?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener"aria-label="LinkedIn Profile" style="display: inline-block; color: inherit; transition: color 0.2s ease;">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" style="display: block;">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg></a>
              
            <a href="mailto:${siteConfig.email}" aria-label="Send Email" style="display: inline-block; color: inherit; transition: color 0.2s ease;">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" style="display: block;">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg></a>
          </div>
        </section>
      </div>
      <div class="container footer-bottom">
        <p>&copy; 2026 All Rights Reserved | engineered by Ansh Sharma</p>
      </div>
    </footer>
  `;
}

function setupTracking() {
  document.addEventListener("click", (event) => {
    const hireTarget = event.target.closest("[data-track='hire_me']");
    const portfolioTarget = event.target.closest("[data-track='portfolio_download']");
    const serviceTarget = event.target.closest("[data-service-enquiry]");

    if (hireTarget) trackEvent("hire_me_button_click");
    if (portfolioTarget) trackEvent("portfolio_download");
    if (serviceTarget) {
      trackEvent("service_enquiry_click", {
        service_name: serviceTarget.dataset.serviceEnquiry
      });
    }
  });
}

function setupProjectModal() {
  const modal = document.getElementById("projectModal");
  const content = document.getElementById("modalContent");
  if (!modal || !content) return;

  document.querySelectorAll("[data-project]").forEach((button) => {
    button.addEventListener("click", () => {
      const project = projectDetails[button.dataset.project];
      if (!project) return;

      content.innerHTML = `
        <h2 id="modalTitle">${project.title}</h2>
        <p>${project.summary}</p>
        <p><strong>Technologies Used:</strong> ${project.tech}</p>
        <div class="video-frame">
          <iframe width="560" height="315" src="${project.video}" title="${project.title} video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe>
        </div>
      `;

      if (typeof modal.showModal === "function") {
        modal.showModal();
      } else {
        modal.setAttribute("open", "");
      }
    });
  });

  document.querySelector("[data-close-modal]")?.addEventListener("click", () => modal.close());
  modal.addEventListener("click", (event) => {
    if (event.target === modal) modal.close();
  });
}

function setFieldError(fieldName, message) {
  const error = document.querySelector(`[data-error-for="${fieldName}"]`);
  if (error) error.textContent = message;
}

function clearErrors() {
  document.querySelectorAll(".field-error").forEach((error) => {
    error.textContent = "";
  });
}

function showFormMessage(type, message) {
  const box = document.getElementById("formMessage");
  if (!box) return;
  box.className = `form-message show ${type}`;
  box.textContent = message;
}

function validateLead(data) {
  const errors = {};
  const namePattern = /^[A-Za-z ]+$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^[6-9]\d{9}$/;

  const trimmedName = data.fullName.trim();
  const nameParts = trimmedName.split(/\s+/).filter(part => part.length > 0);

  if (!trimmedName) {
    errors.fullName = "Name cannot be empty.";
  } else if (!namePattern.test(trimmedName)) {
    errors.fullName = "Name can contain letters and spaces only.";
  } else if (nameParts.length < 2) {
    errors.fullName = "Please enter both your first name and last name.";
  }

  if (!emailPattern.test(data.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!phonePattern.test(data.phone.trim())) {
    errors.phone = "Phone number must be 10 digits and start with 6, 7, 8, or 9.";
  }
  
  if (!data.service) errors.service = "Please select a service.";
  if (!data.budget.trim() || Number.isNaN(Number(data.budget))) errors.budget = "Budget must be numeric.";
  if (data.description.trim().length < 20) errors.description = "Project description must be at least 20 characters.";
  if (!data.terms) errors.terms = "You must accept the terms and conditions.";

  return errors;
}

async function sendLead(leadData) {
  console.info("Generated lead data object:", leadData);

  const emailJsReady = Boolean(
    window.emailjs &&
    !siteConfig.emailJs.publicKey.startsWith("YOUR_")
  );

  if (emailJsReady) {
    window.emailjs.init(siteConfig.emailJs.publicKey);
    await window.emailjs.send(siteConfig.emailJs.serviceId, siteConfig.emailJs.templateId, leadData);

    if (leadData.portfolioRequest) {
      await window.emailjs.send(siteConfig.emailJs.serviceId, siteConfig.emailJs.portfolioTemplateId, {
        to_email: leadData.email,
        portfolio_pdf_url: new URL(siteConfig.portfolioPdf, window.location.href).href
      });
    }
    return;
  }

  if (!siteConfig.apiEndpoint.includes("your-backend.example.com")) {
    await fetch(siteConfig.apiEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(leadData)
    });
  }
}

function setupContactForm() {
  const form = document.getElementById("enquiryForm");
  if (!form) return;

  const params = new URLSearchParams(window.location.search);
  const selectedService = params.get("service");
  if (selectedService) form.service.value = selectedService;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    clearErrors();

    const formData = new FormData(form);
    const leadData = {
      fullName: String(formData.get("fullName") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      company: String(formData.get("company") || ""),
      service: String(formData.get("service") || ""),
      budget: String(formData.get("budget") || ""),
      description: String(formData.get("description") || ""),
      portfolioRequest: formData.get("portfolioRequest") === "on",
      terms: formData.get("terms") === "on",
      portfolioPdf: new URL(siteConfig.portfolioPdf, window.location.href).href,
      submittedAt: new Date().toISOString()
    };

    const errors = validateLead(leadData);
    Object.entries(errors).forEach(([field, message]) => setFieldError(field, message));

    if (Object.keys(errors).length > 0) {
      showFormMessage("error", "Please fix the highlighted fields before submitting.");
      return;
    }

    try {
      await sendLead(leadData);
      trackEvent("contact_form_submission", {
        service_name: leadData.service,
        portfolio_requested: leadData.portfolioRequest
      });
      if (leadData.portfolioRequest) trackEvent("portfolio_download");
      showFormMessage("success", "Thank you. Your project brief has been sent successfully straight to my engineering inbox!");
      form.reset();
    } catch (error) {
      console.error(error);
      showFormMessage("error", "The form data is verified, but backend transmission requires active integration configurations in script.js.");
    }
  });
}

function animateCounter(element) {
  const target = Number(element.dataset.count || 0);
  const duration = 1200;
  const startTime = performance.now();

  function update(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = String(Math.round(target * eased));

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  element.textContent = "0";
  requestAnimationFrame(update);
}

function initHeroTypewriter() {
  const targetElement = document.getElementById("typewriter-text");
  if (!targetElement) return;

  const words = ["Full Stack Developer", "Backend Developer", "Automation Engineer", "Problem Solver"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      targetElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50; // Delete faster than typing
    } else {
      targetElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 120; // Natural pacing speed
    }

    if (!isDeleting && charIndex === currentWord.length) {
      typingSpeed = 2000; // Pause at full word completion
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typingSpeed = 400; // Brief pause before typing next role string
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

// Fire the typewriter system immediately upon document layout lifecycle loading
document.addEventListener("DOMContentLoaded", initHeroTypewriter);
// Fallback initialization rule check for multi-page dynamic execution
if (document.readyState === "interactive" || document.readyState === "complete") {
  initHeroTypewriter();
}

function setupCounters() {
  const section = document.querySelector("[data-counter-section]");
  if (!section) return;

  const counters = [...section.querySelectorAll("[data-count]")];
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        counters.forEach(animateCounter);
      }
    });
  }, { threshold: 0.35 });

  observer.observe(section);
}

setupAnalytics();
renderHeader();
renderFooter();
setupTracking();
setupProjectModal();
setupContactForm();
setupCounters();
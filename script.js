const aboutItems = [
  {
    title: "Software Development",
    description: "Bridging the gap between creativity and technology, building innovative solutions and experiences as a junior CS major at UT Austin."
  },
  {
    title: "Music Production",
    description: "Creating music inspired by contemporary R&B, pop, and electronic music using FL Studio. Check out my creations on YouTube!"
  },
  {
    title: "Game Design",
    description: "Working alongside Turashue Games on a romantic comedy game, handling both game design and future soundtrack composition."
  }
];

const projectItems = [
  {
    title: "Portfolio Website",
    category: "Software Development",
    description: "A portfolio website built with HTML, CSS, and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript", "Web Development"],
    image: "https://plus.unsplash.com/premium_photo-1683309565422-77818a287060?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydGZvbGlvJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    title: "Maxwell's Dream Diary",
    category: "Game",
    description: "Final project of CS 354P class at UT Austin: a horror game drawing inspiration from the retro, low-poly, PS2 era of games. I worked largely on the UI and interactable cabinets feature of the game.",
    tags: ["Game Design", "Game User Interface", "C++", "Data Structures"],
    image: "images/maxwell.png"
  },
  // {
  //   title: "Sweet Confectionary",
  //   category: "Game Design & Soundtrack",
  //   description: "An upcoming game featuring whimsical candy-themed gameplay. Responsible for both game design mechanics and original soundtrack composition.",
  //   tags: ["Game Design", "Music Composition", "Sound Design"],
  //   image: "https://images.unsplash.com/photo-1614088236377-2789569339d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2VldCUyMGNhbmR5JTIwY29uZmVjdGlvbmVyeSUyMGNvbG9yZnVsfGVufDF8fHx8MTc3NTUxNDUyOXww&ixlib=rb-4.1.0&q=80&w=1080"
  // },
  {
    title: "CelestiCare",
    category: "Electronic Health Record (EHR) System Prototype",
    description: "An intuitive approach to an Electronic Health Record (EHR) system prototype built using React, allowing users to manage and track patient information, medical history, and appointments.",
    tags: ["React", "EHR System", "Healthcare", "UI/UX Design"],
    image: "images/celesticare.png"
  },
  {
    title: "QuickMaths",
    category: "Chrome Extension",
    description: "A Chrome extension that helps users solve math problems quickly and easily.",
    tags: ["JavaScript", "Chrome Extension", "Math", "UI/UX Design", "API Integration", "Chrome Extension"],
    image: "images/qm.jpg"
  },
  {
    title: "Music Collection",
    category: "Music Production",
    description: "I produce, mix, and publish original music inspired by modern pop, electronic music, and contemporary R&B elements with a focus on sound design and composition.",
    tags: ["FL Studio", "Music Production", "Beat Making"],
    image: "https://i.ytimg.com/vi/S6PSYkXmKnY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBdnRQ8hEKqDKwvlQ9HWU8Q3GRXjg",
    link: "https://www.youtube.com/@emanuelondii"
  }
  // {
  //   title: "CS Projects",
  //   category: "Software Development",
  //   description: "Various computer science projects from UT Austin coursework, including algorithms, data structures, and full-stack applications.",
  //   tags: ["Java", "Python", "C++", "Data Structures"],
  //   image: "https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHByb2dyYW1taW5nJTIwY29kaW5nJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3NTUxNDUyN3ww&ixlib=rb-4.1.0&q=80&w=1080"
  // },

];

const skillCategories = [
  {
    title: "Programming & Development",
    skills: [
      { name: "JavaScript/TypeScript", level: 85 },
      { name: "React", level: 70 },
      { name: "Python", level: 80 },
      { name: "Java", level: 80 },
      { name: "C++", level: 65 },
      { name: "HTML/CSS", level: 90 }
    ]
  },
  {
    title: "Music Production",
    skills: [
      { name: "FL Studio", level: 90},
      // { name: "Beat Making", level: 80 },
      { name: "Music Theory", level: 90 },
      { name: "Sound Design", level: 75 },
      { name: "Mixing", level: 70 },
      { name: "Composition", level: 90 }
    ]
  },
  {
    title: "Game Design",
    skills: [
      { name: "Game Mechanics", level: 75 },
      { name: "Level Design", level: 70 },
      { name: "Unity", level: 65 },
      { name: "Unreal Engine 5", level: 65 },
      // { name: "Game Audio", level: 80 },
      // { name: "Storytelling", level: 75 },
      { name: "Prototyping", level: 80 }
    ]
  }
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/ondoyemanuel" },
  { label: "GitLab", href: "https://gitlab.com/emanuelondoy" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/emanuel-ondoy/" },
  { label: "YouTube", href: "https://www.youtube.com/@emanuelondii" },
 //,
  // { label: "Twitter", href: "https://twitter.com" }
];

// Email to receive contact form messages from
const CONTACT_TARGET_EMAIL = "ondoyemanuel@gmail.com";

// EmailJS (recommended for reliable email delivery on static sites)
// 1) Create an account at emailjs.com
// 2) Add an Email Service + Email Template
// 3) Paste your IDs/keys below
const EMAILJS_PUBLIC_KEY = "fCWq9kVj69l2CBcPd";
const EMAILJS_SERVICE_ID = "service_u0xz5fj";
const EMAILJS_TEMPLATE_ID = "template_5raek8t";

function renderAbout() {
  const root = document.getElementById("about-grid");
  root.innerHTML = aboutItems.map((item) => `
    <article class="card">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    </article>
  `).join("");
}

function renderProjects() {
  const root = document.getElementById("project-grid");
  root.innerHTML = projectItems.map((item) => `
    <article class="project-card">
      <img src="${item.image}" alt="${item.title}">
      <div class="project-body">
        <span class="chip">${item.category}</span>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <div>${item.tags.map((tag) => `<span class="chip">${tag}</span>`).join("")}</div>
        ${item.link ? `<p><a class="social-link" href="${item.link}" target="_blank" rel="noopener noreferrer">View on YouTube</a></p>` : ""}
      </div>
    </article>
  `).join("");
}

function renderSkills() {
  const root = document.getElementById("skills-grid");
  const iconFor = (title) => {
    const t = String(title || "").toLowerCase();
    // Use escaped HTML so it renders literally.
    if (t.includes("program")) return { glyph: "&lt;/&gt;", variant: "is-code" };
    if (t.includes("music")) return { glyph: "♪", variant: "is-music" };
    if (t.includes("game")) return { glyph: "🎮", variant: "is-game" };
    return { glyph: "★", variant: "is-generic" };
  };

  root.innerHTML = skillCategories.map((category) => {
    const icon = iconFor(category.title);
    return `
      <article class="skill-card skill-card-v2">
        <div class="project-body">
          <div class="skill-head">
            <div class="skill-icon ${icon.variant}" aria-hidden="true">${icon.glyph}</div>
            <h3 class="skill-title">${category.title}</h3>
          </div>

          <div class="skill-pill-wrap">
            ${category.skills.map((skill) => `
              <span class="skill-pill">${skill.name}</span>
            `).join("")}
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function renderSocials() {
  const root = document.getElementById("social-grid");
  root.innerHTML = socialLinks.map((item) => `
    <a class="social-link" href="${item.href}" target="_blank" rel="noopener noreferrer">${item.label}</a>
  `).join("");
}

function makeSparkles() {
  const layer = document.querySelector(".sparkle-layer");
  for (let i = 0; i < 24; i += 1) {
    const spark = document.createElement("span");
    spark.className = "spark";
    spark.textContent = "*";
    spark.style.left = `${Math.random() * 100}%`;
    spark.style.top = `${20 + Math.random() * 70}%`;
    spark.style.animationDelay = `${Math.random() * 6}s`;
    spark.style.animationDuration = `${4 + Math.random() * 5}s`;
    spark.style.fontSize = `${10 + Math.random() * 18}px`;
    layer.appendChild(spark);
  }
}

function wireNavigation() {
  const buttons = document.querySelectorAll("[data-target]");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.getAttribute("data-target");
      const section = document.getElementById(target);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  const sections = ["home", "about", "projects", "skills", "contact"].map((id) => document.getElementById(id));
  const navButtons = document.querySelectorAll(".nav-links .nav-btn");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navButtons.forEach((button) => {
          button.classList.toggle("is-active", button.getAttribute("data-target") === entry.target.id);
        });
      }
    });
  }, { threshold: 0.35 });

  sections.forEach((section) => observer.observe(section));
}

function wireForm() {
  const form = document.getElementById("contact-form");
  const note = document.getElementById("form-note");
  const targetFrame = document.getElementById("contact-target");

  if (!form || !note) return;

  const submitButton = form.querySelector('button[type="submit"]');

  const setSendingState = (isSending) => {
    if (!submitButton) return;
    submitButton.disabled = isSending;
    submitButton.textContent = isSending ? "Sending..." : "Send Message";
  };

  const hasEmailJs =
    typeof window !== "undefined" &&
    typeof window.emailjs !== "undefined" &&
    EMAILJS_PUBLIC_KEY !== "YOUR_EMAILJS_PUBLIC_KEY" &&
    EMAILJS_SERVICE_ID !== "YOUR_EMAILJS_SERVICE_ID" &&
    EMAILJS_TEMPLATE_ID !== "YOUR_EMAILJS_TEMPLATE_ID";

  if (hasEmailJs) {
    window.emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      note.classList.remove("is-error");
      note.textContent = "Sending...";
      setSendingState(true);

      const name = form.querySelector('input[name="name"]')?.value || "";
      const email = form.querySelector('input[name="email"]')?.value || "";
      const subject = form.querySelector('input[name="subject"]')?.value || "";
      const message = form.querySelector('textarea[name="message"]')?.value || "";

      try {
        await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
          to_email: CONTACT_TARGET_EMAIL,
          from_name: name,
          from_email: email,
          reply_to: email,
          subject,
          message
        });

        note.textContent = "Message sent! Thanks for reaching out.";
        form.reset();
      } catch (error) {
        note.classList.add("is-error");
        note.textContent = "Could not send right now. Please try again in a moment.";
        console.error(error);
      } finally {
        setSendingState(false);
      }
    });

    // If EmailJS is configured, the hidden iframe isn't needed.
    if (targetFrame) targetFrame.remove();
    return;
  }

  // Fallback: FormSubmit POST (keeps working without EmailJS config)
  const replyTo = form.querySelector('input[name="_replyto"]');
  const hiddenSubject = form.querySelector('input[name="_subject"]');

  if (targetFrame) {
    targetFrame.addEventListener("load", () => {
      setSendingState(false);
      note.classList.remove("is-error");
      note.textContent = "Message sent! (If you still don't receive it, EmailJS config will be more reliable.)";
      form.reset();
    });
  }

  form.addEventListener("submit", () => {
    const emailValue = form.querySelector('input[name="email"]')?.value || "";
    const subjectValue = form.querySelector('input[name="subject"]')?.value || "";
    if (replyTo) replyTo.value = emailValue;
    if (hiddenSubject) {
      hiddenSubject.value = subjectValue
        ? `Portfolio Contact: ${subjectValue}`
        : "New portfolio contact form message";
    }

    note.classList.remove("is-error");
    note.textContent = "Sending...";
    setSendingState(true);
  });
}

function animateProgressBars() {
  const bars = document.querySelectorAll(".progress-bar");
  if (!bars.length) return;
  requestAnimationFrame(() => {
    bars.forEach((bar) => {
      bar.style.width = `${bar.dataset.level}%`;
    });
  });
}

renderAbout();
renderProjects();
renderSkills();
renderSocials();
makeSparkles();
wireNavigation();
wireForm();
animateProgressBars();

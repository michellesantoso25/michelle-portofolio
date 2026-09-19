const projectsData = {
  cryPIto: {
    title: "cryPIto",
    type: "Individual · Web Development",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "assets/crypito-preview.png",
    description: "An educational website that introduces cryptocurrency to users of all backgrounds, from complete beginners to people who already know the basics. It focuses on simplifying digital asset concepts and making crypto feel less intimidating - covering current market info, learning guides, and a registration flow to help users get started. Built as an individual project for an HCI Lab assignment, designed and coded solo from UI to logic.",
    role: "Designed and built all five pages from scratch, including the layout and user flow. Built reusable CSS components so the UI stayed consistent across every page. Wrote custom JavaScript form validation with proper error handling on the client side.",
    github: "https://github.com/oopsitscel/cryPIto",
    docs: "assets/docs/cryPIto_documentation.pdf",
    figma: "https://www.figma.com/design/kTnGuBaLSwJ7zgDpU9a1hM/cryPIto?t=L7ci0xyR8qhXD5II-0"
  },
  WSpeedRun: {
    title: "WSpeedRun",
    type: "Lab Project · Backend Development",
    tech: ["NestJS", "TypeScript", "Prisma", "JWT"],
    image: "assets/wspeedrun-preview.png",
    description: "WSpeedRun is a microservices-based leaderboard platform for speedrunning communities. It handles run submissions, user authentication, and global rankings, with each part of the system split into its own independent service.",
    role: "Built the three core backend services - AuthService, GameService, and RunService - from the ground up. Designed the database schema with Prisma ORM, set up JWT authentication, and built out all the API routes.",
    github: "https://github.com/oopsitscel/WSpeedRun.com",
    docs: "assets/docs/WSpeedRun_documentation.pdf",
    figma: null
  },
  QuickBite: {
    title: "QuickBite",
    type: "Group Project · Full-Stack Development",
    tech: ["NestJS", "TypeScript", "Prisma", "MySQL"],
    image: "assets/quickbite-preview.png",
    description: "QuickBite is a full-stack food ordering and restaurant management system that connects guests, customers, kitchen staff, and admins in one platform - covering ordering, kitchen operations, and admin oversight.",
    role: "Built the entire full-stack app myself, both the API and the frontend. Set up role-based access control for four different user types, built the shopping cart and checkout flow, and connected everything to a MySQL database through Prisma ORM.",
    github: "https://github.com/oopsitscel/QuickBite",
    docs: "assets/docs/QuickBite_documentation.pdf",
    figma: null
  },
  Eventra: {
    title: "Eventra",
    type: "Group Project · Project Manager & Mobile Developer",
    tech: ["Flutter", "Dart", "Node.js", "MySQL"],
    image: "assets/eventra-preview.png",
    description: "Eventra is a mobile concert discovery and ticketing app built around how fast live music has grown in Indonesia, where going to a concert or festival has become less of an occasional treat and more of a lifestyle. It brings fans, artists, and promoters into one platform instead of the usual scattered mix of apps and social media - fans can discover events, follow their favorite artists, and buy tickets in one place, while promoters get a dashboard to track demand and plan events better. The goal was to make the whole concert-going experience feel less fragmented, from the moment someone hears about a show to the moment they actually walk in with a ticket.",
    role: "Led a 5-person team as Project Manager using Agile Scrum, while also building core Flutter screens as a Mobile Developer - handling app state and connecting the app to our Node.js backend.",
    github: "https://github.com/selineee-ce/Eventra",
    docs: "assets/docs/Eventra_documentation.pdf",
    figma: "https://www.figma.com/design/LqRe0kuisKf15E9dTJnWEK/Eventra-New?t=L7ci0xyR8qhXD5II-0"
  },
  SiKecilSehat: {
    title: "SiKecilSehat",
    type: "Group Project · UI/UX & Product Design",
    tech: ["Figma", "UI/UX Design", "Product Design"],
    image: "assets/sikecilsehat-preview.png",
    description: "SiKecilSehat is a web and mobile concept that helps parents track their child's growth (ages 0-5) based on WHO standards. It includes growth tracking, immunization and nutrition reminders, teleconsultation with pediatricians, healthy recipe recommendations, and kid-friendly restaurant discovery.",
    role: "Designed the key UI/UX screens in Figma, mapped out user flows using the 5W1H method, and put together the growth curve dashboard and the nutrition/appointment design components.",
    github: null,
    docs: "assets/docs/SiKecilSehat_documentation.pdf",
    figma: "https://www.figma.com/design/Z3bnelW2O7o6yC6rUC2wqp/creative-innovation-kelompok-4?node-id=0-1&p=f&t=jPxE8wtUXvrc5mKP-0"
  }
};

function openModal(projectId) {
  const data = projectsData[projectId];
  if (!data) {
    console.error("Project data not found for key:", projectId);
    return;
  }

  const setElemText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.innerText = text || '';
  };

  setElemText('modalTitle', data.title);
  setElemText('modalType', data.type);
  setElemText('modalDescription', data.description);
  setElemText('modalRole', data.role);

  const docsBtn = document.getElementById('modalDocs');
  if (docsBtn) docsBtn.href = data.docs || '#';

  const githubBtn = document.getElementById('modalGithub');
  if (githubBtn) {
    if (data.github) {
      githubBtn.href = data.github;
      githubBtn.style.display = 'inline-flex';
    } else {
      githubBtn.style.display = 'none';
    }
  }

  const figmaBtn = document.getElementById('modalFigma');
  if (figmaBtn) {
    if (data.figma) {
      figmaBtn.href = data.figma;
      figmaBtn.style.display = 'inline-flex';
    } else {
      figmaBtn.style.display = 'none';
    }
  }

  const imgElement = document.getElementById('modalImage');
  if (imgElement) {
    imgElement.src = data.image || '';
    imgElement.alt = `${data.title} UI/UX Preview`;
  }

  const techContainer = document.getElementById('modalTech');
  if (techContainer) {
    techContainer.innerHTML = '';
    if (data.tech) {
      data.tech.forEach(t => {
        const span = document.createElement('span');
        span.innerText = t;
        techContainer.appendChild(span);
      });
    }
  }

  const modal = document.getElementById('projectModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal() {
  const modal = document.getElementById('projectModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

function closeModalOnOverlay(event) {
  if (event.target.id === 'projectModal') {
    closeModal();
  }
}
const projectsData = {
  cryPIto: {
    title: "cryPIto",
    type: "Individual · Web Development",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "assets/crypito-preview.png",
    description: "cryPIto is an educational and informational cryptocurrency website designed to make digital assets easier for beginners to understand. The platform combines real-time cryptocurrency market insights with structured learning content across a responsive multi-page interface. Users can explore coin metrics, learn fundamental blockchain concepts, and submit inquiries through a fully validated interactive form. The system prioritizes intuitive navigation, ensuring smooth transitions between complex market data and beginner-friendly guides.",
    role: "Designed and developed the complete multi-page architecture from scratch. Built modular, reusable CSS components to maintain strict UI consistency across all five main pages. Implemented custom JavaScript form validation with client-side error handling, optimized layout responsiveness for cross-device compatibility, and structured data hierarchy to improve content readability.",
    github: "https://github.com/oopsitscel/cryPIto",
    docs: "assets/docs/cryPIto_documentation.pdf"
  },
  WSpeedRun: {
    title: "WSpeedRun",
    type: "Lab Project · Backend Development",
    tech: ["NestJS", "TypeScript", "Prisma", "JWT"],
    image: "assets/wspeedrun-preview.png",
    description: "WSpeedRun is a high-performance microservices-based speedrun leaderboard platform engineered to handle game submission records, user authentication, and global rankings independently. By separating backend logic into distinct domain services, the system avoids tight coupling, allowing high scalability and clean domain isolation. The system features multi-tiered user authentication, run verification pipelines, and administrative moderation controls to maintain data integrity across global leaderboards.",
    role: "Architected and implemented core backend services including AuthService, GameService, and RunService. Designed relational data schemas using Prisma ORM, engineered secure JWT authentication workflows with refresh token mechanisms, integrated database constraints to prevent race conditions during score submissions, and built dynamic API routes for admin content moderation.",
    github: "https://github.com/oopsitscel/WSpeedRun.com",
    docs: "assets/docs/WSpeedRun_documentation.pdf"
  },
  QuickBite: {
    title: "QuickBite",
    type: "Group Project · Full-Stack Development",
    tech: ["NestJS", "TypeScript", "Prisma", "MySQL"],
    image: "assets/quickbite-preview.png",
    description: "QuickBite is an end-to-end full-stack restaurant ordering and administrative management ecosystem designed to streamline interactions between guests, registered customers, kitchen staff, and admins. The application covers every stage of the dining workflow: user onboarding, real-time menu browsing, cart customization, secure checkout, order status tracking, and kitchen inventory management.",
    role: "Spearheaded full-stack implementation across both API services and client interfaces. Engineered Role-Based Access Control (RBAC) to enforce security boundaries between user roles, developed state-driven shopping cart and checkout pipelines, integrated MySQL database queries via Prisma ORM, and established seamless API communication for live order tracking.",
    github: "https://github.com/oopsitscel/QuickBite",
    docs: "assets/docs/QuickBite_documentation.pdf"
  },
  Eventra: {
    title: "Eventra",
    type: "Group Project · Project Manager & Mobile Developer",
    tech: ["Flutter", "Dart", "Node.js", "MySQL"],
    image: "assets/eventra-preview.png",
    description: "Eventra is a mobile concert discovery and ticketing platform designed to simplify how music enthusiasts find, follow, and attend live music events. The app enables users to discover upcoming shows, track favorite artists, maintain personal wishlists, select seating categories, and securely purchase event tickets within a unified mobile interface. Additionally, it offers promoter tools for managing event schedules, ticket availability, and audience metrics.",
    role: "Led a 5-person development group as Project Manager using Agile Scrum methodology, coordinating sprint planning, backlog grooming, and cross-functional team execution. Simultaneously contributed as a core Mobile Developer by building responsive Flutter UI screens, managing global app state, integrating RESTful Node.js APIs, and implementing ticket checkout workflows.",
    github: "https://github.com/selineee-ce/Eventra",
    docs: "assets/docs/Eventra_documentation.pdf"
  }
};

function openModal(projectId) {
  const data = projectsData[projectId];
  if (!data) return;

  document.getElementById('modalTitle').innerText = data.title;
  document.getElementById('modalType').innerText = data.type;
  document.getElementById('modalDescription').innerText = data.description;
  document.getElementById('modalRole').innerText = data.role;
  document.getElementById('modalGithub').href = data.github;
  document.getElementById('modalDocs').href = data.docs;

  const imgElement = document.getElementById('modalImage');
  imgElement.src = data.image;
  imgElement.alt = `${data.title} UI/UX Preview`;

  const techContainer = document.getElementById('modalTech');
  techContainer.innerHTML = '';
  data.tech.forEach(t => {
    const span = document.createElement('span');
    span.innerText = t;
    techContainer.appendChild(span);
  });

  document.getElementById('projectModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('projectModal').classList.remove('active');
  document.body.style.overflow = 'auto';
}

function closeModalOnOverlay(event) {
  if (event.target.id === 'projectModal') {
    closeModal();
  }
}
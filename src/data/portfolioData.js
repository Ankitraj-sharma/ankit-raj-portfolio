export const portfolioData = {
  personal: {
    name: "ANKIT RAJ SHARMA",
    shortName: "ANKIT",
    title: "Full Stack Developer · AI/ML Engineer",
    subtitle: "Computer Engineering Student @ Marwadi University",
    location: "Rajkot, Gujarat, India (360003)",
    email: "Ankitrajsharma666@gmail.com",
    phone: "(+91) 7903356870",
    phoneClean: "917903356870",
    cgpa: "7.91",
    university: "Marwadi University (NAAC A+)",
    degree: "B.Tech — Computer Engineering",
    duration: "2025 – Present",
    social: {
      github: "https://github.com/Ankitraj-sharma",
      linkedin: "https://www.linkedin.com/in/ankitraj-sharma",
      leetcode: "https://leetcode.com/u/ankitrajsharma666/",
      hackerrank: "https://www.hackerrank.com/profile/ankitrajsharma61",
      email: "mailto:Ankitrajsharma666@gmail.com",
      whatsapp: "https://wa.me/917903356870?text=Hi%20Ankit,%20I%20saw%20your%20portfolio!"
    },
    bio: "Full-stack-capable Computer Engineering student (CGPA 7.91, Marwadi University NAAC A+) with a completed Cisco Virtual Internship in Cybersecurity, 7 live deployed projects, and 10+ industry certifications from Cisco, Infosys Springboard, Coursera, and Udemy. Operations Coordinator of the HackerRank Official Team at Marwadi University and coordinated an event at MU Fest.",
    statement: "I AM DEDICATED TO BRINGING YOUR VISION TO LIFE BY CRAFTING UNIQUE, HIGHLY AESTHETIC, AND IMPACTFUL DIGITAL EXPERIENCES. MY WORK SPEAKS LOUDER THAN WORDS—EXPLORE THE RESULTS."
  },

  stats: [
    { label: "CGPA (NAAC A+)", value: "7.91", subtext: "Marwadi University" },
    { label: "Live Deployed Projects", value: "7+", subtext: "Web & AI Systems", highlight: true },
    { label: "Industry Certifications", value: "10+", subtext: "Cisco, Infosys, Coursera" },
    { label: "QA & Scenarios Verified", value: "20+", subtext: "Zero-defect mindset" }
  ],

  heroBullets: [
    "Full-Stack Web Architect (React, Next.js, Node.js, Express)",
    "AI & Autonomous Agents Developer (Gemini API, Python, TVB)",
    "Cybersecurity & Cloud Trained (Cisco Cyber Intern, Vercel, Render)",
    "Operations Coordinator — HackerRank Official Team MU"
  ],

  projects: [
    {
      id: "exam-system",
      title: "Smart Online Examination System",
      category: "Full Stack",
      stack: ["React.js", "Node.js", "MongoDB", "Vercel", "Express"],
      year: "2026",
      featured: true,
      description: "Full-stack React + Node.js examination platform live on Vercel with role-based login (Admin/Student), real-time exam management, timer logic, and automated scoring.",
      highlights: [
        "Architected role-based authentication middleware for Admin & Student portals with 0 unauthorized access bugs.",
        "Engineered dynamic question paper rendering with anti-cheat timer auto-submitting on timeout.",
        "Full admin dashboard with CRUD question bank management and 20+ QA scenarios verified via DevTools."
      ],
      github: "https://github.com/Ankitraj-sharma/smart-online-examination-system",
      live: "https://smart-online-examination-system.vercel.app",
      badge: "Flagship"
    },
    {
      id: "tvb-ai-agent",
      title: "TVB AI Venture Agent",
      category: "AI / ML",
      stack: ["React", "TypeScript", "Node.js", "Express", "Vite", "Render"],
      year: "2026",
      featured: true,
      description: "AI-powered venture-intelligence agent for The Venture Build (TVB), turning company and market inputs into structured research, analysis, and opportunity-scoring outputs.",
      highlights: [
        "Architected Vite + React + TypeScript frontend backed by Express API structuring autonomous agent workflows.",
        "Designed proprietary TVB-fit scoring framework assessing market size, enterprise potential, and growth stage.",
        "Deployed on Render with secure server-side AI credentials and environment variables."
      ],
      github: "https://github.com/Ankitraj-sharma",
      live: "#",
      badge: "AI Powered"
    },
    {
      id: "intellmeet",
      title: "Intellmeet — Real-Time Meeting Platform",
      category: "Full Stack",
      stack: ["React", "TypeScript", "Socket.io", "MongoDB", "Express", "Tailwind CSS"],
      year: "2026",
      featured: true,
      description: "Full-stack real-time collaboration & meeting application with instant host invitations, live participant state updates, and dark-theme design.",
      highlights: [
        "Integrated Socket.io (getIO()) for live participant state changes, room coordination, and instant updates.",
        "Built Host-to-Participant invite modal with live debounced user search on TanStack Query.",
        "Implemented standardized ApiResponse/ApiError wrapper architecture for enterprise error resilience."
      ],
      github: "https://github.com/Ankitraj-sharma",
      live: "#",
      badge: "Realtime"
    },
    {
      id: "gujarat-tourism",
      title: "Gujarat Tourism — Gemini AI Portal",
      category: "AI & Web",
      stack: ["TypeScript", "Vite", "Google Gemini API", "GitHub Pages", "GitHub Actions"],
      year: "2026",
      featured: true,
      description: "Interactive tourism website showcasing Gujarat's heritage, culture, wildlife, beaches, and cuisine across 8+ destination categories, infused with Google Gemini AI.",
      highlights: [
        "Integrated Google Gemini API to generate intelligent cultural insights and personalized trip suggestions.",
        "Shipped continuous deployment to GitHub Pages using automated GitHub Actions CI/CD workflows.",
        "Mobile-first responsive architecture with smooth interactive category filtering."
      ],
      github: "https://github.com/Ankitraj-sharma",
      live: "https://ankitraj-sharma.github.io/gujarat-tourism",
      badge: "Gemini API"
    },
    {
      id: "xinity",
      title: "Xinity — Developer Community Platform",
      category: "Frontend",
      stack: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5"],
      year: "2026",
      featured: false,
      description: "6-page developer community network platform (Home, About, Events, Community, Fun Events, Contact) for students across hackathons, workshops, and chapters.",
      highlights: [
        "Mobile-first responsive layout adapting seamlessly from 375px to 1440px viewport widths.",
        "Structured semantic HTML5 and reusable Bootstrap 5 components cutting custom CSS by 40%.",
        "Clean UX with interactive FAQ accordion, event countdowns, and community engagement forms."
      ],
      github: "https://github.com/Ankitraj-sharma",
      live: "#",
      badge: "Community"
    },
    {
      id: "vehicle-rental",
      title: "Multi-Brand Vehicle Rental Hub",
      category: "Frontend",
      stack: ["HTML5", "CSS3", "Bootstrap", "JavaScript ES6"],
      year: "2025",
      featured: false,
      description: "Comprehensive vehicle rental platform covering 5 brands across Bikes, Cars, E-Bikes, and Scooties across 17 dedicated vehicle pages with a 3-click booking flow.",
      highlights: [
        "Engineered rapid vehicle selection UX cutting checkout flow to just 3 clicks from landing to confirmation.",
        "Robust client-side form validation eliminating erroneous submissions before network interaction.",
        "Catalog system spanning 17 individual vehicle pages with dynamic spec sheets."
      ],
      github: "https://github.com/Ankitraj-sharma",
      live: "#",
      badge: "E-Commerce"
    }
  ],

  certifications: [
    {
      title: "CCNA: Switching, Routing, and Wireless Essentials",
      issuer: "Cisco Networking Academy",
      date: "Apr 2026",
      certId: "f9c10687-2662-4fee-8f54-1eddcea18d01",
      category: "Networking & Security"
    },
    {
      title: "Cybersecurity Essentials",
      issuer: "Cisco Networking Academy",
      date: "Jun 2026",
      certId: "125e9a90-9010-4bac-8742-041463224b87",
      category: "Networking & Security"
    },
    {
      title: "Exploring Networking with Cisco Packet Tracer",
      issuer: "Cisco Networking Academy",
      date: "May 2026",
      certId: "7c7b8a97-d22f-49a7-89c3-3ecf16ebb300",
      category: "Networking & Security"
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      date: "Jun 2026",
      certId: "f633f33c-609b-4de4-a69a-c49ff3742398",
      category: "Networking & Security"
    },
    {
      title: "Linux Essentials",
      issuer: "Cisco Networking Academy",
      date: "Mar 2026",
      certId: "6e8b7c3a-0526-40b1-aa52-66e1376cc312",
      category: "Operating Systems"
    },
    {
      title: "Operating Systems Basics",
      issuer: "Cisco Networking Academy",
      date: "Feb 2026",
      certId: "ea3db6d5-3865-4c28-b210-78044f09cf55",
      category: "Operating Systems"
    },
    {
      title: "Problem Solving Using Computational Thinking",
      issuer: "University of Michigan via Coursera",
      date: "Sep 2025",
      certId: "Z5AW7X7QDB5Q",
      category: "Computer Science"
    },
    {
      title: "Design Thinking: Unlock Innovation & User-Centricity",
      issuer: "Udemy",
      date: "Mar 2026",
      certId: "UC-d9567474-cc47-49ff-841a-b2500dc288f2",
      category: "UI / UX & Product"
    },
    {
      title: "Python for Data Science",
      issuer: "Infosys Springboard",
      date: "Jul 2025",
      certId: "Infosys Verified",
      category: "AI / Data Science"
    },
    {
      title: "Problem Solving for Success & Design Thinking",
      issuer: "Infosys Springboard",
      date: "2025 – 2026",
      certId: "Infosys Verified",
      category: "Soft Skills & Logic"
    }
  ],

  achievements: [
    {
      role: "Operations Coordinator",
      organization: "HackerRank Official Team — Marwadi University",
      period: "2025 – Present",
      desc: "Leading operational execution, contest management, and student technical development initiatives on campus."
    },
    {
      role: "Cisco Virtual Internship — Cybersecurity",
      organization: "Cisco Networking Academy",
      period: "Completed 10 Sep 2026",
      desc: "Hands-on threat analysis, secure network architectures, penetration fundamentals, and policy design."
    },
    {
      role: "Web Development Intern",
      organization: "Zidio Development",
      period: "04 May 2026 – 04 Aug 2026",
      desc: "Developed responsive web modules, component libraries, and frontend integrations under production standards."
    },
    {
      role: "Event Coordinator — MU Fest",
      organization: "Marwadi University Annual Tech & Cultural Festival",
      period: "2026",
      desc: "Managed end-to-end event logistics, multi-stage scheduling, and participant registration for hundreds of attendees."
    },
    {
      role: "Star of the Month Award",
      organization: "Marwadi University",
      period: "2026",
      desc: "Recognized for exceptional academic consistency, peer leadership, and active community contributions."
    },
    {
      role: "WebX Challenge — Certificate of Appreciation",
      organization: "Xinity Tech Community × GeeksForGeeks × MU",
      period: "Apr 2026",
      desc: "Awarded for exceptional front-end design craft and high-speed prototype execution."
    }
  ],

  skills: {
    frontend: [
      { name: "React.js", level: "Advanced", icon: "atom" },
      { name: "Next.js", level: "Proficient", icon: "layers" },
      { name: "TypeScript", level: "Proficient", icon: "code" },
      { name: "JavaScript ES6+", level: "Expert", icon: "file-code" },
      { name: "Tailwind CSS", level: "Expert", icon: "wind" },
      { name: "HTML5 & CSS3", level: "Expert", icon: "layout" },
      { name: "Bootstrap 5", level: "Advanced", icon: "box" }
    ],
    backend: [
      { name: "Node.js & Express", level: "Advanced", icon: "server" },
      { name: "Java & JDBC", level: "Proficient", icon: "coffee" },
      { name: "C# & ASP.NET Core", level: "Proficient", icon: "cpu" },
      { name: "Python", level: "Proficient", icon: "terminal" },
      { name: "REST APIs", level: "Expert", icon: "link" }
    ],
    aiMl: [
      { name: "AI Agents Architecture", level: "Advanced", icon: "bot" },
      { name: "Gemini API Integration", level: "Advanced", icon: "sparkles" },
      { name: "Machine Learning Core", level: "Intermediate", icon: "brain" },
      { name: "Python for Data Science", level: "Advanced", icon: "bar-chart-2" }
    ],
    databases: [
      { name: "MongoDB", level: "Advanced", icon: "database" },
      { name: "MySQL", level: "Advanced", icon: "table" },
      { name: "Relational Schemas & CRUD", level: "Expert", icon: "git-commit" }
    ],
    toolsCloud: [
      { name: "Git & GitHub", level: "Expert", icon: "git-branch" },
      { name: "Linux CLI & Perms", level: "Advanced", icon: "terminal" },
      { name: "Vercel & Netlify", level: "Advanced", icon: "globe" },
      { name: "Render & Cloud Deploy", level: "Advanced", icon: "cloud" },
      { name: "VS Code & DevTools", level: "Expert", icon: "tool" },
      { name: "Packet Tracer", level: "Proficient", icon: "wifi" }
    ]
  },

  education: [
    {
      degree: "B.Tech — Computer Engineering",
      institution: "Marwadi University (NAAC A+ Accredited)",
      score: "CGPA: 7.91",
      period: "2025 – Present",
      coursework: "Web Technologies, DBMS, Data Structures & Algorithms, OOP, Computer Networks, Machine Learning Fundamentals"
    },
    {
      degree: "Higher Secondary (Science)",
      institution: "Bihar School Examination Board",
      score: "First Division Completed",
      period: "Bihar Board",
      coursework: "Physics, Chemistry, Mathematics"
    },
    {
      degree: "Matriculation (10th)",
      institution: "Central Board of Secondary Education (CBSE)",
      score: "74%",
      period: "CBSE Board",
      coursework: "Science, Mathematics, Social Studies, English, Hindi"
    }
  ],

  gallery: [
    {
      title: "Professional & Leadership",
      category: "Profile",
      image: "./images/ankit-portrait.jpg",
      caption: "Striving for engineering excellence, clean code, and forward-looking tech solutions.",
      badge: "Developer"
    },
    {
      title: "Night Rides & Fast Thinking",
      category: "Life & Passions",
      image: "./images/ankit-duke.jpg",
      caption: "Exploring roads on the KTM Duke 200 (GJ 03 JH 4014) — focus, speed, and precision in life as in code.",
      badge: "KTM Duke 200"
    },
    {
      title: "Rooted & Resilient",
      category: "Perspective",
      image: "./images/ankit-banyan.jpg",
      caption: "Standing beneath the ancient banyan tree. Growth requires deep roots, discipline, and patient persistence.",
      badge: "Perspective"
    },
    {
      title: "Late Night Build Energy",
      category: "Engineering Grit",
      image: "./images/ankit-hoodie.jpg",
      caption: "When the clock turns 2 AM, the best ideas compile into reality. The grit to debug till it runs clean.",
      badge: "Hacker Mode"
    }
  ]
};

import type { WorkshopData } from "./types";

const cai2026: WorkshopData = {
  slug: "cai2026",
  title: "AI x Space Exploration Special Session @ IEEE CAI 2026",
  subtitle:
    "How advances in AI are reshaping autonomy, science, and operations for the next era of space exploration.",
  banner: "/images/cai2026/banner.png",
  overview: [
    "Artificial Intelligence has long played a role in space exploration. NASA has developed and flown AI technologies for over four decades — from early demonstrations in automated planning and scheduling, to Earth observation systems capable of mapping and responding to geographical events from orbit, to autonomous landers and rovers conducting science on Mars. Today, space exploration stands at a critical inflection point where advances in AI, particularly the recent generative AI wave, have the potential to dramatically expand scientific discovery and mission operational capability.",
    "Several converging drivers underscore the timeliness of this topic. The cost of launch continues to decline, enabling a surge of high-capitalized commercial entrants and accelerating national programs such as NASA's Artemis campaign. NASA JPL's upcoming CADRE (Cooperative Autonomous Distributed Robotic Exploration) mission will deploy a swarm of rovers on the lunar surface, demonstrating how multi-agent autonomy is becoming central to future missions. At the same time, intensifying geopolitical competition has catalyzed a renewed space race in a far more complex technological ecosystem. These developments demand unprecedented levels of autonomy, adaptability, and decision support — areas where AI has become indispensable.",
    "This Special Session addresses the technical challenges and opportunities of deploying advanced AI in space systems. Key issues include:",
  ],
  overviewHighlights: [
    {
      title: "Scalability of science and mission operations",
      description:
        "Leveraging AI to analyze massive volumes of multisensor data collected from spacecraft, orbiters, and planetary missions.",
    },
    {
      title: "Autonomous exploration",
      description:
        "Developing AI-driven agents capable of single-shot or minimally supervised missions to remote worlds where real-time ground control is infeasible.",
    },
    {
      title: "Validation, verification, and certification",
      description:
        "Ensuring trust, safety, and robustness of AI algorithms when human lives and mission-critical objectives are at stake.",
    },
    {
      title: "Generalization to novel environments",
      description:
        "Designing algorithms that adapt to out-of-distribution conditions characteristic of extraterrestrial terrains and atmospheres.",
    },
    {
      title: "Human–AI teaming",
      description:
        "Enabling effective collaboration between astronauts, mission controllers, and AI systems in dynamic and uncertain operational contexts.",
    },
  ],
  overviewClosing:
    "By bringing together experts in AI, robotics, aerospace engineering, and planetary science, this Special Session provides a focused forum to assess progress, highlight open challenges, and shape the research agenda for the coming decade — underscoring how breakthroughs in AI can unlock new frontiers of human and robotic exploration beyond Earth.",
  keyInfo: {
    conference: "IEEE Conference on Artificial Intelligence (CAI) 2026",
    dates: "May 8-10, 2026",
    location: "Granada, Spain",
    websiteUrl: "https://www.ieeesmc.org/cai-2026/",
  },
  organizers: [
    {
      name: "Ignacio G. López-Francos",
      affiliation: "NASA Ames Research Center",
      photo: "/images/cai2026/people/ignacioGLopezFrancos.jpg",
      url: "https://www.linkedin.com/in/ilopezfrancos/",
    },
    {
      name: "Andrés Martinez",
      affiliation: "NASA HQ",
      photo: "/images/cai2026/people/andresMartinez.jpg",
      url: "https://www.linkedin.com/in/andresmartinez/",
    },
    {
      name: "Federico Lozano-Cuadra",
      affiliation: "Universidad de Málaga",
      photo: "/images/cai2026/people/federicoLozanoCuadra.jpg",
      url: "https://www.linkedin.com/in/federico-lozano-cuadra/",
    },
  ],
  agendaNote: "Special Session held on May 10, 2026.",
  agenda: [
    {
      time: "11:30",
      title: "Security for Federated Learning with DP and Satellite Swarms",
      description: "ID 90 — Florian Kammüller",
    },
    {
      time: "11:50",
      title: "Federated Multi-Agent Mapping for Planetary Exploration",
      description: "ID 107 — Tiberiu-Ioan Szatmari",
    },
    {
      time: "12:10",
      title: "High-Fidelity 3D Reconstruction for Planetary Exploration",
      description: "ID 218 — David Rodríguez-Martínez",
    },
    {
      time: "12:30",
      title: "Mission Science Objective-Based AI for Spaceflight Field Test",
      description: "ID 272 — Bethany P. Theiling",
    },
    {
      time: "12:50",
      title: "SKYWALKER: Dual-Agent RL for Crawling in Microgravity",
      description: "ID 515 — Dadi Hrannar Davidsson",
    },
  ],
  speakers: [
    {
      name: "Bethany P. Theiling",
      affiliation: "NASA Goddard Space Flight Center",
      photo: "/images/cai2026/people/bethanyTheiling.jpg",
    },
    {
      name: "Tiberiu-Ioan Szatmari",
      affiliation: "Technical University of Denmark",
      photo: "/images/cai2026/people/tiberiuSzatmari.jpg",
    },
    {
      name: "David Rodríguez-Martínez",
      affiliation: "University of Málaga",
      photo: "/images/cai2026/people/davidRodriguezMartinez.jpg",
    },
    {
      name: "Dadi Hrannar Davidsson",
      affiliation: "Aalborg University",
      photo: "/images/cai2026/people/dadiDavidsson.jpg",
      url: "https://www.linkedin.com/in/dadi-hrannar/",
    },
    {
      name: "Florian Kammüller",
      affiliation: "Middlesex University London / TU Berlin",
      photo: "/images/cai2026/people/florianKammuller.jpg",
    },
  ],
  papers: [
    {
      title:
        "Formalisation of Security for Federated Learning with DP and Attacker Advantage in IIIf for Satellite Swarms",
      authors: "Florian Kammüller (Middlesex University London / TU Berlin)",
      url: "https://drive.google.com/file/d/1NYei-GslvIkHhpkt3Kwb53EntDGrxyEe/view",
    },
    {
      title: "Federated Multi-Agent Mapping for Planetary Exploration",
      authors:
        "Tiberiu-Ioan Szatmari (Technical University of Denmark), Abhishek Cauligi (Johns Hopkins University / NASA JPL)",
      url: "https://drive.google.com/file/d/1AsWlL23n5IYRHVZeRPD5RpMZFIZnWQjc/view",
    },
    {
      title: "High-fidelity 3D Reconstruction for Planetary Exploration",
      authors:
        "A. Martínez-Petersen, L. Gerdes, D. Rodríguez-Martínez, C. J. Pérez-del-Pulgar (University of Málaga)",
      url: "https://drive.google.com/file/d/1UsB5Ojdk65dRhGBJmVuAvaRMJ7eIOWPZ/view",
    },
    {
      title:
        "Field Test of a Mission Science Objective-Based Artificial Intelligence for Spaceflight",
      authors:
        "Bethany P. Theiling et al. (NASA Goddard Space Flight Center)",
      url: "https://drive.google.com/file/d/1rScA6dyvPCcs6mfiofd1u5oSYQjKo4Jo/view",
    },
    {
      title:
        "SKYWALKER: Dual-Agent Reinforcement Learning for Autonomous Crawling in a Planar Microgravity Analog",
      authors: "Dadi H. Davidsson et al. (Aalborg University / ESA)",
      url: "https://drive.google.com/file/d/1l89D2UlS1OBwqqwnrBE5VlxX_bfvfN6B/view",
    },
  ],
};

export default cai2026;

import { 
  ProfileConfig, 
  SkillItem, 
  ProjectItem, 
  AcademicJourney, 
  ResearchItem, 
  ArticleItem, 
  FeaturedTalkItem,
  CurrentlyExploringItem 
} from '../types/portfolio';

import hexChessThumb from '../assets/images/hex_chess_thumbnail_1787477728316.jpg';
import chatAppThumb from '../assets/images/chat_app_thumbnail_1787477742181.jpg';
import farmosThumb from '../assets/images/farmos_thumbnail_1787477772362.jpg';

/**
 * =========================================================================
 * ⚙️ CENTRAL PORTFOLIO CONFIGURATION & DATA REPOSITORY
 * =========================================================================
 * Modify this file to update your personal details, projects, skills, 
 * research, academic journey, articles, and explorations.
 * All sections of the website update automatically from this single source.
 */

export const profileConfig: ProfileConfig = {
  // Your Full Name (or customize with your preferred identity)
  name: "Talha Bin Monir",
  pronouns: "he/him",
  monogram: "TBM",
  role: "Computer Science & Engineering Student | Software Developer",
  department: "Department of Computer Science & Engineering",
  university: "Islamic University of Technology", // Replace with your university name
  currentSemester: "4th Semester (Sophomore Year)",
  location: "Dhaka, Bangladesh",
  timezone: "UTC+6",
  
  // Primary accent color (Electric Amber / Orange default)
  // Options: '#FF9D2E' (Amber), '#10B981' (Emerald), '#3B82F6' (Cobalt), '#F43F5E' (Rose)
  accentColor: "#FF9D2E",

  // Live status ticker badge
  statusBadge: "Available for Summer 2026 Internships & Research Collaborations",
  openToOpportunities: true,
  opportunitiesText: "Actively seeking Software Engineering Internships, Systems Research, & Open Source collaborations.",

  // Hero Section Copy
  heroHeadline: "BUILDING IDEAS INTO SOFTWARE.",
  heroSubheadline: "Digital Archive of an Aspiring Systems & Software Engineer.",
  heroIntro: "I am a 4th-semester Computer Science and Engineering undergraduate focused on systems programming, algorithmic foundations, and software architecture. I build real software, explore low-level abstractions, and document the craft of engineering.",

  // Detailed Editorial Biography
  bioParagraphs: [
    "I am a Computer Science and Engineering student currently in my fourth semester. My passion lies at the intersection of low-level system mechanics, scalable software design, and rigorous algorithmic problem solving.",
    "Outside the compiler, I am building towards rigorous academic research, reading systems literature, and actively seeking opportunities to contribute to high-impact engineering teams."
  ],

  // Contact Information & Links
  contact: {
    email: "talhabinmonir10@gmail.com", // Replace with your email
    github: "https://github.com/freeze420-debug", // Replace with your GitHub URL
    resumePdfName: "Talha_Bin_Monir_Resume.pdf",
    resumeUrl: "#resume-download", // Will trigger instant formatted CV modal/download
  },

  // Key stats displayed in the hero and identity bar
  metrics: [
    { label: "Academic Standing", value: "4th Sem", detail: "B.Sc. in Computer Science & Engineering" },
    { label: "Archived Projects", value: "5+", detail: "C, C++, Java, & Sockets" },
    { label: "Algorithms Solved", value: "450+", detail: "LeetCode, Codeforces, & CSES" },
    { label: "Core Focus", value: "Systems & DSA", detail: "Memory, Concurrency, & Architecture" },
  ],

  // Interactive Interest Tags
  interests: [
    { name: "Systems Programming", category: "Core", highlight: true },
    { name: "Algorithms & Data Structures", category: "Core", highlight: true },
    { name: "Object-Oriented Architecture", category: "Core", highlight: true },
    { name: "Game Engine Mechanics", category: "Creative", highlight: false },
    { name: "Computer Networks & Sockets", category: "Systems", highlight: true },
    { name: "Database Engineering", category: "Backend", highlight: false },
    { name: "Memory & Concurrency Models", category: "Systems", highlight: true },
    { name: "Computer Graphics (Raylib)", category: "Creative", highlight: false },
    { name: "Open Source Tooling", category: "Ecosystem", highlight: false },
    { name: "Distributed Systems Theory", category: "Research", highlight: true },
    { name: "Compiler Design", category: "Research", highlight: false },
    { name: "C/C++ Build Toolchains", category: "DevOps", highlight: false }
  ],

  // Personal Engineering Philosophy
  philosophy: {
    quote: "To truly understand how software works, you must be willing to peel back the layers of abstraction and see the machine beneath.",
    author: "Core Engineering Creed",
    principles: [
      {
        number: "01",
        title: "First-Principles Rigor",
        description: "Deconstruct complex problems to their foundational mathematical and computational roots before writing a line of code."
      },
      {
        number: "02",
        title: "Software as a Craft",
        description: "Clean architecture, readable code, and predictable memory lifetimes matter as much as algorithmic complexity."
      },
      {
        number: "03",
        title: "Build to Understand",
        description: "Don't just use libraries—implement toy versions of chess engines, chat servers, and parsers to deeply comprehend their internals."
      },
      {
        number: "04",
        title: "Relentless Documentation",
        description: "A solved problem is only half-complete until the lessons, trade-offs, and failure modes are clearly archived for future reference."
      }
    ]
  }
};

/**
 * =========================================================================
 * 🛠️ TECHNICAL SKILLS REPOSITORY
 * =========================================================================
 */
export const skillsData: SkillItem[] = [
  // Languages
  {
    name: "C",
    category: "languages",
    level: "Core Mastery",
    experienceYears: "2+ Years",
    highlighted: true,
    description: "Manual memory allocation, pointer arithmetic, custom data structures, Raylib graphics, and low-level systems.",
    tags: ["Memory Management", "Pointers", "Raylib", "Data Structures"],
    associatedProjects: ["glinsky-hex-chess"]
  },
  {
    name: "C++",
    category: "languages",
    level: "Core Mastery",
    experienceYears: "2+ Years",
    highlighted: true,
    description: "Modern C++ (C++17/20), STL containers, RAII, smart pointers, templates, CMake tooling, and object-oriented architectures.",
    tags: ["Modern C++", "STL", "CMake", "RAII", "OOP"],
    associatedProjects: ["farmos-management-system", "dsa-competitive-archive"]
  },
  {
    name: "Java",
    category: "languages",
    level: "Proficient",
    experienceYears: "2 Years",
    highlighted: true,
    description: "Multi-threaded socket programming, JavaFX GUI development, JDBC database pipelines, design patterns, and JVM architecture.",
    tags: ["JavaFX", "Multithreading", "Sockets", "JDBC", "Design Patterns"],
    associatedProjects: ["javafx-chat-app"]
  },
  {
    name: "SQL",
    category: "languages",
    level: "Proficient",
    experienceYears: "1.5 Years",
    highlighted: true,
    description: "Relational schema design, normalization (1NF-BCNF), complex joins, indexing optimization, and ACID transactions.",
    tags: ["PostgreSQL", "MySQL", "SQLite", "Indexing", "Transactions"],
    associatedProjects: ["javafx-chat-app", "farmos-management-system"]
  },

  // Frameworks & Libraries
  {
    name: "Raylib",
    category: "frameworks",
    level: "Proficient",
    experienceYears: "1 Year",
    highlighted: true,
    description: "Hardware-accelerated 2D/3D graphics rendering in pure C, game loops, audio spatialization, and coordinate conversions.",
    tags: ["Graphics", "Game Loops", "C Library", "Math Rendering"],
    associatedProjects: ["glinsky-hex-chess"]
  },
  {
    name: "JavaFX",
    category: "frameworks",
    level: "Proficient",
    experienceYears: "1.5 Years",
    highlighted: true,
    description: "Desktop UI engineering, FXML bindings, CSS theming, asynchronous background tasks, and event-driven architectures.",
    tags: ["Desktop GUI", "FXML", "Event Architecture", "Animations"],
    associatedProjects: ["javafx-chat-app"]
  },
  {
    name: "C++ Standard Template Library (STL)",
    category: "frameworks",
    level: "Core Mastery",
    experienceYears: "2+ Years",
    highlighted: true,
    description: "Generic containers (vector, map, priority_queue, unordered_set), custom allocators, algorithms, and iterator traits.",
    tags: ["STL Containers", "Iterators", "Generics", "Algorithms"],
    associatedProjects: ["dsa-competitive-archive", "farmos-management-system"]
  },

  // Systems & Core CS
  {
    name: "Data Structures & Algorithms",
    category: "systems",
    level: "Core Mastery",
    experienceYears: "2+ Years",
    highlighted: true,
    description: "Graph algorithms (Dijkstra, Tarjan), balanced trees, dynamic programming, union-find, bit manipulation, and asymptotic analysis.",
    tags: ["Graphs", "DP", "Trees", "Sorting", "Complexity Analysis"],
    associatedProjects: ["glinsky-hex-chess", "dsa-competitive-archive"]
  },
  {
    name: "Computer Networks & Sockets",
    category: "systems",
    level: "Proficient",
    experienceYears: "1 Year",
    highlighted: true,
    description: "TCP/UDP transport layer protocols, custom packet framing, non-blocking socket I/O, client-server handshake, and OSI model.",
    tags: ["TCP/IP", "Sockets", "Protocols", "Packet Framing", "Concurrency"],
    associatedProjects: ["javafx-chat-app"]
  },
  {
    name: "Database Systems & Schema Design",
    category: "systems",
    level: "Proficient",
    experienceYears: "1.5 Years",
    highlighted: false,
    description: "Entity-Relationship modeling, B-Tree indices, transaction isolation levels, connection pooling, and ORM vs raw JDBC.",
    tags: ["ER Diagrams", "B-Trees", "Connection Pools", "ACID"],
    associatedProjects: ["farmos-management-system", "javafx-chat-app"]
  },
  {
    name: "Object-Oriented Software Design",
    category: "systems",
    level: "Core Mastery",
    experienceYears: "2 Years",
    highlighted: true,
    description: "SOLID principles, design patterns (Factory, Observer, Repository, Singleton), clean architecture, and modular abstractions.",
    tags: ["SOLID", "Design Patterns", "Clean Code", "Domain Architecture"],
    associatedProjects: ["farmos-management-system", "javafx-chat-app"]
  },

  // Developer Tools & Toolchains
  {
    name: "Git & GitHub",
    category: "tools",
    level: "Core Mastery",
    experienceYears: "2+ Years",
    highlighted: true,
    description: "Branching workflows, interactive rebasing, merge conflict resolution, CI/CD GitHub Actions, and code reviews.",
    tags: ["Version Control", "Rebase", "GitHub Actions", "Workflows"]
  },
  {
    name: "CMake & Make",
    category: "tools",
    level: "Proficient",
    experienceYears: "1.5 Years",
    highlighted: true,
    description: "Cross-platform C/C++ build orchestration, target configuration, dependency fetching, compiler flags, and static linking.",
    tags: ["Build Tooling", "C/C++", "Static Linking", "Compilers"]
  },
  {
    name: "Linux / WSL Environment",
    category: "tools",
    level: "Proficient",
    experienceYears: "2 Years",
    highlighted: false,
    description: "Bash scripting, GDB debugging, Valgrind memory profiling, system diagnostic utilities (htop, strace), and SSH.",
    tags: ["Bash", "GDB", "Valgrind", "Memory Profiling", "Shell"]
  },
  {
    name: "MySQL & SQLite",
    category: "tools",
    level: "Proficient",
    experienceYears: "1.5 Years",
    highlighted: false,
    description: "Local embedded databases (SQLite) and enterprise relational servers (MySQL) with JDBC and C++ drivers.",
    tags: ["MySQL", "SQLite", "Relational DB", "JDBC"]
  }
];

/**
 * =========================================================================
 * 🌟 FEATURED PROJECTS REPOSITORY
 * =========================================================================
 */
export const featuredProjectsData: ProjectItem[] = [
  {
    id: "glinsky-hex-chess",
    slug: "glinsky-hexagonal-chess",
    title: "Glinsky Hexagonal Chess Engine",
    tagline: "High-performance hexagonal chess game engine and graphical visualizer in C and Raylib.",
    category: "Systems & Graphics",
    status: "Completed",
    year: "2025",
    featured: true,
    technologies: ["C", "Raylib", "Axial Coordinates", "Bitboards", "CMake", "GDB"],
    description: "A complete implementation of Władysław Gliński's hexagonal chess featuring custom axial coordinate mathematics, 91-cell board topology, 3-color bishops, move generation, and an interactive graphical interface.",
    longDescription: "Gliński's Hexagonal Chess takes classical chess geometry into a 91-cell hexagonal grid where pieces move across orthogonal edges and diagonal vertices. Standard Cartesian grids fail to naturally represent hexagonal symmetry, so this project implements an axial coordinate system (q, r, s where q + r + s = 0) to achieve constant-time vector transformations for bishop triplets (moving along 6 diagonal directions) and rook paths (moving along 6 orthogonal axes).\n\nBuilt entirely in raw C99 with Raylib for GPU-accelerated rendering, the engine manages complete move validation, check/checkmate detection, castling rules specific to Gliński's geometry, and an alpha-beta minimax adversary prototype.",
    highlights: [
      "Custom 3-Axis Cubic/Axial Coordinate System ensuring O(1) adjacency calculations",
      "91-cell hexagonal board generator with procedural vector rendering in Raylib",
      "Validation engine handling unique hexagonal pawn diagonal captures and 3-color bishop trajectories",
      "Full check, checkmate, stalemate verification, and multi-variant rules support",
      "Zero external runtime dependencies aside from Raylib graphics context"
    ],
    architectureNotes: [
      "Board Topology: Represented internally as a flattened 1D array mapped via an axial hash table lookup.",
      "Vector Rays: Ray-casting direction arrays define the 6 orthogonal and 6 diagonal movement vectors.",
      "Rendering Pipeline: Dynamic polygon triangulation for hexagon cells with custom anti-aliased edge shaders."
    ],
    codeSnippet: {
      language: "c",
      title: "axial_coordinates.c — Hex Vector Move Step",
      code: `// Axial coordinate transformation for Gliński hexagonal grid (q, r, s)
typedef struct { int q; int r; int s; } HexCoord;

static const HexCoord ROOK_DIRS[6] = {
    {+1,  0, -1}, {+1, -1,  0}, { 0, -1, +1},
    {-1,  0, +1}, {-1, +1,  0}, { 0, +1, -1}
};

HexCoord hex_add(HexCoord a, HexCoord b) {
    return (HexCoord){ a.q + b.q, a.r + b.r, a.s + b.s };
}

bool is_valid_hex_cell(HexCoord h, int radius) {
    return (abs(h.q) <= radius && abs(h.r) <= radius && abs(h.s) <= radius);
}`
    },
    githubUrl: "https://github.com/talhabinmonir/glinsky-hexagonal-chess",
    demoUrl: "#interactive-visualizer",
    image: hexChessThumb,
    metrics: [
      { label: "Board Cells", value: "91 Hexagons" },
      { label: "Rendering Rate", value: "60 FPS Native" },
      { label: "Memory Footprint", value: "< 14 MB RAM" },
      { label: "Language", value: "Pure C99" }
    ]
  },
  {
    id: "javafx-chat-app",
    slug: "javafx-client-server-chat",
    title: "JavaFX Multi-Client Network Chat System",
    tagline: "Concurrent client-server desktop messaging suite with socket streaming, MySQL persistence, and cryptographic auth.",
    category: "Desktop & Networking",
    status: "Ongoing",
    year: "2025",
    featured: true,
    technologies: ["Java", "JavaFX", "TCP/IP Sockets", "JDBC", "MySQL", "Multithreading", "FXML"],
    description: "A resilient desktop client-server messaging platform built with JavaFX and multithreaded TCP sockets, featuring instant chat channels, secure user authentication, active presence telemetry, media attachment sharing, and SQL history logging.",
    longDescription: "Designed to explore real-world client-server architectures without third-party messaging abstractions. The backend server maintains a non-blocking connection pool managing concurrent client threads via thread pools, broadcasting structured binary/JSON payload packets across active channels.\n\nThe user interface utilizes JavaFX with CSS custom theming, asynchronous background task workers (Task/Service API) to eliminate UI freezing during network I/O, and JDBC transaction managers for relational chat persistence in MySQL.",
    highlights: [
      "Concurrent TCP socket server handling multi-user synchronization with custom framed protocols",
      "Asynchronous UI architecture decoupling network worker threads from the JavaFX Application Thread",
      "Persistent chat history, user credentials with SHA-256 password hashing, and profile storage in MySQL",
      "Binary file and image transfer pipeline with chunked streaming and integrity checks",
      "Custom responsive dark/light desktop UI with user presence heartbeat indicators"
    ],
    architectureNotes: [
      "Connection Pool: Fixed thread pool dynamically spawns client handler workers.",
      "Protocol Framing: 4-byte header packet indicating payload type, length, and recipient identifier.",
      "State Synchronization: Pub/Sub event bus ensures real-time active user list updates."
    ],
    codeSnippet: {
      language: "java",
      title: "ClientHandler.java — Non-Blocking Broadcast Loop",
      code: `public void broadcastMessage(Packet packet) {
    synchronized (activeClients) {
        for (ClientHandler client : activeClients) {
            if (client.getUserId() != this.userId) {
                client.getOutStream().writeObject(packet);
                client.getOutStream().flush();
            }
        }
    }
}`
    },
    githubUrl: "https://github.com/talhabinmonir/javafx-network-chat",
    demoUrl: "",
    image: chatAppThumb,
    metrics: [
      { label: "Concurrency", value: "Multi-Threaded" },
      { label: "Protocol", value: "Raw TCP Sockets" },
      { label: "Database", value: "MySQL 8.0" },
      { label: "UI Framework", value: "JavaFX 21" }
    ]
  },
  {
    id: "farmos-management-system",
    slug: "farmos-enterprise-system",
    title: "farmOS — Agricultural Resource & Yield Architecture",
    tagline: "Structured enterprise management software in modern C++ with relational database indexing and analytics.",
    category: "Software Architecture",
    status: "Completed",
    year: "2025",
    featured: true,
    technologies: ["C++20", "CMake", "SQLite3", "OOP Architecture", "Service Layer Pattern", "GoogleTest"],
    description: "A domain-driven agricultural enterprise and yield tracking management suite engineered in modern C++, demonstrating clean service-oriented architecture, relational database indexing, financial auditing, and automated reporting.",
    longDescription: "farmOS is a comprehensive architectural case study demonstrating enterprise-grade software patterns in C++. Instead of monolith scripts, the system is separated into decoupled modules: Domain Entities, Data Access Objects (DAO), Service Layer, and CLI/GUI Presentation.\n\nThe project utilizes modern C++20 language features (smart pointers, concepts, structured binding), CMake build orchestration, SQLite embedded storage with prepared statements, and GoogleTest suites for automated regression verification.",
    highlights: [
      "Service-Oriented layered C++ architecture ensuring loose coupling and testability",
      "Embedded SQLite relational backend utilizing prepared statements to prevent injection and optimize query plans",
      "Automated financial cash-flow and harvest yield calculation engines with analytical summaries",
      "Unit tested core service layer with GoogleTest framework (100% test pass rate)",
      "Strict memory safety compliance utilizing RAII and zero raw pointer ownership"
    ],
    architectureNotes: [
      "Repository Pattern: Abstracts SQLite query logic behind standardized C++ generic interfaces.",
      "Build System: Multi-target CMake build generating both the primary executable and GoogleTest runner."
    ],
    codeSnippet: {
      language: "cpp",
      title: "YieldService.hpp — Modern C++ Service Layer",
      code: `template<typename Repository>
requires DatabaseRepository<Repository>
class YieldAnalyticsService {
private:
    std::unique_ptr<Repository> repo_;
public:
    explicit YieldAnalyticsService(std::unique_ptr<Repository> repo) 
        : repo_(std::move(repo)) {}

    [[nodiscard]] std::vector<HarvestRecord> computeSeasonalYields(int seasonYear) const {
        return repo_->queryRecordsByYear(seasonYear);
    }
};`
    },
    githubUrl: "https://github.com/talhabinmonir/farmos-management-system",
    demoUrl: "",
    image: farmosThumb,
    metrics: [
      { label: "C++ Standard", value: "C++20" },
      { label: "Architecture", value: "Layered Domain" },
      { label: "Build Tool", value: "CMake 3.28+" },
      { label: "Testing", value: "GoogleTest Suite" }
    ]
  }
];

/**
 * =========================================================================
 * 🗄️ COMPLETE PROJECT ARCHIVE
 * =========================================================================
 * Easily add any number of past, current, or future projects.
 */
export const allProjectsArchive: ProjectItem[] = [
  ...featuredProjectsData,
  {
    id: "dsa-competitive-archive",
    slug: "data-structures-algorithms-archive",
    title: "Algorithms & Data Structures C++ Archive",
    tagline: "Comprehensive repository of 450+ solved competitive programming problems and custom data structure implementations.",
    category: "Algorithms & Data Structures",
    status: "Ongoing",
    year: "2023-2026",
    featured: false,
    technologies: ["C++", "STL", "Segment Trees", "Fenwick Trees", "Graph Algorithms", "CSES"],
    description: "Curated collection of self-implemented algorithms and data structures in modern C++, including Segment Trees with lazy propagation, Disjoint Set Union (DSU), Trie, Dijkstra, Floyd-Warshall, and DP optimizations.",
    longDescription: "Serves as an ongoing competitive programming and technical interview knowledge vault. Each implementation contains rigorous asymptotic time/space complexity commentary and problem verification notes.",
    highlights: ["450+ verified solutions across Codeforces, LeetCode, and CSES", "Hand-crafted data structure templates ready for competitive contests", "Modular test harness benchmarking runtime against edge cases"],
    githubUrl: "https://github.com/talhabinmonir/dsa-cpp-archive",
    image: "/assets/projects/dsa.png"
  }
];

/**
 * =========================================================================
 * 🎓 ACADEMIC JOURNEY & TIMELINE
 * =========================================================================
 */
export const academicJourneyData: AcademicJourney = {
  degree: "Bachelor of Science in Computer Science & Engineering",
  major: "Computer Science & Engineering",
  institution: "Islamic University of Technology", // Configurable
  currentSemester: "4th Semester (Sophomore Year)",
  expectedGraduation: "2027",
  location: "Dhaka, Bangladesh",
  currentStanding: "B.Sc. in CSE Undergraduate (Sophomore)",
  semesters: [
    {
      semester: "4th Semester",
      term: "Spring",
      year: "2026",
      status: "Current",
      focus: "Telecommunications, Algorithm Design, Scalable System Architecture & Probabilistic Modeling",
      keyCourses: [
        { name: "Data and Telecommunications", description: "Signal transmission, digital modulation, multiplexing, physical & data link layer protocols, switching architectures, and telecommunication standards." },
        { name: "Algorithms", description: "Algorithm design paradigms, greedy methods, dynamic programming, graph algorithms, network flow, and complexity analysis." },
        { name: "System Analysis and Design", description: "Software development lifecycles (SDLC), UML architectural modeling, requirements engineering, object-oriented analysis, and scalable system design." },
        { name: "Probability and Statistics", description: "Probability distributions, random variables, hypothesis testing, Bayesian inference, and stochastic modeling in computing." }
      ],
      semesterHighlights: [
        "Deep diving into advanced graph algorithms, dynamic programming, and asymptotic complexity analysis",
        "Analyzing data transmission pipelines, communication protocols, and packet switching networks",
        "Designing modular software architecture blueprints using UML and modern system engineering practices"
      ]
    },
    {
      semester: "3rd Semester",
      term: "Fall",
      year: "2025",
      status: "Completed",
      focus: "Core Software Architecture, Data Structures, Machine Organization & Database Systems",
      keyCourses: [
        { name: "Object Oriented Programming", description: "Design patterns, encapsulation, inheritance, polymorphism, interfaces, generic programming, and modular application design.", grade: "A+" },
        { name: "Data Structures", description: "Trees, graphs, heaps, hash tables, memory-efficient data representations, and asymptotic time-space analysis.", grade: "A+" },
        { name: "Computer Organization and Architecture", description: "Instruction set architectures (ISA), CPU datapath, pipelining, cache memory hierarchies, and microarchitecture.", grade: "A" },
        { name: "Database Management Systems", description: "Relational algebra, SQL query optimization, normalization (BCNF/3NF), indexing (B+ Trees), and ACID transactions.", grade: "A+" }
      ],
      semesterHighlights: [
        "Mastered core data structure implementations and algorithmic runtime efficiency",
        "Engineered object-oriented applications emphasizing clean design patterns and maintainability",
        "Modeled relational database schemas, transactions, and optimized SQL queries"
      ]
    },
    {
      semester: "2nd Semester",
      term: "Spring",
      year: "2025",
      status: "Completed",
      focus: "Discrete Mathematical Foundations & Digital Circuit Logic Design",
      keyCourses: [
        { name: "Discrete Mathematics", description: "Propositional logic, set theory, mathematical induction, combinatorics, graph theory foundations, and Boolean algebra.", grade: "A+" },
        { name: "Digital Logic Design", description: "Combinational and sequential logic circuits, Karnaugh maps, flip-flops, registers, counters, and finite state machines (FSM).", grade: "A+" }
      ],
      semesterHighlights: [
        "Designed combinational and sequential logic circuits and finite state machines",
        "Applied mathematical induction, formal logic proofs, and combinatorial reasoning"
      ]
    },
    {
      semester: "1st Semester",
      term: "Fall",
      year: "2024",
      status: "Completed",
      focus: "Foundational Computing Principles & Structured Procedural Programming",
      keyCourses: [
        { name: "Computing for Engineers", description: "Foundational computational concepts, algorithm formulation, hardware abstractions, and engineering computation.", grade: "A+" },
        { name: "Structured Programming", description: "Procedural programming in C, control flow, functions, pointers, memory allocation, and modular software design.", grade: "A+" }
      ],
      semesterHighlights: [
        "Mastered imperative programming foundations, pointers, and modular code design in C",
        "Established strong engineering computation and algorithmic problem-solving foundations"
      ]
    }
  ],
  achievements: [],
  certifications: [
    { name: "Algorithmic Toolbox & Data Structures Specialization", issuer: "Coursera / UC San Diego", date: "2024" },
    { name: "C++ Advanced Systems & Memory Programming", issuer: "Interactive Coursework", date: "2025" },
    { name: "Computer Networks: A Systems Approach", issuer: "Independent Study", date: "2025" }
  ]
};

/**
 * =========================================================================
 * 🔬 RESEARCH & ACADEMIC EXPLORATION
 * =========================================================================
 * Clean placeholder ready for future research papers, active investigations, and technical publications.
 */
export const researchData: ResearchItem[] = [];

/**
 * =========================================================================
 * 📝 WRITING, TECHNICAL NOTES & KNOWLEDGE ARCHIVE
 * =========================================================================
 */
export const articlesData: ArticleItem[] = [
  {
    id: "axial-coordinates-hex-chess",
    slug: "axial-coordinates-for-hexagonal-chess-in-c",
    title: "Implementing Axial Coordinates for Hexagonal Chess in C",
    summary: "A mathematical breakdown of how 3-axis cubic coordinates solve the geometry of Gliński's 91-cell hexagonal chessboard in pure C99.",
    category: "Algorithms",
    date: "February 12, 2026",
    readingTime: "7 min read",
    tags: ["C", "Geometry", "Game Dev", "Math", "Raylib"],
    featured: true,
    keyTakeaways: [
      "Square Cartesian grids make hexagonal neighbor math notoriously complex and error-prone.",
      "By adding a third redundant coordinate axis (s = -q - r), distance formulas become trivial: max(|Δq|, |Δr|, |Δs|).",
      "Rooks move along 6 axes; Bishops move along 6 vertices; Knights jump 2 steps in one direction, 1 step at 60 degrees.",
      "Flattening axial coordinates into a zero-indexed array eliminates heap lookups entirely."
    ],
    content: `## The Problem with Hexagons in Cartesian Space

When implementing classical 8x8 chess, mapping squares to a 2D array \`board[8][8]\` is straightforward. Every square has 4 orthogonal neighbors and 4 diagonal neighbors.

In Gliński's hexagonal chess, however:
- The board consists of **91 hexagonal cells** arranged in a large hexagon.
- There are **3 colors of bishops** (because hexagons share vertices of 3 distinct orientations).
- Orthogonal movement (Rooks) follows 6 edge directions.
- Diagonal movement (Bishops) crosses 6 vertex points.

If you attempt to use simple \`(x, y)\` cartesian coordinates with offset rows, every even row requires different math than every odd row. Your code quickly turns into a nightmare of nested conditionals.

\`\`\`c
// The naive approach: full of messy parity checks
if (row % 2 == 0) {
    neighbor_x = col + 1;
} else {
    neighbor_x = col - 1;
}
\`\`\`

---

## The Elegance of Cube & Axial Coordinates

The cleanest solution is **Cubic Coordinates**. Imagine a 3D cube sliced along the plane \`x + y + z = 0\`. The cross-section forms a perfect hexagonal grid!

We can project this into 2D **Axial Coordinates** \`(q, r)\`, where the third coordinate \`s\` is implicitly:
\`\`\`
s = -q - r
\`\`\`

Now, moving in any of the 6 orthogonal directions is simply adding a constant 2D vector:

\`\`\`c
typedef struct { int q; int r; int s; } HexCoord;

static const HexCoord ROOK_DIRECTIONS[6] = {
    {+1,  0, -1}, // East
    {+1, -1,  0}, // North-East
    { 0, -1, +1}, // North-West
    {-1,  0, +1}, // West
    {-1, +1,  0}, // South-West
    { 0, +1, -1}  // South-East
};
\`\`\`

---

## Calculating Hex Distance in O(1)

Because the coordinates are symmetrical across all 3 axes, the distance between any two hexagonal cells \`A\` and \`B\` is simply:

\`\`\`c
int hex_distance(HexCoord a, HexCoord b) {
    return (abs(a.q - b.q) + abs(a.r - b.r) + abs(a.s - b.s)) / 2;
}
\`\`\`

No square roots, no trigonometry, and no floating-point rounding errors.

---

## Memory Layout: The Flattened Board

Allocating 91 individual pointers is terrible for CPU cache locality. Instead, we can map any valid \`(q, r)\` coordinate to a contiguous array index of size 91 using a small offset lookup table.

This allows the move validation loop to run entirely in L1 cache during alpha-beta minimax search trees!`
  },
  {
    id: "demystifying-socket-io-java",
    slug: "demystifying-socket-io-concurrency-java",
    title: "Building Multi-Client Socket Architectures in Java",
    summary: "Architectural lessons learned building a concurrent client-server desktop messaging suite with JavaFX and TCP sockets.",
    category: "Systems Programming",
    date: "January 20, 2026",
    readingTime: "6 min read",
    tags: ["Java", "Networking", "Concurrency", "JavaFX", "Sockets"],
    featured: true,
    keyTakeaways: [
      "Never execute network read/write operations on the UI thread (JavaFX Application Thread).",
      "Use explicit length-prefixed packet framing to prevent TCP stream fragmentation bugs.",
      "Thread pools (ExecutorService) prevent unbounded thread creation crashes under load.",
      "Decouple network events from UI controllers using an internal observable event bus."
    ],
    content: `## The TCP Stream Problem: TCP is Not a Packet Protocol

One of the first traps when building a network chat app in Java is assuming that one \`socket.getOutputStream().write()\` on the client corresponds to exactly one \`read()\` on the server.

TCP is a **continuous stream of bytes**, not a message protocol. The OS may coalesce three small chat messages into one TCP segment, or split a large image payload into five fragments.

### The Solution: Length-Prefixed Framing

Before transmitting any message payload, we write a 4-byte integer header indicating the exact byte length of the upcoming payload:

\`\`\`java
public void sendPacket(byte[] payload, byte packetType) throws IOException {
    DataOutputStream out = new DataOutputStream(socket.getOutputStream());
    out.writeByte(packetType);        // 1 byte header
    out.writeInt(payload.length);     // 4 byte payload length
    out.write(payload);               // raw payload bytes
    out.flush();
}
\`\`\`

On the receiving end, the listener thread reads the header first, allocates a buffer of precisely that size, and loops \`readFully()\` until the complete packet has arrived.

---

## Concurrency: The JavaFX Application Thread Rule

JavaFX, like most GUI toolkits, is strictly single-threaded for rendering. If a network socket blocks waiting for input, the entire window freezes.

To solve this:
1. The **Network Worker Thread** sits in a continuous blocking loop receiving packets.
2. When a valid packet arrives, it dispatches the UI update via \`Platform.runLater(() -> { ... })\`.
3. The UI controllers never touch raw sockets directly—they post actions to a centralized \`ChatService\`.`
  },
  {
    id: "cache-friendly-cpp-systems",
    slug: "cache-friendly-data-structures-cpp",
    title: "Why Cache Lines Matter More Than Big-O in Systems C++",
    summary: "Exploring how CPU cache hierarchies, false sharing, and contiguous memory layouts can make an O(N) array faster than an O(log N) tree.",
    category: "Software Architecture",
    date: "December 15, 2025",
    readingTime: "8 min read",
    tags: ["C++", "Hardware", "Performance", "Memory", "Architecture"],
    featured: false,
    keyTakeaways: [
      "Accessing main RAM takes ~200 CPU cycles; accessing L1 cache takes ~4 cycles.",
      "Linked lists and pointer trees cause random memory access and high cache misses.",
      "Contiguous \`std::vector\` memory structures enable CPU prefetchers to load data in advance.",
      "Structure-of-Arrays (SoA) layout frequently outperforms Array-of-Structures (AoS)."
    ],
    content: `## The Asymptotic Trap

In Computer Science curriculum, we are taught to worship asymptotic time complexity. We learn that finding an item in a balanced binary search tree is \`O(log N)\`, while a linear scan in an array is \`O(N)\`.

So for \`N = 100\`, the tree should easily win, right?

**In practice, on modern x86 hardware, the \`O(N)\` array often wins by a factor of 3x to 5x.**

---

## The Hardware Reality: 64-Byte Cache Lines

CPUs do not read memory byte-by-byte. When you access an address, the memory controller fetches a **64-byte cache line** into L1/L2/L3 cache.

- In \`std::vector<int>\`, elements sit contiguously. Loading \`arr[0]\` automatically pulls \`arr[1]\` through \`arr[15]\` into L1 cache for free!
- In a linked list or pointer tree (\`std::map\`), every node is allocated independently on the heap. Traversing each node causes a cache miss, stalling the CPU pipeline for ~200 clock cycles.

---

## Practical Systems Takeaways

1. Default to \`std::vector\` unless you have proven with a profiler that another data structure is required.
2. Group frequently accessed data fields together to fit inside a single 64-byte cache line.
3. Use flat index lookups rather than raw pointers whenever possible.`
  }
];

/**
 * =========================================================================
 * 🧭 CURRENTLY EXPLORING & ROADMAP ("NOW")
 * =========================================================================
 */
export const currentlyExploringData: CurrentlyExploringItem[] = [
  {
    id: "ebpf-linux-tracing",
    title: "Linux eBPF & Kernel Observability",
    category: "Systems",
    status: "Deep Dive",
    description: "Studying in-kernel bytecode execution with eBPF to trace socket packet lifecycles and monitor system call latency with zero overhead.",
    keyConcepts: ["Kernel Probes (kprobes)", "eBPF Maps", "BCC Tools", "XDP Packet Filtering"],
    startedDate: "Jan 2026"
  },
  {
    id: "lock-free-queues",
    title: "Lock-Free Concurrency & Atomic Memory Models",
    category: "Systems",
    status: "Active Experiment",
    description: "Designing a Single-Producer Single-Consumer (SPSC) lock-free ring buffer in C++ using atomic memory orders (memory_order_acquire / release).",
    keyConcepts: ["Memory Barriers", "Compare-and-Swap (CAS)", "Atomic Operations", "Cache Line Invalidation"],
    startedDate: "Feb 2026"
  },
  {
    id: "raft-consensus-proto",
    title: "Raft Distributed Consensus Protocol",
    category: "Research Prototype",
    status: "Reading Paper",
    description: "Deconstructing Ongaro and Ousterhout's Raft consensus paper and constructing a toy distributed key-value state machine in C++.",
    keyConcepts: ["Leader Election", "Log Replication", "Split-Brain Safety", "Heartbeats"],
    startedDate: "Feb 2026"
  },
  {
    id: "simd-vectorization",
    title: "SIMD Vectorization & AVX2 Intrinsics",
    category: "Algorithms & Theory",
    status: "Building POC",
    description: "Vectorizing raycasting and bounding-box intersection calculations using x86 AVX2 intrinsics to process 8 floats per CPU instruction.",
    keyConcepts: ["AVX2", "_mm256 Intrinsics", "Data Alignment", "Auto-Vectorization"],
    startedDate: "Jan 2026"
  }
];

/**
 * =========================================================================
 * 🎙️ FEATURED TALKS & VIDEOS
 * =========================================================================
 */
export const featuredTalksData: FeaturedTalkItem[] = [
  {
    id: "complex-engineering-problem",
    title: "A Complex Engineering Problem",
    youtubeUrl: "https://youtu.be/Mbrb5lV3MSE?si=I691WrfFHLz9mJXc",
    videoId: "Mbrb5lV3MSE",
    thumbnailUrl: "https://img.youtube.com/vi/Mbrb5lV3MSE/maxresdefault.jpg",
    speaker: "Talha Bin Monir",
    date: "2026",
    description: "In-depth engineering analysis, system modeling, and technical problem-solving breakdown."
  }
];


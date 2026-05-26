import React from 'react';
import { motion } from 'framer-motion';
import {
  FiArrowLeft,
  FiAlertCircle,
  FiTarget,
  FiUserCheck,
  FiCheckSquare,
  FiZap,
  FiUsers,
  FiCheck,
  FiAlertTriangle,
  FiUser,
  FiGitCommit,
  FiGitBranch,
  FiFileText,
  FiLayout,
  FiList,
  FiLayers,
  FiMonitor,
  FiCoffee,
  FiTrendingUp,
  FiAward,
  FiPlayCircle
} from 'react-icons/fi';
import './ProjectDetail.css';

// Import images
import voosImg from '../assets/project_voos_1776359260540.avif';
import credroadImg from '../assets/project_credroad_1776359281133.png';
import suplanImg from '../assets/project_suplan_1776359295831.png';
import placeverImg from '../assets/project_placever_1776359311873.avif';
import carlosPortrait from '../assets/carlos_portrait.png';
import sarahPortrait from '../assets/sarah_portrait.png';
import userJourneyTable from '../assets/user_journey_table.png';
import appmapTable from '../assets/appmap_table.avif';
import paperWireframes from '../assets/paper_wireframes.png';
import digitalWireframes from '../assets/digital_wireframes.avif';
import mockupsOverview from '../assets/mockups_overview.avif';
import screenDateTime from '../assets/screen_date_time.png';
import screenAllMovies from '../assets/screen_all_movies.png';
import screenInCinema from '../assets/screen_in_cinema.png';
import screenMovieDetails from '../assets/screen_movie_details.png';
import screenSeats from '../assets/screen_seats.png';
import screenDrawer from '../assets/screen_drawer.png';
import screenSeatSelect from '../assets/screen_seat_select.png';
import screenTicketBarcode from '../assets/screen_ticket_barcode.png';
import screenMyTickets from '../assets/screen_my_tickets.png';
import screenMyProfile from '../assets/screen_my_profile.png';
import placeverUserJourney from '../assets/placever/user_journey.avif';
import placeverAppmap from '../assets/placever/appmap.avif';
import placeverPaperWire from '../assets/placever/paper_wire.avif';
import placeverDigitalWireframe from '../assets/placever/digital_wireframe.avif';
import placeverMockups from '../assets/placever/mockups.avif';
import placeverRow1Img1 from '../assets/placever/row1_img1.avif';
import placeverRow1Img2 from '../assets/placever/row1_img2.avif';
import placeverRow1Img3 from '../assets/placever/row1_img3.avif';
import placeverRow1Img4 from '../assets/placever/row1_img4.avif';
import placeverRow1Img5 from '../assets/placever/row1_img5.avif';
import placeverRow2Img1 from '../assets/placever/row2_img1.avif';
import placeverRow2Img3 from '../assets/placever/row2_img3.avif';
import placeverRow2Img4 from '../assets/placever/row2_img4.avif';
import placeverRow2Img5 from '../assets/placever/row2_img5.avif';

const projectDetails = {
  "voos-cinema": {
    title: "Voo's Cinema",
    tagline: "Voo's Mobile Ticketing App Case Study",
    subtitle: "The Voo's mobile ticketing app is designed to streamline the movie-going experience for an American net of offline theatres. It enables users to browse movie listings, purchase tickets, select seats, and pre-order them through an intuitive, user-friendly interface.",
    location: "",
    year: "",
    img: voosImg,
    problem: "Cinema theater apps are often overloaded with information and can be challenging to navigate. Their designs are cluttered, the seat selection process is unclear, and the checkout experience can be confusing.",
    goal: "Design a ticketing application that is absolutely user-friendly by providing clear navigation and offering fast seat selection and frisky ticket purchasing.",
    role: "UX designer leading the Voo's mobile application design",
    responsibilities: [
      "conducting research,",
      "storyboarding,",
      "paper and digital wireframing,",
      "iterating on designs,",
      "making high-fidelity prototype"
    ],
    researchParagraph: "The Voo's mobile ticketing app is designed to streamline the movie-going experience for an American net of offline theatres. It enables users to browse movie listings, purchase tickets, select seats, and pre-order them through an intuitive, user-friendly interface.",
    painPoints: [
      {
        title: "General navigation:",
        desc: "Cinema theaters apps are often busy, which reflects in confusing navigation."
      },
      {
        title: "Seat selection:",
        desc: "It's a challenge to select seats in apps in quite easy and clear way."
      },
      {
        title: "Ticket purchasing:",
        desc: "Purchasing process is often difficult and overloaded with unwanted information."
      }
    ],
    personaDescription: "Personas were selected by conducting user research and identifying common pain points, that frustrate and block the user from getting what they need from a product.",
    personas: [
      {
        name: "Carlos",
        age: "21",
        education: "Pursuing a Bachelor's degree",
        hometown: "NJ, New York",
        occupation: "College Student",
        family: "Single, lives with roommates",
        quote: "Living an interesting life",
        desc: "Carlos is a busy college student who enjoys going to the movies with his friends on weekends as a way to relax and unwind from his coursework. He prefers to see the latest blockbuster films and is always on the lookout for deals and discounts to save money. As a tech-savvy individual, he prefers using his smartphone to purchase tickets and share the experience with his friends on social media.",
        goals: [
          "To easily find the latest movies",
          "To be able to purchase tickets and select seats easily",
          "To receive discounts and promotions"
        ],
        frustrations: [
          "Limited budget for movie tickets",
          "Long wait times at the box office",
          "Difficulty finding showtimes for specific movies"
        ],
        img: carlosPortrait
      },
      {
        name: "Sarah",
        age: "32",
        education: "MBA Graduate",
        hometown: "Boston, MA",
        occupation: "Marketing Manager",
        family: "Married, 2 kids",
        quote: "Making family time count",
        desc: "Sarah is a busy working mother who loves planning weekend movie outings for her family. She wants a quick and reliable way to reserve adjacent seats in advance, pre-order kids' meals, and avoid waiting in long lines at the theater.",
        goals: [
          "Select adjacent seats for the family in advance",
          "Pre-order snacks and drinks to save time",
          "Find kid-friendly movie ratings and showtimes"
        ],
        frustrations: [
          "Not being able to select seats in advance",
          "Arriving at the theater to find sold-out family showtimes",
          "Long concession lines with impatient kids"
        ],
        img: sarahPortrait
      }
    ],
    journeyMapDesc: "It is the series of experiences Carlos has as he achieve a specific goal. It was built on the his experience.",
    journeyMapRightParagraph: "I developed a user journey map of Carlos's experience with the app to highlight potential pain points and identify areas for improvement.",
    journeyMapGoal: "Choose a good movie in a cinema theatre nearby and select seats in an app in a fast and clear way",
    journeyMapImg: userJourneyTable,
    startingDesignText: "I created various diagrams and storyboards to clarify and analyze the app's information and architecture. Afterward, I sketched paper wireframes and then transitioned to digital wireframes, building a low-fidelity prototype to conduct initial usability studies with stakeholders.",
    appmapDesc: "It's a structured scheme that outlines the pages and content hierarchy of the app.",
    appmapRightParagraph: "Next step: creating the application map. My goal here was to make strategic information architecture decisions that would improve overall app navigation. The structure I chose was designed to make things simple and easy.",
    appmapImg: appmapTable,
    paperWireframesDesc: "They initially oriented on the basic structure of the homepage and highlight the intended function of each element.",
    paperWireframesRightParagraph: "Here I drew five different versions of how structure of information on a homepage might look like. Then I reviewed all the versions and combined them in the refined one.\n\nThe goal was to explore different ideas with wireframes.",
    paperWireframesImg: paperWireframes,
    digitalWireframesDesc: "More \"clear\" version of wireframes in a digital form. Also all the important pages are added in it.",
    digitalWireframesRightParagraph: "On this step I used the Figma design tool to create digital wireframes of all the pages. Then I bonded all of them into the clear and smooth structure.\n\nThe goal is to show how all the pages and things interact with each other.",
    digitalWireframesImg: digitalWireframes,
    usabilityStudiesDesc: "This is an examination of users and their needs, which adds realistic context to the design process.",
    usabilityStudiesRightParagraphs: [
      "First I conducted unmoderated usability studies with a few participants: they had to answer different questions about the app and share their observations while using the initial low-fi prototype. After getting the data, I analyzed it and synthesized the information obtained. Finally, I found themes and came up with several insights.",
      "The goal was to identify pain points that the user experiences with the app designs so the issues can be fixed before the final product launches."
    ],
    usabilityInsights: [
      {
        title: "Add initial screen:",
        desc: "In the beginning, before choosing a city and theater, it would be great to look through the whole app and learn everything about it."
      },
      {
        title: "Movie search:",
        desc: "There are no movie search - it's necessary to add it on the movies list page."
      },
      {
        title: "Buttons in account:",
        desc: "If user wants to change his account, he should be able to log out or delete it completely."
      }
    ],
    refiningDesignTagline: "The clear version :",
    refiningDesignText: "On this step, first I created a static, high-fidelity Voo's app design (keeping in mind all the conclusions from the previous phase of usability studies) that is a clear representation of a final product called design mockups. After that, I created a high-fidelity prototype of the app.",
    mockupsDesc: "These are a high fidelity design that represents a final product",
    mockupsRightParagraphs: [
      "I created all the app pages mockups, incorporating the right design elements such as typography, color, and iconography. I also included captivating and visually appealing images, and developed all the necessary components and elements.",
      "The goal was to demonstrate the final Voo's app in as much detail as possible."
    ],
    mockupsImg: mockupsOverview,
    showcaseScreens: [
      screenDateTime,
      screenAllMovies,
      screenInCinema,
      screenMovieDetails,
      screenSeats
    ],
    showcaseScreensRow2: [
      screenDrawer,
      screenSeatSelect,
      screenTicketBarcode,
      screenMyTickets,
      screenMyProfile
    ],
    prototypeDesc: "It's the detailed, interactive version of designs that closely match the look and feel of the final product.",
    prototypeRightParagraph: "I turned my mockups into a prototype that's ready for testing, using gestures and motion, which can help enrich the user experience and increase the usability of the app.",
    prototypeImg: screenSeatSelect,
    prototypeFeatures: [
      "City and cinema theater selection",
      "Movies slideshow",
      "List of movies + search option",
      "Separate movie page, adding to favourites",
      "Show selection: date and time, hall and seats",
      "Adding selected seats",
      "Calendar with results filtering",
      "Menu and its sections"
    ],
    outcomeText: "I created various diagrams and storyboards to clarify and analyze the app's information and architecture. Afterward, I sketched paper wireframes and then transitioned to digital wireframes, building a low-fidelity prototype to conduct initial usability studies with stakeholders.",
    takeawaysDesc: "The series of hand-drawing frames that visually describe and explore a user's experience with a product.",
    takeawaysImpact: "Our target users have found Voo's design to be intuitive, user-friendly, and easy to use: choose a movie, select seats, and buy tickets.",
    takeawaysLearned: "The key lesson I learned is that even minor changes can significantly impact the user experience. My biggest takeaway is to always prioritize the genuine needs of the user.",
    nextStepsDesc: "The series of hand-drawing frames that visually describe and explore a user's experience with a product.",
    nextStepsItems: [
      "Conduct follow-up usability testing on the new app iteration.",
      "Identify any additional areas of need and ideate on new features."
    ]
  },
  "credroad": {
    title: "Credroad",
    tagline: "Credroad Credit-Management Case Study",
    subtitle: "Credroad is a personal credit-management web application designed to help users in the USA track, analyze, and boost their credit scores. It translates complex financial metrics into simple actionable steps and simplifies credit card pre-qualifications.",
    location: "USA",
    year: "2024",
    img: credroadImg,
    problem: "Traditional credit bureaus and reporting apps present financial data in dense, intimidating formats with generic advice, leading to user confusion and anxiety about credit health.",
    goal: "Provide a simple, clear visual dashboard with highly personalized, step-by-step credit building instructions and a friction-free credit card pre-qualification flow.",
    role: "Senior UI/UX Designer leading web architecture & product strategy",
    responsibilities: [
      "conducting user interviews,",
      "defining data visualization system,",
      "interactive UI prototyping,",
      "usability testing with focus groups,",
      "designing financial dashboard system"
    ],
    researchParagraph: "Credroad conducts exhaustive research on demographic groups with limited financial literacy. By simplifying credit analytics, the platform aims to empower young professionals to take control of their credit scores and apply for suitable cards.",
    painPoints: [
      {
        title: "Score jargon:",
        desc: "Financial terminology is highly complicated, making score charts hard to interpret."
      },
      {
        title: "Unclear actions:",
        desc: "Users receive their scores but are left without any actionable tips on how to improve them."
      },
      {
        title: "Application fears:",
        desc: "Applying for credit cards is a black box that causes fears of getting denied and hurting scores."
      }
    ],
    personaDescription: "Personas were selected by conducting user research and identifying common pain points, that frustrate and block the user from getting what they need from a product.",
    personas: [
      {
        name: "Sarah",
        age: "23",
        education: "B.S. in Marketing",
        hometown: "Austin, Texas",
        occupation: "Marketing Assistant",
        family: "Single",
        quote: "Building a secure foundation",
        desc: "Sarah is a recent college graduate starting her first full-time job. She is eager to build a solid credit profile to rent her first apartment and eventually buy a car. However, she feels overwhelmed by online advice and wants a clear, guided path to build her score without hidden fees.",
        goals: [
          "Demystify credit score drivers",
          "Find credit cards tailored for beginners",
          "Track score progression month-over-month"
        ],
        frustrations: [
          "Intimidated by complex bank statements",
          "Fear of accidental negative credit impacts",
          "Low credit card approval rates"
        ],
        img: sarahPortrait
      },
      {
        name: "David",
        age: "45",
        education: "High School Graduate",
        hometown: "Cleveland, Ohio",
        occupation: "Freelance Contractor",
        family: "Married, 1 child",
        quote: "Regaining financial control",
        desc: "David is a freelance construction contractor whose income varies month-to-month. Following a tough period, he wants to rebuild his credit score to qualify for a business loan. He needs simple tools to track debt utilization and avoid late payments.",
        goals: [
          "Rebuild credit score from poor to fair",
          "Understand how late payments affect score",
          "Find debt consolidation options"
        ],
        frustrations: [
          "High interest rates on cards",
          "Irregular monthly income makes planning hard",
          "Confused by credit scoring formulas"
        ],
        img: carlosPortrait
      }
    ],
    journeyMapDesc: "It is the series of experiences Sarah has as she achieves her goal of boosting credit and getting approved safely.",
    journeyMapRightParagraph: "I developed a user journey map of Sarah's credit card selection process to highlight friction points in banking forms and card comparison pages.",
    journeyMapGoal: "Find a credit card with low interest rates and a high approval chance, and apply successfully in under 5 minutes",
    journeyMapImg: null,
    startingDesignText: "I created various user flows and information architecture diagrams to organize complex credit data. Afterward, I sketched low-fidelity screens and transitioned to interactive wireframes, building a clickable prototype to test with credit builders.",
    appmapDesc: "It's a structured scheme that outlines the pages and content hierarchy of the web application.",
    appmapRightParagraph: "Next step: creating the credit portal map. My goal here was to streamline key user tasks such as checking credit factors, applying for beginner cards, and reviewing payment history to reduce anxiety.",
    appmapImg: null,
    paperWireframesDesc: "They initially oriented on the basic structure of the landing dashboard and highlight key financial data hierarchy.",
    paperWireframesRightParagraph: "Here I sketched five different layouts of how the credit health dashboard might display score metrics, alerts, and recommendations. Then I did quick user-testing to see which format was most intuitive and refined it into a unified version.\n\nThe goal was to explore multiple visualization methods to reduce banking form anxiety.",
    paperWireframesImg: null,
    digitalWireframesDesc: "A high-fidelity translation of sketches into clean digital structures focusing on banking details and security indicators.",
    digitalWireframesRightParagraph: "Using digital wireframes, I defined the placement of dynamic credit trackers, alerts, and transactional tables. This allowed us to iterate quickly on dashboard elements before adding visual polish.",
    digitalWireframesImg: null,
    usabilityStudiesDesc: "Evaluating user navigation patterns and forms layout to identify visual friction in financial dashboards.",
    usabilityStudiesRightParagraphs: [
      "I performed moderated usability testing sessions with diverse credit builders to track their comprehension of dynamic score trackers and pre-qualification application steps. We gathered invaluable behavioral analytics.",
      "The goal was to detect points of drop-off in credit application steps and reduce visual anxiety around credit reporting forms."
    ],
    usabilityInsights: [
      {
        title: "Simplify form titles:",
        desc: "Users felt intimidated by technical banking terms. We simplified titles to friendly everyday questions."
      },
      {
        title: "Progress trackers:",
        desc: "An active multi-step indicator on top of the credit inquiry form increased completion rates by 35%."
      },
      {
        title: "Safe-status badge:",
        desc: "Adding a prominent 'No Hard Pull' badge alleviated security fears during card pre-qualification."
      }
    ],
    refiningDesignTagline: "The clear version :",
    refiningDesignText: "In this phase, I translated low-fidelity layouts into high-fidelity user interface screens (incorporating insights from pre-qualification usability studies). This produced premium design mockups of credit factors and dashboards, which were later built into a fully interactive web prototype.",
    mockupsDesc: "Polished user interfaces displaying credit health analytics and credit card offers.",
    mockupsRightParagraphs: [
      "I designed high-fidelity mockups of the personal dashboard, credit score indicators, and pre-qualification flow. Each component uses consistent branding, sleek glassmorphism tables, and accessible color ratios.",
      "The goal was to present Sarah with a modern, clean credit tracker that feels safe, trustworthy, and premium."
    ],
    mockupsImg: null,
    showcaseScreens: [],
    showcaseScreensRow2: [],
    prototypeDesc: "An interactive, high-fidelity experience simulating dynamic credit calculations and card pre-qualifications.",
    prototypeRightParagraph: "I developed a fully interactive web prototype to simulate the end-to-end journey of credit score tracking, factor calculations, and cards card application processing. This enables rapid stakeholder and user testing.",
    prototypeImg: null,
    prototypeFeatures: [
      "Credit score dynamic progression dashboard",
      "Interactive score simulator slider",
      "Detailed score factors categorization panel",
      "Cards pre-qualification application form",
      "Real-time 'No Hard Pull' application status",
      "Custom credit booster recommendation system",
      "Historical payment alerts schedule",
      "Interactive profile and settings panel"
    ],
    outcomeText: "I consolidated complex credit calculations and visual score scales into a single streamlined user dashboard. By doing so, users gained instant clarity over their credit limits and financial standing. The final high-fidelity system design reduced user friction and established a solid path toward card application approval.",
    takeawaysDesc: "Refined layouts that combine multiple high-level credit stats into easy-to-read interactive guides.",
    takeawaysImpact: "Active credit-builders reported an average score-comprehension increase of 45% within their first two weeks of dashboard simulation testing.",
    takeawaysLearned: "I learned that presenting critical financial data clearly requires strict color-coding and simplified graphs to keep users engaged and informed.",
    nextStepsDesc: "Planned developmental pathways to expand dynamic simulator engines and client portals.",
    nextStepsItems: [
      "Perform deep-dive qualitative research with credit union partners to align scoring schemas.",
      "Integrate predictive AI modeling to simulate custom credit limit adjustments."
    ]
  },
  "suplan": {
    title: "Suplan",
    tagline: "Suplan Customer Service Mobile App Case Study",
    subtitle: "Suplan is a mobile platform created for customer service teams to seamlessly receive, manage, and resolve inbound service requests. It connects front-line service staff with backend managers via a responsive, real-time dashboard.",
    location: "Israel",
    year: "2024",
    img: suplanImg,
    problem: "Customer service agents are constantly overwhelmed by massive ticket volumes, poorly categorized issues, and delayed escalation paths due to cluttered and rigid mobile interfaces.",
    goal: "Build a highly responsive mobile workspace that automatically prioritizes critical tickets, offers quick-reply micro-templates, and features smooth chat-to-call escalations.",
    role: "Lead Mobile Product Designer collaborating with engineering",
    responsibilities: [
      "shadowing support operations,",
      "mapping customer service journeys,",
      "mobile UI design system,",
      "micro-interaction styling,",
      "conducting standard A/B test reviews"
    ],
    researchParagraph: "Suplan researched dozens of support operators and IT technicians working in high-pressure mobile environments. The findings highlights that support desk operations succeed or fail based on instant ticket categorization and screen readability.",
    painPoints: [
      {
        title: "Ticket overload:",
        desc: "Support dashboards are crowded, making high-urgency tasks hard to distinguish."
      },
      {
        title: "Input friction:",
        desc: "Typing response emails on-the-go on small screens is tedious and leads to slow replies."
      },
      {
        title: "Communication gaps:",
        desc: "Transitioning a ticket status to phone calling creates heavy friction for agents."
      }
    ],
    personaDescription: "Personas were selected by conducting user research and identifying common pain points, that frustrate and block the user from getting what they need from a product.",
    personas: [
      {
        name: "Marcus",
        age: "29",
        education: "Associate Degree in CS",
        hometown: "Chicago, Illinois",
        occupation: "IT Field Technician",
        family: "Single",
        quote: "Solving issues in real-time",
        desc: "Marcus is an on-site IT field technician who manages up to 30 service requests daily. He is constantly moving between client buildings and relies heavily on his mobile phone to receive updates, update ticket statuses, and log client approvals. He needs an ultra-responsive interface with fast fingers-on-keys interactions.",
        goals: [
          "View tickets sorted by physical distance",
          "Log client signatures instantly in-app",
          "Use one-tap text templates to update clients"
        ],
        frustrations: [
          "App freezes under poor cellular network conditions",
          "Cluttered lists that require endless scrolling",
          "Tedious manual timesheet logging"
        ],
        img: carlosPortrait
      },
      {
        name: "Linda",
        age: "38",
        education: "B.A. in Communications",
        hometown: "Denver, Colorado",
        occupation: "Customer Service Coordinator",
        family: "Married, 2 kids",
        quote: "Keeping the team synchronized",
        desc: "Linda is a customer support manager who oversees a team of 10 field technicians. She spends her day assigning service tickets, tracking technician locations, and responding to client escalations. She needs an intuitive desktop dashboard to manage workflows in real-time.",
        goals: [
          "Assign tickets based on proximity",
          "Track real-time status of service requests",
          "Reduce client response times"
        ],
        frustrations: [
          "Lack of real-time technician location tracking",
          "Manual entry errors in timesheets",
          "Miscommunication between agents and technicians"
        ],
        img: sarahPortrait
      }
    ],
    journeyMapDesc: "It is the series of experiences Marcus has as he receives, manages, and resolves on-site support tickets.",
    journeyMapRightParagraph: "I developed a user journey map of Marcus's field service workflow to optimize notification alerts and status updates on-the-go.",
    journeyMapGoal: "Locate a client ticket, navigate to the site, fix the issue, and secure client signature approval efficiently",
    journeyMapImg: null,
    startingDesignText: "I mapped service agent task sequences and technical escalation pathways. Afterward, I designed hand-drawn screen flows and transitioned to digital wireframes, creating a low-fidelity prototype to conduct usability reviews with active call agents.",
    appmapDesc: "It's a structured scheme that outlines the pages and content hierarchy of the mobile support workspace.",
    appmapRightParagraph: "Next step: creating the mobile workspace sitemap. My goal here was to group ticketing dashboards, real-time client chat, distance-based maps, and automated signature logs into an instant, zero-friction task flow.",
    appmapImg: null,
    paperWireframesDesc: "They initially oriented on the basic structure of the support agent workspace and highlight key status switches.",
    paperWireframesRightParagraph: "Here I drafted five quick mobile wireframe iterations of how the ticket queue list and active support chat window could coexist on a compact screen. Then I reviewed these options with front-line engineers to select the most readable layout.\n\nThe goal was to explore high-speed mobile navigation variants to minimize screen clutter.",
    paperWireframesImg: null,
    digitalWireframesDesc: "Digital wireframe screens prioritizing ticket lists, action indicators, and critical field service updates.",
    digitalWireframesRightParagraph: "I constructed digital wireframes in Figma to refine mobile touch targets and ease task tracking for active technicians. We simulated high-urgency notifications to verify readability.",
    digitalWireframesImg: null,
    usabilityStudiesDesc: "Field testing and hands-on session analysis with active support technicians to optimize touch target sizes.",
    usabilityStudiesRightParagraphs: [
      "I conducted contextual inquiries shadowing mobile customer service agents during their active diagnostic routes. We gathered qualitative metrics concerning speed, gloved-hand usability, and screen legibility under glare.",
      "The goal was to ensure technicians could log tickets, check customer locations, and complete service agreements within three taps."
    ],
    usabilityInsights: [
      {
        title: "Increase tap targets:",
        desc: "Technicians working in outdoor environments occasionally mis-tapped. We scaled all critical buttons to at least 48px."
      },
      {
        title: "Offline warnings:",
        desc: "Adding dynamic offline synchronization indicators reassured agents that their ticket updates were saved locally."
      },
      {
        title: "Instant template replies:",
        desc: "Direct one-tap response templates reduced texting time by 50% compared to typing manual replies."
      }
    ],
    refiningDesignTagline: "The clear version :",
    refiningDesignText: "Here I designed high-fidelity interactive screens of customer service tickets and real-time mapping dashboards (prioritizing technician outdoor usage). This yielded optimized design mockups of navigation queues and client signature templates, leading to our final high-fidelity product prototype.",
    mockupsDesc: "High-fidelity customer service queue lists and dispatch mapping layouts.",
    mockupsRightParagraphs: [
      "I crafted pixel-perfect high-fidelity mockups for active technicians. The screens leverage high-contrast visual cues, large typography, and accessible tap-targets tailored for on-site operations under sunlight.",
      "The goal was to provide Marcus with a clear mobile tool that streamlines ticket completion and sign-offs."
    ],
    mockupsImg: null,
    showcaseScreens: [],
    showcaseScreensRow2: [],
    prototypeDesc: "A responsive mobile workspace simulation with real-time support queues and escalated status maps.",
    prototypeRightParagraph: "I built a high-fidelity mobile prototype demonstrating real-time diagnostic queues, active messaging status, distance-based service directions, and on-site customer approval logs.",
    prototypeImg: null,
    prototypeFeatures: [
      "Distance-sorted ticket dispatcher dashboard",
      "Active diagnostic status update controls",
      "Real-time customer-to-agent messaging logs",
      "Interactive map direction overlays",
      "One-tap dynamic text template updates",
      "Digital touch-screen signature capture panel",
      "Offline synchronization alert notifications",
      "Technician settings and timesheet forms"
    ],
    outcomeText: "We structured modular agent ticket flows and high-contrast outdoor routing grids to drastically cut down dispatch completion times. This user-validated architecture empowered active service technicians to log repairs, message customers, and record dynamic digital signatures without service interruption.",
    takeawaysDesc: "Structured screen hierarchies and tap target sizes designed for challenging outdoor sunlight conditions.",
    takeawaysImpact: "Field technicians recorded a 35% drop in service-call logging durations, saving valuable time during complex diagnostics.",
    takeawaysLearned: "I discovered that outdoor-focused design demands extreme attention to color contrast, oversized inputs, and zero-connectivity fallbacks.",
    nextStepsDesc: "Targeted iterations to support advanced offline databases and dynamic technician schedules.",
    nextStepsItems: [
      "Roll out staging testing of offline database synchronization alerts in remote service zones.",
      "Design cross-device synchronization panels for tablet-to-mobile technician handoffs."
    ]
  },
  "placever": {
    title: "Placever",
    tagline: "Placever Tourist & Discovery App Case Study",
    subtitle: "Placever is an immersive tourist navigation mobile app that guides urban explorers in discovering local spots, historic landmarks, and cultural highlights with curated self-guided walking tours and local trivia.",
    location: "",
    year: "",
    img: placeverImg,
    problem: "Standard navigation and map apps prioritize point-to-point speed rather than leisurely discovery, leaving travelers unaware of rich local histories and off-the-beaten-path gems.",
    goal: "Create a highly engaging, story-driven discovery interface that uses real-time spatial indicators and contextual micro-cards to highlight local history and culture.",
    role: "Lead UI/UX Designer managing visual direction & user testing",
    responsibilities: [
      "field-testing navigation patterns,",
      "crafting custom iconography,",
      "interactive map layout design,",
      "locational prototype testing,",
      "user journey gamification design"
    ],
    researchParagraph: "Placever did user testing with leisure travelers and day explorers who love discovering hidden spots in cities. The research shows that users prefer context-rich local tales over standard navigation lists.",
    painPoints: [
      {
        title: "Generic routes:",
        desc: "Standard maps show commercial storefronts rather than scenic routes or historical markers."
      },
      {
        title: "Discovery fatigue:",
        desc: "Endless scrolling on restaurant directories takes users away from enjoying the actual city."
      },
      {
        title: "Map disorientation:",
        desc: "Standard map orientation icons are confusing for people walking at slow speeds."
      }
    ],
    personaDescription: "Personas were selected by conducting user research and identifying common pain points, that frustrate and block the user from getting what they need from a product.",
    personas: [
      {
        name: "Elena",
        age: "26",
        education: "M.A. in Art History",
        hometown: "Prague, Czechia",
        occupation: "Travel Blogger & Photographer",
        family: "Single",
        quote: "Exploring off the beaten path",
        desc: "Elena is an avid solo traveler who loves to immerse herself in local history, architecture, and street food. When visiting a new European city, she prefers to wander on foot rather than taking tours. She wants a digital guide that acts like a knowledgeable local friend, pointing out stories behind monuments.",
        goals: [
          "Discover authentic local spots on foot",
          "Read bite-sized cultural histories in-app",
          "Save favorite locations into offline maps"
        ],
        frustrations: [
          "Standard guides lead to overcrowded tourist traps",
          "Heavy battery drain from background GPS",
          "Lack of offline navigation in old alleys"
        ],
        img: sarahPortrait
      },
      {
        name: "Robert",
        age: "52",
        education: "B.S. in Civil Engineering",
        hometown: "Munich, Germany",
        occupation: "Civil Engineer & History Buff",
        family: "Married",
        quote: "Deep diving into local heritage",
        desc: "Robert is a history enthusiast who travels with his wife. He loves walking tours and visiting museums, but hates standard travel books and commercial tours. He wants detailed, accurate historical contexts for every street and monument.",
        goals: [
          "Access verified, in-depth historical facts",
          "Create customized walking routes based on eras",
          "Navigate offline to remote historic spots"
        ],
        frustrations: [
          "Superficial or incorrect descriptions in standard apps",
          "GPS drops in historical city centers",
          "Overcrowded tourist areas"
        ],
        img: carlosPortrait
      }
    ],
    journeyMapDesc: "It is the series of experiences Elena has as she walks around a new city discovering historical gems.",
    journeyMapRightParagraph: "I developed a user journey map of Elena's walking navigation to reduce map disorientation and maximize cultural discovery.",
    journeyMapGoal: "Plan a 2-hour walking route covering 5 key historical monuments without getting lost or draining the phone battery",
    journeyMapImg: placeverUserJourney,
    startingDesignText: "I drafted storyboards and structural map flows to test orientation clarity. Afterward, I sketched key discovery interfaces and developed digital wireframes, compiling a low-fidelity spatial prototype to conduct walk-along testing.",
    appmapDesc: "It's a structured scheme that outlines the pages and content hierarchy of the navigation app.",
    appmapRightParagraph: "Next step: creating the local discovery architecture. My goal here was to organize the spatial mapping views, bite-sized cultural histories, off-the-beaten-path travel books, and offline GPS save folders seamlessly.",
    appmapImg: placeverAppmap,
    paperWireframesDesc: "They initially oriented on the basic structure of the discovery feed and map view, highlighting main action items.",
    paperWireframesRightParagraph: "Here I drew five divergent versions of how the cultural history micro-cards might pop up on top of the interactive map feed without blocking the walking directions. After walk-along testing, I refined them into a final version.\n\nThe goal was to explore seamless spatial layouts that don't interrupt active walking exploration.",
    paperWireframesImg: placeverPaperWire,
    digitalWireframesDesc: "Clean digital wireframe layouts showcasing maps, navigation popups, and local trivia cards.",
    digitalWireframesRightParagraph: "I created a digital wireframe scheme to structure map overlays and slide-up panels. This ensured that map views remain clean and readable during active walking tours.",
    digitalWireframesImg: placeverDigitalWireframe,
    usabilityStudiesDesc: "Walk-along usability testing with tourists to optimize location alerts and discovery maps navigation.",
    usabilityStudiesRightParagraphs: [
      "We ran active walk-along testing sessions with tourists exploring historic city districts. Users tested map orientation accuracy, locational card slide-ups, and self-guided audio tour navigation under real exploration conditions.",
      "The goal was to design map widgets that support slow-paced leisure walks without overwhelming or distracting the tourist."
    ],
    usabilityInsights: [
      {
        title: "Audio auto-play:",
        desc: "Tourists preferred audio guides triggering automatically via GPS boundaries instead of searching in lists."
      },
      {
        title: "Map compass alignment:",
        desc: "Standard fixed layouts disoriented users. We added a self-rotating walking compass matching camera orientation."
      },
      {
        title: "High-contrast modes:",
        desc: "Under bright midday sunlight, small screen details were washed out. We refined font weights and elevated contrast ratios."
      }
    ],
    refiningDesignTagline: "The clear version :",
    refiningDesignText: "I developed clean high-fidelity mobile screens for urban walking maps and locational cultural histories (integrating walk-along testing insights). This formed refined UI design mockups and structured slide-up views, establishing our fully functional locational walkthrough prototype.",
    mockupsDesc: "Rich, engaging discovery maps and contextual cultural history panels.",
    mockupsRightParagraphs: [
      "I produced vibrant high-fidelity mockups showcasing street maps, guided walking tour schedules, and locational trivia cards. The design focuses on high legibility, custom markers, and smooth visual hierarchies.",
      "The goal was to create an immersive, story-driven travel assistant that enhances Elena's exploration experience."
    ],
    mockupsImg: placeverMockups,
    showcaseScreens: [
      placeverRow1Img1,
      placeverRow1Img2,
      placeverRow1Img3,
      placeverRow1Img4,
      placeverRow1Img5,
    ],
    showcaseScreensRow2: [
      placeverRow2Img1,
      placeverRow2Img3,
      placeverRow2Img4,
      placeverRow2Img5,
    ],
    prototypeDesc: "An immersive locational explorer prototype presenting cultural highlights and guided tour tracks.",
    prototypeRightParagraph: "I established an interactive spatial map prototype simulating self-guided walking tours, locational audio triggers, slide-up trivia cards, and compass navigation adjustments.",
    prototypeImg: placeverRow1Img3,
    prototypeFeatures: [
      "Dynamic map viewer with custom place pins",
      "GPS-boundary contextual audio auto-play",
      "Slide-up local story and cultural trivia card",
      "Self-guided scenic route navigation overlay",
      "Offline spatial navigation directories",
      "Self-rotating tourist compass orientation",
      "High-contrast sunlight visibility widgets",
      "Custom saved route notebook panels"
    ],
    outcomeText: "I shaped a gamified location explorer with robust offline mapping, self-rotating walking compasses, and proximity-based audio guides. Urban explorers were able to follow scenic paths, unlock rich local histories, and log landmarks without navigation disorientation.",
    takeawaysDesc: "Story-driven exploration dashboards prioritizing tourist navigation confidence and historical discovery.",
    takeawaysImpact: "Tourists reported feeling 60% more confident navigating complex old-town European alleys without traditional maps.",
    takeawaysLearned: "I learned that walking tours benefit most from hands-free features like automated audio plays rather than constant screen interactions.",
    nextStepsDesc: "Planned features for community-generated tour tracks and interactive local trivia maps.",
    nextStepsItems: [
      "Conduct user group interviews with local guides to design custom community travel-book lists.",
      "Iterate on offline compass navigation widgets to optimize smartphone battery usage."
    ]
  }
};

const ProjectDetail = ({ projectId, onBack }) => {
  const project = projectDetails[projectId] || projectDetails["voos-cinema"];

  const [activePersonaIdx, setActivePersonaIdx] = React.useState(0);

  React.useEffect(() => {
    setActivePersonaIdx(0);
  }, [projectId]);

  const handleBackClick = (e) => {
    e.preventDefault();
    onBack();
  };

  return (
    <div className="project-detail-page">
      <div className="container">

        {/* Back Link */}
        <motion.div
          className="back-btn-container"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#works" onClick={handleBackClick} className="back-link">
            <FiArrowLeft size={18} />
            <span>Back to Works</span>
          </a>
        </motion.div>

        {/* Project Header Banner */}
        <motion.div
          className="project-hero-banner"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="project-banner-content">
            {projectId === "voos-cinema" ? (
              <div className="banner-logo-wrapper">
                <span className="logo-text-v">v</span>
                <span className="logo-circle-pink">
                  <span className="logo-circle-white">
                    <span className="logo-circle-dot"></span>
                  </span>
                </span>
                <span className="logo-text-s">'s</span>
              </div>
            ) : projectId === "credroad" ? (
              <div className="banner-logo-wrapper text-accent">
                <FiCheckSquare className="pink-icon-flat" size={32} style={{ marginRight: '8px', color: 'var(--accent-pink)' }} />
                <span style={{ fontSize: '1.85rem', fontWeight: '700' }}>Credroad</span>
              </div>
            ) : projectId === "suplan" ? (
              <div className="banner-logo-wrapper text-accent">
                <FiZap className="pink-icon-flat" size={32} style={{ marginRight: '8px', color: 'var(--accent-pink)' }} />
                <span style={{ fontSize: '1.85rem', fontWeight: '700' }}>Suplan</span>
              </div>
            ) : (
              <div className="banner-logo-wrapper text-accent">
                <FiTarget className="pink-icon-flat" size={32} style={{ marginRight: '8px', color: 'var(--accent-pink)' }} />
                <span style={{ fontSize: '1.85rem', fontWeight: '700' }}>Placever</span>
              </div>
            )}

            <h1 className="project-banner-title">{project.title}</h1>

            <div className="banner-meta-grid">
              <div className="meta-item">
                <span className="meta-label"></span>
                <span className="meta-value">{project.location}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label"></span>
                <span className="meta-value">{project.year}</span>
              </div>
            </div>
          </div>

          <div className="banner-mockups-placeholder">
            {/* Smartphone Outline 1 (Staggered Left) */}
            <div className="placeholder-phone phone-left">
              {projectId === "voos-cinema" ? (
                <img src={screenInCinema} alt="Voo's Cinema screen" className="phone-screen-image" />
              ) : projectId === "placever" ? (
                <img src={placeverRow1Img1} alt="Placever screen" className="phone-screen-image" />
              ) : (
                <div className="phone-screen-wireframe">
                  <div className="wireframe-header"></div>
                  <div className="wireframe-block large"></div>
                  <div className="wireframe-row">
                    <div className="wireframe-circle"></div>
                    <div className="wireframe-line"></div>
                  </div>
                  <div className="wireframe-row">
                    <div className="wireframe-circle"></div>
                    <div className="wireframe-line"></div>
                  </div>
                </div>
              )}
            </div>

            {/* Smartphone Outline 2 (Center Raised) */}
            <div className="placeholder-phone phone-center">
              {projectId === "voos-cinema" ? (
                <img src={screenMovieDetails} alt="Voo's Movie details" className="phone-screen-image" />
              ) : projectId === "placever" ? (
                <img src={placeverRow1Img3} alt="Placever screen" className="phone-screen-image" />
              ) : (
                <div className="phone-screen-wireframe">
                  <div className="wireframe-header"></div>
                  <div className="wireframe-movie-card">
                    <div className="play-triangle"></div>
                  </div>
                  <div className="wireframe-line short"></div>
                  <div className="wireframe-line medium"></div>
                  <div className="wireframe-button"></div>
                </div>
              )}
            </div>

            {/* Smartphone Outline 3 (Staggered Right) */}
            <div className="placeholder-phone phone-right">
              {projectId === "voos-cinema" ? (
                <img src={screenDateTime} alt="Voo's Date selector" className="phone-screen-image" />
              ) : projectId === "placever" ? (
                <img src={placeverRow1Img5} alt="Placever screen" className="phone-screen-image" />
              ) : (
                <div className="phone-screen-wireframe">
                  <div className="wireframe-header"></div>
                  <div className="wireframe-seats-grid">
                    <div className="wireframe-seat"></div>
                    <div className="wireframe-seat"></div>
                    <div className="wireframe-seat"></div>
                    <div className="wireframe-seat active"></div>
                    <div className="wireframe-seat"></div>
                    <div className="wireframe-seat"></div>
                  </div>
                  <div className="wireframe-line short"></div>
                  <div className="wireframe-button"></div>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Exact Layout Replica of Project Overview */}
        <motion.div
          className="project-overview-section"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="overview-left">
            <p className="script-font the-project-itself">The project itself :</p>
            <h2 className="overview-main-heading">Project Overview</h2>
          </div>

          <div className="overview-right">
            <p className="overview-subtitle">
              {project.subtitle}
            </p>

            <hr className="dashed-divider" />

            <div className="overview-grid">

              {/* Problem */}
              <div className="overview-card">
                <div className="overview-card-header">
                  <div className="icon-circle">
                    <FiAlertCircle size={20} />
                  </div>
                  <h3>Problem:</h3>
                </div>
                <p className="text-muted card-body-text">{project.problem}</p>
              </div>

              {/* Goal */}
              <div className="overview-card">
                <div className="overview-card-header">
                  <div className="icon-circle">
                    <FiTarget size={20} />
                  </div>
                  <h3>Goal:</h3>
                </div>
                <p className="text-muted card-body-text">{project.goal}</p>
              </div>

              {/* My Role */}
              <div className="overview-card">
                <div className="overview-card-header">
                  <div className="icon-circle">
                    <FiUserCheck size={20} />
                  </div>
                  <h3>My role:</h3>
                </div>
                <p className="text-muted card-body-text">{project.role}</p>
              </div>

              {/* Responsibilities */}
              <div className="overview-card">
                <div className="overview-card-header">
                  <div className="icon-circle">
                    <FiCheckSquare size={20} />
                  </div>
                  <h3>Responsibilities:</h3>
                </div>

                <div className="responsibilities-lists">
                  <ul className="resp-col text-muted">
                    {project.responsibilities.slice(0, 3).map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  <ul className="resp-col text-muted">
                    {project.responsibilities.slice(3).map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

        {/* User Research Intro Section */}
        <motion.div
          className="project-research-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="research-left">
            <div className="research-heading-group">
              <p className="script-font the-project-itself">All about the user :</p>
              <h2 className="overview-main-heading">User Research</h2>
            </div>
          </div>

          <div className="research-right">
            <p className="overview-subtitle">
              {project.researchParagraph}
            </p>
          </div>
        </motion.div>

        {/* Pain Points Section */}
        <motion.div
          className="project-pain-points-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="pain-points-left">
            <div className="research-heading-group">
              <h2 className="overview-main-heading sub-main-heading">
                <FiZap size={22} className="pink-icon-flat" style={{ flexShrink: 0 }} />
                <span>Pain Points</span>
              </h2>
            </div>
          </div>

          <div className="pain-points-right">
            <div className="pain-points-grid" style={{ marginTop: 0 }}>
              {project.painPoints.map((item, idx) => (
                <div key={idx} className="pain-point-column">
                  <div className="circle-number">{idx + 1}</div>
                  <h4 className="pain-point-title">{item.title}</h4>
                  <p className="text-muted card-body-text">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* User Personas Section */}
        <motion.div
          className="project-personas-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="personas-left">
            <div className="research-heading-group">
              <h2 className="overview-main-heading sub-main-heading">
                <FiUsers size={22} className="pink-icon-flat" style={{ flexShrink: 0 }} />
                <span>User Personas</span>
              </h2>
              <p className="text-muted persona-left-desc" style={{ marginTop: '1.25rem' }}>{project.personaDescription}</p>
            </div>
          </div>

          <div className="personas-right">
            {(() => {
              const activePersona = project.personas && project.personas[activePersonaIdx]
                ? project.personas[activePersonaIdx]
                : (project.personas ? project.personas[0] : project.persona);

              return (
                <>
                  {/* Persona Card */}
                  <div className="persona-card" style={{ marginTop: 0 }}>
                    <div className="persona-card-left">
                      <h3 className="persona-quote">"{activePersona.quote}"</h3>
                      <p className="text-muted persona-desc">{activePersona.desc}</p>

                      <hr className="dashed-divider-thin" />

                      <div className="persona-goals-frustrations">
                        <div className="goals-column">
                          <div className="column-title-row">
                            <div className="check-bullet-circle">
                              <FiCheck size={12} />
                            </div>
                            <h4 style={{ margin: 0 }}>Goals</h4>
                          </div>
                          <ul className="resp-col text-muted">
                            {activePersona.goals.map((goal, gidx) => (
                              <li key={gidx}>{goal}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="frustrations-column">
                          <div className="column-title-row">
                            <div className="warning-bullet-circle">
                              <FiAlertTriangle size={12} />
                            </div>
                            <h4 style={{ margin: 0 }}>Frustrations</h4>
                          </div>
                          <ul className="resp-col text-muted">
                            {activePersona.frustrations.map((frust, fidx) => (
                              <li key={fidx}>{frust}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="persona-card-right">
                      <div className="persona-avatar-wrapper">
                        <img src={activePersona.img} alt={activePersona.name} className="persona-avatar-img" />
                      </div>
                      <div className="persona-profile-name">
                        <div className="user-icon-bg">
                          <FiUser size={14} />
                        </div>
                        <h3>{activePersona.name}</h3>
                      </div>
                      <div className="persona-details-list">
                        <div className="detail-item">
                          <span className="detail-label">Age:</span>
                          <span className="detail-value">{activePersona.age}</span>
                        </div>
                        <div className="detail-item">
                          <span className="detail-label">Education:</span>
                          <span className="detail-value">{activePersona.education}</span>
                        </div>
                        <div className="detail-item">
                          <span className="detail-label">Hometown:</span>
                          <span className="detail-value">{activePersona.hometown}</span>
                        </div>
                        {activePersona.family && (
                          <div className="detail-item">
                            <span className="detail-label">Family:</span>
                            <span className="detail-value">{activePersona.family}</span>
                          </div>
                        )}
                        {activePersona.occupation && (
                          <div className="detail-item">
                            <span className="detail-label">Occupation:</span>
                            <span className="detail-value">{activePersona.occupation}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Persona Selector at the bottom */}
                  {project.personas && project.personas.length > 1 && (
                    <div className="persona-selector-container">
                      <span className="selector-label">Select Persona:</span>
                      <div className="persona-tabs">
                        {project.personas.map((pers, pIdx) => (
                          <button
                            key={pIdx}
                            className={`persona-tab-btn ${activePersonaIdx === pIdx ? 'active' : ''}`}
                            onClick={() => setActivePersonaIdx(pIdx)}
                          >
                            <img src={pers.img} alt={pers.name} className="tab-avatar" />
                            <div className="tab-info">
                              <span className="tab-name">{pers.name}</span>
                              <span className="tab-occ">{pers.occupation || 'User'}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              );
            })()}
          </div>
        </motion.div>

        {/* User Journey Map Section */}
        <motion.div
          className="project-journey-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="journey-left">
            <div className="research-heading-group">
              <h2 className="overview-main-heading sub-main-heading">
                <FiGitCommit size={24} className="pink-icon-flat" style={{ transform: "rotate(45deg)", flexShrink: 0 }} />
                <span>User Journey Map</span>
              </h2>
              <p className="text-muted persona-left-desc" style={{ marginTop: '1.25rem' }}>
                {project.journeyMapDesc}
              </p>
            </div>
          </div>

          <div className="journey-right">
            <p className="overview-subtitle">
              {project.journeyMapRightParagraph}
            </p>

            <div className="journey-goal-container">
              <h4 className="journey-goal-title">Goal</h4>
              <p className="journey-goal-text">{project.journeyMapGoal}</p>
            </div>

            {project.journeyMapImg ? (
              <div className="journey-map-table-wrapper">
                <img src={project.journeyMapImg} alt="User Journey Map Table" className="journey-map-table-img" />
              </div>
            ) : (
              /* Custom dynamic fallback table matching the design system for other projects */
              <div className="journey-map-placeholder-card pill-card">
                <div className="placeholder-table-header">
                  <span>Journey Map Table</span>
                  <span className="tag">Responsive Preview</span>
                </div>
                <p className="text-muted" style={{ fontSize: '0.95rem', margin: '1rem 0' }}>
                  Interactive visual mapping represents the user journey sequence from onboarding to key action success:
                </p>
                <div className="mock-stages-row">
                  <div className="mock-stage">
                    <span className="stage-num">1</span>
                    <span className="stage-name">Onboard</span>
                  </div>
                  <div className="mock-arrow">➔</div>
                  <div className="mock-stage">
                    <span className="stage-num">2</span>
                    <span className="stage-name">Analyze</span>
                  </div>
                  <div className="mock-arrow">➔</div>
                  <div className="mock-stage animate-pulse">
                    <span className="stage-num active">3</span>
                    <span className="stage-name font-bold">Action</span>
                  </div>
                  <div className="mock-arrow">➔</div>
                  <div className="mock-stage">
                    <span className="stage-num">4</span>
                    <span className="stage-name">Resolve</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Starting the Design Section */}
        <motion.div
          className="project-design-start-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="design-start-left">
            <div className="research-heading-group">
              <p className="script-font the-project-itself">The project schematically :</p>
              <h2 className="overview-main-heading">Starting the Design</h2>
            </div>
          </div>

          <div className="design-start-right">
            <p className="overview-subtitle" style={{ fontSize: '1.15rem', lineHeight: '1.65', fontWeight: '450' }}>
              {project.startingDesignText}
            </p>
            <hr className="dashed-divider" style={{ marginTop: '3rem' }} />
          </div>
        </motion.div>

        {/* Appmap Section */}
        <motion.div
          className="project-appmap-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="appmap-left">
            <div className="research-heading-group">
              <h2 className="overview-main-heading sub-main-heading">
                <FiGitBranch size={24} className="pink-icon-flat" style={{ flexShrink: 0 }} />
                <span>Appmap</span>
              </h2>
              <p className="text-muted persona-left-desc" style={{ marginTop: '1.25rem' }}>
                {project.appmapDesc}
              </p>
            </div>
          </div>

          <div className="appmap-right">
            <p className="overview-subtitle">
              {project.appmapRightParagraph}
            </p>

            {project.appmapImg ? (
              <div className="journey-map-table-wrapper">
                <img src={project.appmapImg} alt="Application Sitemap Flowchart" className="journey-map-table-img" />
              </div>
            ) : (
              /* Custom dynamic sitemap visualization fallback for other projects */
              <div className="journey-map-placeholder-card pill-card">
                <div className="placeholder-table-header">
                  <span>Information Architecture Sitemap</span>
                  <span className="tag">Responsive View</span>
                </div>
                <p className="text-muted" style={{ fontSize: '0.95rem', margin: '1rem 0' }}>
                  A structured hierarchy of portal routes, directories, and database tables:
                </p>
                <div className="mock-stages-row" style={{ backgroundColor: 'var(--bg-primary)', padding: '1.5rem' }}>
                  <div className="mock-stage">
                    <span className="stage-num active">★</span>
                    <span className="stage-name font-bold">Main Dashboard</span>
                  </div>
                  <div className="mock-arrow">➔</div>
                  <div className="mock-stage">
                    <span className="stage-num">📄</span>
                    <span className="stage-name">Category Panel</span>
                  </div>
                  <div className="mock-arrow">➔</div>
                  <div className="mock-stage">
                    <span className="stage-num">⚙</span>
                    <span className="stage-name">Details Module</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Paper Wireframes Section (Added Exactly After Appmap) */}
        <motion.div
          className="project-paper-wireframes-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="paper-wireframes-left">
            <div className="research-heading-group">
              <h2 className="overview-main-heading sub-main-heading">
                <FiFileText size={24} className="pink-icon-flat" style={{ flexShrink: 0 }} />
                <span>Paper Wireframes</span>
              </h2>
              <p className="text-muted persona-left-desc" style={{ marginTop: '1.25rem' }}>
                {project.paperWireframesDesc}
              </p>
            </div>
          </div>

          <div className="paper-wireframes-right">
            <p className="overview-subtitle">
              {project.paperWireframesRightParagraph}
            </p>

            {project.paperWireframesImg ? (
              <div className="journey-map-table-wrapper" style={{ marginTop: '2.5rem' }}>
                <img src={project.paperWireframesImg} alt="Paper Wireframes Sketch" className="journey-map-table-img" />
              </div>
            ) : (
              /* Custom dynamic paper wireframe placeholder for other projects */
              <div className="journey-map-placeholder-card pill-card" style={{ marginTop: '2.5rem' }}>
                <div className="placeholder-table-header">
                  <span>Paper Sketch Wireframe Mock</span>
                  <span className="tag">Responsive Preview</span>
                </div>
                <p className="text-muted" style={{ fontSize: '0.95rem', margin: '1rem 0' }}>
                  Quick iterations of user interface layouts drawn on paper before digitalizing:
                </p>
                <div className="mock-stages-row" style={{ backgroundColor: 'var(--bg-primary)', padding: '1.5rem' }}>
                  <div className="mock-stage">
                    <span className="stage-num">✏</span>
                    <span className="stage-name">Concept Drafts</span>
                  </div>
                  <div className="mock-arrow">➔</div>
                  <div className="mock-stage">
                    <span className="stage-num active">✓</span>
                    <span className="stage-name font-bold">Refined Layout</span>
                  </div>
                </div>
              </div>
            )}
            <hr className="dashed-divider" style={{ marginTop: '4rem' }} />
          </div>
        </motion.div>

        {/* Digital Wireframes Section (Added Exactly After Paper Wireframes) */}
        <motion.div
          className="project-digital-wireframes-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="digital-wireframes-left">
            <div className="research-heading-group">
              <h2 className="overview-main-heading sub-main-heading">
                <FiLayout size={24} className="pink-icon-flat" style={{ flexShrink: 0 }} />
                <span>Digital Wireframes</span>
              </h2>
              <p className="text-muted persona-left-desc" style={{ marginTop: '1.25rem' }}>
                {project.digitalWireframesDesc}
              </p>
            </div>
          </div>

          <div className="digital-wireframes-right">
            <p className="overview-subtitle">
              {project.digitalWireframesRightParagraph}
            </p>

            {project.digitalWireframesImg ? (
              <div className="journey-map-table-wrapper" style={{ marginTop: '2.5rem' }}>
                <img src={project.digitalWireframesImg} alt="Digital Wireframes Flowchart" className="journey-map-table-img" />
              </div>
            ) : (
              /* Custom dynamic digital wireframe placeholder for other projects */
              <div className="journey-map-placeholder-card pill-card" style={{ marginTop: '2.5rem' }}>
                <div className="placeholder-table-header">
                  <span>Digital Wireframe Flowchart Mock</span>
                  <span className="tag">Responsive Preview</span>
                </div>
                <p className="text-muted" style={{ fontSize: '0.95rem', margin: '1rem 0' }}>
                  A clear digital mapping of all pages and interface structures in the app:
                </p>
                <div className="mock-stages-row" style={{ backgroundColor: 'var(--bg-primary)', padding: '1.5rem' }}>
                  <div className="mock-stage">
                    <span className="stage-num active">🗂</span>
                    <span className="stage-name font-bold">Figma Workspace</span>
                  </div>
                  <div className="mock-arrow">➔</div>
                  <div className="mock-stage">
                    <span className="stage-num">💻</span>
                    <span className="stage-name">Interactive Prototype</span>
                  </div>
                </div>
              </div>
            )}
            <hr className="dashed-divider" style={{ marginTop: '4rem' }} />
          </div>
        </motion.div>

        {/* Usability Studies Section (Added Exactly After Digital Wireframes) */}
        <motion.div
          className="project-usability-studies-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="usability-studies-left">
            <div className="research-heading-group">
              <h2 className="overview-main-heading sub-main-heading">
                <FiList size={24} className="pink-icon-flat" style={{ flexShrink: 0 }} />
                <span>Usability Studies</span>
              </h2>
              <p className="text-muted persona-left-desc" style={{ marginTop: '1.25rem' }}>
                {project.usabilityStudiesDesc}
              </p>
            </div>
          </div>

          <div className="usability-studies-right">
            {project.usabilityStudiesRightParagraphs.map((para, pidx) => (
              <p key={pidx} className="overview-subtitle">
                {para}
              </p>
            ))}

            <hr className="dashed-divider" />

            <div className="pain-points-grid" style={{ marginTop: '1.5rem' }}>
              {project.usabilityInsights.map((insight, idx) => (
                <div key={idx} className="pain-point-column">
                  <div className="circle-number">{idx + 1}</div>
                  <h4 className="pain-point-title">{insight.title}</h4>
                  <p className="text-muted card-body-text">{insight.desc}</p>
                </div>
              ))}
            </div>
            <hr className="dashed-divider" style={{ marginTop: '4rem' }} />
          </div>
        </motion.div>

        {/* Refining Design Section (Added Exactly After Usability Studies) */}
        <motion.div
          className="project-refining-design-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="refining-design-left">
            <div className="research-heading-group">
              <p className="script-font the-project-itself">{project.refiningDesignTagline}</p>
              <h2 className="overview-main-heading">Refining Design</h2>
            </div>
          </div>

          <div className="refining-design-right">
            <p className="overview-subtitle" style={{ fontSize: '1.15rem', lineHeight: '1.65', fontWeight: '450' }}>
              {project.refiningDesignText}
            </p>
            <hr className="dashed-divider" style={{ marginTop: '3rem' }} />
          </div>
        </motion.div>

        {/* Mockups Section (Added Exactly After Refining Design) */}
        <motion.div
          className="project-mockups-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mockups-left">
            <div className="research-heading-group">
              <h2 className="overview-main-heading sub-main-heading">
                <FiLayers size={24} className="pink-icon-flat" style={{ flexShrink: 0 }} />
                <span>Mockups</span>
              </h2>
              <p className="text-muted persona-left-desc" style={{ marginTop: '1.25rem' }}>
                {project.mockupsDesc}
              </p>
            </div>
          </div>

          <div className="mockups-right">
            {project.mockupsRightParagraphs.map((para, pidx) => (
              <p key={pidx} className="overview-subtitle">
                {para}
              </p>
            ))}

            {project.mockupsImg ? (
              <div className="journey-map-table-wrapper" style={{ marginTop: '2.5rem' }}>
                <img src={project.mockupsImg} alt="High-Fidelity Mockups Flowchart" className="journey-map-table-img" />
              </div>
            ) : (
              /* Custom dynamic high-fidelity mockups placeholder for other projects */
              <div className="journey-map-placeholder-card pill-card" style={{ marginTop: '2.5rem' }}>
                <div className="placeholder-table-header">
                  <span>High-Fidelity Design Mockup</span>
                  <span className="tag">Responsive Preview</span>
                </div>
                <p className="text-muted" style={{ fontSize: '0.95rem', margin: '1rem 0' }}>
                  A visual walkthrough representing final typography, spacing, and visual styling:
                </p>
                <div className="mock-stages-row" style={{ backgroundColor: 'var(--bg-primary)', padding: '1.5rem' }}>
                  <div className="mock-stage">
                    <span className="stage-num active">🎨</span>
                    <span className="stage-name font-bold">Styling System</span>
                  </div>
                  <div className="mock-arrow">➔</div>
                  <div className="mock-stage">
                    <span className="stage-num">✨</span>
                    <span className="stage-name">Premium Experience</span>
                  </div>
                </div>
              </div>
            )}
            <hr className="dashed-divider" style={{ marginTop: '4rem' }} />
          </div>
        </motion.div>

        {/* Showcase Screens Gallery Section (Added Exactly After Mockups) */}
        {project.showcaseScreens && project.showcaseScreens.length > 0 && (
          <motion.div
            className="project-screens-showcase-section"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="showcase-title-container">
              <p className="script-font the-project-itself">The final views :</p>
              <h2 className="overview-main-heading">Screen Showcase</h2>
            </div>

            <div className="screens-scroll-container">
              {project.showcaseScreens.map((screenImg, sidx) => (
                <div key={sidx} className="phone-mockup-card">
                  <img src={screenImg} alt={`App Screen Mockup ${sidx + 1}`} className="phone-mockup-img" />
                </div>
              ))}
            </div>

            {project.showcaseScreensRow2 && project.showcaseScreensRow2.length > 0 && (
              <div className="screens-scroll-container" style={{ marginTop: '2.5rem' }}>
                {project.showcaseScreensRow2.map((screenImg, sidx) => (
                  <div key={sidx} className="phone-mockup-card">
                    <img src={screenImg} alt={`App Screen Mockup Row 2 ${sidx + 1}`} className="phone-mockup-img" />
                  </div>
                ))}
              </div>
            )}

            <div style={{ padding: '0 1.5rem' }}>
              <hr className="dashed-divider" style={{ marginTop: '5rem', marginBottom: '0' }} />
            </div>
          </motion.div>
        )}

        {/* High-fidelity prototype Section */}
        {project.prototypeDesc && (
          <motion.div
            className="project-prototype-section"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="prototype-left">
              <div className="research-heading-group">
                <h2 className="overview-main-heading sub-main-heading">
                  <FiMonitor size={24} className="pink-icon-flat" style={{ flexShrink: 0 }} />
                  <span>High-fidelity prototype</span>
                </h2>
                <p className="text-muted persona-left-desc" style={{ marginTop: '1.25rem' }}>
                  {project.prototypeDesc}
                </p>
              </div>
            </div>

            <div className="prototype-right">
              <p className="overview-subtitle">
                {project.prototypeRightParagraph}
              </p>

              <div className="prototype-showcase-container">
                {project.prototypeImg ? (
                  <div className="phone-mockup-card prototype-mockup">
                    <img src={project.prototypeImg} alt="High Fidelity Prototype View" className="phone-mockup-img" />
                  </div>
                ) : (
                  <div className="journey-map-placeholder-card pill-card prototype-fallback" style={{ width: '100%' }}>
                    <div className="placeholder-table-header">
                      <span>Prototype Workspace</span>
                      <span className="tag">Interactive Simulator</span>
                    </div>
                    <p className="text-muted" style={{ fontSize: '0.95rem', margin: '1rem 0' }}>
                      Simulating dynamic transitions and gestures under staging envs:
                    </p>
                  </div>
                )}

                <div className="prototype-features-column">
                  <ul className="prototype-features-list">
                    {project.prototypeFeatures.map((feat, fidx) => (
                      <li key={fidx} className="proto-feature-item">
                        <span className="feature-number">{fidx + 1}.</span>
                        <span className="feature-text">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <hr className="dashed-divider" style={{ marginTop: '4rem' }} />
            </div>
          </motion.div>
        )}

        {/* Outcome & Takeaways Section */}
        {project.outcomeText && (
          <div className="project-outcome-container">

            {/* Outcome Header Row */}
            <motion.div
              className="outcome-row"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="outcome-left">
                <div className="research-heading-group">
                  <p className="script-font the-project-itself">The project schematically :</p>
                  <h2 className="overview-main-heading">Outcome</h2>
                </div>
              </div>

              <div className="outcome-right">
                <p className="overview-subtitle">
                  {project.outcomeText}
                </p>
              </div>
            </motion.div>

            <div className="outcome-divider-wrapper">
              <hr className="dashed-divider" />
            </div>

            {/* Takeaways Row */}
            <motion.div
              className="outcome-row"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="outcome-left">
                <div className="outcome-block-left">
                  <div className="title-icon-wrapper">
                    <FiCoffee size={24} className="pink-icon-flat" />
                  </div>
                  <h3 className="outcome-block-title">Takeaways</h3>
                  <p className="text-muted card-body-text" style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>{project.takeawaysDesc}</p>
                </div>
              </div>

              <div className="outcome-right">
                <div className="outcome-block-right-cols">
                  <div className="outcome-sub-column">
                    <div className="title-icon-wrapper mini-icon">
                      <FiTrendingUp size={18} className="pink-icon-flat" />
                    </div>
                    <h4 className="outcome-sub-title">Impact:</h4>
                    <p className="text-muted card-body-text">{project.takeawaysImpact}</p>
                  </div>

                  <div className="outcome-sub-column">
                    <div className="title-icon-wrapper mini-icon">
                      <FiAward size={18} className="pink-icon-flat" />
                    </div>
                    <h4 className="outcome-sub-title">What I learned:</h4>
                    <p className="text-muted card-body-text">{project.takeawaysLearned}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="outcome-divider-wrapper">
              <hr className="dashed-divider-thin" style={{ margin: '2rem 0' }} />
            </div>

            {/* Next Steps Row */}
            <motion.div
              className="outcome-row"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="outcome-left">
                <div className="outcome-block-left">
                  <div className="title-icon-wrapper">
                    <FiPlayCircle size={24} className="pink-icon-flat" />
                  </div>
                  <h3 className="outcome-block-title">Next Steps</h3>
                  <p className="text-muted card-body-text" style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>{project.nextStepsDesc}</p>
                </div>
              </div>

              <div className="outcome-right">
                <div className="outcome-block-right-cols">
                  {project.nextStepsItems.map((item, idx) => (
                    <div key={idx} className="outcome-sub-column next-step-item">
                      <div className="circle-number mini-circle" style={{ borderColor: 'var(--border-color)' }}>{idx + 1}</div>
                      <p className="text-muted card-body-text" style={{ marginTop: '0.75rem', fontWeight: '500', color: 'var(--text-primary)', fontSize: '0.95rem', lineHeight: '1.5' }}>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="outcome-divider-wrapper" style={{ marginBottom: '4rem' }}>
              <hr className="dashed-divider" />
            </div>

          </div>
        )}





      </div>
    </div>
  );
};

export default ProjectDetail;

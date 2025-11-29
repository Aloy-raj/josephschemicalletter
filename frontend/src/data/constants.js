// Shared data constants for the application

export const EDITORIAL_BOARD = [
  {
    name: "Dr. A. ARUN VIVEKE",
    position: "Editor-in-Chief",
    designation: "Assistant Professor of Chemistry",
    department: "Department of chemistry",
    specialization: "Organic Chemistry",
    email: "arunviveke@gmail.com, arunviveke_ch1@mail.sjcni.edu ",
    image: "/staff/AV.jpg",
    cvLink: "/Dr. Arun Viveke.pdf"
  },
  {
    name: "Dr. S. BRITTO",
    position: "Associate Editor",
    designation: "Associate Professor of Chemistry",
    department: "Department of Chemisty", 
    specialization: "Organic Chemistry",
    email: "britto_ch1@mail.sjctni.edu",
    image: "/staff/SB.jpg",
    cvLink: "/Dr. Britto.pdf"
  },
  {
    name: "Aloysius Yagapparaj",
    position: "Student Editor",
    department: "Department of Chemistry",
    specialization: "III B.Sc Chemistry",
    email: "aloyraj.chem@gmail.com, 23uch255@sjctni.edu",
    image: "/Students/Aloy.jpg"
  },
  {
    name: "Dharmaseelan",
    position: "Student Editor",
    department: "Department of Chemistry",
    specialization: "III B.Sc Chemistry",
    email: "dharmaseelan975@gmail.com, 23uch219@sjctni.edu",
    image: "/Students/Dharma.jpg"
  },
  {
    name: "Sharukhaan",
    position: "Student Editor",
    department: "Department of Chemistry",
    specialization: "II M.Sc Chemistry",
    email: "musirisharukhaan@gmail.com",
    image: "/Students/Sharuk.jpg"
  }
];

export const CURRENT_ISSUES = [
  {
    volume: "Vol. 15, Issue 2",
    title: "Advanced Materials in Modern Chemistry",
    date: "August 2025",
    coverImage: "/api/placeholder/200/280",
    articles: [
      "Nanotechnology in Drug Delivery Systems",
      "Green Chemistry: Sustainable Solutions",
      "Computational Chemistry in Research"
    ]
  }
];

export const ARCHIVE_ISSUES = [
  { volume: "Vol. 15, Issue 1", title: "Biochemistry Frontiers", date: "February 2025" },
  { volume: "Vol. 14, Issue 2", title: "Environmental Chemistry", date: "August 2024" },
  { volume: "Vol. 14, Issue 1", title: "Chemical Education", date: "February 2024" },
  { volume: "Vol. 13, Issue 2", title: "Industrial Chemistry", date: "August 2023" }
];

export const NAVIGATION = [
  { id: 'home', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { 
    id: 'issues', 
    label: 'ISSUES',
    dropdown: [
      { id: 'issues', label: 'CURRENT ISSUE' },
      { id: 'archives', label: 'ARCHIVES' }
    ]
  },
  { id: 'podcast', label: 'PODCAST' },
  { id: 'editorial', label: 'EDITORIAL BOARD' },
  { id: 'guidelines', label: 'GUIDELINES' },
  { id: 'contact', label: 'CONTACT' }
];

export const COLLEGE_INFO = {
  name: "St. Joseph's College",
  subtitle: "(Autonomous) Tiruchirappalli, Tamil Nadu, India",
  address: {
    department: "Department of Chemistry",
    college: "St. Joseph's College (Autonomous)",
    city: "Tiruchirappalli - 620 002",
    state: "Tamil Nadu, India"
  },
  contact: {
    phone: "+91-431-270-1000",
    emails: ["mergen@sjctni.edu", "chemistry@sjctni.edu"]
  }
};
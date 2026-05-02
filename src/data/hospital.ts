// Shared data for Kute Hospital across pages
import {
  Stethoscope, HeartPulse, Activity, Microscope, Ambulance, Baby,
  Bone, Brain, Eye, Smile, Syringe, Pill, ShieldCheck, Hospital,
} from "lucide-react";

import icuImg from "@/assets/hospital/pathology.jpg";
import otImg from "@/assets/hospital/ot.jpg";

// Real Kute Hospital photos
const IMG = {
  drKuteTeam:  "https://backup.kutehospital.com/wp-content/uploads/2024/02/1708542342224.jpg",
  exterior:    "https://backup.kutehospital.com/wp-content/uploads/2024/02/im-1536x864.jpg",
  drKute:      "https://backup.kutehospital.com/wp-content/uploads/2024/02/kutedr1-1024x384.png",
  hall1:       "https://backup.kutehospital.com/wp-content/uploads/2024/03/IMG_9901-1024x683.jpg",
  ward1:       "https://backup.kutehospital.com/wp-content/uploads/2024/03/IMG_9643-1024x683.jpg",
  ward2:       "https://backup.kutehospital.com/wp-content/uploads/2024/03/IMG_9680-1024x683.jpg",
  staff1:      "https://backup.kutehospital.com/wp-content/uploads/2024/03/IMG_9858-768x512.jpg",
  staff2:      "https://backup.kutehospital.com/wp-content/uploads/2024/03/IMG_9877-768x512.jpg",
  facility1:   "https://backup.kutehospital.com/wp-content/uploads/2024/03/IMG_9865-768x512.jpg",
  facility2:   "https://backup.kutehospital.com/wp-content/uploads/2024/03/IMG_9927-768x512.jpg",
  care1:       "https://backup.kutehospital.com/wp-content/uploads/2024/03/IMG_9726-768x512.jpg",
  care2:       "https://backup.kutehospital.com/wp-content/uploads/2024/03/IMG_9870-768x512.jpg",
  care3:       "https://backup.kutehospital.com/wp-content/uploads/2024/03/IMG_9717-768x512.jpg",
};

const careImg    = IMG.care1;
const staff1Img  = IMG.staff1;
const staff2Img  = IMG.staff2;


export const CONTACT = {
  enquiry: "+91 88888 82225",
  helpline: "+91 88887 32225",
  ambulance: "+91 88883 72225",
  email: "info@kutehospital.com",
  address: "Sangamner City and Taluka, Maharashtra",
};

export const SERVICES = [
  {
    slug: "emergency-icu",
    title: "24×7 Emergency & ICU",
    icon: HeartPulse,
    short: "Always open. Immediate care for accidents, heart attacks, and critical emergencies.",
    body: "Our emergency department runs 24×7 with a fully equipped ICU, multi-para monitors, ventilators, and a trained critical care team ready for trauma, cardiac, and medical emergencies.",
    image: icuImg,
    features: [
      "Multi-bed ICU with ventilators",
      "Multi-para cardiac monitors",
      "24×7 trained intensivists & nurses",
      "Defibrillator & crash cart ready",
      "Direct ambulance handover bay",
      "Cashless insurance accepted",
    ],
    process: [
      { step: "Triage", text: "Immediate assessment by emergency physician on arrival." },
      { step: "Stabilise", text: "Oxygen, IV access, life-saving medication and monitoring." },
      { step: "Investigate", text: "On-site lab & imaging for fast, accurate diagnosis." },
      { step: "Admit / Discharge", text: "ICU admission, ward shift or discharge with care plan." },
    ],
  },
  {
    slug: "surgery",
    title: "Laparoscopy (Keyhole Surgery)",
    icon: Activity,
    short: "Small cuts, less pain, faster healing for gallbladder, appendix, and hernias.",
    body: "Performed by experienced surgeons in a sterile modular operating theatre, including laparoscopic, hernia, gallbladder, and trauma surgeries.",
    image: otImg,
    features: [
      "Laparoscopic gallbladder & appendix",
      "Hernia repair (open & lap)",
      "Trauma & accident surgeries",
      "Abscess, cyst & lump removal",
      "Sterile modular operating theatre",
      "Post-op care & physiotherapy",
    ],
    process: [
      { step: "Pre-op", text: "Detailed assessment, fitness tests and consent." },
      { step: "Surgery", text: "Performed in a sterile modular OT by senior surgeons." },
      { step: "Recovery", text: "ICU/ward monitoring with pain management." },
      { step: "Follow-up", text: "Wound review, suture removal and rehab guidance." },
    ],
  },
  {
    slug: "general-medicine",
    title: "General Medicine & OPD",
    icon: Stethoscope,
    short: "Expert care for fever, diabetes, BP, and all general health issues.",
    body: "Diagnosis and management of acute and chronic illnesses including diabetes, hypertension, thyroid, respiratory and gastrointestinal conditions.",
    image: careImg,
    features: [
      "Fever, flu and infections",
      "Diabetes & hypertension management",
      "Thyroid & hormonal disorders",
      "Respiratory & GI care",
      "Preventive health check-ups",
      "Lifestyle & diet counselling",
    ],
    process: [
      { step: "Consultation", text: "Detailed history and clinical examination." },
      { step: "Diagnostics", text: "Targeted tests via in-house pathology lab." },
      { step: "Treatment plan", text: "Personalised medication and lifestyle plan." },
      { step: "Follow-up", text: "Regular reviews to track progress and adjust care." },
    ],
  },
  {
    slug: "maternity",
    title: "Maternity & Childcare",
    icon: Baby,
    short: "Safe deliveries and caring doctors for your baby's health.",
    body: "Antenatal care, normal and caesarean deliveries, newborn care, immunisation and pediatric consultations under one roof.",
    image: "https://drkumarshospital.com/wp-content/uploads/2025/05/mater.jpg",
    features: [
      "Antenatal & postnatal care",
      "Normal & caesarean deliveries",
      "Newborn / neonatal care",
      "Immunisation as per IAP schedule",
      "Pediatric OPD consultations",
      "Lactation & nutrition counselling",
    ],
    process: [
      { step: "Antenatal", text: "Regular check-ups, scans and nutrition guidance." },
      { step: "Delivery", text: "Safe delivery in a clean, monitored labour room." },
      { step: "Newborn care", text: "Immediate neonatal assessment and care." },
      { step: "Follow-up", text: "Postnatal visits, vaccination and pediatric care." },
    ],
  },
  {
    slug: "pathology",
    title: "Pathology Lab",
    icon: Microscope,
    short: "Quick and accurate blood tests done right inside the hospital.",
    body: "Hematology, biochemistry, serology, microbiology and special tests with same-day reporting for most investigations.",
    image: pathologyImg,
    features: [
      "Hematology (CBC, ESR, peripheral smear)",
      "Biochemistry (LFT, KFT, lipid, sugar)",
      "Serology & immunology",
      "Microbiology & culture",
      "Thyroid, hormone & vitamin profiles",
      "Same-day report delivery",
    ],
    process: [
      { step: "Sample collection", text: "Hygienic, painless collection by trained phlebotomist." },
      { step: "Analysis", text: "Modern analysers under expert pathologist supervision." },
      { step: "Quality check", text: "Internal QC for every batch of reports." },
      { step: "Report", text: "Soft and printed reports — same day for most tests." },
    ],
  },
  {
    slug: "ambulance",
    title: "Ambulance Service",
    icon: Ambulance,
    short: "Fast emergency pickup from anywhere in Sangamner taluka.",
    body: "Oxygen-equipped ambulance with trained paramedic available 24×7 for emergency pickup and inter-hospital transfers.",
    image: exteriorImg,
    features: [
      "24×7 availability",
      "Oxygen, suction & basic life support",
      "Trained paramedic on board",
      "Fast response across Sangamner taluka",
      "Inter-hospital transfer support",
      "Direct emergency handover at arrival",
    ],
    process: [
      { step: "Call", text: `Dial ${CONTACT.ambulance} — operator picks instantly.` },
      { step: "Dispatch", text: "Nearest ambulance dispatched within minutes." },
      { step: "On-route care", text: "Oxygen and basic life support during transit." },
      { step: "Handover", text: "Direct handover to emergency team on arrival." },
    ],
  },
];

export const DOCTORS = [
  {
    name: "Dr. Pradeep Kute",
    role: "Founder · MBBS, MS (General Surgery)",
    bio: "Senior consultant surgeon with two decades of experience in general and laparoscopic surgery. Founder of Kute Hospital, dedicated to bringing modern, compassionate healthcare to Sangamner.",
    specialties: ["General Surgery", "Laparoscopy", "Trauma"],
    image: "drKute" as const,
    featured: true,
  },
  {
    name: "Dr. S. Patil",
    role: "Visiting Surgeon · MS Ortho",
    bio: "Specialist in joint replacements, sports injuries and trauma fracture management.",
    specialties: ["Joint Replacement", "Trauma", "Arthroscopy"],
    icon: Bone,
  },
  {
    name: "Dr. A. Deshmukh",
    role: "Visiting Cardiologist · DM Cardiology",
    bio: "Consultant cardiologist with expertise in non-invasive cardiology, echo, and managing complex heart conditions.",
    specialties: ["Cardiology", "Echo", "ECG"],
    icon: HeartPulse,
  },
];

export const TESTIMONIALS = [
  {
    name: "Ramesh Thorat",
    location: "Ashvi Village",
    treatment: "Gallbladder Surgery",
    quote: "My stomach pain was unbearable. Dr. Kute did a laparoscopy surgery, and I was walking the very next day. The hospital is clean, and the staff is incredibly helpful.",
  },
  {
    name: "Sunita Gunjal",
    location: "Sangamner",
    treatment: "Maternity Delivery",
    quote: "I delivered my baby boy here. The nurses were so caring, and the entire process was cashless because of my insurance. I felt totally safe.",
  },
  {
    name: "Kishor Patil",
    location: "Chandwad",
    treatment: "Emergency Accident Care",
    quote: "My brother had a bike accident on the highway. Kute Hospital's ambulance arrived in 15 minutes and the ICU care saved his life. We will forever be grateful.",
  },
];

export const STATS = [
  { value: "35", label: "Beds" },
  { value: "14+", label: "Years (Est. 2010)" },
  { value: "12", label: "Expert Staff" },
  { value: "10-Min", label: "Admission Speed" },
];

export const VALUES = [
  { icon: HeartPulse, title: "Compassion First", body: "Every patient is treated like family — with empathy, dignity and respect." },
  { icon: ShieldCheck, title: "Clinical Excellence", body: "Evidence-based protocols, modern equipment, and continuous training." },
  { icon: Hospital, title: "Accessible Care", body: "Affordable pricing, transparent billing, and multiple insurance partners." },
  { icon: Pill, title: "End-to-End Service", body: "From OPD to surgery to pharmacy and pathology — under one roof." },
];

export const INSURANCE = [
  "Star Health", "HDFC ERGO", "ICICI Lombard", "New India Assurance",
  "Bajaj Allianz", "Niva Bupa", "Tata AIG", "ManipalCigna", "MahaPreet Yojana", "PMJAY",
];

export const FAQ = [
  { q: "What are the OPD timings?", a: "OPD runs from 9:00 AM to 8:00 PM, Monday to Saturday. Sunday OPD is by appointment." },
  { q: "Do you accept cashless insurance?", a: "Yes — we are empanelled with most major TPAs and government schemes including PMJAY and MahaPreet Yojana." },
  { q: "Is the ambulance available outside Sangamner?", a: "Yes, our ambulance covers the entire Sangamner taluka and nearby areas. Call +91 88883 72225." },
  { q: "How do I book an appointment with Dr. Kute?", a: "You can call our enquiry line, fill the appointment form on this site, or walk in during OPD hours." },
  { q: "Do you have ICU facility?", a: "Yes — a fully equipped ICU with ventilators, multi-para monitors and 24×7 trained staff." },
];

export const HOSPITAL_IMAGES: { src: string; alt: string }[] = [
  { src: IMG.exterior,   alt: "Kute Hospital building" },
  { src: IMG.hall1,      alt: "Hospital reception hall" },
  { src: IMG.ward1,      alt: "Patient ward" },
  { src: IMG.ward2,      alt: "Hospital ward" },
  { src: IMG.staff1,     alt: "Medical staff" },
  { src: IMG.staff2,     alt: "Nursing team" },
  { src: IMG.facility1,  alt: "Hospital facility" },
  { src: IMG.facility2,  alt: "Treatment room" },
  { src: IMG.care1,      alt: "Patient care" },
  { src: IMG.care2,      alt: "Doctor attending patient" },
  { src: IMG.care3,      alt: "Clinical care" },
  { src: IMG.drKuteTeam, alt: "Dr. Kute with team" },
];

// Convenient individual URLs for use anywhere in the site
export const HOSPITAL_STOCK = IMG;

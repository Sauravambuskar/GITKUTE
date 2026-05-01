// Shared data for Kute Hospital across pages
import {
  Stethoscope, HeartPulse, Activity, Microscope, Ambulance, Baby,
  Bone, Brain, Eye, Smile, Syringe, Pill, ShieldCheck, Hospital,
} from "lucide-react";

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
    short: "Round-the-clock critical care with modern ICU & ventilator support.",
    body: "Our emergency department runs 24×7 with a fully equipped ICU, multi-para monitors, ventilators, and a trained critical care team ready for trauma, cardiac, and medical emergencies.",
    image: "icu" as const,
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
    slug: "general-medicine",
    title: "General Medicine",
    icon: Stethoscope,
    short: "Comprehensive OPD care for fever, infections & chronic conditions.",
    body: "Diagnosis and management of acute and chronic illnesses including diabetes, hypertension, thyroid, respiratory and gastrointestinal conditions.",
    image: "care" as const,
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
    slug: "surgery",
    title: "General & Laparoscopic Surgery",
    icon: Activity,
    short: "Modular OT for elective and emergency surgical procedures.",
    body: "Performed by experienced surgeons in a sterile modular operating theatre, including laparoscopic, hernia, gallbladder, and trauma surgeries.",
    image: "ot" as const,
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
    slug: "pathology",
    title: "Pathology Lab",
    icon: Microscope,
    short: "In-house diagnostics with fast, accurate reporting.",
    body: "Hematology, biochemistry, serology, microbiology and special tests with same-day reporting for most investigations.",
    image: "pathology" as const,
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
    slug: "maternity",
    title: "Maternity & Childcare",
    icon: Baby,
    short: "Safe deliveries, neonatal care and pediatric OPD.",
    body: "Antenatal care, normal and caesarean deliveries, newborn care, immunisation and pediatric consultations under one roof.",
    image: "care" as const,
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
    slug: "ambulance",
    title: "Ambulance Service",
    icon: Ambulance,
    short: "Fully-equipped ambulance for rapid response across Sangamner.",
    body: "Oxygen-equipped ambulance with trained paramedic available 24×7 for emergency pickup and inter-hospital transfers.",
    image: "reception" as const,
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
    name: "Dr. A. Deshmukh",
    role: "Visiting Cardiologist · DM Cardiology",
    bio: "Consultant cardiologist with expertise in non-invasive cardiology, echo, and managing complex heart conditions.",
    specialties: ["Cardiology", "Echo", "ECG"],
    icon: HeartPulse,
  },
  {
    name: "Dr. R. Pawar",
    role: "Visiting Orthopedic Surgeon · MS Ortho",
    bio: "Specialist in joint replacements, sports injuries and trauma fracture management.",
    specialties: ["Joint Replacement", "Trauma", "Arthroscopy"],
    icon: Bone,
  },
  {
    name: "Dr. S. Shah",
    role: "Visiting Neurologist · DM Neurology",
    bio: "Consultant for stroke, epilepsy, headache and neuromuscular disorders.",
    specialties: ["Stroke", "Epilepsy", "Headache"],
    icon: Brain,
  },
  {
    name: "Dr. M. Joshi",
    role: "Visiting Ophthalmologist · MS Ophthal",
    bio: "Cataract, refractive and general ophthalmic surgery and OPD consultations.",
    specialties: ["Cataract", "Refraction", "Glaucoma"],
    icon: Eye,
  },
  {
    name: "Dr. P. Kulkarni",
    role: "Visiting Dental Surgeon · BDS, MDS",
    bio: "Cosmetic dentistry, root canal, extractions and oral surgery for all age groups.",
    specialties: ["RCT", "Cosmetic", "Oral Surgery"],
    icon: Smile,
  },
  {
    name: "Dr. V. Patil",
    role: "Visiting Pediatrician · MD Pediatrics",
    bio: "Newborn care, immunisation, growth monitoring and pediatric illnesses.",
    specialties: ["Neonatal", "Immunisation", "Pediatrics"],
    icon: Baby,
  },
  {
    name: "Dr. N. Sharma",
    role: "Visiting Anesthetist · MD Anesthesia",
    bio: "Pre-operative assessment, general & regional anesthesia for all surgeries.",
    specialties: ["General Anesthesia", "Regional Blocks"],
    icon: Syringe,
  },
];

export const TESTIMONIALS = [
  {
    name: "Sangeeta P.",
    location: "Sangamner",
    quote: "The care at Kute Hospital is exceptional. Dr. Kute and the staff treated my father like family during his surgery and recovery.",
  },
  {
    name: "Ramesh K.",
    location: "Akole",
    quote: "Clean facility, attentive nurses, and quick emergency response. The ambulance reached us in under 15 minutes.",
  },
  {
    name: "Priya S.",
    location: "Sangamner",
    quote: "I delivered my baby here. The maternity team made what could have been a stressful time feel safe and joyful.",
  },
];

export const STATS = [
  { value: "20+", label: "Years of service" },
  { value: "50,000+", label: "Patients cared for" },
  { value: "24×7", label: "Emergency & ICU" },
  { value: "15+", label: "Visiting specialists" },
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

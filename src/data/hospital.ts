// Shared content for Kute Hospital across the website.
import {
  Stethoscope, HeartPulse, Activity, Microscope, Ambulance, Bone,
  ScanLine, TestTubes, ShieldCheck, Hospital, Pill, Droplets, Syringe,
} from "lucide-react";

import icuImg from "@/assets/hospital/icu.jpg";
import careImg from "@/assets/hospital/care.jpg";
import pathologyImg from "@/assets/hospital/pathology.jpg";
import receptionImg from "@/assets/hospital/reception.jpg";
import heroImg from "@/assets/hospital/hero.jpg";
import exteriorImg from "@/assets/hospital/exterior.jpg";
import drKuteImg from "@/assets/hospital/dr-kute.jpg";
import staff1Img from "@/assets/hospital/staff-1.jpg";
import staff2Img from "@/assets/hospital/staff-2.jpg";
import leadershipImg from "@/assets/hospital/gallery/leadership-dr-kute.jpg";
import saiBabaImg from "@/assets/hospital/gallery/dr-kute-sai-baba.jpg";
import womenMedicalTeamImg from "@/assets/hospital/gallery/women-medical-team.jpg";
import lobbyOverviewImg from "@/assets/hospital/gallery/lobby-overview.jpg";
import administratorImg from "@/assets/hospital/gallery/hospital-administrator.jpg";
import hospitalEntranceImg from "@/assets/hospital/gallery/hospital-entrance.jpg";
import receptionEnquiryImg from "@/assets/hospital/gallery/reception-enquiry.jpg";
import clinicalTeamOfficeImg from "@/assets/hospital/gallery/clinical-team-office.jpg";
import wardMedicalTeamImg from "@/assets/hospital/gallery/ward-medical-team.jpg";
import opdReceptionImg from "@/assets/hospital/gallery/opd-reception.jpg";
import operationTheatreDarkImg from "@/assets/hospital/gallery/operation-theatre-dark.jpg";
import surgeryTeamLightsImg from "@/assets/hospital/gallery/surgery-team-lights.jpg";
import hospitalExteriorWideImg from "@/assets/hospital/gallery/hospital-exterior-wide.jpg";
import doctorConsultationStockImg from "@/assets/hospital/gallery/doctor-consultation-stock.png";

const IMG = {
  drKuteTeam: clinicalTeamOfficeImg,
  exterior: hospitalEntranceImg,
  exteriorWide: hospitalExteriorWideImg,
  drKute: drKuteImg,
  leadership: leadershipImg,
  saiBaba: saiBabaImg,
  hall1: receptionEnquiryImg,
  lobby: lobbyOverviewImg,
  opd: opdReceptionImg,
  ward1: wardMedicalTeamImg,
  ward2: receptionImg,
  staff1: womenMedicalTeamImg,
  staff2: wardMedicalTeamImg,
  administrator: administratorImg,
  facility1: icuImg,
  facility2: surgeryTeamLightsImg,
  surgery2: operationTheatreDarkImg,
  care1: doctorConsultationStockImg,
  care2: leadershipImg,
  care3: clinicalTeamOfficeImg,
  fallbackCare: careImg,
  fallbackExterior: exteriorImg,
  fallbackStaff1: staff1Img,
  fallbackStaff2: staff2Img,
  fallbackHero: heroImg,
};

export const CONTACT = {
  enquiry: "+91 88888 82225",
  emergency: "+91 88888 82225",
  helpline: "+91 88887 32225",
  cardiology: "+91 88883 72225",
  ambulance: "+91 88888 82225",
  landlines: ["02425 226688", "02425 226686"],
  emails: ["kutehospiandlaproscopycenter@gmail.com", "kutehospital.sangamner@gmail.com"],
  email: "kutehospiandlaproscopycenter@gmail.com",
  website: "www.kutehospital.com",
  address: "Kute Hospital, 40 Feet DP Road, Sangamner, Maharashtra 422605",
};

export const SERVICES = [
  {
    slug: "general-surgery", title: "General Surgery", icon: Activity,
    short: "Comprehensive open and laparoscopic surgical care with dedicated post-operative support.",
    body: "The Department of General Surgery provides evaluation and treatment for common and complex surgical conditions, supported by a modern operation theatre, Surgical ICU and attentive post-operative care.",
    image: surgeryTeamLightsImg,
    features: ["Laparoscopic and open surgery", "Hernia, appendix and gallbladder surgery", "Abdominal and gastrointestinal procedures", "Trauma and emergency surgery", "Minor surgical procedures", "Post-operative monitoring and wound care"],
    process: [{ step: "Consultation", text: "Clinical assessment and review of reports." }, { step: "Planning", text: "Investigations, fitness and treatment discussion." }, { step: "Procedure", text: "Surgery with modern anaesthesia and monitoring." }, { step: "Recovery", text: "Post-operative care, discharge advice and follow-up." }],
  },
  {
    slug: "general-medicine", title: "General Medicine", icon: Stethoscope,
    short: "Diagnosis and ongoing care for acute illnesses, diabetes, blood pressure and chronic conditions.",
    body: "The Department of General Medicine offers OPD, inpatient and critical care for adult medical conditions, with coordinated diagnostics, medication management and preventive guidance.",
    image: doctorConsultationStockImg,
    features: ["Fever and infectious illnesses", "Diabetes and hypertension care", "Respiratory and gastrointestinal conditions", "Thyroid and lifestyle disorders", "Preventive health evaluation", "Medicine ICU support"],
    process: [{ step: "Assessment", text: "Detailed history and physical examination." }, { step: "Diagnostics", text: "Relevant laboratory and imaging tests." }, { step: "Treatment", text: "Personalised medicines and care plan." }, { step: "Review", text: "Follow-up to monitor recovery and long-term health." }],
  },
  {
    slug: "orthopaedics-joint-replacement", title: "Orthopaedics & Joint Replacement", icon: Bone,
    short: "Specialist care for fractures, joint pain, mobility problems and joint replacement.",
    body: "The Department of Orthopaedics and Joint Replacement provides evaluation, surgery and rehabilitation for bone, joint and musculoskeletal conditions across all age groups.",
    image: clinicalTeamOfficeImg,
    features: ["Fracture and trauma management", "Knee and hip joint replacement", "Arthritis and joint pain care", "Sports and ligament injuries", "Spine and musculoskeletal evaluation", "Post-surgical rehabilitation guidance"],
    process: [{ step: "Evaluation", text: "Examination with imaging review." }, { step: "Care plan", text: "Conservative or surgical options explained." }, { step: "Treatment", text: "Procedure or structured medical management." }, { step: "Rehabilitation", text: "Mobility, exercise and follow-up support." }],
  },
  {
    slug: "anaesthesia-critical-care", title: "Anaesthesia & Critical Care", icon: Syringe,
    short: "Safe anaesthesia support, ICU monitoring and critical care for surgical and emergency patients.",
    body: "The Department of Anaesthesia and Critical Care supports surgeries, emergency stabilisation and ICU care with trained monitoring, pain control and coordinated critical care support.",
    image: icuImg,
    features: ["Pre-anaesthesia assessment", "General and regional anaesthesia support", "Surgical and post-operative monitoring", "ICU and emergency airway support", "Pain management guidance", "Critical care coordination"],
    process: [{ step: "Evaluate", text: "Fitness, history, medicines and reports reviewed before procedures." }, { step: "Plan", text: "Anaesthesia approach and monitoring needs are selected for the patient." }, { step: "Monitor", text: "Vitals, airway, pain and recovery are closely supervised." }, { step: "Stabilise", text: "Critical care support continues in ICU or recovery areas as needed." }],
  },
  {
    slug: "cardiology", title: "Cardiology", icon: HeartPulse,
    short: "Heart evaluation, cardiac monitoring and dedicated critical care when every minute matters.",
    body: "The Department of Cardiology supports assessment and management of heart-related conditions with dedicated consultation, monitoring and Cardiac ICU facilities.",
    image: icuImg,
    features: ["Cardiology consultation", "ECG and cardiac assessment", "Chest pain and heart-risk evaluation", "Hypertension management", "Cardiac emergency support", "Dedicated Cardiac ICU"],
    process: [{ step: "Triage", text: "Prompt assessment of symptoms and vital signs." }, { step: "Testing", text: "Cardiac investigations as advised." }, { step: "Management", text: "Medication, monitoring or admission." }, { step: "Follow-up", text: "Risk-factor and long-term cardiac care." }],
  },
  {
    slug: "nephrology", title: "Nephrology", icon: Droplets,
    short: "Specialist kidney care for renal disease, electrolyte disorders and related complications.",
    body: "The Department of Nephrology provides consultation and coordinated care for kidney disease, renal complications and conditions affecting fluid and electrolyte balance.",
    image: opdReceptionImg,
    features: ["Kidney function evaluation", "Acute and chronic kidney disease care", "Electrolyte disorder management", "Hypertension related to kidney disease", "Diabetic kidney disease guidance", "Coordinated inpatient care"],
    process: [{ step: "Consult", text: "Symptoms, history and medicines reviewed." }, { step: "Investigate", text: "Renal tests and imaging as required." }, { step: "Treat", text: "Individual care plan and monitoring." }, { step: "Continue", text: "Diet, medicine and follow-up guidance." }],
  },
  {
    slug: "urology", title: "Urology", icon: Hospital,
    short: "Medical and surgical care for urinary tract, prostate and stone-related conditions.",
    body: "The Department of Urology evaluates and treats urinary system conditions in men and women, with coordinated diagnostic, surgical and follow-up care.",
    image: operationTheatreDarkImg,
    features: ["Kidney and urinary stone care", "Prostate evaluation", "Urinary tract conditions", "Male urological health", "Urological procedures", "Post-procedure follow-up"],
    process: [{ step: "Consult", text: "Clinical and symptom assessment." }, { step: "Diagnose", text: "Laboratory and imaging evaluation." }, { step: "Treat", text: "Medical or surgical management." }, { step: "Review", text: "Recovery monitoring and prevention advice." }],
  },
  {
    slug: "radiology", title: "Radiology", icon: ScanLine,
    short: "Imaging support for timely diagnosis and better clinical decision-making.",
    body: "The Department of Radiology supports doctors and patients with diagnostic imaging services designed for accurate evaluation and coordinated reporting.",
    image: heroImg,
    features: ["Diagnostic imaging support", "Emergency imaging coordination", "Pre-operative evaluation", "Inpatient and OPD imaging", "Specialist interpretation", "Coordinated clinical reporting"],
    process: [{ step: "Referral", text: "Clinical requirement and preparation reviewed." }, { step: "Imaging", text: "Study performed with patient comfort in mind." }, { step: "Reporting", text: "Images assessed by a specialist." }, { step: "Next steps", text: "Findings shared with the treating team." }],
  },
  {
    slug: "pathology", title: "Pathology", icon: TestTubes,
    short: "Convenient in-house testing that supports faster diagnosis and treatment decisions.",
    body: "The Department of Pathology provides essential laboratory investigations for OPD, admitted and emergency patients, supporting timely and coordinated care.",
    image: pathologyImg,
    features: ["Haematology investigations", "Biochemistry testing", "Serology and immunology", "Routine urine and body-fluid tests", "Pre-operative profiles", "Inpatient and emergency laboratory support"],
    process: [{ step: "Collection", text: "Safe sample collection by trained staff." }, { step: "Analysis", text: "Samples processed with quality checks." }, { step: "Report", text: "Results prepared for clinical review." }, { step: "Consult", text: "Treating doctor explains the next steps." }],
  },
];

export const OTHER_SERVICES = [
  { icon: HeartPulse, title: "Emergency & Casualty Ward", body: "Round-the-clock assessment and stabilisation for urgent medical and surgical needs." },
  { icon: Stethoscope, title: "OPD Services", body: "Consultations across departments with coordinated investigation and follow-up." },
  { icon: Pill, title: "24×7 Pharmacy", body: "Convenient access to prescribed medicines for patients and attendants at all hours." },
  { icon: ShieldCheck, title: "Cashless & Mediclaim Desk", body: "Administrative guidance for approvals, documentation, billing and eligible claims." },
  { icon: Hospital, title: "Front Desk", body: "Help with registration, appointments, admissions, directions and general enquiries." },
  { icon: Ambulance, title: "Ambulance Services", body: "Emergency transport support coordinated through the hospital enquiry line." },
];

export const INFRASTRUCTURE = [
  "Medicine ICU", "Surgical ICU", "Cardiac ICU", "General Ward", "Semi-special Room",
  "Special Room", "Semi-deluxe A/C Room", "Deluxe A/C Room",
];

export const DOCTORS = [
  { name: "Dr. Pradeep Kute", role: "Founder · MBBS, MS (General Surgery)", bio: "Senior consultant surgeon with extensive experience in general and laparoscopic surgery. Founder of Kute Hospital, dedicated to bringing modern, compassionate healthcare to Sangamner.", specialties: ["General Surgery", "Laparoscopy", "Trauma"], image: "drKute" as const, featured: true },
  { name: "Dr. S. Patil", role: "Visiting Surgeon · MS Ortho", bio: "Specialist in joint replacements, sports injuries and trauma fracture management.", specialties: ["Joint Replacement", "Trauma", "Orthopaedics"], icon: Bone },
  { name: "Dr. A. Deshmukh", role: "Visiting Cardiologist · DM Cardiology", bio: "Consultant cardiologist with expertise in cardiac evaluation and management of complex heart conditions.", specialties: ["Cardiology", "Cardiac Care", "ECG"], icon: HeartPulse },
];

export const VISITING_SPECIALISTS = [
  { specialty: "Brain & Spine Surgeon", doctors: [{ name: "Dr. Uday Bade", schedule: "Every Tuesday, Friday & Sunday" }, { name: "Dr. Anil Jadhav", schedule: "1st & 3rd Friday" }, { name: "Dr. Samir Phutane", schedule: "2nd & 4th Tuesday" }] },
  { specialty: "Surgical Gastroenterologist", doctors: [{ name: "Dr. Prakash Valse", schedule: "On call" }, { name: "Dr. Prashant Patil", schedule: "3rd Monday" }, { name: "Dr. Manoj Bhambre", schedule: "On call" }] },
  { specialty: "Neurosurgeon", doctors: [{ name: "Dr. Vijay Ghuge", schedule: "Every Wednesday" }, { name: "Dr. Nahush Patil", schedule: "1st & 3rd Friday" }, { name: "Dr. Ninad Thorat", schedule: "1st & 3rd Saturday" }, { name: "Dr. Dhananjay Duberkar", schedule: "2nd Wednesday" }, { name: "Dr. Sumant Biyani", schedule: "2nd & 4th Friday" }, { name: "Dr. Amit Yewale", schedule: "2nd & 4th Saturday" }] },
  { specialty: "Uro Surgeon", doctors: [{ name: "Dr. Narsingh Mane", schedule: "Every Wednesday & Saturday" }] },
  { specialty: "Nephrologist", doctors: [{ name: "Dr. Pratik Shete", schedule: "Every Saturday" }, { name: "Dr. Nagesh Aghor", schedule: "2nd Wednesday" }, { name: "Dr. Prakash Ugale", schedule: "3rd Wednesday" }] },
  { specialty: "Thyroid Physician", doctors: [{ name: "Dr. Ashutosh Sonwane", schedule: "1st Sunday" }] },
  { specialty: "Vascular Surgeon", doctors: [{ name: "Dr. Ashutosh Aher", schedule: "2nd Tuesday" }, { name: "Dr. Pravin Narkhede", schedule: "2nd Friday" }] },
  { specialty: "Pediatric Surgeon", doctors: [{ name: "Dr. Satish Kapadnis", schedule: "2nd & 4th Wednesday" }] },
  { specialty: "Psychiatrist", doctors: [{ name: "Dr. Jyoti Ugale", schedule: "4th Thursday" }] },
  { specialty: "Cancer Surgeon", doctors: [{ name: "Dr. Vinayak Shenge", schedule: "On call" }, { name: "Dr. Sulabh Bhambre", schedule: "On call" }] },
  { specialty: "Orthopaedic Surgeon", doctors: [{ name: "Dr. Nikhil Rahangdale", schedule: "On call" }, { name: "Dr. Amol Dange", schedule: "On call" }] },
  { specialty: "Plastic Surgeon", doctors: [{ name: "Dr. Lalit Darle", schedule: "Every Saturday" }, { name: "Dr. Sachin Wagh", schedule: "4th Saturday" }] },
];

export const TESTIMONIALS = [
  { name: "Rakesh Shinde", location: "Sangamner", treatment: "General Care", quote: "The hospital is clean, the service is excellent, and the doctors' panel is very strong. A dependable hospital in Sangamner." },
  { name: "Vaishanvi Mahesh Murtadak", location: "Sangamner", treatment: "Consultation", quote: "Dr. Pradeep Kute was knowledgeable, caring and informative. I felt at ease and confident in the care I received." },
  { name: "Somnath", location: "Sangamner", treatment: "Diagnostics", quote: "The hospital's modern equipment supports accurate diagnostics and effective treatment for patients." },
];

export const STATS = [
  { value: "50", label: "Hospital Beds" }, { value: "16", label: "Years of Care" },
  { value: "9", label: "Core Departments" }, { value: "24×7", label: "Emergency Support" },
];

export const VALUES = [
  { icon: HeartPulse, title: "Compassion First", body: "Every patient is treated with empathy, dignity and respect." },
  { icon: ShieldCheck, title: "Clinical Excellence", body: "Coordinated specialists, modern facilities and attentive monitoring." },
  { icon: Hospital, title: "Accessible Care", body: "Government schemes, cashless support and transparent guidance." },
  { icon: Pill, title: "Care Under One Roof", body: "From OPD and diagnostics to critical care, surgery and pharmacy." },
];

export const INSURANCE = ["MJPJAY", "PMJAY", "ECHS", "MPKAY", "MKSSKAY", "ESIC", "Cashless Facilities", "Mediclaim Facilities"];

export const FAQ = [
  { q: "Which departments are available?", a: "General Surgery, General Medicine, Orthopaedics & Joint Replacement, Anaesthesia & Critical Care, Cardiology, Nephrology, Urology, Radiology and Pathology are available." },
  { q: "Which government schemes are accepted?", a: "Available schemes include MJPJAY, PMJAY, ECHS, MPKAY, MKSSKAY and ESIC, subject to eligibility and approval." },
  { q: "Do you provide cashless and mediclaim support?", a: "Yes. Our administration and cashless desk assists with documentation, approvals and eligible cashless or mediclaim facilities." },
  { q: "Is emergency care available at all hours?", a: `Yes. Emergency and casualty support is available 24×7. Call ${CONTACT.emergency}.` },
  { q: "What accommodation is available?", a: "The hospital has a general ward, semi-special and special rooms, plus semi-deluxe and deluxe air-conditioned rooms." },
];

export const HOSPITAL_IMAGES: { src: string; alt: string }[] = [
  { src: IMG.exterior, alt: "Kute Hospital entrance" }, { src: IMG.exteriorWide, alt: "Kute Hospital building" },
  { src: IMG.hall1, alt: "Hospital reception and enquiry desk" }, { src: IMG.opd, alt: "OPD reception and waiting area" },
  { src: IMG.lobby, alt: "Hospital lobby and waiting area" }, { src: IMG.leadership, alt: "Dr. Pradeep Kute with a colleague" },
  { src: IMG.saiBaba, alt: "Dr. Pradeep Kute at the hospital prayer area" }, { src: IMG.staff1, alt: "Women medical staff at Kute Hospital" },
  { src: IMG.drKuteTeam, alt: "Dr. Pradeep Kute with the clinical team" }, { src: IMG.staff2, alt: "Ward medical team at Kute Hospital" },
  { src: IMG.administrator, alt: "Hospital administration desk" },
];

export const HOSPITAL_STOCK = IMG;

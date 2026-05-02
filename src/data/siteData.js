// ─────────────────────────────────────────────────────────────
// data/siteData.js
// Central configuration for Care Homeopathic Clinic.
// Update this file when clinic details change rather than
// hunting through components.
// ─────────────────────────────────────────────────────────────

export const siteData = {
  name: 'Care Homeopathic Clinic',
  tagline: 'The highest ideal of cure is rapid, gentle and permanent restoration of the health',
  description:
    'Care Homeopathic Clinic, Panchwati Chowk, Saharsa – trusted homeopathic care by Dr. Rajesh Kumar Ranjan. Serving patients across Saharsa, Supaul, Madhepura, Araria, and the entire Kosi region.',
  founded: '2020',
  url: 'https://carehomeopathicclinic-e545f.web.app',
  logo: '/favicon.png',

  // ── Contact & Location ───────────────────────────────────────
  contact: {
    address: 'Radha Krishna Vatika, Panchwati Chowk, Ward No. 15, Saharsa, Bihar 852201',
    phone: '8757864776',
    phone2: '9523034934',
    email: 'carehomeopathicclinic@gmail.com',
    hours: 'Mon – Sat: 9:00 AM – 6:00 PM | Sun: 11:00 AM – 2:00 PM',
  },

  // ── Social Media Links ───────────────────────────────────────
  social: {
    facebook: 'https://facebook.com/carehomeopathicclinic',
    instagram: 'https://instagram.com/carehomeopathicclinic',
    twitter: 'https://twitter.com/carehomeopathic',
    youtube: 'https://youtube.com/@carehomeopathicclinic',
    linkedin: 'https://linkedin.com/company/carehomeopathicclinic',
  },

  // ── Team & Operational Stats ─────────────────────────────────
  team: {
    totalStaff: 5,
    nurses: 1,
    technicians: 2,
    pharmacist: true,
    ambulance: false,
    available247: false,
    consultationFee: 200,
  },

  // ── SEO Configuration ────────────────────────────────────────
  seo: {
    keywords: [
      'Care Homeopathic Clinic',
      'homeopathic clinic Saharsa',
      'best homeopathic doctor Saharsa Bihar',
      'Dr Rajesh Kumar Ranjan',
      'homeopathy Saharsa',
      'skin disease doctor Saharsa',
      'women disease specialist Saharsa',
      'केयर होम्योपैथिक क्लिनिक सहरसा',
      'होम्योपैथी सहरसा',
      'kidney stone treatment Saharsa',
      'migraine treatment Saharsa',
      'piles treatment homeopathy',
      'thyroid treatment homeopathy Saharsa',
      'Panchwati Chowk Saharsa clinic',
      'sciatica joint pain homeopathy',
      'PCOS PCOD homeopathy Saharsa',
      'book appointment homeopathy Saharsa',
      'homeopathic clinic Supaul',
      'homeopathic doctor Madhepura',
      'homeopathy Araria',
      'best doctor in Kosi region',
    ],
    ogImage: '/og-image.jpg',
  },

  // ── Homepage Stats Counter ───────────────────────────────────
  stats: [
    { label: 'Happy Patients', value: 100000, suffix: '+' },
    { label: 'Years Experience', value: 25, suffix: '+' },
    { label: 'Successful Recoveries', value: 100000, suffix: '+' },
    { label: 'Treatments', value: 220, suffix: '+' },
  ],

  // ── Google Maps Embed ────────────────────────────────────────
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20368.23470867344!2d86.59465194331727!3d25.879466939589253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ee3dbe346651b7%3A0x92efa201b6e93f5e!2sCare%20Homeopathic%20Clinic.Dr.Rajesh%20Kumar%20Ranjan.!5e0!3m2!1sen!2sin!4v1776572262574!5m2!1sen!2sin',

  // ── Departments / Specialties (used in appointment form) ─────
  departments: [
    'General OPD / Acute Illness',
    'Skin & Hair Diseases',
    'Digestive & Liver Disorders',
    'Respiratory & Allergies',
    'Women\'s Health',
    'Joint, Bone & Muscle',
    'Nervous System & Mental Health',
    'Metabolic & Chronic Diseases',
    'Kidney & Urinary',
    'Children\'s Health',
    'Men\'s Health',
    'Eye & Ear Disorders',
    'Hormonal & Endocrine',
    'Cardiovascular (Supportive)',
  ],

  // ── Facilities ───────────────────────────────────────────────
  facilities: [
    { name: 'Medicine Counter', icon: '💊' },
    { name: 'Home Delivery', icon: '🚚' },
    { name: 'OPD Consultation', icon: '🏥' },
    { name: 'Online Appointment', icon: '📱' },
  ],
}

export default siteData

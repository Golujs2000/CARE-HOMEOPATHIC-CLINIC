// Seed data for Care Homeopathic Clinic — initial Firestore population
// Run seedFirestore() in browser console after importing

import { db } from '../firebase/config'
import { collection, addDoc, getDocs, deleteDoc, serverTimestamp } from 'firebase/firestore'

export const seedDoctors = [
  {
    name: 'Dr. Rajesh Kumar Ranjan',
    specialty: 'Homoeopathic Consultant (होम्योपैथिक सलाहकार)',
    qualification: 'B.H.M.S., P.G.D.C.P. (R.U.)',
    experience: 10,
    bio: 'Dr. Rajesh Kumar Ranjan (B.H.M.S., P.G.D.C.P.) is the founder and chief physician at Care Homeopathic Clinic, Radha Krishna Vatika, Panchwati Chowk, Ward No. 15, Saharsa. A highly experienced Homoeopathic Consultant, he has successfully treated thousands of patients across Bihar. Regd. No. 28291.',
    image: '',
    email: 'carehomeopathicclinic@gmail.com',
    phone: '8757864776',
    consultationFee: 200,
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    availableTime: '9:00 AM – 8:00 PM',
    specializations: ['Homeopathy', 'Skin Diseases', 'Women\'s Health', 'Kidney Stone', 'Migraine', 'Piles', 'Thyroid'],
    hindiTitle: 'Homoeopathic Consultant (होम्योपैथिक सलाहकार)',
    rating: 4.9,
    reviewCount: 200,
    featured: true,
  },
]

import { allSpecialities } from './seed/index.js'

export const seedSpecialities = allSpecialities

export const seedBlogs = [
  {
    title: 'Homeopathy for Skin Diseases: Eczema, Psoriasis & Vitiligo',
    slug: 'homeopathy-skin-diseases',
    excerpt: 'Dr. Rajesh Kumar Ranjan explains how constitutional homeopathy provides lasting relief for chronic skin conditions without steroids or harsh chemicals.',
    content: `<h2>Why Skin Diseases Need Constitutional Treatment</h2><p>Chronic skin diseases like eczema, psoriasis, and vitiligo are not just skin-deep. They reflect a deeper constitutional imbalance involving immunity, hormones, and emotions. That is why local creams only suppress symptoms temporarily — the skin erupts again once treatment stops.</p><h2>How Homeopathy Is Different</h2><p>Homeopathy treats the person, not just the rash. At Care Homeopathic Clinic, Dr. Rajesh Kumar Ranjan takes a detailed case history covering the skin condition, triggers, emotional state, dietary habits, and family history to select the most appropriate constitutional remedy.</p><h2>Common Conditions We Treat</h2><ul><li><strong>Eczema (Atopic Dermatitis)</strong> – itching, weeping eruptions, especially in children</li><li><strong>Psoriasis</strong> – thick silvery-white scaly plaques on elbows, knees, scalp</li><li><strong>Vitiligo (White Patches)</strong> – de-pigmented patches with autoimmune involvement</li><li><strong>Acne</strong> – hormonal and stress-related pimples, especially in teenagers</li><li><strong>Urticaria</strong> – allergic hives with intense itching</li><li><strong>Fungal infections (Ringworm / Daad)</strong> – recurrent fungal patches</li></ul><h2>What to Expect</h2><p>Homeopathic treatment for chronic skin conditions takes time — typically 3 to 6 months. However, patients notice reduced itching and new lesions within the first 4–6 weeks. Long-term treatment addresses the susceptibility and prevents recurrence.</p><p>Book a consultation at Care Homeopathic Clinic, Radha Krishna Vatika, Panchwati Chowk, Ward No. 15, Saharsa. Call: <strong>8757864776 / 9523034934</strong>.</p>`,
    author: 'Dr. Rajesh Kumar Ranjan',
    category: 'Skin Diseases',
    image: '',
    tags: ['homeopathy', 'skin diseases', 'eczema', 'psoriasis', 'vitiligo', 'Saharsa'],
    published: true,
    views: 0,
  },
  {
    title: 'PCOS & Menstrual Disorders: A Homeopathic Perspective',
    slug: 'pcos-menstrual-disorders-homeopathy',
    excerpt: 'Millions of women suffer from PCOS and irregular periods. Dr. Rajesh Kumar Ranjan shares how homeopathy offers a hormone-free, natural solution.',
    content: `<h2>The Growing Problem of PCOS</h2><p>Polycystic Ovarian Syndrome (PCOS) affects 1 in 5 women in India. It causes irregular periods, weight gain, acne, facial hair, and fertility difficulties — all driven by hormonal imbalance.</p><h2>Conventional vs. Homeopathic Approach</h2><p>Conventional medicine often treats PCOS with hormonal pills, metformin, or fertility drugs — which manage symptoms but do not address the root cause. When medication stops, symptoms return. Homeopathy works by correcting the underlying endocrine imbalance naturally.</p><h2>How We Treat PCOS at Care Homeopathic Clinic</h2><ul><li>Detailed menstrual history and hormonal profile review</li><li>Constitutional remedy to regulate the pituitary-ovarian axis</li><li>Dietary advice to address insulin resistance</li><li>Follow-up with repeat ultrasound to track cyst resolution</li></ul><h2>Women's Conditions We Treat</h2><ul><li>PCOS / PCOD</li><li>Irregular or painful periods</li><li>Leucorrhoea (white discharge)</li><li>Uterine fibroids and ovarian cysts</li><li>Menopause symptoms</li><li>Endometriosis (supportive)</li></ul><h2>Book a Consultation</h2><p>Dr. Rajesh Kumar Ranjan (B.H.M.S., P.G.D.C.P.) at Care Homeopathic Clinic, Radha Krishna Vatika, Panchwati Chowk, Ward No. 15, Saharsa. Call: <strong>8757864776 / 9523034934</strong>.</p>`,
    author: 'Dr. Rajesh Kumar Ranjan',
    category: 'Women\'s Health',
    image: '',
    tags: ['PCOS', 'menstrual disorders', 'women health', 'homeopathy', 'Saharsa'],
    published: true,
    views: 0,
  },
  {
    title: 'Kidney Stones: Can Homeopathy Dissolve Them Without Surgery?',
    slug: 'kidney-stones-homeopathy',
    excerpt: 'Kidney stones are one of the most painful conditions. Discover how homeopathic medicines like Berberis Vulgaris help dissolve stones and prevent recurrence.',
    content: `<h2>Understanding Kidney Stones</h2><p>Kidney stones (urolithiasis or पथरी) form when minerals in urine crystallise. The most common types are calcium oxalate and uric acid stones. They cause severe flank pain (renal colic), blood in urine, and frequent infections.</p><h2>How Homeopathy Helps</h2><p>Homeopathy addresses kidney stones in two ways: (1) acute management — relieving colic pain and facilitating stone passage, and (2) constitutional treatment — correcting the metabolic tendency that causes stones to form repeatedly.</p><h2>Key Homeopathic Medicines for Kidney Stones</h2><ul><li><strong>Berberis Vulgaris</strong> – left-sided renal colic with shooting pain</li><li><strong>Lycopodium</strong> – right-sided stones with red sandy urine</li><li><strong>Ocimum Canum</strong> – right-sided colic with nausea and vomiting</li><li><strong>Sarsaparilla</strong> – pain at end of urination; sand in urine</li><li><strong>Cantharis</strong> – burning pain with haematuria</li></ul><h2>What Size Stones Can Homeopathy Treat?</h2><p>Stones up to 8–10 mm have a good chance of passing with homeopathic treatment and adequate hydration. Larger stones may need lithotripsy or urological intervention, but homeopathy helps prevent new stone formation.</p><h2>Visit Us</h2><p>Care Homeopathic Clinic, Radha Krishna Vatika, Panchwati Chowk, Ward No. 15, Saharsa. Ultrasound and pathology available on-site. Call: <strong>8757864776</strong>.</p>`,
    author: 'Dr. Rajesh Kumar Ranjan',
    category: 'Kidney & Urinary',
    image: '',
    tags: ['kidney stones', 'homeopathy', 'Berberis Vulgaris', 'renal colic', 'Saharsa'],
    published: true,
    views: 0,
  },
]

export const seedHospitalServices = [
  {
    name: 'OPD Consultation (ओपीडी परामर्श)',
    icon: '🩺',
    category: 'Consultation',
    available: 'OPD Hours',
    description: 'Individual homeopathic consultation with Dr. Rajesh Kumar Ranjan. Detailed case taking, remedy selection, and prescription for acute and chronic conditions.',
    relatedSpecialties: ['General Homeopathy', 'Skin Diseases', 'Women\'s Health'],
    order: 1,
  },
  {
    name: 'Online Consultation (ऑनलाइन परामर्श)',
    icon: '📱',
    category: 'Consultation',
    available: '24 Hours',
    description: 'Consult with our experts from the comfort of your home via video or phone call. Medicine home delivery available.',
    relatedSpecialties: [],
    order: 2,
  },
  {
    name: 'Medicine Counter (दवा काउंटर)',
    icon: '💊',
    category: 'Pharmacy',
    available: 'OPD Hours',
    description: 'Homeopathic medicine dispensary providing freshly prepared remedies in various potencies and dosage forms — pills, liquids, and external applications.',
    relatedSpecialties: [],
    order: 3,
  },
]

export const seedGallery = [
  { title: 'Care Homeopathic Clinic', category: 'facility', image: '/gallery/clinic-1.jpg', description: 'Care Homeopathic Clinic, Radha Krishna Vatika, Panchwati Chowk, Ward No. 15, Saharsa' },
  { title: 'Clinic Entrance', category: 'facility', image: '/gallery/clinic-2.jpg', description: 'Welcoming clinic environment' },
  { title: 'Consultation Room', category: 'facility', image: '/gallery/clinic-3.jpg', description: 'Private consultation room for detailed case taking' },
  { title: 'Medicine Counter', category: 'facility', image: '/gallery/clinic-4.jpg', description: 'In-house medicine dispensary' },
]

// Clear a collection and re-seed it
async function clearAndSeed(colName, items) {
  const snap = await getDocs(collection(db, colName))
  await Promise.all(snap.docs.map((d) => deleteDoc(d.ref)))
  for (const item of items) {
    await addDoc(collection(db, colName), { ...item, createdAt: serverTimestamp() })
  }
}

export async function seedSpecialitiesAndServices() {
  console.log('Seeding specialities...')
  await clearAndSeed('specialities', seedSpecialities)
  console.log('Seeding hospitalServices...')
  await clearAndSeed('hospitalServices', seedHospitalServices)
  console.log('✅ Specialities & Services seeded!')
}

export async function seedFirestore() {
  try {
    console.log('Seeding doctors...')
    for (const doc of seedDoctors) {
      await addDoc(collection(db, 'doctors'), { ...doc, createdAt: serverTimestamp() })
    }

    console.log('Seeding blogs...')
    for (const doc of seedBlogs) {
      await addDoc(collection(db, 'blogs'), { ...doc, createdAt: serverTimestamp() })
    }

    console.log('Seeding gallery...')
    for (const doc of seedGallery) {
      await addDoc(collection(db, 'gallery'), { ...doc, createdAt: serverTimestamp() })
    }

    console.log('✅ Seeding complete!')
  } catch (err) {
    console.error('Seeding error:', err)
  }
}

import { motion } from 'framer-motion'
import {
  FiShield, FiDroplet, FiUsers, FiAward, FiHeart, FiActivity,
} from 'react-icons/fi'

const reasons = [
  {
    icon: FiDroplet,
    title: 'Pure Homeopathic Treatment',
    desc: 'Authentic constitutional homeopathy — no steroids, no antibiotics, no harmful side effects. Gentle medicines that heal from within.',
  },
  {
    icon: FiUsers,
    title: 'Expert Physician',
    desc: 'Dr. Rajesh Kumar Ranjan (B.H.M.S., P.G.D.C.P.) — Homoeopathic Consultant with 25+ years experience.',
    color: 'text-primary-600 bg-primary-50 border-primary-100',
  },
  {
    icon: FiShield,
    title: 'Zero Side Effects',
    desc: 'Safe for all ages — infants, children, pregnant women, and the elderly. No toxicity, no dependency.',
    color: 'text-green-600 bg-green-50 border-green-100',
  },
  {
    icon: FiAward,
    title: 'Trusted Since 2001',
    desc: 'Thousands of patients across Saharsa & Bihar have found lasting relief at Care Homeopathic Clinic.',
    color: 'text-amber-600 bg-amber-50 border-amber-100',
  },
  {
    icon: FiActivity,
    title: 'Online & Offline Mode',
    desc: 'Flexible consultation options — visit us at the clinic or consult from home via video/phone call.',
    color: 'text-purple-600 bg-purple-50 border-purple-100',
  },
  {
    icon: FiHeart,
    title: 'Holistic Patient Care',
    desc: 'We treat the whole person — mind, body, and spirit. Personalised remedy with compassionate follow-up.',
    color: 'text-rose-600 bg-rose-50 border-rose-100',
  },
]

export default function WhyChooseUs() {

  return (
    <section className="section-padding bg-[#f5f2eb] relative overflow-hidden">
      {/* Subtle dot pattern background */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-wcu" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#075d26" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-wcu)" />
        </svg>
      </div>

      <div className="container-max relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary-600 font-semibold text-sm tracking-widest uppercase">Why Care Homeopathic Clinic</span>
          <h2 className="section-title mt-3">
            Healthcare You Can{' '}
            <span className="text-primary-600">Trust</span>
          </h2>
          <p className="section-subtitle mx-auto">
            We combine advanced medical technology with genuine compassion — because you deserve nothing less.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, desc, color }, i) => {
            if (i === 0) {
              return (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0 }}
                  className="lg:col-span-2 bg-navy-800 rounded-2xl p-8 flex flex-col justify-between min-h-[220px] relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-[60px] pointer-events-none" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-primary-300" />
                    </div>
                    <h3 className="font-heading font-bold text-white text-xl mb-2">{title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed max-w-lg">{desc}</p>
                  </div>
                  <div className="relative z-10 flex flex-wrap gap-2 mt-6">
                    <span className="text-xs font-semibold bg-primary-500/20 text-primary-300 border border-primary-500/30 px-3 py-1 rounded-full">200+ Conditions</span>
                    <span className="text-xs font-semibold bg-primary-500/20 text-primary-300 border border-primary-500/30 px-3 py-1 rounded-full">No Side Effects</span>
                    <span className="text-xs font-semibold bg-primary-500/20 text-primary-300 border border-primary-500/30 px-3 py-1 rounded-full">All Ages</span>
                  </div>
                </motion.div>
              )
            }

            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 group"
              >
                <div className={`w-11 h-11 rounded-xl ${color} border flex items-center justify-center mb-4`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-navy-800 text-base mb-2 group-hover:text-primary-700 transition-colors">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a href="/about" className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm hover:gap-3 transition-all">
            Learn more about us <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

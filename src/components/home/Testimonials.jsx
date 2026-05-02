// ─────────────────────────────────────────────────────────────
// components/home/Testimonials.jsx
// Patient testimonial carousel — white background.
// ─────────────────────────────────────────────────────────────

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const testimonials = [
  {
    name: 'Sunita Devi',
    location: 'Saharsa, Bihar',
    dept: 'Skin Diseases',
    rating: 5,
    date: 'March 2026',
    text: 'I had psoriasis for 7 years and tried everything — creams, steroids, nothing worked permanently. After 4 months of treatment with Dr. Rajesh Kumar Ranjan at Care Homeopathic Clinic, my skin is almost completely clear. No side effects, no stress. Truly grateful.',
    initials: 'SD',
    verified: true,
  },
  {
    name: 'Ravi Shankar',
    location: 'Saharsa, Bihar',
    dept: 'Kidney Stone',
    rating: 5,
    date: 'February 2026',
    text: 'My 8mm kidney stone passed naturally with homeopathic treatment in just 10 weeks! I was about to opt for surgery. Dr. Ranjan\'s medicines and the hydration protocol worked amazingly. The ultrasound confirmed the stone is gone. Highly recommend this clinic.',
    initials: 'RS',
    verified: true,
  },
  {
    name: 'Priya Kumari',
    location: 'Madhepura, Bihar',
    dept: 'Women\'s Health (PCOS)',
    rating: 5,
    date: 'January 2026',
    text: 'I had irregular periods and PCOS for 3 years. After 5 months of constitutional homeopathic treatment, my cycles are regular and my ultrasound shows the cysts have reduced. Dr. Rajesh Kumar Ranjan is very thorough and his medicines have no side effects. Best clinic in Saharsa.',
    initials: 'PK',
    verified: true,
  },
  {
    name: 'Amit Kumar Sah',
    location: 'Saharsa, Bihar',
    dept: 'Migraine',
    rating: 5,
    date: 'December 2025',
    text: 'Best experience and amazing treatment. My migraine attacks which used to come 3–4 times a week have reduced to once a month after 3 months of treatment. The staff is very friendly and Dr. Ranjan takes time to understand every detail before prescribing.',
    initials: 'AK',
    verified: true,
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1))
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1))

  return (
    <section className="relative section-padding overflow-hidden bg-white">

      {/* Faint quote mark decoration */}
      <div className="absolute top-8 right-8 md:right-20 text-[14rem] font-serif text-gray-900/[0.03] leading-none select-none pointer-events-none">"</div>

      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-amber-50 border border-amber-200 text-amber-600 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Patient Stories
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-black text-navy-800 mt-2 leading-tight">
            What Our Patients{' '}
            <span className="text-amber-500">Say</span>
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
            Real stories from real patients who trusted us with their health.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative bg-gray-50 border border-gray-200 rounded-3xl p-8 md:p-12 overflow-hidden">
            {/* Accent corner */}
            <div className="absolute top-0 left-0 w-1.5 h-full rounded-l-3xl bg-gradient-to-b from-amber-400 via-primary-400 to-accent-400" />

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[active].rating)].map((_, i) => (
                    <FiStar key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                <p className="text-gray-700 text-lg leading-relaxed italic mb-8">
                  "{testimonials[active].text}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="font-heading font-bold text-white text-lg">{testimonials[active].initials}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="font-heading font-bold text-navy-800">{testimonials[active].name}</p>
                      {testimonials[active].verified && (
                        <span className="inline-flex items-center gap-1 text-xs bg-green-50 border border-green-200 text-green-600 px-2 py-0.5 rounded-full font-medium">
                          <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                          Verified
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-400 mt-0.5">{testimonials[active].location} · {testimonials[active].date}</p>
                    <span className="text-xs bg-primary-50 text-primary-600 px-2 py-0.5 rounded-full font-medium mt-1.5 inline-block border border-primary-200">
                      {testimonials[active].dept}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="w-11 h-11 bg-gray-100 border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
              <FiChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === active ? 'w-8 bg-amber-400' : 'w-2 bg-gray-300 hover:bg-gray-400'}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-11 h-11 bg-gray-100 border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
              <FiChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

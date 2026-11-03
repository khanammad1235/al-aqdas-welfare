import PageHeader from '../components/PageHeader'
import GoogleMap from '../components/GoogleMap'
import { Building, Globe, Mail, Phone, Clock, MessageCircle, Facebook, Instagram, Youtube, Send } from 'lucide-react'
import { useState } from 'react'

const contactDetails = [
  {
    icon: Building,
    label: 'Head Office',
    content: '1, Lidhar Shah Rd, Dana Bandar, Mandvi, Mumbai, Maharashtra 400009',
    link: 'https://maps.google.com/?q=1+Lidhar+Shah+Rd+Mandvi+Mumbai',
    linkLabel: 'View on Map',
  },
  {
    icon: Phone,
    label: 'Call Us',
    content: '+91 97027 94786\n022 2374 9786',
    link: 'tel:+919702794786',
    linkLabel: 'Call Now',
  },
  {
    icon: Mail,
    label: 'Email Us',
    content: 'alaqdaswelfare@gmail.com',
    link: 'mailto:alaqdaswelfare@gmail.com',
    linkLabel: 'Send Email',
  },
  {
    icon: Clock,
    label: 'Office Hours',
    content: 'Monday – Saturday\n10:00 AM – 6:00 PM',
  },
  {
    icon: Globe,
    label: 'Website',
    content: 'www.awamiwelfare.co.in',
    link: 'https://www.awamiwelfare.co.in',
    linkLabel: 'Visit Website',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Compose mailto link
    const mailtoUrl = `mailto:alaqdaswelfare@gmail.com?subject=${encodeURIComponent(form.subject || 'Contact Form Inquiry')}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`
    )}`
    window.location.href = mailtoUrl
    setSubmitted(true)
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <PageHeader
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out for donations, volunteering, or general enquiries."
        bgImage="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&h=300&fit=crop"
      />

      <section className="max-w-[1170px] mx-auto px-4 mt-14">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Left: Contact Details */}
          <div className="w-full lg:w-[40%] space-y-6">
            {/* Info card */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="bg-primary px-6 py-5">
                <h2 className="text-white font-bold text-lg font-serif">Al Aqdas Welfare</h2>
                <p className="text-white/60 text-xs mt-0.5">Mumbai, Maharashtra · Since 2015</p>
              </div>
              <div className="p-6 space-y-5">
                {contactDetails.map(({ icon: Icon, label, content, link, linkLabel }) => (
                  <div key={label} className="flex gap-4 group">
                    <div className="w-11 h-11 rounded-xl bg-slate-50 group-hover:bg-emerald-50 border border-slate-100 flex items-center justify-center shrink-0 transition-colors">
                      <Icon className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">{label}</p>
                      <p className="text-sm text-slate-700 font-medium whitespace-pre-line leading-relaxed">{content}</p>
                      {link && linkLabel && (
                        <a href={link} target="_blank" rel="noopener noreferrer"
                          className="text-xs text-emerald-600 font-semibold hover:text-emerald-700 transition-colors mt-1.5 inline-block hover:underline">
                          {linkLabel} →
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social connect */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <h3 className="font-bold text-slate-800 text-sm mb-4">Connect on Social Media</h3>
              <div className="grid grid-cols-2 gap-2.5">
                <a href="https://www.facebook.com/share/1Csm1nxUNh/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 bg-blue-50 border border-blue-100 hover:bg-blue-100 rounded-xl transition-colors group">
                  <Facebook className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span className="text-sm font-semibold text-blue-700 truncate">Facebook</span>
                </a>
                <a href="https://www.instagram.com/alaqdaswelfare?igsh=MXBrdjNwNGhraDJvbQ==" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 bg-pink-50 border border-pink-100 hover:bg-pink-100 rounded-xl transition-colors">
                  <Instagram className="w-4 h-4 text-pink-600 flex-shrink-0" />
                  <span className="text-sm font-semibold text-pink-700 truncate">Instagram</span>
                </a>
                <a href="https://www.youtube.com/@aqdaswelfare2043" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 bg-red-50 border border-red-100 hover:bg-red-100 rounded-xl transition-colors">
                  <Youtube className="w-4 h-4 text-red-600 flex-shrink-0" />
                  <span className="text-sm font-semibold text-red-700 truncate">YouTube</span>
                </a>
                <a href="https://wa.me/919702794786" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 bg-green-50 border border-green-100 hover:bg-green-100 rounded-xl transition-colors">
                  <MessageCircle className="w-4 h-4 text-green-600 fill-current flex-shrink-0" />
                  <span className="text-sm font-semibold text-green-700 truncate">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Map + Contact Form */}
          <div className="w-full lg:w-[60%] space-y-6">
            {/* Google Map */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden h-64 md:h-72">
              <GoogleMap />
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-secondary px-6 py-5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center">
                  <Send className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base leading-none">Send Us a Message</h3>
                  <p className="text-white/60 text-xs mt-0.5">We reply within 24 hours</p>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">Subject *</label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="Donation Inquiry">Donation Inquiry</option>
                      <option value="Volunteering">Volunteering</option>
                      <option value="Partnership">Partnership</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Media / Press">Media / Press</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-secondary text-white font-bold py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 text-sm"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
                {submitted && (
                  <p className="text-center text-sm text-emerald-600 font-medium">
                    ✓ Your email client has been opened. We'll reply within 24 hours!
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

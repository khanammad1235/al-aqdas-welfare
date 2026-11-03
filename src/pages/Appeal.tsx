import PageHeader from '../components/PageHeader'
import { Link } from 'react-router-dom'
import {
  Heart, Send, Quote, Shield, Star, Users, BookOpen, ArrowRight,
  Sparkles, CheckCircle2, GraduationCap
} from 'lucide-react'

const donationTypes = [
  { label: 'Zakat', desc: 'Obligatory annual charity — fulfil your Islamic duty through us', icon: Star, color: 'bg-amber-50 border-amber-200 text-amber-700' },
  { label: 'Sadaqat', desc: 'Voluntary charity given at any time for the sake of Allah', icon: Heart, color: 'bg-rose-50 border-rose-200 text-rose-700' },
  { label: 'Fitra', desc: 'Charity given at the end of Ramadan on behalf of every family member', icon: Sparkles, color: 'bg-emerald-50 border-emerald-200 text-emerald-700' },
  { label: 'General Donation', desc: 'Support our schools, healthcare camps, and food aid programs', icon: Users, color: 'bg-blue-50 border-blue-200 text-blue-700' },
]

const impactPoints = [
  'Free education for 500+ underprivileged children annually',
  'Monthly medical camps reaching 1,200+ patients',
  'Ration kits for 5,000+ families every year',
  'Computer literacy training for 200+ youth',
  'Orphan sponsorship for 300+ children',
  'Disaster relief: rapid emergency response teams',
]

export default function Appeal() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader
        title="Our Appeal"
        subtitle="Your generosity is the foundation of everything we do. Join us in making a difference."
        bgImage="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1200&h=300&fit=crop"
      />

      <section className="max-w-[1170px] mx-auto px-4 py-14 space-y-10">

        {/* Quranic verse highlight */}
        <div className="bg-primary rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <Quote className="w-10 h-10 text-accent/40 mx-auto mb-5" />
            <blockquote className="text-lg md:text-xl font-serif italic leading-relaxed text-white/90 mb-4">
              "The parable of those who spend their wealth in the way of Allah is that of a grain of corn: it grows seven ears, and each ear has a hundred grains. Allah gives manifold increase to whom He pleases."
            </blockquote>
            <cite className="text-accent font-bold text-sm not-italic">— Al-Qur'an (2:261)</cite>
          </div>
        </div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Official Appeal Card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-all flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-secondary text-white p-6">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-lg font-bold font-serif">Official Appeal</h3>
              </div>
              <p className="text-white/60 text-xs mt-1">Al Aqdas Welfare Association</p>
            </div>

            <div className="p-7 flex-1 space-y-4 text-sm text-slate-600 leading-relaxed">
              <p className="font-bold text-slate-800">Dear Brothers and Sisters,</p>
              <p className="font-bold text-slate-800">Assalamu Alaikum Wa Rahmatullahi Wa Barkatuhu,</p>
              <p>
                Towards this noble cause, our Patrons, Donors and Well-wishers are requested to donate generously and
                contribute towards Al Aqdas's educational and welfare programs which primarily cover students and
                families from the weaker sections of society.
              </p>
              <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 text-center">
                <p className="font-semibold text-slate-700 leading-relaxed">
                  To support these objectives, we appeal for your generous contribution to AL AQDAS in the form of
                  <span className="font-bold text-primary"> ZAKAT / SADAQAT / FITRA &amp; DONATION.</span>
                </p>
              </div>

              {/* Signatories */}
              <div className="pt-4 border-t border-slate-100 grid grid-cols-3 gap-3 text-center">
                {[
                  { name: 'V. R. SHARIFF', role: 'President' },
                  { name: 'F.M. Killedar', role: 'Hon. Treasurer' },
                  { name: 'Rubina J.', role: 'Hon. Gen. Sec.' },
                ].map(({ name, role }) => (
                  <div key={name} className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                    <p className="font-bold text-slate-800 text-xs leading-tight">{name}</p>
                    <p className="text-[10px] text-slate-500 font-medium mt-0.5">{role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="bg-slate-900 text-white text-center p-5">
              <p className="font-bold text-accent text-sm mb-1">AL AQDAS WELFARE ASSOCIATION</p>
              <p className="text-slate-400 text-xs mb-1">1, Lidhar Shah Rd, Mandvi, Mumbai 400009</p>
              <p className="text-slate-400 text-xs mb-3">Tel: +91 97027 94786 | 022 2374 9786</p>
              <div className="inline-flex items-center gap-1.5 bg-emerald-500/15 border border-emerald-500/25 text-emerald-300 px-3 py-1.5 rounded-full text-[11px] font-semibold">
                <Shield className="w-3 h-3" />
                Income Tax Rebate under Section 80-G
              </div>
            </div>
          </div>

          {/* Secretary's Message Card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-all flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-slate-100 flex items-center gap-4 bg-slate-50/60">
              <div className="w-14 h-14 bg-white rounded-full shadow-sm border border-slate-200 p-1.5 flex-shrink-0">
                <img src="/al-aqdas-logo.png" alt="Al Aqdas Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 font-serif">Secretary's Message</h3>
                <p className="text-xs text-emerald-600 font-semibold mt-0.5">Al Aqdas Welfare Association</p>
              </div>
            </div>

            <div className="p-7 flex-1 space-y-4 text-sm text-slate-600 leading-relaxed">
              <p className="font-bold text-slate-800">Assalamu Alaikum,</p>
              <p>
                AL AQDAS always prays for you and your families. As you are aware of our educational and social activities
                spanning over three decades, your continuous help and support has enabled us to provide high-quality
                education to less privileged students.
              </p>
              <p>
                We urge and appeal to you to please contribute your Zakat, Sadaqat, Fitra, Donation, and charity to
                AL AQDAS. This enables us to teach our students, thereby transforming their lives. It is only because
                of generous personalities like you that our community is moving forward on the educational and social front.
              </p>
              <p>
                I would also like to invite you to visit the AL AQDAS educational complex and see our activities first-hand.
              </p>
              <p className="font-medium text-slate-700">Anticipating a generous donation from you.</p>
              <p className="font-bold text-primary font-serif italic">Jazakallahu khairan katheera.</p>
            </div>

            <div className="p-6 border-t border-slate-100 flex items-center justify-between">
              <div>
                <p className="font-bold text-slate-800">Shoaib Jamkhanawala</p>
                <p className="text-sm text-emerald-600 font-medium">Jt. Secretary</p>
              </div>
              <div className="w-10 h-10 bg-primary/5 border border-primary/10 rounded-xl flex items-center justify-center">
                <Send className="w-4 h-4 text-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* Donation types */}
        <div>
          <div className="text-center mb-7">
            <span className="section-label mb-2 block">Ways to Contribute</span>
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-primary">Forms of Donation We Accept</h2>
            <div className="divider-center mt-3" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {donationTypes.map(({ label, desc, icon: Icon, color }) => (
              <div key={label} className={`bg-white rounded-2xl p-6 border shadow-sm hover:shadow-md transition-all hover:-translate-y-1 ${color.split(' ')[1]}`}>
                <div className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-4 ${color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">{label}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Impact + CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Impact list */}
          <div className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-slate-800 font-serif text-lg">Your Donation Enables</h3>
            </div>
            <ul className="space-y-3">
              {impactPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  </div>
                  <span className="font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA card */}
          <div className="bg-primary rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -mr-16 -mt-16 pointer-events-none" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-accent/20 border border-accent/30 flex items-center justify-center mb-5">
                <BookOpen className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold font-serif mb-3 leading-tight">
                Education is the dire<br />need of the hour
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Every contribution you make goes directly towards giving a child access to education,
                healthcare, and a better future. Be the change.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/donation"
                  className="flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-md hover:-translate-y-0.5 text-sm group"
                >
                  <Heart className="w-4 h-4 fill-current group-hover:scale-125 transition-transform" />
                  Donate Now
                </Link>
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold py-3.5 px-6 rounded-xl transition-all text-sm"
                >
                  Contact Us <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}

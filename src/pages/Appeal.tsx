import PageHeader from '../components/PageHeader'
import { Heart, Send } from 'lucide-react'

export default function Appeal() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader
        title="Our Appeal"
        bgImage="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1200&h=300&fit=crop"
      />

      <section className="max-w-[1170px] mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Main Appeal Card */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-all flex flex-col relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />
            
            <div className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white p-6 relative z-10">
              <div className="flex items-center gap-3">
                <Heart className="w-6 h-6 text-emerald-100" />
                <h3 className="text-xl font-bold tracking-wide">Official Appeal</h3>
              </div>
            </div>
            
            <div className="p-8 flex-1 relative z-10">
              <div className="prose prose-sm max-w-none text-slate-600 space-y-4">
                <p className="font-semibold text-slate-800">Dear Brothers and Sisters,</p>
                <p className="font-semibold text-slate-800">Assalamu Alaikum Wa Rahmatullahi Wa Barkatuhu,</p>
                <p className="leading-relaxed">
                  Towards this noble cause Patrons, Donors and Well-wishers are requested to donate generously and
                  contribute towards Al Aqdas's educational project which primarily covers students from the weaker section
                  of the society.
                </p>
                <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100 italic text-emerald-900 leading-relaxed text-center my-6">
                  "The parable of those who spend their substance in the way of Allah is that of a grain of corn it grows
                  seven ears and each ear has hundred grains. Allah gives many fold increase to whom he pleases".<br/>
                  <span className="font-semibold text-emerald-700 not-italic block mt-2">— Al-Qur'an</span>
                </div>
                <p className="leading-relaxed font-medium text-slate-700">
                  To support these objectives we appeal for your generous contribution to AL AQDAS in the form of
                  ZAKAT / SADAQAT / FITRA & DONATION.
                </p>
              </div>

              <div className="mt-10 pt-6 border-t border-slate-100 grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="font-bold text-slate-800 text-sm">V. R. SHARIFF</p>
                  <p className="text-xs text-slate-500 font-medium">President</p>
                </div>
                <div>
                  <p className="font-bold text-slate-800 text-sm">F.M. Killedar</p>
                  <p className="text-xs text-slate-500 font-medium">Hon. Treasurer</p>
                </div>
                <div>
                  <p className="font-bold text-slate-800 text-sm">Rubina J.</p>
                  <p className="text-xs text-slate-500 font-medium">Hon. Gen. Sec.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-900 text-white text-center p-6 text-sm">
              <p className="font-bold text-lg mb-2 text-emerald-400">AL AQDAS WELFARE ASSOCIATION</p>
              <p className="text-slate-400 mb-2">1, Lidhar Shah Rd, Dana Bandar, Mandvi, Mumbai, Maharashtra 400009</p>
              <p className="text-slate-400 mb-4">Tel: +91 97027 94786 | 022 2374 9786</p>
              <div className="inline-block bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 px-4 py-2 rounded-full text-xs font-semibold tracking-wide">
                Income Tax Rebate Admissible under Section 80-G
              </div>
            </div>
          </div>

          {/* Secretary Message Card */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-all flex flex-col">
            <div className="p-6 border-b border-slate-100 flex items-center gap-4 bg-slate-50/50">
              <div className="w-14 h-14 bg-white rounded-full p-1.5 shadow-sm border border-slate-200">
                <img
                  src="/al-aqdas-logo.png"
                  alt="Al Aqdas Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800">AL AQDAS WELFARE</h3>
                <p className="text-sm font-medium text-emerald-600">Secretary's Message</p>
              </div>
            </div>
            
            <div className="p-8 flex-1">
              <div className="prose prose-sm max-w-none text-slate-600 space-y-4">
                <p className="font-semibold text-slate-800">Assalamu Alaikum,</p>
                <p className="leading-relaxed">
                  AL AQDAS always prays to you and your families for this good cause. The future includes destitute students—small steps make big impacts.
                </p>
                <p className="leading-relaxed">
                  As you are aware of Al Aqdas Welfare Association's educational and social activities for the
                  past thirty-two years, with your continuous help and support, we have been rendering high-quality
                  education to less privileged students.
                </p>
                <p className="leading-relaxed">
                  We urge and appeal to you to please contribute your Zakat, Sadaqat, Fitra, Donation, and charity amount
                  to AL AQDAS. This enables us to teach our students, thereby transforming their lives into becoming
                  better human beings. It is only because of generous personalities like you that our community is moving
                  forward on the educational front. This means a lot to us.
                </p>
                <p className="leading-relaxed">
                  I would also like you to please take time out from your precious schedule to make a trip to the AL AQDAS
                  educational complex and take a first-hand look at our activities.
                </p>
                <p className="leading-relaxed font-medium">Anticipating a generous donation from you.</p>
                <p className="italic font-semibold text-emerald-700">Jazakallahu khairan katheera.</p>
              </div>
              
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <p className="font-bold text-slate-800">Shoaib Jamkhanawala</p>
                  <p className="text-sm text-emerald-600 font-medium">Jt. Secretary</p>
                </div>
                <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center">
                  <Send className="w-4 h-4 text-emerald-600" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 max-w-2xl mx-auto">
          <div className="inline-block bg-emerald-50 px-6 py-3 rounded-full">
            <p className="text-emerald-800 font-semibold tracking-wide">
              Education is the dire need of the hour; it is our primary focus of attention.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

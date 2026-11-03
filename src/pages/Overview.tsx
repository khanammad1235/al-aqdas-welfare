import PageHeader from '../components/PageHeader'
import ContactSidebar from '../components/ContactSidebar'
import { Users, Star, Target, Eye, Heart, Award, CheckCircle2, Building2, Calendar } from 'lucide-react'

const committeeMembers = [
  {
    sr: '01',
    name: 'Mr. Mohammed Saboo Siddiqe Siddi',
    designation: 'President',
    role: 'Founder & Visionary Leader',
    initials: 'MS',
    color: 'bg-emerald-600',
  },
  {
    sr: '02',
    name: 'Mr. Mohammed Hasham Shaikh (Raju Bhai)',
    designation: 'Secretary',
    role: 'Operations & Community Outreach',
    initials: 'MH',
    color: 'bg-blue-600',
  },
  {
    sr: '03',
    name: 'Mr. Mohammed Kashif Mohammed Saboo',
    designation: 'Treasurer',
    role: 'Finance & Accountability',
    initials: 'MK',
    color: 'bg-amber-600',
  },
  {
    sr: '04',
    name: 'Mr. Abrar Shaikhdare',
    designation: 'Member',
    role: 'Field Operations',
    initials: 'AS',
    color: 'bg-violet-600',
  },
  {
    sr: '05',
    name: 'Mrs. Sabina Tambe',
    designation: 'Member',
    role: 'Women & Child Welfare',
    initials: 'ST',
    color: 'bg-rose-600',
  },
  {
    sr: '06',
    name: 'Mrs. Kaneez Fatima M. S.',
    designation: 'Member',
    role: 'Education Programs',
    initials: 'KF',
    color: 'bg-teal-600',
  },
  {
    sr: '07',
    name: 'Mr. Zeeya Mohammed Hasham Shaikh',
    designation: 'Member',
    role: 'Youth & Volunteer Coordination',
    initials: 'ZM',
    color: 'bg-orange-600',
  },
]

const milestones = [
  { year: '2015', event: 'Al Aqdas Welfare Association Founded', icon: Building2 },
  { year: '2016', event: 'Launched Free Ration Distribution Program', icon: Heart },
  { year: '2018', event: 'First Free Medical Health Camp — 500+ Patients', icon: CheckCircle2 },
  { year: '2020', event: 'COVID-19 Relief — 10,000+ Meals Distributed', icon: Award },
  { year: '2022', event: 'Education Scholarship Program — 300+ Students', icon: Star },
  { year: '2024', event: '5,000+ Families Supported, 1,000+ Volunteers', icon: Users },
]

const pillars = [
  { icon: Eye, label: 'Our Vision', text: 'A society where every person has access to food, education, and healthcare regardless of their background or economic status.', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  { icon: Target, label: 'Our Mission', text: 'To serve the underprivileged through compassionate action, transparent governance, and sustainable community development programs.', color: 'bg-blue-50 text-blue-700 border-blue-200' },
  { icon: Heart, label: 'Our Values', text: 'Compassion, transparency, accountability, and inclusivity guide every decision and every rupee entrusted to us by our donors.', color: 'bg-rose-50 text-rose-700 border-rose-200' },
]

export default function Overview() {
  const leaders = committeeMembers.filter(m => ['President', 'Secretary', 'Treasurer'].includes(m.designation))
  const members = committeeMembers.filter(m => m.designation === 'Member')

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader
        title="Organization Overview"
        subtitle="Serving humanity since 2015 — transparent, accountable, and impactful."
        bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=300&fit=crop"
      />

      <section className="max-w-[1170px] mx-auto px-4 py-14">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Main Content */}
          <div className="w-full lg:w-[65%] space-y-10">

            {/* Vision / Mission / Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {pillars.map(({ icon: Icon, label, text, color }) => (
                <div key={label} className={`bg-white rounded-2xl p-6 border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1`}>
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 ${color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-800 mb-2 text-sm uppercase tracking-wider">{label}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>

            {/* About the Organization */}
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-5 pb-5 border-b border-slate-100">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-800 font-serif">About Al Aqdas Welfare</h2>
                  <p className="text-xs text-emerald-600 font-semibold mt-0.5">Registered NGO · Govt. of Maharashtra</p>
                </div>
              </div>
              <div className="prose prose-sm text-slate-600 max-w-none space-y-3">
                <p>Al Aqdas Welfare Association is a registered, non-profit charitable organization established in 2015 in Mumbai, Maharashtra. Our core purpose is to bridge the gap between those who have and those who need — delivering essential services with dignity, transparency, and compassion.</p>
                <p>Over the past decade, we have served thousands of families across Mumbai through our flagship programs in education, healthcare, food aid, orphan support, and disaster relief. Every program is run by a dedicated team of volunteers and professionals committed to maximizing impact.</p>
                <p>We operate with full financial transparency. Our accounts are audited annually and available for public review. Every rupee donated is tracked and reported to our donors.</p>
              </div>
            </div>

            {/* Leadership Team */}
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-6 pb-5 border-b border-slate-100">
                <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-800 font-serif">Executive Committee</h2>
                  <p className="text-xs text-emerald-600 font-semibold mt-0.5">Leadership for AY 2024–25</p>
                </div>
              </div>

              {/* Leaders */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {leaders.map((member) => (
                  <div
                    key={member.sr}
                    className="bg-slate-50 rounded-2xl p-5 border border-slate-100 text-center hover:border-slate-200 hover:shadow-sm transition-all"
                  >
                    <div className={`w-16 h-16 ${member.color} rounded-2xl flex items-center justify-center mx-auto mb-3 text-white font-bold text-xl font-serif shadow-sm`}>
                      {member.initials}
                    </div>
                    <p className="font-bold text-slate-800 text-sm leading-snug mb-1">{member.name}</p>
                    <span className={`inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full text-white ${member.color} mb-1`}>
                      {member.designation}
                    </span>
                    <p className="text-[11px] text-slate-400 font-medium">{member.role}</p>
                  </div>
                ))}
              </div>

              {/* Members */}
              <div className="space-y-2.5">
                <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3">Committee Members</h3>
                {members.map((member) => (
                  <div
                    key={member.sr}
                    className="flex items-center gap-4 p-3.5 rounded-xl border border-slate-100 bg-white hover:border-slate-200 hover:bg-slate-50 transition-all"
                  >
                    <div className={`w-9 h-9 rounded-xl ${member.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                      {member.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm text-slate-800 truncate">{member.name}</p>
                      <p className="text-[11px] text-slate-400">{member.role}</p>
                    </div>
                    <span className="text-[10px] px-2.5 py-1 rounded-full font-bold bg-slate-100 text-slate-600 flex-shrink-0">
                      {member.designation}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline / Milestones */}
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-6 pb-5 border-b border-slate-100">
                <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-slate-800 font-serif">Our Journey</h2>
              </div>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 to-slate-100" />
                <div className="space-y-6">
                  {milestones.map(({ year, event, icon: Icon }) => (
                    <div key={year} className="flex items-start gap-6 relative">
                      <div className="relative flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-white border-2 border-emerald-500 flex items-center justify-center z-10 shadow-sm">
                          <Icon className="w-5 h-5 text-emerald-600" />
                        </div>
                      </div>
                      <div className="flex-1 pt-1 pb-2">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold bg-primary text-white px-2.5 py-0.5 rounded-full">{year}</span>
                        </div>
                        <p className="text-sm font-medium text-slate-700">{event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <ContactSidebar />
        </div>
      </section>
    </div>
  )
}

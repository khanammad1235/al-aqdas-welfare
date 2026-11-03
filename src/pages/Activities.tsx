import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import ContactSidebar from '../components/ContactSidebar'
import {
  CheckCircle2, GraduationCap, BookOpen, Monitor, HeartPulse,
  UtensilsCrossed, ShieldAlert, Users, ArrowRight, Building2,
  MapPin, Clock, Award, ShieldCheck, Heart
} from 'lucide-react'
import { Link } from 'react-router-dom'
import SaaSDonationModal from '../components/SaaSDonationModal'

const programs = [
  {
    id: 'edu-schools',
    icon: BookOpen,
    category: 'education',
    title: 'Education & Schools Network',
    color: 'bg-emerald-600',
    lightColor: 'bg-emerald-50',
    textColor: 'text-emerald-700',
    borderColor: 'border-emerald-200',
    stats: '500+ Active Students',
    desc: 'Administering English & Urdu medium institutions and a Junior College of Arts & Commerce for underprivileged youth across Mumbai.',
    locations: 'Bandra West & Mandvi',
    details: [
      'A.R. Siddique English High School (Class I–X)',
      'Al Aqdas Urdu High School (Class VIII–X)',
      'Al Aqdas Junior College (Arts & Commerce streams)',
      '100% textbook, uniform, and exam fee subsidies for impoverished orphans',
    ],
  },
  {
    id: 'it-centre',
    icon: Monitor,
    category: 'vocational',
    title: 'IT & Digital Literacy Centre',
    color: 'bg-blue-600',
    lightColor: 'bg-blue-50',
    textColor: 'text-blue-700',
    borderColor: 'border-blue-200',
    stats: '200+ Certified Annually',
    desc: 'Empowering first-generation slum learners with vocational digital competencies to break the cycle of poverty and secure dignified employment.',
    locations: 'Bandra Computer Lab',
    details: [
      'Comprehensive MS Office, Data Entry & Typing certifications',
      'Python programming & basic web literacy for adolescents',
      'Specialized afternoon batches for female homemakers & young girls',
      'Job placement assistance and interview preparation',
    ],
  },
  {
    id: 'medical-camps',
    icon: HeartPulse,
    category: 'healthcare',
    title: 'Free Healthcare & Specialist Camps',
    color: 'bg-rose-600',
    lightColor: 'bg-rose-50',
    textColor: 'text-rose-700',
    borderColor: 'border-rose-200',
    stats: '1,200+ Treated Yearly',
    desc: 'Deploying qualified physicians, cardiologists, and pediatricians directly into marginalized slums with full diagnostic screening.',
    locations: 'Monthly Rotation across Slum Pockets',
    details: [
      'Random Blood Sugar (RBS) and hypertension triage for elderly',
      'Free 30-day prescription drug dispensing for chronic illnesses',
      'Pediatric malnutrition screening & vitamin supplementation',
      'Free eye examinations and cataract referral assistance',
    ],
  },
  {
    id: 'food-ration',
    icon: UtensilsCrossed,
    category: 'nutrition',
    title: 'Food Aid & Community Kitchen',
    color: 'bg-amber-600',
    lightColor: 'bg-amber-50',
    textColor: 'text-amber-700',
    borderColor: 'border-amber-200',
    stats: '20,000+ Meals Delivered',
    desc: 'Coordinating daily warm meals and month-long dry ration survival kits for daily wage laborers, widows, and distressed families.',
    locations: 'Mandvi & Dongri Depots',
    details: [
      'Daily hot meal community kitchen serving 350+ persons',
      'Comprehensive 25kg dry ration kits distributed before major crises',
      'Annual Ramadan food drive supporting 1,200+ destitute families',
      'Emergency cooked food parcels during monsoon inundations',
    ],
  },
  {
    id: 'orphan-welfare',
    icon: Users,
    category: 'welfare',
    title: 'Orphan Sponsorship & Child Care',
    color: 'bg-violet-600',
    lightColor: 'bg-violet-50',
    textColor: 'text-violet-700',
    borderColor: 'border-violet-200',
    stats: '300+ Orphans Mentored',
    desc: 'Holistic child development combining educational scholarships, emotional mentorship, medical checkups, and annual festive celebrations.',
    locations: 'Greater Mumbai Area',
    details: [
      'Full academic fee coverage from pre-primary through junior college',
      'Quarterly counseling and behavioral development workshops',
      'Festival clothing, gifts, and nutritional hampers distribution',
      'Dedicated legal advocacy and birth certification support',
    ],
  },
  {
    id: 'disaster-response',
    icon: ShieldAlert,
    category: 'emergency',
    title: 'Disaster Relief & Emergency Taskforce',
    color: 'bg-orange-600',
    lightColor: 'bg-orange-50',
    textColor: 'text-orange-700',
    borderColor: 'border-orange-200',
    stats: 'Rapid Field Response',
    desc: 'Mobilizing ground force volunteers, dry provisions, potable water, and emergency rescue aid during floods and civil disruptions.',
    locations: 'Mumbai & Konkan Region',
    details: [
      'Rapid deployment team equipped with emergency vehicles',
      'Potable water filtration tablets and chlorine distribution',
      'Tarpaulins and temporary dry bedding for displaced families',
      'Post-crisis rehabilitation grants for damaged artisan stalls',
    ],
  },
]

const schoolAdoptionList = [
  'Bazaar Road Municipal Urdu School No. 1 (Bandra West)',
  'Bazaar Road Municipal Urdu School No. 2 (Bandra West)',
  'Bunderwadi Municipal Urdu School',
  'Civic Infrastructure & Sanitation Maintenance Initiative',
]

export default function Activities() {
  const [selectedFilter, setSelectedFilter] = useState<string>('all')
  const [donationModalOpen, setDonationModalOpen] = useState(false)

  const filteredPrograms =
    selectedFilter === 'all' ? programs : programs.filter((p) => p.category === selectedFilter)

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader
        title="Field Operations & Programs Hub"
        subtitle="Direct institutional execution across education, healthcare, nutrition, and emergency logistics."
        bgImage="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1200&h=300&fit=crop"
      />

      {/* Operational Stats Telemetry Strip */}
      <div className="bg-white border-b border-slate-200 py-4 shadow-2xs">
        <div className="max-w-[1240px] mx-auto px-4 flex flex-wrap items-center justify-around gap-4 text-center">
          <div>
            <p className="text-xl sm:text-2xl font-bold font-mono text-emerald-700">500+ Students</p>
            <p className="text-[11px] text-slate-500 font-semibold">Educated Annually</p>
          </div>
          <div className="h-8 w-px bg-slate-200 hidden sm:block" />
          <div>
            <p className="text-xl sm:text-2xl font-bold font-mono text-rose-600">1,200+ Patients</p>
            <p className="text-[11px] text-slate-500 font-semibold">Free Medical Care</p>
          </div>
          <div className="h-8 w-px bg-slate-200 hidden sm:block" />
          <div>
            <p className="text-xl sm:text-2xl font-bold font-mono text-amber-600">20,000+ Meals</p>
            <p className="text-[11px] text-slate-500 font-semibold">Community Kitchen</p>
          </div>
          <div className="h-8 w-px bg-slate-200 hidden sm:block" />
          <div>
            <p className="text-xl sm:text-2xl font-bold font-mono text-blue-600">4 Schools & Labs</p>
            <p className="text-[11px] text-slate-500 font-semibold">Owned & Administered</p>
          </div>
        </div>
      </div>

      <section className="max-w-[1240px] mx-auto px-4 py-12 sm:py-16">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Main Operations Directory (8 cols) */}
          <div className="w-full lg:w-[68%] space-y-10">
            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 bg-slate-200/70 p-1.5 rounded-xl border border-slate-200">
              {[
                { id: 'all', label: 'All Operations' },
                { id: 'education', label: 'Education' },
                { id: 'vocational', label: 'IT Centre' },
                { id: 'healthcare', label: 'Healthcare' },
                { id: 'nutrition', label: 'Nutrition & Kitchen' },
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setSelectedFilter(f.id)}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                    selectedFilter === f.id
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Programs Detailed Cards */}
            <div className="space-y-6">
              {filteredPrograms.map((prog) => {
                const Icon = prog.icon
                return (
                  <div
                    key={prog.id}
                    className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                      <div className="flex items-center gap-3.5">
                        <div className={`w-12 h-12 ${prog.color} text-white rounded-xl flex items-center justify-center shrink-0 shadow-sm`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-slate-900 font-serif">
                            {prog.title}
                          </h3>
                          <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                            <MapPin className="w-3.5 h-3.5 text-slate-400" />
                            <span>{prog.locations}</span>
                          </div>
                        </div>
                      </div>

                      <span className={`px-3 py-1 text-xs font-bold rounded-full ${prog.lightColor} ${prog.textColor} border border-current/20 self-start sm:self-center`}>
                        {prog.stats}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 mt-4 leading-relaxed">
                      {prog.desc}
                    </p>

                    {/* Operational Bullet Points */}
                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                        Operational Specifics
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                        {prog.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="leading-snug">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Card Footer Action */}
                    <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] text-slate-400 font-mono">
                        Direct Program • 100% Non-Commercial
                      </span>
                      <button
                        type="button"
                        onClick={() => setDonationModalOpen(true)}
                        className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-800"
                      >
                        Support This Vertical &rarr;
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Municipal School Adoption Program */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 border border-slate-800">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-6 h-6 text-emerald-400" />
                <div>
                  <h3 className="text-base font-bold text-white font-serif">
                    Civic Partnership: Municipal School Adoption Initiative
                  </h3>
                  <p className="text-xs text-slate-400">
                    Supporting local BMC public schools in Bandra West with infrastructure and supplementary teaching.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 text-xs text-slate-300">
                {schoolAdoptionList.map((school, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                    <span>{school}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar (4 cols) */}
          <div className="w-full lg:w-[32%] space-y-6">
            <ContactSidebar />

            {/* Quick 80G Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <ShieldCheck className="w-8 h-8 text-emerald-600 mb-2" />
              <h4 className="text-sm font-bold text-slate-900">
                Corporate CSR & Grants
              </h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Eligible under Schedule VII of the Indian Companies Act 2013 for Education, Health, and Eradicating Hunger.
              </p>
              <Link
                to="/documents"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:underline mt-4"
              >
                Inspect CSR Compliance Docs &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SaaSDonationModal
        isOpen={donationModalOpen}
        onClose={() => setDonationModalOpen(false)}
      />
    </div>
  )
}

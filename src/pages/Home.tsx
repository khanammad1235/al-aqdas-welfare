import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Heart, ShieldCheck, Award, Users, BookOpen, HeartPulse,
  UtensilsCrossed, Monitor, CheckCircle2, ArrowRight,
  Quote, FileText
} from 'lucide-react'
import SaaSHero from '../components/SaaSHero'
import LiveCampaignsSection from '../components/LiveCampaignsSection'
import ImpactCalculator from '../components/ImpactCalculator'
import FinancialTransparencySection from '../components/FinancialTransparencySection'
import LiveDispatchesFeed from '../components/LiveDispatchesFeed'
import VolunteerPortalSection from '../components/VolunteerPortalSection'
import IndependenceDaySection from '../components/IndependenceDaySection'
import SaaSDonationModal from '../components/SaaSDonationModal'
import TaxReceiptModal from '../components/TaxReceiptModal'
import { type Campaign, STATUTORY_CREDENTIALS } from '../data/ngoData'

const institutions = [
  {
    title: 'A.R. Siddique Al Aqdas English High School',
    role: 'Primary & Secondary Education',
    location: 'Bandra West, Mumbai',
    metrics: '500+ Active Students • English Medium',
    desc: 'Affordable, high-standard English education for children from underprivileged families who cannot afford commercial private academies.',
    icon: BookOpen,
    badge: 'School Network',
  },
  {
    title: 'Al Aqdas Urdu High School & Junior College',
    role: 'Secondary & Higher Secondary',
    location: 'Bandra & Mandvi Campus',
    metrics: 'Classes VIII–XII • Arts & Commerce',
    desc: 'Ensuring secondary completion and collegiate junior college education for minority youth with full textbook and exam fee scholarships.',
    icon: Award,
    badge: 'Collegiate Education',
  },
  {
    title: 'Al Aqdas IT & Computer Literacy Centre',
    role: 'Digital Skills & Career Training',
    location: 'Bandra Center',
    metrics: '200+ Annual Certifications',
    desc: 'Equipped computer lab providing coding, typing, MS Office, and Internet literacy to youth and women seeking dignified employment.',
    icon: Monitor,
    badge: 'Vocational Training',
  },
  {
    title: 'Community Nutrition & Relief Logistics',
    role: 'Daily Kitchen & Dry Rations',
    location: 'Mandvi, South Mumbai',
    metrics: '350 Meals Daily • 1,200 Monthly Rations',
    desc: 'Coordinating daily warm meals for daily-wage workers, elderly destitutes, and emergency relief ration packages.',
    icon: UtensilsCrossed,
    badge: 'Nutrition Security',
  },
]

const verifiedTestimonials = [
  {
    quote: 'Al Aqdas provided my family with monthly ration kits when my husband faced severe health complications. Without their direct support, our children would have slept hungry.',
    name: 'Fatima Shaikh',
    role: 'Beneficiary, Mandvi Food Drive',
    date: 'Mandvi Resident',
  },
  {
    quote: 'My daughter enrolled in A.R. Siddique English School four years ago. Today she speaks fluent English and dreams of becoming a software engineer. The teachers give individual care to every student.',
    name: 'Mohd. Imran Qureshi',
    role: 'Parent of Class VII Student',
    date: 'Bandra West',
  },
  {
    quote: 'I personally reviewed their Mandvi logistics distribution. The inventory controls, verified ration token system, and absence of administrative waste make them one of Mumbai’s most trusted grassroots organizations.',
    name: 'Zaid Merchant',
    role: 'Corporate Partner & Donor',
    date: 'South Mumbai',
  },
]

export default function Home() {
  const [donationModalOpen, setDonationModalOpen] = useState(false)
  const [receiptModalOpen, setReceiptModalOpen] = useState(false)
  const [selectedDonationAmount, setSelectedDonationAmount] = useState<number>(2500)
  const [selectedCampaignId, setSelectedCampaignId] = useState<string | undefined>()

  const handleOpenDonate = (amount?: number) => {
    if (amount) setSelectedDonationAmount(amount)
    setSelectedCampaignId(undefined)
    setDonationModalOpen(true)
  }

  const handleDonateToCampaign = (campaign: Campaign) => {
    setSelectedCampaignId(campaign.id)
    setSelectedDonationAmount(2500)
    setDonationModalOpen(true)
  }

  const handleSelectCalculatorAmount = (amount: number) => {
    setSelectedDonationAmount(amount)
    setDonationModalOpen(true)
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Institutional Hero */}
      <SaaSHero
        onOpenDonate={handleOpenDonate}
        onOpenReceipt={() => setReceiptModalOpen(true)}
      />

      {/* Trust & Statutory Banner */}
      <div className="bg-white border-b border-slate-200 py-3.5">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span><strong>80G Tax Exemption:</strong> 50% deduction under Section 80G of the Income Tax Act.</span>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <span>Reg. No: <strong className="text-slate-800">F-46725 (Mumbai)</strong></span>
            <span>DARPAN: <strong className="text-slate-800">MH/2015/009124</strong></span>
            <span>PAN: <strong className="text-slate-800">{STATUTORY_CREDENTIALS.pan}</strong></span>
          </div>
        </div>
      </div>

      {/* Core Institutions & Programs Grid */}
      <section className="py-14 sm:py-18 bg-white border-b border-slate-200">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded">
              Permanent Institutions
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-2">
              Our Core Welfare & Educational Facilities
            </h2>
            <p className="text-slate-600 text-sm mt-1 leading-relaxed">
              Beyond emergency relief drives, Al Aqdas operates permanent schools, digital laboratories, and relief centers across Mumbai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {institutions.map((inst, idx) => {
              const Icon = inst.icon
              return (
                <div
                  key={idx}
                  className="bg-white rounded-lg border border-slate-200 p-5 shadow-xs hover:border-slate-300 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-9 h-9 rounded bg-emerald-50 text-emerald-800 flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        {inst.badge}
                      </span>
                    </div>

                    <h3 className="font-bold text-sm text-slate-900 leading-snug">
                      {inst.title}
                    </h3>
                    <p className="text-xs font-semibold text-emerald-800 mt-1">
                      {inst.metrics}
                    </p>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {inst.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>{inst.location}</span>
                    <Link to="/activities" className="text-emerald-800 font-semibold hover:underline">
                      Learn more &rarr;
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Active Relief Campaigns */}
      <LiveCampaignsSection onDonateToCampaign={handleDonateToCampaign} />

      {/* Impact Calculator Section */}
      <section className="py-14 sm:py-18 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6">
          <ImpactCalculator onSelectAmount={handleSelectCalculatorAmount} />
        </div>
      </section>

      {/* Financial Transparency & Recharts Audits */}
      <FinancialTransparencySection />

      {/* Field Dispatches */}
      <LiveDispatchesFeed />

      {/* Independence Day & Community Flagship */}
      <IndependenceDaySection />

      {/* Volunteer Opportunities */}
      <VolunteerPortalSection />

      {/* Verified Beneficiary Testimonials */}
      <section className="py-14 sm:py-18 bg-white border-b border-slate-200">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded">
              Voices From The Field
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-2">
              Community Impact & Beneficiary Stories
            </h2>
            <p className="text-slate-600 text-sm mt-1 leading-relaxed">
              Every donation directly touches real families, students, and patients across Mumbai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {verifiedTestimonials.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg border border-slate-200 p-5 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-6 h-6 text-slate-300 mb-2" />
                  <p className="text-xs text-slate-700 leading-relaxed italic">
                    "{item.quote}"
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100">
                  <p className="font-bold text-xs text-slate-900">{item.name}</p>
                  <p className="text-[11px] text-emerald-800 font-medium">{item.role}</p>
                  <span className="text-[10px] text-slate-400 mt-0.5 block">
                    {item.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Strip */}
      <section className="bg-slate-900 text-white py-12">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Help Us Uplift Families Across Mumbai
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto mt-2 leading-relaxed">
            Your contribution provides hot meals, sponsors school education for slum children, or funds free diagnostic healthcare.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <button
              type="button"
              onClick={() => handleOpenDonate(2500)}
              className="px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs rounded transition-colors flex items-center gap-2 shadow-xs"
            >
              <Heart className="w-4 h-4 fill-current text-emerald-200" />
              <span>Donate Now</span>
            </button>
            <button
              type="button"
              onClick={() => setReceiptModalOpen(true)}
              className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs rounded transition-colors flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-slate-400" />
              <span>Download 80G Tax Receipt</span>
            </button>
          </div>
        </div>
      </section>

      {/* Global Modals */}
      <SaaSDonationModal
        isOpen={donationModalOpen}
        onClose={() => setDonationModalOpen(false)}
        initialAmount={selectedDonationAmount}
        initialCampaignId={selectedCampaignId}
        onOpenReceipt={() => setReceiptModalOpen(true)}
      />

      <TaxReceiptModal
        isOpen={receiptModalOpen}
        onClose={() => setReceiptModalOpen(false)}
        initialAmount={selectedDonationAmount}
      />
    </div>
  )
}

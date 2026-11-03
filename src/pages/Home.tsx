import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Heart, ShieldCheck, Award, Users, BookOpen, HeartPulse,
  UtensilsCrossed, Monitor, Building2, CheckCircle2, ArrowRight,
  Sparkles, ExternalLink, Quote, Globe, ChevronRight, FileText
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

const sdgGoals = [
  { no: '01', title: 'No Poverty', color: 'bg-red-500' },
  { no: '02', title: 'Zero Hunger', color: 'bg-amber-500' },
  { no: '03', title: 'Good Health', color: 'bg-emerald-500' },
  { no: '04', title: 'Quality Education', color: 'bg-rose-600' },
  { no: '10', title: 'Reduced Inequalities', color: 'bg-pink-500' },
]

const institutions = [
  {
    title: 'A.R. Siddique Al Aqdas English School',
    role: 'Primary & Secondary Education',
    location: 'Bandra West, Mumbai',
    metrics: '500+ Active Scholars · English Medium',
    desc: 'Affordable, high-standard English schooling for children from underprivileged families who cannot afford commercial private academies.',
    icon: BookOpen,
    accent: 'border-emerald-500',
    badge: 'Education Vertical',
  },
  {
    title: 'Al Aqdas Urdu High School & Jr. College',
    role: 'Secondary & Higher Secondary',
    location: 'Bandra & Mandvi Campus',
    metrics: 'Classes VIII–XII · Arts & Commerce Stream',
    desc: 'Expanded under the guidance of civic leadership to ensure high school completion and collegiate matriculation for minority youth.',
    icon: Award,
    accent: 'border-blue-500',
    badge: 'Collegiate Vertical',
  },
  {
    title: 'Al Aqdas IT & Computer Literacy Centre',
    role: 'Digital Skills & Career Training',
    location: 'Bandra Center',
    metrics: '200+ Annual Certifications',
    desc: 'Fully equipped computer laboratory providing coding, MS Office, typing, and Internet literacy to youth and women seeking dignified livelihoods.',
    icon: Monitor,
    accent: 'border-amber-500',
    badge: 'Vocational Training',
  },
  {
    title: 'Mandvi Central Food Relief Depot',
    role: 'Community Kitchen & Rations',
    location: 'Mandvi, South Mumbai',
    metrics: '350 Meals Daily · 1,200 Monthly Rations',
    desc: 'Operational headquarters coordinating daily warm meals for daily-wage workers, elderly destitutes, and emergency relief distribution.',
    icon: UtensilsCrossed,
    accent: 'border-rose-500',
    badge: 'Nutrition Lifeline',
  },
]

const verifiedTestimonials = [
  {
    quote: 'Al Aqdas provided my family with monthly ration kits when my husband lost his job during health complications. Without their support, our children would have slept hungry.',
    name: 'Fatima Shaikh',
    role: 'Beneficiary, Mandvi Ration Drive',
    date: 'Verified Beneficiary · Record #4819',
  },
  {
    quote: 'My daughter enrolled in A.R. Siddique English School four years ago. Today she speaks fluent English and dreams of becoming a software engineer. The teachers give individual attention to every child.',
    name: 'Mohd. Imran Qureshi',
    role: 'Parent, Standard VII Scholar',
    date: 'Academic Year 2025–26 Record',
  },
  {
    quote: 'As a corporate volunteer, I audited their Mandvi relief warehouse. The inventory control, biometric verification, and lack of administrative waste is on par with enterprise logistics.',
    name: 'Zaid Merchant',
    role: 'CSR Lead & Sustainer Donor',
    date: 'Corporate Volunteer Partner',
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
      {/* SaaS Hero Console */}
      <SaaSHero
        onOpenDonate={handleOpenDonate}
        onOpenReceipt={() => setReceiptModalOpen(true)}
      />

      {/* SDG Alignment & Global Standards Strip */}
      <div className="bg-slate-900 border-b border-slate-800 py-4">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
            <Globe className="w-4 h-4 text-emerald-400" />
            <span>Aligned with United Nations Sustainable Development Goals (UN SDGs):</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {sdgGoals.map((sdg) => (
              <span
                key={sdg.no}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold bg-slate-800 text-slate-200 border border-slate-700"
              >
                <span className={`w-2 h-2 rounded-full ${sdg.color}`} />
                <span>{sdg.no}. {sdg.title}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Active Field Campaigns Section */}
      <LiveCampaignsSection onDonateToCampaign={handleDonateToCampaign} />

      {/* Interactive Impact Telemetry Calculator */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300 inline-block mb-2.5">
              Live Yield Simulation
            </span>
            <h2 className="text-3xl font-extrabold font-serif text-slate-900 tracking-tight">
              Calculate Your Direct Field Footprint
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Our transparent cost-per-beneficiary model ensures every rupee creates tangible,
              audited outcomes on ground.
            </p>
          </div>

          <ImpactCalculator onSelectAmount={handleSelectCalculatorAmount} />
        </div>
      </section>

      {/* Operational Infrastructure & Institutions */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 mb-3">
                <Building2 className="w-3.5 h-3.5 text-emerald-600" /> Physical Assets & Operations
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-900 tracking-tight">
                Our Institutional Network
              </h2>
              <p className="text-slate-600 text-sm max-w-2xl mt-2 leading-relaxed">
                Rather than working through intermediaries, Al Aqdas directly owns and administers
                educational institutions, technical training labs, and community relief facilities.
              </p>
            </div>

            <Link
              to="/activities"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 hover:underline"
            >
              Explore Complete Operations Directory <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {institutions.map((inst) => {
              const Icon = inst.icon
              return (
                <div
                  key={inst.title}
                  className={`bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between border-t-4 ${inst.accent}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        {inst.badge}
                      </span>
                    </div>

                    <h3 className="font-bold text-base text-slate-900 leading-snug">
                      {inst.title}
                    </h3>
                    <p className="text-xs font-semibold text-emerald-700 mt-1">
                      {inst.metrics}
                    </p>
                    <p className="text-xs text-slate-500 mt-2.5 leading-relaxed">
                      {inst.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                    <span>{inst.location}</span>
                    <Link to="/activities" className="text-emerald-700 font-semibold hover:underline">
                      Details &rarr;
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Financial Transparency & Recharts Audits */}
      <FinancialTransparencySection />

      {/* Live Dispatches & Field Telemetry */}
      <LiveDispatchesFeed />

      {/* Independence Day & Community Flagship */}
      <IndependenceDaySection />

      {/* Volunteer Ground Force & Corporate CSR */}
      <VolunteerPortalSection />

      {/* Verified Beneficiary Testimonials & Case Studies */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300 inline-block mb-2.5">
              Verified Impact Voices
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-900 tracking-tight">
              Lives Documented & Transformed
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Every initiative is tied to real families, verified school records, and audited medical registries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {verifiedTestimonials.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-8 h-8 text-emerald-600/20 mb-3" />
                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                    "{item.quote}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <p className="font-bold text-sm text-slate-900">{item.name}</p>
                  <p className="text-xs text-emerald-700 font-medium">{item.role}</p>
                  <span className="text-[10px] font-mono text-slate-400 mt-1 block">
                    {item.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Final Action Strip */}
      <section className="bg-slate-950 text-white py-14 border-t border-slate-800">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 text-center">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 mx-auto mb-4">
            <Heart className="w-6 h-6 fill-current" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-white tracking-tight">
            Partner With A Transparent Humanitarian Platform
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto mt-2">
            Whether sponsoring a child's complete schooling year or funding emergency rations for 50 families,
            your contribution creates audited, verifiable change.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5 mt-6">
            <button
              type="button"
              onClick={() => handleOpenDonate(2500)}
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center gap-2"
            >
              <Heart className="w-4 h-4 fill-current" /> Deploy Contribution
            </button>
            <button
              type="button"
              onClick={() => setReceiptModalOpen(true)}
              className="px-5 py-3 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-xs rounded-xl transition-all flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-emerald-400" /> Generate Section 80G Receipt
            </button>
          </div>
        </div>
      </section>

      {/* Modals */}
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

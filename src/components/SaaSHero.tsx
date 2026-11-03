import { useState, useEffect } from 'react'
import {
  ShieldCheck, Heart, ArrowRight, Award, TrendingUp,
  Sparkles, CheckCircle2, QrCode, FileText, ChevronRight, Activity, Flame
} from 'lucide-react'
import { CAMPAIGNS, STATUTORY_CREDENTIALS } from '../data/ngoData'

interface SaaSHeroProps {
  onOpenDonate: (amount?: number) => void
  onOpenReceipt: () => void
}

export default function SaaSHero({ onOpenDonate, onOpenReceipt }: SaaSHeroProps) {
  const [selectedQuickAmount, setSelectedQuickAmount] = useState<number>(2500)
  const featuredCampaign = CAMPAIGNS[0] // Ramadan Lifeline
  const percentage = Math.round((featuredCampaign.raised / featuredCampaign.goal) * 100)

  const quickAmounts = [1000, 2500, 5000, 10000]

  return (
    <section className="relative bg-slate-950 text-white overflow-hidden pt-8 pb-16 sm:pt-12 sm:pb-20 border-b border-slate-800">
      {/* Background ambient lighting - subtle, institutional, not tacky */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Top Operational Status Pill */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-mono">LIVE TELEMETRY:</span>
            <span>4 Field Operations Active Across Mumbai</span>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Govt. Reg: <strong>{STATUTORY_CREDENTIALS.registrationNo.split('/')[0]}</strong></span>
            <span>•</span>
            <span>80G Unique Reg: <strong>AAETA8194EF20214</strong></span>
          </div>
        </div>

        {/* Hero Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Value Proposition & Impact Telemetry */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-xs font-medium text-slate-300">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>Serving Underprivileged Communities Since 2015</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold font-serif leading-[1.12] tracking-tight text-white">
              Precision Humanitarian Relief.
              <span className="block bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200 bg-clip-text text-transparent">
                100% Direct Field Impact.
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
              Al Aqdas Welfare Association deploys audited food aid, quality English & Urdu school education,
              and free medical healthcare to vulnerable families across Mumbai with verifiable real-time transparency.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={() => onOpenDonate(selectedQuickAmount)}
                className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-lg hover:shadow-emerald-500/25 flex items-center gap-2.5"
              >
                <Heart className="w-4 h-4 fill-current text-slate-950" />
                Deploy Emergency Aid
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onOpenReceipt}
                className="px-5 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-600 font-semibold text-sm rounded-xl transition-all flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                Instant 80G Tax Receipt
              </button>
            </div>

            {/* Real-time Telemetry KPI Strip */}
            <div className="pt-6 border-t border-slate-800/90 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold font-mono text-white">
                  ₹2.4<span className="text-emerald-400 text-xl font-sans">Cr+</span>
                </p>
                <p className="text-xs text-slate-400 font-medium mt-0.5">Total Aid Deployed</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold font-mono text-white">
                  50,000<span className="text-emerald-400 text-xl font-sans">+</span>
                </p>
                <p className="text-xs text-slate-400 font-medium mt-0.5">Meals Distributed</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold font-mono text-white">
                  89.2<span className="text-emerald-400 text-xl font-sans">%</span>
                </p>
                <p className="text-xs text-slate-400 font-medium mt-0.5">Program Direct Ratio</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold font-mono text-white">
                  1,200<span className="text-emerald-400 text-xl font-sans">+</span>
                </p>
                <p className="text-xs text-slate-400 font-medium mt-0.5">Medical Patients</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Live Mission Card (SaaS Console) */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 sm:p-7 shadow-2xl backdrop-blur-xl relative">
              {/* Urgent Campaign Tag */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">
                  <Flame className="w-3.5 h-3.5 text-rose-400 animate-pulse" /> Urgent Active Mission
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {featuredCampaign.daysLeft} days remaining
                </span>
              </div>

              {/* Title & Beneficiary */}
              <h3 className="text-lg font-bold text-white leading-snug">
                {featuredCampaign.title}
              </h3>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                Direct distribution of 25kg complete dry ration food kits to {featuredCampaign.beneficiaryTarget}.
              </p>

              {/* Progress Bar & Financials */}
              <div className="mt-5 p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-mono font-bold text-white text-base">
                    ₹{(featuredCampaign.raised / 100000).toFixed(2)} Lakhs
                  </span>
                  <span className="font-mono text-slate-400 text-xs">
                    Goal: ₹{(featuredCampaign.goal / 100000).toFixed(2)} Lakhs
                  </span>
                </div>

                <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden mb-2">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-700"
                    style={{ width: `${percentage}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span className="text-emerald-400 font-bold">{percentage}% Funded</span>
                  <span>{featuredCampaign.donorsCount} Verified Donors</span>
                </div>
              </div>

              {/* 1-Click Contribution Selection */}
              <div className="mt-5">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Select Quick Contribution Amount
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {quickAmounts.map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => setSelectedQuickAmount(amt)}
                      className={`py-2 text-xs font-bold font-mono rounded-lg border transition-all ${
                        selectedQuickAmount === amt
                          ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-xs'
                          : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:border-slate-600'
                      }`}
                    >
                      ₹{amt.toLocaleString('en-IN')}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => onOpenDonate(selectedQuickAmount)}
                className="w-full mt-5 py-3 px-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Heart className="w-4 h-4 fill-current" />
                Contribute ₹{selectedQuickAmount.toLocaleString('en-IN')} via UPI / BharatQR
              </button>

              {/* Bottom Assurance */}
              <div className="mt-3.5 flex items-center justify-between text-[11px] text-slate-400 px-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> 80G Tax Deductible
                </span>
                <span>Audited Direct Disbursement</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


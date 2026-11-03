import { useState } from 'react'
import {
  Calculator, Heart, Utensils, GraduationCap, Stethoscope,
  ShieldCheck, ArrowRight, Sparkles, TrendingUp, HelpCircle
} from 'lucide-react'

interface ImpactCalculatorProps {
  onSelectAmount?: (amount: number, frequency: 'one-time' | 'monthly') => void
}

export default function ImpactCalculator({ onSelectAmount }: ImpactCalculatorProps) {
  const [amount, setAmount] = useState<number>(2500)
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time')

  // Calculate annual multiplier if monthly
  const annualFactor = frequency === 'monthly' ? 12 : 1
  const effectiveAmount = amount * annualFactor

  // Real-world cost metrics derived from Al Aqdas operations
  const mealsCount = Math.floor(effectiveAmount / 50)
  const schoolingMonths = Math.max(1, Math.floor(effectiveAmount / 1200))
  const medicalScreenings = Math.floor(effectiveAmount / 350)
  const taxSavingsEst = Math.round(effectiveAmount * 0.5 * 0.3) // 50% 80G deduction on 30% tax bracket

  const presets = [1000, 2500, 5000, 10000, 25000]

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden">
      {/* Top Header */}
      <div className="bg-slate-900 text-white p-6 sm:p-7 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              <Calculator className="w-3.5 h-3.5" /> Interactive Impact Telemetry
            </span>
            <span className="text-xs text-slate-400">Section 80G Verified</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
            Real-Time Humanitarian Calculator
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            See exactly how your aid translates into field-verified relief on ground in Mumbai.
          </p>
        </div>

        {/* Frequency Toggle */}
        <div className="flex items-center bg-slate-800 p-1 rounded-xl border border-slate-700">
          <button
            type="button"
            onClick={() => setFrequency('one-time')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              frequency === 'one-time'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            One-Time Grant
          </button>
          <button
            type="button"
            onClick={() => setFrequency('monthly')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1 ${
              frequency === 'monthly'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-3 h-3 text-amber-300" />
            Monthly Sustainer
          </button>
        </div>
      </div>

      {/* Main Controls & Calculations */}
      <div className="p-6 sm:p-8">
        {/* Amount Slider and Input */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Select Aid Amount ({frequency === 'monthly' ? '₹ / Month' : '₹ One-Time'})
            </label>
            <div className="flex items-baseline gap-1 text-slate-900">
              <span className="text-lg font-bold font-serif text-emerald-700">₹</span>
              <span className="text-3xl font-extrabold font-serif tracking-tight text-slate-900">
                {amount.toLocaleString('en-IN')}
              </span>
              {frequency === 'monthly' && (
                <span className="text-xs text-slate-500 font-semibold">/ month</span>
              )}
            </div>
          </div>

          {/* Range Slider */}
          <input
            type="range"
            min="500"
            max="50000"
            step="500"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600 focus:outline-none"
          />

          {/* Quick Preset Buttons */}
          <div className="grid grid-cols-5 gap-2 mt-4">
            {presets.map((val) => (
              <button
                key={val}
                type="button"
                onClick={() => setAmount(val)}
                className={`py-1.5 px-2 text-xs font-bold rounded-lg border transition-all ${
                  amount === val
                    ? 'bg-emerald-50 border-emerald-500 text-emerald-800 shadow-xs'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-100'
                }`}
              >
                ₹{val >= 1000 ? `${val / 1000}k` : val}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Impact Output Cards (Bento Style) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 relative overflow-hidden">
            <div className="w-8 h-8 rounded-lg bg-amber-500/15 flex items-center justify-center text-amber-700 mb-2.5">
              <Utensils className="w-4 h-4" />
            </div>
            <p className="text-2xl font-black font-serif text-slate-900 leading-none">
              {mealsCount.toLocaleString('en-IN')}{' '}
              <span className="text-xs font-sans font-semibold text-slate-500">Meals</span>
            </p>
            <p className="text-[11px] text-slate-600 mt-1.5 leading-snug">
              Nutritious hot meals cooked daily in our community kitchen for pavement dwellers.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/80 relative overflow-hidden">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-700 mb-2.5">
              <GraduationCap className="w-4 h-4" />
            </div>
            <p className="text-2xl font-black font-serif text-slate-900 leading-none">
              {schoolingMonths}{' '}
              <span className="text-xs font-sans font-semibold text-slate-500">Months</span>
            </p>
            <p className="text-[11px] text-slate-600 mt-1.5 leading-snug">
              Comprehensive student tuition, books & uniform sponsorship at A.R. Siddique schools.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-sky-50/70 border border-sky-200/80 relative overflow-hidden">
            <div className="w-8 h-8 rounded-lg bg-sky-500/15 flex items-center justify-center text-sky-700 mb-2.5">
              <Stethoscope className="w-4 h-4" />
            </div>
            <p className="text-2xl font-black font-serif text-slate-900 leading-none">
              {medicalScreenings}{' '}
              <span className="text-xs font-sans font-semibold text-slate-500">Screenings</span>
            </p>
            <p className="text-[11px] text-slate-600 mt-1.5 leading-snug">
              Free doctor consultations, diabetes tests & basic prescription medicines in camps.
            </p>
          </div>
        </div>

        {/* 80G Tax Exemption Benefit Callout */}
        <div className="p-4 rounded-xl bg-slate-900 text-white flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white flex items-center gap-2">
                Eligible 80G Tax Deduction:{' '}
                <span className="text-emerald-400 font-mono font-bold">
                  ₹{(effectiveAmount * 0.5).toLocaleString('en-IN')}
                </span>
              </p>
              <p className="text-[11px] text-slate-300">
                Estimated Net Tax Relief: ~₹{taxSavingsEst.toLocaleString('en-IN')} (at 30% tax bracket). Instant 80G certificate provided.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onSelectAmount && onSelectAmount(amount, frequency)}
            className="w-full sm:w-auto px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
          >
            Deploy Aid Now <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}


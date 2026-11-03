import { useState } from 'react'
import {
  Calculator, Heart, Utensils, GraduationCap, Stethoscope,
  ShieldCheck, ArrowRight
} from 'lucide-react'

interface ImpactCalculatorProps {
  onSelectAmount?: (amount: number, frequency: 'one-time' | 'monthly') => void
}

export default function ImpactCalculator({ onSelectAmount }: ImpactCalculatorProps) {
  const [amount, setAmount] = useState<number>(2500)
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time')

  const annualFactor = frequency === 'monthly' ? 12 : 1
  const effectiveAmount = amount * annualFactor

  // Realistic field delivery ratios
  const mealsCount = Math.floor(effectiveAmount / 50)
  const schoolingMonths = Math.max(1, Math.floor(effectiveAmount / 1200))
  const medicalScreenings = Math.floor(effectiveAmount / 350)
  const taxSavingsEst = Math.round(effectiveAmount * 0.5 * 0.3) // 50% 80G deduction at 30% tax slab

  const presets = [1000, 2500, 5000, 10000, 25000]

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-slate-900 text-white p-6 sm:p-7 flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider block mb-1">
            Impact Transparency
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            See the Real Impact of Your Donation
          </h3>
          <p className="text-xs text-slate-300 mt-1 max-w-xl">
            Calculated according to audited procurement and operational costs across our Mumbai schools, clinics, and relief centres.
          </p>
        </div>

        {/* Frequency Toggle */}
        <div className="flex items-center bg-slate-800 p-1 rounded-lg border border-slate-700">
          <button
            type="button"
            onClick={() => setFrequency('one-time')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded transition-colors ${
              frequency === 'one-time'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            One-Time
          </button>
          <button
            type="button"
            onClick={() => setFrequency('monthly')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded transition-colors ${
              frequency === 'monthly'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Monthly Giving
          </button>
        </div>
      </div>

      {/* Main Controls & Calculations */}
      <div className="p-6 sm:p-8">
        {/* Slider & Presets */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Contribution Amount ({frequency === 'monthly' ? '₹ / Month' : '₹ One-Time'})
            </label>
            <span className="text-2xl font-bold text-slate-900">
              ₹{amount.toLocaleString('en-IN')}
            </span>
          </div>

          <input
            type="range"
            min="500"
            max="50000"
            step="500"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-700"
          />

          <div className="flex flex-wrap items-center gap-2 mt-4">
            <span className="text-xs text-slate-500 font-medium">Quick select:</span>
            {presets.map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => setAmount(preset)}
                className={`px-3 py-1 text-xs font-semibold rounded border transition-colors ${
                  amount === preset
                    ? 'border-emerald-700 bg-emerald-50 text-emerald-900 font-bold'
                    : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                }`}
              >
                ₹{preset.toLocaleString('en-IN')}
              </button>
            ))}
          </div>
        </div>

        {/* Impact Output Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="p-5 rounded-lg border border-slate-200 bg-slate-50">
            <div className="w-9 h-9 rounded bg-emerald-100 text-emerald-800 flex items-center justify-center mb-3">
              <Utensils className="w-4 h-4" />
            </div>
            <p className="text-2xl font-bold text-slate-900">{mealsCount.toLocaleString('en-IN')}</p>
            <p className="text-xs font-semibold text-slate-700 mt-0.5">Hot Nutritious Meals</p>
            <p className="text-[11px] text-slate-500 mt-1">Prepared and served to daily-wage workers and pavement dwellers</p>
          </div>

          <div className="p-5 rounded-lg border border-slate-200 bg-slate-50">
            <div className="w-9 h-9 rounded bg-blue-100 text-blue-800 flex items-center justify-center mb-3">
              <GraduationCap className="w-4 h-4" />
            </div>
            <p className="text-2xl font-bold text-slate-900">{schoolingMonths}</p>
            <p className="text-xs font-semibold text-slate-700 mt-0.5">Months of English Schooling</p>
            <p className="text-[11px] text-slate-500 mt-1">Covering tuition, books, computer lab, and teacher instruction</p>
          </div>

          <div className="p-5 rounded-lg border border-slate-200 bg-slate-50">
            <div className="w-9 h-9 rounded bg-rose-100 text-rose-800 flex items-center justify-center mb-3">
              <Stethoscope className="w-4 h-4" />
            </div>
            <p className="text-2xl font-bold text-slate-900">{medicalScreenings}</p>
            <p className="text-xs font-semibold text-slate-700 mt-0.5">Medical Consults & Tests</p>
            <p className="text-[11px] text-slate-500 mt-1">Doctor evaluations, diabetic tests, and free chronic illness medicines</p>
          </div>
        </div>

        {/* 80G Tax Benefit Summary Bar & CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-lg bg-emerald-50/70 border border-emerald-200">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0" />
            <div className="text-xs text-emerald-950">
              <span className="font-bold">Estimated 80G Tax Exemption: </span>
              Save approx. <strong className="text-emerald-900 font-bold">₹{taxSavingsEst.toLocaleString('en-IN')}</strong> on income tax (under 30% tax slab).
            </div>
          </div>

          <button
            type="button"
            onClick={() => onSelectAmount && onSelectAmount(amount, frequency)}
            className="w-full sm:w-auto px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs rounded transition-colors flex items-center justify-center gap-1.5 shrink-0"
          >
            <span>Donate ₹{amount.toLocaleString('en-IN')}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  )
}

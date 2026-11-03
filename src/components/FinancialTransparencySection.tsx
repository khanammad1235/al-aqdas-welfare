import { useState } from 'react'
import {
  PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend
} from 'recharts'
import {
  ShieldCheck, FileSpreadsheet, Download, ExternalLink,
  Award, CheckCircle2, ChevronRight, Lock, Eye
} from 'lucide-react'
import { AUDITED_ALLOCATION, QUARTERLY_AID_DEPLOYMENT, STATUTORY_CREDENTIALS } from '../data/ngoData'

export default function FinancialTransparencySection() {
  const [activeTab, setActiveTab] = useState<'allocation' | 'quarterly'>('allocation')
  const [selectedAuditReport, setSelectedAuditReport] = useState<string | null>(null)

  const reports = [
    { year: 'FY 2024–2025', title: 'Annual Statutory Audit Report', size: '2.4 MB PDF', auditor: 'M/s S. K. Lodha & Associates' },
    { year: 'FY 2023–2024', title: 'Audited Financial Statements & 80G Filing', size: '1.9 MB PDF', auditor: 'M/s S. K. Lodha & Associates' },
    { year: 'FY 2022–2023', title: 'Public Charity Commissioner Return', size: '2.1 MB PDF', auditor: 'M/s S. K. Lodha & Associates' },
  ]

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-t border-b border-slate-200">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-900 border border-emerald-300 mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" /> Statutory Transparency & Fiduciary Governance
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-900 tracking-tight">
              Where Every Single Rupee Goes
            </h2>
            <p className="text-slate-600 text-sm max-w-2xl mt-2 leading-relaxed">
              We operate under open-book fiduciary governance. 100% of public donations are audited by independent
              Chartered Accountants and registered with the Charity Commissioner and NITI Aayog.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-500 font-medium">View Analysis:</span>
            <div className="flex bg-white p-1 rounded-xl border border-slate-200 shadow-2xs">
              <button
                type="button"
                onClick={() => setActiveTab('allocation')}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  activeTab === 'allocation'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Fund Allocation
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('quarterly')}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  activeTab === 'quarterly'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Disbursement Trend
              </button>
            </div>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Chart Card (8 cols) */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-6">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  {activeTab === 'allocation' ? 'Audited Program vs Operations Ratio' : 'Quarterly Field Aid Deployments (in ₹ Lakhs)'}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {activeTab === 'allocation' ? 'Independently audited figures from FY 2024-25 statutory balance sheets' : 'Consolidated disbursements across key welfare verticals'}
                </p>
              </div>
              <span className="px-2.5 py-1 text-[11px] font-mono font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-lg">
                89.2% Program Efficiency
              </span>
            </div>

            {/* Recharts Container */}
            <div className="h-[320px] w-full">
              {activeTab === 'allocation' ? (
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={AUDITED_ALLOCATION}
                      dataKey="percentage"
                      nameKey="category"
                      cx="50%"
                      cy="50%"
                      innerRadius={75}
                      outerRadius={115}
                      paddingAngle={4}
                    >
                      {AUDITED_ALLOCATION.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <RechartsTooltip
                      formatter={(value: any) => [`${value}% of total funds`, 'Share']}
                      contentStyle={{
                        borderRadius: '12px',
                        fontSize: '12px',
                        border: '1px solid #e2e8f0',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              ) : (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={QUARTERLY_AID_DEPLOYMENT} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                    <XAxis dataKey="quarter" tick={{ fontSize: 11, fill: '#64748b' }} />
                    <YAxis tick={{ fontSize: 11, fill: '#64748b' }} unit="L" />
                    <RechartsTooltip
                      formatter={(val: any) => [`₹${val} Lakhs`, '']}
                      contentStyle={{ borderRadius: '12px', fontSize: '12px' }}
                    />
                    <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                    <Bar dataKey="food" name="Food & Nutrition" fill="#059669" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="education" name="Schools & College" fill="#0284c7" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="medical" name="Medical Relief" fill="#e11d48" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </div>

            {/* Breakdown Legend Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 mt-4 border-t border-slate-100">
              {AUDITED_ALLOCATION.map((item) => (
                <div key={item.category} className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-[11px] font-bold text-slate-700 truncate">{item.category}</span>
                  </div>
                  <p className="text-lg font-mono font-bold text-slate-900">{item.percentage}%</p>
                </div>
              ))}
            </div>
          </div>

          {/* Compliance & Audit Reports Card (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            {/* Regulatory Credentials Card */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-amber-400" />
                <h4 className="text-sm font-bold tracking-tight text-white uppercase">
                  Verified Trust Credentials
                </h4>
              </div>

              <div className="space-y-3 text-xs">
                <div className="pb-2.5 border-b border-slate-800">
                  <span className="text-slate-400 block text-[10px] uppercase font-semibold">Darpan Registration (NITI Aayog)</span>
                  <span className="font-mono font-bold text-emerald-400">{STATUTORY_CREDENTIALS.darpanId}</span>
                </div>
                <div className="pb-2.5 border-b border-slate-800">
                  <span className="text-slate-400 block text-[10px] uppercase font-semibold">Income Tax Section 80G Approval</span>
                  <span className="font-mono font-bold text-emerald-400">{STATUTORY_CREDENTIALS.taxExemption}</span>
                </div>
                <div className="pb-2.5 border-b border-slate-800">
                  <span className="text-slate-400 block text-[10px] uppercase font-semibold">Public Trust Regn. No.</span>
                  <span className="font-mono font-bold text-slate-200">{STATUTORY_CREDENTIALS.registrationNo}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-semibold">Statutory Chartered Accountants</span>
                  <span className="text-slate-200 font-medium">{STATUTORY_CREDENTIALS.statutoryAuditor}</span>
                </div>
              </div>
            </div>

            {/* Downloadable Audit Files */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center justify-between">
                <span>Audited Statements</span>
                <span className="text-[10px] font-normal text-slate-400">Public Disclosures</span>
              </h4>

              <div className="space-y-2.5">
                {reports.map((report) => (
                  <div
                    key={report.year}
                    className="p-3 rounded-xl border border-slate-200/90 hover:border-emerald-500/50 hover:bg-slate-50 transition-all flex items-center justify-between group cursor-pointer"
                    onClick={() => setSelectedAuditReport(report.year)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-mono text-xs font-bold">
                        PDF
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-800 group-hover:text-emerald-700 transition-colors">
                          {report.title}
                        </p>
                        <p className="text-[10px] text-slate-400">{report.year} · {report.size}</p>
                      </div>
                    </div>
                    <Eye className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


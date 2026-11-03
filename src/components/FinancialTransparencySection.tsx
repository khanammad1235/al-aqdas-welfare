import { useState } from 'react'
import {
  PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip,
  BarChart, Bar, XAxis, YAxis, CartesianGrid
} from 'recharts'
import { ShieldCheck, FileText, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AUDITED_ALLOCATION, QUARTERLY_AID_DEPLOYMENT, STATUTORY_CREDENTIALS } from '../data/ngoData'

export default function FinancialTransparencySection() {
  const [activeTab, setActiveTab] = useState<'allocation' | 'quarterly'>('allocation')

  const reports = [
    { year: 'FY 2024–2025', title: 'Annual Statutory Audit Report', size: '2.4 MB PDF', auditor: 'M/s S. K. Lodha & Associates' },
    { year: 'FY 2023–2024', title: 'Audited Financial Statements & 80G Filing', size: '1.9 MB PDF', auditor: 'M/s S. K. Lodha & Associates' },
    { year: 'FY 2022–2023', title: 'Public Charity Commissioner Return', size: '2.1 MB PDF', auditor: 'M/s S. K. Lodha & Associates' },
  ]

  return (
    <section className="py-14 sm:py-18 bg-slate-50 border-b border-slate-200">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded">
              Audited Governance
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-2">
              Financial Accountability & Fund Allocation
            </h2>
            <p className="text-slate-600 text-sm max-w-2xl mt-1 leading-relaxed">
              We operate under an open-book policy. 100% of our public donations are audited by independent Chartered Accountants and submitted to the Charity Commissioner.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 font-medium">View:</span>
            <div className="flex bg-white p-1 rounded-lg border border-slate-200">
              <button
                type="button"
                onClick={() => setActiveTab('allocation')}
                className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors ${
                  activeTab === 'allocation'
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Fund Allocation
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('quarterly')}
                className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors ${
                  activeTab === 'quarterly'
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Disbursement Growth
              </button>
            </div>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Chart Card (8 cols) */}
          <div className="lg:col-span-8 bg-white rounded-xl border border-slate-200 p-6 sm:p-7 shadow-xs">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <div>
                <h3 className="text-sm font-bold text-slate-900">
                  {activeTab === 'allocation' ? 'Audited Program vs Operations Breakdown' : 'Quarterly Field Aid Deployments (in ₹ Lakhs)'}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Figures extracted from FY 2024-25 statutory balance sheets
                </p>
              </div>
              <span className="px-2.5 py-1 text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 rounded">
                89.2% Direct Program Ratio
              </span>
            </div>

            {/* Recharts Container */}
            <div className="h-[280px] w-full">
              {activeTab === 'allocation' ? (
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={AUDITED_ALLOCATION}
                      cx="50%"
                      cy="50%"
                      innerRadius={65}
                      outerRadius={105}
                      paddingAngle={3}
                      dataKey="percentage"
                    >
                      {AUDITED_ALLOCATION.map((entry) => (
                        <Cell key={entry.category} fill={entry.color} />
                      ))}
                    </Pie>
                    <RechartsTooltip
                      formatter={(value: any) => [`${value}%`, 'Percentage']}
                      contentStyle={{
                        borderRadius: '6px',
                        border: '1px solid #cbd5e1',
                        fontSize: '12px',
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              ) : (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={QUARTERLY_AID_DEPLOYMENT}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                    <XAxis dataKey="quarter" tick={{ fontSize: 12, fill: '#64748b' }} axisLine={false} />
                    <YAxis tick={{ fontSize: 12, fill: '#64748b' }} axisLine={false} unit="L" />
                    <RechartsTooltip
                      formatter={(val: any) => [`₹${val} Lakhs`]}
                      contentStyle={{
                        borderRadius: '6px',
                        border: '1px solid #cbd5e1',
                        fontSize: '12px',
                      }}
                    />
                    <Bar dataKey="food" name="Food Aid" fill="#059669" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="education" name="Schools & IT" fill="#0284c7" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="medical" name="Healthcare" fill="#d97706" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </div>

            {/* Legend / Metrics List */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-100 mt-4">
              {AUDITED_ALLOCATION.map((item) => (
                <div key={item.category} className="text-left">
                  <div className="flex items-center gap-1.5 text-xs text-slate-600 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                    <span className="truncate">{item.category}</span>
                  </div>
                  <p className="text-base font-bold text-slate-900">{item.percentage}%</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Download Audited Reports & Statutory Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
              <h3 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-2">
                <FileText className="w-4 h-4 text-emerald-700" />
                Audited Financial Reports
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Public disclosure of returns filed with regulatory authorities.
              </p>

              <div className="space-y-2.5">
                {reports.map((report) => (
                  <Link
                    key={report.year}
                    to="/documents"
                    className="block p-3 rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-900">{report.year}</span>
                      <span className="text-[11px] text-slate-500">{report.size}</span>
                    </div>
                    <p className="text-xs text-slate-600 mt-0.5 truncate">{report.title}</p>
                    <p className="text-[10px] text-slate-400 mt-1">Auditor: {report.auditor}</p>
                  </Link>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Audited by {STATUTORY_CREDENTIALS.statutoryAuditor}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

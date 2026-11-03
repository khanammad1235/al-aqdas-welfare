import { useState } from 'react'
import {
  X, ShieldCheck, Download, Printer, CheckCircle2,
  FileText, Award, Building2, Calendar, Hash, User, Mail, CreditCard
} from 'lucide-react'
import { STATUTORY_CREDENTIALS } from '../data/ngoData'

interface TaxReceiptModalProps {
  isOpen: boolean
  onClose: () => void
  initialAmount?: number
}

export default function TaxReceiptModal({ isOpen, onClose, initialAmount = 2500 }: TaxReceiptModalProps) {
  const [donorName, setDonorName] = useState('Dr. Salman Merchant')
  const [donorPan, setDonorPan] = useState('ABCDE1234F')
  const [donorEmail, setDonorEmail] = useState('salman.merchant@example.com')
  const [donorPhone, setDonorPhone] = useState('+91 98200 12345')
  const [amount, setAmount] = useState<number>(initialAmount)
  const [purpose, setPurpose] = useState('Community Nutrition & Educational Support')
  const [receiptNumber] = useState(`AAW-80G-${Math.floor(100000 + Math.random() * 900000)}`)
  const [currentDate] = useState(new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }))
  const [activeTab, setActiveTab] = useState<'form' | 'preview'>('preview')
  const [isCopied, setIsCopied] = useState(false)

  if (!isOpen) return null

  const handlePrint = () => {
    window.print()
  }

  const handleCopyReceiptId = () => {
    navigator.clipboard.writeText(receiptNumber)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold tracking-tight text-white flex items-center gap-2">
                Instant 80G Tax Exemption Receipt Generator
                <span className="px-2 py-0.5 text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 rounded-full">
                  Section 80G IT Act
                </span>
              </h3>
              <p className="text-[11px] text-slate-400">
                Statutory certificate for 50% income tax deduction under Indian IT Act 1961
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center justify-between px-6 py-2.5 bg-slate-50 border-b border-slate-200">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'preview'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              Verified Certificate Preview
            </button>
            <button
              onClick={() => setActiveTab('form')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'form'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              Edit Donor Particulars
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-slate-500" />
              Print / Save PDF
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === 'form' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto py-2">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-slate-400" /> Full Donor Name (As on PAN)
                </label>
                <input
                  type="text"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                  <CreditCard className="w-3.5 h-3.5 text-slate-400" /> PAN Card Number (Mandatory for 80G)
                </label>
                <input
                  type="text"
                  value={donorPan}
                  onChange={(e) => setDonorPan(e.target.value.toUpperCase())}
                  maxLength={10}
                  className="w-full px-3 py-2 text-sm font-mono tracking-wider border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 uppercase"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-400" /> Donor Email Address
                </label>
                <input
                  type="email"
                  value={donorEmail}
                  onChange={(e) => setDonorEmail(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Donation Amount (INR)</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full px-3 py-2 text-sm font-semibold border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="md:col-span-2 space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Purpose of Humanitarian Contribution</label>
                <select
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                >
                  <option value="Community Nutrition & Educational Support">Community Nutrition & Educational Support</option>
                  <option value="A.R. Siddique English School IT Lab Fund">A.R. Siddique English School IT Lab Fund</option>
                  <option value="Free Medical Camp & Healthcare Relief">Free Medical Camp & Healthcare Relief</option>
                  <option value="Ramadan Ration Kit Distribution 2026">Ramadan Ration Kit Distribution 2026</option>
                  <option value="General Humanitarian Trust Corpus Fund">General Humanitarian Trust Corpus Fund</option>
                </select>
              </div>

              <div className="md:col-span-2 pt-2">
                <button
                  onClick={() => setActiveTab('preview')}
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  Generate & Preview 80G Certificate <CheckCircle2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            /* Official 80G Certificate Document Display */
            <div className="bg-gradient-to-b from-amber-50/20 to-white border-2 border-emerald-800/30 rounded-xl p-6 sm:p-8 text-slate-800 relative shadow-inner">
              {/* Decorative Corner Seals */}
              <div className="absolute top-3 right-3 text-emerald-800/20 pointer-events-none">
                <ShieldCheck className="w-24 h-24 stroke-[1]" />
              </div>

              {/* Certificate Header */}
              <div className="text-center pb-5 border-b border-emerald-900/15">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-[11px] font-bold uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-3.5 h-3.5" /> Official Section 80G Tax Exemption Receipt
                </div>
                <h2 className="text-xl sm:text-2xl font-serif font-extrabold text-emerald-950 uppercase tracking-tight">
                  Al Aqdas Welfare Association
                </h2>
                <p className="text-xs text-slate-600 font-medium mt-1">
                  {STATUTORY_CREDENTIALS.registrationNo}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[11px] text-slate-500 font-mono mt-1.5">
                  <span>DARPAN ID: <strong>{STATUTORY_CREDENTIALS.darpanId.split(' ')[0]}</strong></span>
                  <span>•</span>
                  <span>80G Unique Reg: <strong>{STATUTORY_CREDENTIALS.taxExemption.split('(')[1].replace(')', '')}</strong></span>
                  <span>•</span>
                  <span>PAN: <strong>{STATUTORY_CREDENTIALS.pan}</strong></span>
                </div>
              </div>

              {/* Certificate Metadata Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 my-4 bg-slate-100/80 rounded-lg px-4 border border-slate-200 text-xs">
                <div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold block">Receipt Ref No.</span>
                  <span className="font-mono font-bold text-slate-900">{receiptNumber}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold block">Date of Issuance</span>
                  <span className="font-semibold text-slate-900">{currentDate}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold block">Financial Year</span>
                  <span className="font-mono font-bold text-slate-900">2026–2027</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold block">Payment Mode</span>
                  <span className="font-semibold text-emerald-700">Digital / BharatQR / UPI</span>
                </div>
              </div>

              {/* Certificate Main Body */}
              <div className="space-y-3.5 text-xs sm:text-[13px] leading-relaxed text-slate-700">
                <p>
                  Received with thanks from <strong>{donorName || 'Valued Donor'}</strong> (PAN:{' '}
                  <span className="font-mono font-bold text-slate-900 bg-amber-100 px-1.5 py-0.5 rounded">
                    {donorPan || 'PAN PENDING'}
                  </span>
                  ), the sum of{' '}
                  <strong className="text-emerald-900 text-base font-serif">
                    ₹{amount.toLocaleString('en-IN')}/-
                  </strong>{' '}
                  towards <em>{purpose}</em>.
                </p>

                <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-lg p-3 text-xs text-emerald-950">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>Tax Exemption Declaration:</strong> Donations made to Al Aqdas Welfare Association are
                      eligible for 50% deduction under Section 80G(5)(vi) of the Income Tax Act, 1961. This digital
                      certificate complies with Form 10BE filing guidelines mandated by CBDT.
                    </div>
                  </div>
                </div>
              </div>

              {/* Signatures & Seal */}
              <div className="pt-6 mt-6 border-t border-slate-200 grid grid-cols-2 items-end">
                <div>
                  <div className="w-20 h-20 rounded-full border-2 border-emerald-800/30 flex items-center justify-center p-1 text-center bg-emerald-50/50">
                    <span className="text-[9px] font-bold text-emerald-900 leading-tight uppercase">
                      Al Aqdas Welfare Association<br />Official Seal
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 mt-1">Authorized Digital Seal</p>
                </div>

                <div className="text-right">
                  <div className="inline-block text-center border-t border-slate-400 pt-1 w-48">
                    <p className="text-xs font-bold text-slate-900">Mohammed Hasham Shaikh</p>
                    <p className="text-[11px] text-slate-500">General Secretary / Trustee</p>
                    <p className="text-[9px] text-emerald-700 font-mono mt-0.5">Digitally Verified & Valid</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Bar */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Ref: <strong className="font-mono text-slate-700">{receiptNumber}</strong></span>
            <button
              onClick={handleCopyReceiptId}
              className="text-[11px] text-emerald-700 hover:underline font-semibold"
            >
              {isCopied ? 'Copied!' : 'Copy ID'}
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-slate-300 rounded-lg font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
            >
              Close
            </button>
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold transition-colors flex items-center gap-1.5 shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              Download Official Certificate
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}


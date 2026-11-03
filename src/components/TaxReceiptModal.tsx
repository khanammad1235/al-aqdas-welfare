import { useState } from 'react'
import {
  X, ShieldCheck, Printer, CheckCircle2,
  FileText, Award, Building2, Calendar, Hash, User, Mail, CreditCard, Copy, Check
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="relative w-full max-w-3xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white">
          <div className="flex items-center gap-2.5">
            <Award className="w-5 h-5 text-emerald-400" />
            <div>
              <h3 className="text-sm font-bold text-white">
                80G Tax Exemption Receipt Verification
              </h3>
              <p className="text-[11px] text-slate-400">
                Statutory certificate for 50% income tax deduction under Indian IT Act 1961
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded text-slate-400 hover:text-white hover:bg-slate-800 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center justify-between px-6 py-2.5 bg-slate-50 border-b border-slate-200 text-xs">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('preview')}
              className={`px-3 py-1.5 rounded font-semibold transition-colors ${
                activeTab === 'preview'
                  ? 'bg-white text-slate-900 border border-slate-300 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Certificate Preview
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('form')}
              className={`px-3 py-1.5 rounded font-semibold transition-colors ${
                activeTab === 'form'
                  ? 'bg-white text-slate-900 border border-slate-300 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Edit Donor Details
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded font-semibold text-xs transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === 'form' ? (
            <div className="space-y-4 max-w-xl mx-auto">
              <div className="p-3 bg-emerald-50 rounded border border-emerald-200 text-xs text-emerald-900">
                Enter your details as per your PAN card to generate a valid Section 80G tax receipt for filing your income tax return.
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Donor Full Name (as on PAN)</label>
                <input
                  type="text"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-700"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Permanent Account Number (PAN)</label>
                  <input
                    type="text"
                    value={donorPan}
                    onChange={(e) => setDonorPan(e.target.value.toUpperCase())}
                    className="w-full px-3 py-2 text-xs font-mono uppercase border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-700"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Donation Amount (INR)</label>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full px-3 py-2 text-xs font-bold border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-700"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Email Address</label>
                  <input
                    type="email"
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-700"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Mobile / WhatsApp Number</label>
                  <input
                    type="tel"
                    value={donorPhone}
                    onChange={(e) => setDonorPhone(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-700"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Program / Purpose of Donation</label>
                <input
                  type="text"
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-700"
                />
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setActiveTab('preview')}
                  className="w-full py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded"
                >
                  Generate & View Certificate
                </button>
              </div>
            </div>
          ) : (
            /* Certificate Preview */
            <div className="bg-white p-6 sm:p-8 rounded-lg border-2 border-slate-200 text-slate-800 space-y-5 print:border-none print:p-0">
              {/* Certificate Header */}
              <div className="text-center pb-4 border-b border-slate-200">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <img
                    src="/al-aqdas-logo.png"
                    alt="Logo"
                    className="w-12 h-12 object-contain"
                  />
                  <div className="text-left">
                    <h2 className="text-base font-bold text-slate-900 leading-tight">
                      AL AQDAS WELFARE ASSOCIATION
                    </h2>
                    <p className="text-[11px] text-slate-500">
                      Regd. under the Bombay Public Trust Act 1950 • Regn No. F-46725 (BOM)
                    </p>
                  </div>
                </div>

                <p className="text-[11px] text-slate-500 max-w-md mx-auto">
                  Registered Office: 1, Lidhar Shah Rd, Dana Bandar, Mandvi, Mumbai, Maharashtra 400009
                </p>

                <div className="mt-3 inline-block px-3 py-1 bg-emerald-50 text-emerald-900 font-bold text-xs uppercase tracking-wider rounded border border-emerald-200">
                  Form 10BE / Section 80G Official Tax Exemption Receipt
                </div>
              </div>

              {/* Receipt Metadata */}
              <div className="grid grid-cols-2 gap-4 text-xs py-2 bg-slate-50 p-3 rounded border border-slate-200">
                <div>
                  <p className="text-slate-500">Certificate No:</p>
                  <div className="flex items-center gap-1.5">
                    <p className="font-mono font-bold text-slate-900">{receiptNumber}</p>
                    <button
                      type="button"
                      onClick={handleCopyReceiptId}
                      className="text-slate-400 hover:text-slate-700"
                    >
                      {isCopied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-slate-500">Date of Issue:</p>
                  <p className="font-bold text-slate-900">{currentDate}</p>
                </div>
                <div>
                  <p className="text-slate-500">Trust PAN:</p>
                  <p className="font-mono font-bold text-slate-900">{STATUTORY_CREDENTIALS.pan}</p>
                </div>
                <div>
                  <p className="text-slate-500">80G Registration No:</p>
                  <p className="font-mono font-bold text-slate-900">AAETA8194EF20214</p>
                </div>
              </div>

              {/* Donor Details Table */}
              <div className="border border-slate-200 rounded overflow-hidden text-xs">
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="border-b border-slate-200 bg-slate-50">
                      <td className="p-2.5 font-bold text-slate-700 w-1/3">Donor Name:</td>
                      <td className="p-2.5 font-semibold text-slate-900">{donorName}</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="p-2.5 font-bold text-slate-700">Donor PAN:</td>
                      <td className="p-2.5 font-mono font-bold text-slate-900">{donorPan}</td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-slate-50">
                      <td className="p-2.5 font-bold text-slate-700">Donation Amount:</td>
                      <td className="p-2.5 font-bold text-emerald-800 text-sm">
                        ₹{amount.toLocaleString('en-IN')} (Rupees {amount.toLocaleString('en-IN')} Only)
                      </td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="p-2.5 font-bold text-slate-700">Payment Mode:</td>
                      <td className="p-2.5 text-slate-900">UPI / Electronic Banking Transfer</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-2.5 font-bold text-slate-700">Purpose / Head:</td>
                      <td className="p-2.5 text-slate-900">{purpose}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Statutory Declarations */}
              <div className="text-[11px] text-slate-500 leading-relaxed space-y-1 pt-2">
                <p>
                  • Certified that this donation qualifies for deduction under Section 80G(5)(vi) of the Income Tax Act, 1961.
                </p>
                <p>
                  • No goods or services of value were provided in consideration for this contribution.
                </p>
              </div>

              {/* Signature Block */}
              <div className="pt-6 border-t border-slate-200 flex items-end justify-between text-xs">
                <div>
                  <p className="font-bold text-slate-900">Mohammed Hasham Shaikh</p>
                  <p className="text-slate-500">General Secretary / Authorized Signatory</p>
                  <p className="text-[10px] text-slate-400">Al Aqdas Welfare Association</p>
                </div>

                <div className="w-20 h-20 border border-slate-300 rounded flex items-center justify-center text-[10px] text-slate-400 text-center p-1">
                  [Official Seal]
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

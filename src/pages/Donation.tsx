import PageHeader from '../components/PageHeader'
import DonationWidget from '../components/DonationWidget'

export default function Donation() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <PageHeader
        title="Make a Donation"
        bgImage="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1200&h=300&fit=crop"
      />

      <section className="max-w-[1000px] mx-auto px-4 mt-12 sm:mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Interactive Money Widget Column */}
          <div className="lg:col-span-6">
            <DonationWidget theme="light" defaultAmount="500" />
          </div>

          {/* Direct BharatQR / Banking Details Column */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 relative overflow-hidden flex flex-col items-center justify-center text-center">
              <h2 className="text-2xl font-bold text-slate-800 mb-1 relative z-10">Scan BharatQR</h2>
              <p className="text-xs font-semibold text-emerald-600 mb-6 uppercase tracking-wider relative z-10">
                Static Merchant Code
              </p>

              <div className="relative z-10 bg-slate-50 p-4 rounded-2xl border border-slate-100 mb-6 shadow-sm">
                <img
                  src="/donation-qr.jpg"
                  alt="BharatQR Donation Code"
                  className="w-full max-w-[240px] rounded-xl mx-auto mix-blend-multiply"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 w-full relative z-10 text-left mb-6">
                <div className="flex justify-between items-center text-xs bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-100">
                  <span className="text-slate-500 font-bold uppercase tracking-wider text-[10px]">MID</span>
                  <span className="font-mono font-semibold text-slate-800">037326002330038</span>
                </div>
                <div className="flex justify-between items-center text-xs bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-100">
                  <span className="text-slate-500 font-bold uppercase tracking-wider text-[10px]">TID</span>
                  <span className="font-mono font-semibold text-slate-800">85979842</span>
                </div>
              </div>

              {/* Card Identifiers */}
              <div className="w-full relative z-10 text-left bg-slate-50 rounded-xl border border-slate-100 p-4">
                <h3 className="text-xs font-bold text-slate-700 mb-3 uppercase tracking-wider border-b border-slate-200 pb-1.5">
                  Card Identifiers
                </h3>
                <div className="grid grid-cols-3 gap-3 text-center sm:text-left">
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Masterpass</p>
                    <p className="font-mono font-semibold text-slate-800 text-xs">512260008173864</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">RuPay</p>
                    <p className="font-mono font-semibold text-slate-800 text-xs">6100020081738662</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">mVISA</p>
                    <p className="font-mono font-semibold text-slate-800 text-xs">4604901081738651</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

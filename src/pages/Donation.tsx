import PageHeader from '../components/PageHeader'

export default function Donation() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <PageHeader
        title="Make a Donation"
        bgImage="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1200&h=300&fit=crop"
      />

      <section className="max-w-[800px] mx-auto px-4 mt-16">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 relative overflow-hidden flex flex-col items-center justify-center text-center">
          <div className="absolute top-0 left-0 w-48 h-48 bg-emerald-50 rounded-full blur-3xl -ml-20 -mt-20 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-emerald-50 rounded-full blur-3xl -mr-20 -mb-20 pointer-events-none" />
          
          <h2 className="text-3xl font-bold text-slate-800 mb-2 relative z-10">Scan to Donate</h2>
          <p className="text-base font-medium text-emerald-600 mb-10 relative z-10">BharatQR / UPI / Cards</p>

          <div className="relative z-10 bg-slate-50 p-6 rounded-3xl border border-slate-100 mb-10 shadow-sm">
            <img 
              src="/donation-qr.jpg" 
              alt="BharatQR Donation Code" 
              className="w-full max-w-[320px] rounded-2xl mx-auto mix-blend-multiply"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full relative z-10 text-left mb-8">
            <div className="flex justify-between items-center text-sm bg-slate-50 px-5 py-3 rounded-xl border border-slate-100">
              <span className="text-slate-500 font-bold uppercase tracking-wider text-xs">MID</span>
              <span className="font-mono font-semibold text-slate-800">037326002330038</span>
            </div>
            <div className="flex justify-between items-center text-sm bg-slate-50 px-5 py-3 rounded-xl border border-slate-100">
              <span className="text-slate-500 font-bold uppercase tracking-wider text-xs">TID</span>
              <span className="font-mono font-semibold text-slate-800">85979842</span>
            </div>
          </div>

          {/* New Details: Masterpass, RuPay, mVISA */}
          <div className="w-full relative z-10 text-left bg-slate-50 rounded-2xl border border-slate-100 p-6 mb-8">
            <h3 className="text-sm font-bold text-slate-800 mb-4 uppercase tracking-wider border-b border-slate-200 pb-2">Card Identifiers</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Masterpass</p>
                <p className="font-mono font-semibold text-slate-800 text-sm">512260008173864</p>
              </div>

              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">RuPay</p>
                <p className="font-mono font-semibold text-slate-800 text-sm">6100020081738662</p>
              </div>

              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">mVISA</p>
                <p className="font-mono font-semibold text-slate-800 text-sm">4604901081738651</p>
              </div>

            </div>
          </div>

          <div className="pt-6 border-t border-slate-100 w-full relative z-10">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Helpdesk</p>
            <p className="text-sm font-medium text-slate-800">1860 233 2332 &nbsp;|&nbsp; 022 40426060</p>
          </div>
        </div>
      </section>
    </div>
  )
}

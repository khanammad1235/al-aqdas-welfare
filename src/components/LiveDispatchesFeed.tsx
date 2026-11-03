import { MapPin, CheckCircle2, Clock } from 'lucide-react'
import { FIELD_DISPATCHES } from '../data/ngoData'

export default function LiveDispatchesFeed() {
  return (
    <section className="py-14 sm:py-18 bg-white border-b border-slate-200">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded">
              Verified Ground Work
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-2">
              Recent Field Dispatches & Relief Logs
            </h2>
            <p className="text-slate-600 text-sm max-w-2xl mt-1 leading-relaxed">
              Real-time updates from our ground coordinators across distribution centers, schools, and medical camps in Mumbai.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-600 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            <span>4 Active Mumbai Depots Operating Daily</span>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FIELD_DISPATCHES.map((dispatch) => (
            <div
              key={dispatch.id}
              className="bg-white rounded-lg border border-slate-200 p-5 shadow-xs hover:border-slate-300 transition-colors flex flex-col justify-between"
            >
              <div>
                {/* Meta Top Line */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-emerald-50 text-emerald-800 border border-emerald-200 uppercase tracking-wider flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" /> {dispatch.status}
                    </span>
                    <span className="text-xs text-slate-500">
                      {dispatch.timestamp}
                    </span>
                  </div>
                  <span className="text-xs text-slate-400">
                    ID: {dispatch.id}
                  </span>
                </div>

                {/* Dispatch Title & Image */}
                <div className="flex flex-col sm:flex-row gap-4 items-start mb-4">
                  <div className="w-full sm:w-32 h-24 rounded-lg overflow-hidden bg-slate-100 shrink-0">
                    <img
                      src={dispatch.image}
                      alt={dispatch.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 leading-snug">
                      {dispatch.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{dispatch.location}</span>
                    </div>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                      {dispatch.summary}
                    </p>
                  </div>
                </div>
              </div>

              {/* Dispatch Footer */}
              <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                  {dispatch.metric}
                </span>
                <span className="text-slate-500 text-[11px]">
                  Coordinator: <strong className="text-slate-700">{dispatch.coordinator}</strong>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

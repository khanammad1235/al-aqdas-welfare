import { useState } from 'react'
import {
  Radio, MapPin, CheckCircle2, Clock, User, ShieldCheck,
  ExternalLink, ArrowUpRight, Activity
} from 'lucide-react'
import { FIELD_DISPATCHES } from '../data/ngoData'

export default function LiveDispatchesFeed() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'verified'>('all')

  return (
    <section className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <Activity className="w-3.5 h-3.5" /> Field Operations Telemetry
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-white tracking-tight">
              Live Field Dispatches & Verified Logs
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl mt-2 leading-relaxed">
              Every aid drive, medical camp, and student distribution logged in real-time with
              exact GPS coordinates, on-ground coordinator sign-offs, and beneficiary totals.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-slate-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>4 Active Mumbai Depots Online</span>
            </div>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FIELD_DISPATCHES.map((dispatch) => (
            <div
              key={dispatch.id}
              className="bg-slate-850/80 rounded-2xl border border-slate-800 hover:border-slate-700 bg-slate-800/40 p-5 sm:p-6 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Meta Top Line */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 text-[10px] font-bold rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 uppercase tracking-wider flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> {dispatch.status}
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      {dispatch.timestamp}
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">
                    ID: {dispatch.id}
                  </span>
                </div>

                {/* Dispatch Title & Image */}
                <div className="flex flex-col sm:flex-row gap-4 items-start mb-4">
                  <div className="w-full sm:w-32 h-24 rounded-xl overflow-hidden bg-slate-700 shrink-0">
                    <img
                      src={dispatch.image}
                      alt={dispatch.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {dispatch.title}
                    </h3>
                    <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                      {dispatch.summary}
                    </p>
                  </div>
                </div>

                {/* Metric Highlight Box */}
                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-medium">Delivered Metric</span>
                  <span className="text-xs font-bold font-mono text-emerald-400">{dispatch.metric}</span>
                </div>
              </div>

              {/* Footer Details */}
              <div className="mt-4 pt-3.5 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  <span className="truncate max-w-[200px]">{dispatch.location}</span>
                </span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <User className="w-3.5 h-3.5 text-slate-400" />
                  <span className="text-[11px]">{dispatch.coordinator}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


import { useState } from 'react'
import {
  Users, Calendar, Clock, MapPin, CheckCircle2,
  ArrowRight, Sparkles, Building2, Shield, HeartHandshake
} from 'lucide-react'
import { UPCOMING_SHIFTS, type VolunteerShift } from '../data/ngoData'

export default function VolunteerPortalSection() {
  const [selectedShift, setSelectedShift] = useState<VolunteerShift | null>(null)
  const [rsvpSuccess, setRsvpSuccess] = useState(false)
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', role: '' })

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setRsvpSuccess(true)
    setTimeout(() => {
      setRsvpSuccess(false)
      setSelectedShift(null)
      setFormData({ name: '', phone: '', email: '', role: '' })
    }, 2500)
  }

  return (
    <section className="py-16 sm:py-20 bg-white" id="volunteer-portal">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-900 border border-blue-200 mb-3">
              <Users className="w-3.5 h-3.5 text-blue-600" /> Ground Force & Corporate CSR Matching
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-900 tracking-tight">
              Join The Ground Operations Force
            </h2>
            <p className="text-slate-600 text-sm max-w-2xl mt-2 leading-relaxed">
              We coordinate over 1,000 active volunteers across community kitchens, medical camps,
              and classrooms. Select a shift, register your attendance, and log certified humanitarian service hours.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3 py-1.5 text-xs font-semibold rounded-xl bg-slate-100 text-slate-700 border border-slate-200">
              1,000+ Registered Volunteers
            </span>
          </div>
        </div>

        {/* Shifts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {UPCOMING_SHIFTS.map((shift) => {
            const slotsLeft = shift.slotsTotal - shift.slotsFilled
            const fillPercentage = Math.round((shift.slotsFilled / shift.slotsTotal) * 100)

            return (
              <div
                key={shift.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 text-[10px] font-bold rounded-full bg-slate-100 text-slate-800 uppercase tracking-wider">
                      {shift.category}
                    </span>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      {slotsLeft} slots remaining
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-slate-900 leading-snug">
                    {shift.title}
                  </h3>

                  <div className="space-y-2 mt-4 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{shift.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{shift.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span className="truncate">{shift.location}</span>
                    </div>
                  </div>

                  {/* Requirements Pills */}
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                      Requirements
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {shift.requirements.map((req) => (
                        <span key={req} className="px-2 py-0.5 text-[10px] font-medium bg-slate-50 text-slate-600 rounded-md border border-slate-100">
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  {/* Slots Progress Bar */}
                  <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1.5">
                    <span>Crew Roster</span>
                    <span className="font-mono font-semibold">{shift.slotsFilled}/{shift.slotsTotal} filled</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mb-4">
                    <div className="h-full bg-slate-900 rounded-full" style={{ width: `${fillPercentage}%` }} />
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedShift(shift)}
                    className="w-full py-2.5 px-4 bg-slate-900 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5"
                  >
                    <HeartHandshake className="w-3.5 h-3.5" />
                    RSVP for This Shift
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Corporate CSR Matching Banner */}
        <div className="mt-10 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shrink-0">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                Corporate CSR & Employee Volunteering Partnerships
              </h4>
              <p className="text-xs text-slate-300 mt-1 max-w-xl">
                Al Aqdas is eligible for Schedule VII Corporate Social Responsibility (CSR) funding.
                We provide corporate impact dashboards, audited compliance reports, and organized group volunteering drives.
              </p>
            </div>
          </div>
          <a
            href="mailto:alaqdaswelfare@gmail.com?subject=Corporate%20CSR%20Partnership"
            className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl transition-all whitespace-nowrap"
          >
            Inquire for Corporate CSR
          </a>
        </div>
      </div>

      {/* RSVP Modal */}
      {selectedShift && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200">
            {rsvpSuccess ? (
              <div className="text-center py-6">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">Shift Confirmed!</h4>
                <p className="text-xs text-slate-600 mt-1">
                  You are registered for <strong>{selectedShift.title}</strong>. A confirmation has been logged with field lead {selectedShift.lead}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleRsvpSubmit}>
                <h4 className="text-base font-bold text-slate-900 mb-1">
                  Volunteer Shift Registration
                </h4>
                <p className="text-xs text-slate-500 mb-4">{selectedShift.title} · {selectedShift.date}</p>

                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Full Name</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ayesha Patel"
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">WhatsApp / Phone Number</label>
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Email Address</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ayesha@example.com"
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div className="mt-5 flex gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedShift(null)}
                    className="flex-1 py-2 text-xs font-semibold text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2 text-xs font-bold text-white bg-emerald-600 rounded-lg hover:bg-emerald-700"
                  >
                    Confirm Attendance
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  )
}

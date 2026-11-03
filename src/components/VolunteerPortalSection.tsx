import { useState } from 'react'
import { Users, Calendar, Clock, MapPin, CheckCircle2, ArrowRight } from 'lucide-react'
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
    <section className="py-14 sm:py-18 bg-slate-50 border-b border-slate-200" id="volunteer-portal">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded">
              Get Involved
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-2">
              Volunteer With Our Mumbai Ground Team
            </h2>
            <p className="text-slate-600 text-sm max-w-2xl mt-1 leading-relaxed">
              Join dedicated community volunteers across our food distribution drives, weekend digital classes, and medical camps.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1.5 text-xs font-semibold rounded bg-white text-slate-700 border border-slate-200 shadow-2xs">
              1,000+ Active Volunteers
            </span>
          </div>
        </div>

        {/* Shifts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {UPCOMING_SHIFTS.map((shift) => {
            const slotsLeft = shift.slotsTotal - shift.slotsFilled

            return (
              <div
                key={shift.id}
                className="bg-white rounded-lg border border-slate-200 p-5 shadow-xs hover:border-slate-300 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-slate-100 text-slate-700 uppercase tracking-wider">
                      {shift.category}
                    </span>
                    <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                      {slotsLeft} slots remaining
                    </span>
                  </div>

                  <h3 className="font-bold text-sm text-slate-900 leading-snug">
                    {shift.title}
                  </h3>

                  <div className="space-y-1.5 mt-3 text-xs text-slate-600">
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

                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                      Requirements:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {shift.requirements.map((req, i) => (
                        <span key={i} className="text-[11px] bg-slate-50 text-slate-600 px-2 py-0.5 rounded border border-slate-200">
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500">
                    Lead: <strong className="text-slate-700">{shift.lead}</strong>
                  </span>

                  <button
                    type="button"
                    onClick={() => setSelectedShift(shift)}
                    className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded transition-colors"
                  >
                    Register Shift
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* RSVP Modal */}
        {selectedShift && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
            <div className="bg-white rounded-xl shadow-xl border border-slate-200 p-6 max-w-md w-full">
              <h3 className="text-base font-bold text-slate-900 mb-1">
                Volunteer Registration
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Shift: <strong>{selectedShift.title}</strong>
              </p>

              {rsvpSuccess ? (
                <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200 text-center">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <p className="text-sm font-bold text-emerald-900">Shift Confirmed!</p>
                  <p className="text-xs text-emerald-700 mt-1">Our team lead will reach out to you via WhatsApp before the drive.</p>
                </div>
              ) : (
                <form onSubmit={handleRsvpSubmit} className="space-y-3">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">Full Name</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Aamir Khan"
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:ring-1 focus:ring-emerald-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">WhatsApp / Phone Number</label>
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:ring-1 focus:ring-emerald-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">Email Address</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:ring-1 focus:ring-emerald-600 focus:outline-none"
                    />
                  </div>

                  <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => setSelectedShift(null)}
                      className="px-3.5 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded"
                    >
                      Confirm Attendance
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

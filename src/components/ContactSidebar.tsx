import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactSidebar() {
  return (
    <div className="w-full lg:w-[35%]">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 sticky top-24">
        <div className="flex items-center gap-3 mb-8">
          <h2 className="text-xl font-bold text-slate-800">Contact Us</h2>
          <div className="flex-1 h-px bg-slate-100" />
        </div>

        <div className="space-y-6">
          {/* Address */}
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-800 mb-1">Address</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                1, Lidhar Shah Rd, Dana Bandar, Mandvi,<br />
                Mumbai, Maharashtra 400009
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-800 mb-1">Phone</p>
              <p className="text-sm text-slate-600">
                +91 97027 94786<br />
                022 2374 9786
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-800 mb-1">Email</p>
              <p className="text-sm text-slate-600 break-all">
                alaqdaswelfare@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-8 pt-6 border-t border-slate-100">
          <a 
            href="/contact"
            className="block w-full py-3 text-center bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl transition-colors shadow-sm hover:shadow-emerald-500/25"
          >
            Send us a Message
          </a>
        </div>
      </div>
    </div>
  )
}

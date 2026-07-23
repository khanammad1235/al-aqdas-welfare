import PageHeader from '../components/PageHeader'
import GoogleMap from '../components/GoogleMap'
import { Building, Globe, Mail, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <PageHeader
        title="Contact Us"
        bgImage="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&h=300&fit=crop"
      />

      <section className="max-w-[1170px] mx-auto px-4 mt-16">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Contact Details Card */}
          <div className="w-full lg:w-[40%]">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100 h-full relative overflow-hidden">
              {/* Decorative gradient blur */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />
              
              <h2 className="text-2xl font-bold text-slate-800 mb-8 relative z-10 flex items-center gap-3">
                <div className="w-2 h-8 bg-emerald-500 rounded-full" />
                Al Aqdas Welfare
              </h2>

              <div className="space-y-8 relative z-10">
                {/* Address */}
                <div className="flex gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-emerald-50 transition-colors">
                    <Building className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800 mb-1">Head Office</p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      1, Lidhar Shah Rd, Dana Bandar,<br />
                      Mandvi, Mumbai,<br />
                      Maharashtra 400009
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-emerald-50 transition-colors">
                    <Phone className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800 mb-1">Call Us</p>
                    <div className="flex flex-col gap-1">
                      <a href="tel:+919702794786" className="text-sm text-slate-600 hover:text-emerald-600 transition-colors">
                        +91 97027 94786
                      </a>
                      <a href="tel:02223749786" className="text-sm text-slate-600 hover:text-emerald-600 transition-colors">
                        022 2374 9786
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-emerald-50 transition-colors">
                    <Mail className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800 mb-1">Email Us</p>
                    <div className="flex flex-col gap-1">
                      <a href="mailto:aawamiwelfare@gmail.com" className="text-sm text-slate-600 hover:text-emerald-600 transition-colors break-all">
                        aawamiwelfare@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Website */}
                <div className="flex gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-emerald-50 transition-colors">
                    <Globe className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800 mb-1">Website</p>
                    <a href="https://www.awamiwelfare.co.in" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 hover:text-emerald-600 transition-colors">
                      www.awamiwelfare.co.in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="w-full lg:w-[60%]">
            <div className="bg-white rounded-3xl p-4 shadow-sm border border-slate-100 h-full min-h-[400px]">
              <div className="w-full h-full rounded-2xl overflow-hidden">
                <GoogleMap />
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

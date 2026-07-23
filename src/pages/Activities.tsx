import PageHeader from '../components/PageHeader'
import ContactSidebar from '../components/ContactSidebar'
import { CheckCircle2, GraduationCap } from 'lucide-react'

const activities = [
  'A.R. Siddique Al Aqdas English Schools',
  'Al Aqdas Urdu Schools',
  'Al Aqdas Junior College',
  'Computer Center (IT)',
  'School Adoption',
]

const bandraSchools = [
  'Bazaar Road Municipal Urdu School No.1',
  'Bazaar Road Municipal Urdu School No.2',
  'Bunderwadi Municipal Urdu School',
]

const schoolPhotos = [
  {
    title: 'AL AQDAS URDU HIGH SCHOOL',
    desc: 'The years which have passed have seen many landmarks in the history of AL AQDAS. On the basis of our performance and the support received from our M.P. Late Shri SUNIL DUTT and M.L.A. Shri BABA SIDDIQUE, "AL AQDAS" was allowed to expand its educational programme to Secondary and Higher Secondary School level by starting Std. VIII-IX-X & XII. This is a very important step in providing valuable education to our under-privileged children.',
  },
  {
    title: 'A. R. SIDDIQUE AL AQDAS ENGLISH SCHOOL (Ist to VIIIth)',
    desc: 'AL AQDAS has started an English Medium School from the academic year 2006, for the children of the vicinity. The school is the need of the hour for the children who fail to secure admission in English Schools for various reasons such as higher educational cost, non availability of seats and heavy donation. This was serious drawback which cried for an urgent remedy.',
  },
  {
    title: 'AL AQDAS JUNIOR COLLEGE OF ARTS & COMMERCE',
    desc: 'By the grace of Allah SWT AL AQDAS had achieved success in the academic year 2005-06 in starting Al Aqdas Junior College of Arts & Commerce. AL AQDAS cater especially for the deprived and poor students to complete their education. Looking at the track record in the academic year achieved by the previous students, AL AQDAS anticipate 100% results in forthcoming years.',
  },
]

export default function Activities() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader
        title="Our Activities"
        bgImage="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1200&h=300&fit=crop"
      />

      <section className="max-w-[1170px] mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="w-full lg:w-[65%] space-y-12">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Our Activities */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  </div>
                  Core Programs
                </h2>
                <ul className="space-y-4">
                  {activities.map((activity, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-slate-600 group">
                      <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 group-hover:bg-emerald-100 transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      </div>
                      <span className="mt-0.5 leading-relaxed font-medium">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bandra West */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-blue-600" />
                  </div>
                  Bandra (West) Focus
                </h3>
                <ul className="space-y-4">
                  {bandraSchools.map((school, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-slate-600 group">
                      <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      </div>
                      <span className="mt-0.5 leading-relaxed font-medium">{school}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* School Detail Cards Grid */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 pl-2">Educational Institutions</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {schoolPhotos.map((photo, index) => (
                  <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-all flex flex-col">
                    <div className="bg-slate-900 p-4 min-h-[80px] flex items-center justify-center text-center">
                      <h4 className="text-sm font-bold text-white tracking-wide leading-tight">{photo.title}</h4>
                    </div>
                    <div className="p-5 flex-1 bg-slate-50/50">
                      <p className="text-xs text-slate-600 leading-relaxed">{photo.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <ContactSidebar />
        </div>
      </section>
    </div>
  )
}

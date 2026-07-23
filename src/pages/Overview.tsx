import PageHeader from '../components/PageHeader'
import ContactSidebar from '../components/ContactSidebar'
import { Users } from 'lucide-react'

const committeeMembers = [
  { sr: '01', name: 'Mr. Mohammed Saboo Siddiqe Siddi', designation: 'President' },
  { sr: '02', name: 'Mr. Mohammed Hasham Shaikh (Raju Bhai)', designation: 'Secretary' },
  { sr: '03', name: 'Mr. Mohammed Kashif Mohammed Saboo', designation: 'Treasurer' },
  { sr: '04', name: 'Mr. Abrar Shaikhdare', designation: 'Member' },
  { sr: '05', name: 'Mrs. Sabina Tambe', designation: 'Member' },
  { sr: '06', name: 'Mrs. Kaneez Fatima M. S.', designation: 'Member' },
  { sr: '07', name: 'Mr. Zeeya Mohammed Hasham Shaikh', designation: 'Member' },
]

export default function Overview() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader
        title="Organization Overview"
        bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=300&fit=crop"
      />

      <section className="max-w-[1170px] mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Content - Committee List */}
          <div className="w-full lg:w-[65%]">
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100">
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-800">Executive Committee Members</h2>
                  <p className="text-sm font-medium text-emerald-600">Al Aqdas Welfare Association</p>
                </div>
              </div>

              <div className="grid gap-3">
                {committeeMembers.map((member) => {
                  const isLeader = member.designation.includes('PRESIDENT') || member.designation.includes('SEC') || member.designation.includes('TREASURER')
                  return (
                    <div 
                      key={member.sr} 
                      className={`flex items-center gap-4 p-4 rounded-2xl border transition-colors ${
                        isLeader 
                          ? 'bg-slate-50/80 border-slate-200' 
                          : 'bg-white border-slate-100 hover:border-emerald-100'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-bold text-sm ${
                        isLeader ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'
                      }`}>
                        {member.sr}
                      </div>
                      
                      <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
                        <p className={`font-semibold tracking-wide text-sm ${isLeader ? 'text-slate-900' : 'text-slate-700'}`}>
                          {member.name}
                        </p>
                        <span className={`text-xs px-3 py-1 rounded-full font-medium w-fit ${
                          isLeader 
                            ? 'bg-emerald-500 text-white' 
                            : 'bg-slate-100 text-slate-600'
                        }`}>
                          {member.designation}
                        </span>
                      </div>
                    </div>
                  )
                })}
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

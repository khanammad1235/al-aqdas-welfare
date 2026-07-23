import { Heart, Users, GraduationCap, UtensilsCrossed, CheckCircle2, ChevronRight, BookOpen, HeartPulse, Droplets, ShieldAlert } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const stats = [
  { icon: Users, value: '5,000+', label: 'Families Supported' },
  { icon: Users, value: '1,000+', label: 'Volunteers' },
  { icon: GraduationCap, value: '500+', label: 'Students Helped' },
  { icon: UtensilsCrossed, value: '20,000+', label: 'Meals Distributed' },
  { icon: CheckCircle2, value: '50+', label: 'Projects Completed' },
]

const programs = [
  { 
    icon: BookOpen, 
    title: 'Education', 
    desc: 'We provide quality education and school supplies to underprivileged children.'
  },
  { 
    icon: HeartPulse, 
    title: 'Healthcare', 
    desc: 'Free medical camps, health check-ups and medicines for those in need.'
  },
  { 
    icon: UtensilsCrossed, 
    title: 'Food Aid', 
    desc: 'We distribute food kits and meals to the hungry and needy families.'
  },
  { 
    icon: Users, 
    title: 'Orphan Support', 
    desc: 'Supporting orphans with education, care, and a brighter future.'
  },
  { 
    icon: Droplets, 
    title: 'Community Development', 
    desc: 'Working for clean water, hygiene, and community empowerment.'
  },
  { 
    icon: ShieldAlert, 
    title: 'Disaster Relief', 
    desc: 'Immediate aid and relief support during natural disasters.'
  },
]



export default function Home() {
  const [donationType, setDonationType] = useState<'ONE TIME' | 'MONTHLY'>('ONE TIME')
  const [amount, setAmount] = useState<string>('500')

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative w-full bg-background overflow-hidden flex items-center pt-10 pb-20 lg:py-0 lg:min-h-[650px]">
        
        {/* Background Curve styling */}
        <div className="absolute right-0 top-0 w-full lg:w-[60%] h-full bg-primary z-0 rounded-l-[100px] lg:rounded-l-[200px] hidden md:block" />
        
        {/* Mobile Background Split */}
        <div className="absolute inset-0 bg-primary/5 md:hidden z-0" />
        
        <div className="max-w-[1400px] mx-auto px-4 w-full relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Text Content */}
          <div className="w-full lg:w-[45%] xl:w-[40%] flex flex-col pt-8 lg:pt-0">
            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-primary font-serif leading-[1.1] mb-6">
              Serving Humanity<br/>
              <span className="text-secondary font-normal">with Compassion</span><br/>
              <span className="text-accent">& Dignity</span>
            </h1>
            
            <div className="w-16 h-0.5 bg-accent mb-6" />
            
            <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-md">
              We are committed to uplifting lives through education, healthcare, food aid, orphan support and community development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/donation" 
                className="px-8 py-3.5 bg-primary hover:bg-secondary text-white font-bold tracking-wide rounded transition-colors flex items-center justify-center gap-2"
              >
                <Heart className="w-4 h-4 fill-current" />
                DONATE NOW
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-3.5 bg-white border border-primary/20 hover:border-primary text-primary font-bold tracking-wide rounded transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <Users className="w-4 h-4" />
                BECOME A VOLUNTEER
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full lg:w-[55%] xl:w-[60%] relative">
            {/* Hanging Lanterns decoration (purely visual) */}
            <div className="absolute -top-12 left-10 w-6 h-20 border-l border-white/20 hidden lg:block" />
            <div className="absolute -top-12 right-20 w-6 h-32 border-l border-white/20 hidden lg:block" />

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 aspect-[4/3] lg:aspect-auto lg:h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop" 
                alt="Volunteers helping children" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP SECTION */}
      <section className="bg-primary text-white relative z-20 border-t-4 border-accent">
        <div className="max-w-[1400px] mx-auto px-4 py-8 md:py-12">
          <div className="text-center mb-10">
            <p className="font-serif text-lg md:text-xl text-accent/90 italic">
              "And whoever saves a life, it is as if he had saved all of mankind."
            </p>
            <p className="text-sm font-semibold tracking-wide text-white/60 mt-2">(Quran 5:32)</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 divide-x divide-white/10">
            {stats.map((stat, idx) => {
              const Icon = stat.icon
              return (
                <div key={idx} className="flex flex-col items-center justify-center text-center px-4 first:border-l-0">
                  <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold font-serif mb-1">{stat.value}</h3>
                  <p className="text-xs tracking-wider text-white/80 uppercase">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* OUR PROGRAMS SECTION */}
      <section className="bg-background py-20 relative">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%230b3b2c\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        
        <div className="max-w-[1200px] mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <p className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-2">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary">Our Programs</h2>
            <div className="w-16 h-0.5 bg-accent mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((prog, idx) => {
              const Icon = prog.icon
              return (
                <div key={idx} className="bg-white border border-slate-100 rounded p-8 text-center hover:shadow-soft transition-shadow group flex flex-col h-full">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                    <Icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold font-serif text-primary mb-3">{prog.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-1">{prog.desc}</p>
                  <Link to="/activities" className="inline-flex items-center justify-center gap-2 text-xs font-bold text-accent tracking-wide hover:text-primary transition-colors">
                    Learn More <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SUPPORT OUR CAUSES SECTION (Donation Widget) */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-primary to-primary pointer-events-none" />
        
        <div className="max-w-[1200px] mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            
            {/* Causes Left */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold font-serif mb-2">Support Our Causes</h2>
              <p className="text-sm text-white/70 mb-10">Your donation can bring hope and change lives.</p>
              
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between text-sm font-semibold mb-2">
                    <span>Ramadan Food Distribution</span>
                    <span className="text-accent">49%</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-accent w-[49%] h-full rounded-full" />
                  </div>
                  <div className="flex justify-between text-xs text-white/50 mt-2">
                    <span>₹245,000 Raised</span>
                    <span>₹500,000 Goal</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm font-semibold mb-2">
                    <span>Education for Needy Children</span>
                    <span className="text-accent">45%</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-accent w-[45%] h-full rounded-full" />
                  </div>
                  <div className="flex justify-between text-xs text-white/50 mt-2">
                    <span>₹180,000 Raised</span>
                    <span>₹400,000 Goal</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Visual */}
            <div className="lg:col-span-1 flex justify-center hidden lg:flex relative">
               {/* A decorative arch background */}
               <div className="absolute inset-0 bg-secondary/50 rounded-t-full border-t-2 border-accent/30 scale-90 origin-bottom" />
               <div className="relative text-center z-10 pt-10">
                 <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-accent/20 mb-6">
                    <img src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400&h=400&fit=crop" alt="Growth" className="w-full h-full object-cover"/>
                 </div>
                 <p className="font-serif text-lg font-medium leading-snug">
                   Every act of kindness<br/>is a seed of reward.
                 </p>
                 <p className="text-accent font-bold mt-2">Donate Now!</p>
               </div>
            </div>

            {/* Donation Widget Right */}
            <div className="lg:col-span-1">
              <div className="bg-secondary/40 border border-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-serif text-center mb-6">Make a Donation</h3>
                
                {/* Tabs */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  <button 
                    onClick={() => setDonationType('ONE TIME')}
                    className={`${donationType === 'ONE TIME' ? 'bg-accent text-white' : 'bg-white/5 text-white/50 border border-white/10 hover:bg-white/10'} py-2 text-sm font-bold rounded transition-colors`}
                  >
                    ONE TIME
                  </button>
                  <button 
                    onClick={() => setDonationType('MONTHLY')}
                    className={`${donationType === 'MONTHLY' ? 'bg-accent text-white' : 'bg-white/5 text-white/50 border border-white/10 hover:bg-white/10'} py-2 text-sm font-bold rounded transition-colors`}
                  >
                    MONTHLY
                  </button>
                </div>

                {/* Amounts */}
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {['500', '1000', '2500', '5000'].map((val) => (
                    <button 
                      key={val}
                      onClick={() => setAmount(val)}
                      className={`${amount === val ? 'bg-accent text-white border-transparent' : 'bg-white/5 text-white/80 border border-white/10 hover:border-accent'} py-2 text-sm font-bold rounded transition-colors`}
                    >
                      ₹{parseInt(val).toLocaleString('en-IN')}
                    </button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div className="mb-6">
                  <input 
                    type="text" 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value.replace(/[^0-9]/g, ''))}
                    placeholder="Enter Amount (₹)" 
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-accent"
                  />
                </div>

                <Link to="/donation" className="w-full block text-center bg-accent hover:bg-accent/90 text-white font-bold py-3.5 rounded transition-colors shadow-sm mb-4">
                  <Heart className="w-4 h-4 inline-block mr-2 fill-current" />
                  DONATE NOW
                </Link>
                <p className="text-center text-xs text-white/50 flex items-center justify-center gap-1">
                  <ShieldAlert className="w-3 h-3 text-accent" /> Your donation is 100% secure.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

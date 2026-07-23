interface PageHeaderProps {
  title: string
  bgImage: string
}

export default function PageHeader({ title, bgImage }: PageHeaderProps) {
  return (
    <div className="relative w-full h-[250px] md:h-[300px] flex items-center justify-center overflow-hidden">
      {/* Background Image with parallax feel */}
      <div 
        className="absolute inset-0 bg-cover bg-center transform scale-105"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      
      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-slate-900/60 bg-gradient-to-t from-slate-900/80 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 drop-shadow-sm">
          {title}
        </h1>
        <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full" />
      </div>
    </div>
  )
}

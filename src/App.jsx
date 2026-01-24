import React from 'react'
import { Terminal, Shield, Activity, Database, ChevronRight } from 'lucide-react'

function App() {
  return (
    <div className="min-height-screen flex flex-col font-mono neural-weave">
      {/* Tactical Header */}
      <header className="border-b border-eve-gold/20 bg-eve-black/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-eve-gold flex items-center justify-center rounded-sm">
              <Shield className="text-black w-5 h-5" />
            </div>
            <span className="font-bold tracking-tighter text-xl">EVE-UID</span>
          </div>
          <nav className="hidden md:flex space-x-8 text-sm uppercase tracking-widest text-gray-400">
            <a href="#intel" className="hover:text-eve-gold transition-colors">Intelligence</a>
            <a href="#pulse" className="hover:text-eve-gold transition-colors">Operational Pulse</a>
            <a href="#docs" className="hover:text-eve-gold transition-colors">Archive</a>
          </nav>
          <button className="px-4 py-1.5 border border-eve-gold text-eve-gold text-xs uppercase hover:bg-eve-gold hover:text-black transition-all">
            Access Terminal
          </button>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-eve-blue/10 border border-eve-blue/20 rounded-full text-eve-blue text-[10px] uppercase tracking-[0.2em] mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-eve-blue opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-eve-blue"></span>
                </span>
                <span>System Status: Operational</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-6">
                UNIFIED <span className="text-eve-gold">INTELLIGENCE</span> FOR NEW EDEN
              </h1>
              <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed font-sans max-w-2xl">
                A military-grade decision support platform consolidating Market, Spatial, and Industrial telemetry into a single tactical interface.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="px-8 py-4 bg-white text-black font-bold uppercase text-sm hover:bg-eve-gold transition-colors flex items-center justify-center">
                  View Public Specs <ChevronRight className="ml-2 w-4 h-4" />
                </button>
                <button className="px-8 py-4 border border-white/20 text-white font-bold uppercase text-sm hover:bg-white/5 transition-colors">
                  GitHub Archive
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Intelligence Domains */}
        <section id="intel" className="py-24 bg-eve-gray/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Database, title: "SDE Authority", desc: "Local Static Data Export anchoring for zero-latency asset resolution." },
                { icon: Activity, title: "Market Signals", desc: "Heuristic price resolution and recursive Bill of Materials tracking." },
                { icon: Terminal, title: "Neural Mapping", desc: "Visualizing complex character dogma and spatial hierarchies." }
              ].map((feature, i) => (
                <div key={i} className="p-8 border border-white/5 bg-eve-black/50 hover:border-eve-gold/30 transition-all group">
                  <feature.icon className="w-10 h-10 text-eve-gold mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{feature.title}</h3>
                  <p className="text-gray-500 font-sans leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Operational Pulse (DevBlog Preview) */}
        <section id="pulse" className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold uppercase tracking-tighter mb-2">Operational Pulse</h2>
                <p className="text-gray-500 text-sm">Latest updates from the development core.</p>
              </div>
              <a href="/Dev_Blog.md" className="text-eve-gold text-xs uppercase tracking-widest hover:underline">Full Archive</a>
            </div>
            
            <div className="space-y-4">
              <div className="p-6 border border-white/5 bg-eve-black hover:bg-white/5 transition-colors cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-eve-gold text-xs">[2026-01-24]</span>
                  <span className="px-2 py-0.5 bg-eve-blue/20 text-eve-blue text-[8px] uppercase tracking-tighter">New Entry</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Tactical Reorganization Phase III</h3>
                <p className="text-gray-400 text-sm font-sans mb-4">Establishing the unified Public interface and separating core intelligence from public exposure...</p>
                <button className="text-white text-[10px] uppercase tracking-widest flex items-center">
                  Read Transverse <ChevronRight className="ml-1 w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-white/5 text-gray-600 text-[10px] uppercase tracking-[0.3em]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <span>&copy; 2026 EVE UNIFIED INTELLIGENCE</span>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span>EVE Online &copy; CCP Games</span>
            <span>Strategic Support Tool</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

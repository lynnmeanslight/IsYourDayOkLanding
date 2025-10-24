'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-100 z-50">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <Image src="/icons/IsYourDayOkfinal.png" alt="IsYourDayOk" width={32} height={32} className="w-8 h-8" />
            <span className="text-xl font-bold text-black">IsYourDayOk</span>
          </div>
          <div className="flex items-center gap-8">
            <a href="#features" className="hidden md:block text-gray-600 hover:text-blue-600 transition-colors text-sm">
              Features
            </a>
            <a href="#how-it-works" className="hidden md:block text-gray-600 hover:text-blue-600 transition-colors text-sm">
              How It Works
            </a>
            <a href="#tech" className="hidden md:block text-gray-600 hover:text-blue-600 transition-colors text-sm">
              Tech
            </a>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
              Launch App
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-32 pb-24">
        <div className="text-center space-y-8">
          <div className="inline-block">
            <span className="text-blue-600 text-sm font-medium border border-blue-600 px-4 py-1.5 rounded-full">
              Base Builder Hackathon 2025
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight text-black">
            Mental Health
            <br />
            <span className="text-blue-600">On-Chain</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Track your mood, journal daily, meditate, and earn NFT achievements.
            Built on Base with blockchain-verified streaks.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-base font-medium hover:bg-blue-700 transition-colors">
              Launch App →
            </button>
            <button className="bg-white text-black px-8 py-3 rounded-lg text-base font-medium border border-gray-200 hover:border-blue-600 transition-colors">
              View Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-16 border-t border-gray-100">
            <div className="text-center pt-8">
              <div className="text-4xl font-bold text-black">4</div>
              <div className="text-gray-500 text-sm mt-2">NFT Types</div>
            </div>
            <div className="text-center pt-8">
              <div className="text-4xl font-bold text-black">100%</div>
              <div className="text-gray-500 text-sm mt-2">On-Chain</div>
            </div>
            <div className="text-center pt-8">
              <div className="text-4xl font-bold text-blue-600">Base</div>
              <div className="text-gray-500 text-sm mt-2">L2 Network</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-3">Features</h2>
            <p className="text-gray-600">Essential tools for your mental health journey</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-white p-8 border border-gray-200 hover:border-blue-600 transition-colors">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6 p-2">
                <Image src="/emojis/happy.png" alt="Mood" width={48} height={48} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Mood Tracking</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Log daily emotions and visualize patterns. Earn 10 points per entry on Base.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 border border-gray-200 hover:border-blue-600 transition-colors">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6 p-2">
                <Image src="/icons/journal.png" alt="Journal" width={48} height={48} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Journaling</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Write privately, build streaks, earn 20 points. Your data stays yours.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 border border-gray-200 hover:border-blue-600 transition-colors">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6 p-2">
                <Image src="/icons/meditation.png" alt="Meditation" width={48} height={48} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Meditation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                1-minute guided sessions with voice timer. Earn 30 points per session.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 border border-gray-200 hover:border-blue-600 transition-colors">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6 p-2">
                <Image src="/icons/trophy.png" alt="NFT" width={48} height={48} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">NFT Achievements</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Mint exclusive NFTs for 7-day and 30-day streaks. Permanent proof.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-8 border border-gray-200 hover:border-blue-600 transition-colors">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white text-xs font-bold mb-6">
                BASE
              </div>
              <h3 className="text-xl font-bold text-black mb-3">On-Chain Verified</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                All streaks and points stored on Base. Immutable and transparent.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-8 border border-gray-200 hover:border-blue-600 transition-colors">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6 p-2">
                <Image src="/icons/channel.png" alt="Community" width={48} height={48} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Community</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Farcaster integration. Share progress and support each other.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-3">How It Works</h2>
            <p className="text-gray-600">Three simple steps to get started</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto">
                1
              </div>
              <h3 className="text-xl font-bold text-black">Connect</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Sign in with Base wallet or Farcaster. No email needed.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto">
                2
              </div>
              <h3 className="text-xl font-bold text-black">Track</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Log mood, journal, meditate. Build streaks, earn points.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto">
                3
              </div>
              <h3 className="text-xl font-bold text-black">Earn NFTs</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Mint achievement NFTs for 7-day and 30-day streaks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="tech" className="bg-black py-24 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-3">Tech Stack</h2>
            <p className="text-gray-400">Built with modern technologies</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white/5 p-6 border border-white/10 hover:border-blue-600 transition-colors">
              <h3 className="text-lg font-bold mb-2">Base L2</h3>
              <p className="text-gray-400 text-sm">Blockchain</p>
            </div>

            <div className="bg-white/5 p-6 border border-white/10 hover:border-blue-600 transition-colors">
              <h3 className="text-lg font-bold mb-2">Next.js 15</h3>
              <p className="text-gray-400 text-sm">Framework</p>
            </div>

            <div className="bg-white/5 p-6 border border-white/10 hover:border-blue-600 transition-colors">
              <h3 className="text-lg font-bold mb-2">Solidity</h3>
              <p className="text-gray-400 text-sm">Smart Contracts</p>
            </div>

            <div className="bg-white/5 p-6 border border-white/10 hover:border-blue-600 transition-colors">
              <h3 className="text-lg font-bold mb-2">PostgreSQL</h3>
              <p className="text-gray-400 text-sm">Database</p>
            </div>

            <div className="bg-white/5 p-6 border border-white/10 hover:border-blue-600 transition-colors">
              <h3 className="text-lg font-bold mb-2">Farcaster</h3>
              <p className="text-gray-400 text-sm">Social</p>
            </div>

            <div className="bg-white/5 p-6 border border-white/10 hover:border-blue-600 transition-colors">
              <h3 className="text-lg font-bold mb-2">Wagmi</h3>
              <p className="text-gray-400 text-sm">Web3</p>
            </div>

            <div className="bg-white/5 p-6 border border-white/10 hover:border-blue-600 transition-colors">
              <h3 className="text-lg font-bold mb-2">TypeScript</h3>
              <p className="text-gray-400 text-sm">Language</p>
            </div>

            <div className="bg-white/5 p-6 border border-white/10 hover:border-blue-600 transition-colors">
              <h3 className="text-lg font-bold mb-2">Tailwind</h3>
              <p className="text-gray-400 text-sm">Styling</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="border-2 border-blue-600 p-12">
            <h2 className="text-4xl font-bold text-black mb-6">
              Start Today
            </h2>
            <p className="text-gray-600 mb-8">
              Track, earn, and own your mental health journey on Base.
            </p>
            <button className="bg-blue-600 text-white px-10 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Launch App →
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-lg p-1 flex items-center justify-center">
                <Image src="/icons/IsYourDayOkfinal.png" alt="IsYourDayOk" width={32} height={32} className="w-full h-full object-contain" />
              </div>
              <span className="text-lg font-bold">IsYourDayOk</span>
            </div>
            
            <div className="flex gap-8 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Farcaster</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Docs</a>
            </div>
          </div>
          
          <div className="text-center mt-8 text-gray-500 text-sm">
            © 2025 IsYourDayOk • Built on Base
          </div>
        </div>
      </footer>
    </div>
  );
}

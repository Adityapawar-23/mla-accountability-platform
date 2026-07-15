'use client';

import { useState, useEffect } from 'react';

// Real MLA data - Dharashiv district, Maharashtra (2024 Assembly Election results)
const mlaData = [
  {
    id: 1,
    name: "Pravin Virbhadrayya Swami",
    party: "Shiv Sena (UBT)",
    state: "Maharashtra",
    district: "Dharashiv",
    constituency: "Umarga",
    photo:"/mlas/PravinSwami.jpg"
  },
  {
    id: 2,
    name: "Rana Jagjit Singh Patil",
    party: "BJP",
    state: "Maharashtra",
    district: "Dharashiv",
    constituency: "Tuljapur",
    photo:"/mlas/images.jpg"
  },
  {
    id: 3,
    name: "Kailas Patil",
    party: "Shiv Sena (UBT)",
    state: "Maharashtra",
    district: "Dharashiv",
    constituency: "Dharashiv",
    photo:"/mlas/Kails_Patil.jpg"
  },
  {
    id: 4,
    name: "Tanaji Sawant",
    party: "Shiv Sena",
    state: "Maharashtra",
    district: "Dharashiv",
    constituency: "Paranda",
    photo:"/mlas/images (1).jpg"
  },
];

export default function Home() {
  const [stage, setStage] = useState<'splash' | 'landing' | 'find' | 'profile'>('splash');
  const [fadeOut, setFadeOut] = useState(false);

  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedConstituency, setSelectedConstituency] = useState('');
  const [selectedMla, setSelectedMla] = useState<typeof mlaData[0] | null>(null);

  // Which dashboard tab is active on the profile screen
  const [activeTab, setActiveTab] = useState<'issues' | 'achievements' | 'projects'>('issues');

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 1200);
    const stageTimer = setTimeout(() => setStage('landing'), 1500);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(stageTimer);
    };
  }, []);

  // Screen 1: Splash Screen
  if (stage === 'splash') {
    return (
      <main
        className={`min-h-screen bg-gray-900 flex flex-col items-center justify-center transition-opacity duration-500 ${
          fadeOut ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">LeaderLink</h1>
        <p className="text-gray-400 text-sm sm:text-base">CONNECT • LISTEN • DELIVER</p>
      </main>
    );
  }

  // Screen 2: Landing Page
  if (stage === 'landing') {
    return (
      <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center">LeaderLink</h1>
        <p className="text-base sm:text-lg text-gray-300 mb-8 text-center">
          CONNECT • LISTEN • DELIVER
        </p>
        <button
          onClick={() => setStage('find')}
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold"
        >
          Find Your Leader
        </button>
      </main>
    );
  }

  // Screen 4: MLA Profile (full separate screen)
  if (stage === 'profile' && selectedMla) {
    return (
      <main className="min-h-screen bg-gray-900 flex items-center justify-center px-4 py-10 relative">
        {/* Back button - corner, not full width */}
        <button
          onClick={() => setStage('find')}
          className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-1 text-gray-300 hover:text-white bg-white/10 hover:bg-white/20 px-3 py-2 rounded-lg transition text-sm"
        >
          ← Back
        </button>

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 sm:p-10 rounded-2xl shadow-2xl w-full max-w-md md:max-w-lg lg:max-w-2xl">
          {/* Profile header */}
          <div className="text-center mb-8">
           {selectedMla.photo ? (
  <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full bg-white/20 mx-auto mb-6 overflow-hidden">
    <img
      src={selectedMla.photo}
      alt={selectedMla.name}
      className="w-full h-full object-cover"
    />
  </div>
) : (
  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white/20 mx-auto mb-6 flex items-center justify-center text-white text-3xl font-bold">
    {selectedMla.name.charAt(0)}
  </div>
)}

            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1">
              {selectedMla.name}
            </h1>
            <p className="text-orange-400 font-semibold mb-4">
              {selectedMla.party}
            </p>

            <div className="text-gray-300 space-y-1 text-sm sm:text-base">
              <p>{selectedMla.constituency} Constituency</p>
              <p>{selectedMla.district} District, {selectedMla.state}</p>
            </div>
          </div>

          {/* Dashboard tabs */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-6">
            <button
              onClick={() => setActiveTab('issues')}
              className={`flex-1 p-3 rounded-lg font-semibold text-sm transition ${
                activeTab === 'issues'
                  ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              📋 Issue Reporting
            </button>
            <button
              onClick={() => setActiveTab('achievements')}
              className={`flex-1 p-3 rounded-lg font-semibold text-sm transition ${
                activeTab === 'achievements'
                  ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              🏆 Achievements
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`flex-1 p-3 rounded-lg font-semibold text-sm transition ${
                activeTab === 'projects'
                  ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              🚧 Ongoing Projects
            </button>
          </div>

          {/* Tab content (placeholder for now) */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 min-h-[150px] flex items-center justify-center">
            {activeTab === 'issues' && (
              <p className="text-gray-400 text-center">
                Issue reporting form will go here — coming soon.
              </p>
            )}
            {activeTab === 'achievements' && (
              <p className="text-gray-400 text-center">
                MLA's achievements list will go here — coming soon.
              </p>
            )}
            {activeTab === 'projects' && (
              <p className="text-gray-400 text-center">
                Ongoing projects list will go here — coming soon.
              </p>
            )}
          </div>
        </div>
      </main>
    );
  }

  // Screen 3: Find MLA Tool
  return (
    <main className="min-h-screen bg-gray-900 flex items-center justify-center px-4 py-10">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 sm:p-10 rounded-2xl shadow-2xl w-full max-w-md md:max-w-lg">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2 text-white">
          LeaderLink
        </h1>
        <p className="text-gray-300 text-center mb-8 text-sm sm:text-base">
          Select your area to view Leader dashboard
        </p>

        <div className="space-y-4">
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="w-full bg-white/5 border border-white/20 text-white p-3 rounded-lg focus:outline-none focus:border-orange-500"
          >
            <option className="text-black" value="">Select State</option>
            <option className="text-black" value="Maharashtra">Maharashtra</option>
          </select>

          <select
            value={selectedDistrict}
            onChange={(e) => setSelectedDistrict(e.target.value)}
            className="w-full bg-white/5 border border-white/20 text-white p-3 rounded-lg focus:outline-none focus:border-orange-500"
          >
            <option className="text-black" value="">Select District</option>
            <option className="text-black" value="Dharashiv">Dharashiv</option>
          </select>

          <select
            value={selectedConstituency}
            onChange={(e) => setSelectedConstituency(e.target.value)}
            className="w-full bg-white/5 border border-white/20 text-white p-3 rounded-lg focus:outline-none focus:border-orange-500"
          >
            <option className="text-black" value="">Select Constituency</option>
            <option className="text-black" value="Umarga">Umarga</option>
            <option className="text-black" value="Tuljapur">Tuljapur</option>
            <option className="text-black" value="Dharashiv">Dharashiv</option>
            <option className="text-black" value="Paranda">Paranda</option>
          </select>

          <button
            onClick={() => {
              const found = mlaData.find(
                (mla) => mla.constituency === selectedConstituency
              );
              if (found) {
                setSelectedMla(found);
                setActiveTab('issues');
                setStage('profile');
              } else {
                alert('No leader found for this constituency.');
              }
            }}
            className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white p-3 rounded-lg font-semibold transition"
          >
            Browse your Leader
          </button>
        </div>
      </div>
    </main>
  );
}

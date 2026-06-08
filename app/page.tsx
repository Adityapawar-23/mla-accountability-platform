export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">
          LeaderLink 
        </h1>

        <p className="text-gray-600 text-center mb-8">
          Select your area to view Leader dashboard
        </p>

        <div className="space-y-4">
          <select className="w-full border p-3 rounded-lg">
            <option>Select State</option>
            <option>Maharashtra</option>
          </select>

          <select className="w-full border p-3 rounded-lg">
            <option>Select District</option>
            <option>Dharashiv</option>
          </select>

          <select className="w-full border p-3 rounded-lg">
            <option>Select Constituency</option>
            <option>Paranda</option>
            <option>Osmanabad</option>
          </select>

          <button className="w-full bg-blue-600 text-white p-3 rounded-lg">
            View MLA Dashboard
          </button>
        </div>
      </div>
    </main>
  );
}
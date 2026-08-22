function Receptionist() {
  return (
    <div className="flex min-h-screen" style={{background: '#faf9ff'}}>

      {/* Left Sidebar — same as Doctor */}
      <aside className="w-60 bg-white flex flex-col"
        style={{borderRight: '1px solid #ede9fb'}}>
        <div className="px-6 py-5" style={{borderBottom: '1px solid #ede9fb'}}>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{background: '#7c3aed'}}>
              <span className="text-white text-lg">🏥</span>
            </div>
            <div>
              <p className="font-bold text-sm" style={{color: '#7c3aed'}}>MediQueue Pro</p>
              <p className="text-xs text-gray-400">Central Clinic Admin</p>
            </div>
          </div>
        </div>
        <nav className="flex flex-col gap-1 px-3 py-4 flex-1">
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-gray-500">📊 Dashboard</a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-semibold text-white"
            style={{background: '#7c3aed'}}>📋 Live Queue</a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-gray-500">👥 Patients</a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-gray-500">👔 Staff Management</a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-gray-500">📈 Reports</a>
        </nav>
        <div className="px-3 py-4" style={{borderTop: '1px solid #ede9fb'}}>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-semibold text-red-500 mb-2"
            style={{background: '#fef2f2'}}>🔔 Urgent Alert</a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-gray-500">❓ Support</a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-gray-500">⚙️ Settings</a>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Top Navbar */}
        <nav className="flex items-center justify-between px-8 py-4 bg-white"
          style={{borderBottom: '1px solid #ede9fb'}}>
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold" style={{color: '#7c3aed'}}>Queue Management</span>
            <span className="text-gray-300">|</span>
            <span className="text-sm text-gray-500">Monday, Oct 24 • 10:45 AM</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-400">🔔</span>
            <div className="text-right">
              <p className="text-sm font-semibold text-gray-900">Sarah Jenkins</p>
              <p className="text-xs text-gray-400">MAIN RECEPTIONIST</p>
            </div>
            <div className="w-9 h-9 rounded-full bg-gray-200"></div>
          </div>
        </nav>

        <div className="p-6 flex gap-6">

          {/* Left — Stats + Queue Table */}
          <div className="flex-1 flex flex-col gap-4">

            {/* 3 Stat Cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4" style={{border: '1px solid #ede9fb'}}>
                <p className="text-xs text-gray-400 mb-1">In Queue</p>
                <p className="text-3xl font-bold" style={{color: '#7c3aed'}}>14</p>
                <p className="text-sm text-gray-500">Patients</p>
              </div>
              <div className="bg-white rounded-xl p-4" style={{border: '1px solid #ede9fb'}}>
                <p className="text-xs text-gray-400 mb-1">Avg. Wait Time</p>
                <p className="text-3xl font-bold" style={{color: '#b45309'}}>22</p>
                <p className="text-sm text-gray-500">Mins</p>
              </div>
              <div className="bg-white rounded-xl p-4" style={{border: '1px solid #ede9fb'}}>
                <p className="text-xs text-gray-400 mb-1">Appointments</p>
                <p className="text-3xl font-bold" style={{color: '#15803d'}}>8</p>
                <p className="text-sm text-gray-500">Scheduled</p>
              </div>
            </div>

            {/* Queue Table */}
            <div className="bg-white rounded-xl overflow-hidden" style={{border: '1px solid #ede9fb'}}>
              <div className="flex items-center justify-between px-6 py-4"
                style={{borderBottom: '1px solid #ede9fb'}}>
                <h3 className="font-bold text-gray-900">Active Patient Queue</h3>
                <div className="flex items-center gap-3">
                  <input placeholder="Search token or name..."
                    className="px-3 py-2 rounded-lg text-sm outline-none"
                    style={{border: '1px solid #ede9fb', background: '#faf9ff'}}/>
                  <button className="px-3 py-2 rounded-lg text-sm text-gray-500"
                    style={{border: '1px solid #ede9fb'}}>Filter</button>
                </div>
              </div>
              <table className="w-full">
                <thead>
                  <tr style={{borderBottom: '1px solid #ede9fb', background: '#faf9ff'}}>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-gray-400 uppercase">Token</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-gray-400 uppercase">Patient Name</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-gray-400 uppercase">Type</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-gray-400 uppercase">Status</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-gray-400 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{borderBottom: '1px solid #f5f3ff'}}>
                    <td className="px-6 py-4 text-sm font-bold" style={{color: '#7c3aed'}}>#204</td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-semibold text-gray-900">Johnathan Doe</p>
                      <p className="text-xs text-gray-400">+1 234-567-890</p>
                    </td>
                    <td className="px-6 py-4"><span className="px-2 py-1 rounded-full text-xs font-semibold" style={{background: '#eff6ff', color: '#1d4ed8'}}>BOOKED</span></td>
                    <td className="px-6 py-4"><span className="px-2 py-1 rounded-full text-xs font-semibold" style={{background: '#f0fdf4', color: '#15803d'}}>In Service</span></td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button className="p-1 rounded text-gray-400">⏸</button>
                        <button className="p-1 rounded text-gray-400">⏭</button>
                        <button className="p-1 rounded text-gray-400">🗑</button>
                      </div>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid #f5f3ff'}}>
                    <td className="px-6 py-4 text-sm font-bold" style={{color: '#7c3aed'}}>#205</td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-semibold text-gray-900">Alice Smith</p>
                      <p className="text-xs text-gray-400">+1 455-223-112</p>
                    </td>
                    <td className="px-6 py-4"><span className="px-2 py-1 rounded-full text-xs font-semibold" style={{background: '#f3ebfa', color: '#7c3aed'}}>WALK-IN</span></td>
                    <td className="px-6 py-4"><span className="px-2 py-1 rounded-full text-xs font-semibold" style={{background: '#f3ebfa', color: '#7c3aed'}}>WAITING</span></td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button className="p-1 rounded text-gray-400">⏸</button>
                        <button className="p-1 rounded text-gray-400">⏭</button>
                        <button className="p-1 rounded text-gray-400">🗑</button>
                      </div>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid #f5f3ff'}}>
                    <td className="px-6 py-4 text-sm font-bold" style={{color: '#7c3aed'}}>#206</td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-semibold text-gray-900">Robert Miller</p>
                      <p className="text-xs text-gray-400">+1 889-112-445</p>
                    </td>
                    <td className="px-6 py-4"><span className="px-2 py-1 rounded-full text-xs font-semibold" style={{background: '#f3ebfa', color: '#7c3aed'}}>WALK-IN</span></td>
                    <td className="px-6 py-4"><span className="px-2 py-1 rounded-full text-xs font-semibold" style={{background: '#f3ebfa', color: '#7c3aed'}}>WAITING</span></td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button className="p-1 rounded text-gray-400">⏸</button>
                        <button className="p-1 rounded text-gray-400">⏭</button>
                        <button className="p-1 rounded text-gray-400">🗑</button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-bold" style={{color: '#7c3aed'}}>#207</td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-semibold text-gray-900">Claire Lee</p>
                      <p className="text-xs text-gray-400">+1 334-998-002</p>
                    </td>
                    <td className="px-6 py-4"><span className="px-2 py-1 rounded-full text-xs font-semibold" style={{background: '#eff6ff', color: '#1d4ed8'}}>BOOKED</span></td>
                    <td className="px-6 py-4"><span className="px-2 py-1 rounded-full text-xs font-semibold" style={{background: '#f3ebfa', color: '#7c3aed'}}>WAITING</span></td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button className="p-1 rounded text-gray-400">⏸</button>
                        <button className="p-1 rounded text-gray-400">⏭</button>
                        <button className="p-1 rounded text-gray-400">🗑</button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="flex items-center justify-between px-6 py-3"
                style={{borderTop: '1px solid #ede9fb'}}>
                <p className="text-xs text-gray-400">Showing 1-4 of 14 patients</p>
                <div className="flex gap-2">
                  <button className="px-3 py-1 rounded text-sm text-gray-500"
                    style={{border: '1px solid #ede9fb'}}>Prev</button>
                  <button className="px-3 py-1 rounded text-sm text-white"
                    style={{background: '#7c3aed'}}>1</button>
                  <button className="px-3 py-1 rounded text-sm text-gray-500"
                    style={{border: '1px solid #ede9fb'}}>2</button>
                  <button className="px-3 py-1 rounded text-sm text-gray-500"
                    style={{border: '1px solid #ede9fb'}}>Next</button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="w-72 flex flex-col gap-4">

            {/* Add Walk-in */}
            <div className="bg-white rounded-xl p-4" style={{border: '1px solid #ede9fb'}}>
              <h3 className="font-bold text-gray-900 mb-3">Add Walk-in</h3>
              <input placeholder="Full Name"
                className="w-full px-3 py-2 rounded-lg text-sm outline-none mb-2"
                style={{border: '1px solid #ede9fb', background: '#faf9ff'}}/>
              <input placeholder="+1 (555) 000-0000"
                className="w-full px-3 py-2 rounded-lg text-sm outline-none mb-3"
                style={{border: '1px solid #ede9fb', background: '#faf9ff'}}/>
              <button className="w-full py-2 rounded-lg text-white text-sm font-semibold mb-2"
                style={{background: '#7c3aed'}}>Generate Token</button>
              <button className="w-full py-2 rounded-lg text-white text-sm font-semibold"
                style={{background: '#dc2626'}}>! Emergency Add</button>
            </div>

            {/* Patients on Hold */}
            <div className="bg-white rounded-xl overflow-hidden" style={{border: '1px solid #ede9fb'}}>
              <div className="flex items-center justify-between px-4 py-3"
                style={{borderBottom: '1px solid #ede9fb'}}>
                <p className="text-sm font-semibold text-gray-900">Patients on Hold</p>
                <span className="px-2 py-1 rounded-full text-xs font-bold text-white"
                  style={{background: '#dc2626'}}>2 Total</span>
              </div>
              <div className="px-4 py-3" style={{borderBottom: '1px solid #f5f3ff'}}>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-gray-900">#198 • Marcus V.</p>
                  <button className="text-purple-600">▶</button>
                </div>
                <p className="text-xs text-gray-400">Hold since 10:15 AM</p>
              </div>
              <div className="px-4 py-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-gray-900">#201 • Sarah L.</p>
                  <button className="text-purple-600">▶</button>
                </div>
                <p className="text-xs text-gray-400">Hold since 10:32 AM</p>
              </div>
            </div>

            {/* Upcoming Today */}
            <div className="bg-white rounded-xl overflow-hidden" style={{border: '1px solid #ede9fb'}}>
              <div className="px-4 py-3" style={{borderBottom: '1px solid #ede9fb'}}>
                <p className="text-sm font-semibold text-gray-900 uppercase tracking-widest text-xs text-gray-400">Upcoming Today</p>
              </div>
              <div className="px-4 py-3" style={{borderBottom: '1px solid #f5f3ff'}}>
                <div className="flex gap-3">
                  <p className="text-sm font-bold" style={{color: '#7c3aed'}}>11:00 AM</p>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Thomas Wright</p>
                    <p className="text-xs text-gray-400">Follow-up Exam</p>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3" style={{borderBottom: '1px solid #f5f3ff'}}>
                <div className="flex gap-3">
                  <p className="text-sm font-bold" style={{color: '#7c3aed'}}>11:30 AM</p>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Linda Cheng</p>
                    <p className="text-xs text-gray-400">Consultation</p>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3">
                <div className="flex gap-3">
                  <p className="text-sm font-bold" style={{color: '#7c3aed'}}>12:15 PM</p>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">David Rossi</p>
                    <p className="text-xs text-gray-400">Lab Results Review</p>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3" style={{borderTop: '1px solid #ede9fb'}}>
                <a href="#" className="text-sm font-semibold" style={{color: '#7c3aed'}}>View Full Schedule</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Receptionist
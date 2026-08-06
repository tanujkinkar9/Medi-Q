import waitingRoom from "../../assets/WaitingRoom.jpg";
function JoinQueue() {
  return (
    <div className="min-h-screen bg-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4" style={{borderBottom: '1px solid #ccc3d8'}}>
        <span className="font-bold text-xl" style={{color: '#630ed4'}}>Medi-Q</span>
        <div className="flex items-center gap-4">
          <span className="text-gray-400 cursor-pointer">🔔</span>
          <span className="text-gray-400 cursor-pointer">👤</span>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-xl mx-auto px-6 py-10">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Join the Queue</h1>
        <p className="text-gray-500 text-sm mb-6">Check-in quickly and save your spot at the clinic without waiting in line.</p>

        {/* Clinic Image */}
        <div className="w-full h-48 rounded-2xl mb-8 flex items-center justify-center text-gray-400"
          style={{background: '#f3ebfa', border: '1px solid #ede9fb'}}>
          <img
                src={waitingRoom}
                alt="Clinic"
                className="w-full h-48 rounded-2xl object-cover"
                />
        </div>

        {/* Full Name */}
        <div className="mb-4">
          <label className="text-sm font-semibold text-gray-700 mb-2 block">Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-3 rounded-lg text-gray-700 outline-none text-sm"
            style={{border: '1px solid #ede9fb', background: '#faf9ff'}}
          />
        </div>

        {/* Phone Number */}
        <div className="mb-8">
          <label className="text-sm font-semibold text-gray-700 mb-2 block">Phone Number</label>
          <input
            type="tel"
            placeholder="(555) 000-0000"
            className="w-full px-4 py-3 rounded-lg text-gray-700 outline-none text-sm"
            style={{border: '1px solid #ede9fb', background: '#faf9ff'}}
          />
        </div>

        {/* Join Queue Button */}
        <button className="w-full py-3 rounded-lg text-white font-semibold mb-3"
          style={{background: 'linear-gradient(135deg, #7c3aed, #a78bfa)'}}>
          Join Queue
        </button>

        {/* View Live Queue Button */}
        <button className="w-full py-3 rounded-lg font-semibold mb-6"
          style={{border: '2px solid #7c3aed', color: '#7c3aed', background: 'white'}}>
          View Live Queue
        </button>

        {/* Info note */}
        <div className="flex items-start gap-3 rounded-xl p-4"
          style={{background: '#f3ebfa', border: '1px solid #ede9fb'}}>
          <span>ℹ️</span>
          <p className="text-sm text-gray-600">By joining, you'll receive real-time updates about your status via SMS.</p>
        </div>

      </div>

      {/* Footer */}
      <footer className="text-center py-6 mt-10" style={{borderTop: '1px solid #ede9fb'}}>
        <p className="text-xs text-gray-400">© 2026 MediQueue Health Systems. All rights reserved.</p>
        <div className="flex items-center justify-center gap-4 mt-2">
          <a href="#" className="text-xs text-gray-400">Privacy Policy</a>
          <a href="#" className="text-xs text-gray-400">Terms of Service</a>
          <a href="#" className="text-xs text-gray-400">Contact Support</a>
        </div>
      </footer>

    </div>
  )
}

export default JoinQueue;
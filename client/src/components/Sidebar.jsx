function Sidebar ({ activeLink }) {
    return (
        <aside className="w-60 bg-white flex flex-col"
        style={{borderRight:'1px solid #ede9fb'}}>
            {/*Logo*/}
            <div className="px-6 py-5" style={{borderBottom: '1px solid #ede9fb'}}>
            <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{background: '#7c3aed'}}>
                    <span className="text-white text-lg">🏥</span>
                </div>
            <div>
            <p className="font-bold text-sm" style={{color:'#7c3aed'}}>Medi-Q</p>
            <p className="text-xs text-gray-400">Central Clinic Admin</p>
            </div>
            </div>
            </div>

              {/* Nav Links */}
      <nav className="flex flex-col gap-1 px-3 py-4 flex-1">
        {['Dashboard', 'Live Queue', 'Patients', 'Staff Management', 'Reports'].map((link) => (
          <a key={link} href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm"
            style={activeLink === link
              ? {background: '#7c3aed', color: 'white', fontWeight: '600'}
              : {color: '#6b7280'}}>
            {link}
          </a>
        ))}
      </nav>

      {/* Bottom */}
      <div className="px-3 py-4" style={{borderTop: '1px solid #ede9fb'}}>
        <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-semibold text-red-500 mb-2"
          style={{background: '#fef2f2'}}>
          🔔 Urgent Alert
        </a>
        <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-gray-500">
          ❓ Support
        </a>
        <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-gray-500">
          ⚙️ Settings
        </a>
      </div>
        </aside>
    )
}

export default Sidebar
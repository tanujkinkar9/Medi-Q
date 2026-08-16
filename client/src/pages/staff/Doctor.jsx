function Doctor() {
    return (
        <div className="flex min-h-screen" style={{background:'#faf9ff'}}>
         
         {/* Left sidebar*/}
         <aside className="w-60 bg-white flex flex-col"
         style={{borderRight:'1px solid #ede9fb'}}>
            {/*Logo*/}
           <div className="px-6 py-5"style={{borderBottom:'1px solid #ede9fb'}}>
           <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center"
            >
                <span className="text-white text-lg">🏥</span>
            </div>
           <div>
           <p className="font-bold text-sm" style={{color:'7c3aed'}}>Medi-Q</p>
           <p className="text-xs text-gray-400">Central Clinic Admin</p>
           </div>
           </div>
           </div>

           {/*Nav Links*/}
           <nav className="flex flex-col gap-1 px-3 py-4 flex-1">
            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-semibold text-white"
            style={{background:'#7c3aed'}}>
                📊 Dashboard
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-gray-500">
                            📋 Live Queue
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-gray-500">
                👥 Patients
            </a>
            <a href="#" className="flex itmes-center gap-3 px-3 py-2 rounded-xl text-sm text-gray-500">
                 👔 Staff Management
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-gray-500">
                📈 Reports
            </a>
           </nav>

           {/*Bottom Links*/}
           <div className="px-3 py-4"style={{borderTop:'1px solid #ede9fb'}}>
            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-semibold text-red-500 mb-2"
            style={{background:'#fef2f2'}}>
            🔔 Urgent Alert
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-gray-500">
                ❓ Support
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-xl">
                 ⚙️ Settings
            </a>
           </div>
         </aside>

        {/*Main Content*/}
        <div className="flex-1 flex flex-col">
            {/*Top Navbar */}
            <nav className="flex items-center justidy-between px-8 py-4 bg-white"
            style={{borderBottom:'1px solid #ede9fb'}}>
                <div className="flex items-center gap-3">
                <span className="text-lg font-bold text-gray-900">Queen</span>
                <span className="text-gray-300">|</span>
                <span className="text-sm text-gray-500">Room 402 • Dr. Aris Thorne</span>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-gray-400">🔔</span>
                    <div className="text-right">
                        <p className="text-sm font-semibold text-gray-900">Dr.Aris thorne</p>
                        <p className="text-xs text-gray-400">ON-DUTYA</p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-gray-200"></div>
                </div>
            </nav>

            {/*Page Content*/}
            <div className="flex gap-6 p-6 flex-1">
                {/*Center*/}
                <div className="flex-1">
                    {/*Current session card*/}
                </div>
                {/*Right Panel*/}
                <div className="w-72">
                    {/*Up Next aageya Yahaan*/}
                </div>
                
            </div>
        </div>

        </div>
    )
}

export default Doctor
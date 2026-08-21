function Doctor() {
    return (
        <div className="flex min-h-screen" style={{background:'#faf9ff'}}>

         {/* Left sidebar*/}
         <aside className="w-60 bg-white flex flex-col"
         style={{borderRight:'1px solid #ede9fb'}}>
            {/*Logo*/}
           <div className="px-6 py-5" style={{borderBottom:'1px solid #ede9fb'}}>
           <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center">
                <span className="text-white text-lg">🏥</span>
            </div>
           <div>
           <p className="font-bold text-sm" style={{color:'#7c3aed'}}>Medi-Q</p>
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
            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-gray-500">
                 👔 Staff Management
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-gray-500">
                📈 Reports
            </a>
           </nav>

           {/*Bottom Links*/}
           <div className="px-3 py-4" style={{borderTop:'1px solid #ede9fb'}}>
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
            <nav className="flex items-center justify-between px-8 py-4 bg-white"
            style={{borderBottom:'1px solid #ede9fb'}}>
                <div className="flex items-center gap-3">
                <span className="text-lg font-bold text-gray-900">Queue</span>
                <span className="text-gray-300">|</span>
                <span className="text-sm text-gray-500">Room 402 • Dr. Aris Thorne</span>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-gray-400">🔔</span>
                    <div className="text-right">
                        <p className="text-sm font-semibold text-gray-900">Dr. Aris Thorne</p>
                        <p className="text-xs text-gray-400">ON-DUTY</p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-gray-200"></div>
                </div>
            </nav>

            {/*Page Content*/}
            <div className="flex gap-6 p-6 flex-1">
                {/*Center*/}
                <div className="flex-1">
                    {/*Current session card*/}
                    <div className="bg-white rounded-2xl" style={{border:'1px solid #ede9fb'}}>
                        <div className="h-1.5 w-full rounded-t-2xl" style={{background:'linear-gradient(90deg, #a78bfa, #7c3aed)'}}></div>
                        <div className="p-8">
                            <div className="flex items-start justify-between mb-6">
                                <span className="text-xs font-semibold px-3 py-1.5 rounded-full" style={{background:'#f3effe', color:'#7c3aed'}}>
                                    CURRENT SESSION
                                </span>
                                <div className="text-right">
                                    <p className="text-xs text-gray-400">WAIT TIME</p>
                                    <p className="text-xl font-bold" style={{color:'#7c3aed'}}>12:45 <span className="text-sm text-gray-400">min</span></p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 mb-6">
                                <div className="w-28 h-28 rounded-2xl flex flex-col items-center justify-center text-white"
                                style={{background:'linear-gradient(160deg, #8b5cf6, #6d28d9)'}}>
                                    <span className="text-[10px] tracking-widest opacity-80">TOKEN</span>
                                    <span className="text-2xl font-extrabold">B-42</span>
                                </div>
                                <div>
                                    <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Julianna Martinez</h2>
                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                        <span>28 Years • Female</span>
                                        <span>Last visit: 3 months ago</span>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-2xl p-5 mb-6" style={{background:'#faf9ff', border:'1px solid #ede9fb'}}>
                                <p className="text-xs font-semibold text-gray-400 mb-2">REASON FOR VISIT</p>
                                <p className="text-gray-700 leading-relaxed">
                                    Persistent abdominal discomfort and mild nausea for the past 48 hours. No fever recorded.
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <button className="px-6 py-3 rounded-xl border border-gray-200 font-semibold text-gray-700">
                                    ✓ Done
                                </button>
                                <button className="flex-1 px-6 py-3 rounded-xl font-semibold text-white"
                                style={{background:'linear-gradient(90deg, #8b5cf6, #7c3aed)'}}>
                                    → Call Next
                                </button>
                            </div>
                        </div>
                    </div>

                    {/*Session Notes*/}
                    <div className="bg-white rounded-2xl p-8 mt-6" style={{border:'1px solid #ede9fb'}}>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">📝 Session Notes</h3>
                        <textarea
                            placeholder="Type session observations, prescribed medications, or follow-up instructions here..."
                            className="w-full p-5 rounded-xl text-sm outline-none resize-none"
                            style={{background:'#faf9ff', border:'1px solid #ede9fb', minHeight:'150px'}}
                        ></textarea>
                        <div className="flex items-center gap-2 flex-wrap mt-4">
                            <span className="text-sm font-medium px-3 py-1.5 rounded-full" style={{background:'#f3effe', color:'#7c3aed'}}>#StomachAche ✕</span>
                            <span className="text-sm font-medium px-3 py-1.5 rounded-full" style={{background:'#f3effe', color:'#7c3aed'}}>#Nausea ✕</span>
                            <button className="text-sm font-semibold" style={{color:'#7c3aed'}}>+ Add Diagnosis Tag</button>
                        </div>
                    </div>
                </div>

                {/*Right Panel*/}
                <div className="w-72">

                    {/*Up Next aageya Yahaan*/}
                    <div className="bg-white rounded-2xl p-6" style={{border:'1px solid #ede9fb'}}>
                        <div className="flex items-center justify-between mb-5">
                            <h3 className="text-lg font-bold text-gray-900">Up Next</h3>
                            <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{background:'#f3effe', color:'#7c3aed'}}>3 TOTAL</span>
                        </div>

                        <a href="#" className="flex items-center gap-3 p-3 rounded-xl mb-1">
                            <span className="text-xs font-bold px-2 py-1.5 rounded-lg" style={{background:'#f3effe', color:'#7c3aed'}}>B-43</span>
                            <div className="flex-1">
                                <p className="text-sm font-semibold text-gray-900">Mark Wen</p>
                                <p className="text-xs text-gray-400">Routine Checkup</p>
                            </div>
                            <span className="text-gray-300">›</span>
                        </a>

                        <a href="#" className="flex items-center gap-3 p-3 rounded-xl mb-1">
                            <span className="text-xs font-bold px-2 py-1.5 rounded-lg" style={{background:'#f3effe', color:'#7c3aed'}}>B-44</span>
                            <div className="flex-1">
                                <p className="text-sm font-semibold text-gray-900">Sarah Jennings</p>
                                <p className="text-xs text-gray-400">Follow-up: Lab results</p>
                            </div>
                            <span className="text-gray-300">›</span>
                        </a>

                        <a href="#" className="flex items-center gap-3 p-3 rounded-xl mb-3">
                            <span className="text-xs font-bold px-2 py-1.5 rounded-lg" style={{background:'#f3effe', color:'#7c3aed'}}>B-45</span>
                            <div className="flex-1">
                                <p className="text-sm font-semibold text-gray-900">Omar Haddad</p>
                                <p className="text-xs text-gray-400">Allergy Consultation</p>
                            </div>
                            <span className="text-gray-300">›</span>
                        </a>

                        <button className="w-full text-sm font-semibold py-3 rounded-xl"
                        style={{border:'1px solid #e4defb', color:'#7c3aed'}}>
                            View Entire Queue
                        </button>
                    </div>

                    {/*Clinic Performance*/}
                    <div className="rounded-2xl p-6 text-white mt-6"
                    style={{background:'linear-gradient(160deg, #8b5cf6, #6d28d9)'}}>
                        <p className="text-xs opacity-80 mb-1">CLINIC PERFORMANCE</p>
                        <p className="text-lg font-bold mb-4">Patient Velocity</p>
                        <p className="text-4xl font-extrabold">4.2 <span className="text-sm font-medium opacity-80">pts / hour</span></p>
                    </div>
                </div>

            </div>
        </div>

        </div>
    )
}

export default Doctor
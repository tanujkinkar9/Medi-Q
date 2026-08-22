function StaffManagement() {
    return (
        <div className="flex min-h-screen" style={{background:'#faf9ff'}}>

         {/* Left sidebar*/}
         <aside className="w-60 bg-white flex flex-col"
         style={{borderRight:'1px solid #ede9fb'}}>
            {/*Logo*/}
           <div className="px-6 py-5" style={{borderBottom:'1px solid #ede9fb'}}>
           <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{background:'#7c3aed'}}>
                <span className="text-white text-lg">🏥</span>
            </div>
           <div>
           <p className="font-bold text-sm" style={{color:'#7c3aed'}}>MediQueue Pro</p>
           <p className="text-xs text-gray-400">Central Clinic Admin</p>
           </div>
           </div>
           </div>

           {/*Nav Links*/}
           <nav className="flex flex-col gap-1 px-3 py-4 flex-1">
            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-gray-500">
                📊 Dashboard
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-gray-500">
                📋 Live Queue
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-gray-500">
                👥 Patients
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-semibold text-white"
            style={{background:'#7c3aed'}}>
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
            ⚠️ Urgent Alert
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-gray-500">
                ❓ Support
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-gray-500">
                 ⚙️ Settings
            </a>
           </div>
         </aside>

        {/*Main Content*/}
        <div className="flex-1 flex flex-col">
            {/*Top Header*/}
            <div className="flex items-center justify-between px-8 py-6">
                <div>
                    <h1 className="text-3xl font-extrabold text-gray-900">Staff Management</h1>
                    <p className="text-sm text-gray-500 mt-1">Manage medical professionals and clinical operations.</p>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-gray-400 text-lg">🔔</span>
                    <div className="flex items-center gap-2 pl-2 pr-4 py-1.5 rounded-full bg-white"
                    style={{border:'1px solid #ede9fb'}}>
                        <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                        <span className="text-sm font-semibold text-gray-900">Dr. Sarah Chen</span>
                    </div>
                </div>
            </div>

            {/*Page Content*/}
            <div className="px-8 pb-8 flex flex-col gap-6">

                {/*Stat Cards*/}
                <div className="grid grid-cols-3 gap-6">
                    <div className="bg-white rounded-2xl p-6" style={{border:'1px solid #ede9fb'}}>
                        <div className="flex items-center justify-between mb-6">
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                            style={{background:'#f3effe'}}>
                                <span>➕</span>
                            </div>
                            <span className="text-xs font-semibold text-green-600">+12% vs last week</span>
                        </div>
                        <p className="text-sm text-gray-500 mb-1">Total Patients Today</p>
                        <p className="text-4xl font-extrabold" style={{color:'#7c3aed'}}>184</p>
                    </div>

                    <div className="bg-white rounded-2xl p-6" style={{border:'1px solid #ede9fb'}}>
                        <div className="flex items-center justify-between mb-6">
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                            style={{background:'#f3effe'}}>
                                <span>🕐</span>
                            </div>
                            <span className="text-xs font-semibold text-green-600">-3m improvement</span>
                        </div>
                        <p className="text-sm text-gray-500 mb-1">Avg. Wait Time</p>
                        <p className="text-4xl font-extrabold" style={{color:'#7c3aed'}}>14<span className="text-xl font-bold">m</span></p>
                    </div>

                    <div className="bg-white rounded-2xl p-6" style={{border:'1px solid #ede9fb'}}>
                        <div className="flex items-center justify-between mb-6">
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                            style={{background:'#fff1e6'}}>
                                <span>📈</span>
                            </div>
                            <span className="text-xs font-semibold text-gray-400">10:00 - 11:30</span>
                        </div>
                        <p className="text-sm text-gray-500 mb-1">Peak Hour</p>
                        <p className="text-4xl font-extrabold" style={{color:'#b45309'}}>10 AM</p>
                    </div>
                </div>

                {/*Middle Row: Active Staff + System Settings*/}
                <div className="flex gap-6 items-start">

                    {/*Active Staff*/}
                    <div className="flex-1 bg-white rounded-2xl" style={{border:'1px solid #ede9fb'}}>
                        <div className="flex items-center justify-between p-6">
                            <h3 className="text-xl font-bold text-gray-900">Active Staff</h3>
                            <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white"
                            style={{background:'#7c3aed'}}>
                                + Add Staff
                            </button>
                        </div>

                        <table className="w-full">
                            <thead>
                                <tr style={{borderTop:'1px solid #ede9fb', borderBottom:'1px solid #ede9fb', background:'#faf9ff'}}>
                                    <th className="text-left text-xs font-semibold text-gray-400 px-6 py-3">NAME</th>
                                    <th className="text-left text-xs font-semibold text-gray-400 px-6 py-3">ROLE</th>
                                    <th className="text-left text-xs font-semibold text-gray-400 px-6 py-3">STATUS</th>
                                    <th className="text-left text-xs font-semibold text-gray-400 px-6 py-3">ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{borderBottom:'1px solid #ede9fb'}}>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold"
                                            style={{background:'#e4defb', color:'#7c3aed'}}>JD</div>
                                            <div>
                                                <p className="text-sm font-semibold text-gray-900">Dr. Jonathan Doe</p>
                                                <p className="text-xs text-gray-400">j.doe@mediqueue.com</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700">Lead Cardiologist</td>
                                    <td className="px-6 py-4">
                                        <span className="text-xs font-semibold px-3 py-1.5 rounded-full"
                                        style={{background:'#f3effe', color:'#7c3aed'}}>In Consultation</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href="#" className="text-sm font-semibold" style={{color:'#7c3aed'}}>Edit</a>
                                    </td>
                                </tr>

                                <tr style={{borderBottom:'1px solid #ede9fb'}}>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold"
                                            style={{background:'#e4defb', color:'#7c3aed'}}>AM</div>
                                            <div>
                                                <p className="text-sm font-semibold text-gray-900">Alice Miller</p>
                                                <p className="text-xs text-gray-400">a.miller@mediqueue.com</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700">Head Nurse</td>
                                    <td className="px-6 py-4">
                                        <span className="text-xs font-semibold px-3 py-1.5 rounded-full"
                                        style={{background:'#dcfce7', color:'#16a34a'}}>Available</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href="#" className="text-sm font-semibold" style={{color:'#7c3aed'}}>Edit</a>
                                    </td>
                                </tr>

                                <tr style={{borderBottom:'1px solid #ede9fb'}}>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold"
                                            style={{background:'#e4defb', color:'#7c3aed'}}>RK</div>
                                            <div>
                                                <p className="text-sm font-semibold text-gray-900">Robert Kovic</p>
                                                <p className="text-xs text-gray-400">r.kovic@mediqueue.com</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700">Receptionist</td>
                                    <td className="px-6 py-4">
                                        <span className="text-xs font-semibold px-3 py-1.5 rounded-full"
                                        style={{background:'#fee2e2', color:'#dc2626'}}>On Break</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href="#" className="text-sm font-semibold" style={{color:'#7c3aed'}}>Edit</a>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold"
                                            style={{background:'#e4defb', color:'#7c3aed'}}>SW</div>
                                            <div>
                                                <p className="text-sm font-semibold text-gray-900">Sarah White</p>
                                                <p className="text-xs text-gray-400">s.white@mediqueue.com</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700">Physician Assistant</td>
                                    <td className="px-6 py-4">
                                        <span className="text-xs font-semibold px-3 py-1.5 rounded-full"
                                        style={{background:'#dcfce7', color:'#16a34a'}}>Available</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href="#" className="text-sm font-semibold" style={{color:'#7c3aed'}}>Edit</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/*System Settings*/}
                    <div className="w-80 bg-white rounded-2xl p-6" style={{border:'1px solid #ede9fb'}}>
                        <h3 className="text-lg font-bold text-gray-900 mb-5">⚙️ System Settings</h3>

                        <p className="text-sm font-semibold text-gray-700 mb-2">Clinic Operating Hours</p>
                        <div className="flex items-center gap-2 mb-5">
                            <input type="text" defaultValue="08:00 AM"
                            className="flex-1 px-3 py-2 rounded-xl text-sm outline-none"
                            style={{border:'1px solid #ede9fb'}} />
                            <span className="text-sm text-gray-400">to</span>
                            <input type="text" defaultValue="06:00 PM"
                            className="flex-1 px-3 py-2 rounded-xl text-sm outline-none"
                            style={{border:'1px solid #ede9fb'}} />
                        </div>

                        <p className="text-sm font-semibold text-gray-700 mb-2">Department Status</p>
                        <div className="flex items-center justify-between px-4 py-3 rounded-xl mb-2"
                        style={{border:'1px solid #ede9fb'}}>
                            <span className="text-sm text-gray-700">Emergency Room</span>
                            <span className="text-xs font-semibold px-2.5 py-1 rounded-full"
                            style={{background:'#dcfce7', color:'#16a34a'}}>ACTIVE</span>
                        </div>
                        <div className="flex items-center justify-between px-4 py-3 rounded-xl mb-2"
                        style={{border:'1px solid #ede9fb'}}>
                            <span className="text-sm text-gray-700">General OPD</span>
                            <span className="text-xs font-semibold px-2.5 py-1 rounded-full"
                            style={{background:'#dcfce7', color:'#16a34a'}}>ACTIVE</span>
                        </div>
                        <div className="flex items-center justify-between px-4 py-3 rounded-xl mb-5"
                        style={{border:'1px solid #ede9fb'}}>
                            <span className="text-sm text-gray-700">Radiology Lab</span>
                            <span className="text-xs font-semibold px-2.5 py-1 rounded-full"
                            style={{background:'#fee2e2', color:'#dc2626'}}>PAUSED</span>
                        </div>

                        <button className="w-full text-sm font-semibold py-3 rounded-xl"
                        style={{border:'1px solid #e4defb', color:'#7c3aed'}}>
                            Save Global Changes
                        </button>
                    </div>
                </div>

                {/*Bottom Row: Daily Insight Reports + Queue Velocity*/}
                <div className="flex gap-6 items-start">

                    {/*Daily Insight Reports*/}
                    <div className="flex-1 bg-white rounded-2xl p-6" style={{border:'1px solid #ede9fb'}}>
                        <div className="flex items-center justify-between mb-1">
                            <h3 className="text-xl font-bold text-gray-900">Daily Insight Reports</h3>
                            <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white"
                            style={{background:'linear-gradient(90deg, #8b5cf6, #7c3aed)'}}>
                                ⬇ Download All
                            </button>
                        </div>
                        <p className="text-sm text-gray-500 mb-5">Automated analysis of queue efficiency.</p>

                        <div className="flex gap-4">
                            <a href="#" className="flex-1 flex items-center gap-3 p-4 rounded-xl"
                            style={{border:'1px solid #ede9fb'}}>
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                                style={{background:'#f3effe'}}>
                                    <span>📄</span>
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-semibold text-gray-900">Wait Time Distribution</p>
                                    <p className="text-xs text-gray-400">Updated 2h ago • 2.4 MB</p>
                                </div>
                                <span className="text-gray-300">›</span>
                            </a>

                            <a href="#" className="flex-1 flex items-center gap-3 p-4 rounded-xl"
                            style={{border:'1px solid #ede9fb'}}>
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                                style={{background:'#f3effe'}}>
                                    <span>🥧</span>
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-semibold text-gray-900">Departmental Flow</p>
                                    <p className="text-xs text-gray-400">Updated 2h ago • 1.1 MB</p>
                                </div>
                                <span className="text-gray-300">›</span>
                            </a>
                        </div>
                    </div>

                    {/*Queue Velocity*/}
                    <div className="w-80 rounded-2xl p-6 text-white"
                    style={{background:'linear-gradient(160deg, #8b5cf6, #6d28d9)'}}>
                        <h3 className="text-xl font-bold mb-1">Queue Velocity</h3>
                        <p className="text-sm opacity-80 mb-5">Real-time throughput analysis per department.</p>

                        <div className="mb-4">
                            <div className="flex items-center justify-between text-sm mb-1.5">
                                <span>General Checkup</span>
                                <span className="font-semibold">88% Efficiency</span>
                            </div>
                            <div className="w-full h-1.5 rounded-full" style={{background:'rgba(255,255,255,0.25)'}}>
                                <div className="h-1.5 rounded-full bg-white" style={{width:'88%'}}></div>
                            </div>
                        </div>

                        <div className="mb-4">
                            <div className="flex items-center justify-between text-sm mb-1.5">
                                <span>Dental Service</span>
                                <span className="font-semibold">62% Efficiency</span>
                            </div>
                            <div className="w-full h-1.5 rounded-full" style={{background:'rgba(255,255,255,0.25)'}}>
                                <div className="h-1.5 rounded-full bg-white" style={{width:'62%'}}></div>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between text-sm mb-1.5">
                                <span>Vaccination Center</span>
                                <span className="font-semibold">95% Efficiency</span>
                            </div>
                            <div className="w-full h-1.5 rounded-full" style={{background:'rgba(255,255,255,0.25)'}}>
                                <div className="h-1.5 rounded-full bg-white" style={{width:'95%'}}></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/*Footer*/}
            <div className="flex items-center justify-between px-8 py-6 mt-2 text-sm text-gray-400"
            style={{borderTop:'1px solid #ede9fb'}}>
                <div className="flex items-center gap-2">
                    <span className="font-bold" style={{color:'#7c3aed'}}>MediQueue</span>
                    <span className="text-xs">v4.2.0 Stable Build</span>
                </div>
                <div className="flex items-center gap-6">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Contact Support</a>
                    <a href="#">Clinic Login</a>
                    <span>© 2024 MediQueue Health Systems. All rights reserved.</span>
                </div>
            </div>
        </div>

        </div>
    )
}

export default StaffManagement
function Landing(){
    return (
        <div className="min-h-screen bg-white">
            
            {/*Navbar*/}
            <nav className="bg-white flex items-center justify-between px-8 py-4 border-b border-outline-varient">

                {/*Left - Logo */}
                <span className="font-bold text-xl" style={{color: '#630ed4'}}>Medi-Q</span>

                {/* Midddle - links*/}
                <div className="flex gap-6">
                <a href="#" className="font-semibold border-b-2 "style={{color: '#630ed4'}}>Queue</a>
                <a href="#" className="text-gray-500">Schedules</a>
                <a href="#" className="text-gray-500">History</a>
                <a href="#" className="text-gray-500">Settings</a>
                </div>

                {/*Right Actions*/}
                <div className="flex items-center gap-4">
                    <span className="text-gray-500 cursor-pointer">🔔</span>
                    <span className="text-gray-500 cursor-pointer">👤</span>
                    <a href="#" className="text-gray-600">Login</a>
                    {/*Sign up Button*/}
                    <button className="text-white px-4 py-2 rounded-lg text-sm font-semibold"style={{background: '#7c3aed'}}>
                        Sign Up
                    </button>
                </div>
            </nav>
            {/*Hero section*/}
            <section className="text-center px-8 py-20" style={{background: 'linear-gradient(to bottom, #f3ecfb,#ffffff)'}}>
                <h1 className="text-6xl font-bold text-gray-900 leading-tight mb-4">
                    Clinic Queue Management<br/>
                    <span style={{color:'#7c3aed'}}>Simplified</span>
                </h1>
                <p className="text-gray-500 text-lg max-w-xl mx-auto mb-10">
                    Experience healthcare without the wait. Join live queues remotely,
                    track your status in real-time, and get notified exactly when it's your turn.
                </p>

                {/*CTA Cards*/}
                <div className="flex gap-12 justify-center mt-10">

                    {/*Card 1 - Join Live Queue*/}
                    <div className="bg-white border  rounded-2xl p-6 w-100 text-left cursor-pointer"style={{border: '1px solid #d4d3d9'}}>
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{background:'#7c3aed'}}>
                            <span className="text-white text-lg">📡</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Join Live Queue</h3>
                        <p className="text-gray-500 text-sm mb-4">See real-time wait times and Secure your spot from your phone before leaving home.</p>
                        <a href="#" className="text-sm font-bold flex items-center gap-1" style={{color:'#7c3aed'}}>
                            Go Mobile ➔
                            </a>
                    </div>

                    {/*Card 2 -Book Appointment*/}
                    <div className="bg-white  rounded-2xl p-6 w-100 text-left cursor-pointer"style={{border: '1px solid #d4d3d9'}}>
                        <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center mb-4">
                            <span className="text-lg">📅</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Book Appointment</h3>
                        <p className="text-gray-500 text-sm mb-4">Schedule a preferred time for non-urgent consultations and specialist visits.</p>
                        <a href="#" className="text-sm font-bold flex items-center gap-1" style={{color:'#7c3aed'}}>
                            Schedule Now ➔
                        </a>
                    </div>
                </div>
            </section>
            {/*Scan section*/}
            <section className="flex items-center justify-between px-20 py-16" style={{background:'#fef7ff', borderBottom:'1px solid #cc3d8'}}>
                <div className="max-w-md">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Scan to Join
                        </h2>
                    
                    <p className="text-gray-500 text-base leading-relaxed">
                        Scan this code at the clinic to instantly join the live queue. No app download required.
                        </p>
                </div>

                <div className="w-48 h-48 rounded-xl flex items-center justify-center text-gray-400 text-sm font-medium"
                style={{border:'1px solid #0e0e0f',background:'#faf9ff'}}>
                    QR 
                    </div>

            </section>

            {/*status bar*/}
            <div className="flex" style={{background:'#fef7ff',border:'1px solid #ccc3d8',borderRadius:'12px',margin:'40px 60px'}}>

                {/*current*/}
                <div className="flex-1 text-center py-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Current patient</p>
                    <p className="text-3xl font-bold" style={{color:'#7c3aed'}}>#A-402</p>
                </div>

                {/*Divider*/}
                <div style={{width: '1px',background:'#ccc3d8'}}></div>

                {/*Avg Wait Time*/}
                <div className="flex-1 text-center py-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Avg Wait Time</p>
                    <p className="text-3xl font-bold text-gray-900">14 min</p>
                </div>

                {/*Divider*/}
                <div style={{width: '1px',background:'#ccc3d8'}}></div>

                {/*Patients Waiting*/}
                <div className="flex-1 text-center py-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Patients Waiting</p>
                    <p className="text-3xl font-bold text-gray-900">08</p>
                </div>
            </div>

            {/*Feature Section*/}
            <section className="flex items-center justify-between px-20 py-16">

                {/*Left - Text*/}
                <div className="mix-w-sm">
                    <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{color:'#7c3aed'}}>
                        Efficiency Reimagined
                    </p>
                    <h2 className="text-4xl font-bold text-gray-900 mb-10 leading-tight">
                        Modern tools for the digital patient.
                    </h2>

                    {/*Feature 1*/}
                    <div className="flex items-start gap-4 mb-6">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{background:'#f3ebfa'}}>
                            <span>🔄</span>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-900 mb-1">Real-time tracking</p>
                            <p className="text-sm text-gray-500">Watch the queue move in real-time. Know exactly how many people are ahead of you without checking in at the front desk.</p>
                        </div>
                    </div>

                    {/*Feature 2*/}
                    <div className="flex items-start gap-4 mb-6">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{background:'#f3ebfa'}}>
                            <span>💬</span>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-900 mb-1">Smart SMS Alerts</p>
                            <p className="text-sm text-gray-500">Receive automated text messages when you're 2nd and 1st in line, giving you plenty of time to head to the clinic.</p>
                        </div>
                    </div>

                    {/**Feature 3*/}
                    <div className="flex items-start gap-4 mb-6">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"style={{background:'#f3ebfa'}}>
                            <span>🏠</span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 mb-1">Digital Waiting Room</p>
                          <p className="text-sm text-gray-500">The world is your waiting room. spend your wiat time at a nearby cafe or in the comfort of your own car.</p>
                        </div>
                    </div>
                </div>
                  {/* Right - Illustration placeholder */}
                  <div className="w-96 h-80 rounded-2xl flex items-center justify-center text-gray-400"
                    style={{background: '#f3ebfa', border: '1px solid #ede9fb'}}>
                      Illustration
                    </div>

            </section>
            {/*footer*/}
            <section className="flex justify-between h-40" style={{background:'#fef7ff',border:'1px solid #ccc3d8'}}>
                      <div className="">
                    <p className="mt-10 pl-10 text-xl font-bold uppercase tracking-widest mb-3" style={{color:'#7c3aed'}}>
                        Medi-Q
                    </p>
                    <h3 className="text-xm pl-9">@2026 Medi-Q health Systems.All rights reserved.</h3>
                     </div>
                     <div className=" flex text-xm text-gray-400 pt-15 pr-9 gap-6 align-items-center">
                            <h3>Privacy Policy</h3>
                            <h3>Terms of rvice</h3>
                            <h3>Contact Support</h3>
                            <h3>Clinic Login</h3>
                     </div>
            </section>
        </div>
    )
}

export default Landing
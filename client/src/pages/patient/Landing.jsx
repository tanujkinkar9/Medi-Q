function Landing(){
    return (
        <div className="min-h-screen bg-white">
            
            {/*Navbar*/}
            <nav className="bg-white flex items-center justify-between px-8 py-4 border-b-1">

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
                            Schedule Now →
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Landing
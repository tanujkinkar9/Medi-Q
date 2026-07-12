function Landing(){
    return (
        <div className="min-h-screen bg-white">
            
            {/*Navbar*/}
            <nav className="bg-purple-50 flex items-center justify-between px-8 py-4">

                {/*Left - Logo */}
                <span className="text-purple-700 font-bold text-xl">Medi-Q</span>

                {/* Midddle - links*/}
                <div className="flex gap-6">
                <a href="#" className="text-purple-700 font-semibold border-b-2 border-purple-700">Queue</a>
                <a href="#" className="text-gray-500">Schedules</a>
                <a href="#" className="text-gray-500">History</a>
                <a href="#" className="text-gray-500">Settings</a>
                </div>

                {/*Right Actions*/}
                <div className="flex items-center gap-4">
                    <span className="text-gray-500 cursor-pointer">🔔</span>
                    <span className="text-gray-500 cursor-pointer">👤</span>
                    <a href="#" className="text-gray-600">Login</a>
                    <button className="bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                        Sign Up
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Landing
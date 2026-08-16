function WaitingBoard() {
    return (
        <div className="min-h-screen pb-20"style={{background:'#faf9ff'}}>
            {/*Navabr*/}
            <nav className="flex items-center justify-between px-6 py-4 bg-white"
            style={{borderBottom: '1px solid #ede9fb'}}>
                <span className="font-bold text-xl" style={{color:'#630ed4'}}>Medi-Q</span>
                <div className="flex items-center gap-4">
                    <span className="text-gray-400 cursor-pointer">🔔</span>
                    <span className="text-gray-400 cursor-pointer">👤</span>
                </div>
            </nav>
            {/*Purple Current Card*/}
            <div className="mx-4 mt-4 rounded-2xl p-6"style={{background:'linear-gradient(135deg,#7c3aed,#6d28d9)'}}>
                <p className="text-xs font-semibold uppercase tracking-widest text-purple-300 mb-2">Currently Being Called</p>
                <h1 className="text-7xl font-bold text-white mb-4">M-402</h1>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm"
                style={{background:'rgba(255,255,255,0.15)'}}>
                🚪 Consultation Room 04
                </div>
            </div>
            {/*2 stat Boxes*/}
            <div className="flex gap-3 mx-4 mt-4">
                <div className="flex-1 bg-white rounded-xl p-4"style={{border:'1px solid #ede9fb'}}>
                    <p className="text-sm text-gray-500 mb-1">Avg. Wait Time</p>
                    <p className="text-2xl font-bold"style={{color:'#7c3aed'}}>24<span className="text-sm font-normal">mins</span></p>
                </div>
                <div className="flex-1 bg-white rounded-xl p-4" style={{border:'1px solid #ede9fb'}}>
                    <p className="text-sm text-gray-500 mb-1">Patients Waiting</p>
                    <p className="text-2xl font-bold text-gray-900">18</p>
                </div>
            </div>
            {/*Next Expected Call*/}
            <div className="mx-4 mt-3 bg-white rounded-xl p-4 flex items-center justify-between"
            style={{border:'1px solid #ede9fb'}}>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Next Expected Call</p>
                    <p className="text-lg font-bold text-gray-900">Token A-112</p>
                  </div>
                    <div className="text-right">
                    <p className="text-xs text-gray-400 mb-1">In Approx.</p>
                    <p className="text-lg font-bold" style={{color: '#7c3aed'}}>4 mins</p>
                     </div>
                
            </div>

            {/*Info box*/}
            <div className="mx-4 mt-3 rounded-xl p-4 flex items-start gap-3"
            style={{background:'#f3ebfa',border:'1px solid #ede9fb'}}>
                <span>ℹ️</span>
                <p className="text-sm text-gray-600">Please have your token number ready and proceed to the designated room immediately when called. If you miss your turn, please cheak in at the reception desk.</p>
            </div>

            {/*Queue Table*/}
            <div className="mx-4 mt-4 bg-white rounded-xl overflow-hidden"style={{border:'1px solid #ede9fb'}}>
                <table className="w-full">
                    <thead>
                        <tr style={{borderBottom:'1px solid #ede9fb'}}>
                            <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase">POS</th>
                            <th className="text-left py-4 py-3 text-xs font-semibold text-gray-400 uppercase">TOKEN</th>
                            <th className="text-left py-4 py-3 text-xs font-semibold text-gray-400 uppercase">Est.Wait</th>
                            <th className="text-left py-4 py-3 text-xs font-semibold text-gray-400 uppercase">Status</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{borderBottom:'1px solid #f5f3ff',backgroud:'#faf9ff'}}>
                        <td className="px-4 py-3 text-sm text-gray-400">--</td>
                        <td className="px-4 py-3 text-sm font-bold"style={{color:'#7c3aed'}}>M-402</td>
                        <td className="px-4 py-3 text-sm text-gray-500">4 min</td>
                        <td className="px-4 py-3"><span className="px-2 py-1 rounded-full text-xs font-semibold"style={{background:'#f3ebfa',color:'#7c3aed'}}>WAITING</span></td>
                        </tr>
                        <tr style={{borderBottom:'1px solid #f5f3ff'}}>
                            <td className="px-4 py-3 text-sm text-gray-700">1</td>
                            <td className="px-4 py-3 text-sm font-semibold text-gray-900">A-112</td>
                            <td className="px-4 py-3 text-sm text-gray-500">4 min</td>
                            <td className="px-4 py-3"><span className="px-2 py-1 rounded-full text-xs font-semibold"style={{background:'#f3ebfa',color:'#7c3aed'}}>WAITING</span></td>
                        </tr>
                        <tr style={{borderBottom:'1px solid #f5f3ff'}}>
                            <td className="px-4 py-3 text-sm text-gray-700">2</td>
                            <td className="px-4 py-3 text-sm font-semibold text-gray-900">A-113</td>
                            <td className="px-4 py-3 text-sm text-gray-500">9 min</td>
                            <td className="px-4 py-3"><span className="px-2 py-1 rounded-full text-xs font-semibold"style={{background:'#f3ebfa',color:'#7c3aed'}}>WAITING</span></td>
                        </tr>
                        <tr style={{borderBottom:'1px solid #f5f3ff'}}>
                            <td className="px-4 py-3 text-sm text-gray-400">--</td>
                            <td className="px-4 py-3 text-sm font-semibold text-gray-900">M-398</td>
                            <td className="px-4 py-3 text-sm text-gray-500">Paused</td>
                            <td className="px-4 py-3"><span className="px-2 py-1 rounded-full text-xs font-semibold" style={{background: '#fef9ee' , color:'#b45309'}}>ON HOLD</span></td>
                        </tr>
                        <tr style={{borderBottom:'1px solid #f5f3ff'}}>
                            <td className="px-4 py-3 text-gray-700">3</td>
                            <td className="px-4 py-3 text-sm font-semibold text-gray-900">B-024</td>
                            <td className="px-4 py-3 text-sm text-gray-500">15 min</td>
                            <td className="px-4 py-3"><span className="px-2 py-1 rounded-full text-xs font-semibold" style={{background:'#f3ebfa' , color:'#7c3aed'}}>WAITING</span></td>
                        </tr>
                    </tbody>
                </table>
                <p className="text-xs text-gray-400 text-center py-3">Showing first 8 patients. Swipe or scroll for more.</p>
            </div>
                 {/* Bottom Nav */}
            <div className="fixed bottom-0 left-0 right-0 bg-white flex items-center justify-around py-3 " style={{borderTop:'1px solid #ede9fb'}}>
                <div className="flex flex-col items-center gap-1 px-4 py-2 rounded-xl" style={{background:'#7c3aed'}}>
                    <span className="text-white text-lg">🏠</span> 
                    <span className="text-xs font-semibold text-white">Home</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <span className="text-gray-400 text-lg">⏳</span> 
                    <span className="text-xs text-gray-400">My turn</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <span className="text-gray-400 text-lg">🗺️</span> 
                    <span className="text-xs text-gray-400">Clinic Map</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <span className="text-gray-400 text-lg">❓</span> 
                    <span className="text-xs text-gray-400">Help</span>
                </div>
                
            </div>

        </div>
    )
}
export default WaitingBoard;
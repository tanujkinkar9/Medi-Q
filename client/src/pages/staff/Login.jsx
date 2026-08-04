function Login(){
    return(
        <div className="min-h-screen flex flex-col items-center justify-center" style={{background:'linear-gradient(to bottom, #f3ecfb,#ffffff'}}>
         {/*Logo + Title*/}
        <div className="text-center mb-8">
            <span className="text-4xl">🏥</span>
            <h1 className="text-2xl font-bold mt-2" style={{color:'#7c3aed'}}>Medi-Q</h1>
            <p className="text-gray-500 text-sm mt-1">Secure access for healthcare professionals</p>

        </div>

         {/*Card*/}
         <div className="bg-white rounded-2xl p-8 w-full max-w-md"style={{border:'1px solid #ede9fb'}}>
         
         {/*staff Role dropdown*/}
         <div className="mb-6">
            <label className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2 block">
                Staff Role
            </label>
            <select className="w-full px-4 py-3 rounded-lg text-gray-700 outline-none" style={{border:'1px solid #ede9fb', background: '#faf9ff'}}>
                <option vlaue="">Select your role </option>
                <option value="doctor">Doctor</option>
                <option value="receptionist">Receptionist</option>
                <option value="admin">Admin</option>
            </select>
         </div>
         {/*Email input*/}
         <div className="mb-6">
            <label className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2 block">
            Email Address
            </label>
            <div className="flex items-center rounded-lg px-4 py-3 gap-3"style={{border:'1px solid #ede9fb',background: '#faf9ff'}}>
                <span className="text-gray-400">✉️</span>

                <input
                type="email"
                placeholder= "name@clinic.com"
                className="bg-transparent outline-none text-gray-700 w-full text-sm"
                />
            </div>
   
         </div>
         {/*password input*/}
         <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                    Password
                </label>
                 <a href="#" className="text-xs font-semibold" style={{color:'#7c3aed'}}>Forgot?</a>
            </div>
            <div className="flex items-center rounded-lg px-4 py-3 gap-3" style={{border:'1px solid #ede9fb', background:'#faf9ff'}}>
                <span className="text-gray-400">🔒</span>
                <input
                type="password"
                placeholder="••••••••"
                className="bg-transparent outline-none text-gray-700 w-full text-sm"
                />
                <span className="text-gray-400 cursor-pointer">👁️</span>
            </div>
         </div>
         {/*Sign In button */}
          <button className="w-full py-3 rounded-lg text-white font-semibold text-sm flex items-center justify-center gap-2"style={{background:'linear-gradient(135deg,#7c3aed,#a78bfa)'}}>
            Sign-In →
          </button>
         </div>
         {/*Footer Links*/}
         <div className="text-center mt-6">
            <div className="flex items-center justify-center gap-4 mb-2">
                <a href="#" className="text-sm text-gray-500">Emergency Support</a>
                <span className="text-gray-300">•</span>
                <a href="#" className="text-sm text-gray-500">IT Helpdesk</a>
                <span className="text-gray-300">•</span>
                <a href="#" className="text-sm text-gray-500">Privacy Policy</a>
                
            </div>
            <p className="text-xs text-gray-400 uppercase tracking-widest">
                @2026 Medi_Q Health Systems
                </p>
            </div>
         </div>

    )
}

export default Login
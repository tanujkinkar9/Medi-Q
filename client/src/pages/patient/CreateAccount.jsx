function CreateAccount() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6"
        style={{background: 'linear-gradient(to bottom,#f3ecfb,#ffffff )'}}>

            {/*Logo*/}
            <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{background: '#f3ebfa'}}>
                    <span className="text-3xl">➕</span>
                </div>
                <h1 className="text-2xl font-bold text-gray-900">Create Account</h1>
                <p className="text-gray-500 text-sm mt-2">Join Medi-Q to manage your appointments and clinic wait times seamlessly.</p>
            </div>
             {/*Form Card*/}
             <div className="bg-white rounded-2xl p-8 w-full max-w-md"
             style={{border: '1px solid #ede9fb'}}>

                {/*Full Name*/}
                <div className="mb-4">
                 <label className="text-sm front-semibold text-gray-700 mb-2 block">Full Name</label>
                 <div className="flex items-center rounded-lg px-4 py-3 gap-3"
                 style={{border:'1px solid #ede9fb',background:'#faf9ff'}}>
                    <span className="text-gray-400">👤</span>
                    <input type="text" placeholder="Tanuj Kinkar"
                    className="bg-transparent outline-none text-gray-700 w-full text-sm"/>

                 </div>
                </div>

                {/*Phone Number*/}
                <div className="mb-4">
                    <label className="text-sm font-semibold text-gray-700 mb-2 block">Phone Number</label>
                    <div className="flex items-center rounded-lg px-4 py-3 gap-3"
                    style={{border: '1px solid #ede9fb',background:'#faf9ff'}}>
                        <span className="text-gray-400">📞</span>
                        <input type="tel" placeholder="+91 00-00-00-00-00"
                        className="bg-transparent outline-none text-gray-700 w-full text-sm"/>

                    </div>
                </div>
                {/*Email*/}
                <div className="mb-4">
                    <label className="text-sm font-semibold text-gary-700 mb-2 block">Email Address</label>
                    <div className="flex items-center rounded-lg px-4 py-3 gap-3"
                    style={{border: '1px solid #ede9fb',background:'#faf9ff'}}>
                        <input type="email" placeholder="prem@example.com"
                        className="bg-transperent outline-none text-gray-700 w-full text-sm"/>
                    </div>
                </div>
                {/*Password*/}
                <div className="mb-4">
                    <label className="flex items-center rounded-lg px-4 py-3">Password</label>
                    <div className="flex items-center rounded-lg px-4 py-3 gap-3"
                    style={{border: '1px solid #ede9fb', background:'#faf9ff'}}>
                        <span className="text-gray-400">🔒</span>
                        <input type="password"placeholder="••••••••"
                        className="bg-transparent outline-none text-gray-700 w-full text-sm"/>
                        <span className="text-gray-400 cursor-pointer">👁️</span>

                    </div>
                </div>

                {/*Term Checkbox*/}
                <div className="flex items-start gap-3 mb-6">
                    <input type="checkbox"className="mt-1 cursor-pointer accent-purple-600"/>
                    <p className="text-sm text-gray-500">
                        I agree to the{' '}
                        <a href="#"style={{color:'#7c3aed'}}className="font-semibold">Terms of Services</a>
                        
                    </p>
                </div>
             

              {/* Create Account Button */}
              <button className="w-full py-3 rounded-lg text-white font-semibold text-sm"
                style={{background: 'linear-gradient(135deg, #7c3aed, #a78bfa)'}}>
                    Create Account →
                     </button>

              </div>
 
            {/* OR Continue with */}
               <div className="flex items-center gap-4 my-6 w-full max-w-md">
                 <div className="flex-1 h-px bg-gray-200"></div>
                   <span className="text-xs text-gray-400 uppercase tracking-widest">Or continue with</span>
                  <div className="flex-1 h-px bg-gray-200"></div>
                  </div>
        </div>
    )
}

export default CreateAccount;
function Landing() {
  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold"
              style={{ background: "#7c3aed" }}
            >
              M
            </div>

            <span
              className="font-bold text-xl"
              style={{ color: "#630ed4" }}
            >
              Medi-Q
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a
              href="#queue"
              className="hover:text-violet-600 transition"
            >
              Queue
            </a>

            <a
              href="#features"
              className="text-gray-500 hover:text-violet-600 transition"
            >
              Features
            </a>

            <a
              href="#how-it-works"
              className="text-gray-500 hover:text-violet-600 transition"
            >
              How it works
            </a>

            <a
              href="#contact"
              className="text-gray-500 hover:text-violet-600 transition"
            >
              Contact
            </a>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">

            <button className="hidden sm:block text-gray-600 text-sm font-medium hover:text-violet-600">
              Login
            </button>

            <button
              className="text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-sm hover:opacity-90 transition"
              style={{ background: "#7c3aed" }}
            >
              Sign Up
            </button>

          </div>
        </div>
      </nav>


      {/* ================= HERO ================= */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #f5efff 0%, #ffffff 100%)",
        }}
      >

        {/* Decorative circles */}
        <div
          className="absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-20"
          style={{ background: "#7c3aed" }}
        />

        <div
          className="absolute bottom-0 -left-32 w-80 h-80 rounded-full opacity-10"
          style={{ background: "#7c3aed" }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Hero Text */}
            <div>

              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-6"
                style={{
                  background: "#eee6ff",
                  color: "#6d28d9",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Smart Healthcare Queue
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
                Clinic visits,
                <br />
                <span style={{ color: "#7c3aed" }}>
                  without the wait.
                </span>
              </h1>

              <p className="text-gray-500 text-lg lg:text-xl leading-relaxed max-w-xl mt-7">
                Join your clinic queue remotely, track your position
                in real-time, and arrive exactly when it is your turn.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-9">

                <button
                  className="px-7 py-3.5 rounded-xl text-white font-semibold shadow-lg hover:opacity-90 transition"
                  style={{ background: "#7c3aed" }}
                >
                  Join a Queue →
                </button>

                <button
                  className="px-7 py-3.5 rounded-xl font-semibold border bg-white hover:bg-gray-50 transition"
                  style={{
                    borderColor: "#ddd6fe",
                    color: "#6d28d9",
                  }}
                >
                  For Clinics
                </button>

              </div>

              <div className="flex items-center gap-6 mt-8 text-sm text-gray-500">

                <span className="flex items-center gap-2">
                  ✓ No app download
                </span>

                <span className="flex items-center gap-2">
                  ✓ Real-time updates
                </span>

              </div>

            </div>


            {/* Live Queue Card */}
            <div className="relative">

              <div className="absolute inset-0 bg-violet-300 blur-3xl opacity-20 rounded-full"></div>

              <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 max-w-md mx-auto">

                {/* Clinic Header */}
                <div className="flex items-center justify-between mb-6">

                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">
                      Live Queue
                    </p>

                    <h3 className="font-bold text-lg mt-1">
                      Sunrise Care Clinic
                    </h3>
                  </div>

                  <span className="flex items-center gap-2 text-xs font-medium text-green-600 bg-green-50 px-3 py-1.5 rounded-full">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Live
                  </span>

                </div>


                {/* Token */}
                <div
                  className="rounded-2xl p-6 text-center mb-5"
                  style={{
                    background:
                      "linear-gradient(135deg, #f3e8ff, #faf5ff)",
                  }}
                >

                  <p className="text-sm text-gray-500">
                    Your Token
                  </p>

                  <p
                    className="text-5xl font-bold mt-2"
                    style={{ color: "#7c3aed" }}
                  >
                    B-15
                  </p>

                  <p className="text-sm text-gray-500 mt-2">
                    Estimated wait time
                  </p>

                  <p className="font-bold text-gray-900 mt-1">
                    ~12 minutes
                  </p>

                </div>


                {/* Queue Progress */}
                <div className="mb-6">

                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-500">
                      People ahead
                    </span>

                    <span className="font-semibold">
                      3 patients
                    </span>
                  </div>

                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">

                    <div
                      className="h-full rounded-full"
                      style={{
                        width: "70%",
                        background: "#7c3aed",
                      }}
                    />

                  </div>

                </div>


                {/* Status */}
                <div className="grid grid-cols-2 gap-3">

                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-xs text-gray-400">
                      Current Token
                    </p>

                    <p className="font-bold mt-1">
                      B-12
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-xs text-gray-400">
                      Avg. Time
                    </p>

                    <p className="font-bold mt-1">
                      4 min
                    </p>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ================= TRUST BAR ================= */}
      <section className="border-y border-gray-100 bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-7">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

            <div>
              <p
                className="text-2xl font-bold"
                style={{ color: "#7c3aed" }}
              >
                10K+
              </p>

              <p className="text-sm text-gray-500 mt-1">
                Patients served
              </p>
            </div>

            <div>
              <p
                className="text-2xl font-bold"
                style={{ color: "#7c3aed" }}
              >
                50+
              </p>

              <p className="text-sm text-gray-500 mt-1">
                Clinics
              </p>
            </div>

            <div>
              <p
                className="text-2xl font-bold"
                style={{ color: "#7c3aed" }}
              >
                40%
              </p>

              <p className="text-sm text-gray-500 mt-1">
                Less waiting
              </p>
            </div>

            <div>
              <p
                className="text-2xl font-bold"
                style={{ color: "#7c3aed" }}
              >
                24/7
              </p>

              <p className="text-sm text-gray-500 mt-1">
                Queue visibility
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ================= HOW IT WORKS ================= */}
      <section
        id="how-it-works"
        className="px-6 lg:px-10 py-24"
      >

        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-2xl mx-auto">

            <p
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: "#7c3aed" }}
            >
              How it works
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold mt-3">
              A simpler way to visit the doctor.
            </h2>

            <p className="text-gray-500 mt-5">
              Medi-Q removes the uncertainty from clinic waiting rooms.
            </p>

          </div>


          <div className="grid md:grid-cols-4 gap-6 mt-16">

            {[
              {
                number: "01",
                icon: "📱",
                title: "Join Queue",
                text: "Scan a QR code or join your clinic queue from your phone.",
              },
              {
                number: "02",
                icon: "🎫",
                title: "Get Token",
                text: "Receive your digital token number instantly.",
              },
              {
                number: "03",
                icon: "📍",
                title: "Track Live",
                text: "Monitor your position and estimated waiting time.",
              },
              {
                number: "04",
                icon: "🩺",
                title: "Arrive on Time",
                text: "Come to the clinic when your turn is approaching.",
              },
            ].map((item) => (

              <div
                key={item.number}
                className="relative bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition"
              >

                <div className="flex justify-between items-start">

                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                    style={{ background: "#f3e8ff" }}
                  >
                    {item.icon}
                  </div>

                  <span className="text-sm font-bold text-gray-300">
                    {item.number}
                  </span>

                </div>

                <h3 className="font-bold text-lg mt-6">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed mt-2">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* ================= QUEUE STATUS ================= */}
      <section
        id="queue"
        className="px-6 lg:px-10 pb-24"
      >

        <div className="max-w-6xl mx-auto">

          <div
            className="rounded-3xl p-8 lg:p-12"
            style={{
              background: "#faf7ff",
              border: "1px solid #e9dffb",
            }}
          >

            <div className="grid lg:grid-cols-4 gap-8 items-center">

              <div className="lg:col-span-1">

                <p
                  className="text-sm font-semibold uppercase tracking-wider"
                  style={{ color: "#7c3aed" }}
                >
                  Live status
                </p>

                <h2 className="text-2xl font-bold mt-2">
                  Know what is happening before you arrive.
                </h2>

              </div>


              <div className="lg:col-span-3 grid grid-cols-3 divide-x divide-gray-200">

                <div className="text-center px-3">

                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Current patient
                  </p>

                  <p
                    className="text-3xl font-bold mt-2"
                    style={{ color: "#7c3aed" }}
                  >
                    #A-402
                  </p>

                </div>


                <div className="text-center px-3">

                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Avg wait
                  </p>

                  <p className="text-3xl font-bold mt-2">
                    14 min
                  </p>

                </div>


                <div className="text-center px-3">

                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Waiting
                  </p>

                  <p className="text-3xl font-bold mt-2">
                    08
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FEATURES ================= */}
      <section
        id="features"
        className="px-6 lg:px-10 py-24 bg-gray-50"
      >

        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Text */}
            <div>

              <p
                className="text-sm font-semibold uppercase tracking-widest"
                style={{ color: "#7c3aed" }}
              >
                Efficiency reimagined
              </p>

              <h2 className="text-4xl lg:text-5xl font-bold mt-3 leading-tight">
                Modern tools for the digital patient.
              </h2>

              <p className="text-gray-500 mt-5 leading-relaxed">
                Medi-Q gives patients visibility while helping clinics
                manage queues more efficiently.
              </p>


              <div className="space-y-7 mt-10">

                <div className="flex gap-4">

                  <div
                    className="w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center"
                    style={{ background: "#ede9fe" }}
                  >
                    🔄
                  </div>

                  <div>
                    <h3 className="font-bold">
                      Real-time tracking
                    </h3>

                    <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                      Watch the queue move in real-time and know exactly
                      how many patients are ahead of you.
                    </p>
                  </div>

                </div>


                <div className="flex gap-4">

                  <div
                    className="w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center"
                    style={{ background: "#ede9fe" }}
                  >
                    💬
                  </div>

                  <div>
                    <h3 className="font-bold">
                      Smart notifications
                    </h3>

                    <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                      Get notified when your appointment or token is
                      approaching.
                    </p>
                  </div>

                </div>


                <div className="flex gap-4">

                  <div
                    className="w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center"
                    style={{ background: "#ede9fe" }}
                  >
                    🏠
                  </div>

                  <div>
                    <h3 className="font-bold">
                      Digital waiting room
                    </h3>

                    <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                      Spend your waiting time at home, in your car,
                      or at a nearby café instead of sitting in a clinic.
                    </p>
                  </div>

                </div>

              </div>

            </div>


            {/* UI Illustration */}
            <div>

              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6">

                <div className="flex items-center justify-between mb-6">

                  <div>
                    <p className="text-xs text-gray-400">
                      YOUR QUEUE
                    </p>

                    <h3 className="font-bold text-lg mt-1">
                      City Care Clinic
                    </h3>
                  </div>

                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "#f3e8ff" }}
                  >
                    🏥
                  </div>

                </div>


                <div className="space-y-3">

                  <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50">

                    <div className="flex items-center gap-3">

                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm"
                        style={{
                          background: "#ede9fe",
                          color: "#7c3aed",
                        }}
                      >
                        A
                      </div>

                      <div>
                        <p className="font-semibold text-sm">
                          Current token
                        </p>

                        <p className="text-xs text-gray-400">
                          Being served
                        </p>
                      </div>

                    </div>

                    <p className="font-bold">
                      A-402
                    </p>

                  </div>


                  <div
                    className="p-5 rounded-xl"
                    style={{
                      background:
                        "linear-gradient(135deg, #7c3aed, #9333ea)",
                    }}
                  >

                    <div className="flex justify-between items-center text-white">

                      <div>
                        <p className="text-xs opacity-80">
                          Your token
                        </p>

                        <p className="text-3xl font-bold mt-1">
                          A-410
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="text-xs opacity-80">
                          People ahead
                        </p>

                        <p className="text-xl font-bold">
                          8
                        </p>
                      </div>

                    </div>

                    <div className="mt-5">

                      <div className="h-2 bg-white/20 rounded-full overflow-hidden">

                        <div
                          className="h-full bg-white rounded-full"
                          style={{ width: "62%" }}
                        />

                      </div>

                      <p className="text-xs text-white/80 mt-2">
                        Estimated wait: 14 minutes
                      </p>

                    </div>

                  </div>


                  <button
                    className="w-full py-3 rounded-xl font-semibold text-sm"
                    style={{
                      background: "#f3e8ff",
                      color: "#7c3aed",
                    }}
                  >
                    View Live Queue
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= QR SECTION ================= */}
      <section className="px-6 lg:px-10 py-24">

        <div
          className="max-w-6xl mx-auto rounded-3xl overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #f8f3ff, #ffffff)",
            border: "1px solid #e9dffb",
          }}
        >

          <div className="grid md:grid-cols-2 items-center">

            <div className="p-8 lg:p-14">

              <p
                className="text-sm font-semibold uppercase tracking-widest"
                style={{ color: "#7c3aed" }}
              >
                Quick access
              </p>

              <h2 className="text-4xl font-bold mt-3">
                Scan. Join. Relax.
              </h2>

              <p className="text-gray-500 mt-5 leading-relaxed">
                Scan the QR code at your clinic to instantly join the
                live queue. No app download required.
              </p>

              <button
                className="mt-7 px-6 py-3 rounded-xl text-white font-semibold"
                style={{ background: "#7c3aed" }}
              >
                Join Queue
              </button>

            </div>


            <div className="flex justify-center p-10">

              <div className="w-52 h-52 bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center justify-center">

                {/* QR placeholder */}
                <div className="grid grid-cols-7 gap-1 p-3">

                  {Array.from({ length: 49 }).map((_, index) => (

                    <div
                      key={index}
                      className="w-3 h-3 rounded-sm"
                      style={{
                        background:
                          [0, 1, 2, 7, 9, 14, 15, 16, 21, 23, 28, 29, 30, 35, 37, 42, 43, 44, 45, 48].includes(index)
                            ? "#111827"
                            : "#ffffff",
                      }}
                    />

                  ))}

                </div>

                <p className="text-xs text-gray-400 mt-1">
                  Scan to join queue
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>
      {/*================price section============= */}
      <section 
      id="pricing"
      className="px-6 lg:px-10 py-24 bg-white"
      >
        <div className="text-center max-w-2xl mx-auto">
            {/*heading*/}
            <div className="text-center max-w-2xl mx-auto">
                <p className="text-sm font-semibold uppercase tracking-widest"
                style={{color:"#7c3aed"}}>
                    Simple pricing
                </p>
             
                <h2 className="text-4xl lg:text-5xl font-bold mt-3">
                    Start small. Scale with your clinic.
                </h2>
                <p className="text-gray-500 mt-5 leading-relaxed">
                    Everything your clinic needs to manage patient queues,
                    appointments, and waiting times without complicated pricing.
                </p>
            </div>
            {/*Pricing card*/}
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-16">
                {/*FREE TRAIL*/}
                <div className="rounded-3xl border border-gray-200 p-8 bg-white">
                    <div>
                        <p className="text-lg font-bold">
                            Free Trail
                        </p>
                        <p className="text-sm text-gray-500 mt-2">
                            Try Medi-Q before committing to a plan.
                        </p>
                    </div>
                    <div className="mt-7">
                        <span className="text-5xl font-bold">
                            $0
                        </span>
                        <span className="text-gray-500">
                            / First month
                        </span>
                    </div>
                    <button
                    className="w-full mt-8 py-3 rounded-xl font-semibold border transition hover:bg-gray-50"
                    style={{
                        borderColor:"#c4b5fd",
                        color:"#7c3aed",
                    }}>
                        Star Free Trail
                    </button>
                    <div className="mt-8 space-y-4">
                    {[
                        "Live patient queue",
                        "Digital token system",
                        "Basic queue dashboard",
                        "Patient queue tracking",

                    ].map((feature) =>(
                        <div
                        key={feature}
                        className="flex items-center gap-3 text-sm text-gray-600">
                            <span
                            className="w-5 h-5 rounded-full flex items-center justify-center text-xs"
                            style={{background: "#ede9fe",
                                color:"#7c3ard",
                            }}>
                                ✓
                            </span>
                            {feature}
                        </div>
                    ))}
                    </div>
                </div>
                {/*=========CLINIC PLAN====================*/}
                <div
                className="relative rounded-3xl p-8 bg-white shadow-2xl"
                style={{
                    border:"2px solid #7c3aed",
                }}>
                    {/*Popular bagde*/}
                    <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-xs font-bold text-white"
                    style={{background:"#7c3aed"}}>
                        MOST POPULAR
                    </div>
                    <div>
                        <p className="text-lg font-bold"
                        style={{color:"#630ed4"}}>
                            Clinic Plan
                        </p>
                        <p className="text-sm text-gray-500 mt-2">
                            Everything a growing clinic needs.
                        </p>
                    </div>
                    <div className="mt-7">
                        <span
                        className="text-5xl font-bold"
                        >$999
                        </span>
                    </div>

                    <p className="text-xs text-gray-400 mt-2">
                        First month free
                    </p>

                    <button
                    className="w-full mt-7 py-3 rounded-xl text-white font-semibold shadow-md hover:opacity-90 transition"
                    style={{background:"linear-gradient(135deg, #630ed4,#7c3aed)",}}>
                        Start Free trail
                    </button>
                    <div className="mt-8 space-y-4">
                        {[
                            "Everything in Free Trail",
                            "Unlimited Patients",
                            "Live queue management",
                            "Appointment management",
                            "Doctor dashboard",
                            "Patient Notification",
                            "Queue analytics",
                        ].map((feature) => (
                            <div
                            key={feature}
                            className="flex items-center gap-3 text-sm text-gray-700">
                                <span
                                className="w-5 h-5 rounded-full flex items-center justify-center text-xs text-white"
                                style={{background:"#7c3aed"}}>
                                     ✓
                                </span>
                                {feature}
                                
                            </div>
                        ))}
                    </div>
                </div>
                {/*================ENTERPRIC==============*/}
                <div className="rounded-3xl border border-gray-200 p-8 bg-white">
                    <div>
                        <p className="text-lg font-bold">
                            Enterprise
                        </p>
                        <p className="text-sm text-gray-500 mt-2">
                            For hospitals and multi-location clinics.
                        </p>

                    </div>
                    <div className="mt-7">
                        <span className="text-4xl font-bold">
                            Custom
                        </span>
                    </div>
                    <p className="text-xs text-gray-400 mt-3">
                        Designed around your requirements
                    </p>
                    <button
                    className="w-full mt-7 py-3 rounded-xl font-semibold border transition hover:bg-gray-50"
                    style={{
                        borderColor:"#c4b5fd",
                        color:"#7c3aed",
                    }}>
                        Contact Us
                    </button>
                    <div className="mt-8 space-y-4">
                        {[
                            "Everything in Clinic Plan",
                            "Multiple clinic location",
                            "Advanced analytics",
                            "Admin & staff roles",
                            "Custom integration",
                            "Priority support",
                            "Dedicated onbording",
                        ].map((feature) =>(
                            <div
                            key={feature}
                            className="flex items-center gap-3 text-sm text-gray-600">
                                <span
                                className="w-5 h-5 rounded-full flex items-center justify-center text-xs"
                                style={{
                                    background:"#ede9fe",
                                    color:"#7c3aed",
                                }}>
                                ✓
                                </span>
                                {feature}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            {/*Bottom Note*/}
            <div className="text-center mt-10">
                <p className="text-sm text-gray-400">
                    No credit card required for the free trial.
                </p>
            </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-6 lg:px-10 pb-24">

        <div
          className="max-w-7xl mx-auto rounded-3xl p-10 lg:p-16 text-center text-white"
          style={{
            background:
              "linear-gradient(135deg, #630ed4, #7c3aed)",
          }}
        >

          <h2 className="text-4xl lg:text-5xl font-bold">
            Stop waiting for your turn.
          </h2>

          <p className="text-white/80 max-w-xl mx-auto mt-5">
            Join Medi-Q and experience a smarter, simpler way
            to manage your clinic visit.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">

            <button className="px-7 py-3.5 rounded-xl bg-white font-semibold text-violet-700 hover:bg-gray-100 transition">
              Join a Queue
            </button>

            <button className="px-7 py-3.5 rounded-xl border border-white/30 font-semibold hover:bg-white/10 transition">
              Get Medi-Q for your Clinic
            </button>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer
        id="contact"
        className="border-t"
        style={{
          background: "#faf8ff",
          borderColor: "#e5e0ef",
        }}
      >

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">

          <div className="flex flex-col md:flex-row justify-between gap-8">

            {/* Brand */}
            <div>

              <div className="flex items-center gap-2">

                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold"
                  style={{ background: "#7c3aed" }}
                >
                  M
                </div>

                <h2
                  className="text-xl font-bold"
                  style={{ color: "#7c3aed" }}
                >
                  Medi-Q
                </h2>

              </div>

              <p className="text-sm text-gray-500 mt-3 max-w-sm">
                Making healthcare visits simpler by replacing
                physical waiting with smart digital queues.
              </p>

              <p className="text-sm text-gray-400 mt-5">
                © 2026 Medi-Q. All rights reserved.
              </p>

            </div>


            {/* Links */}
            <div className="flex flex-wrap gap-8 text-sm text-gray-500">

              <a
                href="#"
                className="hover:text-violet-600 transition"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="hover:text-violet-600 transition"
              >
                Terms
              </a>

              <a
                href="#contact"
                className="hover:text-violet-600 transition"
              >
                Contact
              </a>

              <a
                href="#"
                className="hover:text-violet-600 transition"
              >
                Clinic Login
              </a>

            </div>

          </div>

        </div>

      </footer>

    </div>
  );
}

export default Landing;
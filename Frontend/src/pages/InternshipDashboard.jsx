import React from "react";

const InternshipDashboard = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-gray-50 font-['Inter','Noto Sans',sans-serif]">
      {/* Header */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-slate-200 px-10 py-4 bg-white">
        <div className="flex items-center gap-8">
          <a className="flex items-center gap-3 text-slate-900" href="#">
            <svg
              className="h-8 w-8 text-[var(--primary-color)]"
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
            <h2 className="text-slate-900 text-xl font-bold leading-tight tracking-tight">
              Internsphere
            </h2>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a className="text-slate-600 hover:text-[var(--primary-color)] text-sm font-medium transition-colors" href="#">
              Home
            </a>
            <a className="text-[var(--primary-color)] font-semibold text-sm" href="#">
              Internships
            </a>
            <a className="text-slate-600 hover:text-[var(--primary-color)] text-sm font-medium transition-colors" href="#">
              My Applications
            </a>
            <a className="text-slate-600 hover:text-[var(--primary-color)] text-sm font-medium transition-colors" href="#">
              Profile
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="relative">
            <span className="material-symbols-outlined text-slate-600 hover:text-slate-900 transition-colors">
              notifications
            </span>
            <div className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-white text-xs font-bold">
              3
            </div>
          </button>
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-slate-200 hover:border-[var(--primary-color)] transition-colors"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDk_IKYY_UER3yHROCTm42UsQAbAq85Vmi0fvD6nAb0zBMs31ECHq2SVqge7liQ430Yz1gv6icz2xmvI7jK_k9ZHDxwMuQ8UMDuPhpRktCyc_uebvt8sDSKguLbTsPOICLjidHuG_rKE3R0layiQxvP4CAL1_hSQ32l12HGnKgK2Pd2mVtmaTzMbJf0f4x593a5pakHwt2qyVoym9k_yFODaVTnbDb_iqE71iL3zB2VImR0wjEPrtTspWdLMOSjLCkyrKnXOj6ZZgA')",
            }}
          ></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-10 md:px-20 lg:px-40 flex flex-1 flex-col py-12">
        <div className="flex flex-col w-full max-w-screen-xl mx-auto">
          {/* Intro Section */}
          <div className="flex flex-col gap-6 mb-10">
            <h1 className="text-slate-900 text-4xl font-bold leading-tight tracking-tight">
              Find Your Next Internship
            </h1>
            <p className="text-slate-600 text-lg">
              Our AI-powered engine recommends the best internships for you based on your profile and preferences.
            </p>
          </div>

          {/* Search & Filters */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <form className="md:col-span-2">
                <div className="relative w-full">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                    <span className="material-symbols-outlined text-slate-500">search</span>
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-slate-100 border-slate-300 text-slate-900 text-base rounded-lg focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] block w-full pl-12 p-3.5"
                    placeholder="Search by title, company, or keyword"
                    required
                  />
                </div>
              </form>
              <div className="flex items-center gap-4">
                <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-white border border-slate-300 px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 transition-colors">
                  <span className="material-symbols-outlined text-lg">filter_list</span>
                  <span>Filter</span>
                </button>
                <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-white border border-slate-300 px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 transition-colors">
                  <span className="material-symbols-outlined text-lg">sort</span>
                  <span>Sort By</span>
                </button>
              </div>
            </div>
          </div>

          {/* Internship Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Card */}
            <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:shadow-xl hover:-translate-y-1 group">
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-1.5">
                  <p className="text-slate-900 text-lg font-bold leading-tight">Product Management Intern</p>
                  <p className="text-slate-500 text-sm">Tech Startup Inc. | Remote</p>
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-violet-100 to-indigo-200 rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl text-indigo-600">rocket_launch</span>
                </div>
              </div>
              <p className="text-slate-600 text-sm">
                Help shape the future of our product by working with our experienced PM team. You'll conduct user
                research, analyze data, and contribute to our product roadmap.
              </p>
              <div className="flex items-center justify-between mt-auto pt-4">
                <div className="flex gap-2">
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                    Full-time
                  </span>
                  <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                    Paid
                  </span>
                </div>
                <a
                  href="#"
                  className="flex items-center gap-1 text-sm font-medium text-[var(--primary-color)] opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <span>View Details</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </a>
              </div>
            </div>
            {/* 🔹 Add other cards here by reusing this structure */}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <nav aria-label="Page navigation">
              <ul className="inline-flex items-center -space-x-px text-sm">
                <li>
                  <a
                    href="#"
                    className="py-2 px-3 ml-0 leading-tight text-slate-500 bg-white rounded-l-lg border border-slate-300 hover:bg-slate-100 hover:text-slate-700"
                  >
                    Previous
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="py-2 px-3 leading-tight text-slate-500 bg-white border border-slate-300 hover:bg-slate-100 hover:text-slate-700"
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-current="page"
                    className="py-2 px-3 text-[var(--primary-color)] bg-indigo-50 border border-slate-300 hover:bg-indigo-100 hover:text-indigo-700"
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="py-2 px-3 leading-tight text-slate-500 bg-white border border-slate-300 hover:bg-slate-100 hover:text-slate-700"
                  >
                    3
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="py-2 px-3 leading-tight text-slate-500 bg-white rounded-r-lg border border-slate-300 hover:bg-slate-100 hover:text-slate-700"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InternshipDashboard;

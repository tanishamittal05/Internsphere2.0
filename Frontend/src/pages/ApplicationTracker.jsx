// src/pages/ApplicationTracker.jsx
import React from "react";

const ApplicationTracker = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-gray-50 text-gray-900 font-[Inter,'Noto Sans',sans-serif]">
      <div className="flex-grow">
        {/* Header */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-gray-200 px-10 py-4">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 text-gray-900">
              <div className="w-8 h-8 text-indigo-600">
                <svg
                  fill="none"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_6_330)">
                    <path
                      d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_6_330">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h1 className="text-xl font-bold tracking-tight">
                Internsphere
              </h1>
            </div>

            {/* Navbar */}
            <nav className="flex items-center gap-6">
              <a
                href="#"
                className="text-gray-600 hover:text-indigo-600 text-sm font-medium transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-indigo-600 text-sm font-medium transition-colors"
              >
                Internships
              </a>
              <a
                href="#"
                className="text-indigo-600 text-sm font-semibold"
              >
                My Applications
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-indigo-600 text-sm font-medium transition-colors"
              >
                Profile
              </a>
            </nav>
          </div>

          {/* Search & Profile */}
          <div className="flex items-center gap-4">
            <div className="relative w-64">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="material-symbols-outlined text-gray-400">
                  search
                </span>
              </div>
              <input
                type="search"
                placeholder="Search applications..."
                className="form-input block w-full rounded-md border-gray-300 bg-gray-100 py-2 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-500 focus:border-indigo-600 focus:bg-white focus:ring-indigo-600"
              />
            </div>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDiZNCTF3KKtmm228t60Hm3mFwgBs9QnU_2a5RfZ4MJgsbAS6DXAoVSkb3Wv1s34J0-Arjtp1_lxE0QSMftcv_6JQx5TlhKR1xi3iwaS-grpDiRRtCoGiWMCyVKQ7VgHxhRhbCzXMQWcjZTaevtRBNfOjgcj7TgU83COhzukVyDBWBkt-o7IOXzLekoqEXShULBKhQ21rQBVeUT7twLNwOQplSzYrdCM1jMvpYaGUqujsW9Siaxr5vdxLcPQzseslpC4rJTqkuHCSM")',
              }}
            ></div>
          </div>
        </header>

        {/* Main Section */}
        <main className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            {/* Title + Actions */}
            <div className="mb-10 flex items-center justify-between">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                Application Tracker
              </h2>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2">
                  <span className="material-symbols-outlined text-base">
                    filter_list
                  </span>
                  Filter
                </button>
                <button className="flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2">
                  <span className="material-symbols-outlined text-base">
                    swap_vert
                  </span>
                  Sort
                </button>
              </div>
            </div>

            {/* Example Card (repeatable for each application) */}
            <div className="space-y-8">
              {/* Application Card */}
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg transition-shadow hover:shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div className="mb-4 sm:mb-0">
                    <h3 className="text-xl font-semibold text-gray-900">
                      Tech Innovators Inc.
                    </h3>
                    <p className="text-md text-gray-600">
                      Product Management Intern
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Applied on: 2024-07-15
                    </p>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
                  >
                    View Details
                  </a>
                </div>
                <div className="mt-6">
                  <div className="relative">
                    <div className="h-1.5 rounded-full bg-gray-200">
                      <div className="h-1.5 w-1/4 rounded-full bg-blue-500"></div>
                    </div>
                    <div className="mt-2 grid grid-cols-4 text-center text-sm">
                      <div className="font-medium text-blue-500">Applied</div>
                      <div className="text-gray-500">Pending</div>
                      <div className="text-gray-500">Accepted</div>
                      <div className="text-gray-500"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* You can map more application cards here */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ApplicationTracker;

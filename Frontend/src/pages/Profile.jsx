// src/pages/UserProfileSetup.jsx
import React from "react";

const UserProfileSetup = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 font-inter text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-gray-200 bg-white/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo + Title */}
            <div className="flex items-center gap-4">
              <svg
                className="h-10 w-10 text-indigo-600"
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_6_330)">
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24 0.757L47.243 24 24 47.243 0.757 24 24 0.757ZM21 35.757V12.243L9.243 24 21 35.757Z"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_6_330">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <h1 className="text-2xl font-bold tracking-tight text-gray-800">
                Internsphere
              </h1>
            </div>

            {/* Nav */}
            <nav className="hidden md:flex md:items-center md:gap-10">
              {["Dashboard", "Matches", "Profile", "Settings"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-base font-medium text-gray-600 transition-colors duration-200 hover:text-indigo-600"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Right section */}
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-3xl text-gray-500 hover:text-gray-800 cursor-pointer">
                notifications
              </span>
              <button className="h-12 w-12 overflow-hidden rounded-full border-2 border-transparent transition-all duration-300 hover:border-indigo-600">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuClY8t2A_ov14mkQcH3qO_-_hxvMA1mXHVr4BlMqtsq1JBBcmq_KCsN7GrRLCjXXMgHl2bDuI8cOREWmCCgKufxVVo5wyfkkr-B5WVS5CuRfpDolD5f8JJrCN49iml6BPHkEfQOBe_izDybKw5pgGU3wBVB58HtpfD2YsZ1rSOQK3J5ZmFUfcNasSQ_OMu5epzGvLeRuMjNijep1IzN8aDgATwEONRK6KMFq2BB4kr1TGXg7YF9fI4_MsmgH6OYeQkW5JK2P1x00pQ"
                  alt="User avatar"
                  className="h-full w-full object-cover"
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="flex-grow">
        <div className="container mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Title */}
            <div className="text-center">
              <h2 className="text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl">
                Complete Your Profile
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Let's build your profile to find the perfect Product Management
                internship for you.
              </p>
            </div>

            {/* Form Card */}
            <div className="rounded-2xl bg-white p-8 shadow-2xl shadow-gray-200/50">
              {/* Progress */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-base font-medium text-gray-700">
                    Profile Completion
                  </span>
                  <span className="text-base font-bold text-green-500">50%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-200">
                  <div
                    className="h-full rounded-full bg-green-500 transition-all duration-500 ease-out"
                    style={{ width: "50%" }}
                  ></div>
                </div>
              </div>

              {/* Form */}
              <form action="#" method="POST" className="space-y-8">
                {/* Academic Background */}
                <fieldset className="space-y-8">
                  <legend className="text-2xl font-semibold text-gray-900 flex items-center gap-3">
                    <span className="material-symbols-outlined text-3xl text-indigo-600">
                      school
                    </span>
                    Academic Background
                  </legend>
                  <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="university"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        University/College
                      </label>
                      <input
                        id="university"
                        name="university"
                        type="text"
                        placeholder="e.g., University of California, Berkeley"
                        className="w-full rounded-lg border-gray-300 bg-gray-50 px-4 py-3 text-base text-gray-900 placeholder-gray-400 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="major"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Major/Field of Study
                      </label>
                      <input
                        id="major"
                        name="major"
                        type="text"
                        placeholder="e.g., Business Administration"
                        className="w-full rounded-lg border-gray-300 bg-gray-50 px-4 py-3 text-base text-gray-900 placeholder-gray-400 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="education-level"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Current Education Level
                      </label>
                      <select
                        id="education-level"
                        name="education-level"
                        className="w-full rounded-lg border-gray-300 bg-gray-50 px-4 py-3 text-base text-gray-900 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50"
                      >
                        <option>Select level</option>
                        <option>Undergraduate (Junior)</option>
                        <option>Undergraduate (Senior)</option>
                        <option>Master's Student (1st Year)</option>
                        <option>Master's Student (2nd Year)</option>
                        <option>MBA Candidate</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="graduation-date"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Expected Graduation Date
                      </label>
                      <input
                        id="graduation-date"
                        name="graduation-date"
                        type="month"
                        className="w-full rounded-lg border-gray-300 bg-gray-50 px-4 py-3 text-base text-gray-900 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50"
                      />
                    </div>
                  </div>
                </fieldset>

                <hr className="border-t border-gray-200" />

                {/* Skills & Interests */}
                <fieldset className="space-y-8">
                  <legend className="text-2xl font-semibold text-gray-900 flex items-center gap-3">
                    <span className="material-symbols-outlined text-3xl text-indigo-600">
                      palette
                    </span>
                    Skills & Interests
                  </legend>
                  <div>
                    <label
                      htmlFor="pm-skills"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Product Management Skills
                    </label>
                    <textarea
                      id="pm-skills"
                      name="pm-skills"
                      placeholder="e.g., Roadmapping, User Research, A/B Testing..."
                      className="w-full min-h-[120px] rounded-lg border-gray-300 bg-gray-50 px-4 py-3 text-base text-gray-900 placeholder-gray-400 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50"
                    />
                    <p className="mt-2 text-sm text-gray-500">
                      Enter your key PM skills, separated by commas.
                    </p>
                  </div>
                  <div>
                    <label
                      htmlFor="technical-skills"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Technical Skills (Optional)
                    </label>
                    <textarea
                      id="technical-skills"
                      name="technical-skills"
                      placeholder="e.g., SQL, Python, APIs, Jira..."
                      className="w-full min-h-[120px] rounded-lg border-gray-300 bg-gray-50 px-4 py-3 text-base text-gray-900 placeholder-gray-400 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50"
                    />
                    <p className="mt-2 text-sm text-gray-500">
                      Even for PM roles, some technical knowledge can be a plus.
                    </p>
                  </div>
                  <div>
                    <label
                      htmlFor="interests"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Industry Interests
                    </label>
                    <textarea
                      id="interests"
                      name="interests"
                      placeholder="e.g., Fintech, HealthTech, AI/ML..."
                      className="w-full min-h-[120px] rounded-lg border-gray-300 bg-gray-50 px-4 py-3 text-base text-gray-900 placeholder-gray-400 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50"
                    />
                    <p className="mt-2 text-sm text-gray-500">
                      What industries are you passionate about?
                    </p>
                  </div>
                </fieldset>

                {/* Buttons */}
                <div className="flex flex-col-reverse items-center gap-4 pt-6 sm:flex-row sm:justify-end">
                  <button
                    type="button"
                    className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-700 shadow-sm hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
                  >
                    Save Draft
                  </button>
                  <button
                    type="submit"
                    className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg border border-transparent bg-indigo-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition-transform duration-200 ease-in-out hover:-translate-y-1 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                  >
                    Next: Upload Resume
                    <span className="material-symbols-outlined ml-2">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserProfileSetup;

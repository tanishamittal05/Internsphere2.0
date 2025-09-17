// src/pages/Home.jsx
import React from "react";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-10 flex items-center justify-between whitespace-nowrap border-b border-slate-200 bg-white/80 px-10 py-4 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="size-8 text-indigo-600">
            <svg
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M24 0.757L47.243 24 24 47.243 0.757 24 24 0.757ZM21 35.757V12.243L9.243 24 21 35.757Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h1 className="text-xl font-bold text-slate-800">Internshpere</h1>
        </div>

        {/* Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {["Home", "Profile", "Dashboard", "Tracker", "Saved", "Admin"].map((item) => (
            <a
              key={item}
              href="#"
              className="font-medium text-slate-600 transition-colors duration-300 hover:text-indigo-600"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="flex h-10 w-10 items-center justify-center rounded-full text-slate-600 transition-colors duration-300 hover:bg-slate-100 hover:text-indigo-600">
            <span className="material-symbols-outlined text-2xl">
              notifications
            </span>
          </button>
          <div
            className="h-10 w-10 cursor-pointer rounded-full bg-cover bg-center ring-2 ring-transparent ring-offset-2 transition-all duration-300 hover:ring-indigo-600"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCgxE2mzPH8ii04xyIqiaILv9gr5_slWYqb1s5G_WIvGNCAoBhU3AhIBfsbbDbEYDeoVw0d5_E29Twp9LRs1cp9TlMnTUaHN9Zc7yfu6dnMEBOOITVf318YycUmNAEMicmzXeUzeUPV5FAhhenTI_rEt6a3uH5VZz6z2EtYRnOHwGl1Qxcsa99pqVdqfyvGctteLRiCJ-IW4kiGN3E0LF1rd4L1Qw7HLuW6bobQn-meJS-pXeVzH9aMbBYPtwFUPC6tXL-hOopCuVA')",
            }}
          />
        </div>
      </header>

      {/* Main */}
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden py-20 text-white md:py-32 bg-gradient-to-br from-indigo-600 to-indigo-500">
          <div className="container mx-auto max-w-5xl px-4 text-center">
            <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Find Your Perfect PM Internship
            </h2>
            <p className="mt-6 mx-auto max-w-2xl text-lg text-indigo-100">
              Our AI-powered engine matches you with top product management
              internships based on your skills and aspirations.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="inline-block rounded-full bg-white px-8 py-3 text-base font-bold text-indigo-600 shadow-lg transition-transform duration-300 hover:scale-105"
              >
                Get Started
              </a>
              <a
                href="#"
                className="inline-block rounded-full border-2 border-white/50 px-8 py-3 text-base font-bold text-white transition-colors duration-300 hover:bg-white/10"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="absolute -bottom-1/2 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-white/10 blur-3xl"></div>
        </section>

        {/* How it works */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-4 text-center">
            <h3 className="text-3xl font-bold text-slate-900">How It Works</h3>
            <p className="mt-4 text-lg text-slate-600">
              A streamlined path to your dream internship.
            </p>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  icon: "person_search",
                  title: "1. Create Your Profile",
                  desc: "Tell us about your skills, experience, and what you're looking for in an internship.",
                },
                {
                  icon: "auto_awesome",
                  title: "2. Get AI Recommendations",
                  desc: "Our smart algorithm analyzes your profile to suggest the best-fit opportunities for you.",
                },
                {
                  icon: "send",
                  title: "3. Apply with Confidence",
                  desc: "Easily apply to your matched internships and track your application status all in one place.",
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className="rounded-xl bg-white p-8 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                    <span className="material-symbols-outlined text-4xl">
                      {step.icon}
                    </span>
                  </div>
                  <h4 className="mt-6 text-xl font-semibold text-slate-800">
                    {step.title}
                  </h4>
                  <p className="mt-2 text-slate-500">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Internships */}
        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-4 text-center">
            <h3 className="text-3xl font-bold text-slate-900">
              Featured Internships
            </h3>
            <p className="mt-4 text-lg text-slate-600">
              Top product management roles waiting for you.
            </p>

            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOE9feyMAWCOtlaVGvJRa8hll19qmQSwKpbwkD7MXPznvazAl1QJuDG3g75bfWryugdwm5OBm591T1kDCOdxrbfPn0aP19MeKBePRVASrw-Ys9LEXnCbjdnY4MvKvF0LCUWMqUCZZI3CpPLwsGtcJyMZbXU7TWfRkFSxIM2ewRmTYwWctsiduIrq3ALcLlrIP_jVOhLLBcnq4p_a0wdOk5BsTbUcvvAOiqWgzBWRZgUQT-jb2aJ4T8e89mpmREC5Lgdhu5c1xDleI",
                  tag: "Remote",
                  title: "Product Management Intern",
                  company: "Innovative Tech Solutions",
                },
                {
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuArguQjGdBdTtgLrifLOoqKW_2yZBrVQrtnzkveNUUYc9qViCXYG7peRVej3JYIXRrngQYs7irFf1YhqYYkO5lL_jLD8wvHkE9kZorxE2RJE_pnOuCkE-Lv_GoJ7vugSE3tJUPpxZ8ZiDD0gflfa4FkFFWeaCLJV8kazYStjQBNYWko_OPmTfBmA5ASyBR-0_qHu2gC-p_Pz1Wa6yxsGb-DUehI4AmdN6gani62H3GgAqbBlnaqD_UvXs475PsPDKThQJ6PGrGQ5JM",
                  tag: "New York",
                  title: "Summer Analyst Program",
                  company: "Global Financial Services",
                },
                {
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGbJvg395RfMCU9u87X1ULA-3FpNe6x0KT9gwRJtyVAWVbP5ndspsz8T6ZJ3NJe22xchorfhypLtu0PqM4crBMWC0sj9hKFkKPyvJTcuEgZmpeBslSCCxMJb2ZAyqSv--uYmjHsPlYd5zPfPvAnNReZVADNZr8C9jMcBuAEild7GVaC6ZP-Ao08lLjdVTJho8XcXB68bjrAcMvp1w-glerQAjK-QzmtPkJpbwAtuIX2z6D0FIiVNV6rGKofPQBpsuPLGlzLfOD0S0",
                  tag: "San Francisco",
                  title: "UX/UI Design Internship",
                  company: "Creative Design Studio",
                },
              ].map((job, i) => (
                <a
                  key={i}
                  href="#"
                  className="group overflow-hidden rounded-xl bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="aspect-video w-full overflow-hidden">
                    <div
                      className="h-full w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                      style={{ backgroundImage: `url(${job.img})` }}
                    />
                  </div>
                  <div className="p-6 text-left">
                    <span className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-600">
                      {job.tag}
                    </span>
                    <h4 className="mt-3 text-lg font-semibold text-slate-800">
                      {job.title}
                    </h4>
                    <p className="mt-1 text-sm text-slate-500">{job.company}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-12">
              <a
                href="#"
                className="inline-block rounded-full bg-indigo-600 px-8 py-3 text-base font-bold text-white shadow-lg transition-transform duration-300 hover:scale-105"
              >
                Browse All Internships
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;

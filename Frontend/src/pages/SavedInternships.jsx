import React from "react";

const SavedInternships = () => {
  const internships = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "Tech Solutions Ltd.",
      duration: "3 Months",
      location: "Remote",
      stipend: "₹10,000/month",
    },
    {
      id: 2,
      title: "Data Analyst Intern",
      company: "DataWorks Inc.",
      duration: "6 Months",
      location: "Bangalore",
      stipend: "₹15,000/month",
    },
    {
      id: 3,
      title: "AI Research Intern",
      company: "InnovateAI Labs",
      duration: "4 Months",
      location: "Hyderabad",
      stipend: "₹12,000/month",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-8 font-inter">
      <header className="mb-10 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-900">Saved Internships</h1>
        <button className="rounded-lg bg-[var(--primary-500)] px-5 py-2 text-sm font-medium text-white shadow-md hover:bg-[var(--primary-600)] transition">
          Clear All
        </button>
      </header>

      {/* Internship Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {internships.map((internship) => (
          <div
            key={internship.id}
            className="rounded-xl bg-white p-6 shadow-md transition-all hover:shadow-lg hover:-translate-y-1"
          >
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              {internship.title}
            </h2>
            <p className="text-sm text-slate-600">{internship.company}</p>
            <div className="mt-3 space-y-1 text-sm text-slate-500">
              <p>
                <span className="font-medium text-slate-700">Duration:</span>{" "}
                {internship.duration}
              </p>
              <p>
                <span className="font-medium text-slate-700">Location:</span>{" "}
                {internship.location}
              </p>
              <p>
                <span className="font-medium text-slate-700">Stipend:</span>{" "}
                {internship.stipend}
              </p>
            </div>
            <div className="mt-5 flex items-center justify-between">
              <button className="rounded-lg bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200 transition">
                Remove
              </button>
              <button className="rounded-lg bg-[var(--primary-500)] px-4 py-2 text-sm font-medium text-white hover:bg-[var(--primary-600)] transition">
                Apply
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedInternships;

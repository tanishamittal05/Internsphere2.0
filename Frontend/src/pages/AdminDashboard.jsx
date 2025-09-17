// src/pages/AdminDashboard.jsx
import React from "react";

const AdminDashboard = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden font-[Inter,_Noto_Sans,sans-serif] bg-slate-50 text-slate-800">
      <div className="flex h-full min-h-screen w-full">
        {/* Sidebar */}
        <aside className="w-64 flex-shrink-0 bg-slate-900 p-6 shadow-lg">
          <div className="flex h-full flex-col justify-between">
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-cyan-500 text-white">
                  <span className="material-symbols-outlined"></span>
                </div>
                <h1 className="text-lg font-bold text-white">Internsphere</h1>
              </div>
              <nav className="flex flex-col gap-2">
                <a className="flex items-center gap-3 rounded-md bg-cyan-500 px-3 py-2.5 text-white transition-colors" href="#">
                  <span className="material-symbols-outlined text-xl">dashboard</span>
                  <span className="text-sm font-medium">Dashboard</span>
                </a>
                <a className="flex items-center gap-3 rounded-md px-3 py-2.5 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors" href="#">
                  <span className="material-symbols-outlined text-xl">work</span>
                  <span className="text-sm font-medium">Internships</span>
                </a>
                <a className="flex items-center gap-3 rounded-md px-3 py-2.5 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors" href="#">
                  <span className="material-symbols-outlined text-xl">group</span>
                  <span className="text-sm font-medium">Users</span>
                </a>
                <a className="flex items-center gap-3 rounded-md px-3 py-2.5 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors" href="#">
                  <span className="material-symbols-outlined text-xl">monitoring</span>
                  <span className="text-sm font-medium">Analytics</span>
                </a>
              </nav>
            </div>

            <div className="flex flex-col gap-2">
              <a className="flex items-center gap-3 rounded-md px-3 py-2.5 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors" href="#">
                <span className="material-symbols-outlined text-xl">settings</span>
                <span className="text-sm font-medium">Settings</span>
              </a>
              <a className="flex items-center gap-3 rounded-md px-3 py-2.5 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors" href="#">
                <span className="material-symbols-outlined text-xl">logout</span>
                <span className="text-sm font-medium">Logout</span>
              </a>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-10">
          {/* Header */}
          <header className="flex items-center justify-between mb-10">
            <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
            <div className="flex items-center gap-6">
              <button className="relative rounded-full p-2 text-slate-500 hover:bg-slate-200 hover:text-slate-700 transition-colors">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-1.5 right-1.5 h-2.5 w-2.5 rounded-full bg-cyan-500 border-2 border-slate-50"></span>
              </button>
              <div className="flex items-center gap-4">
                <img
                  alt="Admin Avatar"
                  className="h-11 w-11 rounded-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAl47u6y_1WiPs3XjZDrWlsehwdsn4JY3Q_4ZDY7jLEEjm0mq3-0mWMyaxwfmv9u8cVhzvbHez7XgrDl1cjZDYx1YiLxHjV8J2F50PzT0hmy2RHs6a0mxMCZRWAzA3w0F-yZt-fq4FnBFFAdSYlPaFeyzQH1Zgp6yig3aPJeuxIOVuuMFHuCxd6aaNtmAlTLK_mQ-hsmmgfbHPBTzQobDRgpiMllSw_odParjP9R230F4d6yYn0jEujwzQZUkLlow3uN65FTuB1Hqc"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-900">Admin User</p>
                  <p className="text-xs text-slate-500">admin@example.com</p>
                </div>
              </div>
            </div>
          </header>

          {/* Stats Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            <div className="rounded-xl bg-white p-6 shadow-md transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-cyan-100 text-cyan-600 p-3 rounded-full">
                  <span className="material-symbols-outlined">work_outline</span>
                </div>
                <p className="text-sm font-medium text-slate-500">Total Internships</p>
              </div>
              <p className="text-4xl font-bold text-slate-900">125</p>
              <p className="text-xs text-slate-400 mt-1">+5 from last month</p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-md transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-emerald-100 text-emerald-600 p-3 rounded-full">
                  <span className="material-symbols-outlined">person_outline</span>
                </div>
                <p className="text-sm font-medium text-slate-500">Active Users</p>
              </div>
              <p className="text-4xl font-bold text-slate-900">350</p>
              <p className="text-xs text-slate-400 mt-1">+20 new users this week</p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-md transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-amber-100 text-amber-600 p-3 rounded-full">
                  <span className="material-symbols-outlined">recommend</span>
                </div>
                <p className="text-sm font-medium text-slate-500">Recommendations</p>
              </div>
              <p className="text-4xl font-bold text-slate-900">780</p>
              <p className="text-xs text-slate-400 mt-1">+15% increase</p>
            </div>
          </section>

          {/* Recent Activity */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-900">Recent Activity</h2>
              <button className="flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm hover:bg-slate-100 transition-colors">
                View All
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </button>
            </div>
            <div className="overflow-x-auto rounded-lg bg-white shadow-md">
              <table className="w-full text-left">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-4 text-sm font-semibold text-slate-600">User</th>
                    <th className="px-6 py-4 text-sm font-semibold text-slate-600">Action</th>
                    <th className="px-6 py-4 text-sm font-semibold text-slate-600">Timestamp</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-slate-800">Ethan Harper</td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      <span className="inline-flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-green-500"></span>
                        Applied for Summer PM Internship
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">2024-07-26 10:30 AM</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-slate-800">Olivia Bennett</td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      <span className="inline-flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                        Updated profile information
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">2024-07-25 04:15 PM</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-slate-800">Liam Carter</td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      <span className="inline-flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
                        Viewed internship recommendations
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">2024-07-25 01:20 PM</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-slate-800">Sophia Davis</td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      <span className="inline-flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-purple-500"></span>
                        Created new internship listing
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">2024-07-24 09:45 AM</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-slate-800">Noah Evans</td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      <span className="inline-flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-red-500"></span>
                        Reviewed application for Fall PM Internship
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">2024-07-23 03:00 PM</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;

import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const links = [
    { to: "/", label: "Home", icon: "home" },
    { to: "/profile", label: "Profile Setup", icon: "account_circle" },
    { to: "/dashboard", label: "Internship Dashboard", icon: "dashboard" },
    { to: "/tracker", label: "Application Tracker", icon: "list_alt" },
    { to: "/admin", label: "Admin Interface", icon: "admin_panel_settings" },
    { to: "/saved", label: "Saved Internships", icon: "bookmark" },
  ];

  return (
    <aside className="w-64 flex-shrink-0 bg-slate-900 p-6 shadow-lg">
      <div className="flex flex-col h-full justify-between">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-primary-500 text-white">
              <span className="material-symbols-outlined">auto_awesome</span>
            </div>
            <h1 className="text-lg font-bold text-white">AI Internships</h1>
          </div>
          <nav className="flex flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center gap-3 rounded-md px-3 py-2.5 transition-colors ${
                  location.pathname === link.to
                    ? "bg-primary-500 text-white"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <span className="material-symbols-outlined text-xl">
                  {link.icon}
                </span>
                <span className="text-sm font-medium">{link.label}</span>
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-col gap-2">
          <a className="flex items-center gap-3 px-3 py-2.5 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors">
            <span className="material-symbols-outlined text-xl">settings</span>
            <span className="text-sm font-medium">Settings</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors">
            <span className="material-symbols-outlined text-xl">logout</span>
            <span className="text-sm font-medium">Logout</span>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

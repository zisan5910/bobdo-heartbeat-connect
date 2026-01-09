import { Link, useLocation } from "react-router-dom";
import { Home, Search, AlertCircle, Info } from "lucide-react";

const navItems = [
  { path: "/", icon: Home, label: "Home" },
  { path: "/find-donor", icon: Search, label: "Find Donor" },
  { path: "/emergency", icon: AlertCircle, label: "Emergency" },
  { path: "/about", icon: Info, label: "About" },
];

const BottomNav = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg h-16 flex items-center justify-around px-2 z-50">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        const Icon = item.icon;
        
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center justify-center flex-1 py-2 px-1 transition-all duration-300 ${
              isActive
                ? "text-purple-600 dark:text-purple-400"
                : "text-gray-600 dark:text-gray-400"
            }`}
          >
            <div className="relative">
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 ${
                  isActive 
                    ? "bg-purple-100 dark:bg-purple-900/30 -translate-y-4 shadow-md" 
                    : ""
                }`}
              >
                <Icon 
                  className={`w-6 h-6 transition-all duration-300 ${
                    isActive ? "scale-110" : ""
                  }`} 
                />
              </div>
            </div>
            <span className={`text-xs font-medium mt-1 transition-all duration-300 ${
              isActive 
                ? "text-purple-600 dark:text-purple-400 font-bold -translate-y-2 opacity-0" 
                : "opacity-100"
            }`}>
              {item.label}
            </span>
            
            {/* Floating label for active item */}
            {isActive && (
              <div className="absolute -top-6 bg-purple-600 dark:bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg transition-all duration-300">
                {item.label}
              </div>
            )}
          </Link>
        );
      })}
    </nav>
  );
};

export default BottomNav;

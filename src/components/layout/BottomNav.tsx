import { Link, useLocation } from "react-router-dom";
import { Home, Search, AlertCircle, Info } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", bengali: "হোম", path: "/", icon: Home },
  { name: "Find Donor", bengali: "ডোনার খুঁজুন", path: "/find-donor", icon: Search },
  { name: "Emergency", bengali: "জরুরি", path: "/emergency", icon: AlertCircle },
  { name: "About", bengali: "আমাদের সম্পর্কে", path: "/about", icon: Info },
];

const BottomNav = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 safe-bottom">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center justify-center flex-1 h-full native-touch transition-all duration-200",
                isActive ? "text-primary" : "text-muted-foreground"
              )}
            >
              <div
                className={cn(
                  "flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200",
                  isActive && "bg-primary/10 scale-110"
                )}
              >
                <Icon className={cn("w-5 h-5", isActive && "animate-heartbeat")} />
              </div>
              <span className="text-[10px] font-medium mt-0.5">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;

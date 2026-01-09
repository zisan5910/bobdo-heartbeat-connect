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
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-t border-border/80 safe-bottom supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center justify-around h-20 max-w-lg mx-auto px-4">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "group flex flex-col items-center justify-center flex-1 h-full native-touch relative transition-all duration-300 ease-out",
                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {/* Active Indicator Line */}
              <div className={cn(
                "absolute top-0 w-12 h-0.5 bg-primary rounded-full transition-all duration-300",
                isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
              )} />
              
              <div className={cn(
                "flex items-center justify-center w-14 h-14 rounded-2xl transition-all duration-300 ease-out",
                isActive 
                  ? "bg-primary/15 -translate-y-3 shadow-lg shadow-primary/20" 
                  : "group-hover:bg-muted/50"
              )}>
                <Icon className={cn(
                  "w-6 h-6 transition-all duration-300",
                  isActive ? "text-primary scale-110" : "group-hover:scale-105"
                )} />
              </div>
              
              <span className={cn(
                "text-[11px] font-semibold transition-all duration-300 mt-1",
                isActive 
                  ? "text-primary opacity-100 translate-y-0" 
                  : "opacity-70 group-hover:opacity-100 -translate-y-1"
              )}>
                {item.name}
              </span>
              
              {/* Bengali Text - Hidden by default, shown on active */}
              <span className={cn(
                "text-[9px] font-medium text-muted-foreground transition-all duration-300 absolute -bottom-5",
                isActive ? "opacity-100" : "opacity-0"
              )}>
                {item.bengali}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;

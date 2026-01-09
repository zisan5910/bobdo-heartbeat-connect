const BottomNav = () => {
  const location = useLocation();

  return (
    <nav className="bottom-nav h-16 flex items-center justify-around px-2 bg-background/95 backdrop-blur-sm border-t">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        const Icon = item.icon;
        
        return (
          <Link
            key={item.path}
            to={item.path}
            className="relative flex flex-col items-center justify-center py-2 px-4"
          >
            {/* Active Indicator */}
            {isActive && (
              <div className="absolute -top-1 w-12 h-1 bg-primary rounded-full animate-pulse" />
            )}
            
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-300 ease-out ${
                isActive
                  ? "bg-primary/15 scale-110 shadow-lg"
                  : "hover:bg-muted/50"
              }`}
            >
              <Icon
                className={`transition-all duration-300 ease-out ${
                  isActive
                    ? "w-6 h-6 text-primary scale-110"
                    : "w-5 h-5 text-muted-foreground"
                }`}
              />
            </div>
            
            <span
              className={`text-xs mt-1 transition-all duration-300 font-medium ${
                isActive
                  ? "text-primary font-bold translate-y-0 opacity-100"
                  : "text-muted-foreground translate-y-1 opacity-90"
              }`}
            >
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
};

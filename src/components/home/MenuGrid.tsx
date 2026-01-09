import { Link } from "react-router-dom";
import {
  Search,
  UserPlus,
  Users,
  Heart,
  Building2,
  Cross,
  Award,
  Bell,
  AlertCircle,
  Info,
} from "lucide-react";

const menuItems = [
  { path: "/find-donor", icon: Search, label: "ডোনার খুঁজুন", color: "bg-red-50" },
  { path: "/become-donor", icon: UserPlus, label: "ডোনার হন", color: "bg-pink-50" },
  { path: "/volunteer", icon: Users, label: "স্বেচ্ছাসেবক", color: "bg-orange-50" },
  { path: "/donation", icon: Heart, label: "অনুদান", color: "bg-rose-50" },
  { path: "/hospitals", icon: Building2, label: "হাসপাতাল", color: "bg-blue-50" },
  { path: "/first-aid", icon: Cross, label: "প্রাথমিক চিকিৎসা", color: "bg-green-50" },
  { path: "/certificate", icon: Award, label: "সার্টিফিকেট", color: "bg-amber-50" },
  { path: "/notice", icon: Bell, label: "নোটিশ", color: "bg-purple-50" },
  { path: "/emergency", icon: AlertCircle, label: "জরুরি", color: "bg-red-100" },
  { path: "/about", icon: Info, label: "আমাদের সম্পর্কে", color: "bg-slate-50" },
];

const MenuGrid = () => {
  return (
    <div className="grid-menu px-4">
      {menuItems.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.path}
            to={item.path}
            className="menu-item"
          >
            <div className={`menu-item-icon ${item.color}`}>
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <span className="text-sm font-medium text-foreground text-center">
              {item.label}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default MenuGrid;

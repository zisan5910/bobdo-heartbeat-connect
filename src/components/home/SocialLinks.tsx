import { Facebook, Mail, Youtube, Users } from "lucide-react";

const socialLinks = [
  {
    href: "https://www.facebook.com/bobdo.official",
    icon: Facebook,
    label: "ফেসবুক পেজ",
    color: "bg-blue-50",
  },
  {
    href: "https://www.facebook.com/groups/BOBO.BD",
    icon: Users,
    label: "গ্রুপ",
    color: "bg-indigo-50",
  },
  {
    href: "mailto:bobdo.bd@gmail.com",
    icon: Mail,
    label: "ইমেইল",
    color: "bg-red-50",
  },
  {
    href: "https://www.youtube.com/@BOBDO",
    icon: Youtube,
    label: "ইউটিউব",
    color: "bg-rose-50",
  },
];

const SocialLinks = () => {
  return (
    <div className="grid grid-cols-4 gap-3 px-4">
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="menu-item py-3"
            aria-label={link.label}
          >
            <div className={`menu-item-icon ${link.color}`}>
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <span className="text-xs font-medium text-foreground text-center">{link.label}</span>
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
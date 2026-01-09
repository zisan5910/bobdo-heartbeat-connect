import { Facebook, Mail, Youtube, Users } from "lucide-react";

const socialLinks = [
  {
    href: "https://www.facebook.com/bobdo.official",
    icon: Facebook,
    label: "পেজ",
    color: "text-blue-600",
  },
  {
    href: "https://www.facebook.com/groups/BOBO.BD",
    icon: Users,
    label: "গ্রুপ",
    color: "text-indigo-600",
  },
  {
    href: "mailto:bobdo.bd@gmail.com",
    icon: Mail,
    label: "ইমেইল",
    color: "text-red-500",
  },
  {
    href: "https://www.youtube.com/@BOBDO",
    icon: Youtube,
    label: "ইউটিউব",
    color: "text-red-600",
  },
];

const SocialLinks = () => {
  return (
    <div className="flex items-center justify-center gap-6 px-4">
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 transition-transform active:scale-95"
            aria-label={link.label}
          >
            <Icon className={`w-7 h-7 ${link.color}`} />
            <span className="text-xs text-muted-foreground">{link.label}</span>
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
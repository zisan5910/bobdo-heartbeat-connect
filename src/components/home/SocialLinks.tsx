import { Facebook, Mail, Youtube, Users } from "lucide-react";

const socialLinks = [
  {
    href: "https://www.facebook.com/bobdo.official",
    icon: Facebook,
    label: "Facebook Page",
    color: "bg-blue-500",
  },
  {
    href: "https://www.facebook.com/groups/BOBO.BD",
    icon: Users,
    label: "Facebook Group",
    color: "bg-blue-600",
  },
  {
    href: "mailto:bobdo.bd@gmail.com",
    icon: Mail,
    label: "Email",
    color: "bg-red-500",
  },
  {
    href: "https://www.youtube.com/@BOBDO",
    icon: Youtube,
    label: "YouTube",
    color: "bg-red-600",
  },
];

const SocialLinks = () => {
  return (
    <div className="flex justify-center gap-4 px-4">
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-12 h-12 rounded-full ${link.color} flex items-center justify-center text-white transition-transform active:scale-95`}
            aria-label={link.label}
          >
            <Icon className="w-5 h-5" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;

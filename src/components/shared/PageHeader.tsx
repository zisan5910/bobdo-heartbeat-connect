import { LucideIcon } from "lucide-react";

interface PageHeaderProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  iconBgColor?: string;
}

const PageHeader = ({ icon: Icon, title, description, iconBgColor = "bg-red-50" }: PageHeaderProps) => {
  return (
    <div className="text-center mb-6">
      <div className={`w-16 h-16 rounded-2xl ${iconBgColor} flex items-center justify-center mx-auto mb-4`}>
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <h1 className="text-2xl font-bold text-foreground mb-2">{title}</h1>
      {description && (
        <p className="text-muted-foreground">{description}</p>
      )}
    </div>
  );
};

export default PageHeader;
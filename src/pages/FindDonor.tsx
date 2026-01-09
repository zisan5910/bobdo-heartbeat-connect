import { Copy, ExternalLink, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const postTemplate = `🩸 জরুরী রক্তের প্রয়োজন 🩸
👤 রোগী নাম:
🩺 রোগীর সমস্যা:
🧬 রক্তের গ্রুপ:
🩸 রক্তের পরিমাণ:
💉 প্লেটলেটের পরিমাণ:
📅 তারিখ:
⏰ সময়:
📍 ঠিকানা:
📞 যোগাযোগ:
🔗 রেফারেন্স:BOBDO(https://bobdo.vercel.app)
#BOBDO #রক্তদান #বগুড়া #BloodDonation #BOBDOapp`;

const steps = [
  "উপরের বাটনে ক্লিক করুন",
  "টেমপ্লেট কপি হয়ে যাবে",
  "ফেসবুক গ্রুপে যান",
  "নতুন পোস্ট লিখুন ক্লিক করুন",
  "পেস্ট করুন এবং তথ্য পূরণ করুন",
  "পোস্ট করুন",
];

const bloodGroups = [
  { group: "A+", canGive: ["A+", "AB+"], canReceive: ["A+", "A-", "O+", "O-"] },
  { group: "A-", canGive: ["A+", "A-", "AB+", "AB-"], canReceive: ["A-", "O-"] },
  { group: "B+", canGive: ["B+", "AB+"], canReceive: ["B+", "B-", "O+", "O-"] },
  { group: "B-", canGive: ["B+", "B-", "AB+", "AB-"], canReceive: ["B-", "O-"] },
  { group: "AB+", canGive: ["AB+"], canReceive: ["সকল গ্রুপ"] },
  { group: "AB-", canGive: ["AB+", "AB-"], canReceive: ["A-", "B-", "AB-", "O-"] },
  { group: "O+", canGive: ["A+", "B+", "AB+", "O+"], canReceive: ["O+", "O-"] },
  { group: "O-", canGive: ["সকল গ্রুপ"], canReceive: ["O-"] },
];

const duties = [
  "রক্তদাতাকে ধন্যবাদ জানান",
  "রক্তদানের পর বিশ্রাম ও খাবার নিশ্চিত করুন",
  "প্রয়োজনে যাতায়াত সুবিধা দিন",
  "সঠিক তথ্য প্রদান করুন",
  "সময়মতো যোগাযোগ করুন",
];

const FindDonor = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAndOpen = async () => {
    try {
      await navigator.clipboard.writeText(postTemplate);
      setCopied(true);
      toast.success("টেমপ্লেট কপি হয়েছে!");
      
      setTimeout(() => {
        window.open("https://www.facebook.com/groups/BOBO.BD", "_blank");
      }, 500);

      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("কপি করতে সমস্যা হয়েছে");
    }
  };

  return (
    <div className="px-4 py-6 space-y-6 animate-fade-in">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-foreground mb-2">ডোনার খুঁজুন</h1>
        <p className="text-muted-foreground">
          জরুরি রক্তের প্রয়োজনে ফেসবুক গ্রুপে পোস্ট করুন
        </p>
      </div>

      <button
        onClick={handleCopyAndOpen}
        className="w-full btn-primary flex items-center justify-center gap-2 py-4"
      >
        {copied ? (
          <>
            <Check className="w-5 h-5" />
            কপি হয়েছে! গ্রুপে যাচ্ছে...
          </>
        ) : (
          <>
            <Copy className="w-5 h-5" />
            কপি করুন ও গ্রুপে পোস্ট করুন
            <ExternalLink className="w-4 h-4" />
          </>
        )}
      </button>

      {/* Steps */}
      <div className="card-native">
        <h2 className="section-title">ফেসবুক গ্রুপে পোস্ট করার ধাপ সমূহ</h2>
        <div className="space-y-3">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center flex-shrink-0">
                {index + 1}
              </span>
              <p className="text-foreground">{step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Required Info */}
      <div className="card-native">
        <h2 className="section-title">প্রয়োজনীয় তথ্য</h2>
        <div className="bg-muted rounded-xl p-4">
          <pre className="text-sm text-foreground whitespace-pre-wrap font-sans">
            {postTemplate}
          </pre>
        </div>
      </div>

      {/* Blood Group Chart */}
      <div className="card-native">
        <h2 className="section-title">রক্তের গ্রুপ চার্ট</h2>
        <div className="space-y-3">
          {bloodGroups.map((item) => (
            <div
              key={item.group}
              className="bg-muted rounded-xl p-3"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center">
                  {item.group}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">দিতে পারে:</span>{" "}
                {item.canGive.join(", ")}
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">নিতে পারে:</span>{" "}
                {item.canReceive.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Duties */}
      <div className="card-native">
        <h2 className="section-title">রক্তদাতাদের প্রতি কর্তব্য</h2>
        <ul className="space-y-2">
          {duties.map((duty, index) => (
            <li key={index} className="flex items-start gap-2 text-foreground">
              <span className="text-primary">•</span>
              {duty}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FindDonor;

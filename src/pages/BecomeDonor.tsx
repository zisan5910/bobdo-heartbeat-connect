import { ExternalLink } from "lucide-react";

const conditions = [
  "বয়স ১৮ থেকে ৬০ বছরের মধ্যে হতে হবে",
  "ওজন কমপক্ষে ৫০ কেজি হতে হবে",
  "সুস্থ ও রোগমুক্ত হতে হবে",
  "গত ৪ মাসে রক্ত দেননি",
  "গর্ভবতী বা স্তন্যদানকারী মা নন",
  "কোনো সংক্রামক রোগ নেই",
  "মাদকাসক্ত নন",
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

const process = [
  { step: "নিবন্ধন", desc: "ফর্ম পূরণ করে নিবন্ধন করুন" },
  { step: "স্ক্রিনিং", desc: "স্বাস্থ্য পরীক্ষা ও রক্তচাপ মাপা" },
  { step: "রক্তদান", desc: "৮-১০ মিনিটে রক্তদান সম্পন্ন" },
  { step: "বিশ্রাম", desc: "১৫-২০ মিনিট বিশ্রাম ও খাবার" },
];

const precautions = [
  "রক্তদানের আগে ভালো ঘুম নিন",
  "পর্যাপ্ত পানি পান করুন",
  "হালকা খাবার খান",
  "রক্তদানের পর ভারী কাজ এড়িয়ে চলুন",
  "২৪ ঘণ্টা মদ্যপান এড়িয়ে চলুন",
];

const benefits = [
  "হৃদরোগের ঝুঁকি কমায়",
  "ক্যান্সারের ঝুঁকি হ্রাস করে",
  "রক্ত উৎপাদন বাড়ায়",
  "মানসিক প্রশান্তি দেয়",
  "ফ্রি হেলথ চেকআপ পাওয়া যায়",
  "৩টি জীবন বাঁচাতে পারেন",
];

const BecomeDonor = () => {
  return (
    <div className="px-4 py-6 space-y-6 animate-fade-in">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-foreground mb-2">ডোনার হন</h1>
        <p className="text-muted-foreground">
          রক্তদান করে জীবন বাঁচান
        </p>
      </div>

      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSdaQ3_aRcF8Fn306NamZZ87AKy4Vu-e5wiQ92jPNLdChWfUrA/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full btn-primary text-center py-4"
      >
        <span className="flex items-center justify-center gap-2">
          রক্তদাতা ফর্ম পূরণ করুন
          <ExternalLink className="w-4 h-4" />
        </span>
      </a>

      {/* Conditions */}
      <div className="card-native">
        <h2 className="section-title">রক্তদানের শর্ত</h2>
        <ul className="space-y-2">
          {conditions.map((condition, index) => (
            <li key={index} className="flex items-start gap-2 text-foreground">
              <span className="text-primary mt-1">✓</span>
              {condition}
            </li>
          ))}
        </ul>
      </div>

      {/* Blood Group Chart */}
      <div className="card-native">
        <h2 className="section-title">রক্তের গ্রুপ চার্ট</h2>
        <div className="grid grid-cols-2 gap-3">
          {bloodGroups.map((item) => (
            <div
              key={item.group}
              className="bg-muted rounded-xl p-3 text-center"
            >
              <span className="inline-block w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center mx-auto mb-2">
                {item.group}
              </span>
              <p className="text-xs text-muted-foreground">
                দিতে পারে: {item.canGive.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Donation Process */}
      <div className="card-native">
        <h2 className="section-title">রক্তদানের প্রক্রিয়া</h2>
        <div className="space-y-4">
          {process.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <span className="w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center flex-shrink-0">
                {index + 1}
              </span>
              <div>
                <h3 className="font-medium text-foreground">{item.step}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Precautions */}
      <div className="card-native">
        <h2 className="section-title">সতর্কতা</h2>
        <ul className="space-y-2">
          {precautions.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-foreground">
              <span className="text-amber-500">⚠</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Benefits */}
      <div className="card-native">
        <h2 className="section-title">রক্তদানের উপকারিতা</h2>
        <ul className="space-y-2">
          {benefits.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-foreground">
              <span className="text-green-500">♥</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BecomeDonor;

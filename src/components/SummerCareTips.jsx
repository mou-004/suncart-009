import { FiDroplet, FiShield, FiSun } from "react-icons/fi";

const SummerCareTips = () => {
  const tips = [
    {
      icon: <FiShield size={22} />,
      category: "Skincare",
      title: "Apply SPF Every Morning",
      description: "Use SPF 30 or higher daily — even on cloudy days. Reapply every 2 hours when outdoors for full skin protection.",
      colors: "from-orange-100 to-amber-50",
      iconBg: "bg-orange-200 text-orange-600",
      badge: "bg-orange-50 text-orange-500 border-orange-200"
    },
    {
      icon: <FiDroplet size={22} />,
      category: "Hydration",
      title: "Drink 8–10 Glasses Daily",
      description: "Hot weather increases fluid loss rapidly. Start your morning with a full glass of water and carry a bottle wherever you go.",
      colors: "from-sky-100 to-blue-50",
      iconBg: "bg-sky-200 text-sky-600",
      badge: "bg-sky-50 text-sky-600 border-sky-200"
    },
    {
      icon: <FiSun size={22} />,
      category: "Sun Safety",
      title: "Avoid Peak Sun Hours",
      description: "Stay in the shade between 10 am – 4 pm when UV rays are strongest. Wear a wide-brim hat and UV-blocking sunglasses.",
      colors: "from-amber-100 to-yellow-50",
      iconBg: "bg-amber-200 text-amber-600",
      badge: "bg-amber-50 text-amber-600 border-amber-200"
    }
  ];

  return (
    <section className="bg-[#fcf9f8] py-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-14 animate__animated animate__fadeIn">
          <span className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-4 block animate__animated animate__fadeInDown">
            Expert Advice
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-base-content">
            Summer Care{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Tips
            </span>
          </h2>
          <p className="text-base-content/50 text-sm mt-2 max-w-md">
            Simple habits to keep you glowing, cool, and protected all season long.
          </p>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${tip.colors} border border-white/50 rounded-3xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden animate__animated animate__fadeInUp`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative z-10 flex flex-col gap-4">
                
                <div className={`w-12 h-12 rounded-2xl ${tip.iconBg} flex items-center justify-center shadow-sm group-hover:animate__animated group-hover:animate__pulse`}>
                  {tip.icon}
                </div>
                
                <span className={`badge badge-sm ${tip.badge} font-semibold px-3 py-2 w-fit`}>
                  {tip.category}
                </span>

                <h3 className="text-lg font-extrabold text-base-content leading-snug">
                  {tip.title}
                </h3>
                
                <p className="text-sm leading-relaxed text-base-content/60">
                  {tip.description}
                </p>
              </div>

              
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SummerCareTips;
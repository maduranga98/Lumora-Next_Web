import { useState, useEffect } from "react";

const GlobeIllustration = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.5) % 360);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Icons orbiting the globe
  const icons = [
    { emoji: "🔍", label: "Search", color: "bg-yellow-400", delay: "0s" },
    { emoji: "⭐", label: "Reviews", color: "bg-orange-300", delay: "0.1s" },
    { emoji: "📱", label: "Contact", color: "bg-teal-300", delay: "0.2s" },
    { emoji: "💵", label: "Revenue", color: "bg-green-300", delay: "0.3s" },
    { emoji: "🌐", label: "Web", color: "bg-blue-300", delay: "0.4s" },
    { emoji: "💬", label: "Engage", color: "bg-purple-300", delay: "0.5s" },
  ];

  return (
    <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden flex items-center justify-center">
      {/* Background elements */}
      <div className="absolute w-16 h-16 bg-yellow-400/20 rounded-full top-10 left-10 animate-pulse"></div>
      <div
        className="absolute w-12 h-12 bg-teal-300/20 rounded-full bottom-12 right-20 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute w-8 h-8 bg-orange-300/20 rounded-full top-20 right-16 animate-pulse"
        style={{ animationDelay: "1.5s" }}
      ></div>

      {/* Central globe with pulse effect */}
      <div className="relative">
        <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-teal-100 rounded-full flex items-center justify-center relative">
          {/* Horizontal line */}
          <div className="absolute w-full h-0.5 bg-teal-500/50"></div>

          {/* Vertical line */}
          <div className="absolute w-0.5 h-full bg-teal-500/50"></div>

          {/* Curved lines */}
          <div
            className="absolute w-full h-full rounded-full border-t-2 border-b-2 border-teal-500/30"
            style={{ transform: `rotate(${rotation}deg)` }}
          ></div>
          <div
            className="absolute w-full h-full rounded-full border-t-2 border-b-2 border-teal-500/30"
            style={{ transform: `rotate(${rotation + 45}deg)` }}
          ></div>
          <div
            className="absolute w-full h-full rounded-full border-l-2 border-r-2 border-teal-500/30"
            style={{ transform: `rotate(${rotation + 22.5}deg)` }}
          ></div>

          {/* Pulse effect */}
          <div className="absolute w-full h-full rounded-full bg-teal-400/20 animate-ping opacity-30"></div>
        </div>

        {/* Orbiting icons */}
        {icons.map((icon, index) => {
          const angle = (360 / icons.length) * index + rotation;
          const radius = 120; // Distance from center
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;

          return (
            <div
              key={index}
              className={`absolute flex items-center justify-center w-12 h-12 rounded-full ${icon.color} shadow-lg transition-transform duration-300 hover:scale-110`}
              style={{
                transform: `translate(${x}px, ${y}px)`,
                animationDelay: icon.delay,
                zIndex: 10,
              }}
            >
              <span className="text-2xl" role="img" aria-label={icon.label}>
                {icon.emoji}
              </span>
            </div>
          );
        })}

        {/* Growth arrow */}
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-14 flex flex-col items-center">
            <div className="w-0 h-0 border-l-8 border-r-8 border-b-12 border-l-transparent border-r-transparent border-b-yellow-400"></div>
            <div className="w-2 h-10 bg-yellow-400"></div>
          </div>
        </div>
      </div>

      {/* Small floating decorative elements */}
      <div
        className="absolute w-3 h-3 bg-yellow-400 rounded-full top-1/4 left-1/6 animate-bounce"
        style={{ animationDuration: "3s" }}
      ></div>
      <div
        className="absolute w-2 h-2 bg-teal-300 rounded-full bottom-1/3 right-1/4 animate-bounce"
        style={{ animationDuration: "2.5s", animationDelay: "0.5s" }}
      ></div>
      <div
        className="absolute w-4 h-4 bg-orange-300 rounded-full top-1/3 right-1/5 animate-bounce"
        style={{ animationDuration: "4s", animationDelay: "1s" }}
      ></div>
    </div>
  );
};

export default GlobeIllustration;

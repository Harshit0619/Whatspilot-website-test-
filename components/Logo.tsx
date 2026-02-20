interface LogoProps {
  className?: string;
  showDotIo?: boolean;
}

export default function Logo({ className = "", showDotIo = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Paper Plane Icon */}
      <div className="relative">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transform -rotate-12"
        >
          {/* Paper plane body */}
          <path
            d="M3 16L28 4L19 28L15 18L3 16Z"
            fill="url(#gradient)"
            stroke="url(#gradient)"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          {/* Inner fold line */}
          <path
            d="M15 18L28 4"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="1"
            strokeLinecap="round"
          />
          {/* Gradient definition */}
          <defs>
            <linearGradient
              id="gradient"
              x1="3"
              y1="4"
              x2="28"
              y2="28"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#25d366" />
              <stop offset="1" stopColor="#128c7e" />
            </linearGradient>
          </defs>
        </svg>

        {/* Speed lines */}
        <div className="absolute -right-1 top-1/2 -translate-y-1/2">
          <div className="w-2 h-0.5 bg-whatsapp-green/60 rounded-full mb-0.5"></div>
          <div className="w-3 h-0.5 bg-whatsapp-green/40 rounded-full"></div>
        </div>
      </div>

      {/* Logo Text */}
      <span className="text-xl font-bold text-gray-900 tracking-tight">
        Whats<span className="text-whatsapp-green">Pilot</span>
      </span>
    </div>
  );
}

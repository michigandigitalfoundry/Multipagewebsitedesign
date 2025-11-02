import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/" className="flex items-center space-x-3">
      <div className="relative w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-700 rounded-lg flex items-center justify-center shadow-lg">
        {/* Anvil Icon integrated with MDF */}
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
        >
          {/* Anvil base */}
          <path
            d="M8 38 L40 38 L38 42 L10 42 Z"
            fill="white"
            opacity="0.9"
          />
          {/* Anvil body */}
          <path
            d="M10 28 L38 28 L40 38 L8 38 Z"
            fill="white"
          />
          {/* Anvil horn */}
          <path
            d="M38 28 L42 24 L42 28 Z"
            fill="white"
            opacity="0.85"
          />
          {/* MDF letters overlaid */}
          <text
            x="24"
            y="22"
            fontSize="10"
            fontWeight="800"
            fill="#ea580c"
            textAnchor="middle"
            fontFamily="system-ui, -apple-system, sans-serif"
          >
            MDF
          </text>
        </svg>
      </div>
      <div className="hidden sm:block">
        <div className="text-gray-900 font-semibold">Michigan Digital Foundry</div>
        <div className="text-xs text-gray-500">Warren, MI</div>
      </div>
    </Link>
  );
}

type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => (
  <svg
    className={className}
    viewBox="0 0 420 160"
    role="img"
    aria-labelledby="logoTitle logoDesc"
  >
    <title id="logoTitle">Fuji Tour Guide</title>
    <desc id="logoDesc">
      Stylized Mount Fuji crest with flowing waves inspired by luxury travel.
    </desc>
    <defs>
      <linearGradient
        id="peakGlow"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
      >
        <stop offset="0%" stopColor="#4bc5f5" />
        <stop offset="60%" stopColor="#1c87e3" />
        <stop offset="100%" stopColor="#0b3f8c" />
      </linearGradient>
      <linearGradient
        id="sunrise"
        x1="30%"
        y1="20%"
        x2="80%"
        y2="85%"
      >
        <stop offset="0%" stopColor="#ffb347" />
        <stop offset="45%" stopColor="#ff7052" />
        <stop offset="100%" stopColor="#f43f5e" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <circle cx="320" cy="58" r="42" fill="url(#sunrise)" opacity="0.35" />
      <path
        d="M40 122c32-50 66-75 102-75 40 0 58 32 80 33s44-26 84-26c23 0 45 15 64 45"
        stroke="#6ae0ff"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M40 118c36-59 74-88 114-88 33 0 57 23 74 24 17 1 35-24 69-24 25 0 57 15 93 44"
        stroke="#1ba7ff"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M82 118 152 34c6-7 16-7 22 0l70 84H82Z"
        fill="url(#peakGlow)"
      />
      <path
        d="m153 46 17 21c2 2 0 5-3 5h-28c-3 0-5-3-3-5l17-21Z"
        fill="#f4fbff"
      />
      <path
        d="M116 118c22-27 42-41 60-41 18 0 34 14 54 41H116Z"
        fill="#061428"
        opacity="0.6"
      />
      <text
        x="40"
        y="146"
        fill="#f6fbff"
        fontFamily="'Source Sans 3', sans-serif"
        fontSize="42"
        fontWeight="700"
        letterSpacing="0.08em"
      >
        FUJI TOUR GUIDE
      </text>
      <text
        x="44"
        y="155"
        fill="#7cd2ff"
        fontFamily="'Source Sans 3', sans-serif"
        fontSize="16"
        letterSpacing="0.38em"
      >
        LUXURY DAY JOURNEY
      </text>
    </g>
  </svg>
);

export default Logo;

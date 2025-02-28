export function WeddingBells() {
  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
      <div className="relative">
        <svg
          className="w-16 h-16 text-rose-300 animate-bell-swing"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 3C7.58172 3 4 6.58172 4 11V17H20V11C20 6.58172 16.4183 3 12 3Z"
            className="fill-current"
          />
          <path
            d="M9 17V19C9 20.6569 10.3431 22 12 22C13.6569 22 15 20.6569 15 19V17"
            className="stroke-current"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M12 3V1M21 18H3"
            className="stroke-current"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-4 bg-rose-300"></div>
      </div>
    </div>
  );
}

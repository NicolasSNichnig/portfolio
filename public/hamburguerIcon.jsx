// components/MenuIcon.jsx
const MenuIcon = ({ size = 40, className = "" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`cursor-pointer transition-colors duration-300 group ${className}`}
    >
      <g className="opacity-100 group-hover:opacity-0 transition-opacity duration-300">
        <path 
          d="M4 6H20M4 12H20M4 18H20" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </g>

      <g className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <path 
          d="M4 6H20M4 12H14M4 18H9" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default MenuIcon;
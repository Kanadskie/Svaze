const SvgLogo = ({ 
  width = 393.1, 
  height = 100.8,
  strokeColor = "#f0eee7",
  hoverColor = "#967f58",
  className = ""
}) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 393.1 100.8"
      width={width}
      height={height}
      className={`svg-logo ${className}`}
    >
      <style>{`
        .svg-logo:hover path {
          stroke: ${hoverColor} !important;
          transition: stroke 0.3s ease;
        }
        .st0 {
          fill: none;
          stroke: ${strokeColor};
          stroke-width: 5.1;
          stroke-linecap: round;
          stroke-linejoin: round;
          transition: stroke 0.3s ease;
        }
        .st1 {
          fill: none;
          stroke: ${strokeColor};
          stroke-width: 4.25;
          stroke-linecap: round;
          stroke-linejoin: round;
          transition: stroke 0.3s ease;
        }
      `}</style>
      
      <g>
        <path className="st0" d="M16.2,8.2c-5.8,18.5,1.5,64.7,1.5,87" />
        <path className="st0" d="M61.2,18.7c-6.5,2.7-62,36.7-58.5,37.5c32.6,7.8,58.2,42.1,60,42" />
        <path className="st0" d="M62.7,98.2c9.8-15.2,10.4-57.7,19.5-57c10,13.7,22.9,26,28.5,42" />
        <path className="st0" d="M71.7,68.9c-16.9-8.4,43.6,6,26.3-7.7" />
        <path className="st0" d="M118.2,84c0-7.5-0.6-47.3,0.9-44.9c8.1,13,16.4,32.9,25.7,47.2c8.7,13.5,5.7,11.4,5.7-8c0-16.2-2.2-34.7-2.2-51.7" />
        <path className="st0" d="M62.7,98.2c9.8-15.2,10.4-57.7,19.5-57c10,13.7,22.9,26,28.5,42" />
        <path className="st0" d="M167.7,67.5c-16.9-8.4,43.6,6,26.3-7.7" />
        <path className="st0" d="M158.7,96.9c9.8-15.3,10.4-57.7,19.5-57c10,13.7,22.9,25.9,28.5,42" />
        <path className="st0" d="M229.7,2.5c0.5,22.5,0.5,28.8,7.8,52.2c2.6,8.3,5.5,19.6,4.8,28.4c0-3.2-0.9-0.8-9-1c-28.1-0.6-41.2-45.3-0.7-32.9c7,2.2,7.3,4.4,11.6,5.9" />
        <path className="st0" d="M274.7,51.7c6.6,1.4,8.9-12-3.5-11.7c-9.1,0.2-18.1,6.9-5.6,16.1c8.5,6.2,20.5,9.3,23.1,15.4c2.2,5.2-27,19.1-30.5-3.5c-0.8-4.9,2.8-0.5,3.8-2.8c-1.3,0.2-9.8,1.9-9.2,3" />
        <path className="st0" d="M296,17.2c0,10.8,2.8,23.7,3.4,36.5c0.4,8.4,0.5,17.7,0.5,26.2" />
        <path className="st0" d="M320.3,35c-4.3,5-31.1,20.2-29.7,21.2c0.5,0.3,31.3,16.5,31.5,16.8" />
        <path className="st0" d="M333.5,38.2c1,3.7,2.5,24.6,3.6,31.4c0.7,3.4,1.1,6.9,1.2,10.4" />
        <path className="st1" d="M331.1,29.2c12-6.6-10.3-9.2-4.6,0.9c0.9,1.6,6,1.8,7.6,1.8" />
        <path className="st0" d="M348.3,56.7c3,0.1,28.5-0.9,23.8-8.7c-3.7-6.1-32.1,4.9-18.7,21.9c6.5,8.2,29.3,2.7,37.2-6.2" />
      </g>
    </svg>
  );
};

export default SvgLogo;
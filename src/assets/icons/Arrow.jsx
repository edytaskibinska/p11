function Arrow({ width, height, rotate }) {
  return (
    <svg
      width={width}
      height={height}
      transform={`translate(0) rotate(${rotate})`}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
        fill="white"
      />
    </svg>
  );
}

export default Arrow;

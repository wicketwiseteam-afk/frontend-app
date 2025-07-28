const GradientBlob = ({ position, colors, size = "750px", opacity = "opacity-15" }) => {
  const positionClasses = {
    "top-right": "-top-52 -right-52",
    "bottom-left": "-bottom-100 -left-100",
    "top-left": "top-0 left-0",
    "bottom-right": "bottom-0 right-0",
    "center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  };

  return (
    <div
      className={`absolute ${positionClasses[position]} ${colors} ${opacity} blur-[160px] z-[100] pointer-events-none rounded-full`}
      style={{ width: size, height: size }}
    />
  );
};

export default GradientBlob;

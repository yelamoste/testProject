import React from "react";

// Used Claude AI for pentagon levels because I can't do math.

const CharacterPentagonLevel = () => {
  const [centerX, centerY, baseRadius, radiusStep] = [150, 125, 20, 23];

  const getPentagonPoints = (level) => {
    const angles = [0, 72, 144, 216, 288];
    const radius = baseRadius + (level - 1) * radiusStep;

    return angles.map((angle) => {
      const radian = (angle - 90) * (Math.PI / 180);
      return {
        x: centerX + Math.cos(radian) * radius,
        y: centerY + Math.sin(radian) * radius,
      };
    });
  };

  const createPath = (points) => {
    return (
      `M ${points[0].x} ${points[0].y} ` +
      points
        .slice(1)
        .map((p) => `L ${p.x} ${p.y}`)
        .join(" ") +
      " Z"
    );
  };

  return (
    <div className="flex-col flex">
      <h1 className="self-center text-gray-600 p-[10px] ">
        Attributes Summary
      </h1>
      <div className="p-[20px] flex justify-center flex-row">
        <svg
          width="300"
          height="300"
          className="hover:drop-shadow-orange-300/50"
        >
          {[1, 2, 3, 4, 5].map((level) => {
            const points = getPentagonPoints(level);
            const path = createPath(points);

            return (
              <path
                key={level}
                d={path}
                fill="none"
                stroke={`#364153`}
                strokeWidth="1.5"
                opacity="0.7"
              />
            );
          })}
        </svg>
      </div>
    </div>
  );
};

export default CharacterPentagonLevel;

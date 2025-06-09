import React, { useEffect, useState } from "react";

const Class = ({ classGroup }) => {
  const [heroClass, setHeroClass] = useState("No Class");
  useEffect(() => {
    setHeroClass(classGroup);
  }, [classGroup]);

  return (
    <>
      {heroClass === "Hero" ? (
        <a title="A Hero seeks Justice.">Hero</a>
      ) : (
        <a>Not a Hero</a>
      )}
    </>
  );
};

export default Class;

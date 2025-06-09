import React, { useEffect, useState } from "react";

const Tier = ({ tierRanking }) => {
  const [tierRank, setTierRank] = useState("Unranked");

  useEffect(() => {
    setTierRank(tierRanking);
  }, [tierRanking]);

  return (
    <>
      {tierRank === "Superior" ? (
        <a
          className="bg-gradient-to-r from-amber-100 to-yellow-500 bg-clip-text font-black text-xl inline-block text-transparent animate-textShadow"
          href="#s-tier"
          title="Superior Tier"
        >
          S
        </a>
      ) : (
        <div>{tierRank}</div>
      )}
    </>
  );
};

export default Tier;

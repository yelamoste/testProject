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
      ) : tierRank === "A-tier" ? (
        <a
          className="bg-gradient-to-r from-orange-300 to-orange-700 bg-clip-text font-black text-xl inline-block text-transparent animate-textShadow"
          href="#a-tier"
          title="A Tier"
        >
          A
        </a>
      ) : tierRank === "B-tier" ? (
        <a
          className="bg-gradient-to-r from-purple-300 to-purple-700 bg-clip-text font-black text-xl inline-block text-transparent animate-textShadow"
          href="#b-tier"
          title="B Tier"
        >
          B
        </a>
      ) : tierRank === "C-tier" ? (
        <a
          className="bg-gradient-to-r from-blue-300 to-blue-700 bg-clip-text font-black text-xl inline-block text-transparent animate-textShadow"
          href="#c-tier"
          title="C Tier"
        >
          C
        </a>
      ) : tierRank === "D-tier" ? (
        <a
          className="bg-gradient-to-r from-green-300 to-green-700 bg-clip-text font-black text-xl inline-block text-transparent animate-textShadow"
          href="#d-tier"
          title="D Tier"
        >
          D
        </a>
      ) : tierRank === "E-tier" ? (
        <a
          className="bg-gradient-to-r from-gray-300 to-gray-700 bg-clip-text font-black text-xl inline-block text-transparent animate-textShadow"
          href="#e-tier"
          title="E Tier"
        >
          E
        </a>
      ) : null}
    </>
  );
};

export default Tier;

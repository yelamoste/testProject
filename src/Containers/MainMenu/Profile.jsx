import React from "react";

const Profile = (props) => {
  const selectedWorld = props.selectedWorld;
  const finalRole = props.finalRole;
  const birthSex = props.birthSex;
  const playerName = props.playerName;
  return (
    <div>
      <>
        <p className="text-gray-400">Player Name: {playerName}</p>
        <p className="text-gray-400">World: {selectedWorld}</p>
        <p className="text-gray-400">Role: {finalRole}</p>
        <p className="text-gray-400">Sex: {birthSex}</p>
      </>
    </div>
  );
};

export default Profile;

import React from "react";
import fire from "../javaScripts/fire";

export const GameInput = ({ game }) => {
  const [name, setName] = React.useState(game.name);
  const [played, setPlayed] = React.useState(game.played);

  const onUpdate = () => {
    const db = fire.firestore();
    db.collection("games")
      .doc(game.id)
      .set({ ...game, name, played });
  };

  const onDelete = () => {
    const db = fire.firestore();
    db.collection("games").doc(game.id).delete();
  };
  return (
    <>
      <div className="gamelist">
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          className="severalcheck"
          checked={played}
          onClick={() => setPlayed(!played)}
          type="checkbox"
        />
        <button onClick={onUpdate}>Update</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </>
  );
};

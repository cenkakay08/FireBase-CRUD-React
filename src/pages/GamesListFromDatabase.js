import React, { useState } from "react";
import fire from "../javaScripts/fire";
import { GameInput } from "../components/GameInput";
const GamesListFromDatabase = () => {
  const [games, setGames] = React.useState([]);
  const [newGameName, setNewGameName] = React.useState();
  const [newPlayed, setNewPlayed] = React.useState(false);
  React.useEffect(() => {
    const db = fire.firestore();
    return db.collection("games").onSnapshot((snapshot) => {
      const gamesData = [];
      snapshot.forEach((doc) => gamesData.push({ ...doc.data(), id: doc.id }));
      setGames(gamesData);
    });
    /* const data = await db.collection("games").get();
      setGames(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); */
  }, []);

  const onCreate = () => {
    const db = fire.firestore();
    db.collection("games").add({ name: newGameName, played: newPlayed });
  };
  return (
    <>
      <div className="infoDatabase">
        You can see here, all game data from our database. We have game list and
        checkbox for played or not played info.
      </div>
      <ul>
        <div className="infoADD">
          Write the name of game and check the box if you played. And click to
          Create button for add new game!!
        </div>
        <input
          className="ADDNAME"
          value={newGameName}
          onChange={(e) => setNewGameName(e.target.value)}
        />
        <input
          className="checkbox"
          type="checkbox"
          checked={newPlayed}
          onClick={() => setNewPlayed(!newPlayed)}
        />
        <button onClick={onCreate}>Create</button>
        <div className="assa">
          <div className="GameName">Game Name</div>
          <div className="PLAYED">Played?</div>
          {games.map((game) => (
            <li key={game.id}>
              <GameInput game={game} />
            </li>
          ))}
        </div>
      </ul>
      <div className="updateDeleteInfo">
        You can change the paramaters and click the Update botton for update
        data on database. Or you can delete the data. Don't forget refresh the
        page after actions :)
      </div>
      <div className="dropdownlist">
        <div>Game names as drop-down list:</div>
        <select name="cars" id="cars">
          {games.map((game) => (
            <option>{game.name}</option>
          ))}
        </select>
      </div>
    </>
  );
};

export default GamesListFromDatabase;

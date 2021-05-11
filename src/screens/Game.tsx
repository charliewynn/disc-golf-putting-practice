import { useState } from "react";
import Session from "../components/Session";

type SessionTypes = "First" | "Second";

const Game = () => {
  const [CurrentSession, SetCurrentSession] = useState<SessionTypes>("First");
  const [FirstSessionData, SetFirstSessionData] = useState<Array<Boolean>>(
    Array(10).fill(false)
  );
  const [SecondSessionData, SetSecondSessionData] = useState<Array<Boolean>>(
    Array(10).fill(false)
  );

  const startCancel = () => {
    console.log("Starting Cancel");
  };
  const startEndGame = () => {
    console.log("Starting EndGame");
  };
  const renderFooterActions = () => {
    let actions = [];
    if (CurrentSession == "First") {
      actions = [
        { Title: "Cancel Game", onClick: startCancel },
        {
          Title: "Start Round 2",
          onClick: () => SetCurrentSession("Second"),
        },
      ];
    } else {
      actions = [
        {
          Title: "Start Round 2",
          onClick: () => SetCurrentSession("First"),
        },
        { Title: "Save Game", onClick: startEndGame },
      ];
    }
    return actions.map((action, i) => (
      <button key={i} onClick={action.onClick}>
        {action.Title}
      </button>
    ));
  };

  return (
    <div>
      <div>GAME page</div>
      <Session
        scores={
          CurrentSession == "First" ? FirstSessionData : SecondSessionData
        }
      />
      {renderFooterActions()}
    </div>
  );
};

export default Game;

import { useState } from "react";
import { Card } from "./Card";

const PkmnList = (props) => {
  const [teamDisplay, setTeamDisplay] = useState(false);
  const [teamArray, setArrayTeam] = useState([]); //---> the team is an array filled by the pkmn I clik on!
  const [teamCounterUpTo6, setTeamUpTo6] = useState(1); //---> I control my max team length
  const [isTeamReady, setIsTeamReady] = useState(false);

  const addPkmnOnClickFunction = (elem) => {
    setTeamDisplay(true); //--->once I click first time, show the team-box
    console.log("You chose " + elem.name);
    let myTempObj = { name: elem.name, sprite: elem.sprite }; //--->creating object which contain both the name and sprite URL
    setArrayTeam((current) => [...current, myTempObj]); // I fill an array pushing in the sprites
    setTeamUpTo6(teamCounterUpTo6 + 1);
    if (teamCounterUpTo6 == 6) {
      setIsTeamReady(true);
    }
  };

  return (
    <>
      {teamDisplay && (
        <section className="w-75 m-1 d-flex flex-column align-items-center border border-5 border-danger rounded ">
          <h3 className="bg-danger rounded p-1 mt-1 d-inline">Your Team</h3>

          <div className="container ">
            <div className="row align-items-end">
              {teamArray.map((elem, index) => {
                return (
                  <div
                    className="col-2 p-1  align-items-center container"
                    key={index}
                  >
                    <figure className="d-flex flex-column align-items-center row">
                      <img
                        src={elem.sprite}
                        alt="teamArray"
                        className=" col-8 mb-1 p-2  "
                      ></img>
                      <figcaption className="text-center flex-shrink-1">
                        <strong>{elem.name}</strong>
                      </figcaption>
                    </figure>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
      {isTeamReady && (
        <div className="container">
          <section className="row justify-content-center">
            <h2 className="d-block col-12 p-3 mt-2 text-center bg-danger border border-4 border-dark rounded ">
              Is this your team?
            </h2>
            <button className="col-3 m-3 p-1 border border-2 border-dark rounded">
              Yes
            </button>
            <button className="col-3 m-3 p-1 border border-2 border-dark rounded">
              No
            </button>
          </section>
        </div>
      )}
      {/*how to insert "yourname" variable??? */}

      <ul className="container list-unstyled">
        <div className="row p-2">
          {" "}
          {/*modify bg when teamready */}
          {props.list.map((elem, index) => {
            return (
              <Card
                key={index}
                addPkmnOnClick={() => {
                  if (isTeamReady) {
                    //--->IF you chose 6 pkmn yet, disable "onClick" feature! (you cannot choose more pkmn)
                    return; //--->MEANS STOP!
                  }
                  addPkmnOnClickFunction(elem);
                }} // now I've passed "elem" to line "8"--->  STUDY!
                // use array + push!!! to create a team!
                //ADD POINTER BEHAVE
                sprite={elem.sprite}
                name={elem.name}
                number={elem.number}
                type={elem.type}
              ></Card>
            );
          })}
        </div>
      </ul>
    </>
  );
};

export { PkmnList };

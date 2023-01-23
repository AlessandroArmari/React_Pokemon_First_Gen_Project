import { useState } from "react";
import { Card } from "./Card";

const PkmnList = (props) => {
  const [teamDisplay, setTeamDisplay] = useState(false);
  const [teamArray, setArrayTeam] = useState([]); //---> the team is an array filled by the pkmn I clik on!
  const [teamCounterUpTo6, setTeamUpTo6] = useState(1); //---> I control my max team length

  const addPkmnOnClickFunction = (elem) => {
    console.log(teamCounterUpTo6);
    setTeamDisplay(true); //--->once I click first time, show the team-box
    console.log("You chose " + elem.name);
    setArrayTeam((current) => [...current, elem.sprite]); // I fill an array pushing in the sprites
    setTeamUpTo6(teamCounterUpTo6 + 1);
    console.log(teamCounterUpTo6);
  };

  if (teamCounterUpTo6 > 10) {
    return <div>dio</div>;
  }

  return (
    <>
      {teamDisplay && (
        <section className="w-75 m-1 d-flex flex-column align-items-center border border-5 border-danger rounded ">
          <h3 className="bg-danger rounded p-1 mt-1 d-inline">Your Team</h3>

          <div className="container ">
            <div className="row p-2 ">
              {teamArray.map((elem, index) => {
                return (
                  <img
                    key={index}
                    src={elem}
                    alt="teamArray"
                    className="col-2 mb-2 p-2 "
                  ></img>
                );
              })}
            </div>
          </div>
        </section>
      )}
      <ul className="container list-unstyled">
        <div className="row">
          {props.list.pokedex.map((elem, index) => {
            return (
              <Card
                key={index}
                addPkmnOnClick={() => {
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

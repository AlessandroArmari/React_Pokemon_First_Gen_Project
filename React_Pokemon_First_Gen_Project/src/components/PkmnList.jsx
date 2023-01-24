import { useState } from "react";
import { Card } from "./Card";

const PkmnList = (props) => {
  const [teamDisplay, setTeamDisplay] = useState(false);
  const [teamArray, setArrayTeam] = useState([]); //---> the team is an array filled by the pkmn I clik on!
  const [teamCounterUpTo6, setTeamUpTo6] = useState(1); //---> I control my max team length

  const addPkmnOnClickFunction = (elem) => {
    setTeamDisplay(true); //--->once I click first time, show the team-box
    console.log("You chose " + elem.name);
    let myTempObj = { name: elem.name, sprite: elem.sprite }; //--->creating object which contain both the name and sprite URL
    setArrayTeam((current) => [...current, myTempObj]); // I fill an array pushing in the sprites
    setTeamUpTo6(teamCounterUpTo6 + 1);
  };

  if (teamCounterUpTo6 > 10) {
    return <div>Too MANY!</div>;
  }

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
                      <figcaption className="text-center">
                        {elem.name}
                      </figcaption>
                    </figure>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
      <ul className="container list-unstyled">
        <div className="row p-2">
          {props.list.map((elem, index) => {
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

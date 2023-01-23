import { useState } from "react";
import { Card } from "./Card";

const PkmnList = (props) => {
  const [teamDisplay, setTeamDisplay] = useState(false);
  const [firstPkmn, setFirstPkmn] = useState("");

  const addPkmnOnClickFunction = (event) => {
    setTeamDisplay(true);
    console.log("You chose " + event.target.name.value); //sss
    setFirstPkmn(event.target.sprite);
  };
  return (
    <>
      {teamDisplay && (
        <section className="m-4 d-flex flex-column align-items-center border border-3 border-danger rounded ">
          <h3>Your Team</h3>
          <div>
            <img
              src={firstPkmn}
              alt="firstPkmn"
              className="mb-1 border border-2 border-primary rounded"
            />
          </div>
        </section>
      )}
      <ul className="container list-unstyled">
        <div className="row">
          {props.list.pokedex.map((elem, index) => {
            return (
              <Card
                key={index}
                addPkmnOnClick={addPkmnOnClickFunction}
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

import { useState } from "react";
import { Card } from "./Card";

const PkmnList = (props) => {
  const [teamDisplay, setTeamDisplay] = useState(false);

  return (
    <ul className="container list-unstyled">
      <div className="row">
        {props.list.pokedex.map((elem, index) => {
          return (
            <Card
              key={index}
              addPkmnOnClick={() => {
                setTeamDisplay(true);
              }} //WHEN I CLICK AN IMAGE!
              sprite={elem.sprite}
              name={elem.name}
              number={elem.number}
              type={elem.type}
            />
          );
        })}
      </div>
    </ul>
  );
};

export { PkmnList };

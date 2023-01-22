import { Card } from "./Card";
const PkmnList = (props) => {
  return (
    <ul className="container list-unstyled">
      <div className="row">
        {props.list.pokedex.map((elem, index) => {
          return (
            <Card
              key={index}
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

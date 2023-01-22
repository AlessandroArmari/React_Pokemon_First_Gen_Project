const Card = (props) => {
  return (
    <li className="p-3 m-2 col-1 border border-2 border-primary rounded d-flex justify-content-center">
      <img src={props.sprite} alt={props.name} />
    </li>
  );
};

export { Card };

const Card = (props) => {
  return (
    <>
      <li
        onClick={props.addPkmnOnClick}
        className="p-1 m-1 col-1 border border-2 border-primary rounded d-flex justify-content-around "
      >
        <img className="col-10" src={props.sprite} alt={props.name} />
      </li>
    </>
  );
};

export { Card };

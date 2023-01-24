import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { PkmnList } from "./components/PkmnList.jsx";

function App() {
  const [yourName, setYourName] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isButton2Disabled, setIsButton2Disabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pokedex, setPokedex] = useState([]);
  const [secondPhase, setSecondPhase] = useState(false);

  const yourNameSent = (event) => {
    event.preventDefault();
    setYourName(yourName);
    console.log("You'll name as Pkmn trainer will be: " + yourName);
    setSecondPhase(true);
  };

  const yourNameHandler = (event) => {
    setYourName(event.target.value);

    if (event.target.value.length >= 5) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const fetchHandler = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://8a61f3a8-11ec-4304-8e97-e2bc1c1eec61.mock.pstmn.io/pokedex"
      );
      if (!response.ok)
        throw new Error("Something went wrong! Probably wrong URL!");

      const data = await response.json();
      const transformedPkmn = data.pokedex.map((elem, index) => {
        return {
          name: elem.name,
          number: elem.number,
          type: elem.type,
          sprite: elem.sprite,
        };
      });
      setPokedex(transformedPkmn); //---> go to line 73!
      setIsButton2Disabled(true); //--->here I disabled this "fetch" button
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  let final;

  //Conditional (ternary) operator HERE
  isLoading == true ? (final = <div>Is Loading</div>) : (final = <div></div>);

  /* 
  IS THE SAME AS ABOVE!!!

  let final = <div>Not Ready</div>;

  if (isLoading == true) {
    final = <div>Is Loading</div>;
  }
  */

  if (pokedex.length > 0) {
    final = <PkmnList list={pokedex} />;
  }

  return (
    <div>
      {!secondPhase && ( //--->once i Click on the button the form will fade!
        <form onSubmit={yourNameSent}>
          <div className="p-2 d-flex flex-column gap-3 align-items-center">
            <label htmlFor="trainerId">
              <h5>What's your name?</h5>
            </label>
            <input
              type="text"
              id="trainerId"
              name="trainerId"
              value={yourName}
              onChange={yourNameHandler}
            />
            <button
              className=" w-25 btn btn-dark btn-sm"
              disabled={isButtonDisabled}
            >
              OK
            </button>
          </div>
        </form>
      )}
      {secondPhase && (
        <section>
          <div className="p-2 d-flex flex-column align-items-center">
            <p>Okay {yourName},</p>
            <p>Choose your team!</p>
            <button
              className="w-50 p-2 btn btn-dark btn-sm"
              onClick={fetchHandler}
              disabled={isButton2Disabled}
            >
              Show First Generation Pokemon!
            </button>
          </div>

          <div className="d-flex flex-column align-items-center">{final}</div>
        </section>
      )}
    </div>
  );
}
export default App;

//STYLE: LOADING AND NO FOUND
//++++MAKE SPRITE CHANGING DIMENSION PROPERLY+++
//SHOW POKEMON NAME
//CREATE BACK END
//GO ON...

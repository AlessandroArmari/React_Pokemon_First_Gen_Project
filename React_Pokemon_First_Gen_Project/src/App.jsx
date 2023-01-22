import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { PkmnList } from "./components/PkmnList.jsx";

const tool = 2;

function App() {
  const [yourName, setYourName] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
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

  return (
    <div>
      {!secondPhase && ( //--->once i Click on the button the form will fade!
        <form onSubmit={yourNameSent}>
          <div className="p-3 d-inline-flex flex-column gap-2">
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
            <button className="btn btn-dark btn-sm" disabled={isButtonDisabled}>
              OK
            </button>
          </div>
        </form>
      )}
      {secondPhase && (
        <section>
          <div className="p-2 d-flex flex-column align-items-center">
            <p>Okay {yourName}...</p>
            <p>Pick up your team!</p>
          </div>

          <PkmnList list={list} />
        </section>
      )}
    </div>
  );
}
//DO THE GET AND MAKE BUTTONS

const list = {
  pokedex: [
    {
      name: "Bulbasaur",
      number: "001",
      type: "Grass",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_001.png",
    },
    {
      name: "Ivysaur",
      number: "002",
      type: "Grass",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_002.png",
    },
    {
      name: "Venusaur",
      number: "003",
      type: "Grass",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_003.png",
    },
    {
      name: "Charmander",
      number: "004",
      type: "Fire",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_004.png",
    },
    {
      name: "Charmeleon",
      number: "005",
      type: "Fire",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_005.png",
    },
    {
      name: "Charizard",
      number: "006",
      type: "Fire",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_006.png",
    },
    {
      name: "Squirtle",
      number: "007",
      type: "Water",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_007.png",
    },
    {
      name: "Wartortle",
      number: "008",
      type: "Water",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_008.png",
    },
    {
      name: "Blastoise",
      number: "009",
      type: "Water",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_009.png",
    },
    {
      name: "Caterpie",
      number: "010",
      type: "Bug",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_010.png",
    },
    {
      name: "Metapod",
      number: "011",
      type: "Bug",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_011.png",
    },
    {
      name: "Butterfree",
      number: "012",
      type: "Bug",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_012.png",
    },
    {
      name: "Weedle",
      number: "013",
      type: "Bug",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_013.png",
    },
    {
      name: "Kakuna",
      number: "014",
      type: "Bug",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_014.png",
    },
    {
      name: "Beedrill",
      number: "015",
      type: "Bug",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_015.png",
    },
    {
      name: "Pidgey",
      number: "016",
      type: "Normal/Flying",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_016.png",
    },
    {
      name: "Pidgeotto",
      number: "017",
      type: "Normal/Flying",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_017.png",
    },
    {
      name: "Pidgeot",
      number: "018",
      type: "Normal/Flying",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_018.png",
    },
    {
      name: "Rattata",
      number: "019",
      type: "Normal",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_019.png",
    },
    {
      name: "Raticate",
      number: "020",
      type: "Normal",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_020.png",
    },
    {
      name: "Spearow",
      number: "021",
      type: "Normal/Flying",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_021.png",
    },
    {
      name: "Fearow",
      number: "022",
      type: "Normal/Flying",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_022.png",
    },
    {
      name: "Ekans",
      number: "023",
      type: "Poison",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_023.png",
    },
    {
      name: "Arbok",
      number: "024",
      type: "Poison",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_024.png",
    },
    {
      name: "Pikachu",
      number: "025",
      type: "Electric",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_025.png",
    },
    {
      name: "Raichu",
      number: "026",
      type: "Electric",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_026.png",
    },
    {
      name: "Sandshrew",
      number: "027",
      type: "Ground",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_027.png",
    },
    {
      name: "Sandslash",
      number: "028",
      type: "Ground",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_028.png",
    },
    {
      name: "Nidoran (f.)",
      number: "029",
      type: "Poison",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_029.png",
    },
    {
      name: "Nidorina",
      number: "030",
      type: "Poison",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_030.png",
    },
    {
      name: "Nidoqueen",
      number: "031",
      type: "Poison/Ground",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_031.png",
    },
    {
      name: "Nidoran (m.)",
      number: "032",
      type: "Poison",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_032.png",
    },
    {
      name: "Nidorino",
      number: "033",
      type: "Poison",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_033.png",
    },
    {
      name: "Nidoking",
      number: "034",
      type: "Poison/Ground",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_034.png",
    },
    {
      name: "Clefairy",
      number: "035",
      type: "Normal",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_035.png",
    },
    {
      name: "Clefable",
      number: "036",
      type: "Normal",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_036.png",
    },
    {
      name: "Vulpix",
      number: "037",
      type: "Fire",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_037.png",
    },
    {
      name: "Ninetales",
      number: "038",
      type: "Fire",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_038.png",
    },
    {
      name: "Jigglypuff",
      number: "039",
      type: "Normal",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_039.png",
    },
    {
      name: "Wigglytuff",
      number: "040",
      type: "Normal",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_040.png",
    },
    {
      name: "Zubat",
      number: "041",
      type: "Poison/Flying",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_041.png",
    },
    {
      name: "Golbat",
      number: "042",
      type: "Poison/Flying",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_042.png",
    },
    {
      name: "Oddish",
      number: "043",
      type: "Grass/Poison",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_043.png",
    },
    {
      name: "Gloom",
      number: "044",
      type: "Grass/Poison",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_044.png",
    },
    {
      name: "Vileplume",
      number: "045",
      type: "Grass/Poison",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_045.png",
    },
    {
      name: "Paras",
      number: "046",
      type: "Bug/Grass",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_046.png",
    },
    {
      name: "Parasect",
      number: "047",
      type: "Bug/Grass",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_047.png",
    },
    {
      name: "Venonat",
      number: "048",
      type: "Bug/Poison",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_048.png",
    },
    {
      name: "Venomoth",
      number: "049",
      type: "Bug/Grass",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_049.png",
    },
    {
      name: "Diglett",
      number: "050",
      type: "Ground",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_050.png",
    },
    {
      name: "Dugtrio",
      number: "051",
      type: "Ground",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_051.png",
    },
    {
      name: "Meowth",
      number: "052",
      type: "Normal",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_052.png",
    },
    {
      name: "Persian",
      number: "053",
      type: "Normal",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_053.png",
    },
    {
      name: "Psyduck",
      number: "054",
      type: "Water",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_054.png",
    },
    {
      name: "Golduck",
      number: "055",
      type: "Water",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_055.png",
    },
    {
      name: "Mankey",
      number: "056",
      type: "Fighting",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_056.png",
    },
    {
      name: "Primeape",
      number: "057",
      type: "Fighting",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_057.png",
    },
    {
      name: "Growlithe",
      number: "058",
      type: "Fire",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_058.png",
    },
    {
      name: "Arcanine",
      number: "059",
      type: "Fire",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_059.png",
    },
    {
      name: "Poliwag",
      number: "060",
      type: "Water",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_060.png",
    },
    {
      name: "Poliwhirl",
      number: "061",
      type: "Water",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_061.png",
    },
    {
      name: "Poliwrath",
      number: "062",
      type: "Water/Fighing",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_062.png",
    },
    {
      name: "Abra",
      number: "063",
      type: "Psychic",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_063.png",
    },
    {
      name: "Kadabra",
      number: "064",
      type: "Psychic",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_064.png",
    },
    {
      name: "Alakazam",
      number: "065",
      type: "Psychic",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_065.png",
    },
    {
      name: "Machop",
      number: "066",
      type: "Fighting",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_066.png",
    },
    {
      name: "Machoke",
      number: "067",
      type: "Fighting",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_067.png",
    },
    {
      name: "Machamp",
      number: "068",
      type: "Fighting",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_068.png",
    },
    {
      name: "Bellsprout",
      number: "069",
      type: "Grass/Poison",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_069.png",
    },
    {
      name: "Weepinbell",
      number: "070",
      type: "Grass/Poison",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_070.png",
    },
    {
      name: "Victreebell",
      number: "071",
      type: "Grass/Poison",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_071.png",
    },
    {
      name: "Tentacool",
      number: "072",
      type: "Water/Poison",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_072.png",
    },
    {
      name: "Tentacruel",
      number: "073",
      type: "Water/Poison",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_073.png",
    },
    {
      name: "Geodude",
      number: "074",
      type: "Rock/Ground",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_074.png",
    },
    {
      name: "Graveler",
      number: "075",
      type: "Rock/Ground",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_075.png",
    },
    {
      name: "Golem",
      number: "076",
      type: "Rock/Ground",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_076.png",
    },
    {
      name: "Ponyta",
      number: "077",
      type: "Fire",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_077.png",
    },
    {
      name: "Rapidash",
      number: "078",
      type: "Fire",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_078.png",
    },
    {
      name: "Slowpoke",
      number: "079",
      type: "Water/Psychic",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_079.png",
    },
    {
      name: "Slowbro",
      number: "080",
      type: "Water/Psychic",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_080.png",
    },
    {
      name: "Magnemite",
      number: "081",
      type: "Electric",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_081.png",
    },
    {
      name: "Magneton",
      number: "082",
      type: "Electric",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_082.png",
    },
    {
      name: "Farfetch'd",
      number: "083",
      type: "Flying/Normal",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_083.png",
    },
    {
      name: "Doduo",
      number: "084",
      type: "Flying/Normal",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_084.png",
    },
    {
      name: "Dodrio",
      number: "085",
      type: "Flying/Normal",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_085.png",
    },
    {
      name: "Seel",
      number: "086",
      type: "Water",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_086.png",
    },
    {
      name: "Dewgong",
      number: "087",
      type: "Water/Ice",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_087.png",
    },
    {
      name: "Grimer",
      number: "088",
      type: "Poison",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_088.png",
    },
    {
      name: "Muk",
      number: "089",
      type: "Poison",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_089.png",
    },
    {
      name: "Shellder",
      number: "090",
      type: "Water",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_090.png",
    },
    {
      name: "Cloyster",
      number: "091",
      type: "Water/Ice",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_091.png",
    },
    {
      name: "Gastly",
      number: "092",
      type: "Ghost/Poison",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_092.png",
    },
    {
      name: "Haunter",
      number: "093",
      type: "Ghost/Poison",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_093.png",
    },
    {
      name: "Gengar",
      number: "094",
      type: "Ghost/Poison",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_094.png",
    },
    {
      name: "Onix",
      number: "095",
      type: "Rock/Ground",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_095.png",
    },
    {
      name: "Drowzee",
      number: "096",
      type: "Psychic",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_096.png",
    },
    {
      name: "Hypno",
      number: "097",
      type: "Psychic",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_097.png",
    },
    {
      name: "Krabby",
      number: "098",
      type: "Water",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_098.png",
    },
    {
      name: "Kingler",
      number: "099",
      type: "Water",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_099.png",
    },
    {
      name: "Voltorb",
      number: "100",
      type: "Electric",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_100.png",
    },
    {
      name: "Electrode",
      number: "101",
      type: "Electric",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_101.png",
    },
    {
      name: "Exeggcute",
      number: "102",
      type: "Grass/Psychic",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_102.png",
    },
    {
      name: "Exeggutor",
      number: "103",
      type: "Grass/Psychic",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_103.png",
    },
    {
      name: "Cubone",
      number: "104",
      type: "Ground",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_104.png",
    },
    {
      name: "Marowak",
      number: "105",
      type: "Ground",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_105.png",
    },
    {
      name: "Hitmonlee",
      number: "106",
      type: "Fighting",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_106.png",
    },
    {
      name: "Hitmonchan",
      number: "107",
      type: "Fighting",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_107.png",
    },
    {
      name: "Lickitung",
      number: "108",
      type: "Normal",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_108.png",
    },
    {
      name: "Koffing",
      number: "109",
      type: "Poison",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_109.png",
    },
    {
      name: "Weezing",
      number: "110",
      type: "Poison",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_110.png",
    },
    {
      name: "Rhyhorn",
      number: "111",
      type: "Ground/Rock",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_111.png",
    },
    {
      name: "Rhydon",
      number: "112",
      type: "Ground/Rock",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_112.png",
    },
    {
      name: "Chansey",
      number: "113",
      type: "Normal",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_113.png",
    },
    {
      name: "Tangela",
      number: "114",
      type: "Grass",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_114.png",
    },
    {
      name: "Kangaskhan",
      number: "115",
      type: "Normal",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_115.png",
    },
    {
      name: "Horsea",
      number: "116",
      type: "Water",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_116.png",
    },
    {
      name: "Seadra",
      number: "117",
      type: "Water",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_117.png",
    },
    {
      name: "Goldeen",
      number: "118",
      type: "Water",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_118.png",
    },
    {
      name: "Seaking",
      number: "119",
      type: "Water",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_119.png",
    },
    {
      name: "Staryu",
      number: "120",
      type: "Water",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_120.png",
    },
    {
      name: "Starmie",
      number: "121",
      type: "Water",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_121.png",
    },
    {
      name: "Mr. Mime",
      number: "122",
      type: "Psychic",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_122.png",
    },
    {
      name: "Scyther",
      number: "123",
      type: "Bug/Flying",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_123.png",
    },
    {
      name: "Jynx",
      number: "124",
      type: "Ice/Psychic",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_124.png",
    },
    {
      name: "Electabuzz",
      number: "125",
      type: "Electric",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_125.png",
    },
    {
      name: "Magmar",
      number: "126",
      type: "Fire",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_126.png",
    },
    {
      name: "Pinsir",
      number: "127",
      type: "Bug",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_127.png",
    },
    {
      name: "Tauros",
      number: "128",
      type: "Normal",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_128.png",
    },
    {
      name: "Magikarp",
      number: "129",
      type: "Water",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_129.png",
    },
    {
      name: "Gyarados",
      number: "130",
      type: "Water/Flying",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_130.png",
    },
    {
      name: "Lapras",
      number: "131",
      type: "Water/Ice",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_131.png",
    },
    {
      name: "Ditto",
      number: "132",
      type: "Normal",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_132.png",
    },
    {
      name: "Eevee",
      number: "133",
      type: "Normal",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_133.png",
    },
    {
      name: "Vaporeon",
      number: "134",
      type: "Water",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_134.png",
    },
    {
      name: "Jolteon",
      number: "135",
      type: "Electric",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_135.png",
    },
    {
      name: "Flareon",
      number: "136",
      type: "Fire",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_136.png",
    },
    {
      name: "Porygon",
      number: "137",
      type: "Psychic",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_137.png",
    },
    {
      name: "Omanyte",
      number: "138",
      type: "Rock/Water",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_138.png",
    },
    {
      name: "Omastar",
      number: "139",
      type: "Rock/Water",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_139.png",
    },
    {
      name: "Kabuto",
      number: "140",
      type: "Rock/Water",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_140.png",
    },
    {
      name: "Kabutops",
      number: "141",
      type: "Rock/Water",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_141.png",
    },
    {
      name: "Aerodactyl",
      number: "142",
      type: "Rock/Flying",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_142.png",
    },
    {
      name: "Snorlax",
      number: "143",
      type: "Normal",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_143.png",
    },
    {
      name: "Articuno",
      number: "144",
      type: "Ice/Flying",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_144.png",
    },
    {
      name: "Zapdos",
      number: "145",
      type: "Electric/Flying",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_145.png",
    },
    {
      name: "Moltres",
      number: "146",
      type: "Fire/Flying",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_146.png",
    },
    {
      name: "Dratini",
      number: "147",
      type: "Dragon",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_147.png",
    },
    {
      name: "Dragonair",
      number: "148",
      type: "Dragon",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_148.png",
    },
    {
      name: "Dragonite",
      number: "149",
      type: "Dragon/Flying",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_149.png",
    },
    {
      name: "Mewtwo",
      number: "150",
      type: "Psychic",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_150.png",
    },
    {
      name: "Mew",
      number: "151",
      type: "Psychic",
      generation: "First",
      sprite:
        "https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_151.png",
    },
  ],
};

export default App;

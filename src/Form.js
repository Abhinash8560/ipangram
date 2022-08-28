import React from "react";
import "./App.css";
import Summary from "./Summary.js";
import { useNavigate } from "react-router";
import Card from "./Card";

export default function Form() {
  const navigate = useNavigate();

  const [state, setState] = React.useState({
  
    about: "",
    level: "",
    level1: "",
    level2: "",
    level3: "",
    experience: false,
    experience1: false,
    experience2: false,
    experience3: false,
    experience4: false,
    level4: "",
    level5: "",
    level6: "",
    level7: "",
    level8: "",
    level9: "",
    level10: "",
    level11: "",
    level12: "",
    level3: "",
  });

  function handleChange(evt) {
    const value =
      evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }
  const getSummary = (e) => {
    console.log("event");
    navigate("/Summary");
  };
  const form =(e) => {
    e.preventDefault();
    let newfield = { 
      about: "",
      level: "",
      level1: "",
      level2: "",
      level3: "",
      experience: false,
      experience1: false,
      experience2: false,
      experience3: false,
      experience4: false,
      level4: "",
      level5: "",
      level6: "",
      level7: "",
      level8: "",
      level9: "",
      level10: "",
      level11: "",
      level12: "",
      level3: "",    
    
    
    
    }
    setState({...newfield})

  }

  // const buttonClicked =(id) => {
  //   setState({...state})
  

  // }
  

  return (
    <div className="app">
      <form onSubmit={form}>
        <label>
          <h2
            style={{ color: "#1B98F5", paddingLeft: "132px", paddingTop: "px" }}
          >
            Pain & Functional Description
          </h2>
          <p style={{ paddingLeft: "102px", paddingBottom: "24px" }}>
            The description of the current situation gives your Trainer a
            picture
            <br /> of and clues to the underlying causes of your problems
          </p>
        </label>
        <div>
          <label>
            <p
              style={{
                fontSize: "15px",
                paddingLeft: "100px",
                fontSize: "17px",
              }}
            >
              If you have problems with pain/aches, stiffness, weakness or
              functional
              <br /> problems, describe this/these below. (List the symptoms in
              descending
              <br /> order with the most troublesome first)
            </p>
            <textarea
              name="about"
              value={state.about}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="heading">
          Have you been diagnosed with this problem?
        </div>
        <div style={{ display: "flex" }}>
          <label>
            Not relevant
            <input
              type="radio"
              name="level"
              value="   Not relevant"
              checked={state.level === "   Not relevant"}
              onChange={handleChange}
            />
          </label>
          <label>
            Yes
            <input
              type="radio"
              name="level"
              value="Yes"
              checked={state.level === "Yes"}
              onChange={handleChange}
            />
          </label>
          <label>
            No
            <input
              type="radio"
              name="level"
              value="masters"
              checked={state.level === "masters"}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="heading">
          Did the problem start after a physical trauma?
        </div>
        <div style={{ display: "flex" }}>
          <label>
            Not relevant
            <input
              type="radio"
              name="level1"
              value="   Not relevant1"
              checked={state.level1 === "   Not relevant1"}
              onChange={handleChange}
            />
          </label>
          <label>
            Yes
            <input
              type="radio"
              name="level1"
              value="Yes1"
              checked={state.level1 === "Yes1"}
              onChange={handleChange}
            />
          </label>
          <label>
            No
            <input
              type="radio"
              name="level1"
              value="no1"
              checked={state.level1 === "no1"}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="heading">
          Did the problem start after a mental trauma?
        </div>
        <div style={{ display: "flex" }}>
          <label>
            Not relevant
            <input
              type="radio"
              name="level2"
              value="   Not relevant2"
              checked={state.level2 === "   Not relevant2"}
              onChange={handleChange}
            />
          </label>
          <label>
            Yes
            <input
              type="radio"
              name="level2"
              value="Yes2"
              checked={state.level2 === "Yes2"}
              onChange={handleChange}
            />
          </label>
          <label>
            No
            <input
              type="radio"
              name="level2"
              value="no2"
              checked={state.level2 === "no2"}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="heading">How Often do you experience the problem?</div>
        <div style={{ display: "flex" }}>
          <label>
            Not relevant
            <input
              type="radio"
              name="level3"
              value="   Not relevant3"
              checked={state.level3 === "   Not relevant3"}
              onChange={handleChange}
            />
          </label>
          <label>
            Daily
            <input
              type="radio"
              name="level3"
              value="Daily"
              checked={state.level3 === "Daily"}
              onChange={handleChange}
            />
          </label>
          <label>
            Severaltimes/week
            <input
              type="radio"
              name="level3"
              value="   Severaltimes/week"
              checked={state.level3 === "   Severaltimes/week"}
              onChange={handleChange}
            />
          </label>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <label>
              A few times/month
              <input
                type="radio"
                name="level3"
                value="   A few times/month"
                checked={state.level3 === "   A few times/month"}
                onChange={handleChange}
              />
            </label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label>
              A few times/year
              <input
                type="radio"
                name="level3"
                value="    A few times/year"
                checked={state.level3 === "    A few times/year"}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
        <label>
          <div className="heading">When do you experience the problem?</div>
          <br />
          <input
            type="checkbox"
            name="experience"
            checked={state.freelancing}
            onChange={handleChange}
          />{" "}
          Not relevant
          <br />
          <input
            type="checkbox"
            name="experience1"
            checked={state.freelancing}
            onChange={handleChange}
          />{" "}
          When lying down
          <br />
          <input
            type="checkbox"
            name="experience2"
            checked={state.freelancing}
            onChange={handleChange}
          />{" "}
          When sitting
          <br />
          <input
            type="checkbox"
            name="experience3"
            checked={state.freelancing}
            onChange={handleChange}
          />{" "}
          Understanding
          <br />
          <input
            type="checkbox"
            name="experience4"
            checked={state.freelancing}
            onChange={handleChange}
          />{" "}
          in walking
        </label>
        <div className="heading">
          How intense is the experience of the problem on average on a 0-10
          scale?
        </div>
        <div style={{ display: "flex" }}>
          <label>
            1
            <input
              type="radio"
              name="level4"
              value=" level4"
              checked={state.level4 === " level4"}
              onChange={handleChange}
            />
          </label>
          <label>
            2
            <input
              type="radio"
              name="level5"
              value="level5"
              checked={state.level5 === "level5"}
              onChange={handleChange}
            />
          </label>
          <label>
            3
            <input
              type="radio"
              name="level6"
              value="3"
              checked={state.level6 === "3"}
              onChange={handleChange}
            />
          </label>
          <label>
            4
            <input
              type="radio"
              name="level7"
              value="4"
              checked={state.level7 === "4"}
              onChange={handleChange}
            />
          </label>
          <label>
            5
            <input
              type="radio"
              name="level8"
              value="5"
              checked={state.level8 === "5"}
              onChange={handleChange}
            />
          </label>
          <label>
            6
            <input
              type="radio"
              name="level9"
              value="6"
              checked={state.level9 === "6"}
              onChange={handleChange}
            />
          </label>
          <label>
            7
            <input
              type="radio"
              name="level10"
              value="7"
              checked={state.level10 === "7"}
              onChange={handleChange}
            />
          </label>
          <label>
            8
            <input
              type="radio"
              name="level11"
              value="8"
              checked={state.level11 === "8"}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            9
            <input
              type="radio"
              name="level12"
              value="9"
              checked={state.level12 === "9"}
              onChange={handleChange}
            />
          </label>
          <br /> <br />
          <label>
            10
            <input
              type="radio"
              name="level13"
              value="10"
              checked={state.level13 === "10"}
              onChange={handleChange}
            />
          </label>
        </div>
        <br />
        <button onClick={form}
          style={{
            backgroundColor: "#3944F7",
            color: "#fff",
            marginLeft: "18rem",
            width: '3rem',
    height: '2rem'
          }}
        >
          +
        </button>
        
        <br /> <br />
        <div
          style={{
            display: "flex",
            justifyContent: "spaceBetween",
            justifyContent: 'spaceEvenly',
            paddingLeft:'7rem'
          }}
        >
          <button style={{ backgroundColor: "#3944F7", color: "#fff" ,    width: '13rem',
    height: '2rem'}}>
            Back
          </button>
          <button
            onClick={getSummary}
            style={{ backgroundColor: "#3944F7", color: "#fff",    width: '12rem' }}
          >
            Next
          </button>
        </div>

      </form>
      <pre>{JSON.stringify(state, null, 33)}</pre>

      <div>
        {/* <Summary state={state} /> */}
      </div>
    </div>
  );
}

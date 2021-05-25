import React, { useState } from "react";
import "../styles/body.css";
import Image from "../images/pana.png";
import Imgurl from "../images/bottom.png";
function Body() {
  const [q1, setq1] = useState("");
  const [q1expected, setq1expected] = useState("");

  const [q2, setq2] = useState({
    "Approach (Introductory call)": false,
    "Photographs Quality": false,
    "Way of Conduct/Dealing": false,
    Costing: false,
    "Albums Quality": false,
    "Overall Experience": false,
  });

  const [q3, setq3] = useState({
    "Photo Delivery Time": false,
    "Photographs Quality": false,
    "Way of Conduct/Dealing": false,
    Costing: false,
    "Albums Quality": false,
    "Overall Experience": false,
  });

  const [q4, setq4] = useState({
    "Social Media": false,
    Weddingwire: false,
    "Referrals - Friends & Families": false,
    Wedmegood: false,
    Google: false,
    "Other Websites": false,
  });

  const [q4textbox, setq4textbox] = useState("");

  const [q5, setq5] = useState("");
  const [q5textbox, setq5textbox] = useState("");

  const [q6, setq6] = useState("");
  const [q6textbox, setq6textbox] = useState("");

  const [q7, setq7] = useState("");
  const [q7textbox, setq7textbox] = useState("");

  function handlechange(q, setq, val) {
    setq(val);
  }
  function handlechangecheckbox(setq, option) {
    setq((prevstate) => {
      var newstate = prevstate;
      newstate[option] = !newstate[option];
      // console.log(newstate);
      return newstate;
    });
  }
  return (
    <div className="">
      <p className="topText">Help us Improve!</p>
      <img src={Image} alt="-" className="img"></img>
      <div className="bg"></div>
      <p className="bgText">
        To help us improve our service, we would appreciate your feedback on our
        range of photographies.
      </p>
      {/* q1------------------------------------------------------> */}
      <p className="q1">
        1. Do you feel like the Images/Services were worth what you paid?
      </p>
      <div
        className=""
        onChange={(e) => {
          handlechange(q1, setq1, e.target.value);
        }}
      >
        <input
          type="radio"
          onChange={(e) => {
            handlechange(q1, setq1, e.target.value);
            console.log(q1);
          }}
          className="q1-a1"
          name="q1"
          value="Yes"
        />
        <p className="q1-a1-text">Yes</p>

        <input
          type="radio"
          className="q1-a2"
          name="q1"
          value="No"
          onChange={(e) => {
            handlechange(q1, setq1, e.target.value);
            console.log(q1);
          }}
        />
        <p className="q1-a2-text">No</p>
      </div>
      <p className="q1-text2">If No, What was your Expected Cost(INR)?</p>
      <input
        type="text"
        className="costBox"
        name="q1expected"
        value={q1expected}
        onChange={(e) => {
          setq1expected(e.target.value);
        }}
      />
      {/* q2 --------------------------------------------------->*/}
      <div className="">
        <p className="q2">
          2. What you LIKED the most at Kumarsphoto? (multiple choice)
        </p>
        {[
          "Approach (Introductory call)",
          "Photographs Quality",
          "Way of Conduct/Dealing",
          "Costing",
          "Albums Quality",
          "Overall Experience",
        ].map((option, i) => {
          const q = "q2";
          var c = `q2-a${i + 1}`;

          return (
            <div key={i}>
              <input
                type="checkbox"
                name={option}
                value={option}
                onChange={(e) => {
                  handlechangecheckbox(setq2, option);
                  console.log(q2);
                }}
                className={c}
              />
              <p className={`${c}-text`}>{option}</p>
            </div>
          );
        })}
      </div>

      {/* q3 start--------------------------------------------------->*/}

      <div className="">
        <p className="q3">
          3. What you DIDN'T LIKE about the Kumarsphoto?(multiple choice)
        </p>
        {[
          "Photo Delivery Time",
          "Photographs Quality",
          "Way of Conduct/Dealing",
          "Costing",
          "Albums Quality",
          "Overall Experience",
        ].map((option, i) => {
          const q = "q3";
          var c = `q3-a${i + 1}`;
          return (
            <div key={i}>
              <input
                type="checkbox"
                name={option}
                value={option}
                onChange={(e) => {
                  handlechangecheckbox(setq3, option);
                }}
                className={c}
              />
              <p className={`${c}-text`}>{option}</p>
            </div>
          );
        })}
      </div>

      {/* q3 end--------------------------------------------------->*/}

      {/* q4 start--------------------------------------------------->*/}

      <div className="">
        <p className="q4">
          4. Which mediums you were searching for Photographers?(multiple
          choice)
        </p>
        {[
          "Social Media",
          "Weddingwire",
          "Referrals - Friends & Families",
          "Wedmegood",
          "Google",
          "Other Websites",
        ].map((option, i) => {
          const q = "q4";
          var c = `q4-a${i + 1}`;
          return (
            <div key={i}>
              <input
                type="checkbox"
                name={option}
                value={option}
                onChange={(e) => {
                  handlechangecheckbox(setq4, option);
                }}
                className={c}
              />
              <p className={`${c}-text`}>{option}</p>
            </div>
          );
        })}
      </div>

      <p className="q4-text2">Please Name the website/referrals?</p>
      <input
        type="text"
        name="q4-textbox"
        className="q4-textbox"
        value={q4textbox}
        onChange={(e) => {
          setq4textbox(e.target.value);
          console.log(q4textbox);
        }}
      />
      {/* q4 end--------------------------------------------------->*/}

      {/* q5 start--------------------------------------------------->*/}
      <p className="q5">
        5. Level of Comfort during the shoot with Photographers?(single choice)
      </p>
      <div
        className=""
        onChange={(e) => {
          handlechange(q5, setq5, e.target.value);
        }}
      >
        <input
          type="radio"
          onChange={(e) => {
            handlechange(q5, setq5, e.target.value);
            console.log(q5);
          }}
          className="q5-a1"
          name="q5"
          value="Satisfactory"
        />
        <p className="q5-a1-text">Satisfactory</p>

        <input
          type="radio"
          className="q5-a2"
          name="q5"
          value="Uncomfortable"
          onChange={(e) => {
            handlechange(q5, setq5, e.target.value);
            console.log(q5);
          }}
        />
        <p className="q5-a2-text">Uncomfortable</p>
      </div>

      <p className="q5-text2">
        If Uncomfortable, Can you please share your experience and help us
        improve?
      </p>
      <input
        type="text"
        className="q5-textbox"
        name="q5textbox"
        value={q5textbox}
        onChange={(e) => {
          setq5textbox(e.target.value);
        }}
      />
      {/* q5 end--------------------------------------------------->*/}

      {/* q6 start--------------------------------------------------->*/}
      <p className="q6">
        6. Would you recommend us to your friends and families?
      </p>
      <div
        className=""
        onChange={(e) => {
          setq6(e.target.value);
        }}
      >
        <input
          type="radio"
          onChange={(e) => {
            console.log(e.target.value);
            setq6(e.target.value);
            console.log(q6);
          }}
          className="q6-a1"
          name="q6"
          value="Yes"
        />
        <p className="q6-a1-text">Yes</p>

        <input
          type="radio"
          className="q6-a2"
          name="q6"
          value="No"
          onChange={(e) => {
            console.log(e.target.value);
            setq6(e.target.value);
            console.log(q6);
          }}
        />
        <p className="q6-a2-text">No</p>
      </div>
      <p className="q6-text2">If No, Why not ?</p>
      <input
        type="text"
        className="q6-textbox"
        name="q6textbox"
        value={q6textbox}
        onChange={(e) => {
          setq6textbox(e.target.value);
          console.log(q6textbox);
        }}
      />
      {/* q6 end--------------------------------------------------->*/}

      {/* q7 start--------------------------------------------------->*/}
      <p className="q7">
        7. Is there anything that you would like to share for us to improve?
      </p>

      <textarea
        className="q7-textbox"
        name="q7textbox"
        value={q7textbox}
        onChange={(e) => {
          setq7textbox(e.target.value);
          console.log(q7textbox);
        }}
      />
      {/* q7 end--------------------------------------------------->*/}

      {/* submit button------------------------------------------->*/}

      <button type="sumbit" className="submit-button">
        <p className="button-text">Submit</p>
      </button>

      {/* submit button------------------------------------------->*/}

      {/* bottom image */}
      <img src={Imgurl} className="bottom-img" alt="btm" />
    </div>
  );
}

export default Body;

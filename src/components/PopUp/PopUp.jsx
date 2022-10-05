import React from "react";
import "./popup.css";

window.addEventListener("load", function () {
  setTimeout(function () {
    document.querySelector(".popup").style.display = "grid";
    document.getElementById("blur").classList.add("active");
    document.getElementById("blur2").classList.add("active2");
    document.getElementById("blur3").classList.add("active3");
    document.getElementById("blur4").classList.add("active4");
  }, 2000);
});

window.onload = function () {
  document.getElementById("close").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "none";
    // document.querySelector('.popup').style.display = 'grid';
    document.getElementById("blur").classList.remove("active");
    document.getElementById("blur2").classList.remove("active2");
    document.getElementById("blur3").classList.remove("active3");
    document.getElementById("blur4").classList.remove("active4");
  });
};
const PopUp = () => {
  return (
    <div className="popup">
      <button id="close">&times;</button>
      <h1 className="popup_heading">Looking for filter</h1>
      <div className="column">
        <div className="leftCard1">
          <h1>Gender</h1>
          <div className="gender">
            <div className="container">
              <input type="radio" name="gender" id="male" value="Male" />
              <label htmlFor="male">&nbsp;Male</label>
            </div>
            <div className="container">
              <input type="radio" name="gender" id="female" value="Female" />
              <label htmlFor="female">&nbsp;Female</label>
            </div>
            <div className="container">
              <input type="radio" name="gender" id="female" value="Female" />
              <label htmlFor="female">&nbsp;Other</label>
            </div>
          </div>
        </div>
        <div className="rightCard1">
          <h1>Age</h1>
          <div className="gender">
            <div className="container">
              <input type="radio" name="age" id="male" value="Male" />
              <label htmlFor="male">&nbsp;&lt;&nbsp;18</label>
            </div>
            <div className="container">
              <input type="radio" name="age" id="female" value="Female" />
              <label htmlFor="female">&nbsp;&gt;&nbsp;18</label>
            </div>
            <div className="container">
              <input type="radio" name="age" id="female" value="Female" />
              <label htmlFor="female">&nbsp;&gt;70</label>
            </div>
          </div>
        </div>
        <div className="leftCard1" id="leftborder">
          <h1>Caste</h1>
          <div className="gender">
            <div className="container">
              <input type="radio" name="caste" id="male" value="Male" />
              <label htmlFor="male">&nbsp;GENERAL</label>
            </div>
            <div className="container">
              <input type="radio" name="caste" id="female" value="Female" />
              <label htmlFor="female">&nbsp;OBC</label>
            </div>
            <div className="container">
              <input type="radio" name="caste" id="female" value="Female" />
              <label htmlFor="female">&nbsp;SC/ST</label>
            </div>
            {/* <div className="container">
                <input type="radio" name='caste' id="female" value="Female" /><label htmlFor="female">&nbsp;OTHER</label>
              </div> */}
          </div>
        </div>
        <div className="rightCard1">
          <h1>Income</h1>
          <div className="gender">
            <div className="container">
              <input type="radio" name="age" id="male" value="Male" />
              <label htmlFor="male">&nbsp;&lt;&nbsp; 6 Lakh</label>
            </div>
            <div className="container">
              <input type="radio" name="age" id="female" value="Female" />
              <label htmlFor="female">&nbsp;&gt;&nbsp; 6 Lakh</label>
            </div>
            <div className="container">
              <input type="radio" name="age" id="female" value="Female" />
              <label htmlFor="female">&nbsp; OTHER</label>
            </div>
          </div>
        </div>

        {/* <div className="card" id='card2'>
            <div className="container3">
              <h1>Caste</h1>
              <div className="container2">
                <input type="radio" name="caste" id="obc" /><label htmlFor="obc">&nbsp;GENRAL </label><br />
                <input type="radio" name="caste" id="obc" /><label htmlFor="obc">&nbsp;OBC </label><br />
                <input type="radio" name="caste" id="obc" /><label htmlFor="obc">&nbsp;SC/ST </label><br />
                <input type="radio" name="caste" id="obc" /><label htmlFor="obc">&nbsp;OTHER </label><br />
              </div>
            </div>
          </div>
          <div className="card" id='card3'>
            <div className="container3">
              <h1>Income</h1>
              <div className="container2">
                <input type="radio" name="income" id="obc" /><label htmlFor="obc">&nbsp;&lt; 6 Lakh </label><br />
                <input type="radio" name="income" id="obc" /><label htmlFor="obc">&nbsp;&gt; 6 Lakh </label><br />
                <input type="radio" name="income" id="obc" /><label htmlFor="obc">&nbsp;&lt; 2 Lakh </label><br />
                <input type="radio" name="income" id="obc" /><label htmlFor="obc">&nbsp;OTHER </label><br />
              </div>
            </div>
          </div> */}
      </div>
      <button className="final_submit">Submit</button>
    </div>
  );
};

export default PopUp;

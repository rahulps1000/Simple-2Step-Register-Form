import { TextBox, Button, SelectBox } from "../input";
import "./style.css";
import { useState } from "react";
import { statesInIndia, districtsInState } from "../../constants";

function Register() {
  const [page, setPage] = useState(1);
  const [state, setState] = useState(null);

  return (
    <div className="container">
      <div className="form">
        <div className="title">Registration</div>
        <div className="steps">
          <div
            className={`step one ${page === 1 && "active"}`}
            onClick={() => setPage(1)}
          >
            1
          </div>
          <div className="line" />
          <div
            className={`step two ${page === 2 && "active"}`}
            onClick={() => setPage(2)}
          >
            2
          </div>
          <div className="circle"></div>
        </div>
        <div className="pages">
          <div className={`page one ${page === 1 && "active"}`}>
            <TextBox type="text" placeholder="Username" />
            <TextBox type="email" placeholder="Email" />
            <TextBox type="phone" placeholder="Mobile Number" />
            <TextBox type="password" placeholder="Password" />
            <Button onClick={() => setPage(2)}>Continue</Button>
          </div>
          <div className={`page two ${page === 2 && "active"}`}>
            <TextBox type="text" placeholder="Address" />
            <SelectBox
              onChange={(e) => setState(e.target.value)}
              placeholder={"State"}
            >
              {statesInIndia.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </SelectBox>
            <SelectBox placeholder={"District"} errorText="errText">
              {state &&
                districtsInState[state].map((district, index) => (
                  <option key={index} value={district}>
                    {district}
                  </option>
                ))}
            </SelectBox>
            <TextBox type="number" placeholder="Pin Code" errorText="errText" />
            <Button onClick={() => {}}>Register</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

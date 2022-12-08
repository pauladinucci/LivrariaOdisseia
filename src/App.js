import './style.css'
import { useState } from "react";

function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">

            <FormGroup className="position-relative">
              <Label for="exampleEmail">
                Valid input
    </Label>
              <Input valid />
              <FormFeedback
                tooltip
                valid
              >
                Sweet! that name is available
    </FormFeedback>
              <FormText>
                Example help text that remains unchanged.
    </FormText>
            </FormGroup>
            <FormGroup className="position-relative">
              <Label for="examplePassword">
                Invalid input
    </Label>
              <Input invalid />
              <FormFeedback tooltip>
                Oh noes! that name is already taken
    </FormFeedback>
              <FormText>
                Example help text that remains unchanged.
    </FormText>
            </FormGroup>

            <span className="login-form-title">Bem Vindo!</span>

            <span className="login-form-title">

            </span>

            <div className="wrap-input">
              <input
                className="input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input
                className="input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Login</button>
            </div>

            <div className="text-center">
              <span className="txt1">Não possui conta?</span>
              <a className="txt2" href="#">Criar conta.</a>
            </div>


          </form>
        </div>
      </div>
    </div>

  );
}

export default App;

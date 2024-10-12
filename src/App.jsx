import Loginpage from "./components/Loginpage"
import Logo from "./components/pages/Logo"
const App = () => {
  return (
    <div>
      <Logo/>
      <div className="login-container">
        <h2 className="form-title">Login</h2>
        <form action="#" className="login-form">
          <Loginpage type="text" placeholder="UserId" icon="person"/>
          <Loginpage type="password" placeholder="Password" icon="lock"/>
          <button className="login-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App
 
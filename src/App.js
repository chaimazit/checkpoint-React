import container from 'react-bootstrap/container';
import form from 'react-bootstrap/form';
import Button from 'react-bootstrap/Button';
import './App.css';

function App() {
  return (
  
      <container id="main-container" classeName="d-grid h-100">
        <form id="sign-in-form" classeName="text center w-100">
          <img
          classeName="nb-4'bootstrap-logo"
          src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
          alt="bootstrap 5" />
          <h1 className="fs-4 fw-normal" > please sign in</h1>
          <form.Group controlId="sign-in-email-address">
            <form.control type="email" size="lg" placeholder="Email address" autocomplete="username" className="position-relative" />
            </form.Group>
          <form.Group controlId="sign-in-password" class="nb-3">
            <form.control type="password" size="lg" placeholder="Passord" autocomplete="current-password" className="position-relative" />
            </form.Group>
            <form.Group  controlId="Remember me" className="d-flex justify-content-center nb-4">
            <form.Check label="Remember me" />
            </form.Group>
            <div className="d-grid">
          <Button variant="primary" size="lg"> sign in</Button>
            </div>

        </form>
      </container>
  
  );
}

export default App;

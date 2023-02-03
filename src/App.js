import Container from 'react-bootstrap/container';
import Form from 'react-bootstrap/form';
import Button from 'react-bootstrap/Button';
import './App.css';

function App() {
  return (
  
      <Container id="main-container" classeName="d-grid h-100">
        <Form id="sign-in-form" classeName="text center w-100">
          <img
          classeName="nb-4 bootstrap-logo"
          src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
          alt="bootstrap 5" />
          <h1 className="fs-4 fw-normal" > please sign in</h1>
          <Form.Group controlId="sign-in-email-address">
            <Form.Control type="email" size="lg" placeholder="Email address" autocomplete="username" className="position-relative" />
            </Form.Group>
          <Form.Group controlId="sign-in-password" class="nb-3">
            <Form.Control type="password" size="lg" placeholder="Password" autocomplete="current-password" className="position-relative" />
            </Form.Group>
            <Form.Group  controlId="Remember me" className="d-flex justify-content-center nb-4">
            <Form.Check Label="Remember me" />
            </Form.Group>
            <div className="d-grid">
          <Button variant="primary" size="lg"> sign in</Button>
            </div>

        </Form>
      </Container>
  
  );
}

export default App;

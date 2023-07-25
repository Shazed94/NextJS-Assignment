import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IncomePage from "./Pages/IncomePage";
import ExpensePage from "./Pages/ExpensePage";
import "./App.css";
import { Container, Nav, Navbar } from "react-bootstrap";

function App() {
  return (
    <Router>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/income">Income</Nav.Link>
              <Nav.Link href="/expenses">Expenses</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        {/* Routes */}
        <Route path="/income" element={<IncomePage />} />
        <Route path="/expenses" element={<ExpensePage />} />
      </Routes>
    </Router>
  );
}
export default App;

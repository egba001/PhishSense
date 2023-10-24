import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/Landing';
import About from './pages/About';
import Signup from './pages/SignUp';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Dashboard/subroutes/Home';
import Verify from './pages/Dashboard/subroutes/Verify';
import Safety from './pages/Dashboard/subroutes/Safety';

function App() {

  return (
    <>
      <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<Home />} />
              <Route path="verify-link" element={<Verify />} />
              <Route path="safety-tips" element={<Safety />} />
            </Route>
          </Routes>
      </Router>
    </>
  )
}

export default App

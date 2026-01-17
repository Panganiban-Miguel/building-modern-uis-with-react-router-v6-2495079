import { Routes, Route } from "react-router-dom";
// import logo from "../assets/red30-tech-logo.png";
import Home from "./Home";
import About from "./About";
import Categories from "./Categories";
import Category from "./Category";
import Session from "./Session";
import Register from "./Register";
import Confirmation from "./Confirmation";
import Header from "./Header";

function App() {
  return (
    <div className="app">
      {/* <header className="container">
        <img
          className="logo"
          src={logo}
          alt="Red30 Tech logo"
          title="Red30 Tech | Home"
        />

        <nav>
          <Link to="/">Home</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/about">About</Link>
        </nav>
      </header> */}
      
      <Header />
      
      <Routes>
        <Route path="/" element={<Home title='Welcome to Red30 Tech' />} />
        <Route path="about" element={<About />} />
        <Route path="categories" element={<Categories />}>
          <Route path=":catId" element={<Category />}>
            <Route path=":sessionId" element={<Session />} />
          </Route>
          <Route index element={<h3>Select a category from above</h3>} />
        </Route>
        <Route path="register" element={<Register />} />
        <Route path="confirmed" element={<Confirmation />} />
        <Route path="*" element={<h1 className="not-found">Page Not Found</h1>} />
      </Routes>

      <footer className="container">
        &copy;2022 | <a href="https://red30tech.com/">Red30 Tech</a>
      </footer>
    </div>
  );
}

export default App;

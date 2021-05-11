import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>HOME page</div>
      <div>
        <Link to="/Game">Start a newGame</Link>
      </div>
    </div>
  );
};

export default Home;

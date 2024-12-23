import NavBar from "./NavBar";
import pr from "../assets/pr.png";
const Home = () => {
  return (
    <>
      <div className="home-info">
        <h1>Fake Online Shopping Store </h1>

        <img src={pr}  />

        <p>
          This is a fake online shopping store designed by Mohamed Hamdy using
          React + vite
        </p>
      </div>
    </>
  );
};
export default Home;

import "./bal-animate.css";
import ballImg from "../../assets/ball.png";

export const BallAnimate = () => {
  return (
    <div className="b-container">
      <div className="b-center">
        <img className="b-img" src={ballImg} />
        <div className="b-text-container">
          <h3 className="b-text-copy">hello world!</h3>
          <h3 className="b-text">hello world!</h3>
        </div>
      </div>
    </div>
  );
};

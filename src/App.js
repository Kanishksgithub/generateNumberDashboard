
import Spline from '@splinetool/react-spline';
import styled from "styled-components";
import Logo from './images/IMG_1353.PNG';

export default function App() {
  return (
    <Wrapper>
      <Spline scene="https://prod.spline.design/oiQGBOW5bZpo4KCY/scene.splinecode" />
      <Content>
        <Menu>
          <li><LogoImage src={Logo} alt="Logo"/></li>
          <li><a href="/">Home</a></li>
          <li><a href="https://generatenumber-production.up.railway.app/">Download</a></li>
          <li><a href="https://web.telegram.org/k/">Telegram</a></li>
        </Menu>
        <div>
          <h1>Baazi Maar <br/> Soar High with Thrilling Bets!</h1>
          <p>Elevate your travel and betting experiences to new heights with Aviator. Whether you're exploring the world, placing thrilling bets, or simply enjoying the journey, Aviator is your ultimate companion. With a user-friendly interface, real-time updates, and exclusive features, Aviator ensures a seamless and exciting experience every time. Download Aviator now and embark on a journey filled with unforgettable moments!</p>
          <button onClick={() => window.location.href = "https://generatenumber-production.up.railway.app/"}>
            Download App<i class="bi bi-android2"></i>
          </button>
        </div>
      </Content>
      <DownMenu>
          <li><i className="bi bi-people"></i><h2>4.8 out of 5 user rating</h2></li>
          <li><h2>1+ Crore total Users</h2></li>
          <li><h2>500+ crore price won</h2></li>
        </DownMenu>
        <PlayText><h1>Easy Steps to Play</h1></PlayText>
        <DownMenu>
  <div className="card">
    <i className="bi bi-people"></i>
    <h3 href="#">Place a bet When Rocket is not moving or gap time</h3>
  </div>
  <div className="card">
    <i className="bi bi-people"></i>
    <h3 href="#">Withdraw a bet whenever you want when rocket is moving upwards</h3>
  </div>
  <div className="card">
    <i className="bi bi-people"></i>
    <h3>Win A Reward or earn a Cash</h3>
  </div>
</DownMenu>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: 'Spline Sans', sans-serif;
  font-size: 16px;
  color: white;
  width: 100%;
  height: 100vh;
  position: relative;
  overflow-x: hidden;
  background-color:black;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  position: absolute;
  top: 30px;
  left: 0;
  right: 0;
  padding: 0 30px;

  h1 {
    font-family: 'Spline Sans Mono', monospace;
    margin: 0;
  }

  p {
    font-weight: normal;
    line-height: 150%;
    max-width: 380px;
    margin-bottom: 10px;
    margin-left: 0;
  }

  button {
    background: rgba(0, 0, 0, 0.2);
    border: 0px;
    font-size: 16px;
    padding: 12px 30px;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: white;
    max-width: 200px;
    backdrop-filter: blur(20px);
    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;
    transition: 1s;

    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const LogoImage = styled.img`
  width: 50px;
`;
const PlayText = styled.div`
  position: relative;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: black;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Menu = styled.ul`
  display: flex;
  gap: 30px;
  align-items: center;
  padding: 0;
  margin: 0;

  li {
    list-style: none;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: white;
    padding: 8px 20px;
    border: 1px solid rgba(255, 255, 255, 0);
    transition: 1s;
    border-radius: 14px;

    &:hover {
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
  }
`;
const DownMenu = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 40px;
  background-color: black;
  color: white;
  padding:10px;

  .card {
    flex: 1;
    max-width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #1D1C1C; /* Set the background color to dark gray */
  }

  i.bi-people {
    margin-bottom: 10px;
    color: white;
  }

  a {
    text-decoration: none;
    color: white;
    padding: 8px 20px;
    border: 1px solid rgba(255, 255, 255, 0);
    transition: 1s;
    border-radius: 14px;

    &:hover {
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
  }
`;
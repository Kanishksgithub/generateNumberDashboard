
import Spline from '@splinetool/react-spline';
import styled from "styled-components"
export default function App() {
  return (
    <Wrapper>
    <Spline className="spline" scene="https://prod.spline.design/w4GjqPmQOiCPHNFs/scene.splinecode" />
    <Content><h1>Avaitor App <br/> Soar High with Thrilling Bets!</h1>
    <p>Ready to elevate your betting experience to new heights? Aviator Bet brings you a cutting-edge platform that combines innovation, excitement, and responsible gaming.</p></Content>
    </Wrapper>
  );
}
const Wrapper=styled.div`
font-family:'Spline Sans',sans-serif;
font-size:16px;
color:white;
position:relative;
.spline:{
  position:absolute;
  margin:0;
  top:0;
  right:0
}

`
const Content=styled.div`

position:absolute;
top:30px;
display:flex;
flex-direction:column;
gap:80px;
h1{
  font-family:'Spline Sans Mono',monospace;
}
p{
  font-weight:normal;
  line-height:150%;
  max-width:380px;
  margin-bottom:10px;
  margin-left:10px;
}
h1,p:{
  margin:0 30px 0 100px;
}
`;

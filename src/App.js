import styled from 'styled-components';
import ellipses from './Group 1.png';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top:0;
  left:0;
  background: center / cover no-repeat url('https://source.unsplash.com/featured/?bright');
  backdrop-filter: brightness(3);
`;

const Glass = styled.div`
  padding: 2rem 4rem;
  background: rgba(255, 255, 255, 0.2);

  border-radius: 32px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(12px);
  color: rgba(5, 10, 10, 0.7);
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);

`;

const GlassShadow = styled.div`
  /* position: absolute; */
  /* bottom: -20px; */
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  width: 50%;
  height: 50%;
  background: black;
`;

function App() {
  return (
    <Container>
      <Glass>
        <h1>Glassmorphic design</h1>
        <p>Testing this out and seeing how we can adjust a glass card like this one. ✌️</p>
        <p>👉 <a href="https://uxdesign.cc/glassmorphism-in-user-interfaces-1f39bb1308c9">This medium post</a> helped to inform.</p>
        <img src={ellipses} style={{ opacity:0.7, display:'block', marginLeft: 'auto' }} alt="ellipses logo" />
        </Glass>
        <div style={{ position: 'relative'}}>
        <GlassShadow />
        </div>
    </Container>
  );
}

export default App;

import styled from 'styled-components';

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
`;

const Glass = styled.div`
  padding: 2rem 4rem;
  background: rgba(255, 255, 255, 0.4);
  width: 50%;
  height: 50%;
  border-radius: 32px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(12px);
`;

function App() {
  return (
    <Container>
      <Glass>
        <h1>Glassmorphic design</h1>
        <p>Testing this out and seeing how we can adjust a glass card like this one.</p>
        <p><a href="https://uxdesign.cc/glassmorphism-in-user-interfaces-1f39bb1308c9">This medium post</a> helped to inform.</p>
      </Glass>
    </Container>
  );
}

export default App;

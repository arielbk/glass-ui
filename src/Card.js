import {
  Button, ChakraProvider, Link, Slider,
  SliderFilledTrack,
  SliderThumb, SliderTrack
} from '@chakra-ui/react';
import { motion, useDragControls } from 'framer-motion';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import ellipses from './Group 1.png';
import theme from './theme';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top:0;
  left:0;
  background: center / cover no-repeat url('https://source.unsplash.com/featured/?bright,${props => props.random}');
  /* background: white; */
  backdrop-filter: brightness(3);
`;

const Glass = styled(motion.div)`
  padding: 2rem 4rem;
  /* background: rgba(255, 255, 255, ${({depth}) => depth / 20}); */
  /* background: linear-gradient(-40deg, rgba(255, 255, 255, 0.2), rgba(255,255,255,0.4)); */
  background: linear-gradient(-40deg, rgba(255, 255, 255, ${props => Math.floor(props.depth / 60 * 100) / 100}), rgba(255,255,255,${props => Math.floor(props.depth / 30 * 1.8 * 100) / 100}));

  border-radius: 32px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(12px);
  color: rgba(5, 10, 10, 0.7);

  h1 {
    font-size: 42px;
    font-weight: 600;
    margin-bottom: 24px;
  }
  p {
    margin-bottom: 2rem;
  }
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

function Card() {
  const dragControls = useDragControls();
  const [depth, setDepth] = useState(4);
  const [random, setRandom] = useState(Math.floor(Math.random() * 10**5));
  const constraintsRef = useRef();

  const newRandom = () => setRandom(Math.floor(Math.random() * 10**5));

  return (
    <ChakraProvider theme={theme}>
      <Container random={random} ref={constraintsRef}>
        <Glass depth={depth} animate={{
          boxShadow: `0 ${depth * 2.5}px ${depth * 10}px rgba(0,0,0,${depth / 60})`,
          // background: `rgba(255, 255, 255, ${depth / 30})`
          }}
          drag
          onDrag={e => console.log(e)}
          dragControls={dragControls}
  dragConstraints={constraintsRef}
  >
          <h1>Glassmorphism</h1>
          <p>Testing this out and seeing how we can adjust a glass card like this one.</p>
          {/* <p><Link href={`https://uxdesign.cc/glassmorphism-in-user-interfaces-1f39bb1308c9`}>This medium post was helpful</Link> 👾👽🚀</p> */}
          <Slider aria-label="depth slider" value={depth} onChange={(val, ...rest) => {setDepth(val); console.log(rest)}} my={8} max={30} min={0}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Button variant={'outlined'} onClick={newRandom}>new background</Button>
          <img src={ellipses} style={{ display:'block', marginLeft: 'auto' }} alt="ellipses logo" />
          </Glass>
          <div style={{ position: 'relative'}}>
          <GlassShadow depth={depth} />
          </div>
      </Container>
    </ChakraProvider>
  )
      }

export default Card;

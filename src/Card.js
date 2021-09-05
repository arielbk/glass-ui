import {
  Button, FormControl, FormLabel, Heading, Slider,
  SliderFilledTrack,
  SliderThumb, SliderTrack, Switch, Text,
  useColorMode
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
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
  background: center / cover no-repeat url('https://source.unsplash.com/featured/?abstract,${props => props.random}');
  backdrop-filter: brightness(3);
`;

const Glass = styled(motion.div)`
  padding: 2rem 4rem;
  background: linear-gradient(-40deg, rgba(${props => props.isDark ? '0,0,0,' : '255, 255, 255,'} ${props => Math.floor(props.depth / 60 * 100) / 100}), rgba(${props => props.isDark ? '0,0,0,' : '255, 255, 255,'}${props => Math.floor(props.depth / 60 * 1.9 * 100) / 100}));
  border-radius: 32px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(12px);

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
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  width: 50%;
  height: 50%;
  background: black;
`;

function Card() {
  const {colorMode, toggleColorMode} = useColorMode();
  const [depth, setDepth] = useState(21);
  const [random, setRandom] = useState(Math.floor(Math.random() * 10**5));
  const [isDark, setIsDark] = useState(false);
  const constraintsRef = useRef();

  const newRandom = () => setRandom(Math.floor(Math.random() * 10**5));

  const toggleDark = () =>{
    if (toggleColorMode) toggleColorMode();
  }

  useEffect(() => {
    setIsDark(colorMode === 'dark')
  }, [colorMode])

  return (
      <Container random={random} ref={constraintsRef}>
        <Glass
          isDark={isDark}
          depth={depth}
          animate={{boxShadow: `0 ${depth * 2.5}px ${depth * 10}px rgba(0,0,0,${depth / 60})`}}
          drag
          dragConstraints={constraintsRef}
        >
          <Heading mb={4}>Piece of Glass</Heading>
          <Text>Testing this out and seeing how we can adjust a glass card like this one.</Text>
          <FormControl mx="auto" mb={8} display="flex" justifyContent="center" alignItems="center">
          <Slider aria-label="depth slider" value={depth} onChange={(val) => setDepth(val)} my={8} max={42} min={0}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
            <FormLabel htmlFor="dark-glass" mb="0" ml={8}>
              Dark
            </FormLabel>
            <Switch isChecked={isDark} onChange={toggleDark} id="dark-glass" />
          </FormControl>
          <Button position="absolute" bottom="2rem" left="4rem" variant='solid' onClick={newRandom}>new background</Button>
          <img src={ellipses} style={{ display:'block', marginLeft: 'auto' }} alt="ellipses logo" />
          </Glass>
          <div style={{ position: 'relative'}}>
          <GlassShadow depth={depth} />
          </div>
      </Container>
  )
      }

export default Card;

import React from 'react';
import styled from 'styled-components'
import { colors, constants } from '../constants';
const logo = require('../images/logo.png')

const Container = styled.div`
    height: ${constants.headingHeight}px;
    width: 100%;
    background: ${colors.red};
    display: flex;
    align-items: center;
    padding: 0px ${constants.padding}px;
    width: calc(100% - ${constants.padding * 2}px);
`

const HeadingText = styled.div`
    height: 100%;
    font-size: 25px;
    color: white;
    display: flex;
    align-items: center;
    margin-left: ${constants.padding}px;

`


const Heading = () => {
  return (
    <Container>
        <HeadingText>
        Ultimate Champion Padel
        </HeadingText>
    </Container>
  );
}

export default Heading;

import React from 'react';
import styled from 'styled-components'
import { colors, constants } from '../constants';
const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Heading = styled.div`
    padding-top: ${constants.padding * 4}px;
    font-size: 40px;
`

const InputContainer = styled.div`
    width: calc(100% - ${constants.padding * 4}px);
    max-width: 350px;
    margin-top: 40px;
`

const InputHeading = styled.div`
    font-size: 14px;
`

const Input = styled.input`
    width: 100%;
    height: 40px;
    border: 1px solid ${colors.black};
    border-radius: 10px;
    margin-top: ${constants.padding * 2}px;
    background: transparent;
`

const DriverCard = styled.div`
    width: 100%;
    height: 70px;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    &:hover {
        background: white;
    }
`

const DriverPhoto = styled.img`
    width: 60px;
    height: 60px;
    margin-left: 5px;
`



const Register = () => {
  return (
    <Container>
        <Heading>
            Register
        </Heading>

        <InputContainer>
            <InputHeading>
                Full name
            </InputHeading>
            <Input />

            <InputHeading style={{marginTop: '20px'}}>
                Select a Driver
            </InputHeading>
            <div style={{height: constants.padding}}></div>
      

        </InputContainer>
            
    </Container>
  );
}

export default Register;

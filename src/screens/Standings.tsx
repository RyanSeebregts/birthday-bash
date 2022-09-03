import React from 'react';
import styled from 'styled-components'
import { constants } from '../constants';

const Container = styled.div`
    width: 100%;
    max-height: calc(100% - ${constants.headingHeight}px);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow-y: auto;
`

const Content = styled.div`
    width: 100%;
`

const Heading = styled.div`
    padding: ${constants.padding * 2}px;
    font-size: 30px;
`

const GridHeading = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding-left: ${constants.padding * 2}px;
    padding-right: ${constants.padding * 2}px;
    margin-top: 0px;
    height: 40px;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
`

const GridHeadingElement = styled.div`
    font-size: 15px;
    color: grey;
`


const TeamCard = styled.div`
    display: flex;
    width: 100%;
    box-sizing: border-box;
    padding: ${constants.padding * 2}px;
    padding-bottom: ${constants.padding * 2}px;
`

const TeamName = styled.div`
    font-size: 10px;    
    padding-top: ${constants.padding * 2}px

`

interface OwnProps {
    teams: any[]
}


const Standings = (props: OwnProps) => {
  return (
    <Container>
            <Heading>
                Rolling
            </Heading>
            <GridHeading>
                <GridHeadingElement
                >
                    Teams
                </GridHeadingElement>

                <GridHeadingElement
                >
                    Points
                </GridHeadingElement>

            </GridHeading>
            {
                props.teams.map((prop: any, key: number) => 
                    <TeamCard style={{background: key % 2 === 0 ? 'lightgrey' : 'transparent'}}>
                        <div style={{flex: 1}}>
                            {prop.name}
                            <TeamName>
                                {prop.members}
                            </TeamName>
                        </div>

                        <div style={{marginLeft: constants.padding * 2,display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            {prop.points}
                        </div>
                    </TeamCard>
                )
            }
    </Container>
  );
}

export default Standings;

import React, { useEffect, useState } from 'react';
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


const StandingsFinale = (props: OwnProps) => {
    const [newTeams, setNewTeam ] = useState<any[]>([])
    useEffect(() => {
        const newItems = props.teams.reduce(function (rows, key, index) { 
            return (index % 2 == 0 ? rows.push([key]) 
              : rows[rows.length-1].push(key)) && rows;
          }, []);
        
          setNewTeam(newItems)
    }, [props.teams])

    const getPlace = (key: number) => {
        const number = ((key + 1)*2) - 1
        let after = 'th'
        if(number === 1)
            after = 'st'
        if(number === 2) 
            after = 'nd'
        if(number === 3)
            after = 'rd'

        return `${number}${after}`
    }
    return (
        <Container>
                <Heading>
                    Finale
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
                    newTeams.map((prop: any, key: number) => 
                        <div style={{width: '100%', marginTop: key === 0 ? constants.padding * 2 : '0px'}}>
                            {
                                key !== 0 &&
                                    <div style={{height: '1px', width: '100%', display: 'flex', justifyContent: 'center', marginTop: constants.padding * 2, marginBottom: constants.padding * 4}}>
                                        <div style={{height: '1px', width: `calc(100% - ${constants.padding * 4}px)`, background: 'lightgrey'}} />
                                    </div>
                            }
                            <div style={{paddingLeft: constants.padding * 2, marginBottom: constants.padding}}>
                                Battle for {getPlace(key)}
                                {

                                }
                            </div>
                            
                            <TeamCard style={{background: 'lightgrey'}}>
                                <div style={{flex: 1}}>
                                    {prop[0].name}
                                    <TeamName>
                                        {prop[0].members}
                                    </TeamName>
                                </div>

                                <div style={{marginLeft: constants.padding * 2,display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                    {prop[0].finalePoints}
                                </div>
                            </TeamCard>

                            <TeamCard style={{background: 'transparent'}}>
                                <div style={{flex: 1}}>
                                    {prop[1].name}
                                    <TeamName>
                                        {prop[1].members}
                                    </TeamName>
                                </div>

                                <div style={{marginLeft: constants.padding * 2,display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                    {prop[1].finalePoints}
                                </div>
                            </TeamCard>

                        </div>
                        
                    )
                }
        </Container>
    );
}

export default StandingsFinale;

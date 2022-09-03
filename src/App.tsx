import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Standings from './screens/Standings';
import { colors } from './constants';
import Heading from './components/Heading';
import Register from './screens/Register';
import db from './firebase'
import { ref, get, child, onValue} from 'firebase/database'
import StandingsFinale from './screens/StandingsFinale';

const Container = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background: ${colors.backgroundLight}
`

const App = () => {

  const [teams, setTeams] = useState<any[]>([])
  const [finale, setFinale] = useState<boolean>(false)

  useEffect(() => {
    console.log('hello')
    const dbRef = ref(db, '/')
    onValue(dbRef, (snap) => {
      const data = snap.val()
      console.log(data)
      const teams = [].concat(data.teams)
      teams.sort( compare );

      setTeams(teams)
      if(data.mode === 'rolling') {
        setFinale(false)
      }
      else  
        setFinale(true)

    })
    
  }, [])

  function compare( a:any, b:any ) {
    if ( a.points > b.points ){
      return -1;
    }
    if ( a.points < b.points ){
      return 1;
    }
    return 0;
  }
  
  return (
    <Container>
      <Heading />

      <BrowserRouter>
          <Routes>
            {
              finale ?
                <Route path="*" element={<StandingsFinale teams={teams} />} />
                :
                <Route path="*" element={<Standings teams={teams} />} />

            }
          </Routes>
        </BrowserRouter>

    </Container>
  );
}

export default App;

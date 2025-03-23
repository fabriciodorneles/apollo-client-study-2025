import { useState } from 'react'
import './App.css'
import { DisplayLocations } from './components/DisplayLocations'
import { ApolloProvider } from '@apollo/client'
import { DogsClient, LocationsClient } from './services/clients'
import { DisplayDogs } from './components/DisplayDogs'

function App() {
  const [apolloComponent, setApolloComponent] = useState('locations')

  return (
    <div style={{
      width: '800px', 
      margin: '0 auto',
      overflow: 'hidden' // Prevents outer layout shift
    }}>
      <h1>Apollo Study</h1>
      <div>
        <button onClick={() => setApolloComponent('locations')}>Locations</button>
        <button onClick={() => setApolloComponent('dogs')}>Dogs</button>
      </div>
      <div style={{ display: 'flex', flexDirection:'column', alignItems: 'center'}}>
        <div style={{ 
          width: '700px', 
          maxHeight: '650px',
          overflowY: 'scroll', // Always show scrollbar
        }}>
          <ApolloProvider client={LocationsClient}>
            {apolloComponent === 'locations' && <DisplayLocations />}
          </ApolloProvider>

        </div>
        <div style={{ 
          width: '700px', 
          maxHeight: '650px',
          marginRight: '-17px' // Compensate for scrollbar width
        }}>
          <ApolloProvider client={DogsClient}>
            {apolloComponent === 'dogs' && (<DisplayDogs />)}
          </ApolloProvider>
        </div>
      </div>
    </div>
  )
}

export default App

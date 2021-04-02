import { useEffect, useState } from 'react';

import { getCurrentLatLng } from './services/geolocation';

import './App.css';
import Map from './components/Map/Map';

function App () {

  const [appData, setAppData] = useState({
    lat: null,
    lng: null,
  })

  const getAppData = async () => {
    // browser location 
    const {lat, lng} = await getCurrentLatLng();
    // weather data
    // set component state to that data
    setAppData({lat, lng});
  }

  useEffect(() => {
    getAppData();
  }, [])

  return (
    <div className='App'>
      <Map lat={appData.lat} lng={appData.lng}/>
      <header className='App-header'>REACT WEATHER</header>
    </div>
  );
}

export default App;

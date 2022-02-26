import React from 'react'
import GoogleMap from './GoogleMap';
import AutoComplete from './AutoComplete';

const MainContent = () => {
  return (
    <div>
        MainContent
        <AutoComplete id="start_dest"/>
        <AutoComplete id = "end_dest"/>
        <GoogleMap/>
    </div>
  )
}

export default MainContent
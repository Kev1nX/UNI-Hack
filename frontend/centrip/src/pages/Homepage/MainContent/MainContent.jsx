import React from 'react'
import GoogleMap from './GoogleMap';
import AutoComplete from './AutoComplete';
import '../../../MainContent.css';

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
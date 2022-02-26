import React from 'react'
import GoogleMap from './GoogleMap';
import AutoComplete from './AutoComplete';
import '../../../MainContent.css';

const MainContent = () => {
  return (
    <div>
        <div class="row" style="background-color:#aaa;">
          <div class = "column-left">
            <h1>Enter start point and destination</h1>
            <p>Start point</p>
            <div class ="forms">
              <AutoComplete id="start_dest"/>
            </div>
            <p>Destination</p>
            <div class ="forms">
              <AutoComplete id = "end_dest"/>
            </div>
          </div>
          <div class = "column-right">
            <GoogleMap/>
          </div>
        </div>

    </div>
  )
}

export default MainContent
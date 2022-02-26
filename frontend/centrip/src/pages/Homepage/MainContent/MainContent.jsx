import React from 'react'
import GoogleMap from './GoogleMap';
import { observer } from 'mobx-react';
import AutoComplete from './AutoComplete';

const MainContent = observer(({ store }) => {

    const handleStatus = () => {
        if (store.startStatus) {
            store.setStartFalse();
        } else {
            store.setStartTrue();
        }
        if (store.endStatus) {
            store.setEndFalse();
        } else {
            store.setEndTrue();
        }

        
        console.log(store.startStatus);
    }

  return (
    <div>
        <button onClick={() => handleStatus()}>btn</button>
        <AutoComplete id="start_dest"/>
        <AutoComplete id = "end_dest"/>
        {store.endStatus ? <GoogleMap store={store}/> : <GoogleMap store={store}/>}
        
    </div>
  )
});

export default MainContent
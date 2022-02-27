import React, { useState } from 'react';
import { observer } from 'mobx-react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

const AutoComplete = observer(( {store, type} ) => {

    const handleChange = (value) => {
        setValue(value);
        store.getPlaceCoord(value.value.place_id, type);
        console.log("changed res", value);
        

    }

    const [value, setValue] = useState(null);

  return (
    <div style={{width: "20vw"}}>
    <GooglePlacesAutocomplete
      selectProps={{
        value,
        onChange: handleChange,
      }}
    />
  </div>
  )
});

export default AutoComplete
import React, { useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

const AutoComplete = () => {

    const handleChange = (value) => {
        setValue(value);
        console.log("changed", value);
    }

    const [value, setValue] = useState(null);

  return (
    <div style={{width: "30vw"}}>
    <GooglePlacesAutocomplete
      selectProps={{
        value,
        onChange: handleChange,
      }}
    />
  </div>
  )
}

export default AutoComplete
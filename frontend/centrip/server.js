const path = require('path');
const cors = require('cors');
const express = require('express');
const app = express(); // create express app
app.use(cors());
const axios = require('axios');

const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.get("/home/:place_id", async (req, res) => {
  

    axios({
        method: 'get',
        
        url: `https://maps.googleapis.com/maps/api/place/details/json?place_id=${req.params.place_id}&key=AIzaSyDOfn3Dk7W6Xrae1nPf7fNITiyJvtUQCXQ`,
    })
    .then((response) => {
        console.log(response.data);
        console.log("geegee", response.data.result.geometry.location.lat);

        const str = [{
            id: "tester",
            lat: response.data.result.geometry.location.lat,
            long: response.data.result.geometry.location.lng,
            }];
            res.end(JSON.stringify(str));
        // this.setPostsTags(response.data);
    })
    .catch((e) => {
        console.log(e);
    })


    
})

app.listen(process.env.PORT || 4000, () => {
  console.log('server started');
});

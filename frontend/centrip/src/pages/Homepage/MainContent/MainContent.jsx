import React, { useState, useEffect } from 'react'
import GoogleMap from './GoogleMap';
import { observer } from 'mobx-react';
import AutoComplete from './AutoComplete';
import Circle from '../../../ImageAssets/circle.png';
import Pinb from '../../../ImageAssets/pinb.png';
import './MainContentCss.css';

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

    const handleButtonOption = (option) => {
        // handleButtonOption("loading");
        // handleButtonOption(option);
        if (option == "cost") {
            console.log("changed coord");
            store.setRenderRoute(true);
            store.setStartCoor(store.startLong - 0.01, store.startLat - 0.01);
        } else if (option == "time") {
            store.setRenderRoute(true);
            store.setStartCoor(store.startLong + 0.01, store.startLat + 0.01);
        }
        store.setSelectedOption(option);
        console.log("selectedOption: ", option);
    }

    if (store.selectedOption == "none") {
        return (
            <div className="main-content-root">
                {/* <button onClick={() => handleStatus()}>btn</button> */}
        
                <div className="main-content-container">
                    <div className="main-content-input">
                        <h1 style={{textAlign: "center", fontSize: "20px", marginTop: "8vh"}}>Enter start point and destination</h1>   
                        <div className="input-style">
                            <img src={Circle} style={{height: "23px", width: "23px"}}/>
                            <AutoComplete id="start_dest"/>
                        </div>             
                        <div className="input-style">
                            <img src={Pinb} style={{height: "23px", width: "23px"}}/>
                            <AutoComplete id = "end_dest"/>
                        </div>
                        <div className="option-root">
                            <button onClick={() => {handleButtonOption("cost")}}>Cost</button>
                            <button onClick={() => handleButtonOption("time")}>Time</button>
                            <button onClick={() => handleButtonOption("loading")}>Efficient</button>
                        </div>          
                    </div>
                    <GoogleMap store={store}/>
                </div>
                
            </div>
            )
    } 
    else if (store.selectedOption == "cost") {
        return(
            <div className="main-content-root">
                {/* <button onClick={() => handleStatus()}>btn</button> */}
                <p>{store.selectedOption}</p>
                <p>cost here</p>
                <div className="main-content-container">
                    <div className="main-content-input">
                        <h1 style={{textAlign: "center", fontSize: "20px", marginTop: "8vh"}}>Enter start point and destination</h1>   
                        <div className="input-style">
                            <img src={Circle} style={{height: "23px", width: "23px"}}/>
                            <AutoComplete id="start_dest"/>
                        </div>             
                        <div className="input-style">
                            <img src={Pinb} style={{height: "23px", width: "23px"}}/>
                            <AutoComplete id = "end_dest"/>
                        </div>
                        <div className="option-root">
                            <button onClick={() => handleButtonOption("cost")}>Cost</button>
                            <button onClick={() => handleButtonOption("time")}>Time</button>
                            <button onClick={() => handleButtonOption("loading")}>Efficient</button>
                        </div>          
                    </div>
                    <GoogleMap store={store}/>
                </div>
                
            </div>
        );
        
    } else if (store.selectedOption == "time") {
        return(
            <div className="main-content-root">
                {/* <button onClick={() => handleStatus()}>btn</button> */}
                <p>{store.selectedOption}</p>
                <p>time here</p>
                <div className="main-content-container">
                    <div className="main-content-input">
                        <h1 style={{textAlign: "center", fontSize: "20px", marginTop: "8vh"}}>Enter start point and destination</h1>   
                        <div className="input-style">
                            <img src={Circle} style={{height: "23px", width: "23px"}}/>
                            <AutoComplete id="start_dest"/>
                        </div>             
                        <div className="input-style">
                            <img src={Pinb} style={{height: "23px", width: "23px"}}/>
                            <AutoComplete id = "end_dest"/>
                        </div>
                        <div className="option-root">
                            <button onClick={() => handleButtonOption("cost")}>Cost</button>
                            <button onClick={() => handleButtonOption("time")}>Time</button>
                            <button onClick={() => handleButtonOption("loading")}>Efficient</button>
                        </div>          
                    </div>
                    <GoogleMap store={store}/>
                </div>
                
            </div>
        );
        
    } else if (store.selectedOption == "efficient") {
        return(
            <div className="main-content-root">
                {/* <button onClick={() => handleStatus()}>btn</button> */}
                <p>{store.selectedOption}</p>
                <p>efficient here</p>
                <div className="main-content-container">
                    <div className="main-content-input">
                        <h1 style={{textAlign: "center", fontSize: "20px", marginTop: "8vh"}}>Enter start point and destination</h1>   
                        <div className="input-style">
                            <img src={Circle} style={{height: "23px", width: "23px"}}/>
                            <AutoComplete id="start_dest"/>
                        </div>             
                        <div className="input-style">
                            <img src={Pinb} style={{height: "23px", width: "23px"}}/>
                            <AutoComplete id = "end_dest"/>
                        </div>
                        <div className="option-root">
                            <button onClick={() => handleButtonOption("cost")}>Cost</button>
                            <button onClick={() => handleButtonOption("time")}>Time</button>
                            <button onClick={() => handleButtonOption("loading")}>Efficient</button>
                        </div>          
                    </div>
                    <GoogleMap store={store}/>
                </div>
                
            </div>
        );
        
    } else {
        return(
            <div>
                <p>Loading</p>
                <button onClick={() => handleButtonOption("cost")}>Cost</button>
                <button onClick={() => handleButtonOption("time")}>Time</button>
                <button onClick={() => handleButtonOption("loading")}>Efficient</button>
            </div>
            
        )
    }

    

  
});

export default MainContent
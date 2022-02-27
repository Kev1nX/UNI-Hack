import React,{Component} from 'react';
import { observer } from 'mobx-react';
import MainContent from './MainContent/MainContent';
import './HomepageCss.css';

const Homepage = observer(({ store }) => {
  const mystyle = {
    width: "100vw",
    height: "450px",
    objectFit: "cover",
  };
  return (
    <div>
      <div className='header'>
        <h1>Centrip</h1>
        <p>Saving you money wherever you go</p>
      </div>

        <img style= {mystyle}src ={require("../../ImageAssets/background.jpg")}></img>
        <div className='Banner'>
          <h2>Plan your trip</h2>
          <p>We will calculate the cheapest and most efficient route and transport options tos save your money and time</p>
        </div>


        <div className = 'mainContentBox'>
          <MainContent store={store}/>
        </div>

        
    </div>
  )
});

export default Homepage
import React from 'react';
import { observer } from 'mobx-react';
import MainContent from './MainContent/MainContent';

const Homepage = observer(({ store }) => {
  return (
    <div>
        <p>Homepage</p>
        <MainContent store={store}/>
    </div>
  )
});

export default Homepage
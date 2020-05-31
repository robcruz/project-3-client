import React from 'react';
import Collapsible from 'react-collapsible';

const InfoPage = () => (
  <>
    <h1>Info</h1>
    <h2>How Does SwapMe Work?</h2>

    <Collapsible className="infoheader" trigger=" Step 1: click on me ">
      <p>This is the collapsible content. It can be any element or React component you like.</p>
      <p>It can even be another Collapsible component. Check out the next section!</p>
    </Collapsible>

    <br></br>

    <Collapsible className="infoheader" trigger=" Step 2: click on me " bac>
      <p>This is the collapsible content. It can be any element or React component you like.</p>
      <p>It can even be another Collapsible component. Check out the next section!</p>
    </Collapsible>

    <br></br>

    <Collapsible className="infoheader" trigger=" Step 3:  click on me ">
      <p>This is the collapsible content. It can be any element or React component you like.</p>
      <p>It can even be another Collapsible component. Check out the next section!</p>
    </Collapsible>


  </>
);




export default InfoPage;

import React from 'react';
import Collapsible from 'react-collapsible';

const InfoPage = () => (
  <>
    <h1>About Our App</h1>
    <p> Swap Me Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
    <hr></hr>
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

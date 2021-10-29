import React, { useEffect, useState } from 'react';

function CvsTest() {
  // define the hook inside the component which I imported at the top.
  useEffect(() => {
    // defining the api url as a variable with the useEffect hook
    const url = 'https://jsonplaceholder.typicode.com/users';

    // now making my Asyncronous fetch request
  });

  return (
    <div>
      <h1>
        This where I will attempt the CVS test and do it enough times that I
        will never fail this test again...if I'm ever asked it anyway
      </h1>
    </div>
  );
}

export default CvsTest;

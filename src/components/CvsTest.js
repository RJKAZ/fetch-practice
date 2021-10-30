import React, { useEffect, useState } from 'react';

function CvsTest() {
  // defining the state

  const [user, userList] = useState('');

  // define the hook inside the component which I imported at the top.
  useEffect(() => {
    // defining the api url as a variable with the useEffect hook
    const url = 'https://jsonplaceholder.typicode.com/users';

    // now making my Asyncronous fetch request
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        userList(json.name.user);
      } catch (error) {
        console.log('error', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>
        This where I will attempt the CVS test and do it enough times that I
        will never fail this test again...if I'm ever asked it anyway
      </h1>
      <p>{user}</p>
    </div>
  );
}

export default CvsTest;

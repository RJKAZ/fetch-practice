import React, { useState, useEffect } from 'react';

function CvsTest() {
  const [data, setData] = useState([]);

  const apiGet = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };

  useEffect(() => {
    apiGet();
  }, []);

  return (
    <div>
      <h1>API Practice for the CVS Test</h1>
      <button onClick={apiGet}> Lets Fetch The API</button>

      <div>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.id}, {item.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CvsTest;

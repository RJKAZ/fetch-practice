import React, { useState, useEffect } from 'react';

function Random() {
  const [data, setData] = useState([]);

  const apiGet = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
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
      <h1>API Practice</h1>
      <button onClick={apiGet}> Lets Fetch the API</button>
      {/* <pre>{JSON.stringify(data, null, 2)};</pre> */}

      <div>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.userId},{item.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Random;

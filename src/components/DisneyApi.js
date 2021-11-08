import React, { useState, useEffect } from 'react';

function DisneyApi() {
  const [data, setData] = useState([]);

  const apiGet = () => {
    fetch('https://api.disneyapi.dev/characters')
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
      <h1>Fetching Data from a Free Disney API </h1>
    </div>
  );
}

export default DisneyApi;

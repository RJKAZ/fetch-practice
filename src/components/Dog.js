import React, { useState, useEffect } from 'react';

function Dog() {
  let [dogImage, setDogImage] = useState(null);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random/3')
      .then((response) => response.json())
      .then((data) => setDogImage(data.message));
  }, []);
  return (
    <div className='App'>
      {dogImage &&
        dogImage.map((dog) => (
          <img width={'200px'} height={'200px'} src={dog}></img>
        ))}
    </div>
  );
}

export default Dog;

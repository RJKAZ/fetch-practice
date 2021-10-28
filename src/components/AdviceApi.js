import React, { useEffect, useState } from 'react';

function AdviceApi() {
  // defining the state

  const [advice, setAdvice] = useState('');

  //define the hook inside the component which was already imported at the top
  useEffect(() => {
    // defining the api url as a variable with the useEffect hook
    const url = 'https://api.adviceslip.com/advice';

    // async fetchData arrow function that uses a try/catch
    const fetchData = async () => {
      try {
        // creates a variable called response that will await the fetching to the url/api
        const response = await fetch(url);
        // creates a variable called jason to store the response from the fetch
        const json = await response.json();
        // console logging the json to ensure we get the data
        console.log(json);
        //we can also specify the data returned to the console.log
        console.log(json.slip.advice);
        // to clarify, it will return an object called slip, and within slip, we are targetting the key of advice
        // I'm keeping my console log, but we want to push that fetched data into the useState hook
        setAdvice(json.slip.advice);
        // if no data returned, return error
      } catch (error) {
        console.log('error', error);
      }
    };
    // the function call
    fetchData();
  }, []);

  return (
    <div className='wrapper'>
      <h1>Going to expariment with an advice API</h1>
      <p>
        Behold, a tiny bit of advice pulled from the API...refresh the page for
        new advice
      </p>
      <p className='advice'>{advice}</p>
    </div>
  );
}

export default AdviceApi;

/* steps in order since jumping around is common

1. In the default rfce template, import useEffect at the top of the page. 
2. define useEffect's template within the component, but above the render
3. The API URL we are going to use to pull data from is the advice api
4. We will define its url as a variable inside the useEffect hook 
5. then we will create an asynchronous function to fetch the data from the api
6. The steps for that code I have noted within its code block
7. We are console logging to ensure we get the data returned
8. Now that we have the data fromthe api, (the advice string) we will save it into the local state using the useState hook 
9. So now lets import useState at the top import 
10. and then lets define the useState
11. Within the fetch data function we will save the fetched data in the advice state
12. Now to display the advice, we will simply call the advice state in the return body


*/

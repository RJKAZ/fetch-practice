import React, { useEffect, useState } from 'react';

function Activity() {
  // defining the state
  const [activity, getActivity] = useState('');

  useEffect(() => {
    const url = 'https://www.boredapi.com/api/activity/';

    const fetchActivities = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        getActivity(json.activity);
      } catch (error) {
        console.log('error', error);
      }
    };
    fetchActivities();
  }, []);

  return (
    <div>
      <p>{activity}</p>
    </div>
  );
}

export default Activity;

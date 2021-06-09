import React, { useEffect, useState } from 'react';

const Content = () => {
  useEffect(() => {
    fetchToday();
  }, []);

  const [content, setContent] = useState({
    date: '',
    season: '',
    celebrations: '',
    currentDay: '',
  });

  function fetchToday() {
    fetch('http://calapi.inadiutorium.cz/api/v0/en/calendars/general-en/today').then((res) =>
      res.json().then((data) => {
        setContent({
          date: data.date,
          season: data.season,
          celebrations: data.celebrations[0].title,
          currentDay: data.weekday,
        });
      })
    );
  }

  return (
    <div className='content'>
      <p>
        <span>Date </span>
        {content.date}
      </p>
      <p>
        <span>Season </span>
        {content.season}
      </p>
      <p>
        <span>Celebrations </span>
        {content.celebrations}
      </p>
      <p>
        <span>Current Day </span>
        {content.currentDay}
      </p>
    </div>
  );
};

export default Content;

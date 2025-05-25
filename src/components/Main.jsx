import React from 'react';
import Invitation from './Invitation';
import Time from './Time';
import Location from './Location';
import Form from './Form';

function Main() {
  return (
    <main className="main-section">
      <Invitation />
      <Time />
      <Location />
      <Form />
    </main>
  );
}

export default Main;
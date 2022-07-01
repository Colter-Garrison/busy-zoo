import React from 'react';
import MyTable from './MyTable';
import FirstChart from './FirstChart';
import SecondChart from './SecondChart';

export default function admin() {
  return (
    <>
      <div>
        <MyTable />
      </div>
      <div>
        <FirstChart />
      </div>
      <div>
        <SecondChart />
      </div>
    </>
  );
}

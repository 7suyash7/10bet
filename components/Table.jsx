import React, { Fragment, useEffect, useState }from 'react';
import Header from './Header';
import AdminButton from './AdminButton';

const MyTable = () => {
  return (
    <Fragment>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Column 1</th>
            <th className="px-4 py-2">Column 2</th>
          </tr>
        </thead>
        <tbody className='font-bold'>
          <tr className='text-white font-bold uppercase'>
            <td className="border px-4 py-2 bg-red-600">Time</td>
            <td className="border px-4 py-2 bg-red-600">Result</td>
          </tr>
          <tr className='text-white bg-amber-600'>
            <td id='resultTime' className="border px-4 py-2">6:30PM</td>
            <td id='resultValue' className="border px-4 py-2">5</td>
          </tr>
          <tr className='text-white bg-green-600'>
            <td className="border px-4 py-2">6:50PM</td>
            <td className="border px-4 py-2">3</td>
          </tr> <tr className='text-white bg-yellow-700'>
            <td className="border px-4 py-2">7:01PM</td>
            <td className="border px-4 py-2">4</td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
}

export default MyTable;

import React from 'react';
import MaterialTable from 'material-table';
import { customers } from './data';

export default function MyTable() {
  return (
    <div style={{ maxWidth: '100%' }}>
      <MaterialTable
        columns={
          [
            { title: 'Such ID', field: 'id' },
            { title: 'First Name', field: 'first_name' },
            { title: 'Last Name', field: 'last_name' },
            { title: 'Email', field: 'email' },
            { title: 'Gender', field: 'gender' },
            { title: 'IP IP', field: 'ip_address' }
          ]
        }
        data={customers}
        title="My First Table"
        options={{
          headerStyle: {
            background: 'magenta',
            border: 'solid 3px orange'
          },
          rowStyle: {
            background: 'blue',
            border: 'orange'
          }
        }
        }
      />
    </div>
  );
}
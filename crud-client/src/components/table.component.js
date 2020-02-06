import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import httpService from '../services/http.service'

export default function TableComponent() {
  const professions = { 1: 'Carpenter', 2: 'Draw' };

  const [state, setState] = useState({
    columns: [
      { title: 'First Name', field: 'firstName' },
      { title: 'Last Name', field: 'lastName' },
      { title: 'Age', field: 'age', type: 'numeric', defaultSort: 'desc' },
      { title: 'Profession', field: 'profession', lookup: professions },
    ],
    data: []
  });

  useEffect(() => {
    httpService.Get('persons', '').then(data => {
      setState(rs => {
        return { ...rs, data };
      })
    })
  }, []);

  const onRowAdd = newData =>
    httpService.Post('data.json', newData).then(
      setState(prevState => {
        const data = [...prevState.data];
        data.push(newData);
        return { ...prevState, data };
      })
    ).catch(s => alert('error'))


  const onRowUpdate = (newData, oldData) =>
    httpService.Put('data.json', newData).then(res =>
      setState(prevState => {
        const data = [...prevState.data];
        data[data.indexOf(oldData)] = newData;
        return { ...prevState, data };
      })
    ).catch(s => alert('error'))

  const onRowDelete = oldData =>
    httpService.Delete('data.json', `?Id=${oldData.id}`).then(res=>
  setState(prevState => {
    const data = [...prevState.data];
    data.splice(data.indexOf(oldData), 1);
    return { ...prevState, data };
  })).catch(s => alert('error'))

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4caf50',
    },
    secondary: {
      main: '#ff9100',
    },
  },
});

return (
  <MuiThemeProvider theme={theme} >
    <MaterialTable
      title="Crud react mongo"
      options={{ exportButton: true }}
      columns={state.columns}
      data={state.data}
      editable={{ onRowAdd: onRowAdd, onRowUpdate: onRowUpdate, onRowDelete: onRowDelete }}
    />
  </MuiThemeProvider>
);
}

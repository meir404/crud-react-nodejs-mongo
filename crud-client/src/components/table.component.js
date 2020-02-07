import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import httpService from '../services/http.service'

export default function TableComponent() {
  // const professions = { 1: 'Carpenter', 2: 'Draw' };
  const [professions, setProfessions] = useState({})
  const controller = 'persons';
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
    httpService.Get('professions', '').then(data => {
      let professionsData = {};
      data.forEach(d => {
        professionsData[d._id] = d.text;
      })
      setState(prevState => {
        var columns = [...prevState.columns];
        columns.find(c => c.title === 'Profession').lookup = professionsData;
        return { ...prevState, columns };
      })
    })
    httpService.Get(controller, '').then(data => {
      setState(rs => {
        return { ...rs, data };
      })
    })
  }, []);

  const onRowAdd = newData =>
    httpService.Post(controller, newData).then(res =>
      setState(prevState => {
        const data = [...prevState.data];
        data.push(res[0]);
        return { ...prevState, data };
      })
    ).catch(s => alert('error'))


  const onRowUpdate = (newData, oldData) =>
    httpService.Put(controller, newData).then(res => {
      if (!res.ok) { alert('error'); return; }
      setState(prevState => {
        const data = [...prevState.data];
        data[data.indexOf(oldData)] = newData;
        return { ...prevState, data };
      })
    }
    ).catch(s => alert('error'))

  const onRowDelete = oldData =>
    httpService.Delete(controller, `?id=${oldData._id}`).then(res => {
      if (!res.ok) { alert('error'); return; }
      setState(prevState => {
        const data = [...prevState.data];
        data.splice(data.indexOf(oldData), 1);
        return { ...prevState, data };
      })

    }).catch(s => alert('error'))

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

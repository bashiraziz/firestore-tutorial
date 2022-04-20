import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import db from './firebase'
const columns = [
  { field: 'id', headerName: 'ID', width: 300 },
  { field: 'name', headerName: 'Name', width: 300 },
  { field: 'password', headerName: 'Password', width: 600 }
]

const DataGrids = () => {

  const [tableData, setTableData] = useState({})
  const [loading, setLoading] = useState([]);
  useEffect(() => {
  db.collection("customersData").onSnapshot((snapshot) => {
   setTableData(
    snapshot.docs.map((doc) => ({
    id: doc.id,
    data: doc.data(),
    }))
   );
   });
   setLoading(false);
  }, []);

  console.log(tableData)

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((data) => data.json())
  //     .then((data) => setTableData(data))

  // }, [])

  //console.log(tableData)

  if(loading) {
   return <h1> The data is loading</h1>
  }

  return (
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={tableData}
        columns={columns}
        //pageSize={12}
      />
    </div>
  )
}

export default DataGrids
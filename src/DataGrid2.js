import React, { useState, useEffect } from 'react'
//import { DataGrid } from '@mui/x-data-grid'
import db from './firebase'

const DataGrids2 = () => {

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
  db.collection("customersData").onSnapshot((snapshot) => {
   setTableData(
    snapshot.docs.map((doc) => ({
    id: doc.id,
    data: doc.data(),
    }))
   );
   });
   
  }, []);

  //console.log(tableData)
  

  return (
    
  <div className="App__DataDisplay">
		<table>
		<tr>
			<th>NAME</th>
			<th>PASSWORD</th>
			<th>Update</th>
			<th>Delete</th>
		</tr>

		{tableData?.map(({ id, data }) => (
			<tr key={id}>
			<td>{data.name}</td>
			<td>{data.password}</td>
			</tr>
		))}
		</table>
    
	</div>  
  )
}



export default DataGrids2
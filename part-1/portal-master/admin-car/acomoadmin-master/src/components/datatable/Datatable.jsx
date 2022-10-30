import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { UserColumns,userRows } from '../../datatable' ;
import {Link} from "react-router-dom";
import {useState} from "react";

const Datatable = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="users/test" style={{textDecoration:"none"}}>
            <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton"
             onClick={() => handleDelete(params.row.id)}
            >Delete</div>
          </div>
        );
      },
    },
  ];
  return (
    <div className='datatable'>
      <DataGrid
        rows={data}
        columns={UserColumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable

import "./table.scss"
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


const List = () => {
    const rows = [
        {
          id: 2,
          Requestor: "John Smith",
          date: "1 March",
          remarks: "No remarks",
          reason: "Collage purpose",
          onbehalf:"No",
          status: "Approved",
        },
        {
            id: 4,
            Requestor: "Prudhvi Raj",
            date: "3 March",
            remarks: "No remarks",
            reason: "Collage purpose",
            onbehalf:"No",
            status: "Pending",
        },
        {
            id: 8,
            Requestor: "Enola",
            date: "5 March",
            remarks: "No remarks",
            reason: "Collage purpose",
            onbehalf:"Yes",
            status: "Approved",
        },
        {
            id: 9,
            Requestor: "Rohit shrma",
            date: "1 March",
            remarks: "No remarks",
            reason: "Collage purpose",
            onbehalf:"No",
            status: "Approved",
        },
        {
            id: 12,
            Requestor: "Smith",
            date: "10 March",
            remarks: "No remarks",
            reason: "Collage purpose",
            onbehalf:"No",
            status: "Pending",
        },
      ];
  return (
    <TableContainer component={Paper} className="table">
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className="tableCell">ID</TableCell>
          <TableCell className="tableCell">Requestor</TableCell>
          <TableCell className="tableCell">Date</TableCell>
          <TableCell className="tableCell">Reason</TableCell>
          <TableCell className="tableCell">Remarks</TableCell>
          <TableCell className="tableCell">Onbehalf</TableCell>
          <TableCell className="tableCell">Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell className="tableCell">{row.id}</TableCell>
            <TableCell className="tableCell">
              <div className="cellWrapper">
                {row.Requestor}
              </div>
            </TableCell>
            <TableCell className="tableCell">{row.date}</TableCell>
            <TableCell className="tableCell">{row.remarks}</TableCell>
            <TableCell className="tableCell">{row.reason}</TableCell>
            <TableCell className="tableCell">{row.onbehalf}</TableCell>
            <TableCell className="tableCell">
              <span className={`status ${row.status}`}>{row.status}</span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);
}

export default List

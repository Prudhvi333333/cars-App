import { fontSize } from "@mui/system";

export const UserColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
        field:"email",
        headerName:"Email",
        width:230,
        
    },

    {
        field:"Reason",
        headerName:"Reason",
        width:230,
    },
    {
        field:"Remarks",
        headerName:"Remarks",
        width:130,
    },
    {
        field:"Self",
        headerName:"Self",
        width:130,
    },
    {
        field:"status",
        headerName:"Status",
        width:130,
        renderCell: (params)=>{
            return( <div className={`cellWithStatus ${params.row.status}` }>
                {params.row.status}
            </div>
            )    
        }

    },

];
//temporary data
export const userRows = [
    {
      id: 1,
      username: "Prudhvi Raj",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      
      email: "prudhviattuluri@gmail.com",
      Reason: "wksjibbvhbevr",
      Remarks: "No",
      Self:"Yes",
      status:"Approved"
    },
    {
        id: 2,
        username: "Rohit Sharma",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        
        email: "prudhviattuluri@gmail.com",
        Reason: "wksjibbvhbevr",
        Remarks: "No",
        Self:"No",
        status:"Pending"
    },
    {
        id: 3,
        username: "virat",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        
        email: "prudhviattuluri@gmail.com",
        Reason: "wksjibbvhbevr",
        Remarks: "No",
        Self:"Yes",
        status:"Approved"
    },
    {
        id: 4,
        username: "ashwin",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        
        email: "prudhviattuluri@gmail.com",
        Reason: "wksjibbvhbevr",
        Remarks: "No",
        Self:"Yes",
        status:"Pending"
    },
    {
        id: 5,
        username: "Dhoni",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    
        email: "prudhviattuluri@gmail.com",
        Reason: "wksjibbvhbevr",
        Remarks: "No",
        Self:"No",
        status:"Approved"
    },
    {
        id: 6,
        username: "jadeja",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        
        email: "prudhviattuluri@gmail.com",
        Reason: "wksjibbvhbevr",
        Remarks: "No",
        Self:"Yes",
        status:"Pending"
    },
    {
        id: 7,
        username: "kumar",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        
        email: "prudhviattuluri@gmail.com",
        Reason: "wksjibbvhbevr",
        Remarks: "No",
        Self:"No",
        status:"Approved"
    },
    {
        id: 8,
        username: "Bumarah",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        
        email: "prudhviattuluri@gmail.com",
        Reason: "wksjibbvhbevr",
        Remarks: "No",
        Self:"Yes",
        status:"Pending"
    },
    {
        id: 9,
        username: "shami",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        
        email: "prudhviattuluri@gmail.com",
        Reason: "wksjibbvhbevr",
        Remarks: "No",
        Self:"Yes",
        status:"Approved"
    },
    {
        id: 10,
        username: "rahane",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        
        email: "prudhviattuluri@gmail.com",
        Reason: "wksjibbvhbevr",
        Remarks: "No",
        Self:"No",
        status:"Approved"
    },
  ];
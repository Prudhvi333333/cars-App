export const UserColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "username",
      headerName: "Requestor Name",
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
        field:"dob",
        headerName:"Date of booking",
        width:230,
        
    },

    {
        field:"From",
        headerName:"From",
        width:230,
        
    },

    {
        field:"time",
        headerName:"Time",
        width:230,
        
    },

    {
        field:"To",
        headerName:"To",
        width:230,
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
      
      dob:"26-07-2022",
      time: "10::00AM",
      From: "SRM University",
      To: "Vijayawada",
      status:"Approved"
    },
    {
        id: 2,
        username: "Rohit Sharma",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", 
        dob:"26-07-2022",
        time: "10::00AM",
        From: "SRM University",
        To: "Vijayawada",
        status:"Pending"
    },
    {
        id: 3,
        username: "virat",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        
        dob:"13-9-2022",
        time:"10:00AM",
        From: "SRM University",
        To: "Vijayawada",
        status:"Approved"
    },
    {
        id: 4,
        username: "ashwin",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        
        dob:"14-9-2022",
        time:"10:00 AM",
        From: "SRM University",
        To: "Vijayawada",
        status:"Pending"
    },
    {
        id: 5,
        username: "Dhoni",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    
        dob:"16-9-2022",
        time:"10:00 AM",
        From: "SRM University",
        To: "Vijayawada",
        status:"Approved"
    },
    {
        id: 6,
        username: "jadeja",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        
        dob:"17-9-2022",
        time:"10:00 AM",
        From: "SRM University",
        To: "Vijayawada",
        status:"Pending"
    },
    {
        id: 7,
        username: "kumar",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        
        dob:"19-9-2022",
        time:"10:00 AM",
        From: "SRM University",
        To: "Vijayawada",
        status:"Approved"
    },
    {
        id: 8,
        username: "Bumarah",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        
        dob:"29-9-2022",
        time:"10:00 AM",
        From: "SRM University",
        To: "Vijayawada",
        status:"Pending"
    },
    {
        id: 9,
        username: "shami",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        
        dob:"22-9-2022",
        time:"10:00 AM",
        From: "SRM University",
        To: "Vijayawada",
        status:"Approved"
    },
    {
        id: 10,
        username: "rahane",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        
        dob:"25-9-2022",
        time:"10:00 AM",
        From: "SRM University",
        To: "Vijayawada",
        status:"Approved"
    },
  ];
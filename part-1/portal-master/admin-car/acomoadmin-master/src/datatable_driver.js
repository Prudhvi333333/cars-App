export const UserColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "username",
      headerName: "Driver Name",
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

    // {
    //     field:"doj",
    //     headerName:"Experience",
    //     width:230,
        
    // },

    {
        field:"From_time",
        headerName:"Driving Licesnce Number",
        width:230,
        
    },

    // {
    //     field:"remarks",
    //     headerName:"Remarks",
    //     width:230,
    // },

    // {
    //     field:"to",
    //     headerName:"Adhar card Number",
    //     width:230,
    // },
    
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
      
      doj:"worked as rtc bus driver for 2years",
      From_time: "2134 8821 1897",
      to: "1927 1254 2716",
      remarks:"nan",
      status:"Active"
    },
    {
        id: 2,
        username: "Rohit Sharma",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", 
        doj:"worked as rtc bus driver for 2years",
        From_time: "2134 8821 1897",
        to: "1927 1254 2716",
        remarks:"nan",
        status:"Inactive"
    },
    {
        id: 3,
        username: "virat",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        
        doj:"13-9-2022",
        From_time: "2134 8821 1897",
        to: "1927 1254 2716",
        remarks:"nan",
        status:"Active"
    },
    {
        id: 4,
        username: "ashwin",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        
        doj:"14-9-2022",
        From_time: "2134 8821 1897",
        to: "1927 1254 2716",
        remarks:"nan",
        status:"Inactive"
    },
    {
        id: 5,
        username: "Dhoni",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    
        doj:"16-9-2022",
        From_time: "2134 8821 1897",
        to: "1927 1254 2716",
        remarks:"nan",
        status:"Active"
    },
    {
        id: 6,
        username: "jadeja",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        
        doj:"17-9-2022",
        From_time: "2134 8821 1897",
        to: "1927 1254 2716",
        remarks:"nan",
        status:"Inactive"
    },
    {
        id: 7,
        username: "kumar",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        
        doj:"19-9-2022",
        From_time: "2134 8821 1897",
        to: "1927 1254 2716",
        remarks:"nan",
        status:"Active"
    },
    {
        id: 8,
        username: "Bumarah",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        
        doj:"29-9-2022",
        From_time: "2134 8821 1897",
        to: "1927 1254 2716",
        remarks:"nan",
        status:"Inactive"
    },
    {
        id: 9,
        username: "shami",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        
        doj:"22-9-2022",
        From_time: "2134 8821 1897",
        to: "1927 1254 2716",
        remarks:"nan",
        status:"Active"
    },
    {
        id: 10,
        username: "rahane",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        
        doj:"25-9-2022",
        From_time: "2134 8821 1897",
        to: "1927 1254 2716",
        remarks:"nan",
        status:"Inactive"
    },
  ];
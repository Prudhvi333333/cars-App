import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import "./new.scss"

const New = ({inputs,title}) => {
  return (
    <div className="new">
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.XzbnPcReFWub6Dn5ASpGdwHaHa%26pid%3DApi&f=1" al t="" />
          </div>
          <div className="right">
            <form>
            <div className="formInput" >
              <label htmlFor="file">
               Image: <DriveFolderUploadIcon className="icon"/>
                </label> 
              <input type="file"  id="file" style={{display:"none"}}/>
              </div>
              
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              
              <button>Submit</button>
              
              
                          
            </form>
          </div>
        </div>
      </div>

    </div>
  
  )
}

export default New
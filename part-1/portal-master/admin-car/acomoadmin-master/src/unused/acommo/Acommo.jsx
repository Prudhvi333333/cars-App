import { ViewSidebarSharp } from '@mui/icons-material'
import "./acommo.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widgets from '../../components/widgets/Widgets'
import Datatable from '../../components/datatable/Datatable'
const Acommo = () => {
  return (
    <div className='acommo'>
        <Sidebar/>
        <div className="acomoContainer">
            <Navbar/>
        <div className="widgets">
        <Widgets type="rooms"/>
        <Widgets type="rooms present"/>
        <Widgets type="ro"/>
      </div>
      <div className="listContainer">
        <div className="listTitle">
          UPDATED LIST
        </div>
        <Datatable/>
      </div>
        </div>
      
    </div>
  )
}

export default Acommo

import 'antd/dist/antd.css';
import '../App.css';
import {sidebardt} from './sidebardt';

function Sidebar() {
    return (
      <div className="Sidebar"><ul className="SidebarList">
            {sidebardt.map((val, key)=>{
              return (
                <li key={key} className="row" id={window.location.pathname === val.link ? "active" : ""}
                onClick={() =>{window.location.pathname = val.link}}>
                  {" "}
                  <div id="icon">{val.icon}</div>{" "}
                  <div id="title">{val.title}</div>
                </li>
              )
            })}</ul>
      </div>
    );
  }
  
  export default Sidebar;
  
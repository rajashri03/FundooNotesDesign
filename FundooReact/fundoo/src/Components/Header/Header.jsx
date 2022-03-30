import React from "react";
import './header.css'
import KeepImg from "../../assets/images/keep.png"
import Search from "../../assets/images/search.png"
import Refresh from "../../assets/images/refresh.png"
import List from "../../assets/images/llist.png"
import Setting from "../../assets/images/setting.png"
import dot from "../../assets/images/dot.png"
import menuImg from "../../assets/images/menu.png"
import { connect } from "react-redux";

function Header(props)
{
    const ClickMenu=()=>{
        props.listentomenuicon(true)
    }
    return(
        <div>
            <div class="header">
            <div class="icons">
            <img src={menuImg} onClick={ClickMenu}/>
                <img src={KeepImg} class="keepimg"/>
                <h1>{props.currentP}</h1>
            </div>
            <div class="search">
               <img src={Search} height="20px"/> 
               <input type="text" placeholder="Search"/>
            </div>
            <div class="icons">
                <img src={Refresh}/>
                <img src={List} className="hideimg"/>
                <img src={Setting} className="hideimg"/>
            </div>
            <div class="icons">
                <img src={dot} className="hideimg"/>
                <div class="profile" className="hideimg">r</div>
            </div>
        </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        currentP : state.navReducer.currentPage
    }
}

export default connect(mapStateToProps)(Header)
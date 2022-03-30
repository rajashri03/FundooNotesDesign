import React from "react";
import "./takenote.css"
import List from "../../assets/images/llist.png"
import Draw from "../../assets/images/draw.png"
import img from "../../assets/images/img.png"

function TakeNoteOne(props)
{
    const Clickme=()=>{
    props.listentotakenoteone()
    }
    return(
        <div onClick={Clickme} className="takenoteone">
            <div className="note">
                <input type="text" placeholder="Take a note..."/>
            </div>
            <div className="take">
                <img src={List} height="20px"/>
                <img src={Draw} height="20px"/>
                <img src={img} height="20px"/>
            </div>
        </div>
    )
}
export default TakeNoteOne
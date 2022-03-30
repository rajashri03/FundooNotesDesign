import React from "react";
import { addnote } from "../../Services/dataservice";
import "./takenotetwo.css"
import Pin from "../../assets/images/pin.png"
import remind from "../../assets/images/remind.png"
import add from "../../assets/images/add.png"
import color from "../../assets/images/color.png"
import img from "../../assets/images/img.png"
import undo from "../../assets/images/undo.png"
import archive from "../../assets/images/archive.png"
import more from "../../assets/images/more.png"
import SimplePopper from "../colorpopper/colorpopper";
function TakeNoteTwo(props)
{
    const [refresh,setRefresh]=React.useState(false);
    const [noteObj,setNoteObj]=React.useState({
        title:"",note:"",isArchive:false,color:"",isPin:false
    })
    const takeTitle=(e)=>
    {
        setNoteObj((prevState) => ({
            ...prevState,
            title: e.target.value
          }));
    }
    const takeDescription=(e)=>
    {
        setNoteObj((prevState) => ({
            ...prevState,
            note: e.target.value
          }));
    }
    const submit=()=>
    {
        setRefresh(!refresh)
        console.log(refresh);
        props.listentotakenotetwo(refresh)
        addnote(noteObj).then((response)=>{console.log(response)}).catch((error)=>{console.log(error)})
    }
    const takeArchive=()=>
    {
        setNoteObj((prevState) => ({
            ...prevState,
            isArchive:true
          }));
    }
    const takePin=()=>
    {
        setNoteObj((prevState) => ({
            ...prevState,
            isPin:true
          }));
    }
    const takeColor=(obj)=>
    {
        setNoteObj((prevState) => ({
            ...prevState,
            color: obj
          }));
    }

    return(
        <div className="takenotetwo" style={{background:noteObj.color}}>
            <div className="notesbody">
                <div className="note">
                    <input type="text" placeholder="Title" style={{background:noteObj.color}} onChange={takeTitle}/>
                </div>
                <div className="take">
                    <img src={Pin} height="20px" onClick={takePin}/>
                </div>
            </div>
            <div className="notesbody">
                <div className="note">
                    <input type="text" placeholder="Take a note..." style={{background:noteObj.color}}onChange={takeDescription}/>
                </div>
            </div>
            <div className="notesfooter">
                <div className="notesicons">
                    <SimplePopper action="add" takeColor={takeColor}/>
                    <img src={img}/>
                    <img src={archive} onClick={takeArchive}/>
                    <img src={more}/>
                </div>
                <div className="close" onClick={submit}>
                    close
                </div>
            </div>
           
        </div>
    )
}
export default TakeNoteTwo
import React from "react";
import './addednotes.css'
import { fetchnodes } from "../../Services/dataservice";
import { trashnote } from "../../Services/dataservice";
import { archivenote } from "../../Services/dataservice";
import { pinnote } from "../../Services/dataservice";
import { updatenote,deletenote } from "../../Services/dataservice";
import Pin from "../../assets/images/pin.png"
import remind from "../../assets/images/remind.png"
import add from "../../assets/images/add.png"
import color from "../../assets/images/color.png"
import img from "../../assets/images/img.png"
import axios from "axios";
import archive from "../../assets/images/archive.png";
import more from "../../assets/images/more.png";
import delet from "../../assets/images/delete.png";
import { useEffect } from "react";
import SimplePopper from "../colorpopper/colorpopper";
import { borderRadius, getThemeProps } from "@mui/system";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { connect } from "react-redux";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius:5,
    color:'black!important',
    boxShadow: 24,
    p: 4,
  };
function AddedNotes(props)
{
  const [open, setOpen] = React.useState(false);
  const [editnote,setEdit]=React.useState({});
  
  const handleOpen = (e,note) =>{
      setOpen(true)
     setEdit(note)
  }
  const takeEditTitle=(e)=>{
    setEdit((prevState) => ({
        ...prevState,
        title:e.target.value
      }));
  }
  const takeDescription=(e)=>{
    setEdit((prevState) => ({
        ...prevState,
        note:e.target.value
      }));
  }
  const handleClick=()=>{
    updatenote(editnote.noteID,editnote).then((response)=>{console.log(response); getNotes()}).catch((error)=>{console.log(error)})
  }
  const handleClose = () => setOpen(false);

  
    const [notesObj,setNotes]=React.useState([])
    const getNotes=(currentpage)=>
    {
        fetchnodes().then(res=>{
            console.log(res)
            let filter=[];
            if(currentpage==="Notes")
            {
                filter=res.data.filter(note=>note.isArchive===false&& note.isTrash===false)
            }
            else if(currentpage==="Archive")
            {
                filter=res.data.filter(note=>note.isArchive===true&& note.isTrash===false)
            }
            else if(currentpage==="Trash")
            {
                filter=res.data.filter(note=>note.isArchive===false&& note.isTrash===true)
            }
            setNotes(filter)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    useEffect(() =>{
        getNotes(props.page)
    },[props.refresh,props.page])

    
    const listentocolorpopper=()=>
     {
     getNotes()
    }
    const takeColor=(obj)=>
    {
        setNotes((prevState) => ({
            ...prevState,
            color: obj
          }));
    }
    const trashnotes=(e)=>
    {
        trashnote(e.target.id).then(res=>{
            console.log(res)
            getNotes()
        })
        .catch(err=>{
            console.log(err)
        })
    }
    const deletenotes=(e)=>
    {
        deletenote(e.target.id).then(res=>{
            console.log(res)
            getNotes()
        })
        .catch(err=>{
            console.log(err)
        })
    }
   
    const archivenotes=(e)=>
    {
        archivenote(e.target.id).then(res=>{
            console.log(res)
            getNotes()
        })
        .catch(err=>{
            console.log(err)
        })
    }
    const pinnotes=(e)=>
    {
        pinnote(e.target.id).then(res=>{
            console.log(res)
            getNotes()
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return(
    <div class="addednotes">
         {notesObj.map(notes=>(
            <div class="notes" style={{background:notes.color}}>
                <div class="notetitle">
                    <h5  onClick={(e)=>handleOpen(e,notes)}>{notes.title}</h5>
                    <div class="noteimg">
                         <img src={Pin} height="22px" id={notes.noteID} onClick={pinnotes}/>
                    </div>
                    
                </div>
                <div>
                    <div  onClick={(e)=>handleOpen(e,notes)}>{notes.note}</div>
                    <div class="icon_notes">
                        <SimplePopper action="update" note={notes.noteID} listentocolorpopper={listentocolorpopper} takeColor={takeColor}/>
                        <img src={archive} id={notes.noteID} onClick={archivenotes}/>
                        <img src={delet} id={notes.noteID} onClick={trashnotes}/>
                        <img src={delet} id={notes.noteID} onClick={deletenotes}/>
                        <img src={more}/>
                        
                    </div>
                </div>
            </div>
        ))}
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style} style={{backgroundColor:editnote.color}}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <div className="notesbody">
                <div className="note">
                    <input type="text" placeholder="Title"  style={{backgroundColor:editnote.color}} defaultValue={editnote.title} onChange={takeEditTitle}/>
                </div>
                <div className="take">
                    <img src={Pin} height="20px" />
                </div>
            </div>
            <div className="notesbody">
                <div className="note">
                    <input type="text" placeholder="Take a note..."  style={{backgroundColor:editnote.color}}defaultValue={editnote.note} onChange={takeDescription}/>
                </div>
            </div>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <div className="notesfooter">
                <div className="notesicons">
                    <img src={add}/>
                    <SimplePopper action="add"/>
                    <img src={img}/>
                    <img src={archive}/>
                    <img src={more}/>
                </div>
                <div className="close" onClick={handleClick}>
                    close
                </div>
            </div>
          </Typography>
        </Box>
      </Modal>
        </div>
    )
}
const mapStateToProps=(state)=>
{
    return {
        page:state.navReducer.currentPage
    }
}
export default connect(mapStateToProps)(AddedNotes)
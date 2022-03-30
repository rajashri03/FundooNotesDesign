import React from "react";
import Header from "../../Components/Header/Header";
import TakeNoteOne from "../../Components/Takenoteone/takenoteone";
import TakeNoteTwo from "../../Components/Takenotetwo/takenotetwo";
import AddedNotes from "../../Components/addednotes/addednotes"
import MiniDrawer from "../../Components/sidenav/sidenav";
function Dashboard()
{
    const [refresh,setRefresh]=React.useState(false);
    const [menuicon,setMenuicon]=React.useState(false);
    const [displayNote,setDisplayNote]=React.useState(true);
    
    const listentotakenoteone =()=>{
       setDisplayNote(false)
    }
    const listentotakenotetwo =async(data)=>{
        await setDisplayNote(true)
        await setRefresh(!refresh)
        console.log(refresh);
     }
     const listentomenuicon =(data)=>{
        setMenuicon(!menuicon)
     }


return(
    <div>

        <Header listentomenuicon={listentomenuicon}/>
        <MiniDrawer menuicon={menuicon}/>
        {displayNote ? <TakeNoteOne listentotakenoteone={listentotakenoteone}/> :<TakeNoteTwo listentotakenotetwo={listentotakenotetwo}/>}
        <AddedNotes refresh={refresh}/>

    </div>
)
}
export default Dashboard
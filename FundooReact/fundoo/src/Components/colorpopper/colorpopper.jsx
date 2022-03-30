import * as React from 'react';
import {colornote} from '../../Services/dataservice'
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import './colors.css'
import color from "../../assets/images/color.png"
import { fetchnodes } from "../../Services/dataservice";

export default function SimplePopper(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const colors= ['DodgerBlue','MediumSeaGreen','Tomato','SlateBlue','LightGray','orange']
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
const takeColor=(e)=>
{
  if(props.action==='add')
  {
    props.takeColor(e.target.id);
  }
  else if(props.action==='update')
  {
  console.log("Changed");
  colornote(props.note,e.target.id).then((response)=>{console.log(response); props.listentocolorpopper()}).catch((error)=>{console.log(error)})
  }
}
const user=()=>{
  fetchnodes().then(res=>{
    console.log(res)
})
.catch(err=>{
    console.log(err)
})
}
React.useEffect(() =>{
  user()
},[])



  return (
    <div>
      <img src={color} alt="color" onClick={handleClick}/>
      
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
       
            <div className='colors'>
            {colors.map(color => 
                <div style={{background:color,width:30,height:30,borderRadius:50}} id={color} onClick={takeColor}>
                </div>
            )}
            </div>
         
        </Box>
      </Popper>
    </div>
  );
}

import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteIcon from '@mui/icons-material/Delete';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import { connect } from 'react-redux';

const drawerWidth = 240;
const margin=60;

const openedMixin = (theme) => ({
  width: drawerWidth,
  marginTop:margin,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  marginTop:margin,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

 function MiniDrawer(props) {
  // const theme = useTheme();
  // const [open, setOpen] = React.useState(false);

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };
  const viewNote=()=>{
    //props.listenToSidebar("notes")
    props.takeClickOnNav("Clicked_On_Notes")
  }
  const viewArchive=()=>{
    //props.listenToSidebar("archive")
    props.takeClickOnNav("Clicked_On_Archive","Archive")
  }
  const viewTrash=()=>{
    //props.listenToSidebar("trash")
    props.takeClickOnNav("Clicked_On_Trash")
  }

  return (
    <Box sx={{ display: 'flex' }}>
      
           <Drawer variant="permanent" open={props.menuicon}>

        <List>
        <ListItem button onClick={viewNote}>
              <ListItemIcon>
                {<TipsAndUpdatesIcon />}
              </ListItemIcon>
              <ListItemText primary={"Notes"} />
            </ListItem>
            <ListItem button onClick={viewArchive}>
              <ListItemIcon>
                {<ArchiveIcon />}
              </ListItemIcon>
              <ListItemText primary={"Archive"} />
            </ListItem>
            <ListItem button onClick={viewTrash}>
              <ListItemIcon>
                {<DeleteIcon />}
              </ListItemIcon>
              <ListItemText primary={"Trash"} />
            </ListItem>
         
        </List>
      
      </Drawer>
      
    </Box>
  );
}
const mapDispatchToProps=dispatch=>{ 
  return{

     takeClickOnNav :  (actionType,data) =>{
      console.log(actionType) 
      dispatch({type :actionType,payload:data })
  }
  }
}



export default connect(null,mapDispatchToProps)(MiniDrawer)
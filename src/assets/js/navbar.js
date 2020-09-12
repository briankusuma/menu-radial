import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
//import { Button } from '@material-ui/core';
import List from '@material-ui/core/List';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import Fab from '@material-ui/core/Fab';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';



const useStyles = makeStyles({
  list: {
    width: 300,
  },

  '@global':{
    '.MuiPaper-root':{
      backgroundColor: '#ffdde1',
      },
      '.MuiButtonBase-root':{
        marginTop: 100,
        marginLeft: 100,
        position: 'fixed',
      },
      '.MuiSvgIcon-fontSizeLarge':{
        fontSize: 35,
      },
      '.MuiFab-root':{
        backgroundColor: '#ffdde1',
      },



    },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List id="list">
          <ul id="sideList" 
              onclick={toggleDrawer(side, false)}>
            <li href= "#" > About </li>
            <li href= "#" > Work </li>
            <li href= "#"> Contact </li>
            <li href= "#"> Home </li>
          </ul>
          <br/>
          <ul onclick={toggleDrawer(side, false)}>
            
            <li id="socialmedia"><InstagramIcon href= "#" fontSize='large'/></li>
            <li id="socialmedia"><YouTubeIcon href= "#" fontSize='large'/></li>
            <li id="socialmedia"><FacebookIcon href= "#" fontSize='large'/></li>
            <li id="socialmedia"><TwitterIcon href= "#" fontSize='large'/></li>
          </ul>

      </List>
    </div>
  );

  

  return (
    <div>
      
      <Fab 
      className="Fab"
      onClick={toggleDrawer('left', true)}>
        <MenuRoundedIcon
        fontSize='large' />
      </Fab>      
      <Drawer
        open={state.left} 
        transitionDuration={1000}
        onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}
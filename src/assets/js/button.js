import React from 'react'

const style = {
  sidenav : {
    height: "100%",
    width: "0", //merubah nilai ini untuk onclick
    position: "fixed",
    zIndex: 1,
    top: 0,
    left: 0,
    backgroundColor: "#111",
    overflowX: "hidden",
    transition: "0.5s",
    paddingTop: "60px",
    },
  
    alfa : {
    padding: "8px 8px 8px 32px",
    textDecoration: "none",
    fontSize: "25px",
    color: "#818181",
    display: "block",
    transition: "0.3s",
    },
  
    closebtn : {
      position: "absolute",
      top: 0,
      right: "25px",
      fontSize: "36px",
      marginLeft: "50px",
    },
}


export default function Button() {
    const [completed, setCompleted] = React.useState({sideNav :{width : "0"}});
    const mySidenav = React.useRef(null);
    React.useEffect(() => {
      function click() {
        setCompleted({sideNav :{width : "250px"}} )
        
      }
      return () => {
          
      };
    }, [mySidenav]);
  
    const click = () => {setCompleted(completed={width : "250px"}};
    //const closeNav = () => {setCompleted(completed = {width : "0"}};

    return (
      <div>
      <div id="mySidenav" class= "sideNav" style = {style.sidenav}>
  <a style={style.alfa, style.closebtn} href="javascript:void(0)" class="closebtn" onclick={() => setCompleted (completed = {width : "0"})} >&times;</a>
  <a style={style.alfa} href="#">About</a>
  <a style={style.alfa} href="#">Services</a>
  <a style={style.alfa} href="#">Clients</a>
  <a style={style.alfa} href="#">Contact</a>
    </div> 
    <span onclick= {click}> open</span>
    {['Inbox', 'Starred', 'Send email', 'Drafts','All mail', 'Trash', 'Spam'].map((text) => (
          <ListItem onclick={text} href="#">
            <ListItemText
            className="Text"
            value= {text}>
            </ListItemText>
          </ListItem>
        ))}


      </div>
    );
  }


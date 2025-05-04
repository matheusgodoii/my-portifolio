import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"

const StyleToobar = styled(Toolbar)(()=> ({
    display: "flex",
    justifyContent: "space-evenly"
  }))

function NavBar () {
  
    return (
      <>
        <AppBar position="absolute">
            <StyleToobar>
                <MenuItem>About</MenuItem>
                <MenuItem>Skills</MenuItem>
                <MenuItem>Projects</MenuItem>
            </StyleToobar>
            
        </AppBar>
      </>
    )
  }
  
  export default NavBar
  
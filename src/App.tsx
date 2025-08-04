import React,{useState,MouseEvent} from "react";
import "./App.css";
import { AppBar, Toolbar, IconButton, Typography, Box,Button,Menu,MenuList,MenuItem} from "@mui/material";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import MenuIcon from '@mui/icons-material/Menu';


const pages=['Home','Features','About','Login'];
function App() {
  const [anchorNav,setAnchorNav]=useState<null | HTMLElement>(null);
  const openMenu=(event:MouseEvent<HTMLElement>)=>{
    setAnchorNav(event.currentTarget);
  };
   const closeMenu = () => {
    setAnchorNav(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="logo"
          sx={{display:{xs:'none',md:'flex'}}}
        ></IconButton>
        <LocalLibraryIcon />
        <Typography variant="h6" component="div" sx={{flexGrow:1,display:{xs:'none',md:'flex'}}}>
          My Website
        </Typography>
        <Box sx={{display:{xs:'none',md:'flex'}}}>
          {/* <Button color='inherit'>Home</Button>
          <Button color='inherit'>Features</Button>
          <Button color='inherit'>About </Button>
          <Button color='inherit'>Login</Button> */ }
        {pages.map((page)=>(
          <Button color = 'inherit'>{page}</Button>
        ))}
        </Box>
        <Box>
          <Box sx={{display:{xs:'none',md:'flex'}}}></Box>
          <IconButton size='large' edge='start' color='inherit' onClick={openMenu}>

            <MenuIcon/>
            </IconButton>
            <Menu open ={Boolean(anchorNav)} onClose={closeMenu} sx={{display:{xs:'none',md:'flex'}}}>
           {/*<MenuList>
              <MenuItem>Home</MenuItem>
               <MenuItem>Features</MenuItem>
                <MenuItem>About</MenuItem>
                 <MenuItem>Login</MenuItem>
                  
            </MenuList>*/}
            {pages.map((page)=>(
              <MenuItem>{page}</MenuItem>
            ))}


            </Menu>
        </Box>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="logo"
          sx={{display:{xs:'flex',md:'none'}}}
        ></IconButton>
        <LocalLibraryIcon />
        <Typography variant="h6" component="div" sx={{flexGrow:1,display:{xs:'flex',md:'none'}}}>
          My Website
        </Typography>
        
       
      </Toolbar>
    </AppBar>
  );
}

export default App;

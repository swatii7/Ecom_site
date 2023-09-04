import React, { useState } from 'react'
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Divider from '@mui/material/Divider';
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import flagEn from "../../assets/Navbar/Logo/flag-en.svg"
import flagFran from '../../assets/Navbar/Logo/flag-fr.svg'
import flagEsp from '../../assets/Navbar/Logo/flag-es.svg'
import flagPort from '../../assets/Navbar/Logo/flag-pt.svg'
import flagChin from '../../assets/Navbar/Logo/flag-cn.svg'
// import { makeStyles } from '@mui/styles';


const pages = ["About Us", "Careers", "Open a Shop"];

// const useStyles = makeStyles((theme) => ({
//     customButton: {
//       backgroundColor: 'red', // Change the background color to red
//       color: 'white', // Change the text color to white
//       // Add more custom styles here
//     },
//   }));

function TopNav() {

    const [anchorElNav, setAnchorElNav] = useState(null)
    const [ country, setCountry] = useState("");
    const [currCode, setCurrCode] = useState("");

      const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };

    return (
        <div position="static" className='navbar border-bottom blueColor'>
        <Container maxWidth="xl" >
          <Toolbar disableGutters>
            <Box sx={{  display: { xs: "flex", md: "none" } }}>
    
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left"
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "flex", md: "flex" }
                }}
              >
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
              {pages.map((page) => (
                <>
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                  className='blueColor m-0 p-0'
                >
                  {page}
                  
                </Button>
                <Divider orientation="vertical" variant="middle" flexItem className='navDivider' />
                </>
              ))}
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              className='blueColor fs-12 m-0 p-0'
              sx={{
                // mr: 2,
                display: { xs: "flex", md: "flex" },
                flexGrow: 1,
                textDecoration: "none"

              }}
            >
                <span className='mr-5 fs-14 mt-2'>
                Free shipping for all orders over
                </span>
                <span className='text-succes fw-600 fs-18 mx-2'>
                $75.00
                </span>
              
            </Typography>
            <div style={{display:'contents'}}>
  <div className='d-flex'>
    <span>Need help? Call Us: </span>
    <span className='text-succes'>+ 1800 900</span>
  </div>
            <div className='countryDropdown m-0 p-0'>
  <FormControl sx={{ m: 1, minWidth: 135 }}>
    <Select
      value={country}
      onChange={(event)=> setCountry(event.target.value)}
      className='no-border-select MuiOutlinedInput-notchedOutline'
      displayEmpty  // Enable displayEmpty
    >
      <MenuItem value="">  {/* Empty value */}
       <img className='mr-5' src={flagEn} /> English
      </MenuItem>
      <MenuItem className='CountryList blueColor' value="fran">
        <img className='mr-5' src={flagFran} />
        Français
      </MenuItem>
      <MenuItem className='CountryList blueColor' value="esp">
        <img className='mr-5' src={flagEsp} />
        Español
      </MenuItem>
      <MenuItem className='CountryList blueColor' value="port">
        <img className='mr-5' src={flagPort} />
        Português
      </MenuItem>
      <MenuItem className='CountryList blueColor' value="chin">
        <img className='mr-5' src={flagChin} />
        中国人
      </MenuItem>
    </Select>
  </FormControl>
</div>


<div className='currencyDropdown m-0 p-0'>
  <FormControl sx={{ m: 1, minWidth: 135 }}>
    <Select
      value={currCode}
      onChange={(event)=> setCurrCode(event.target.value)}
      className='no-border-select MuiOutlinedInput-notchedOutline'
      displayEmpty  // Enable displayEmpty
    >
      <MenuItem value="">  {/* Empty value */}
      USD      </MenuItem>
      <MenuItem className='CountryList blueColor' value="eur">
       EUR
      </MenuItem>
      <MenuItem className='CountryList blueColor' value="aud">
       AUD
      </MenuItem>
      <MenuItem className='CountryList blueColor' value="sgp">
        SGP
      </MenuItem>
      
    </Select>
  </FormControl>
</div>
</div>
   
          </Toolbar>
        </Container>
      </div>
    )
}

export default TopNav

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from '@mui/material/Divider';
import FormControl from "@mui/material/FormControl";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React, { useState } from 'react';
import flagChin from '../../assets/Navbar/Logo/flag-cn.svg';
import flagEn from "../../assets/Navbar/Logo/flag-en.svg";
import flagEsp from '../../assets/Navbar/Logo/flag-es.svg';
import flagFran from '../../assets/Navbar/Logo/flag-fr.svg';
import flagPort from '../../assets/Navbar/Logo/flag-pt.svg';


const pages = ["About Us", "Careers", "Open a Shop"];


function TopNav() {

  const languageOptions = [
    { value: '', label: 'English', flag: flagEn },
    { value: 'fran', label: 'Français', flag: flagFran },
    { value: 'esp', label: 'Español', flag: flagEsp },
    { value: 'port', label: 'Português', flag: flagPort },
    { value: 'chin', label: '中国人', flag: flagChin },

  ]

  const currencyOptions = [
    { value: '', label: 'USD' },
    { value: 'eur', label: 'EUR' },
    { value: 'aud', label: 'AUD' },
    { value: 'sgp', label: 'SGP' },
  ];

  const [anchorElNav, setAnchorElNav] = useState(null)
  const [selectedValue, setSelectedValue] = useState('');
  const [currCode, setCurrCode] = useState("");

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div position="static" className='navbar border-bottom blueColor'>
      <Container maxWidth="xl" className='topNav ml-0 mr-0 pl-0 pr-0'>
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>

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
            {pages.map((page, index) => (
              <>
                <Button
                  key={index}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                  className='blueColor m-0'
                >
                  {page}

                </Button>
                <Divider orientation="vertical" variant="middle" flexItem className='navDivider' />
              </>
            ))}
          </Box>

          {/*  middle part of topbar  */}
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
          <div style={{ display: 'contents' }}>
            <div className='d-flex'>
              <span>Need help? Call Us: </span>
              <span className='text-succes'>+ 1800 900</span>
            </div>

            {/* language dropdown */}
            <div className='countryDropdown m-0 p-0'>
              <FormControl sx={{ m: 1, minWidth: 0 }} className='m-0'>
                <Select
                  value={selectedValue}
                  onChange={(event) => setSelectedValue(event.target.value)}
                  className='no-border-select MuiOutlinedInput-notchedOutline'
                  displayEmpty  // Enable displayEmpty
                >
                  {languageOptions.map((option, index) => (
                    <MenuItem key={index} value={option.value}>
                      <img className='mr-5' src={option.flag} alt={option.label} /> {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

{/* currency dropdown */}
            <div className='currencyDropdown m-0 p-0'>
              <FormControl sx={{ m: 1, minWidth: 0 }} className='m-0'>
                <Select
                  value={currCode}
                  onChange={(event) => setCurrCode(event.target.value)}
                  className='no-border-select MuiOutlinedInput-notchedOutline'
                  displayEmpty  // Enable displayEmpty
                >
                  {currencyOptions.map((option, index) => (
                    <MenuItem key={index} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}

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

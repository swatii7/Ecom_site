import Autocomplete from '@mui/material/Autocomplete';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import '../../Stylesheet/Header/Header.css';
import accountIcon from '../../assets/Navbar/Icons/NavIcons/account.svg';
import cartIcon from '../../assets/Navbar/Icons/NavIcons/cart.svg';
import compareIcon from '../../assets/Navbar/Icons/NavIcons/compare.svg';
import wishlistIcon from '../../assets/Navbar/Icons/NavIcons/wishlist.svg';
import headerLogo from '../../assets/Navbar/Logo/header_logo.svg';
import AccountMenu from './CustomMenu/AccountMenu';
import CartMenu from './CustomMenu/CartMenu';
import NavDropdown from './CustomMenu/NavDropdown';
import {useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '../../assets/Navbar/Icons/NavIcons/menuIcon.svg'
import Box from "@mui/material/Box";
import { display } from '@mui/system';


function Navbar() {

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const categories = [
    'All categories',
    'Computers Accessories',
    'Cell Phones',
    'Gaming Gadgets',
    'Smart watches',
    'Wired Headphone',
    'Mouse Keyboard',
    'Headphone',
    'Bluetooth devices',
    'Cloud Software',
  ];

  const homeTabs = [
    'Homepage - 1',
    'Homepage - 2',
    'Homepage - 3',
    'Homepage - 4',
    'Homepage - 5',
    'Homepage - 6',
    'Homepage - 7',
    'Homepage - 8',
    'Homepage - 9',
    'Homepage - 10'
  ]

  const shopTabs = [
    'Shop Grid',
    'Shop Grid 2',
    'Shop list - Left sidebar',
    'Shop list - Right sidebar',
    'Shop Fullwidth',
    'Single Product',
    'Single Product 2',
    'Single Product 3',
    'Single Product 4',
    'Shop Cart',
    'Shop Checkout',
    'Shop Compare',
    'Shop Wishlist'
  ]

  const vendorTabs = [
    'Vendors Listing',
    'Vendor Single'
  ]

  const pagesTabs = [
    'About Us',
    'Contact Us',
    'Careers',
    'Term and Condition',
    'Register',
    'Login',
    'Error 404'
  ]

  const BlogTabs = [
    'Blog - No Sidebar',
    'Blog - Right Sidebar',
    'Blog List',
    'Blog category big',
    'Blog Single - Left sidebar',
    'Blog Single - No sidebar'
  ]

  const accountList = ['My Account', 'Order Tracking', 'My Orders', 'My Wishlist', 'Setting', 'Sign out']

  // const pages = ['Products', 'Pricing', 'Blog'];
  // const [anchorElNav, setAnchorElNav] = useState('')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filterText, setFilterText] = useState('');
  const [selectedItem, setSelectedItem] = useState('All Categories')


  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  const handleInputChange = (event) => {
    setFilterText(event.target.value.toUpperCase());
  };

  const selectCategory = (category) => {
    setSelectedItem(category);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (


    <div position="static" className='blueColor navHeader'>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} pl-50>
          <Grid item xs={3}>
            <div style={{ display: 'flex' }}>
              <img src={headerLogo} />
              <div>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={categories}
                  sx={{ width: 300 }}
                  value={selectedItem}
                  onChange={(event, newValue) => {
                    if (newValue === null) {
                      setSelectedItem('All categories');
                    } else {
                      setSelectedItem(newValue);
                    }
                  }}

                  renderInput={(params) => (
                    <TextField
                      {...params}
                      // label="Category"
                      variant="outlined"
                      value={selectedItem}
                      onChange={handleInputChange}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      InputProps={{
                        ...params.InputProps,
                      }}

                    />
                  )}
                  disableClearable
                />
              </div>

            </div>
          </Grid>
          <Grid item xs={5}>
            <div>
           
              <div style={{ display: isSmallScreen ? 'none' : 'flex' }}>
                <NavDropdown tablist={homeTabs} label='Home' />
                <NavDropdown tablist={shopTabs} label='Shop' />
                <NavDropdown tablist={vendorTabs} label='Vendors' />
                <NavDropdown tablist={pagesTabs} label='Pages' />
                <NavDropdown tablist={BlogTabs} label='Blogs' />
                <div className='pt-25 blueColor fs-16 fw-500'>
                  <span>Contact Us</span>
                </div>
              </div>
            </div>
          </Grid>    
          <Grid item xs={4} className='justify-start'>
          <div>
      <Stack direction="row" spacing={2} className='pt-0 pr-15 pb-0  cursor-pointer alignCenter lh-24'>
        <div style={{ display: isSmallScreen ? 'none' : 'flex' }}>
          <AccountMenu buttonLabel="Account" menuItems={accountList} icon={<img src={accountIcon} />} />
        </div>

        <div style={{ display: isSmallScreen ? 'none' : 'block' }}>
          <Badge badgeContent={5} color='primary'>
            <img src={wishlistIcon} />
          </Badge>
          <span className='ml-5 blueColor fs-16 fw-500 navButton'>Wishlist</span>
        </div>

        <div style={{ display: isSmallScreen ? 'none' : 'flex' }}>
          <Badge badgeContent={2} color='primary'>
            <img src={cartIcon} />
          </Badge>
          <CartMenu buttonLabel="Cart" blueColor fs-18 fw-500 />
        </div>

        <Button className='blueColor fs-16 fw-500 navButton' startIcon={<img src={compareIcon} />}>
          Compare
        </Button>
      </Stack>
    </div>
          </Grid>
         <div style={{ display: isSmallScreen ? 'block' : 'none' }}>
       <img src={MenuIcon} alt='icon-img' onClick={toggleDropdown} />
       {isDropdownOpen &&
        <div>
        <NavDropdown tablist={homeTabs} label='Home' />
              <NavDropdown tablist={shopTabs} label='Shop' />
              <NavDropdown tablist={vendorTabs} label='Vendors' />
              <NavDropdown tablist={pagesTabs} label='Pages' />
              <NavDropdown tablist={BlogTabs} label='Blogs' />
              <div className='pt-25 blueColor fs-16 fw-500'>
                <span>Contact Us</span>
              </div>
              </div>
       }
      
          </div>
        
        </Grid>
      </Box>
    </div>
  )
}

export default Navbar

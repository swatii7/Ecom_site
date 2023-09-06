import MenuIcon from '@mui/icons-material/Menu';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import headerLogo from '../../assets/Navbar/Logo/header_logo.svg';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import accountIcon from '../../assets/Navbar/Icons/NavIcons/account.svg'
import wishlistIcon from '../../assets/Navbar/Icons/NavIcons/wishlist.svg'
import cartIcon from '../../assets/Navbar/Icons/NavIcons/cart.svg'
import compareIcon from '../../assets/Navbar/Icons/NavIcons/compare.svg'
import Badge from '@mui/material/Badge';
import '../../Stylesheet/Header/Header.css'
import AccountMenu from './CustomMenu/AccountMenu';
import CartMenu from './CustomMenu/CartMenu';


function Navbar() {

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

  const accountList = ['My Account', 'Order Tracking', 'My Orders', 'My Wishlist', 'Setting', 'Sign out']

  const pages = ['Products', 'Pricing', 'Blog'];
  const [anchorElNav, setAnchorElNav] = useState('')
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


  return (
    <div position="static" className='blueColor navHeader'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={headerLogo} />

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={(event) => setAnchorElNav(event.currentTarget)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={() => setAnchorElNav(null)}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => setAnchorElNav(null)}>
                  <Typography className='blueColor textCenter'>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

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

          <div>

          </div>


          <Stack direction="row" spacing={2} className='pt-0 pr-15 pb-0 pl-30 cursor-pointer alignCenter lh-24'>
            <div style={{ display: 'flex' }}>
              <AccountMenu buttonLabel="Account" menuItems={accountList} icon={<img src={accountIcon} />} />
            </div>

            <div>
              <Badge badgeContent={5} color='primary'>
                <img src={wishlistIcon} />
              </Badge>
              <span className='ml-5 navButton'>Wishlist</span>
            </div>

            <div style={{ display: 'flex' }}>
              <Badge badgeContent={2} color='primary'>
                <img src={cartIcon} />

              </Badge>
             <CartMenu buttonLabel="Cart" />
            </div>

            <Button className='blueColor fs-16 fw-400 navButton' startIcon={<img src={compareIcon} />}>
              Compare
            </Button>
          </Stack>

        </Toolbar>
      </Container>
    </div>
  )
}

export default Navbar

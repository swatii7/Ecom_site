import React, {useState} from 'react'
import MenuItem from "@mui/material/MenuItem";
import ImageOne from "../../../assets/Navbar/Icons/NavListIcons/laptop.png"
import ImageTwo from "../../../assets/Navbar/Icons/NavListIcons/headphones.png"
import Menu from '@mui/material/Menu';
import Divider from '@mui/material/Divider';


  function CartMenu({icon,buttonLabel }) {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <div>
        <div
          style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
          onClick={handleClick}
          className='blueColor fs-16 fw-400 text-Capitalize navButton'
        >
          {icon}
          <span style={{ marginLeft: '8px' }}>{buttonLabel}</span>
        </div>
        <div className='cartMenuWrapper'>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          className='navListContainer'
        >
          {/* {menuItems.map((item, index) => (
            <MenuItem className="blueColor m-0 mb-20 p-0 navDropList" key={index} onClick={handleClose}>
              {item}
            </MenuItem>
          ))} */}
          <MenuItem onClick={handleClose} className='listWrapper'>
            <img src={ImageOne} className='mr-15 cartImages' />
            <span>2022 Apple iMac with Retina 5K Display 8GB RAM, 256GB SSD</span>
            <span>1 x $2856.4</span>
          </MenuItem>
        <MenuItem onClick={handleClose}>Order Tracking</MenuItem>
        <Divider />
        {/* <MenuItem onClick={handleClose}>My Orders</MenuItem>
        <MenuItem onClick={handleClose}>My Wishlist</MenuItem>
        <MenuItem onClick={handleClose}>Setting</MenuItem>
        <MenuItem onClick={handleClose}>Sign Out</MenuItem> */}
        </Menu>
        </div>
      </div>
    )
}

export default CartMenu

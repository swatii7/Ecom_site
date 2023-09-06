import React, {useState} from 'react'
import MenuItem from "@mui/material/MenuItem";
import ImageOne from "../../../assets/Navbar/Icons/NavListIcons/laptop.png"
import ImageTwo from "../../../assets/Navbar/Icons/NavListIcons/headphones.png"
import Menu from '@mui/material/Menu';
import Divider from '@mui/material/Divider';
// import Paper from '@mui/material/Paper';
// import makeStyles from '@mui/styles/makeStyles';

// const useStyles = makeStyles((theme) => ({
//     customPaperRoot: {
//       backgroundColor: "#fff",  
//       color: "rgba(0, 0, 0, 0.87)",
//       position: "absolute",
//       overflowY: "auto",
//       overflowX: "hidden",
//       minWidth: "16px",
//       minHeight: "16px",
//       maxWidth: "calc(100% - 32px)",
//       maxHeight: "calc(100% - 32px)",
//       outline: "0",
//       border: "1px solid #D5DFE4 !important",
//       borderRadius: "0 0 4px 4px !important",
//       top: "116px !important",
//       zIndex: "99",
//       width: "200px",
//       padding: "22px 22px 0px 22px",
//       transition: "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)",
//       boxShadow: "none !important",
//     },
//   }));


  function CartMenu({icon,buttonLabel }) {

    // const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        // <Paper classes={{ root: classes.customPaperRoot }}>
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
    //   </Paper>
    )
}

export default CartMenu

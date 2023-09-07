import React, {useState} from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function NavDropdown({label,tablist}) {

    const [tabs, setTabs] = useState('');

    const handleChange = (event) => {
        setTabs(event.target.value);
    };

    return (
        
      <FormControl sx={{ m: 1, minWidth: 109 }}>
        <InputLabel id="demo-simple-select-label" className='blueColor fs-16 fw-500'>{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={tabs}
        //   label={label}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          {tablist.map((item, index) => (
            <MenuItem key={index} value={item} className='blueColor fs-20 fw-600'>
              {item}
            </MenuItem>
          ))}
        
        </Select>
      </FormControl>

   
    )
}

export default NavDropdown

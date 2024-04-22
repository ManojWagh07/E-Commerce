import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const SliderBar = () => {
  return (
  <div className='Container-flex'>
    <div className='FormControlLabel'>
          <h4>BRANDS</h4>
      <div className='Brand'>
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="SJeware"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="Adidas"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="CREATURE"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="SWAGR"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="Scott International"
          labelPlacement="end"
        />
      </div>
    </div>


    <div className='FormControlLabel'>
        <h4>SIZE</h4>
      <div className='Brand'>
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="S"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="M"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="L"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="X"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="XL"
          labelPlacement="end"
        />
      </div>
    </div>

    <div className='FormControlLabel'>
      <h4>RANGE</h4>
     <span>500₹</span> <input type="range" name="" id="" /><span>2000₹</span>
    </div>

    <div className='FormControlLabel'>
        <h4>COLORS</h4>
      <div className='Brand'>
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="Black"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="Red"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="White"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="Navi Blue"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="Green"
          labelPlacement="end"
        />
      </div>
    </div>

    <div className='FormControlLabel'>
        <h4>PATTERN</h4>
      <div className='Brand'>
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="Solid"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="Checkered"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="Printed"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="Striped"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="Washed"
          labelPlacement="end"
        />
      </div>
    </div>
  </div>
  
  )
}

export default SliderBar
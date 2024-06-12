/* eslint-disable no-unused-vars */
import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button';
import { Stack, TextField } from '@mui/material';

function AddPayment() {
  const [value, setValue] = React.useState(dayjs());

  return (
    <Stack direction='column' className='max-w-xs gap-5 mt-5'>
      <p className='text-xl font-roboto font-bold text-[#415A77]'>
        Add new payment
      </p>
      <TextField required id='outlined-required' label='Company name' />

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label='Agreement day'
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </LocalizationProvider>
      <TextField
        id='outlined-number'
        label='Number of days'
        type='number'
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id='outlined-number'
        label='Payment amount'
        type='number'
        InputLabelProps={{
          shrink: true,
        }}
      />

      <Button variant='contained' style={{ backgroundColor: '#415A77' }}>
        Add
      </Button>
    </Stack>
  );
}

export default AddPayment;

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button';
import { Stack, TextField } from '@mui/material';
import { useState } from 'react';

function AddPayment({ supabase, getPayments }) {
  const [companyName, setCompanyName] = useState('');
  const [agreementDate, setAgreementDate] = useState(dayjs());
  const [paymentDelay, setPaymentDelay] = useState('');
  const [receivingAmount, setReceivingAmount] = useState('');

  const formattedAgreementDate = dayjs(agreementDate, 'DD/MM/YYYY').format(
    'YYYY-MM-DD'
  );
  const receivingDate = dayjs(agreementDate)
    .add(paymentDelay, 'day')
    .format('YYYY-MM-DD');

  async function handleSubmit(e) {
    e.preventDefault();

    const { data, error } = await supabase.from('payments').insert([
      {
        company_name: companyName,
        agreement_day: formattedAgreementDate,
        payment_delay: paymentDelay,
        receiving_date: receivingDate,
        payment_amount: receivingAmount,
      },
    ]);
    if (error) {
      console.error('Error inserting data:', error);
    } else {
      console.log('Data inserted:', data);

      getPayments();
      setCompanyName('');
      setAgreementDate(dayjs());
      setPaymentDelay('');
      setReceivingAmount('');
    }
  }

  return (
    <Stack direction='column' className='max-w-xs mt-5'>
      <p className='text-xl font-roboto font-bold text-[#415A77]'>
        Add new payment
      </p>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col max-w-xs gap-3 my-3 md:gap-5 md:mt-5'
      >
        <TextField
          id='outlined'
          label='Company name'
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label='Agreement day'
            value={agreementDate}
            onChange={(e) => setAgreementDate(e)}
          />
        </LocalizationProvider>
        <TextField
          id='outlined-number'
          label='Number of days'
          type='number'
          InputLabelProps={{
            shrink: true,
          }}
          value={paymentDelay}
          onChange={(e) => setPaymentDelay(e.target.value)}
        />
        <TextField
          id='outlined-number'
          label='Payment amount'
          type='number'
          InputLabelProps={{
            shrink: true,
          }}
          value={receivingAmount}
          onChange={(e) => setReceivingAmount(e.target.value)}
        />

        <Button
          variant='contained'
          style={{ backgroundColor: '#415A77' }}
          type='submit'
        >
          Add
        </Button>
      </form>
    </Stack>
  );
}

export default AddPayment;

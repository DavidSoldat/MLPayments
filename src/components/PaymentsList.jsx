/* eslint-disable react/prop-types */
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import { CircularProgress, IconButton, Tooltip } from '@mui/material';

function PaymentsList({ payments, isLoading, handleDelete }) {
  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <div className='h-full flex-col gap-4 mt-5'>
      <p className='text-xl font-roboto font-bold text-[#415A77] mb-5'>
        Pending payments
      </p>
      <TableContainer component={Paper} className='max-h-full overflow-auto'>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead className='bg-gray-200'>
            <TableRow>
              <TableCell>Company name</TableCell>
              <TableCell align='right'>Agreement date</TableCell>
              <TableCell align='right'>Payment delay</TableCell>
              <TableCell align='right'>Receiving date</TableCell>
              <TableCell align='right'>Receiving amount (&euro;) </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {payments.map((payment) => (
              <TableRow
                key={payment.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {payment.company_name}
                </TableCell>
                <TableCell align='right'>{payment.agreement_day}</TableCell>
                <TableCell align='right'>{payment.payment_delay}</TableCell>
                <TableCell align='right'>{payment.receiving_date}</TableCell>
                <TableCell align='right'>{payment.payment_amount}</TableCell>
                <TableCell align='right'>
                  {
                    <Tooltip
                      title='Delete'
                      onClick={() => handleDelete(payment.id)}
                    >
                      <IconButton>
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  }
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default PaymentsList;

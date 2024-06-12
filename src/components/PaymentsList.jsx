import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, Tooltip } from '@mui/material';

function createData(
  companyName,
  agreementDate,
  agreedDays,
  paymentDate,
  paymentAmount
) {
  return { companyName, agreementDate, agreedDays, paymentDate, paymentAmount };
}

const rows = [
  createData('Max Lorry 20', '22-12-2022', 30, '13-01-2023', 300),
  createData('Soldat & Co', '22-12-2022', 30, '13-01-2023', 3400),
  createData('Teodor & Co', '22-12-2022', 30, '13-01-2023', 500),
  createData('Max Lorry 20', '22-12-2022', 30, '13-01-2023', 700),
];

function PaymentsList() {
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
              <TableCell align='right'>Receiving payment</TableCell>
              <TableCell align='right'>Receiving amount</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {row.companyName}
                </TableCell>
                <TableCell align='right'>{row.agreementDate}</TableCell>
                <TableCell align='right'>{row.agreedDays}</TableCell>
                <TableCell align='right'>{row.paymentDate}</TableCell>
                <TableCell align='right'>{row.paymentAmount}</TableCell>
                <TableCell align='right'>
                  {
                    <Tooltip title='Delete'>
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

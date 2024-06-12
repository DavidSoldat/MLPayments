import AddPayment from './AddPayment';
import PaymentsList from './PaymentsList';

function Main() {
  return (
    <div className='flex-grow flex flex-col md:flex-row h-full px-3 w-full md:p-10 gap-5'>
      <div className='md:w-[70%]  order-2 md:order-1'>
        <PaymentsList />
      </div>
      <div className='md:w-[30%]  order-1 md:order-2 flex justify-center'>
        <AddPayment />
      </div>
    </div>
  );
}

export default Main;

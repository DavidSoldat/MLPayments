/* eslint-disable no-unused-vars */
import { createClient } from '@supabase/supabase-js';
import AddPayment from './AddPayment';
import PaymentsList from './PaymentsList';
import { useEffect, useState } from 'react';

const supabase = createClient(
  'https://ywqpghgpkevgtdgcpdzm.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl3cXBnaGdwa2V2Z3RkZ2NwZHptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgyMDEwMjcsImV4cCI6MjAzMzc3NzAyN30.hfZKg6fUQv9O9cGrgbUeHckwmYmGFKYyeeyS_lMGM1w'
);
function Main() {
  const [payments, setPayments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPayments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getPayments() {
    setIsLoading(true);
    const { data, error } = await supabase.from('payments').select();
    if (error) {
      console.error('Error fetching data');
    } else setPayments(data);
    setIsLoading(false);
  }

  async function handleDelete(id) {
    const { error } = await supabase.from('payments').delete().eq('id', id);
    if (error) {
      throw error;
    }
    getPayments();
  }

  return (
    <div className='flex-grow flex flex-col md:flex-row h-full px-3 w-full md:p-10 gap-5'>
      <div className='md:w-[70%]  order-2 md:order-1'>
        <PaymentsList
          payments={payments}
          isLoading={isLoading}
          handleDelete={handleDelete}
        />
      </div>
      <div className='md:w-[30%]  order-1 md:order-2 flex justify-center'>
        <AddPayment supabase={supabase} getPayments={getPayments} />
      </div>
    </div>
  );
}

export default Main;

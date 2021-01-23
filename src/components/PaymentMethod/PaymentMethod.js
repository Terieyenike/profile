import { Select, Div } from './PaymentMethod.style';
const PaymentMethod = ({ changeFilter }) => {
  return (
    <>
      <Div>
        <label htmlFor='method' className='pay'>
          Payment method
        </label>
        <Select id='method' onChange={(e) => changeFilter(e, 'method')}>
          <option value='all'>All</option>
          <option value='check'>Check</option>
          <option value='cc'>Credit Card</option>
          <option value='paypal'>Paypal</option>
          <option value='money order'>Money Order</option>
        </Select>
      </Div>
    </>
  );
};

export default PaymentMethod;

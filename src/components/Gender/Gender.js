import { Select, Div } from '../PaymentMethod/PaymentMethod.style';

const Gender = () => {
  return (
    <>
      <Div>
        <label htmlFor='gender'>Gender</label>
        <Select id='gender' className='gender'>
          <option value='all'>All</option>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
          <option value='prefer to skip'>Prefer to skip</option>
        </Select>
      </Div>
    </>
  );
};

export default Gender;

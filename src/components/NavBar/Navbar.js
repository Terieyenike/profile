import { Div, Section } from './Navbar.style';
import Container from '../Container';

const Navbar = ({ handleChange }) => {
  return (
    <Section>
      <Container>
        <Div>
          <h1>Profiles</h1>
          <input
            aria-label='Search'
            placeholder={'Search patient'}
            onChange={handleChange}
          />
        </Div>
      </Container>
    </Section>
  );
};

export default Navbar;

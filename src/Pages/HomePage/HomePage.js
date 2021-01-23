/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Section,
  Bg,
  UserDetails,
  Icons,
  Type,
  Grid,
  Category,
  Loading,
} from './HomePage.style';
import Container from '../../components/Container';
import PaymentMethod from '../../components/PaymentMethod/PaymentMethod';
import Gender from '../../components/Gender/Gender';

import * as FiIcons from 'react-icons/fi';

const HomePage = ({ filteredProfiles, loading, filtered }) => {
  if (loading) {
    return (
      <Container>
        <Loading>Loading...</Loading>
      </Container>
    );
  }
  return (
    <Section>
      <Container>
        <Category>
          <Gender />
          <PaymentMethod changeFilter={filtered} />
        </Category>
        <Grid>
          {filteredProfiles.map((profile, id) => (
            <Bg key={id} className='box'>
              <UserDetails>
                <Icons>
                  <a
                    href={`mailto:${profile.Email}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='send a mail'>
                    <FiIcons.FiMail />
                  </a>
                  <a
                    href={profile.URL}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='visit us'>
                    <FiIcons.FiLink />
                  </a>
                </Icons>
                <p>
                  Username: <span>{profile.UserName}</span>
                </p>
              </UserDetails>
              <img
                src='https://robohash.org/5?set=set5&size=150x150'
                alt='profile-img'
              />
              <h3>
                {profile.FirstName} {profile.LastName}
              </h3>
              <Type>
                <p>
                  <span>{profile.Gender}</span>
                </p>
                <p>
                  <span>{profile.PaymentMethod}</span>
                </p>
              </Type>
            </Bg>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default HomePage;

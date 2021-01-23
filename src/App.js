import { useState, useEffect } from 'react';
import Navbar from './components/NavBar/Navbar';
import HomePage from './Pages/HomePage/HomePage';

import Pagination from './components/Pagination/Pagination';

const App = () => {
  const [profiles, setProfiles] = useState([]);
  const [searchProfile, setSearchProfile] = useState('');
  const [loading, setLoading] = useState(true);
  const [method, setMethod] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [profilesPerPage] = useState(20);

  useEffect(() => {
    fetchProfiles();
  }, []);

  const indexOfLastProfile = currentPage * profilesPerPage;
  const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const fetchProfiles = async () => {
    let url = 'https://api.enye.tech/v1/challenge/records';
    const res = await fetch(url);
    const data = await res.json();
    setProfiles(data.records.profiles);
    setLoading(false);
  };

  const searchProfiles = (e) => {
    setSearchProfile(e.target.value);
  };

  const filterChange = (e, filterType) => {
    switch (filterType) {
      case 'method':
        setMethod(e.target.value);
        break;
      default:
        break;
    }
  };

  if (method !== 'all') {
  }
  const filteredProfiles = profiles
    .slice(indexOfFirstProfile, indexOfLastProfile)
    .filter(
      (profile) =>
        profile.FirstName.toLowerCase().includes(searchProfile.toLowerCase()) ||
        profile.LastName.toLowerCase().includes(searchProfile.toLowerCase())
    );

  // if (method !== 'all') {
  //   const filteredMethod = profiles.filter(
  //     (profile) => profile.PaymentMethod === method
  //   );
  // }

  return (
    <>
      <Navbar handleChange={searchProfiles} value={searchProfile} />
      <HomePage
        filteredProfiles={filteredProfiles}
        loading={loading}
        filtered={filterChange}
      />
      <Pagination
        profilesPerPage={profilesPerPage}
        totalProfiles={profiles.length}
        paginate={paginate}
      />
    </>
  );
};

export default App;

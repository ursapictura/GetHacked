'use client';

import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import getUsers from '../api/UserData';
import PostCard from '../components/PostCard';

function Home() {
  const [users, setUsers] = useState([]);

  const getUserProfiles = () => {
    getUsers().then(setUsers);
  };

  useEffect(() => {
    getUserProfiles();
  }, []);

  return (
    <>
      <h1 style={{ textAlign: 'center', marginTop: '30px' }}>GetHacked!</h1>
      <h2 style={{ textAlign: 'center' }}>Share personal details with strangers online! What could possibly go wrong? 👀</h2>
      <div style={{ display: 'flex', flexFlow: 'wrap', justifyContent: 'space-around', gap: '20px', maxWidth: '80%', margin: '15vh auto' }}>
        {users.map((user) => (
          <PostCard userObj={user} key={user.name.first} />
        ))}
      </div>

      <Button onClick={getUserProfiles}>View more profiles</Button>
    </>
  );
}

export default Home;

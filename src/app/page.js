'use client';

import { useEffect, useState } from 'react';
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
    <div style={{ display: 'flex', flexFlow: 'wrap' }}>
      {users.map((user) => (
        <PostCard userObj={user} />
      ))}
    </div>
  );
}

export default Home;

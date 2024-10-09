const endpoint = 'https://randomuser.me/api/?results=8';

const getUsers = () =>
  new Promise((resolve, reject) => {
    fetch(endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data.results))
      .catch(reject);
  });

export default getUsers;

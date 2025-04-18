import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userData } from './constants/UserData';

function UserData() {
  const dispatch = useDispatch();
  const { loading, users = [], error } = useSelector((state) => state.userdata || {});

  useEffect(() => {
    dispatch(userData());
    console.log("users", users);
    
  }, [dispatch]);

  return (
    <div>
      <h1>Redux Thunk Tutorial</h1>
      {loading && <h2>Loading...</h2>}
      {error && <h2 className='text-red-500'>{error}</h2>}
      <ul className='flex flex-wrap gap-4'>
        {users.map((user) => (
          <li key={user.id}>
            {user.data?.name} - {user.data?.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserData;
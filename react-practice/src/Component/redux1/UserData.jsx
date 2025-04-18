// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { userData } from './constants/UserData';

// function UserData() {
//   const dispatch = useDispatch();
//   const { loading, users = [], error } = useSelector((state) => state.userdata || {});

//   useEffect(() => {
//     dispatch(userData());
//     console.log("users", users);
    
//   }, [dispatch]);

//   return (
//     <div>
//       <h1>Redux Thunk Tutorial</h1>
//       {loading && <h2>Loading...</h2>}
//       {error && <h2 className='text-red-500'>{error}</h2>}
//       <ul className='flex flex-wrap gap-4'>
//         {users.map((user) => (
//           <li key={user.id}>
//             {user.name} - {user.email}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default UserData;



// UserData.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userData } from './constants/UserData';

function UserData() {
  const dispatch = useDispatch();
  const { loading, users = [], error } = useSelector((state) => state.userdata || {});

  useEffect(() => {
    dispatch(userData());
  }, [dispatch]);

  console.log('Users from Redux:', users);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Redux Thunk Tutorial</h1>
      {loading && <h2>Loading...</h2>}
      {error && <h2 className="text-red-500">{error}</h2>}
      <ul className="flex flex-col gap-2">
        {users && users.length > 0 ? (
          users.map((user) => (
            <li key={user.id} className="border p-2 rounded">
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
            </li>
          ))
        ) : (
          !loading && <h2>No users found.</h2>
        )}
      </ul>
    </div>
  );
}

export default UserData;

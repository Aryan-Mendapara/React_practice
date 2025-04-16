// import React, { useState, useEffect } from 'react';

// function Count() {
//   const [data, setData] = useState([])

// useEffect(() => {
//   const fetchApi = async () => {
//     const response = await fetch('https://67976f47c2c861de0c6cb34b.mockapi.io/weetech/v1/weetech')

//     .then(response => response.json())
//     .then(data => setData(data))
//     .catch(error => console.error('Error:', error))
//     console.log("hhhhhhhhh",response);
//   }
//   fetchApi()
// },[])
//   return (
  
//     <div className="bg-white border rounded-xl p-6">
//       {data.map((value) => (
//         <>
//         <p key={value} className="flex items-center space-x-4 p-2 border-b">
//              {console.log("nccn", value.id)}
//              <p className="text-lg font-bold">{value.id}</p>
//           <img src={value.avatar} alt="Avatar" className="rounded-full w-12 h-12" />
//           <p className="text-lg font-bold">{value.name}</p>
//           <p className="text-lg font-bold">{value.createdAt}</p>
          
//         </p>
//         </>
//       ))}
//     </div>
//   );
// }
// export default Count;



import React, { useState, useEffect } from 'react';

function Count() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch(
          'https://67976f47c2c861de0c6cb34b.mockapi.io/weetech/v1/weetech'
        );
        const result = await response.json();
        setData(result);
        console.log("Fetched data:", result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchApi(); // Call the function inside useEffect
  }, []);

  return (
    <div className="bg-white border rounded-xl p-6">
      {data.map((value) => (
        <div key={value.id} className="flex items-center space-x-4 p-2 border-b">
          {console.log("Item ID:", value.id)}
          <p className="text-lg font-bold">{value.id}</p>
          <img src={value.avatar} alt="Avatar" className="rounded-full w-12 h-12" />
          <p className="text-lg font-bold">{value.name}</p>
          <p className="text-sm text-gray-500">{new Date(value.createdAt).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}

export default Count;

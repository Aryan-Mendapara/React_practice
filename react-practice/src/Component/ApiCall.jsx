import React, { useState } from "react";

function ApiCall() {
  const [data, setData] = useState([
    {
      createdAt: "2025-01-28T12:31:38.173Z",
      name: "Randall Littel I",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1244.jpg",
      id: "1",
    },
    {
      createdAt: "2025-01-29T10:00:38.274Z",
      name: "Miss May Kemmer",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/296.jpg",
      id: "2",
    },
    {
      createdAt: "2025-01-29T05:54:34.401Z",
      name: "Dr. Jeffrey O'Hara",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1023.jpg",
      id: "3",
    },
    {
      createdAt: "2025-01-29T09:55:34.139Z",
      name: "Guillermo Bernhard",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/330.jpg",
      id: "4",
    },
    {
      createdAt: "2025-01-28T21:02:54.478Z",
      name: "Ms. Grace Gutkowski",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/422.jpg",
      id: "5",
    },
  ]);
 
  

  return (
    <div className="bg-white border rounded-xl p-6">
      {data.map((value) => (
        <>
        <p key={value} className="flex items-center space-x-4 p-2 border-b">
             {console.log("nccn", value.id)}
             <p className="text-lg font-bold">{value.id}</p>
          <img src={value.avatar} alt="Avatar" className="rounded-full w-12 h-12" />
          <p className="text-lg font-bold">{value.name}</p>
          <p className="text-lg font-bold">{value.createdAt}</p>
          
        </p>
        </>
      ))}
    </div>
  );
}

export default ApiCall;

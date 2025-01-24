import React, { useEffect, useState } from 'react';

export default function Navbars() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);
  const handleSearch = data.filter(
    (user) => user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <input
          type="search"
          placeholder="Search by name or email..."
          className="px-4 py-2 border rounded-lg w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {handleSearch.length === 0 && search && (<span className='text-red-500'>  No results found for "{search}" </span>)}
      </div>


      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead>

          <tr className="bg-gray-100 text-left text-gray-700">
            <th className="px-6 py-4 font-semibold">ID</th>
            <th className="px-6 py-4 font-semibold">Name</th>
            <th className="px-6 py-4 font-semibold">Email</th>
            <th className="px-6 py-4 font-semibold">Username</th>
          </tr>
        </thead>
        <tbody>
          {handleSearch.map((user) => (
            <tr key={user.id} className="border-b border-gray-200">
              <td className="px-6 py-4">{user.id}</td>
              <td className="px-6 py-4">{user.name}</td>
              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4">{user.username}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

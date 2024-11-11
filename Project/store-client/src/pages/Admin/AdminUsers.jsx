// import React from 'react'

// const AdminUsers = () => {
//   return (
//     <div className='w-full h-full flex flex-col justify-start items-start'>
//     <AdminPageHeader title='Users' />

//     table
//   </div>
//   )
// }

// export default AdminUsers

import React, { useEffect, useState } from 'react'
import AdminPageHeader from '../../components/Admin/AdminPageHeader'
import { getUsers } from '../../api/api'
import { Loader2, TriangleAlert, Pencil, Trash } from 'lucide-react'

const AdminUsers = () => {
  const [users, setUsers] = useState(null)
  const [loading, setLoading] = useState(true)

  async function fetchData() {
    try {
      const res = await getUsers()
      if (res.status === 200) {
        setUsers(res.data)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (loading) {
    return (
      <div className='w-screen h-[90vh] flex flex-col justify-center items-center'>
        <Loader2 className='text-purple-500 h-14 w-14 animate-spin' />
      </div>
    )
  }

  if (!users || users.length === 0) {
    return (
      <div className='w-screen h-[90vh] flex flex-col justify-center items-center'>
        <TriangleAlert className='text-orange-400 h-12 w-12' />
        <p>No Users Available!</p>
      </div>
    )
  }

  return (
    <div className='w-full h-full flex flex-col justify-start items-start'>
      <AdminPageHeader title='Users' />
      <table className='w-full h-full border-collapse border shadow-lg rounded-md'>
        <thead className='shadow-sm font-bold text-purple-500 text-left'>
          <tr>
            <th className='p-6'>User ID</th>
            <th className='p-6'>Username</th>
            <th className='p-6'>Email</th>
            <th className='p-6'>Role</th>
            <th className='p-6'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td className='p-4'>{user.id}</td>
              <td className='p-4'>{user.username}</td>
              <td className='p-4'>{user.email}</td>
              <td className='p-4'>{user.role}</td>
              <td className='p-4 flex h-full w-full flex-row justify-start items-center gap-4'>
                <button className='h-15 w-15 border-blue-500 border-2 p-1 rounded-md text-blue-500 shadow-md hover:bg-blue-500 hover:text-white'>
                  <Pencil />
                </button>
                <button className='h-15 w-15 border-red-500 border-2 p-1 rounded-md text-red-500 shadow-md hover:bg-red-500 hover:text-white'>
                  <Trash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AdminUsers

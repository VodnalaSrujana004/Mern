// import React from 'react'

// const AdminSettings = () => {
//   return (
//     <div>AdminSettings</div>
//   )
// }

// export default AdminSettings
import React from 'react'
import AdminPageHeader from '../../components/Admin/AdminPageHeader'
import { Settings, User, Lock, Power } from 'lucide-react'

const AdminSettings = () => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center bg-gray-50'>
      <AdminPageHeader title='Settings' />
      
      <div className='w-full p-8 max-w-4xl'>
        <h2 className='text-3xl font-bold text-purple-600 text-center'>General Settings</h2>
        <div className='mt-8 space-y-6'>
          <div className='flex items-center gap-4'>
            <Settings className='text-purple-500 h-8 w-8' />
            <span className='font-medium text-gray-700 text-xl'>Site Configuration</span>
          </div>
          <div className='flex items-center gap-4'>
            <User className='text-purple-500 h-8 w-8' />
            <span className='font-medium text-gray-700 text-xl'>User Management</span>
          </div>
          <div className='flex items-center gap-4'>
            <Lock className='text-purple-500 h-8 w-8' />
            <span className='font-medium text-gray-700 text-xl'>Security Settings</span>
          </div>
          <div className='flex items-center gap-4'>
            <Power className='text-purple-500 h-8 w-8' />
            <span className='font-medium text-gray-700 text-xl'>System Controls</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminSettings

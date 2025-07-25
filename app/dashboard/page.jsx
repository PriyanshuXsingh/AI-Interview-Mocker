import { UserButton } from '@clerk/nextjs'
import React from 'react'
import AddNewInterviewer from './_components/AddNewInterviewer'
import InterviewList from './_components/InterviewList'

function Dashboard() {
  return (
    <div className='p-10' >
      <h2 className='font-bold text-2xl text-green-600'>Dashboard</h2>
      <h2 className='text-gray-500'>Create and Start Your AI Mockup Interview</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 my-5'>
        <AddNewInterviewer/>
      </div>

      {/* Previous Interview list */}
      <InterviewList/>
    </div>
    
  )
}

export default Dashboard
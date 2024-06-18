import React from 'react'

const EditTopicForm = () => {
  return (
    <from className="flex flex-col gap-3 p-4 rounded-md border border-blue-200 mx-4">
    <input className='border border-slate-500 p-2' type="text" placeholder='Title' />
    <input className='border border-slate-500 p-2' type="text" placeholder='Topic Description' />
    <button className='bg-purple-700 hover:bg-purple-900 text-white py-3 px-1 w-1/3 rounded-md'>Update Topic</button>
</from>
  )
}

export default EditTopicForm

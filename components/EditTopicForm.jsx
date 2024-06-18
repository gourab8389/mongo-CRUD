"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const EditTopicForm = ({id, title, description}) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`,{
        method:"PUT",
        headers:{
          "Content-type":"application/json"
        },
        body: JSON.stringify({newTitle, newDescription})
      }); 

      if(!res.ok){
        throw new Error("Failed to update topic")
      }
      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-4 rounded-md border border-blue-200 mx-4">


    <input onChange={(e)=> setNewTitle(e.target.value)} value={newTitle} className='border border-slate-500 p-2' type="text" placeholder='Title' />


    <input onChange={(e)=> setNewDescription(e.target.value)} value={newDescription} className='border border-slate-500 p-2' type="text" placeholder='Topic Description' />


    <button className='bg-purple-700 hover:bg-purple-900 text-white py-3 px-1 w-1/3 rounded-md'>Update Topic</button>


</form>
  )
}

export default EditTopicForm

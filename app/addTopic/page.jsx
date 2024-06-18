"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const page = () => {

  const [title, setTitle] = useState(" ");
  const [description, setDescription] = useState(" ");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and description are required.");
      return;
    }
    try {
      const res = await fetch('http://localhost:3000/api/topics', {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ title, description })
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create the topic");
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-4 rounded-md mx-0 lg:mx-48">
      <input onChange={(e) => setTitle(e.target.value)} value={title} className='border border-slate-500 p-2 rounded-md' type="text" placeholder='Title' />


      <input onChange={(e) => setDescription(e.target.value)} value={description} className='border border-slate-500 p-2 rounded-md' type="text" placeholder='Topic Description' />


      <button type='submit' className='bg-blue-700 hover:bg-blue-900 text-white py-3 px-1 w-1/3 rounded-md'>Add Topic</button>
    </form>
  )
}

export default page

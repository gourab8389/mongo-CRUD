
"use client"

 import React, { useEffect, useState } from 'react';
import RemoveBtn from './RemoveBtn';
import Link from 'next/link';
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/topics', {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
    return { topics: [] };
  }
}

const TopicsList = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchTopics = async () => {
      const data = await getTopics();
      setTopics(data.topics);
    };
    fetchTopics();
  }, []);

  return (
    <div>
      {topics.map((topic) => (
        <div key={topic._id} className='p-4 border border-slate-400 my-3 flex justify-between gap-5 rounded-md items-start'>
          <div className="">
            <h2 className='font-bold text-2xl'>  {topic.title}</h2>
            <div className="">{topic.description}</div>
          </div>
          <div className="flex gap-2">
            <RemoveBtn id={topic._id} />
            <Link href={`editTopic/${topic._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TopicsList;





// or





// import React from 'react'
// import RemoveBtn from './RemoveBtn'
// import Link from 'next/link'
// import { HiPencilAlt } from "react-icons/hi";

// const getTopic = async () => {
//   try {
//     const res = await fetch('http://localhost:3000/api/topics', {
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error("Failed to fetch topics");
//     }
//     return res.json();
//   } catch (error) {
//     console.log("Error loading topics: ", error);
//   }
// }

// export default async function TopicsList() {

//   const { topics } = await getTopic();



//   return (
//     <>
//       {topics.map(t => (
//         <div className='p-4 border border-slate-400 my-3 flex justify-between gap-5 rounded-md items-start'>
//           <div className="">
//             <h2 className='font-bold text-2xl'>{t.title}</h2>
//             <div className="">{t.description}</div>
//           </div>
//           <div className="flex gap-2">
//             <RemoveBtn />
//             <Link href={`editTopic/${t._id}`}>
//               <HiPencilAlt size={24} />
//             </Link>
//           </div>
//         </div>
//       ))}
//     </>
//   )
// }


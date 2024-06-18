"use client";

import { useRouter } from 'next/navigation';
import React from 'react';
import { HiOutlineTrash } from 'react-icons/hi';

const RemoveBtn = ({ id }) => {
  const router = useRouter();

  const removeTopic = async () => {
    const confirmed = confirm("Are you sure you want to delete this topic?");
    if (confirmed) {
      try {
        const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
          method: "DELETE",
        });

        if (res.ok) {
          console.log("Topic deleted successfully.");
          router.refresh();
        } else {
          console.error("Failed to delete the topic.");
        }
      } catch (error) {
        console.error("An error occurred while deleting the topic:", error);
      }
    }
  };

  return (
    <button onClick={removeTopic} className='text-red-400'>
      <HiOutlineTrash size={24} />
    </button>
  );
};

export default RemoveBtn;

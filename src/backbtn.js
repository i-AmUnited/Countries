import React from 'react'
import { useNavigate } from 'react-router-dom';

function Back() {
    const navigate = useNavigate();
  return (
    <div className='cursor-pointer grid gap-5 ' onClick={() => navigate(-1)}>
        &larr;
        Back
    </div>
  )
}

export default Back
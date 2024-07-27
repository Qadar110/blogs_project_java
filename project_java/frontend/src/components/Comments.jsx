import axios from 'axios'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

const Comments = ({ post_id }) => {
    const [comments,setComments] = useState([])
    const [error,setError] = useState(false)
    useEffect(()=>{
      async function fetchComments(){
        const res = await axios.get(`http://localhost:8080/api/comments/${post_id}`).catch(()=>{
          setError(true)
        })
        const data = await res.data
        setComments(data)
      }
      toast.promise(fetchComments(), {
        loading: "Fetching comments",
      });
    },[])
    
  return (
  <ul class="space-y-4">
    {comments.map((comment) => (
      <li key={comment.id} class="bg-white w-full rounded-lg shadow-md p-2">
        <div class="flex justify-between items-start">
          <p class="text-gray-700">{comment.comment}</p>
        </div>
      </li>
    ))}
  </ul>
  )
}

export default Comments
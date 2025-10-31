import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletePost, fetchPosts } from '../features/posts/Posts'

const Posts = () => {
    const dispatch = useDispatch()
    const {isLoading , posts ,error} = useSelector((state => state.posts))
    useEffect(() =>{
        dispatch(fetchPosts())
    },[dispatch])

    const handleDelete = (id) =>{
      dispatch(deletePost(id))
    }
  return (
    <div className='flex flex-wrap gap-4 justify-center items-start'>
       { isLoading && <h3>Loading...</h3>}
       {error && <h4>{error}</h4>}
       {posts && posts.map((post , index) =>{
        return <article key={index} className="flex w-[500px] flex-col bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition-shadow duration-300">
  <h5 className="text-xl font-semibold text-indigo-700 mb-3 border-b border-indigo-100 pb-2">
    {post.title}
  </h5>
  <p className="text-gray-700 leading-relaxed mt-2">
    {post.body}
  </p>
  <button onClick={() =>handleDelete(post.id)} className='bg-red-200 rounded-2xl p-2 cursor-pointer'>Delete</button>
</article>
       })}
    </div>
  )
}

export default Posts
// //"use client"
// import Link from 'next/link'
// import React, { useState } from 'react'
// import type { GetServerSideProps } from 'next';
// import nextConfig from '@/next.config';
// type Blog = {
//   title: string
//   content: string,
//   date:string,
//   slug:string,
//   summary:string
// }

// // interface BlogPageProps {
// //   blogs: Blog[];
// // }

// export const getBlogs = (async () => {
//   // Fetch data from external API
//   const apiHost = nextConfig.env?.apiHost ?? '';
//   const res = await fetch(`${apiHost}/api/blogs`, {cache: 'no-store'})
//   const blogs: Blog[] = await res.json()
//   // Pass data to the page via props
//   return blogs;
// })

// const Page = async() => {
//   const blogs = await getBlogs();
//   // const [blogList, setBlogList] = useState(blogs);
//   return (
//     <main className='my-8'>
//       <div className="flex flex-col gap-4 items-center">
//         {blogs.map(blog => (
//           <div key={blog.slug} className="blog w-1/2">
//             <Link href={`/blogpost/${blog.slug}`}>
//               <h3 className="text-xl font-bold">{blog.title}</h3>
//             </Link>
//             <p className="text-lg text-justify">{blog.summary}</p>
//           </div>
//         ))}

//       </div>
//     </main>
//  )
// }

// export default Page

import Blogs from '@/components/Blogs'
import React from 'react'

function page() {
  return (
    <Blogs />
  )
}

export default page
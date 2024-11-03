

import React, { useEffect, useState } from 'react';
import nextConfig from '@/next.config';
interface BlogPageProps {
  params: {
    slug: string;
  };
}
type Blog = {
  title: string
  content: string,
  date:string,
  slug:string,
  summary:string
}
export async function getBlog(slug: string) {
  // Fetch data from external API
  const apiHost = nextConfig.env?.apiHost ?? '';
  const res = await fetch(`${apiHost}/api/getblog?slug=${slug}`, {cache: 'no-store'})
  const blog: Blog = await res.json()
  // Pass data to the page via props
  return blog;
}


const Page =  async ({ params }: BlogPageProps)  => {
  const { slug } = await params;
  const blog = await getBlog(slug);
//   const [blog, setBlog] = useState<any>(null);
//  // const router = useRouter();
  // useEffect(() => {
  //   params.then(({ slug }) => {
  //     setSlug(slug);
  //   });
  //    // console.log(slug)
  //   //  setSlug(params.slug);
  // }, [params]);

//   useEffect(() => {
//     if(!slug) return;
//    // console.log("slug:" +slug);
//    // let slug = router.query;
//     fetch(`/api/getblog?slug=${slug}`)
//       .then(res => res.json())
//       .then(data => {
//         console.log(data);
//         setBlog(data);
//       });
//   }, [slug]);

  return (
    <main className='w-1/2 mx-auto'>
      <div className="flex flex-col gap-4 items-center my-8">
        {blog ? (
          <>
            <h1 className='text-3xl'>{blog.title}</h1>
            <hr />
            <p>{blog.content}</p>
          </>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </main>
  );
};

export default Page;
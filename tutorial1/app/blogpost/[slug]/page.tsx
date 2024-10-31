import React from 'react'

interface Params {
  slug: string;
}
const Page = async ({ params }:  { params: Params }) => {
  const { slug } = await params;

  return <main className=' w-1/2 mx-auto'>
    <div className="flex flex-col gap-4 items-center">
      <h1 className='text-3xl'>Title of Blog: {slug}</h1>
      <hr  />
      <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci ipsam tempore quos rem laboriosam. Possimus, atque repellat. Repudiandae dolor officia expedita neque dolores, nihil sit exercitationem, ut sunt quisquam maxime.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae cumque iure voluptate odit magnam, recusandae optio doloribus, amet adipisci commodi alias quasi ducimus quae, quis tempore et hic? Tenetur veritatis, quis provident suscipit qui repudiandae aliquam, soluta, consequatur reprehenderit facilis amet consectetur! Illum, nihil adipisci.</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus eaque ad ab excepturi veniam ullam non nostrum quam, quas beatae similique incidunt necessitatibus nemo illo aperiam iste harum eligendi eveniet.</p>
    </div>
  </main>;
};

export default Page;
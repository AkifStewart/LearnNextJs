import React from 'react'

interface Params {
  slug: string;
}
const Page = async ({ params }:  { params: Params }) => {
  const { slug } = await params;

  return <div>My Post: {slug}</div>;
};

export default Page;
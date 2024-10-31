import Link from 'next/link'
import React from 'react'

function Blog() {
  return (
    <main >
      <div className="flex flex-col gap-4 items-center">
      <div className="blog">
        <Link href="/blogpost/blog-1">
        <h3 className="text-xl font-bold">Blog 1</h3></Link>
        <p className="text-lg">Blog 1 description</p>
      </div>
      <div className="blog">
        <h3 className="text-xl font-bold">Blog 2</h3>
        <p className="text-lg">Blog 2 description</p>
      </div>
      <div className="blog">
        <h3 className="text-xl font-bold">Blog 3</h3>
        <p className="text-lg">Blog 3 description</p>
      </div>
      <div className="blog">
        <h3 className="text-xl font-bold">Blog 4</h3>
        <p className="text-lg">Blog 4 description</p>
      </div>
      </div>
    </main>
  )
}

export default Blog
import { NextRequest, NextResponse } from 'next/server'
import * as fs from 'fs'

export async function GET()  {
  try {
    const files = await fs.promises.readdir("blogdata");
    let blogs = [];
    for (let i = 0; i < files.length; i++) {
      let blog = await fs.promises.readFile("blogdata/" + files[i], "utf8");
      blogs.push(JSON.parse(blog));
    }
    return NextResponse.json(blogs);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to read directory' }, { status: 500 });
  }
}
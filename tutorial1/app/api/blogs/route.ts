import { NextRequest, NextResponse } from 'next/server'
import * as fs from 'fs'

export async function GET()  {
  try {
    const files = await fs.promises.readdir("blogdata");
    return NextResponse.json(files);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to read directory' }, { status: 500 });
  }
}
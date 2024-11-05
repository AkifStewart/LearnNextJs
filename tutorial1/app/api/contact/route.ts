import type { NextRequest, NextResponse } from 'next/server'
import * as fs from 'fs'

export async function POST(req: NextRequest) {
  //if (req.method === 'POST') {
    // Process a POST request
    const body = await req.json();
    await fs.promises.writeFile(`contactdata/${body.name}.json`, JSON.stringify(body));
    return new Response(JSON.stringify({ message: 'Thanks for contacting us, we will get back to you soon' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
}
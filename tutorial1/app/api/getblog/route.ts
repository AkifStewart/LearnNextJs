import { NextResponse, NextRequest } from "next/server";
import * as fs from 'fs';

export async function GET(request: NextRequest) {
    const url = new URL(request.url);
    const query = url.searchParams;
    var slug = query.get('slug');
    console.log(query.get('slug'));
    const jsonData = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf8');
    try {
        const data = JSON.parse(jsonData);
        return NextResponse.json(data);
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: 'Failed to parse JSON' }, { status: 500 });
    }
//return NextResponse.json({ message: 'workign' });
}
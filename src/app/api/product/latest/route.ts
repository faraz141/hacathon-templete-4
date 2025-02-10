import { NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client';

export async function GET() {
  try {
    // Fetch data from Sanity
    const products = await client.fetch(
      '*[_type == "latestProduct"]{id, name, "imgUrl": img.asset->url, price, oldPrice}',
      {},
      { cache: 'no-store' },
    );
    return NextResponse.json(products); // Return the data
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 },
    );
  }
}

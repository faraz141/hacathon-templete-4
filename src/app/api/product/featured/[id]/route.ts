import { NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client';

export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;

  try {
    // Fetch product details from Sanity based on ID
    const product = await client.fetch(
      `*[_type == "featuredProduct" && id == $id]{id, name, "imgUrl": img.asset->url, price, oldPrice, description, categories, tags}[0]`,
      { id },
      { cache: 'no-cache' },
    );

    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json(product); // Return the product data
  } catch (error) {
    console.error('Failed to fetch product details:', error);
    return NextResponse.json(
      { error: 'Failed to fetch product details' },
      { status: 500 },
    );
  }
}

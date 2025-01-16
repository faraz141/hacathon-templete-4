import { type SchemaTypeDefinition } from 'sanity';
import ShopGrid from '../shopGrid';
import LatestProduct from '../latestProduct';
import TrandingProduct from '../trendingProduct';
import featuredProduct from '../featuredProduct';
import Product from '../schema/product';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ShopGrid, LatestProduct, TrandingProduct, featuredProduct, Product],
};

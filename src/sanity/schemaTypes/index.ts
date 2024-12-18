import { type SchemaTypeDefinition } from 'sanity';
import ShopGrid from '../shopGrid';
import LatestProduct from '../latestProduct';
import TrandingProduct from '../trendingProduct';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ShopGrid, LatestProduct, TrandingProduct],
};

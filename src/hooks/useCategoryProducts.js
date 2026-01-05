import { useQuery } from '@tanstack/react-query';
import { fetchProductsByCategory } from '../api/products';


export const useCategoryProducts = (category) => {
  return useQuery({
    queryKey: ['products', category],
    queryFn: () => fetchProductsByCategory(category),
    enabled: !!category, 
    staleTime: 1000 * 60 * 5, 
    gcTime: 1000 * 60 * 30, 
  })}

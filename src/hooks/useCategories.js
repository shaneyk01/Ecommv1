import { useQuery } from '@tanstack/react-query';
import { fetchCategories } from '../api/products';


export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
    staleTime: 1000 * 60 * 60, 
    gcTime: 1000 * 60 * 120, 
  });
};

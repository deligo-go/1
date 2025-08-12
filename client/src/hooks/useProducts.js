import { useQuery } from '@tanstack/react-query';
import { apiGet } from '../lib/api';

export function useProducts(filters = {}) {
  const queryParams = new URLSearchParams();
  
  if (filters.search) queryParams.set('search', filters.search);
  if (filters.category) queryParams.set('category', filters.category);
  if (filters.status) queryParams.set('status', filters.status);
  if (filters.featured !== undefined) queryParams.set('featured', filters.featured.toString());
  if (filters.tags && filters.tags.length > 0) queryParams.set('tags', filters.tags.join(','));

  const queryString = queryParams.toString();
  const url = `/api/products${queryString ? `?${queryString}` : ''}`;

  return useQuery({
    queryKey: ['/api/products', filters],
    queryFn: () => apiGet(url),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

export function useProduct(id) {
  return useQuery({
    queryKey: ['/api/products', id],
    queryFn: () => apiGet(`/api/products/${id}`),
    enabled: !!id,
  });
}

export function useProductBySlug(slug) {
  return useQuery({
    queryKey: ['/api/products/slug', slug],
    queryFn: () => apiGet(`/api/products/slug/${slug}`),
    enabled: !!slug,
  });
}

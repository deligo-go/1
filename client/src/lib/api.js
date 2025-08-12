import { 
  products, 
  categories, 
  users, 
  getCategoryBySlug, 
  getProductBySlug, 
  getProductById, 
  getCategoryById,
  getProductsByCategory,
  getFeaturedProducts,
  getPublishedProducts,
  searchProducts
} from '../data/staticData.js';

// Mock API functions that return static data
export async function apiRequest(method, url, data) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  
  // Parse URL and extract path and query params
  const [path, queryString] = url.split('?');
  const params = new URLSearchParams(queryString || '');
  
  // Route handling
  if (path === '/api/products') {
    if (method === 'GET') {
      const filters = {
        search: params.get('search') || undefined,
        category: params.get('category') || undefined,
        status: params.get('status') || undefined,
        featured: params.get('featured') ? params.get('featured') === 'true' : undefined,
        tags: params.get('tags') ? params.get('tags').split(',') : undefined,
      };
      return searchProducts(filters);
    }
    throw new Error('Method not supported');
  }
  
  if (path.startsWith('/api/products/')) {
    const segments = path.split('/');
    if (method === 'GET') {
      if (segments[3] === 'slug' && segments[4]) {
        // Get product by slug
        const product = getProductBySlug(segments[4]);
        if (!product) {
          throw new Error('404: Product not found');
        }
        return product;
      } else if (segments[3]) {
        // Get product by ID
        const product = getProductById(segments[3]);
        if (!product) {
          throw new Error('404: Product not found');
        }
        return product;
      }
    } else if (method === 'DELETE' && segments[3]) {
      // Delete product by ID
      const productIndex = products.findIndex(p => p.id === segments[3]);
      if (productIndex === -1) {
        throw new Error('404: Product not found');
      }
      
      // Remove product from array
      const deletedProduct = products.splice(productIndex, 1)[0];
      return { success: true, message: 'Product deleted successfully', product: deletedProduct };
    }
    throw new Error('Method not supported');
  }
  
  if (path === '/api/categories') {
    if (method === 'GET') {
      return categories;
    }
    throw new Error('Method not supported');
  }
  
  if (path.startsWith('/api/categories/')) {
    if (method === 'GET') {
      const segments = path.split('/');
      if (segments[3] === 'slug' && segments[4]) {
        // Get category by slug
        const category = getCategoryBySlug(segments[4]);
        if (!category) {
          throw new Error('404: Category not found');
        }
        return category;
      } else if (segments[3]) {
        // Get category by ID
        const category = getCategoryById(segments[3]);
        if (!category) {
          throw new Error('404: Category not found');
        }
        return category;
      }
    }
    throw new Error('Method not supported');
  }
  
  if (path === '/api/auth/login') {
    if (method === 'POST') {
      // Simple mock login - just check if credentials are provided
      if (!data || !data.username || !data.password) {
        throw new Error('400: Username and password required');
      }
      
      // Find user (in a real app, you'd verify password hash)
      const user = users.find(u => u.username === data.username);
      if (!user) {
        throw new Error('401: Invalid credentials');
      }
      
      // Return user without password
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    }
    throw new Error('Method not supported');
  }
  
  if (path === '/api/auth/register') {
    if (method === 'POST') {
      // Simple mock registration
      if (!data || !data.username || !data.email || !data.password) {
        throw new Error('400: Username, email and password required');
      }
      
      // Check if user already exists
      const existingUser = users.find(u => u.username === data.username || u.email === data.email);
      if (existingUser) {
        throw new Error('400: User already exists');
      }
      
      // Create new user
      const newUser = {
        id: 'user-' + Date.now(),
        username: data.username,
        email: data.email,
        password: 'hashed_' + data.password, // In real app, hash the password
        role: 'user',
        createdAt: new Date(),
      };
      
      users.push(newUser);
      
      // Return user without password
      const { password, ...userWithoutPassword } = newUser;
      return userWithoutPassword;
    }
    throw new Error('Method not supported');
  }
  
  if (path === '/api/contact') {
    if (method === 'POST') {
      // Simple mock contact form submission
      if (!data || !data.name || !data.email || !data.message) {
        throw new Error('400: Name, email and message required');
      }
      
      // In a real app, this would save to database or send email
      console.log('Contact form submission:', data);
      
      // Return success response
      return {
        success: true,
        message: 'Your request has been submitted successfully',
        id: 'request-' + Date.now()
      };
    }
    throw new Error('Method not supported');
  }
  
  // For any other endpoints, return empty data or throw error
  throw new Error(`404: Endpoint ${path} not found`);
}

export const apiGet = (url) => apiRequest('GET', url);
export const apiPost = (url, data) => apiRequest('POST', url, data);
export const apiPut = (url, data) => apiRequest('PUT', url, data);
export const apiDelete = (url) => apiRequest('DELETE', url);

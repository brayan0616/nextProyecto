const API = process.env.NEXT_PUBLIC_API_URL;

const endpoints = {
  auth: {
    login: `${API}/api/v1/auth/login`,
    profile: `${API}/api/v1/auth/profile`,
  },
  categories: {
    getCategories: `${API}/api/v1/categories`,
    createCategory: `${API}/api/v1/categories`,
    getCateogry: (id) => `${API}/api/v1/categories/${id}`,
    updateCategory: (id) => `${API}/api/v1/categories/${id}`,
    categoryProducts: (id) => `${API}/api/v1/categories/${id}/products`,
  },
  files: {
    upload: `${API}/api/v1/files/upload`,
    get: (filename) => `${API}/api/v1/files/${filename}`,
  },
  products: {
    getProducts: (limit, offset) => `${API}/api/v1/products?limit=${limit}&offset=${offset}`,
    getProduct: (id) => `${API}/api/v1/products/${id}`,
    addProducts: `${API}/api/v1/products`,
    updateProducts: (id) => `${API}/api/v1/products/${id}`,
    deleteProducts: (id) => `${API}/api/v1/products/${id}`,
  },
  customer: {
    getCustomers: `${API}/api/v1/customers`,
    addCustomers: `${API}/api/v1/customers`,
    getCustomer: (id) => `${API}/api/v1/customers/${id}`,
    updateCustomers: (id) => `${API}/api/v1/customers/${id}`,
    deleteCustomers: (id) => `${API}/api/v1/customers/${id}`,
  },
  provider: {
    getProviders: `${API}/api/v1/providers`,
    createProvider: `${API}/api/v1/providers`,
    getProvider: (id) => `${API}/api/v1/providers/${id}`,
    updateProvider: (id) => `${API}/api/v1/providers/${id}`,
    providerProducts: (id) => `${API}/api/v1/providers/${id}/products`,
  },
  inventory: {
    getInventories: `${API}/api/v1/inventories`,
    createInventory: `${API}/api/v1/inventories`,
    getInventory: (id) => `${API}/api/v1/inventories/${id}`,
    updateInventory: (id) => `${API}/api/v1/inventories/${id}`,
    deleteInventory: (id) => `${API}/api/v1/inventories/${id}`,
  }
};

export default endpoints;

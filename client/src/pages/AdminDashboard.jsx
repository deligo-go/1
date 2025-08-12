import { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'wouter';
import { useQuery, useMutation } from '@tanstack/react-query';
import { apiGet, apiPost, apiPut, apiDelete } from '../lib/api';
import { queryClient } from '../lib/queryClient';
import { useAuth } from '../hooks/useAuth';
import { useToast } from '../hooks/use-toast';

export default function AdminDashboard() {
  const { section } = useParams();
  const [, setLocation] = useLocation();
  const { user } = useAuth();
  const { toast } = useToast();
  const [activeSection, setActiveSection] = useState(section || 'overview');
  const [showProductModal, setShowProductModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  // Redirect if not admin
  useEffect(() => {
    if (user && user.role !== 'admin') {
      setLocation('/');
      toast({
        title: "Access Denied",
        description: "You don't have permission to access the admin dashboard.",
        variant: "destructive",
      });
    }
  }, [user, setLocation, toast]);

  const { data: products, isLoading: productsLoading } = useQuery({
    queryKey: ['/api/products'],
    queryFn: () => apiGet('/api/products'),
  });

  const { data: categories } = useQuery({
    queryKey: ['/api/categories'],
    queryFn: () => apiGet('/api/categories'),
  });

  const deleteProductMutation = useMutation({
    mutationFn: (id) => apiDelete(`/api/products/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/products'] });
      toast({
        title: "Success",
        description: "Product deleted successfully.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to delete product.",
        variant: "destructive",
      });
    }
  });

  const handleDeleteProduct = (product) => {
    if (window.confirm(`Are you sure you want to delete "${product.title}"?`)) {
      deleteProductMutation.mutate(product.id);
    }
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setShowProductModal(true);
  };

  const handleCreateProduct = () => {
    setEditingProduct(null);
    setShowProductModal(true);
  };

  const sidebarItems = [
    { id: 'overview', label: 'Dashboard', icon: '📊' },
    { id: 'products', label: 'Products', icon: '📦' },
    { id: 'users', label: 'Users', icon: '👥' },
    { id: 'analytics', label: 'Analytics', icon: '📈' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ];

  const styles = {
    dashboardLayout: {
      display: 'grid',
      gridTemplateColumns: '280px 1fr',
      minHeight: 'calc(100vh - 80px)',
      gap: 0,
    },
    sidebar: {
      background: 'var(--color-surface)',
      borderRight: '1px solid rgba(255,255,255,0.1)',
      padding: 'var(--spacing-lg)',
      position: 'sticky',
      top: '80px',
      height: 'fit-content',
    },
    sidebarTitle: {
      fontSize: '20px',
      fontWeight: 600,
      marginBottom: 'var(--spacing-lg)',
      paddingBottom: 'var(--spacing-md)',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
    },
    sidebarNav: {
      listStyle: 'none',
      padding: 0,
    },
    sidebarItem: {
      marginBottom: 'var(--spacing-xs)',
    },
    sidebarLink: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--spacing-sm)',
      padding: 'var(--spacing-sm) var(--spacing-md)',
      color: 'var(--color-text-primary)',
      textDecoration: 'none',
      borderRadius: 'var(--radius-sm)',
      transition: 'var(--transition-fast)',
      cursor: 'pointer',
    },
    sidebarLinkActive: {
      background: 'var(--gradient-primary)',
    },
    sidebarLinkHover: {
      background: 'rgba(255,255,255,0.05)',
    },
    content: {
      padding: 'var(--spacing-lg)',
      overflow: 'auto',
    },
    contentHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 'var(--spacing-xl)',
      paddingBottom: 'var(--spacing-lg)',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
    },
    contentTitle: {
      fontSize: '32px',
      fontWeight: 700,
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: 'var(--spacing-lg)',
      marginBottom: 'var(--spacing-2xl)',
    },
    statCard: {
      background: 'var(--color-surface)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--spacing-lg)',
      border: '1px solid rgba(255,255,255,0.1)',
      textAlign: 'center',
    },
    statIcon: {
      fontSize: '36px',
      marginBottom: 'var(--spacing-md)',
    },
    statValue: {
      fontSize: '28px',
      fontWeight: 700,
      marginBottom: 'var(--spacing-sm)',
    },
    statLabel: {
      opacity: 0.7,
      fontSize: '14px',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      background: 'var(--color-surface)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      border: '1px solid rgba(255,255,255,0.1)',
    },
    tableHeader: {
      background: 'rgba(255,255,255,0.05)',
    },
    tableCell: {
      padding: 'var(--spacing-md)',
      textAlign: 'left',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
      verticalAlign: 'middle',
    },
    productImage: {
      width: '50px',
      height: '40px',
      objectFit: 'cover',
      borderRadius: 'var(--radius-sm)',
      marginRight: 'var(--spacing-sm)',
    },
    productInfo: {
      display: 'flex',
      alignItems: 'center',
    },
    productTitle: {
      fontWeight: 600,
      marginBottom: '2px',
    },
    productDescription: {
      fontSize: '12px',
      opacity: 0.7,
    },
    actionButtons: {
      display: 'flex',
      gap: 'var(--spacing-sm)',
    },
    actionButton: {
      padding: '4px 8px',
      fontSize: '12px',
      borderRadius: 'var(--radius-sm)',
      border: 'none',
      cursor: 'pointer',
      transition: 'var(--transition-fast)',
    },
    editButton: {
      background: 'var(--color-accent-2)',
      color: 'white',
    },
    deleteButton: {
      background: '#ef4444',
      color: 'white',
    },
    emptyState: {
      textAlign: 'center',
      padding: 'var(--spacing-3xl)',
    }
  };

  const mobileStyles = `
    @media (max-width: 768px) {
      .dashboard-layout {
        grid-template-columns: 1fr;
      }
      .sidebar {
        position: relative;
        top: auto;
        border-right: none;
        border-bottom: 1px solid rgba(255,255,255,0.1);
      }
      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      .content-header {
        flex-direction: column;
        align-items: stretch;
        gap: var(--spacing-md);
      }
      .action-buttons {
        flex-direction: column;
      }
    }
  `;

  if (!user || user.role !== 'admin') {
    return (
      <div className="container" style={{ padding: 'var(--spacing-3xl) 0', textAlign: 'center' }}>
        <div className="card">
          <h1>Access Denied</h1>
          <p style={{ marginTop: 'var(--spacing-md)' }}>
            You don't have permission to access this page.
          </p>
          <Link href="/" className="btn-primary" style={{ marginTop: 'var(--spacing-lg)' }}>
            Go to Homepage
          </Link>
        </div>
      </div>
    );
  }

  const renderOverview = () => {
    const stats = [
      { icon: '📦', value: products?.length || 0, label: 'Total Products' },
      { icon: '✅', value: products?.filter(p => p.status === 'published').length || 0, label: 'Published' },
      { icon: '📝', value: products?.filter(p => p.status === 'draft').length || 0, label: 'Drafts' },
      { icon: '⭐', value: products?.filter(p => p.featured).length || 0, label: 'Featured' },
    ];

    return (
      <>
        <div style={styles.statsGrid} className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} style={styles.statCard}>
              <div style={styles.statIcon}>{stat.icon}</div>
              <div style={styles.statValue} className="text-gradient">
                {stat.value}
              </div>
              <div style={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="card">
          <h3 style={{ marginBottom: 'var(--spacing-lg)' }}>Recent Activity</h3>
          <p style={{ opacity: 0.7 }}>
            Welcome to your admin dashboard. From here you can manage products, view analytics, and configure settings.
          </p>
        </div>
      </>
    );
  };

  const renderProducts = () => {
    if (productsLoading) {
      return <div className="loading-spinner"></div>;
    }

    if (!products || products.length === 0) {
      return (
        <div className="card" style={styles.emptyState}>
          <h3>No Products Found</h3>
          <p style={{ opacity: 0.7, marginTop: 'var(--spacing-md)' }}>
            Start by creating your first product.
          </p>
          <button 
            onClick={handleCreateProduct}
            className="btn-primary"
            style={{ marginTop: 'var(--spacing-lg)' }}
          >
            Create Product
          </button>
        </div>
      );
    }

    return (
      <div className="card" style={{ padding: 0 }}>
        <table style={styles.table}>
          <thead style={styles.tableHeader}>
            <tr>
              <th style={styles.tableCell}>Product</th>
              <th style={styles.tableCell}>Category</th>
              <th style={styles.tableCell}>Status</th>
              <th style={styles.tableCell}>Created</th>
              <th style={styles.tableCell}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td style={styles.tableCell}>
                  <div style={styles.productInfo}>
                    {product.images && product.images[0] ? (
                      <img 
                        src={product.images[0]} 
                        alt={product.title}
                        style={styles.productImage}
                      />
                    ) : (
                      <div 
                        style={{
                          ...styles.productImage,
                          background: 'var(--color-surface)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '12px'
                        }}
                      >
                        No Image
                      </div>
                    )}
                    <div>
                      <div style={styles.productTitle}>{product.title}</div>
                      <div style={styles.productDescription}>
                        {product.shortDescription?.substring(0, 50)}...
                      </div>
                    </div>
                  </div>
                </td>
                <td style={styles.tableCell}>
                  {product.category?.name || 'Uncategorized'}
                </td>
                <td style={styles.tableCell}>
                  <span className={`status-badge status-${product.status}`}>
                    {product.status === 'published' ? 'Published' : 'Draft'}
                  </span>
                </td>
                <td style={styles.tableCell}>
                  {new Date(product.createdAt).toLocaleDateString()}
                </td>
                <td style={styles.tableCell}>
                  <div style={styles.actionButtons} className="action-buttons">
                    <button
                      style={{ ...styles.actionButton, ...styles.editButton }}
                      onClick={() => handleEditProduct(product)}
                    >
                      Edit
                    </button>
                    <button
                      style={{ ...styles.actionButton, ...styles.deleteButton }}
                      onClick={() => handleDeleteProduct(product)}
                      disabled={deleteProductMutation.isPending}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const renderComingSoon = () => (
    <div className="card" style={{ textAlign: 'center', padding: 'var(--spacing-3xl)' }}>
      <h3>Coming Soon</h3>
      <p style={{ opacity: 0.7, marginTop: 'var(--spacing-md)' }}>
        This section is under development and will be available soon.
      </p>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return renderOverview();
      case 'products':
        return renderProducts();
      case 'users':
      case 'analytics':
      case 'settings':
        return renderComingSoon();
      default:
        return renderOverview();
    }
  };

  return (
    <>
      <style>{mobileStyles}</style>
      
      <div style={styles.dashboardLayout} className="dashboard-layout">
        {/* Sidebar */}
        <div style={styles.sidebar} className="sidebar">
          <h2 style={styles.sidebarTitle} className="text-gradient">
            Admin Dashboard
          </h2>
          
          <ul style={styles.sidebarNav}>
            {sidebarItems.map((item) => (
              <li key={item.id} style={styles.sidebarItem}>
                <div
                  style={{
                    ...styles.sidebarLink,
                    ...(activeSection === item.id ? styles.sidebarLinkActive : {})
                  }}
                  onClick={() => {
                    setActiveSection(item.id);
                    setLocation(`/admin/${item.id}`);
                  }}
                  onMouseEnter={(e) => {
                    if (activeSection !== item.id) {
                      Object.assign(e.target.style, styles.sidebarLinkHover);
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== item.id) {
                      e.target.style.background = 'transparent';
                    }
                  }}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div style={styles.content}>
          <div style={styles.contentHeader} className="content-header">
            <h1 style={styles.contentTitle} className="text-gradient">
              {sidebarItems.find(item => item.id === activeSection)?.label || 'Dashboard'}
            </h1>
            
            {activeSection === 'products' && (
              <button onClick={handleCreateProduct} className="btn-primary">
                Add New Product
              </button>
            )}
          </div>

          {renderContent()}
        </div>
      </div>

      {/* Product Modal would go here - simplified for now */}
      {showProductModal && (
        <div className="modal-overlay" onClick={() => setShowProductModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="text-gradient">
                {editingProduct ? 'Edit Product' : 'Create New Product'}
              </h2>
              <button 
                className="modal-close" 
                onClick={() => setShowProductModal(false)}
              >
                ×
              </button>
            </div>
            <div style={{ padding: 'var(--spacing-lg)', textAlign: 'center' }}>
              <p>Product editor coming soon...</p>
              <button 
                onClick={() => setShowProductModal(false)}
                className="btn-secondary"
                style={{ marginTop: 'var(--spacing-lg)' }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

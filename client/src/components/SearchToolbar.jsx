import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { apiGet } from '../lib/api';

export default function SearchToolbar({ filters, onFilterChange }) {
  const [searchInput, setSearchInput] = useState(filters.search || '');
  
  const { data: categories } = useQuery({
    queryKey: ['/api/categories'],
    queryFn: () => apiGet('/api/categories')
  });

  // Debounce search input
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onFilterChange({ search: searchInput });
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [searchInput, onFilterChange]);

  const availableTags = ['AI', 'Security', 'VR', 'Mobile', 'Enterprise', 'SaaS', 'FinTech'];

  const handleTagClick = (tag) => {
    const newTags = filters.tags.includes(tag) 
      ? filters.tags.filter(t => t !== tag)
      : [...filters.tags, tag];
    onFilterChange({ tags: newTags });
  };

  const styles = {
    toolbar: {
      display: 'flex',
      gap: 'var(--spacing-md)',
      marginBottom: 'var(--spacing-2xl)',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 'var(--spacing-lg)',
      background: 'var(--color-surface)',
      borderRadius: 'var(--radius-md)',
      border: '1px solid rgba(255,255,255,0.1)',
    },
    searchSection: {
      display: 'flex',
      gap: 'var(--spacing-md)',
      flexWrap: 'wrap',
      alignItems: 'center',
      flex: 1,
    },
    searchInput: {
      background: 'var(--color-bg-primary)',
      border: '1px solid rgba(255,255,255,0.2)',
      borderRadius: 'var(--radius-md)',
      padding: '12px 16px',
      color: 'white',
      fontSize: '16px',
      width: '300px',
      maxWidth: '100%',
      transition: 'var(--transition-fast)',
    },
    filterSelect: {
      background: 'var(--color-bg-primary)',
      border: '1px solid rgba(255,255,255,0.2)',
      borderRadius: 'var(--radius-md)',
      padding: '12px 16px',
      color: 'white',
      fontSize: '16px',
      cursor: 'pointer',
      minWidth: '150px',
    },
    tagChips: {
      display: 'flex',
      gap: 'var(--spacing-sm)',
      flexWrap: 'wrap',
    },
    tagChip: {
      background: 'rgba(163,75,110,0.2)',
      border: '1px solid var(--color-accent-1)',
      borderRadius: '20px',
      padding: '6px 12px',
      fontSize: '14px',
      cursor: 'pointer',
      transition: 'var(--transition-fast)',
      userSelect: 'none',
    },
    tagChipActive: {
      background: 'var(--color-accent-1)',
    },
    sortSelect: {
      background: 'var(--color-bg-primary)',
      border: '1px solid rgba(255,255,255,0.2)',
      borderRadius: 'var(--radius-md)',
      padding: '12px 16px',
      color: 'white',
      fontSize: '16px',
      cursor: 'pointer',
      minWidth: '130px',
    },
    clearButton: {
      background: 'none',
      border: '1px solid rgba(255,255,255,0.3)',
      borderRadius: 'var(--radius-sm)',
      padding: '8px 12px',
      color: 'rgba(255,255,255,0.7)',
      fontSize: '12px',
      cursor: 'pointer',
      transition: 'var(--transition-fast)',
    }
  };

  const mobileStyles = `
    @media (max-width: 768px) {
      .search-toolbar {
        flex-direction: column;
        align-items: stretch;
      }
      .search-section {
        flex-direction: column;
        align-items: stretch;
      }
      .search-input {
        width: 100%;
      }
    }
  `;

  const hasFilters = filters.search || filters.category || filters.tags.length > 0;

  return (
    <>
      <style>{mobileStyles}</style>
      <div style={styles.toolbar} className="search-toolbar">
        <div style={styles.searchSection} className="search-section">
          <input 
            type="search" 
            style={styles.searchInput}
            className="search-input"
            placeholder="Search products..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            aria-label="Search products"
          />
          
          <select 
            style={styles.filterSelect}
            value={filters.category || ''}
            onChange={(e) => onFilterChange({ category: e.target.value })}
            aria-label="Filter by category"
          >
            <option value="">All Categories</option>
            {categories?.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>

          <select 
            style={styles.sortSelect}
            value={filters.sort || 'newest'}
            onChange={(e) => onFilterChange({ sort: e.target.value })}
            aria-label="Sort products"
          >
            <option value="newest">Newest</option>
            <option value="popular">Most Popular</option>
            <option value="rating">Highest Rated</option>
            <option value="name">Name A-Z</option>
          </select>
        </div>
        
        <div style={styles.tagChips}>
          {availableTags.map(tag => (
            <span 
              key={tag}
              style={{
                ...styles.tagChip,
                ...(filters.tags.includes(tag) ? styles.tagChipActive : {})
              }}
              onClick={() => handleTagClick(tag)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleTagClick(tag);
                }
              }}
            >
              {tag} {filters.tags.includes(tag) && '✓'}
            </span>
          ))}
        </div>

        {hasFilters && (
          <button 
            style={styles.clearButton}
            onClick={() => {
              setSearchInput('');
              onFilterChange({ search: '', category: '', tags: [], sort: 'newest' });
            }}
            aria-label="Clear all filters"
          >
            Clear Filters
          </button>
        )}
      </div>
    </>
  );
}

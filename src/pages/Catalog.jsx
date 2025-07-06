import { useState, useEffect } from "react";
import { ref, get } from "firebase/database";
import { db } from "../firebase/config";
import ProductCard from "../components/ProductCard";
import { Search, Filter, Package } from "lucide-react";
import "./Catalog.css";

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [products, searchTerm, selectedCategory]);

  const loadProducts = async () => {
    try {
      setLoading(true);
      const productsRef = ref(db, "products");
      const snapshot = await get(productsRef);

      if (snapshot.exists()) {
        const productsData = Object.keys(snapshot.val()).map((key) => ({
          id: key,
          ...snapshot.val()[key],
        }));
        setProducts(productsData);
      }
    } catch (error) {
      console.error("Error loading products:", error);
      // Fallback to sample data if Firebase is not configured
    } finally {
      setLoading(false);
    }
  };

  const filterProducts = () => {
    let filtered = [...products];

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.desc.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    setFilteredProducts(filtered);
  };

  const categories = [
    { value: "", label: "Todas las categorías" },
    { value: "tabaco-liado", label: "Tabaco de liar" }, // Табак для самокруток
    { value: "cigarrillos", label: "Cigarrillos" }, // Сигареты
    { value: "puros", label: "Puros" }, // Сигары
    { value: "vapers", label: "Vapers / Desechables" }, // Вейпы
    { value: "e-liquids", label: "Líquidos para vapers" }, // Жидкости для вейпов
    { value: "filtros", label: "Filtros" }, // Фильтры
    { value: "papel", label: "Papel de fumar" }, // Бумага для самокруток
    { value: "mecheros", label: "Mecheros y encendedores" }, // Зажигалки
    { value: "accesorios", label: "Accesorios de fumador" }, // Аксессуары
  ];

  if (loading) {
    return (
      <div className="catalog-container">
        <div className="catalog-content">
          <div className="loading-spinner">
            <div className="spinner"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="catalog-container">
      <div className="catalog-content">
        {/* Hero Section */}
        <div className="hero-section">
          <h1 className="hero-title">Nuestros Productos Premium</h1>
          <p className="hero-subtitle">
            Descubre la mejor selección de tabacos artesanales de España
          </p>
        </div>

        {/* Filters */}
        <div className="filters-container">
          <div className="search-container">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="filter-container">
            <Filter className="filter-icon" size={20} />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="filter-select"
            >
              {categories.map((category) => (
                <option
                  key={category.value}
                  value={category.value}
                  className="filter-option"
                >
                  {category.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="empty-state">
            <Package className="empty-icon" />
            <h3 className="empty-title">No se encontraron productos</h3>
            <p className="empty-text">
              Intenta ajustar los filtros de búsqueda
            </p>
          </div>
        ) : (
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;

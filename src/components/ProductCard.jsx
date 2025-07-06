import { useState } from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const [imageError, setImageError] = useState(false);

  const getCategoryName = (category) => {
    const categories = {
      cigars: "Puros",
      pipe: "Tabaco de Pipa",
      cigarettes: "Cigarrillos",
      accessories: "Accesorios",
    };
    return categories[category] || category;
  };

  const getCategoryClass = (category) => {
    const classes = {
      cigars: "category-cigars",
      pipe: "category-pipe",
      cigarettes: "category-cigarettes",
      accessories: "category-accessories",
    };
    return classes[category] || "category-default";
  };

  return (
    <div className="product-card">
      {/* Stock badge */}
      <div className="stock-badge">Stock: {product.stock}</div>

      {/* Product image */}
      <div className="product-image-container">
        <img
          src={
            imageError
              ? "https://via.placeholder.com/300x200/1f2937/6b7280?text=Imagen+No+Disponible"
              : product.image
          }
          alt={product.name}
          className="product-image"
          onError={() => setImageError(true)}
        />
        <div className="image-overlay" />
      </div>

      {/* Product info */}
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>

        <p className="product-description">{product.desc}</p>

        <div className="product-footer">
          <div className="product-price">{product.price.toFixed(2)} €</div>

          <span
            className={`product-category ${getCategoryClass(product.category)}`}
          >
            {getCategoryName(product.category)}
          </span>
        </div>

        {/* Hover effect overlay */}
        <div className="hover-overlay" />
      </div>
    </div>
  );
};

export default ProductCard;

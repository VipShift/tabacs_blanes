import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { ref, push, update, remove, get } from "firebase/database";
import { db } from "../firebase/config";
import {
  Plus,
  Edit,
  Trash2,
  Save,
  X,
  Package,
  DollarSign,
  Hash,
  Image as ImageIcon,
  FileText,
} from "lucide-react";
import "./Admin.css";

const Admin = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    desc: "",
    price: "",
    category: "",
    stock: "",
    image: "",
  });

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
      return;
    }

    loadProducts();
  }, [currentUser, navigate]);

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
      } else {
        setProducts([]);
      }
    } catch (error) {
      console.error("Error loading products:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      desc: "",
      price: "",
      category: "",
      stock: "",
      image: "",
    });
    setEditingProduct(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.desc ||
      !formData.price ||
      !formData.category ||
      !formData.stock ||
      !formData.image
    ) {
      alert("Пожалуйста, заполните все поля");
      return;
    }

    try {
      const productData = {
        ...formData,
        price: parseFloat(formData.price),
        stock: parseInt(formData.stock),
        createdAt: new Date(),
      };

      if (editingProduct) {
        const productRef = ref(db, `products/${editingProduct.id}`);
        await update(productRef, productData);
        alert("Продукт успешно обновлен");
      } else {
        const productsRef = ref(db, "products");
        await push(productsRef, productData);
        alert("Продукт успешно добавлен");
      }

      resetForm();
      loadProducts();
    } catch (error) {
      console.error("Ошибка при сохранении продукта:", error);
      alert("Ошибка при сохранении продукта");
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      desc: product.desc,
      price: product.price.toString(),
      category: product.category,
      stock: product.stock.toString(),
      image: product.image,
    });
  };

  const handleDelete = async (productId) => {
    if (window.confirm("Вы уверены, что хотите удалить этот продукт?")) {
      try {
        const productRef = ref(db, `products/${productId}`);
        await remove(productRef);
        alert("Продукт успешно удален");
        loadProducts();
      } catch (error) {
        console.error("Ошибка при удалении продукта:", error);
        alert("Ошибка при удалении продукта");
      }
    }
  };

  const categories = [
    { value: "", label: "Все категории" },
    { value: "tabaco-liado", label: "Табак для самокруток" },
    { value: "cigarrillos", label: "Сигареты" },
    { value: "puros", label: "Сигары" },
    { value: "vapers", label: "Вейпы" },
    { value: "e-liquids", label: "Жидкости для вейпов" },
    { value: "filtros", label: "Фильтры" },
    { value: "papel", label: "Бумага для самокруток" },
    { value: "mecheros", label: "Зажигалки" },
    { value: "accesorios", label: "Аксессуары" },
  ];

  if (loading) {
    return (
      <div className="admin-container">
        <div className="admin-content">
          <div className="loading-spinner">
            <div className="spinner"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-container">
      <div className="admin-content">
        <div className="admin-header">
          <div>
            <h1 className="admin-title">Админпанель</h1>
            <p className="admin-subtitle">Управление товарами</p>
          </div>
          <div className="admin-user-info">
            <p className="user-welcome">
              Добро пожаловать, {currentUser?.email}
            </p>
          </div>
        </div>

        <div className="admin-grid">
          <div className="admin-form-section">
            <h2 className="form-title">
              <Plus size={24} className="form-icon" />
              {editingProduct ? "Редактировать товар" : "Добавить товар"}
            </h2>

            <form onSubmit={handleSubmit} className="admin-form">
              <div className="form-row">
                <div className="form-field">
                  <label className="form-label">
                    <Package size={16} className="label-icon" />
                    Название товара
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Например: Cohiba Behike"
                    required
                  />
                </div>

                <div className="form-field">
                  <label className="form-label">
                    <DollarSign size={16} className="label-icon" />
                    Цена (€)
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    step="0.01"
                    className="form-input"
                    placeholder="45.00"
                    required
                  />
                </div>
              </div>

              <div className="form-field">
                <label className="form-label">
                  <FileText size={16} className="label-icon" />
                  Описание
                </label>
                <textarea
                  name="desc"
                  value={formData.desc}
                  onChange={handleInputChange}
                  rows="3"
                  className="form-textarea"
                  placeholder="Подробное описание товара..."
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label className="form-label">Категория</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="form-select"
                    required
                  >
                    <option value="">Выбрать категорию</option>
                    {categories.map((category) => (
                      <option
                        key={category.value}
                        value={category.value}
                        className="select-option"
                      >
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-field">
                  <label className="form-label">
                    <Hash size={16} className="label-icon" />
                    Остаток на складе
                  </label>
                  <input
                    type="number"
                    name="stock"
                    value={formData.stock}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="10"
                    required
                  />
                </div>
              </div>

              <div className="form-field">
                <label className="form-label">
                  <ImageIcon size={16} className="label-icon" />
                  URL изображения
                </label>
                <input
                  type="url"
                  name="image"
                  value={formData.image}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="https://example.com/image.jpg"
                  required
                />
                {formData.image && (
                  <img
                    src={formData.image}
                    alt="preview"
                    style={{ maxWidth: "150px", marginTop: "10px" }}
                  />
                )}
              </div>

              <div className="form-buttons">
                <button type="submit" className="btn-primary">
                  <Save size={16} className="btn-icon" />
                  {editingProduct ? "Обновить" : "Добавить"}
                </button>

                {editingProduct && (
                  <button
                    type="button"
                    onClick={resetForm}
                    className="btn-secondary"
                  >
                    <X size={16} className="btn-icon" />
                    Отмена
                  </button>
                )}
              </div>
            </form>
          </div>

          <div className="products-section">
            <h2 className="products-title">Товары ({products.length})</h2>

            {products.length === 0 ? (
              <div className="empty-products">
                <Package className="empty-icon" />
                <p>Каталог пуст</p>
              </div>
            ) : (
              <div className="products-list">
                {products.map((product) => (
                  <div key={product.id} className="product-item">
                    <div className="product-content">
                      <div className="product-info">
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-description">{product.desc}</p>
                        <div className="product-details">
                          <span className="product-price">
                            {product.price} €
                          </span>
                          <span className="product-stock">
                            Остаток: {product.stock}
                          </span>
                          <span className="product-category">
                            {product.category}
                          </span>
                        </div>
                      </div>

                      <div className="product-actions">
                        <button
                          onClick={() => handleEdit(product)}
                          className="btn-edit"
                        >
                          <Edit size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(product.id)}
                          className="btn-delete"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;

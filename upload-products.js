// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, addDoc } from "firebase/firestore";

// // Конфигурация Firebase (используйте ваши данные)
// const firebaseConfig = {
//   apiKey: "AIzaSyCF4lZinGH0CGg4WPnGiC-Wi1tDgoDATQU",
//   authDomain: "estanc-roca.firebaseapp.com",
//   projectId: "estanc-roca",
//   storageBucket: "estanc-roca.firebasestorage.app",
//   messagingSenderId: "226639438006",
//   appId: "1:226639438006:web:8bca64dcc0a3263c3d4617",
// };

// // Инициализация Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// // Данные товаров для загрузки
// const products = [
//   {
//     name: "Puro Cohiba Behike",
//     image: "https://images.unsplash.com/photo-1592156328697-ee8e5d56b91e?w=400",
//     desc: "Puro premium cubano con sabor intenso y aroma excepcional",
//     price: 45,
//     category: "cigars",
//     stock: 10,
//     createdAt: new Date(),
//   },
//   {
//     name: "Tabaco de Pipa Dunhill",
//     image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400",
//     desc: "Mezcla clásica inglesa con notas de vainilla y especias",
//     price: 28,
//     category: "pipe",
//     stock: 25,
//     createdAt: new Date(),
//   },
//   {
//     name: "Cigarrillos Marlboro Gold",
//     image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400",
//     desc: "Cigarrillos suaves con filtro premium",
//     price: 8.5,
//     category: "cigarettes",
//     stock: 50,
//     createdAt: new Date(),
//   },
//   {
//     name: "Encendedor Zippo Clásico",
//     image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400",
//     desc: "Encendedor de fuelle con diseño clásico americano",
//     price: 35,
//     category: "accessories",
//     stock: 15,
//     createdAt: new Date(),
//   },
//   {
//     name: "Puro Romeo y Julieta",
//     image: "https://images.unsplash.com/photo-1592156328697-ee8e5d56b91e?w=400",
//     desc: "Puro cubano con sabor suave y aroma floral",
//     price: 32,
//     category: "cigars",
//     stock: 20,
//     createdAt: new Date(),
//   },
//   {
//     name: "Tabaco de Pipa Peterson",
//     image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400",
//     desc: "Mezcla irlandesa con notas de miel y especias",
//     price: 22,
//     category: "pipe",
//     stock: 30,
//     createdAt: new Date(),
//   },
//   {
//     name: "Cigarrillos Lucky Strike",
//     image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400",
//     desc: "Cigarrillos con sabor fuerte y auténtico",
//     price: 7.5,
//     category: "cigarettes",
//     stock: 40,
//     createdAt: new Date(),
//   },
//   {
//     name: "Cenicero de Cristal",
//     image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400",
//     desc: "Cenicero elegante de cristal tallado",
//     price: 18,
//     category: "accessories",
//     stock: 12,
//     createdAt: new Date(),
//   },
// ];

// // Функция для загрузки товаров
// async function uploadProducts() {
//   try {
//     console.log("Начинаем загрузку товаров в Firebase...");

//     for (const product of products) {
//       const docRef = await addDoc(collection(db, "products"), product);
//       console.log(`Товар "${product.name}" загружен с ID: ${docRef.id}`);
//     }

//     console.log("✅ Все товары успешно загружены в Firebase!");
//   } catch (error) {
//     console.error("❌ Ошибка при загрузке товаров:", error);
//   }
// }

// // Запускаем загрузку
// uploadProducts();

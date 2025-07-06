# Tabacos España - React App

Una aplicación moderna para tienda de tabacos con React, Vite, Firebase y Tailwind CSS.

## 🚀 Características

- **React 18** con Vite para desarrollo rápido
- **Firebase** para autenticación y base de datos
- **Tailwind CSS** para estilos modernos
- **React Router** para navegación
- **Lucide React** para iconos
- **Diseño responsive** para móviles y desktop
- **Glassmorphism** y efectos modernos
- **Sistema de administración** protegido

## 📦 Instalación

1. **Clona el repositorio:**

```bash
git clone <tu-repositorio>
cd tabacos-react
```

2. **Instala las dependencias:**

```bash
npm install
```

3. **Configura Firebase:**

   - Ve a [Firebase Console](https://console.firebase.google.com/)
   - Crea un nuevo proyecto
   - Habilita Authentication y Firestore
   - Copia las credenciales a `src/firebase/config.js`

4. **Ejecuta en desarrollo:**

```bash
npm run dev
```

## 🔧 Configuración de Firebase

1. **Crea un proyecto en Firebase Console**
2. **Habilita Authentication** con Email/Password
3. **Habilita Firestore Database**
4. **Actualiza `src/firebase/config.js`:**

```javascript
const firebaseConfig = {
  apiKey: "tu-api-key",
  authDomain: "tu-proyecto.firebaseapp.com",
  projectId: "tu-proyecto",
  storageBucket: "tu-proyecto.appspot.com",
  messagingSenderId: "123456789",
  appId: "tu-app-id",
};
```

5. **Crea un usuario admin:**
   - Ve a Authentication > Users
   - Añade un usuario con email y contraseña
   - Usa estas credenciales para acceder al admin

## 🚀 Despliegue en Firebase

1. **Instala Firebase CLI:**

```bash
npm install -g firebase-tools
```

2. **Inicia sesión en Firebase:**

```bash
firebase login
```

3. **Inicializa Firebase:**

```bash
firebase init hosting
```

4. **Construye la aplicación:**

```bash
npm run build
```

5. **Despliega:**

```bash
firebase deploy
```

## 📱 Uso

### Para Clientes:

- **Catálogo:** Navega por los productos
- **Búsqueda:** Filtra por categoría o nombre
- **Contacto:** Envía mensajes
- **Sobre Nosotros:** Conoce la empresa

### Para Administradores:

- **Login:** `/login` con credenciales Firebase
- **Admin Panel:** `/admin` para gestionar productos
- **Añadir/Editar/Eliminar** productos
- **Gestión de stock** y precios

## 🎨 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Header.jsx      # Navegación principal
│   └── ProductCard.jsx # Tarjeta de producto
├── contexts/           # Contextos de React
│   └── AuthContext.jsx # Autenticación
├── firebase/           # Configuración Firebase
│   └── config.js       # Credenciales
├── pages/              # Páginas de la aplicación
│   ├── Catalog.jsx     # Catálogo principal
│   ├── About.jsx       # Sobre nosotros
│   ├── Contact.jsx     # Contacto
│   ├── Login.jsx       # Login admin
│   └── Admin.jsx       # Panel admin
├── App.jsx             # Componente principal
└── index.css           # Estilos globales
```

## 🔐 Credenciales de Demo

- **Email:** admin@tabacosespana.es
- **Contraseña:** admin123

## 🛠️ Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run preview` - Vista previa de producción
- `npm run lint` - Linting del código

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📞 Soporte

Para soporte, envía un email a info@tabacosespana.es

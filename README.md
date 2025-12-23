# 🌸 NubeAlgodón – React Ecommerce (Coderhouse)

Este proyecto forma parte de la **Segunda Pre-entrega del curso de React** en Coderhouse.  
El objetivo fue construir las bases de un e-commerce real utilizando **componentes reutilizables**, **React Router**, **TailwindCSS**, y consumo de APIs externas.

---

## 🧩 Funcionalidades desarrolladas

### ✔ Navegación con React Router
- Ruta principal `/`
- Ruta por categoría: `/category/:categoryId`
- Ruta por producto: `/product/:productId`
- **Ruta 404 personalizable:** `path="*"`

### ✔ Barra de navegación (NavBar)
- Marca **Nube Algodón**
- Menú de categorías dinámico
- Menú hamburguesa para mobile
- Navegación con `<Link>`
- Integración con **CartWidget**

### ✔ CartWidget
- Ícono SVG profesional
- Badge de cantidad (estático por ahora)

### ✔ Cards de Productos (ProductCardPastel)
- Diseño personalizado con **TailwindCSS**
- Badge “OFERTA” automático según descuento
- Imágenes responsivas
- Botón “Ver más” que navega a la vista del producto
- Estilo pastel inspirado en la estética de la marca

### ✔ Consumo de API externa (DummyJSON)
Se consumieron productos reales desde:  
➡️ https://dummyjson.com/products

Se utilizan datos como:
- título  
- precio  
- descripción  
- imágenes  
- stock  
- rating  
- descuento  

### ✔ ItemListContainer + ItemList + Item
- Render dinámico de productos
- Mapeo de las cards personalizadas
- Navegación a detalle al hacer clic

### ✔ Vista de producto (ItemDetail)
- Imagen principal + miniaturas clickeables
- Información completa (precio, marca, rating, stock)
- Sección de reviews
- Integración con ItemCount
- Totalmente responsive

### ✔ Contador de unidades (ItemCount)
- Botones + y -
- Previene superar stock
- Envía la cantidad seleccionada a ItemDetail
- Botón “Agregar al Carrito” centrado y estilizado

---

## 🛠️ Tecnologías utilizadas

- **React + Vite**
- **React Router DOM**
- **JavaScript ES6**
- **TailwindCSS**
- **NPM**
- **Fetch API / Promesas**
- **Diseño responsive**

---

## 🚀 Cómo ejecutar el proyecto (Modo de uso)

1. **Cloná el repositorio:**
   ```bash
   git clone <url-del-repositorio>

2. **Cloná el repositorio:**
   ```bash
   cd nubealgodon-react-frontend

3. **Instalá dependencias:**
   ```bash
   npm install

4. **Ejecutalo en modo desarrollo:**
   ```bash
   npm run dev

5. **Abrí en el navegador::**
   ```bash
   http://localhost:5173
----










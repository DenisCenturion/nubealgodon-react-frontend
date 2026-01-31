# 🌸 NubeAlgodón – React Ecommerce (Coderhouse)

Este proyecto forma parte de la **Entrega del curso de React** en Coderhouse.  
El objetivo fue construir las bases de un e-commerce real utilizando **componentes reutilizables**, **React Router**, **TailwindCSS**, y uso de Firebase como persistencia de datos.

---

## 🧩 Funcionalidades desarrolladas

### ✔ Navegación con React Router
- Ruta principal `/`
- Ruta por categoría: `/category/:categoryId`
- Ruta por producto: `/product/:productId`
- Ruta del carrito: `/cart`
- Ruta para checkout: `/checkout`
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


### ✔ ItemListContainer + ItemList + Item
- Render dinámico de productos
- Mapeo de las cards personalizadas
- Navegación a detalle al hacer clic

### 🛒 Carrito de compras – CartContext

El estado global del carrito se gestiona mediante **React Context**, utilizando un `CartContext` y su correspondiente `CartProvider`.

## Responsabilidades del CartContext
- Almacenar los productos agregados al carrito
- Manejar variantes por producto (id + talle + color)
- Calcular cantidades y totales
- Exponer funciones reutilizables a toda la aplicación

## Funcionalidades implementadas
- Agregar productos al carrito
- Incrementar cantidad si el producto ya existe
- Eliminar productos individuales
- Vaciar el carrito completo
- Calcular:
  - cantidad total de unidades
  - subtotal
  - total de la compra

👉 El Context **no contiene lógica de UI**, solo lógica de negocio y estado.

## Funciones expuestas por el Context
- `addToCart(item)`
- `removeFromCart(itemKey)`
- `clearCart()`
- `getTotalQuantity()`
- `getSubtotal()`
- `totalPrice()`



### 🧠 Product Detail Page (PDP) – Arquitectura y Diseño

La PDP (Product Detail Page) representa la vista más importante del e-commerce, donde el usuario analiza un producto y decide su compra.

En este proyecto, la PDP está implementada en el componente ItemDetail y fue desacoplada en componentes hijos, cada uno con una responsabilidad clara.

El objetivo de esta arquitectura es:

1. Mejorar la mantenibilidad

2. Facilitar la escalabilidad

3. Permitir una futura integración con backend real

4. Separar lógica de negocio de presentación


```bash
🧩 Estructura general de la PDP
ItemDetail (PDP)
│
├── ProductGallery
│   └── Galería de imágenes del producto
│
├── ProductHeader
│   ├── Título del producto
│   ├── Rating (estrellas + puntuación)
│   └── Precio + descuento (responsive)
│
├── ProductOptions
│   ├── Selector de talle
│   ├── Selector de color
│   └── Stock disponible por variante
│
├── ProductMeta
│   ├── Stock general (API)
│   └── Marca
│
├── ProductPurchase
│   ├── Selector de cantidad
│   ├── Validaciones de compra
│   └── Acción “Agregar al carrito”
│
├── ProductDescription
│   └── Descripción del producto
│
├── ProductReviews
│   └── Opiniones de usuarios (reviews)
│
├── RelatedProductsContainer
│   └── Productos relacionados
│
└── SideCart
    └── Drawer lateral del carrito (estado local)
```

### 🎯 Responsabilidad de ItemDetail

ItemDetail actúa como componente contenedor (smart component).

Es responsable de:

- manejar el estado global de la PDP

- definir reglas de negocio

- calcular stock por variante

- coordinar la comunicación entre componentes

- Estados principales

- selectedSize

- selectedColor

- quantity

- variantStock

- sideOpen

## 💳 Proceso de compra (Checkout)

El proyecto incluye un flujo de compra **mínimo y funcional**, orientado a cumplir con los requisitos de la entrega.

### Flujo implementado
1. El usuario revisa su carrito
2. Confirma la compra
3. Completa un formulario básico de contacto
4. Se genera una orden en Firestore
5. Se muestra una pantalla de confirmación con el ID de la compra

### CheckoutContainer
Actúa como componente contenedor del proceso de compra.

Responsabilidades:
- Obtener los productos del carrito
- Calcular el total
- Enviar la orden a Firestore
- Manejar estados de carga y éxito

### CheckoutForm
Formulario simple que solicita:
- Nombre
- Email
- Teléfono

👉 No se implementan pagos reales ni validaciones avanzadas, ya que el objetivo es **simular el flujo completo de compra**.

---
## ☁️ Órdenes y persistencia en Firestore

Al confirmar una compra, el sistema genera un documento en la colección `orders` de Firestore.

### Estructura de la orden
Cada orden contiene:

- Datos del comprador
- Productos comprados
- Cantidad por producto
- Total de la compra
- Fecha de creación (serverTimestamp)

Ejemplo de estructura:

```json
{
  "buyer": {
    "name": "Denis Centurion",
    "email": "deniscenturion@gmail.com",
    "phone": "01123534678"
  },
  "items": [
    {
      "id": "KQJQevIlc4fghaqHKVYm",
      "title": "Maya enteriza",
      "price": 16000,
      "quantity": 4
    }
  ],
  "total": 64000,
  "createdAt": "timestamp"
}
```
---

### 👉 Los componentes hijos NO calculan lógica de negocio, solo reciben props.

🧩 Componentes y contratos (Props)

### ProductGallery

```bash
ProductGallery {
  images: string[]
}
```

Responsabilidad: visualización de imágenes del producto.


### ProductHeader
```bash
ProductHeader {
  title: string
  price: number
  discountPercentage: number
  rating: number
  reviews: Review[]
}
```


Responsabilidad: mostrar información principal del producto
(título, precio, descuento y rating), adaptándose a desktop y mobile.


### ProductOptions
```bash
ProductOptions {
  selectedSize: string | null
  selectedColor: string | null
  onSelectSize: (size: string) => void
  onSelectColor: (color: string) => void
  variantStock: number | null
}
```

Responsabilidad: permitir elegir la variante del producto
(talle + color) y mostrar stock disponible.

👉 No calcula stock, solo lo muestra.


### ProductMeta
```bash
ProductMeta {
  stock: number
  brand: string
}
```

Responsabilidad: mostrar metadata del producto (información secundaria).


### ProductPurchase
```bash
ProductPurchase {
  stock: number
  quantity: number
  onQuantityChange: (qty: number) => void
  canAdd: boolean
  hintText: string
  onAddToCart: () => void
}
```

Responsabilidad: manejar la acción de compra:

- selección de cantidad

- validaciones visuales

- botón de agregar al carrito


### ProductDescription
```bash
ProductDescription {
  description: string
}
```

Responsabilidad: contenido descriptivo del producto.


### ProductReviews
```bash
ProductReviews {
  reviews: Review[]
}
```

Responsabilidad: feedback social (opiniones de usuarios).

🧠 Decisiones de arquitectura

La lógica de negocio vive en ItemDetail

Los componentes hijos son presentacionales o semi-presentacionales

Se evita el uso de estado duplicado



Backend real (Spring Boot, etc.)

## 🔄 Flujo de datos en la Product Detail Page (PDP)

La PDP sigue el principio de **flujo de datos unidireccional** de React.

### 1. Entrada de datos
ItemDetail recibe el producto desde la API (DummyJSON) a través del contenedor.
Ningún componente hijo realiza llamadas a la API.

### 2. Estado centralizado
ItemDetail mantiene el estado principal de la vista:
- selectedSize
- selectedColor
- quantity
- variantStock (derivado)
- sideOpen

### 3. Propagación de datos
El estado se pasa a los componentes hijos mediante props.
Los componentes hijos no contienen lógica de negocio.

### 4. Comunicación inversa
Los componentes hijos notifican acciones mediante callbacks:
- selección de talle
- selección de color
- cambio de cantidad
- intención de compra

### 5. Reglas de negocio
ItemDetail es el único responsable de:
- calcular stock por variante
- validar si la compra es posible
- decidir la apertura del carrito
- coordinar la interacción entre componentes

### 6. Acción de compra
ProductPurchase emite la intención de compra.
ItemDetail decide si la acción es válida y abre el SideCart.

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

## 📌 Alcance del proyecto

Este proyecto representa una **entrega académica** enfocada en:

- Arquitectura de componentes
- Flujo de datos en React
- Manejo de estado global
- Integración con Firebase

No se incluyen en esta etapa:
- Autenticación real de usuarios
- Pagos reales
- Gestión de envíos
- Administración de stock post-compra

Estas funcionalidades quedan planteadas como **evolución futura del proyecto**, el cual continuará desarrollándose como e-commerce real.

## 🧩 Pendientes / TODO (alcance de la entrega)

## 🚧 Próximos pasos / Roadmap del proyecto

El proyecto **NubeAlgodón** continuará evolucionando más allá de esta entrega académica.  
A continuación se enumeran posibles mejoras y funcionalidades planificadas para futuras iteraciones:

### 🧑‍💻 Usuario y autenticación
- Registro e inicio de sesión de usuarios
- Persistencia de órdenes por usuario
- Historial de compras

### 📦 Stock y productos
- Actualización de stock luego de cada compra
- Validaciones de stock en tiempo real
- Administración de productos desde panel privado
- Cuidados del producto dependiendo la composicion del mismo
- El buscador implementa filtrado en frontend sobre productos obtenidos desde Firestore.
- La búsqueda avanzada o indexada será implementada en backend (Spring Boot + PostgreSQL).

### 💳 Proceso de compra
- Separación del checkout en pasos (datos, envío, pago, confirmación)
- Métodos de pago simulados o reales
- Confirmación de compra vía email

### 📐 Experiencia de usuario
- Guía de talles por categoría
- Mejoras de accesibilidad
- Animaciones y micro-interacciones
- Manejo avanzado de estados de carga y errores

### ⚙️ Backend real
- Migración del backend a **Spring Boot**
- Exposición de APIs REST documentadas (OpenAPI)
- Integración con base de datos relacional
- Seguridad y control de acceso

### 🖼️ Imagenes
- Migrar imágenes a servidor web en formato .webp
- Optimizar peso
- CDN
- Lazy loading
- Incorporar imágenes reales optimizadas para todos los productos  
  (actualmente se utilizan imágenes de referencia).


### 📄 Footer 
- Resolver y enlazar correctamente todos los links del **footer**  
  (secciones informativas, políticas, redes sociales, etc.).

### 📐 Guía de talles (Size Guide) – Diseño futuro

La guía de talles no se encuentra implementada en esta etapa del proyecto, pero fue diseñada conceptualmente como parte de la Product Detail Page (PDP).

### 🎯 Objetivo
Brindar asistencia al usuario para elegir el talle correcto según el tipo de producto.

### 🧠 Decisión de arquitectura

En esta versión:

- La guía de talles se considera **información de ayuda (UX)**
- No afecta stock, precio ni validaciones de compra
- No requiere backend en esta etapa

Por este motivo, se decidió:

👉 **Mantener la Size Guide como responsabilidad del frontend**, asociada a la categoría del producto.

### 🔮 Implementación futura (no incluida)

- Mostrar referencia de talles debajo del selector (estilo MercadoLibre)
- Soporte por categoría:
  - Remeras
  - Pijamas
  - Toallas
  - Mallas
- Posible migración a backend o CMS si:
  - los datos cambian dinámicamente
  - se requiere administración desde panel
  - hay variaciones por marca o región


Todos los puntos comentados en esta seccion son funcionalidades que fueron **identificadas conscientemente** y se dejan fuera del alcance de esta entrega, con el objetivo de mantener el foco en los requisitos del curso:

Estos puntos forman parte del roadmap del proyecto y serán abordados en etapas posteriores.


Estas funcionalidades **no forman parte del alcance de la entrega actual**, pero fueron consideradas dentro del diseño del proyecto para asegurar escalabilidad y mantenibilidad.

---



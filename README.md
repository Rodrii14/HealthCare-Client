# 🩺 Health Care – Aplicación de Registro y Seguimiento de Salud

Health Care es una aplicación web diseñada para *registrar y gestionar métricas de salud, llevar un **seguimiento del progreso, y ofrecer **recursos informativos* sobre hábitos saludables, alimentación y ejercicio (tipo blog).

La aplicación permite:

- Registrar métricas como:
  - Peso
  - Grasa corporal
  - Colesterol
  - Masa muscular
  - Presión arterial
  - Glucosa
- Consultar el *historial de registros*.
- Eliminar registros anteriores.
- Visualizar información y recursos para mejorar la salud.

---

## ✅ Requisitos previos

Antes de instalar y ejecutar la aplicación, es necesario contar con:

- *Node.js: versión **18.x o superior*  
- *npm* (incluido con Node) y/o *yarn* (opcional).
- *Navegador moderno* (Chrome, Edge, Firefox, etc.).
- Opcional pero recomendado:
  - *Editor de código* (VS Code, WebStorm, etc.)
  - *Git* para clonar el repositorio.

---

## 📦 Dependencias

Las dependencias del proyecto se gestionan a través de package.json.

### Dependencias principales (dependencies)

- *React y ecosistema*
  - react ^18.2.0  
  - react-dom ^18.2.0  
  - react-router-dom ^6.20.0  

- *Manejo de formularios*
  - react-hook-form ^7.48.2  

- *HTTP / API*
  - axios ^1.6.1  

- *Gráficas*
  - chart.js ^4.4.0  
  - react-chartjs-2 ^5.2.0  

- *Estilos*
  - tailwindcss ^3.3.5  
  - postcss ^8.4.31  
  - autoprefixer ^10.4.16  

- *Multimedia y componentes visuales*
  - react-icons ^4.11.0  
  - react-youtube ^10.1.0  
  - video-react ^0.16.0  

- *Variables de entorno*
  - dotenv ^16.3.1  

### Dependencias de desarrollo (devDependencies)

- *Herramientas de build y desarrollo*
  - vite ^4.4.5  
  - @vitejs/plugin-react ^4.0.3  

- *Tipado (soporte de types)*
  - @types/react ^18.2.15  
  - @types/react-dom ^18.2.7  

- *Linting / calidad de código*
  - eslint ^8.45.0  
  - eslint-plugin-react ^7.32.2  
  - eslint-plugin-react-hooks ^4.6.0  
  - eslint-plugin-react-refresh ^0.4.3  

- *Iconos adicionales*
  - @iconify/react ^4.1.1  

---

## 🛠️ Instalación y configuración

### 1. Clonar el repositorio

```bash
git clone https://github.com/Rodrii14/HealthCare-Client
cd HealthCare-Client
```

2. Instalar dependencias

Puedes usar npm o yarn.

Opción A: usando npm (recomendado)
```bash
npm install
```

Opción B: usando yarn

Si aún no tienes yarn instalado:
```bash
npm install --global yarn
```

Luego, dentro del proyecto:
```bash
yarn install
```

3. Configuración de Tailwind CSS

Si el proyecto no cuenta con los archivos de configuración de Tailwind, se pueden crear con:

Con npm:
```bash
npx tailwindcss init -p
```

O con yarn:

```bash
yarn tailwindcss init -p
```

Este comando generará:
```
tailwind.config.js

postcss.config.js
```

En tu archivo CSS principal (por ejemplo src/index.css o src/main.css), deben estar incluidas las directivas:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

🌐 Variables de entorno

La aplicación está basada en Vite, por lo que las variables de entorno deben comenzar con el prefijo VITE_.

En la raíz del proyecto, crear un archivo llamado .env (si aún no existe).

Agregar la siguiente variable:
```env
VITE_BASEURL=http://localhost:3500
```


Esta variable define la URL base de la API/backend.

Por defecto, está configurada para apuntar a un servidor local que corre en el puerto 3500.

Ejemplo para entorno de producción:
```env
VITE_BASEURL=https://api.mihealthcare.com
```


Después de modificar o agregar variables en el .env, se recomienda reiniciar el servidor de desarrollo.

🚀 Ejecución de la aplicación

Una vez instaladas las dependencias y configuradas las variables de entorno, puedes ejecutar la aplicación en modo desarrollo.

Con npm:
```bash
npm run dev
```


Con yarn:
```bash
yarn dev
```

Vite levantará un servidor local, normalmente en:
```bash
http://localhost:5173/
```

Abre esa URL en tu navegador para utilizar la aplicación Health Care.

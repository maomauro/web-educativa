# 📚 Plataforma Educativa de Videos

## Descripción General

La Plataforma Educativa de Videos es una aplicación web que permite a los usuarios buscar, visualizar y explorar videos educativos categorizados por temas como matemáticas, física, español, álgebra, electricidad, entre otros. El objetivo es ofrecer un portal intuitivo y accesible para el aprendizaje autodidacta, integrando videos de YouTube y gestionando usuarios propios.

---

## Objetivos

- Permitir el registro y autenticación de usuarios.
- Almacenar información de usuarios y búsquedas en una base de datos propia (MongoDB).
- Integrar la API pública de YouTube para búsquedas y reproducción de videos.
- Ofrecer una interfaz moderna, responsiva y fácil de usar.

---

## Arquitectura y Estructura de Carpetas

### Estructura General del Proyecto

```
web-educativa/
│
├── backend/         # Backend: API REST, lógica de negocio, conexión a BD
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── middlewares/
│   │   └── app.js
│   ├── .env
│   └── package.json
│
├── frontend/        # Frontend: Next.js, React, Tailwind
│   ├── components/
│   ├── pages/
│   ├── styles/
│   ├── utils/
│   ├── public/
│   ├── .env.local
│   └── package.json
│
├── doc/             # Documentación del proyecto
├── README.md        # Resumen y guía rápida
└── .gitignore
```

### Arquitectura General

- **Backend**: Node.js + Express, arquitectura tipo MVC, conexión a MongoDB, integración con la API de YouTube, endpoints para autenticación y gestión de usuarios.
- **Frontend**: Next.js + React, componentes reutilizables, páginas para login, registro, búsqueda y visualización de videos, consumo de la API propia y de YouTube.
- **Base de Datos**: MongoDB, modelos para usuarios y otros datos relevantes.
- **Integración Externa**: API de YouTube Data v3 para búsquedas y reproducción de videos.

---

## Tecnologías Utilizadas

| Área        | Tecnologías                                                                   |
|-------------|-------------------------------------------------------------------------------|
| **Frontend**| Next.js, React, Tailwind CSS, Axios, React-YouTube                            |
| **Backend** | Node.js, Express, MongoDB, Mongoose, YouTube Data API v3                      |
| **DevOps**  | Git, GitHub, Vercel (despliegue frontend)                                     |

---

## Flujo de Datos

```mermaid
flowchart TD
    A[Usuario] -->|Frontend| B[Next.js/React]
    B -->|Solicita datos| C[Backend Express API]
    C -->|Consulta| D[MongoDB]
    C -->|Consume| E[YouTube API]
    D -->|Responde| C
    E -->|Responde| C
    C -->|Responde| B
    B -->|Muestra datos| A
```

---

## Requisitos Técnicos

- Node.js y npm instalados
- MongoDB (local o en la nube)
- Clave de API de YouTube Data v3: AIzaSyBze_XXbVR5BNuphvSLWCMkI8vAD91uV9I
- Entorno de desarrollo recomendado: VSCode + Cursor

---

## Instrucciones Iniciales

1. Clonar el repositorio y posicionarse en la raíz del proyecto.
2. Instalar dependencias en `backend/` y `frontend/`.
3. Configurar archivos `.env` con las variables necesarias (MongoDB URI, claves de API, etc.).
4. Iniciar el backend y frontend.
5. Acceder a la aplicación desde el navegador.

---

## Contacto y Soporte

Para dudas o soporte, contactar al equipo de desarrollo o abrir un issue en el repositorio de GitHub.

--- 

---

## ¿Por qué es importante el archivo `.env`?

- Permite separar la configuración del código fuente.
- Facilita el cambio de entorno (desarrollo, pruebas, producción).
- Protege información sensible como claves de API y contraseñas.

---

## Variables recomendadas para tu proyecto

En la raíz de tu carpeta `backend/`, crea un archivo llamado `.env` con contenido similar a este:

```env
# Puerto del servidor backend
PORT=5000

# URI de conexión a MongoDB
MONGODB_URI=mongodb://localhost:27017/web-educativa

# Clave de API de YouTube Data v3
YOUTUBE_API_KEY=tu_clave_de_api_aqui

# (Opcional) JWT Secret para autenticación
JWT_SECRET=una_clave_secreta_segura
```

---

## Pasos para crear el archivo `.env`

1. Ve a la carpeta `backend/`.
2. Crea un archivo llamado `.env`.
3. Copia y pega las variables anteriores, ajustando los valores según tu entorno.

---

## Recuerda

- **Nunca subas el archivo `.env` a tu repositorio público.**  
  Asegúrate de que esté en tu `.gitignore`.
- Puedes agregar más variables según lo requiera tu proyecto.

---

¿Te gustaría que te ayude a crear el archivo `.env` y el archivo `.gitignore` para asegurarte de que no se suba al repositorio? 
Backend
Configuración y Ejecución
Sigue estos pasos para configurar y ejecutar el backend:

Paso 1: Instalar Dependencias
Clona el repositorio o descarga el proyecto.
Navega al directorio del backend en tu terminal.
Ejecuta el siguiente comando para instalar las dependencias necesarias:
npm install
Paso 2: Configuración de la Base de Datos
Crea una base de datos en MySQL o cualquier otra base de datos compatible.
Configura la conexión a la base de datos en el archivo config/Database.js:
Modifica las credenciales (usuario, contraseña, host, etc.) para que coincidan con tu configuración local de la base de datos.
Paso 3: Ejecutar el Backend
Una vez que las dependencias estén instaladas, ejecuta el siguiente comando para iniciar el servidor en modo de desarrollo:

npm run dev
Este comando ejecutará el backend en localhost en el puerto por defecto (puedes configurarlo en el archivo de configuración).



Estructura de Carpetas
A continuación se describe brevemente la estructura de carpetas de este proyecto:

/project-root
│
├── /backend                  # Directorio para el backend de la aplicación
│   ├── /config               # Archivos de configuración (conexión a la base de datos, etc.)
│   ├── /middleware           # Archivos de  apoyo  
│   ├── /controllers          # Controladores para la lógica de negocio (gestión de contactos)
│   ├── /models               # Modelos de la base de datos (estrucutras de datos)
│   ├── /routes               # Definición de rutas para las API
│   ├── /services             # Lógica de servicio (comunicación entre los controladores y modelos)
│   └── /utils                # Funciones utilitarias (como validaciones)
├── .env                      # Archivo de configuración para variables de entorno (por ejemplo, claves de API, puertos)
├── package.json              # Archivos de configuración de npm con dependencias del proyecto
└── README.md                 # Este archivo

Descripción de los Archivos/Directorios:
/backend: Contiene toda la lógica del servidor y la interacción con la base de datos.

/config: Contiene archivos de configuración, como la conexión a la base de datos.
/controllers: Los controladores gestionan las peticiones del cliente y ejecutan la lógica de negocio (creación, actualización, eliminación de contactos).
/models: Contiene los modelos de datos que interactúan con la base de datos.
/routes: Define las rutas API que el frontend puede llamar.
/services: Contiene la lógica que media entre los controladores y los modelos.
/utils: Funciones adicionales como validaciones, manejo de errores, etc.
package.json: Archivo que contiene las dependencias y los scripts de configuración de npm para el backend 


Accder a la documentación de API atravez de SWAGGER : ya compilado el proyecto y ejecutandose en el puerto establecido se puede acceder a la vista de Swagger atravez de http://localhost:3001/api-docs/#/
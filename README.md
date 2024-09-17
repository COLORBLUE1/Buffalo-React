# Fitness App

Bienvenido a **Fitness App**, una aplicación desarrollada en React con TypeScript que permite a los usuarios gestionar y seguir sus entrenamientos físicos. Este proyecto hace uso de diversas tecnologías modernas para ofrecer una experiencia de usuario fluida y completa.

## Tabla de Contenidos

- [Introducción](#introducción)
- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación y Configuración](#instalación-y-configuración)
- [Uso](#uso)
- [Autenticación](#autenticación)
- [Enrutamiento](#enrutamiento)
- [CRUD y Firestore](#crud-y-firestore)
- [Diseño Responsive](#diseño-responsive)
- [Deploy](#deploy)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Introducción

**Fitness App** es una plataforma que permite a los usuarios registrarse, iniciar sesión y gestionar sus entrenamientos físicos. La aplicación ofrece funcionalidades como inicio de sesión con Google y Facebook, enrutamiento dinámico, y un sistema completo de CRUD para la gestión de entrenamientos.

## Características

- **Autenticación**: Registro y inicio de sesión con correo electrónico, Google y Facebook.
- **CRUD en Firestore**: Agregar, listar, editar, eliminar y buscar entrenamientos.
- **Enrutamiento Dinámico**: Rutas públicas y privadas gestionadas con React Router.
- **Formulario y Validación**: Uso de Formik y Yup para el manejo y validación de formularios.
- **Diseño Responsive**: Interfaz adaptativa para diferentes dispositivos.
- **Integración de Carrusel**: Visualización y filtrado de retos disponibles.
- **Estadísticas de Entrenamientos**: Registro y visualización de resultados diarios.

## Tecnologías Utilizadas

- **React**: Librería para la construcción de interfaces de usuario.
- **Redux**: Gestión del estado global de la aplicación.
- **React Hooks**: Manejo de estados y efectos secundarios.
- **TypeScript**: Superset de JavaScript para un desarrollo más robusto.
- **Firebase**: Autenticación y base de datos en tiempo real.
- **Formik y Yup**: Manejo y validación de formularios.
- **React Router**: Gestión de enrutamiento.
- **CSS**: Estilos adaptativos y modernos.
- **Cloudinary**: Almacenamiento y gestión de imágenes.

## Instalación y Configuración

Para comenzar con el proyecto, sigue estos pasos:

1. **Clona el repositorio**:

    ```bash
    git clone https://github.com/tu_usuario/fitness-app.git
    ```

2. **Navega al directorio del proyecto**:

    ```bash
    cd fitness-app
    ```

3. **Instala las dependencias**:

    ```bash
    npm install
    ```

4. **Configura Firebase**: 
   
   Crea un archivo `.env` en la raíz del proyecto y agrega las credenciales de Firebase:

    ```
    REACT_APP_FIREBASE_API_KEY=your_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
    REACT_APP_FIREBASE_PROJECT_ID=your_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    REACT_APP_FIREBASE_APP_ID=your_app_id
    ```

5. **Inicia el servidor de desarrollo**:

    ```bash
    npm start
    ```

## Uso

Al iniciar la aplicación, podrás registrarte y acceder con tu cuenta de Google o Facebook. Explora el **Home** para ver y filtrar retos, crear nuevos entrenamientos y visualizar estadísticas.

## Autenticación

El sistema de autenticación utiliza Firebase para permitir el registro e inicio de sesión. Se admiten autenticaciones con correo electrónico, Google y Facebook.

## Enrutamiento

El enrutamiento dinámico es gestionado con React Router, permitiendo rutas públicas y privadas para distintas secciones de la aplicación.

## CRUD y Firestore

La aplicación utiliza Firestore para gestionar entrenamientos. Los usuarios pueden agregar, listar, editar, eliminar y buscar entrenamientos fácilmente.

## Diseño Responsive

La aplicación está diseñada para ser completamente responsive, adaptándose a diferentes tamaños de pantalla para una mejor experiencia de usuario en móviles, tabletas y escritorios.

## Deploy

La aplicación está desplegada en Firebase Hosting. Puedes acceder a la versión en vivo [aquí](https://tu_proyecto.web.app).

## Contribuciones

Si deseas contribuir al proyecto, por favor sigue estos pasos:

1. **Haz un fork del repositorio**.
2. **Crea una rama para tu característica** (`git checkout -b feature/mi-nueva-caracteristica`).
3. **Realiza tus cambios y haz commits**.
4. **Envía un pull request**.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

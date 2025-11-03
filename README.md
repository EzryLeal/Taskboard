# 🧠 TaskBoard con React y Redux Toolkit

Proyecto desarrollado como parte de la Evaluación Parcial II del curso de Programación Web en la Universidad Da Vinci.

## 📦 Instalación y configuración inicial

```powershell
cd C:\Users\leale
npx create-react-app taskboard
cd taskboard
npm install @reduxjs/toolkit react-redux
code .

#  Estructura del proyecto
⚠️ Durante la instalación se muestran advertencias sobre paquetes obsoletos. Se recomienda revisar react.dev/link/cra para alternativas más modernas.
src/
├── components/
│   ├── TaskForm.jsx
│   ├── TaskItem.jsx
│   └── TaskList.jsx
├── redux/
│   ├── actions.js
│   ├── reducer.js
│   └── store.js
├── App.jsx
├── index.js

## Cuestionario 

1. Explica brevemente qué es Redux y cuál es su principal ventaja frente al uso de useState.  
Redux es una biblioteca la cual sirve para manejar el estado global de una aplicación, especialmente en 
React. La principal ventaja frente a useState es permitir la centralización de todo el estado en un solo 
lugar, lo cual evita que se tenga que pasar datos entre muchos componentes (Porps), así se puede 
facilitar el control, la organización y la escalabilidad de un proyecto. 
2. Menciona los tres componentes fundamentales de Redux y su función.  
Los componentes fundamentales serian: Store, el cual se donde se guardan todos los estados de una 
aplicación. Actions son los objetos que describen los tipos de cambios que se requieren hacer en el 
estado. Reducers son las funciones que reciben las acciones y actualizan el estado según lo que se haya 
pedido. 
3. ¿Qué papel cumple el reducer dentro del flujo de Redux?  
El reducer es el encargado de modificar el estado, así como de recibir la acción que se despachó, es 
decir que este agrega o elimina una tarea, y así devuelve un nuevo estado actualizado, siendo como el 
“cerebro” que decide qué hacer con cada acción. 
4. ¿Qué diferencia hay entre una acción síncrona y una acción asíncrona en Redux Toolkit? 
La acción síncrona es la que se ejecuta inmediatamente y cambia el estado local sin esperar nada 
externo. Poro la acción asíncrona es la que se utiliza cuando hay que esperar una respuesta de un 
servidor o API. Redux Toolkit logra manejar con CreateAsyncThunk el cual permite controlar estados de 
carga, éxito y error es decir pending, fulfilled y rejected. 

Link Video  
https://www.youtube.com/watch?v=lPCypElxqiI


Dentro de la carpeta src/ se crean las siguientes subcarpetas y archivos:

# Primeros pasos con Create React App

Este proyecto se creó con [Create React App](https://github.com/facebook/create-react-app).

## Scripts disponibles

Se crea una nueva terminal en el proyecto, y se ejecuta:

### `npm start`

Inicia la aplicación en modo de desarrollo.

Abre (http://localhost:3000) para verla en el navegador.

La página se recargará al realizar cambios.

También se podrán ver los errores de lint en la consola.

### `npm test`

Iniciar el ejecutor de pruebas en modo interactivo.

Consulta la sección sobre [ejecución de pruebas](https://facebook.github.io/create-react-app/docs/running-tests) para obtener más información.

### `npm run build`

Compilar la aplicación para producción en la carpeta `build`.

Empaquetar correctamente React en modo producción y optimiza la compilación para obtener el mejor rendimiento.

La compilación se minimiza y los nombres de archivo incluyen los hashes.

¡La aplicación está lista para desplegarse!

Consulta la sección sobre (https://facebook.github.io/create-react-app/docs/deployment) para obtener más información.

### `npm run eject`

**Nota: esta operación es irreversible. Una vez que se ejecutes `eject`, no se podrà deshacer.**

Si no estás satisfecho con la herramienta de compilación y las opciones de configuración, puedes ejecutar `eject` en cualquier momento. Este comando eliminará la única dependencia de compilación de tu proyecto.

En su lugar, copiará todos los archivos de configuración y las dependencias transitivas (webpack, Babel, ESLint, etc.) directamente en tu proyecto para que tengas control total sobre ellos. Todos los comandos, excepto `eject`, seguirán funcionando, pero apuntarán a los scripts copiados para que puedas modificarlos. A partir de este punto, la responsabilidad recae en ti.

No es necesario que uses `eject`. El conjunto de funciones predefinido es adecuado para implementaciones pequeñas y medianas, y no deberías sentirte obligado a usar esta función. Sin embargo, entendemos que esta herramienta no sería útil si no pudieras personalizarla cuando estés listo.

## Más información

Puedes obtener más información en la [documentación de Create React App](https://facebook.github.io/create-react-app/docs/getting-started).

Para aprender React, consulta la [documentación de React](https://reactjs.org/).

### División de código

Esta sección se ha movido aquí: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Análisis del tamaño del paquete

Esta sección se ha movido aquí: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Creación de una aplicación web progresiva

Esta sección se ha movido aquí: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Avanzado Configuración

Esta sección se ha movido aquí: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Despliegue

Esta sección se ha movido aquí: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` no logra minificar

Esta sección se ha movido aquí: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

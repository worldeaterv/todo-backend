# 
# Lista de tareas - Backend

Este es el servidor backend de la aplicación de tareas. Asegúrate de seguir los pasos a continuación para configurar y ejecutar correctamente el servidor.

## Tecnologías Utilizadas

Este servidor backend ha sido desarrollado utilizando las siguientes tecnologías:

- **Node.js**.
- **Express**.
- **Mongoose**.

## Requisitos Previos

Es esencial asegurarse de que tienes una base de datos MongoDB configurada y funcionando correctamente. La aplicación de tareas utiliza MongoDB para almacenar y gestionar los datos de las tareas. Asegúrate de seguir estos pasos para configurar la base de datos:

1. **Instalación de MongoDB:** Si aún no tienes MongoDB instalado en tu sistema, puedes descargarlo desde [el sitio web oficial de MongoDB](https://www.mongodb.com/try/download/community) e instalarlo siguiendo las instrucciones proporcionadas.

2. **Configuración de una Base de Datos:** Una vez que MongoDB esté instalado, crea una base de datos en MongoDB y asegúrate de que esté disponible para la aplicación. Puedes utilizar el shell de MongoDB o una herramienta de administración de bases de datos para llevar a cabo esta tarea.

3. **Cadena de Conexión MongoDB:** En el archivo `.env` del backend, asegúrate de definir la variable de entorno `MONGODB_CNN` con la cadena de conexión correcta a tu base de datos MongoDB. La cadena de conexión debe incluir la información necesaria para conectarse a la base de datos que has configurado.

## Configuración del Archivo .env

Asegúrate de crear un archivo `.env` en la raíz del directorio del backend con las siguientes variables de entorno:

- `PORT`: El puerto en el que deseas ejecutar el servidor (por ejemplo, 8030).
- `MONGODB_CNN`: La cadena de conexión a tu base de datos MongoDB.

Asegúrate de definir estas variables de entorno en el archivo `.env` antes de ejecutar el servidor.

## Instalación de Dependencias

Antes de ejecutar el servidor backend, asegúrate de instalar todas las dependencias. Abre una terminal en la carpeta raíz del backend y ejecuta el siguiente comando:

```bash
npm install

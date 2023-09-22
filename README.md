# 
# Lista de tareas - Backend

Este es el servidor backend de la aplicación de tareas. Asegúrate de seguir los pasos a continuación para configurar y ejecutar correctamente el servidor.

## Tecnologías Utilizadas

Este servidor backend ha sido desarrollado utilizando las siguientes tecnologías:

- **Node.js**.
- **Express**.
- **Mongoose**.

## Requisitos Previos

Es esencial asegurarse de que tienes una base de datos MongoDB configurada y funcionando correctamente. La aplicación de tareas utiliza MongoDB para almacenar y gestionar los datos de las tareas.

## Configuración del Archivo .env

Asegúrate de crear un archivo `.env` en la raíz del directorio del backend con las siguientes variables de entorno:

- `PORT`: El puerto en el que deseas ejecutar el servidor (por ejemplo, 8030).
- `MONGODB_CNN`: La cadena de conexión a tu base de datos MongoDB.

Asegúrate de definir estas variables de entorno en el archivo `.env` antes de ejecutar el servidor.

## Instalación de Dependencias

Antes de ejecutar el servidor backend, asegúrate de instalar todas las dependencias. Abre una terminal en la carpeta raíz del backend y ejecuta el siguiente comando:

```bash
npm install

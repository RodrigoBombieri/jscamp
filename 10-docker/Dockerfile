# Dockerfile para crear una imagen de Node.js basada en Alpine Linux (es muy ligera y rápida)
FROM node:22-alpine
# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app
# Copia el archivo app.js desde el host al contenedor
COPY app.js .
# Ejecuta el comando para iniciar la aplicación Node.js
CMD ["node", "app.js"]

# Comandos para construir y ejecutar la imagen de Docker:
# 1. Construir la imagen de Docker con el nombre "mi-app-node"
#    docker build -t mi-app-node .
# 2. Ejecutar un contenedor basado en la imagen creada, mapeando el puerto 3000 del contenedor al puerto 3000 del host
#    docker run -p 3000:3000 mi-app-node
# 3. Acceder a la aplicación desde un navegador web o herramienta como curl en la dirección http://localhost:3000
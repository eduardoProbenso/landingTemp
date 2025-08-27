# Stage 1 - Build the application
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Configurar npm para usar el mirror rápido de China (npmmirror.com) y evitar el 503
RUN npm config set registry https://registry.npmmirror.com \
    && npm ci

# Copiar el resto del código
COPY . .

# Stage 2 - Serve the application
FROM node:18-alpine

WORKDIR /app

# Copy built dependencies from builder
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app .

# Metadatos opcionales sobre el contenedor (informativo, no funcional)
LABEL maintainer="Alejandro G"
LABEL app=${APP_NAME}

# Exponer el puerto que usa Vite en modo desarrollo
EXPOSE 5173

# Comando por defecto para arrancar el servidor de desarrollo
CMD ["npm", "run", "dev"]
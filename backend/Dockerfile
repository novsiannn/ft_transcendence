FROM node:18-alpine

# Install sqlite (run as root)
RUN apk add --no-cache sqlite

# Create app directory and set permissions (as root)
# RUN mkdir -p /app/db && chown -R node:node /app

WORKDIR /app

# Install dependencies (as root)
COPY package*.json ./
RUN npm install

# Copy app files (as root)
COPY . .

# Switch to non-root user (already exists in base image)
# USER node

EXPOSE 3000
EXPOSE 9229  

CMD ["node", "--inspect=0.0.0.0:9229", "src/index.js"]
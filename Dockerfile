# Use Node.js official image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and change ownership to Node user
COPY package*.json ./
RUN chown -R node:node /app

# Switch to a non-root user
USER node

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY --chown=node:node . .

# Expose the app port
EXPOSE 8080

# Start the app
CMD ["node", "app.js"]

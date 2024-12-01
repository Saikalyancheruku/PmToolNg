# Use Node.js to build the Angular app
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Build the Angular app for production
RUN npm run build

# Use Nginx to serve the Angular app
FROM nginx:1.21-alpine

# Copy the build output to Nginx's default public directory
COPY --from=build /app/dist/project-management-ng /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
# Expose the default Nginx port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

FROM node:18 as build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY client/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY client/ .

# Build the Vite app
RUN npm run build

# Use Nginx to serve the built app
FROM nginx:alpine

# Copy the built app to the Nginx container
COPY --from=build /app/dist /usr/share/nginx/html

# Ensure the nginx.conf file is in the correct location
COPY client/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

# Step 1: Use sa node base image
FROM node:18-alpine as build

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install --legacy-peer-deps

# Step 5: Copy the rest of your app's source code
COPY . .

# Step 6: Build your app
RUN npm run build

# Step 7: Use nginx to serve the app
FROM nginx:alpine

# Step 8: Copy the build output to replace the default nginx contents.
COPY --from=build /app/build /usr/share/nginx/html

# Step 9: Expose port 80
EXPOSE 80:80
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY .htpasswd /etc/nginx/.htpasswd


# Step 10: Start nginx
CMD ["nginx", "-g", "daemon off;"]

# Use the official nginx:alpine image
FROM nginx:alpine

# Remove default Nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy our separated app files to the Nginx directory
COPY app/index.html /usr/share/nginx/html/index.html
COPY app/style.css /usr/share/nginx/html/style.css
COPY app/script.js /usr/share/nginx/html/script.js

# Expose port 80
EXPOSE 80
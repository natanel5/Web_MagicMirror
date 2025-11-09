# Small Nginx Image
FROM nginx:alpine

# Copy the static files 
COPY index.html /usr/share/nginx/html/index.html
COPY style.css /usr/share/nginx/html/style.css
COPY script.js /usr/share/nginx/html/script.js

# Exposing the default Nginx port
EXPOSE 80
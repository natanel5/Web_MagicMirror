# Use the official nginx:alpine image
FROM nginx:alpine

# Remove default Nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy the entire app directory (html, css, js, modules)
# This is cleaner than copying file by file
COPY app/ /usr/share/nginx/html/

# Expose port 80
EXPOSE 80
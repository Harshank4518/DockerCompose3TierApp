FROM mysql:8.0

# Set root password and create studentdb
ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=studentdb

EXPOSE 3306


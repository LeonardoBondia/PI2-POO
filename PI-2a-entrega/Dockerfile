FROM php:8.2-apache

RUN apt-get update && apt-get install -y libicu-dev libpq-dev curl unzip

RUN docker-php-ext-install pdo pdo_mysql && \
    docker-php-ext-enable pdo_mysql

CMD [ "apache2-foreground" ]
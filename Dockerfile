FROM ghcr.io/roadrunner-server/roadrunner:2.10.7 AS roadrunner
FROM php:8.1-cli-alpine

    COPY --from=roadrunner /usr/bin/rr /usr/local/bin/rr

    WORKDIR /var/www/html

    ADD ./src /var/www/html
    
    ADD https://github.com/mlocati/docker-php-extension-installer/releases/latest/download/install-php-extensions /usr/local/bin/
    RUN chmod +x /usr/local/bin/install-php-extensions && sync && \
        install-php-extensions mbstring pdo_mysql pdo_pgsql zip exif bcmath ctype  pcntl sockets gd

    COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

    RUN apk add --update nodejs npm
    
    RUN composer install

    RUN npm install

    RUN chown -R www-data:www-data \
        /var/www/html/storage \
        /var/www/html/bootstrap/cache

    RUN php artisan octane:install --server="roadrunner"

    ENV ROADRUNNER_MAX_REQUESTS "500"
    ENV ROADRUNNER_WATCH $false
    ENV ROADRUNNER_WORKERS "auto"
    CMD /usr/bin/php -d variables_order=EGPCS /var/www/html/artisan octane:start --server=roadrunner --host=0.0.0.0 --rpc-port=6001 --port=80
    RUN chmod +x ./rr

    CMD if [[ -z $ROADRUNNER_WATCH ]] ; then \
        php artisan octane:start --server="roadrunner" --host="0.0.0.0" --workers=${ROADRUNNER_WORKERS} --max-requests=${ROADRUNNER_MAX_REQUESTS} ; \
    else \
        php artisan octane:start --server="roadrunner" --host="0.0.0.0" --workers=${ROADRUNNER_WORKERS} --max-requests=${ROADRUNNER_MAX_REQUESTS} --watch ; \
    fi

    HEALTHCHECK CMD php artisan octane:status --server="roadrunner"
# USE THE RR
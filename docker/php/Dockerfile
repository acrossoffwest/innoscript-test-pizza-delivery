FROM php:7.4.0-fpm-buster

MAINTAINER Yurij Karpov <acrossoffwest@gmail.com>

RUN apt update
RUN docker-php-ext-install pdo_mysql
RUN docker-php-ext-install mysqli
RUN printf "\n" | pecl install -o -f redis
RUN echo "extension=redis.so" > /usr/local/etc/php/conf.d/redis.ini

RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" && \
    php composer-setup.php --install-dir=/usr/local/bin --filename=composer && \
    rm composer-setup.php

RUN apt-get -y install cron nano

# Copy cron schedule
COPY ./crontab_schedule /tmp/crontab_schedule
RUN crontab /tmp/crontab_schedule && rm /tmp/crontab_schedule

# supervisor installation &&
# create directory for child images to store configuration in
RUN apt-get -y install supervisor && \
  mkdir -p /var/log/supervisor && \
  mkdir -p /etc/supervisor

COPY ./ /var/wwww/html

CMD ["service", "cron", "start"]
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/supervisord.conf"]

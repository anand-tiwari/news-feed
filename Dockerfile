FROM asia.gcr.io/nonprod-utility-233414/base-images/nginx_openresty:nginx_openresty-alpine-1.0.1

RUN mkdir -p /opt/feed/www/news-feed-ui/1.0.0-1 \
  && mkdir -p /opt/news-feed-ui/params/ \
  && mkdir -p /opt/news-feed-ui/sites/


WORKDIR /opt/feed/www/news-feed-ui

COPY ./target/com.gdn.x.ui.stock-ui/2.0.0-7 /opt/feed/www/news-feed-ui/1.0.0-1

RUN ln -s 2.0.0-7 latest

RUN chown -R nginx:nginx /opt/news-feed-ui/ \
  && chmod -R 766 /opt/news-feed-ui/

EXPOSE 8080

CMD ["/opt/openresty/bin/openresty", "-g", "daemon off;"]

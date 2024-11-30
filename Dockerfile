FROM registry.cn-beijing.aliyuncs.com/sily/nginx

RUN rm -rf /usr/share/nginx/html/*

COPY .next/static /usr/share/nginx/html/_next/static
COPY public /usr/share/nginx/html/public

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"] 
FROM nginx:stable-alpine
COPY . /usr/share/nginx/html
RUN apk update && apk add iputils busybox-extras net-tools lsof curl less netcat-openbsd tcpdump
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

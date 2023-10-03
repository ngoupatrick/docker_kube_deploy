# Docker commands
## Build image
**`docker build --no-cache -t flask-app .`**
## Run image
**`docker run -p 5000:5000 -v <local_conf_path>:/app/config flask-app`**
> all config files can be added in **`<local_conf_path>`**
## List of images
**`docker image ls --all`**
## List instances
**`docker ps [-a]`**
## Delete an instance
**`docker rm [--force] CONTAINER`**
## 

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
## Delete an image
**`docker image rm [--force] IMAGE`** 
## Run shell terminal
- **on startup**: `docker run -it <image> /bin/[sh,bash]`
- **on running container**: `docker exec <container> /bin/[bash, sh] [-c '<command>']`
## Stop a container
**`docker stop <my_container>`** 

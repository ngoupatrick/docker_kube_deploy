# Use the official Python image as the base image
FROM python:3.10-slim-buster

# Set the working directory inside the container
WORKDIR /app

# Copy the application code into the container
COPY . /app

# create folder and empty config file
RUN mkdir -p /app/config
# RUN touch /app/config/properties.props

ENV FLASK_APP=app.py
ENV FLASK_RUN_HOST=0.0.0.0

# Install dependencies
RUN pip install -r requirements.txt

# Install linux packages
RUN apt-get update -y && apt-get install -y iputils-ping telnet net-tools lsof curl less netcat tcpdump

# Expose the port your Flask app will run on
EXPOSE 5600

# Define the command to start the Flask app
CMD ["python", "app.py"]
# Use the official Python image as the base image
FROM python:3.10-slim-buster

# Set the working directory inside the container
WORKDIR /app

# Copy the application code into the container
COPY . /app

# create folder and empty config file
RUN mkdir -p /app/config
# RUN touch /app/config/properties.props

# Install dependencies
RUN pip install -r requirements.txt

# Expose the port your Flask app will run on
EXPOSE 5000

# Define the command to start the Flask app
CMD ["python", "app.py"]
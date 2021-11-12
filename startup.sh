git clone https://github.com/oliverbevan/LBG-REST-API.git
cd LBG-REST-API
docker build -t node-app-image .
docker run -d -p 5000:8080 --name node-app node-app-image


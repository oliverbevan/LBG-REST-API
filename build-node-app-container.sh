git pull
npm i
npm test
sed -i 's/Front-end for REST API/Front-end for REST API - joushua bevan/' public/index.html
docker build -t node-app-image .
docker rm -f node-app-ollie
docker run -d -p 5000:8080 --name node-app-ollie node-app-image


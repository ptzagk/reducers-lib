#docker build -t reducers-lib-core .

docker run \
    --detach \
    --env-file config.env \
    --interactive \
    --name reducers-lib-core \
    --tty \
    --volume $PWD:/usr/src/app \
    --volume /usr/src/app/node_modules \
    reducers-lib-core \
    npm start

docker attach reducers-lib-core

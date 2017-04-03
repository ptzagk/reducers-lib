docker build -t reducers-lib-web .

docker run \
    --detach \
    --env-file config.env \
    --interactive \
    --name reducers-lib-web \
    --publish 8100:8100 \
    --publish 35729:35729 \
    --tty \
    --volume $PWD:/usr/src/app \
    --volume $PWD/../core:/usr/src/core \
    --volume /usr/src/app/node_modules \
    reducers-lib-web \
    npm start

docker attach reducers-lib-web

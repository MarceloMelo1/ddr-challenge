#!/bin/sh

###########################################################################
# CONFIG PASSWORDS AND AUTHENTICATION FOR DEV ENVIROMENT - DOCKER COMPOSE #
###########################################################################

mongo ddrChallenge --host mongo-ddr -u root -p abc123 --authenticationDatabase admin --eval "db.createUser({ user: 'ddr', pwd: '1234', roles: [ { role: 'readWrite', db: 'ddrChallenge'}]});"
echo "Started"
true

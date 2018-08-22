# #!/bin/sh

# MOCHA=./node_modules/.bin/mocha
# RUNTESTS="./buildinfo.js ./citest/watchlist.js ./citest/source.js \
# ./citest/auditLog.js"

# echo $MOCHA
# echo $RUNTESTS

# # Check for existence of environment variables introduced by CI pipeline
# # and bail if not present.
# if [ -z $TESTS_USER ]; then
#   echo 'No TESTS_USER'
#   exit 1
# fi

# if [ -z $TESTS_PASSWORD ]; then
#   echo 'No TESTS_PASSWORD'
#   exit 1
# fi

# if [ -z $TESTS_TOKEN ]; then
#   echo 'No TESTS_TOKEN'
#   exit 1
# fi

# if [ -z $ENVIRONMENT ]; then
#   echo 'No ENVIRONMENT'
#   exit 1
# fi

# # Set up test config file
# echo {\"userName\":\"$TESTS_USER\", \"password\":\"$TESTS_PASSWORD\", \"apiToken\":\"$TESTS_TOKEN\", \"env\":\"aws-$ENVIRONMENT\", \"graphql_url\":\"https://api.aws-$ENVIRONMENT.veritone.com/v3/graphql\"} > ./testconfig-ci.json

# echo 'Running '$RUNTESTS
# $MOCHA --reporter mocha-junit-reporter $RUNTESTS --conf ./testconfig-ci.json

# # exit with result of mocha process
# exit

echo "Hello World !"
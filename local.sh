# bin/bash
# Run lambda src locally with test events

if [ -z "$1" ] || [ -z "$2" ]; then
    echo 'Missing function or event parameter'
    echo 'Usage: npm run local [function] [event]'
    exit 1
fi

function=$1
event=$2
./node_modules/serverless/bin/serverless invoke local --function "$function" --path test/mocks/events/"$event".json

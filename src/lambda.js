
const toDoService = require('../assets/todoService');

exports.getList = async (event, contect, callback) => {
    if (!event.queryStringParameters || !event.queryStringParameters.name) {
        const response = {
            statusCode: 200,
            body: 'The name is required'
        }
        callback(null, response)
        return
    }

    const service = toDoService('todo-bologna-js-dynamo', 'eu-west-1');

    const result = await service.list(event.queryStringParameters.name);

    const response = {
        statusCode: 200,
        body: JSON.stringify(result.Items)
    }

    callback(null, response)
}
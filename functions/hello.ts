import { APIGatewayProxyEvent, APIGatewayProxyCallback } from "aws-lambda";

export const handler = async function (
  event: APIGatewayProxyEvent,
  _context: any,
  callback: APIGatewayProxyCallback
) {
  if (event.httpMethod === "GET") {
    if (event.queryStringParameters?.name) {
      callback(null, {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(`Hello ${event.queryStringParameters.name}`)
      });
    } else {
      callback(null, {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify("Hello World")
      });
    }
  } else {
    callback(null, {
      statusCode: 402,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify("Method not supported")
    });
  }
};

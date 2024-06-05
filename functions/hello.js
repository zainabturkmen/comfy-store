// domain/.netlify/functions/hello

const items = [
  { id: 1, name: "zainab" },
  { id: 2, name: "john" },
  { id: 3, name: "suzan" },
];

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify(items),
  };
};

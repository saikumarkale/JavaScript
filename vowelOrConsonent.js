// generateJson.js

const fs = require('fs');

async function generateJsonPlugin(fastify, options) {
  fastify.decorate('generateJson', async (data, filename) => {
    try {
      // Convert data to JSON string
      const jsonData = JSON.stringify(data, null, 2);

      // Write JSON data to a file
      fs.writeFileSync(filename, jsonData);

      return { success: true, message: `JSON file ${filename} created successfully!` };
    } catch (error) {
      return { success: false, message: 'Error creating JSON file', error: error.message };
    }
  });
}

module.exports = generateJsonPlugin;

************


// app.js

const fastify = require('fastify')();
const generateJsonPlugin = require('./generateJson');

fastify.register(generateJsonPlugin);

fastify.get('/create-json', async (request, reply) => {
  const data = { example: 'data', number: 42 };
  const filename = 'output.json';

  const result = await fastify.generateJson(data, filename);

  if (result.success) {
    reply.send(result.message);
  } else {
    reply.code(500).send(result.message);
  }
});

fastify.listen(3000, (err) => {
  if (err) throw err;
  console.log('Server is running on port 3000');
});

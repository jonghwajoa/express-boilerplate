import fs from 'fs';
import path from 'path';

const MODEL_DIRECTORY = './model';

const models = {};

const dbSync = async () => {
  const directoryFiles = fs.readdirSync(path.resolve(__dirname, MODEL_DIRECTORY));
  const modelFiles = directoryFiles.filter(file => file.slice(-3) === '.js');

  for await (const file of modelFiles) {
    const model = await import(`${MODEL_DIRECTORY}/${file}`);
    const tableName = file.substr(0, file.length - 3);
    models[tableName] = model;
  }
};

export { models, dbSync };

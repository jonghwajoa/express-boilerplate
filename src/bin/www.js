import app from '../app';
import dbSync from './dbSync';

const { PORT } = process.env;

dbSync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log('Server start');
  });
});

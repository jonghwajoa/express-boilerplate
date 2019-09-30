import app from '../app';
import { dbSync } from '../database/index';

dbSync().then(result => {
  app.listen(3000, () => {
    console.log('Server start');
  });
});

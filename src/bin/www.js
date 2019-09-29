import app from '../app';
import { dbSync } from '../database/index';

dbSync().then(result => {
  app.listen(80, () => {
    console.log('Server start');
  });
});

import express from 'express';
import mongoose, {Schema} from 'mongoose';

/* DO NOT REFACTOR THIS CODE */
export const add = (a, b) => a + b;
/* DO NOT REFACTOR THIS CODE */

/* SERVER CODE TO REFACTOR */
mongoose.Promise = global.Promise;
export const employeeSchema = Schema({
  name: String,
  jobTitles: {type: [String]},
});

mongoose
  .connect('mongodb://<yourDatabaseUrlHere>/veft-testing', {
    useMongoClient: true,
  })
  .then(db => {
    const Employee = db.model('Employee', employeeSchema);
    const app = express();
    app.get('/', (req, res) => {
      Employee.find({}).exec((err, data) => res.json({data}));
    });
    app.listen(3000, () => console.log('Server running on port 3000'));
  });
/* SERVER CODE TO REFACTOR */

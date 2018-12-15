const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const catSchema = new Schema({
    name: {type: String, required: true},
    age: Number
});

const Cat = mongoose.model('cats', catSchema);


mongoose
    .connect('mongodb://localhost:27017/animales', { useNewUrlParser: true })
    .then(()=> {console.log('Database online!');

        // Create
        // Cat
        //     .create({
        //         name: 'Ana',
        //         age: 3
        //     })
        //     .then(cat => console.log(cat.name))
        //     .catch(err => console.log(err))

        // Read
        // Cat
        //     .find()
        //     .then(cats => console.log(cats));
        // findByID
        // findOne - finds first cat, can be sorted

        //Update
        // findOneAndUpdate/findByIDAndUpdate - requires ID and a field/s to update

        //Delete
        // deleteMany - with given field
        //

    });
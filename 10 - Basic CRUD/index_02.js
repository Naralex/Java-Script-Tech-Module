const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    firstName: { type: String, required: true},
    lastName: {type: String, required: true},
    avarageGrage: Number
});

const Student = mongoose.model('Student', studentSchema);

mongoose
    .connect('mongodb://localhost:27017/students', { useNewUrlParser: true })
    .then(() => {console.log('Database connected!');

        // Student
        //     .create({
        //         firstName: 'Pesho',
        //         lastName: 'Peshov',
        //         averageGrade: 5.4
        //     })
        //     .then(student => console.log(student))

        Student
            .find({})
            .then(students => {
                for (let student of students)
                {console.log(student.firstName + ' ' + student.lastName)}
            })

    });


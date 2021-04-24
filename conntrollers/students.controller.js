const connection = require('../db')

class StudentController {
    async createStudent(req,res) {
        const {name,examMark} = req.body
        let sql = 'INSERT INTO students(Full_Name,Record_Book_Exams) VALUES (?,?)';
        const newStudent =  
        await connection.query(sql,[name,examMark],
            function(err, results) {
                if(err) console.log(err);
                else res.json(results);
            });
    }

    async getStudents(req,res) {
        const students = await connection.query('SELECT * FROM students',function(err,results) {
            if(err) console.log(err);
            console.log(results)
            res.json(results)
        })
        // res.json(students.rows)
    }
    async getOneStudent(req,res) {
        const id = req.params.id;
        const student = await connection.query(`SELECT * FROM students WHERE Student_ID=?`, [id],
        function(err,results) {
            if(err) console.log(err);
            console.log(results)
            res.json(results)
        })
    }
    async updateStudent(req,res) {
        const {id,name,examMark} = req.body
        const student = await connection.query(`UPDATE students SET Full_Name = ?, Record_Book_Exams = ?  WHERE Student_ID=?`, [name,examMark,id],
        function(err,results) {
            if(err) console.log(err);
            console.log(results)
            res.json(results)
        })
    }
    async deleteStudent(req,res) {
        const id = req.params.id;
        const student = await connection.query(`DELETE FROM students WHERE Student_ID=?`, [id],
        function(err,results) {
            if(err) console.log(err);
            console.log(results)
            res.json(results)
        })
    }
}

module.exports = new StudentController;
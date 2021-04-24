const connection = require('../db')

class SabjectsController {
    async createSubject(req,res) {
        const {Subject_Name,Subject_Hours} = req.body
        let sql = 'INSERT INTO subjects(Subject_Name,Subject_Hours) VALUES (?,?)';
        const newSubjects =  
        await connection.query(sql,[Subject_Name,Subject_Hours],
            function(err, results) {
                if(err) console.log(err);
                else res.json(results);
            });
    }

    async getSubjects(req,res) {
        const subjecs = await connection.query('SELECT * FROM subjects',function(err,results) {
            if(err) console.log(err);
            console.log(results)
            res.json(results)
        })
        // res.json(students.rows)
    }

    async updateSubjects(req,res) {
        const {Subject_Name,Subject_Hours,Subject_ID} = req.body
        const subjects = await connection
            .query(`UPDATE subjects SET Subject_Name = ?, Subject_Hours = ?  WHERE Subject_ID=?`,
            [Subject_Name,Subject_Hours,Subject_ID],
            function(err,results) {
                if(err) console.log(err);
                console.log(results)
                res.json(results)
            })
    }
    async deleteSubjects(req,res) {
        const Subject_ID = req.params.id;
        const subjects = await connection.query(`DELETE FROM subjects WHERE Subject_ID=?`, [Subject_ID],
        function(err,results) {
            if(err) console.log(err);
            console.log(results)
            res.json(results)
        })
    }
}

module.exports = new SabjectsController;
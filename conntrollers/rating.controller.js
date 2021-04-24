const connection = require('../db')

class RatingController {
    async createRating(req,res) {
        const {Student_Rate,Displine_ID,Student_ID} = req.body
        let sql = 'INSERT INTO rating(Student_Rate,Displine_ID,Student_ID) VALUES (?,?,?)';
        const newStudentRate =  
        await connection.query(sql,[Student_Rate,Displine_ID,Student_ID],
            function(err, results) {
                if(err) console.log(err);
                else res.json(results);
            });
    }

    async getRating(req,res) {
        const studentsRate = await connection.query('SELECT * FROM rating',function(err,results) {
            if(err) console.log(err);
            console.log(results)
            res.json(results)
        })
        // res.json(students.rows)
    }
    async updateRating(req,res) {
        const {Student_Rate,Displine_ID,Student_ID} = req.body
        const studentRate = await connection
        .query(`UPDATE rating SET Student_Rate = ?, Displine_ID = ?  WHERE Student_ID=?`,
        [Student_Rate,Displine_ID,Student_ID],
        function(err,results) {
            if(err) console.log(err);
            console.log(results)
            res.json(results)
        })
    }
    async deleteRating(req,res) {
        const Student_ID = req.params.id;
        const student = await connection.query(`DELETE FROM rating WHERE Student_ID=?`, [Student_ID],
        function(err,results) {
            if(err) console.log(err);
            console.log(results)
            res.json(results)
        })
    }
}

module.exports = new RatingController;
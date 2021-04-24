const connection = require('../db')

class UniversityDepartmentController {
    async createUniversityDepartment(req,res) {
        const {Department_Name,Department_Dean} = req.body
        let sql = 'INSERT INTO university_department(Department_Name,Department_Dean) VALUES (?,?)';
        const newDepartment =  
        await connection.query(sql,[Department_Name,Department_Dean],
            function(err, results) {
                if(err) console.log(err);
                else res.json(results);
            });
    }

    async getUniversityDepartment(req,res) {
        const Department = await connection.query('SELECT * FROM university_department',function(err,results) {
            if(err) console.log(err);
            console.log(results)
            res.json(results)
        })
        // res.json(students.rows)
    }

    async updateUniversityDepartment(req,res) {
        const {Department_Name,Department_Dean,Department_ID} = req.body
        const Department = await connection
            .query(`UPDATE university_department SET Department_Name = ?, Department_Dean = ?  WHERE Department_ID=?`,
            [Department_Name,Department_Dean,Department_ID],
            function(err,results) {
                if(err) console.log(err);
                console.log(results)
                res.json(results)
            })
    }
    async deleteUniversityDepartment(req,res) {
        const Department_ID = req.params.id;
        const Department = await connection.query(`DELETE FROM university_department WHERE Department_ID=?`,
        [Department_ID],
        function(err,results) {
            if(err) console.log(err);
            console.log(results)
            res.json(results)
        })
    }
}

module.exports = new UniversityDepartmentController;
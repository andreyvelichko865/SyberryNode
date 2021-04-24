const connection = require('../db')

class ActivityController {
    async createStudentActivity(req,res) {
        const {name,activityName} = req.body
        let sql = 'INSERT INTO activity(Student_Name,Activity) VALUES(?,?);';
        const newActivity =  
        await connection.query(sql,[name,activityName],
            function(err, results) {
                if(err) console.log(err);
                else res.json(results)
            });
    }

    async getStudentActivity(req,res) {
        const activity = await connection.query('SELECT * FROM activity',function(err,results) {
            if(err) console.log(err);
            res.json(results)
        })
        // res.json(students.rows)
    }

    async updateActivity(req,res) {
        const {activityName,id} = req.body
        const activity = await connection.query(`UPDATE activity SET Activity = ?  WHERE Student_Name=?`, 
        [activityName,id],
        function(err,results) {
            if(err) console.log(err);
            res.json(results)
        })
    }
    async deleteStudentActivity(req,res) {
        const id = req.params.id;
        const activity = await connection.query(`DELETE FROM activity WHERE Student_Name=?`, [id],
        function(err,results) {
            if(err) console.log(err);
            res.json(results)
        })
    }
}

module.exports = new ActivityController;
const connection = require('../db')

class GroupController {
    async createGroup(req,res) {
        const {Group_Number,Department_ID,Year_Of_Create} = req.body
        let sql = 'INSERT INTO groups(Group_Number,Department_ID,Year_Of_Create) VALUES (?,?,?)';
        const newGroup =  
        await connection.query(sql,[Group_Number,Department_ID,Year_Of_Create],
            function(err, results) {
                if(err) console.log(err);
                else res.json(results);
            });
    }

    async getGroups(req,res) {
        const groups = await connection.query('SELECT * FROM groups',function(err,results) {
            if(err) console.log(err);
            res.json(results)
        })
        // res.json(students.rows)
    }
    async updateGroup(req,res) {
        const {Group_ID,Group_Number,Department_ID,Year_Of_Create} = req.body
        const group = await connection
            .query(`UPDATE groups SET Group_Number = ?, Department_ID = ?, Year_Of_Create = ? WHERE Group_ID = ?`,
            [Group_Number,Department_ID,Year_Of_Create,Group_ID],
            function(err,results) {
                if(err) console.log(err);
                console.log(results)
                res.json(results)
            })
    }
    async deleteGroup(req,res) {
        const Group_ID = req.params.id;
        const group = await connection.query(`DELETE FROM groups WHERE Group_ID=?`, [Group_ID],
        function(err,results) {
            if(err) console.log(err);
            console.log(results)
            res.json(results)
        })
    }
}

module.exports = new GroupController;
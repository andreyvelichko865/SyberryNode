const express = require('express');
const cors = require('cors')

const studentsRouter = require("./routes/students.routes")
const activityPouter = require("./routes/activity.routes")
const groupsRouter = require("./routes/groups.routes")
const ratingRouter = require("./routes/rating.routes")
const sabjectsRouter = require("./routes/subjects.routes")
const universityDepartmentRouter = require("./routes/university_department.routes")

const PORT = process.env.PORT || 8000 ;

const app = express();


app.use(cors())

app.use(express.json())
app.use('/api', studentsRouter)
app.use('/api', activityPouter)
app.use('/api', groupsRouter)
app.use('/api', ratingRouter)
app.use('/api', sabjectsRouter)
app.use('/api', universityDepartmentRouter)



app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
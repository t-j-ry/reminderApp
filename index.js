const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const app = express();
const reminderController = require('./controllers/reminder_controller');

app.use(express.static(__dirname + "/public"))
app.use(express.urlencoded({extended: false}))
app.use(ejsLayouts)
app.set("view engine", "ejs")

// Case 1: User goes to localhost:8080/ >> Homepage
app.get("/", function(req,res) {
    res.send('Welcome to the home page!')
})

// Case 2: User goes to localhost:8081/reminder >> Show a list of reminders
app.get("/reminder", reminderController.list)

// Case 3: User goes to localhost:8081/reminder/new >> Show a create reminder page
app.get("/reminder/new", reminderController.new)

// Case 4: User send data to localhost:8081/reminder >>
app.post("/reminder", reminderController.create)

// Case 5: show individual reminder >>
app.get("/reminder/:id", reminderController.listOne)

// Case 6: user wants to edit reminder >>
app.get("/reminder/:id/edit", reminderController.edit)

// Case 7: user wants to update reminders list>>
app.post("/reminder/update/:id", reminderController.update)

// Case 7: user wants to update reminders list>>
app.post("/reminder/delete/:id", reminderController.delete)


// localhost:8080
app.listen(8080)
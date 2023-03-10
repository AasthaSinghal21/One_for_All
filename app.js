const express=require("express");
const app=express();
const ejs=require("ejs");
app.set('view engine','ejs');
app.use(express.static("public"));
app.get("/",function(req,res)
{
    res.render("index");
});
app.get("/login",function(req,res)
{
    res.render("login");
});
app.get("/signup",function(req,res)
{
    res.render("signup");
});
app.get("/test",function(req,res)
{
    res.render("test-centre");
});
app.get("/teacher-attendance",function(req,res)
{
    res.render("teacher-attendance");
});
app.get("/student-attendance",function(req,res)
{
    res.render("student-attendance");
})
app.get("/student-resources",function(req,res)
{
    res.render("student-resource");
})
app.get("/student-assignment",function(req,res)
{
    res.render("student-assignment");
})
app.get("/pricing",function(req,res)
{
    res.render("pricing");
})
app.get("/teacher-login",function(req,res)
{
    res.render("teacher-login");
})
app.get("/announcement-teacher",function(req,res)
{
    res.render("announcement-teacher");
})
app.get("/student-list",function(req,res)
{
    res.render("student-list");
})
app.get("/announcement-student",function(req,res)
{
    res.render("announcement-student");
});

app.post("/login",function(req,res)
{
    res.redirect("/student-assignment");
})

app.listen(3000,function()
{
    console.log("3000");
});
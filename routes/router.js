const express = require("express");
const router = express.Router();
const traineeController = require("../controllers/trainee_controller");
const userController = require("../controllers/gym_controller");
const personContrller = require("../controllers/person_controller");
const skillController = require("../controllers/skill_controller");
const coachController = require("../controllers/coach_controller")
const adminController = require("../controllers/admin_controller")


router.post("/api/person/setpass",personContrller.setpass);//Forget Password API set password if Email true //ForgetPass

router.get("/api/trainee",traineeController.getData);//sign in trinee based on email and pass if true give 1 result //sign in 
router.post("/api/addtrainee",traineeController.addtrainee);//here we add the trainee data after calling get_person_id Api 

router.post("/api/addperson",personContrller.addPerson);//adding a person when sign in click we call this api
router.get("/api/get_person_id",personContrller.get_person_id);//return the person id form the table after adding a person based on email
router.post("/api/setpass",personContrller.setpass);//Used to chage the password for the person 
router.get("/api/get_person_id_admin",personContrller.get_person_id_admin);//return the Id Based on the Email and passwod so admin sec

router.get("/api/get_skills_lists",skillController.skillslist);//this retrive all the skills list's to show them in the admin page
router.post("/api/Add_skill_list",skillController.addskilllist);//this is for adding the Skill's list for the coach after adding coach

router.post("/api/addcoach",coachController.addcoach);//to add a new coach by the Admin in the dashbord

router.get("/api/adminid",adminController.adminid);//Chceking the id of the admin to auth that user is Admin





router.get("/gym", userController.getAllData);
router.post("/addgym", userController.addGym);
router.post("/deletegym", userController.deleteGym);

module.exports = router;

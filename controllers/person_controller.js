const personModel = require("../models/person");
class personContrller {
    static async setpass(req, res) {
        var NewPassword = req.body.NewPassword;
        var Email = req.body.Email;
        var result = await personModel.setpass(NewPassword,Email);
        if (result == true) {
            res.send({
                message:"Password Set Successflly",
                status:200,
            });
          } else {
            res.send({
              message: "Faield to Set Password",
              status: 400,
            });
        }
    }


    static async get_person_id(req, res) {
      var Email = req.body.Email;
      var result = await personModel.get_person_id(Email);
      if (result) {
        res.send(result);
      } else {
        res.send({
          message: "Erorr",
          status: 400,
        });
    }
    }

    static async get_person_id_admin(req,res){
      var Email = req.body.Email;
      var Password = req.body.Password;
      var result = await personModel.get_person_id_admin(Email,Password);
      if (result) {
        res.send(result);
      } else {
        res.send({
          message: "Erorr",
          status: 400,
        });
    }
    }

     

    static async addPerson(req,res){
        //person table
        var Password = req.body.Password;
        var Email = req.body.Email;
        var User_Name = req.body.User_Name;
        var Phone_Num = req.body.Phone_Num;
        var person_id = req.body.person_id;
        var result = await personModel.addPerson(Password,Email,User_Name,Phone_Num,person_id);
        if (result == true) {
            res.send({
                message:"Added",
                status:200,
            });
          } else {
            res.send({
              message: "Not Added",
              status: 400,
            });
        }
    


    }


    static async check_admin(req, res) {
      var Password = req.body.Password;
      var Email = req.body.Email;
      var result = await personModel.check_admin(Password,Email);
        if (result.length > 0) {
            res.send({
                message:"Accepted",
                status:200,
            });
          } else {
            res.send({
              message: "Not Accepted",
              status: 400,
            });
        }
    }
}
module.exports = personContrller
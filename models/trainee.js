const db = require("../config/db");
class traineeModel{

    static getData(Email, Password) {
        return new Promise((resolve) => {
        //`select Email , Password from person where Email = ${Email} AND Password = ${Password}`
          db.query('SELECT  `Email`,`Password`   FROM `person` WHERE `Email` = ? AND `Password` = ?;', [Email,Password], (err, result) => {
            if (!err) {
              resolve(result);
            }
            resolve(err);
          });
        });
    }



     
    
    static addtrainee(Trainee_id,Height,Weight,Age,FullName,Gender,medical_conditions,Fitness_level ) {
      return new Promise((resolve) => {
        db.query('INSERT INTO `trainee` (`Trainee_id`, `Height`, `Weight`, `Age`, `FullName`, `Gender`,  `medical_conditions`, `Fitness_level`) VALUES (? , ? , ? , ? , ? , ? , ? , ?)', [Trainee_id,Height,Weight,Age,FullName,Gender,medical_conditions,Fitness_level], (err, result) => {
          if (!err) {
            if(result.affectedRows >0){
              resolve(true)
             }
              resolve(false);
          }
          resolve(err);
        });
      });
  }


  static addID(id){
    return new Promise((resolve) => {
      db.query('INSERT INTO `trainee` (`Trainee_id`) VALUES (?)', [id], (err, result) => {
        if (!err) {
          if(result.affectedRows >0){
            resolve({
              message:"Added"
            })
           }
           resolve({
            message:"Not Added"
          })
        }
        else{
          resolve({
            message:"Duplicate entry Id"
          });
        }
      });
    });
  }

}
module.exports = traineeModel;
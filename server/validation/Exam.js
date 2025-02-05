/**********************************************************************/
/**********************  Exam Error   ******************************/
/********************************************************************/

const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateExamInput(ExamData) {

  let errors = {};
  // Convert empty fields to an empty string so we can use validator functions
  ExamData.name = !isEmpty(ExamData.name) ? ExamData.name : "";


  ExamData.prof_email = !isEmpty(ExamData.prof_email) ? ExamData.prof_email : "";

  ExamData.exam_link = !isEmpty(ExamData.exam_link) ? ExamData.exam_link : "";


  let date = ExamData.date_time_start.toString();




  // Email checks valid / invalid or required 
  if (Validator.isEmpty(ExamData.prof_email)) {

    errors.email = "Email field is required";

  } else if (!Validator.isEmail(ExamData.prof_email)) {

    errors.email = "Email is invalid";

  }


  // exam link checks 
  if (Validator.isEmpty(ExamData.exam_link)) {
    errors.exam_link = "Exam Link cannot be empty";
  }


  // Exam Link invlaid Case 
  else if (!Validator.isURL(ExamData.exam_link)) {
    errors.exam_link = "Exam Link must be a link";
  }


  // Name checks is it emty ?
  if (Validator.isEmpty(ExamData.name)) {
    errors.name = "Name cannot be empty";
  }


  // date checks eroro
  if (Validator.isEmpty(date)) {

    errors.date_time = "Date cannot be empty";

  }



  return {
    errors,
    isValid: isEmpty(errors)
  };
};

/**********************************************************************/
/********************** Create Exam Error ******************************/
/********************************************************************/
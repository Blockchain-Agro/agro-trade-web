class FormValidation {
  static validation (
    fname,
    lname,
    id,
    email,
    type,
  ) {
    alert(`Input provided
      first name ${fname}
      last name ${lname}
      id ${id}
      email ${email}
      type ${type}`);
  }
}

export default FormValidation;

import * as yup from 'yup'

export const PAS_REGX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%*&]).{8,24}/;
const EMAIL_REGX = /^[a-zA-Z0-9._%+-]+@students\.mak\.ac\.ug$/;

export const schema = yup.object({
    email: yup.string()
        .matches(EMAIL_REGX, "Email must be in the format john.doe@students.mak.ac.ug")
        .required("Email address Required"),
    password: yup.string().matches(PAS_REGX, "Password must contain at least 8 characters, one uppercase, one number and one special case character"),
}).required()

export const tokenschema = yup.object({
    token: yup.string().required(),
}).required()


export const emailSchema = yup.object({
    email: yup.string().email().required(),
})

// "email":"ericjjumba4@gmail.com",
// "firstName":"Jjumba",
// "lastName":"Eric",
// "phone_number":"+256778133387",
// "password":"Benji27586@"
export const registerSchema = yup.object({
    email: yup.string()
        .matches(EMAIL_REGX, "Email must be in the format john.doe@students.mak.ac.ug")
        .required("Email address Required"),
    firstName:yup.string().required(),
    lastName:yup.string().required(),
    phone_number:yup.string().required(),
    password: yup.string().matches(PAS_REGX, "Password must contain at least 8 characters, one uppercase, one number and one special case character"),
    confirm_password: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
}).required()

export const verificationSchema = yup.object({
    registration_code: yup.string()
              .typeError("Provide Code")
              .test('len', 'Code must be exactly 5 characters', val => {
                  if (!val) return false; // Handle the case when the field is empty
                  return val.length === 5; // Ensure the value is exactly 5 characters long
              })
              .required("Code is required")
}).required();

export const reset_password_schema = yup.object({
    new_password: yup.string().matches(PAS_REGX, "Password must contain at least 8 characters, one uppercase, one number and one special case character"),
    confirm_password: yup.string()
        .oneOf([yup.ref('new_password'), null], 'Passwords must match')
        .required('Confirm password is required'),
}).required()

export const firstLoginSchema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    city: yup.string(),
    country:yup.string()
}).required()
import * as Yup from 'yup'



//initialvalues
export const signInInitial = {
    email: "",
    password: "",
}
export const AddEmpInitial = {
    name: "",
    dob: "",
    address: "",
    email: "",
    designation: "",
    empId: "",
    fatherName: "",
    salary: "",
    phone: "",
    education: "",
    adhar: "",
    photo: ""
}
//schema
export const signInValidate = Yup.object().shape({
    email: Yup.string('').email().required("Email Should Not be Blank ,Please Enter Information"),
    password: Yup.string('').required("Password Should Not be Blank ,Please Enter Information")
})

export const AddEmpValidate = Yup.object().shape({
    name: Yup.string().required("Name Should Not be Blank ,Please Enter Information")
    .min(5, "Name Must Contains Minimun 5 Charecters")
    .max(20, "Name contains Exccess Charecters"),
    dob: Yup.string().nullable().required("DOB Should Not be Blank ,Please Enter Information")
    .test('age', "Age must be 18+", (value) => {
        const today = new Date();
        const dob = new Date(value)
        const dobYear = today.getFullYear() - dob.getFullYear();
        return dobYear >= 18;
    }),
    address: Yup.string().required("Address Should Not be Blank ,Please Enter Information"),
    email: Yup.string().email().required("Email Should Not be Blank ,Please Enter Information"),
    designation: Yup.string().required("DESIGNATION Should Not be Blank ,Please Enter Information"),
    empId: Yup.string().required("EMPID Should Not be Blank ,Please Enter Information"),
    fatherName: Yup.string().required("FATHERNAME Should Not be Blank ,Please Enter Information"),
    salary: Yup.string().required("SALARY Should Not be Blank ,Please Enter Information"),
    phone: Yup.string().required("PHONE Should Not be Blank ,Please Enter Information")
    .min(10, "Phone number Must be 10 Numbers")
    .max(10,"Phone Number Not exccess the 10 Numbers"),
    education: Yup.string().required("EDUCATION Should Not be Blank ,Please Enter Information"),
    adhar: Yup.string().required("ADHAR NUMBER Should Not be Blank ,Please Enter Information"),
})

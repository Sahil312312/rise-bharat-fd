import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
    phone: Yup.string().required("Please enter your phone number").matches(/^[0-9]+$/, "Must be only digits").min(10, 'Must be exactly 10 digits').max(10, 'Must be exactly 10 digits'),
    password: Yup.string().required('Password is required'),
});

export const signupSchema = Yup.object({
    full_name: Yup.string().min(2).max(50).required('Please enter your name'),
    phone: Yup.string().required("Please enter your phone number").matches(/^[0-9]+$/, "Must be only digits").min(10, 'Must be exactly 10 digits').max(10, 'Must be exactly 10 digits'),
    password: Yup.string().min(6).required('Password is required'),
    role: Yup.string().required('Required'),
});

export const createCommunitySchema = Yup.object({
    name: Yup.string().max(50).required('Please enter a name for your community'),
});

export const createJobSchema = Yup.object({
    job_role: Yup.string().max(50).required('Please enter a job role for your job'),
    salary: Yup.number().positive("Salary Should be positive").required('Please enter a salary for your job'),
    company: Yup.string().max(50).required('Please enter a company for your job'),
    location: Yup.string().max(50).required('Please enter a location for your job'),
    educational_qualification: Yup.string().max(50).required('Please enter a title for your job'),
    experience: Yup.string().max(50).required('Please enter a experience for your job'),
    job_description: Yup.string().max(300).required('Please enter a description for your job'),
    number_of_openings: Yup.number().positive("Number of Opening Should be positive").required('Please enter a number of openings for your job'),
});
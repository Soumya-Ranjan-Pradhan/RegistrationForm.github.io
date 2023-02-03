import * as Yup from "yup";

export const signUpSchema = Yup.object({
fame: Yup.string().min(2).max(25).required("Please enter your name"),
date: Yup.string().required("DOB"),
email: Yup.string().min(2).max(100).required("Please enter your email"),
father: Yup.string().min(2).max(30).required("Enter your father's name"),
mother: Yup.string().min(2).max(25).required("Enter your mother's name"),
nationality: Yup.string().min(2).max(25).required("Enter nationality"),
address: Yup.string().min(2).max(15).required("Enter your address"),
tel: Yup.string().max(10).required("Enter home number"),
mobile: Yup.string().max(10).required("Enter your mobile number"),
hsc: Yup.string().max(100).required(" Enter HSC Institution name"),
state: Yup.string().max(100).required(" Enter HSC Board(i.e CBSC,ICSC or State board)"),
number: Yup.string().required("Enter Score in HSC in percentage"),
ssc: Yup.string().max(100).required(" Enter SSC Institution name"),
board: Yup.string().max(100).required(" Enter SSC Board(i.e CBSC,ICSC or State board)"),
percentage: Yup.string().required("Enter Score in SSC in percentage"),
current: Yup.string().max(100).required(" Enter Current pursuing"),
institution: Yup.string().max(100).required(" Enter Current educational institution name"),
overall: Yup.string().required("Enter Overall percentage"),
backlogs: Yup.string().required("Current backlogs if any"),
});

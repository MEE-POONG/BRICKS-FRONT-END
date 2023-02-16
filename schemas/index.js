import * as yup from "yup";

const phoneRegExp =
  /((\+66|0)(\d{1,2}\-?\d{3}\-?\d{3,4}))|((\+๖๖|๐)([๐-๙]{1,2}\-?[๐-๙]{3}\-?[๐-๙]{3,4}))/gm;

export const fromSchema = yup.object().shape({
  firstname: yup.string().required("กรุณากรอกชื่อจริง"),
  lastname: yup.string().required("กรุณากรอกนามสกุล"),
  email: yup
    .string()
    .email("กรุณากรอก อีเมลให้ถูกต้อง")
    .required("กรุณากรอกอีเมล"),
  tel: yup
    .string()
    .matches(phoneRegExp, "กรุณากรอกเบอร์โทรให้ถูกต้อง")
    .required("กรุณากรอกเบอร์โทร"),
  province: yup.string().required("กรุณากรอกจังหวัด"),
  district: yup.string().required("กรุณากรอกอำเภอ"),
  subDistrict: yup.string().required("กรุณากรอกอำเภอ"),
  postalCode: yup
    .number()
    .positive()
    .integer()
    .required("กรุณากรอกรหัสไปรษณีย์")
    .test(
      "len",
      "กรุณากรอกให้ครับ 5 หลัก",
      (val) => val.toString().length === 5
    ),
  address: yup.string().required("กรุณากรอกที่อยู่"),
});

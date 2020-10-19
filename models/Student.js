import monogoose from "mongoose";

const Schema = monogoose.Schema;

// {} <-- model를 정의하는 제이슨, {}
const Student = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    school: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

export default monogoose.model(`Student`, Student, `Student`);
// Student 라는 이름으로 Student으로 사용한다 DB에 있는 Student를.

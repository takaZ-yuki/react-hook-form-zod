import "./styles.css";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
};

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="">性：</label>
        <input {...register("firstName", { maxLength: 50 })} />
        {errors.firstName && <p>50文字以内で入力してください</p>}
      </div>
      <div>
        <label htmlFor="">名：</label>
        <input {...register("lastName", { maxLength: 50 })} />
        {errors.lastName && <p>50文字以内で入力してください</p>}
      </div>
      <div>
        <label htmlFor="">メールアドレス：</label>
        <input {...register("email", { required: true })} />
        {errors.email && <p>email is required</p>}
      </div>
      <div>
        <label htmlFor="">年齢：</label>
        <input {...register("age", { min: 10 })} />
        {errors.age && <p>10以上で入力してください</p>}
      </div>
      <input type="submit" />
    </form>
  );
}

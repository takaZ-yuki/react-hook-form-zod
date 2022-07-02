import "./styles.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  firstName: z.string().max(50, { message: "50文字以内で入力してください" }),
  lastName: z.string().max(50, { message: "50文字以内で入力してください" }),
  email: z.string().min(1, { message: "Required" }),
  age: z.number().min(10, { message: "10以上で入力してください" })
});

type Schema = z.infer<typeof schema>;

export default function App2() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Schema>({
    resolver: zodResolver(schema)
  });
  const onSubmit: SubmitHandler<Schema> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="">性：</label>
        <input {...register("firstName")} />
        {errors.firstName?.message && <p>{errors.firstName?.message}</p>}
      </div>
      <div>
        <label htmlFor="">名：</label>
        <input {...register("lastName")} />
        {errors.lastName?.message && <p>{errors.lastName?.message}</p>}
      </div>
      <div>
        <label htmlFor="">メールアドレス：</label>
        <input {...register("email")} />
        {errors.email?.message && <p>{errors.email?.message}</p>}
      </div>
      <div>
        <label htmlFor="">年齢：</label>
        <input type="number" {...register("age")} />
        {errors.age?.message && <p>{errors.age?.message}</p>}
      </div>
      <input type="submit" />
    </form>
  );
}

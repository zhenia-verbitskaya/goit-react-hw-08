import LoginForm from "../../components/LoginForm/LoginForm";
import s from "./LoginPage.module.css";

export default function LoginPage() {
  return (
    <main className={s.main}>
      <h1 className={s.heading}>Log In Now!</h1>
      <LoginForm />
    </main>
  );
}

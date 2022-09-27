import "./styles.scss";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";
import { useRegister } from "hooks";
import { useGetter } from "store";


function AuthPage() {
    const { setUser } = useGetter();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const signUp = useRegister({ onSuccess: () => navigate("/login") });

    const handleClick = () => navigate("/login");
    const onSubmit = (data) => signUp(data);

    useEffect(() => {
        setUser();
    }, []);

    return (
        <div className="authpage-container">
            <form className="authpage-container_form" onSubmit={handleSubmit(onSubmit)}>
                <h1>Registro</h1>
                <label htmlFor="">Email</label>
                <input placeholder="Email"  {...register("email", { required: true })} required />

                <label htmlFor="">Username</label>
                <input placeholder="Username"  {...register("username", { required: true })} required />

                <label htmlFor="">Password</label>
                <input placeholder="Password" type="Password" {...register("password", { required: true })} required />

                {errors.name && errors.name.type === "required" && (
                    <span role="alert">This field is required</span>
                )}

                <input type="submit" className="form_button" />

                <section className="buttons">
                    <p className="buttons__text">
                        Already have an account?{" "}
                        <span className="buttons__link" onClick={handleClick}>
                            Log in here
                        </span>
                    </p>
                </section>
            </form>
        </div>
    )
}

export default AuthPage


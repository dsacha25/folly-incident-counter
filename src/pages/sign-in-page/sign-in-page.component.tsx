import React from "react";
import { PageBlank } from "../page-styles/page-styles.styles";
import { SignInForm } from "./sign-in-page.styles";

import CustomInput from "../../components/common/custom-input/custom-input.component";
import CustomButton from "../../components/common/custom-button/custom-button.component";
import { useForm, SubmitHandler } from "react-hook-form";
import { signInUserStart } from "../../redux/user/user.action";
import {
	FirebaseAuthError,
	LogInInfo,
	UserError,
} from "../../redux/user/types";
import { useDispatch, useSelector } from "react-redux";
import { selectUserError } from "../../redux/user/user.selector";
import { State } from "../../redux/root-reducer";

const SignInPage = () => {
	const dispatch = useDispatch();

	const signIn = (login: LogInInfo) => dispatch(signInUserStart(login));
	const signInError = useSelector<State, FirebaseAuthError | null>((state) =>
		selectUserError(state)
	);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LogInInfo>();

	const onSubmit: SubmitHandler<LogInInfo> = (data) => {
		signIn(data);
	};

	return (
		<PageBlank>
			<SignInForm onSubmit={handleSubmit(onSubmit)}>
				<h1>Log In</h1>

				<CustomInput
					type="email"
					{...register("email", { required: true })}
					error={errors.email}
					placeholder="Email..."
				/>
				<CustomInput
					type="password"
					{...register("password", { required: true, minLength: 6 })}
					error={errors.password}
					placeholder="Password..."
				/>
				{signInError && signInError.message && <p>{signInError.message}</p>}
				<CustomButton type="submit">Submit</CustomButton>
			</SignInForm>
		</PageBlank>
	);
};

export default SignInPage;

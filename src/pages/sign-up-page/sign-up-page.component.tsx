import React from "react";

import { PageBlank } from "../page-styles/page-styles.styles";
import CustomButton from "../../components/common/custom-button/custom-button.component";
import { SignUpForm, SignUpInput } from "./sign-up-page.styles";
import { useDispatch } from "react-redux";
import { signUpUserStart, EmailSignUpInfo } from "../../redux/user/user.action";
import { useForm, SubmitHandler } from "react-hook-form";
import ErrorMessage from "../../components/common/error-message/error-message.component";

const SignUpPage = () => {
	const dispatch = useDispatch();

	const signUpUser = (creds: EmailSignUpInfo) =>
		dispatch(signUpUserStart(creds));

	const {
		getValues,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<EmailSignUpInfo>();

	const onSubmit: SubmitHandler<EmailSignUpInfo> = (data) => {
		console.log("Data: ", data);

		signUpUser(data);
	};

	return (
		<PageBlank>
			<SignUpForm onSubmit={handleSubmit(onSubmit)}>
				<h1>Join Us</h1>
				<SignUpInput
					{...register("name", { required: true })}
					error={errors.name}
					placeholder="Name..."
				/>
				<SignUpInput
					type="email"
					{...register("email", { required: true })}
					error={errors.email}
					placeholder="Email..."
				/>
				<SignUpInput
					type="password"
					{...register("password", {
						required: true,
						minLength: {
							value: 6,
							message: "Use 6 or more characters",
						},
					})}
					error={errors.password}
					placeholder="Password..."
				/>
				<SignUpInput
					type="password"
					{...register("confirmPassword", {
						required: true,
						validate: {
							passwordsMatch: (value) =>
								value === getValues("password") || "Passwords must match",
						},
					})}
					error={errors.confirmPassword}
					placeholder="Confirm Password..."
				/>

				<ErrorMessage error={errors.password?.message} />
				<ErrorMessage error={errors.confirmPassword?.message} />
				<CustomButton type="submit">Submit</CustomButton>
			</SignUpForm>
		</PageBlank>
	);
};

export default SignUpPage;

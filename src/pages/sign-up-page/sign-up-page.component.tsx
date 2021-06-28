import React from "react";

import { PageBlank } from "../page-styles/page-styles.styles";
import CustomInput from "../../components/common/custom-input/custom-input.component";
import CustomButton from "../../components/common/custom-button/custom-button.component";
import { SignUpForm } from "./sign-up-page.styles";
import { useDispatch } from "react-redux";
import { signUpUserStart, EmailSignUpInfo } from "../../redux/user/user.action";
import { useForm, SubmitHandler } from "react-hook-form";

const SignUpPage = () => {
	const dispatch = useDispatch();

	const signUpUser = (creds: EmailSignUpInfo) =>
		dispatch(signUpUserStart(creds));

	const {
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
			<SignUpForm
				style={{ display: "grid", maxWidth: "60vw" }}
				onSubmit={handleSubmit(onSubmit)}
			>
				<h1>Join Us</h1>
				<CustomInput
					{...register("name", { required: true })}
					error={errors.name}
					placeholder="Name..."
				/>
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
				<CustomButton type="submit">Submit</CustomButton>
			</SignUpForm>
		</PageBlank>
	);
};

SignUpPage.propTypes = {};

export default SignUpPage;

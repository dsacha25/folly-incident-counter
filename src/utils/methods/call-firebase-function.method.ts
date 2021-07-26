import { functions } from "../firebase/firebase.utils";

const callFirebaseFunction = (callableName: string, values?: any) => {
	console.log("<<========== Firebase function call START. ===========>>");
	const callable = functions.httpsCallable(`${callableName}`);
	return callable({ ...values })
		.then((response) => {
			console.log("<<========== Firebase function was called. ===========>>");
			let data = response.data;
			if (!data) {
				console.log(
					"<<========== Firebase function recieved NULL response. ===========>>"
				);
				return { response };
			}

			if (data) {
				console.log(
					`<<========== Firebase Function Result Value for ${callableName}: ${data}`
				);

				return { ...data };
			}
		})
		.catch((error) => {
			console.log(
				"xxxxxxxxxxxxxx  FIREBASE FUNCTION CALL ERROR xxxxxxxxxxxxxx"
			);
			console.log("Unable to call firebase function. ", error.message);

			return { error };
		});
};

export default callFirebaseFunction;

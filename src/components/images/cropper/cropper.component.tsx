import React, { useState } from "react";
import { CropperContainer } from "./cropper.styles";
import Cropper from "react-easy-crop";
import { CropperTypes } from "../types";
import { Area } from "react-easy-crop/types";

const ImageCropper = (props: CropperTypes) => {
	const [crop, setCrop] = useState({ x: 0, y: 0 });

	const handleCropComplete = (croppedArea: Area, croppedAreaPixels: Area) => {
		//
	};

	return (
		<CropperContainer>
			<Cropper
				image={props.imageInput.image}
				crop={crop}
				zoom={1}
				aspect={1}
				onCropChange={setCrop}
				onCropComplete={handleCropComplete}
			/>
		</CropperContainer>
	);
};

export default ImageCropper;

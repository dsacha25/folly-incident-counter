import React, { Fragment, useState } from "react";
import Cropper from "react-easy-crop";
import { UploadCropTypes } from "../types";
import Image from "../../../utils/classes/image/image";
import { PhotoDisplay, PhotoButton } from "./upload-and-crop.styles";
import { Area, Point } from "react-easy-crop/types";
import { ImageType } from "../../../utils/classes/image/types";

const UploadAndCrop = (props: UploadCropTypes) => {
	const [cropImage, setCropImage] = useState<ImageType | null>(null);
	const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
	const [url, setUrl] = useState(props.currentImage ? props.currentImage : "");

	const handleCrop = () => {
		if (cropImage) {
			setUrl(cropImage.image);
			props.getImage(cropImage);
		}
	};

	const onCropComplete = async (
		croppedPixels: Area,
		croppedAreaPixels: Area
	) => {
		if (props.inputImage) {
			const img = await new Image().setCroppedImage(
				props.inputImage,
				croppedAreaPixels
			);

			if (img) {
				setCropImage(img);
			}
		}
	};

	return props.inputImage ? (
		<Fragment>
			<Cropper
				image={props.inputImage.image}
				onCropComplete={onCropComplete}
				onCropChange={setCrop}
				crop={crop}
				zoom={1}
				aspect={1}
			/>
			<PhotoButton type="button" onClick={handleCrop} error={props.inputError}>
				Crop
			</PhotoButton>
		</Fragment>
	) : (
		<PhotoDisplay url={url} />
	);
};

export default UploadAndCrop;

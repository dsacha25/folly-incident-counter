import React, { FormEvent, useState, useRef } from "react";
import Image from "../../../utils/classes/image/image";
import { ImageType } from "../../../utils/classes/image/types";
import { ImageUploaderProps } from "../types";
import UploadAndCrop from "../upload-and-crop/upload-and-crop.component";

import {
	HiddenInput,
	HoverUploadControls,
	ImageUploadContainer,
	PhotoButton,
	UploadErrorMessage,
} from "./image-uploader.styles";

const ImageUploader = (props: ImageUploaderProps) => {
	const [hover, setHover] = useState<boolean>(false);
	const [inputImg, setInputImg] = useState<ImageType | null>(null);
	const [preCropFile, setPreCropFile] = useState<ImageType | null>(null);
	const [wasCropped, setWasCropped] = useState(false);

	const [inputError, setInputError] = useState<string | null>(null);

	const inputRef = useRef<HTMLInputElement>(null);

	const handleUpdateCrop = () => {
		setInputImg(preCropFile);
	};

	// UPLOAD
	const handleStartUpload = () => {
		if (inputRef) {
			inputRef.current?.click();
		}
	};

	const handleUploadChange = async (e: FormEvent<HTMLInputElement>) => {
		const { files } = e.currentTarget;

		if (!files) return null;

		if (files.length > 1) {
			setInputError("*1 photo maximun");

			setTimeout(() => {
				setInputError(null);
			}, 3000);
		} else if (files.length === 1) {
			const img = await new Image().getRawImageUrl(files[0]);

			setPreCropFile({ image: img, upload: files[0], name: files[0].name });
			setInputImg({ image: img, upload: files[0], name: files[0].name });
		} else {
			// return disableForm && disableForm(false);
		}
	};

	const handleImage = (image: ImageType) => {
		setInputImg(null);
		console.log("CROPPED IMAGE: ", image);
		setWasCropped(true);
		props.getFinalImage(image);
	};

	return (
		<ImageUploadContainer
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<UploadAndCrop
				currentImage={props.url}
				inputImage={inputImg}
				getImage={handleImage}
				inputError={inputError}
			/>

			<HoverUploadControls hover={hover && !inputImg}>
				{wasCropped && (
					<PhotoButton
						type="button"
						onClick={handleUpdateCrop}
						error={inputError}
					>
						Crop
					</PhotoButton>
				)}
				<HiddenInput
					ref={inputRef}
					type="file"
					accept="image/*"
					aria-label="image-input"
					onChange={handleUploadChange}
				/>
				<PhotoButton
					type="button"
					onClick={handleStartUpload}
					error={inputError}
				>
					Upload
				</PhotoButton>
			</HoverUploadControls>
			{inputError && <UploadErrorMessage>{inputError}</UploadErrorMessage>}
		</ImageUploadContainer>
	);
};

export default ImageUploader;

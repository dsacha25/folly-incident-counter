import React, { FormEvent, useState, useRef } from "react";
import Cropper from "react-easy-crop";
import { Area, Point } from "react-easy-crop/types";
import Image from "../../../utils/classes/image/image";
import { ImageType } from "../../../utils/classes/image/types";

import {
	HiddenInput,
	HoverUploadControls,
	ImageUploadContainer,
	PhotoButton,
	PhotoDisplay,
	UploadErrorMessage,
} from "./image-uploader.styles";

const ImageUploader = () => {
	const [hover, setHover] = useState<boolean>(false);
	const [inputImg, setInputImg] = useState<ImageType | null>(null);
	const [cropImage, setCropImage] = useState<ImageType | null>(null);
	const [preCropFile, setPreCropFile] = useState<ImageType | null>(null);
	const [wasCropped, setWasCropped] = useState(false);
	const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });

	const [url, setUrl] = useState("");

	const [inputError, setInputError] = useState<string | null>(null);
	// const [disabled, setDisabled] = useState<boolean>(false);

	const inputRef = useRef(null);

	// CROP
	const handleCrop = () => {
		setInputImg(null);
		// handleDefaultPhoto(cropImage);
		if (cropImage) setUrl(cropImage.image);

		// if (!disableForm) return;
		// disableForm(false);
	};

	const handleUpdateCrop = () => {
		setInputImg(preCropFile);
		// if (!disableForm) return;
		// disableForm(true);
	};

	const onCropComplete = async (
		croppedPixels: Area,
		croppedAreaPixels: Area
	) => {
		if (inputImg) {
			const img = await new Image().setCroppedImage(
				inputImg,
				croppedAreaPixels
			);

			if (img) {
				setCropImage(img);
			}
		}

		setWasCropped(true);
	};

	// UPLOAD
	const handleStartUpload = () => {
		if (inputRef) {
			// inputRef.current?.click();
		}
	};

	const handleUploadChange = async (e: FormEvent<HTMLInputElement>) => {
		const { files } = e.currentTarget;

		if (!files) return null;

		if (files.length > 1) {
			setInputError("*1 photo maximun");
			// inputRef.current.value = null;
			setTimeout(() => {
				setInputError(null);

				// disableForm(false);
			}, 3000);
		} else if (files.length === 1) {
			// const photo = await getBase64(files[0]);
			const img = await new Image().getRawImageUrl(files[0]);

			setPreCropFile({ image: img, upload: files[0], name: files[0].name });
			setInputImg({ image: img, upload: files[0], name: files[0].name });
		} else {
			// return disableForm && disableForm(false);
		}
	};

	return (
		<ImageUploadContainer
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			{inputImg ? (
				<>
					<Cropper
						image={inputImg.image}
						onCropComplete={onCropComplete}
						onCropChange={setCrop}
						crop={crop}
						zoom={1}
						aspect={1}
					/>
					<PhotoButton type="button" onClick={handleCrop} error={inputError}>
						Crop
					</PhotoButton>
				</>
			) : (
				<PhotoDisplay url={url} />
			)}
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
					type="file"
					multiple
					accept="image/*"
					aria-label="image-input"
					onChange={handleUploadChange}
				>
					Upload
				</HiddenInput>
			</HoverUploadControls>
			{inputError && <UploadErrorMessage>{inputError}</UploadErrorMessage>}
			{/* <button hidden onClick={handleClearPhoto} type="button" ref={ref} /> */}
		</ImageUploadContainer>
	);
};

export default ImageUploader;

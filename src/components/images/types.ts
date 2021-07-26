import { ImageType } from "../../utils/classes/image/types";

export interface CropperTypes {
	getImage?: () => void;
	imageInput: ImageType;
	hidden?: boolean;
}

export interface UploadCropTypes {
	currentImage?: string | null;
	inputImage: ImageType | null | undefined;
	getImage: (image: ImageType) => void;
	inputError: string | null;
}

export interface ImageUploaderProps {
	getFinalImage: (image: ImageType) => void;
	url?: string | null;
}

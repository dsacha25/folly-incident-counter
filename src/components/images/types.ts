export interface ImageProps {
	image: string;
	upload: object;
	name: string;
}

export interface CropperTypes {
	getImage?: () => void;
	imageInput: ImageProps;
	hidden?: boolean;
}

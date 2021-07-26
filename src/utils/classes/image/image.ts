import { Crop, ImageType } from "./types";
import DefaultProfilePicture from "../../../assets/placeholders/profile-picture/picture-avatar.png";
import { getBase64, getCroppedImg } from "../../methods/image-utils.method";
import { Area } from "react-easy-crop/types";

interface ImageProps {
	rawImage?: ImageType;
	url?: string;
	pathName?: string;
}

class Image {
	rawImage?: ImageType;
	url?: string;
	pathName: string;
	isPlaceholder: boolean;
	readonly defaultPhoto: string;

	constructor(props?: ImageProps) {
		this.isPlaceholder = true;
		this.url = props?.url;
		this.defaultPhoto = DefaultProfilePicture;
		this.pathName = props?.pathName || "";
		this.rawImage = props?.rawImage || {
			image: "",
			name: "",
			upload: new Blob(),
		};
	}

	setPhotoFromUser(url: string, path: string) {
		this.isPlaceholder = false;
		this.url = url;
		this.pathName = path;
		this.rawImage = { image: "", name: "", upload: new Blob() };
	}

	setRawPhoto(image: ImageType) {
		this.isPlaceholder = false;
		this.rawImage = image;

		return this;
	}

	async setCroppedImage(
		image: ImageType,
		croppedAreaPixels: Area
	): Promise<ImageType | null> {
		const croppedImage = await getCroppedImg(image, croppedAreaPixels);
		if (!croppedImage) return null;
		const convertedCroppedImage = await getBase64(croppedImage);

		this.rawImage = {
			image: convertedCroppedImage,
			upload: croppedImage,
			name: image.name,
		};

		return this.rawImage;
	}

	async getRawImageUrl(file: File) {
		const image = await getBase64(file);
		this.url = image;
		return image;
	}
}

export default Image;

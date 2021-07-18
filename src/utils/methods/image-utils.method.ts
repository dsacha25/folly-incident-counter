import { Crop, ImageType } from "../classes/image/types";

export const dataURLtoFile = (
	dataurl: string | ArrayBuffer | null,
	filename: string
): File | null => {
	if (typeof dataurl !== "string") return null;

	const arr = dataurl.split(",");

	const result = arr[0].match(/:(.*?);/);
	if (!result) return null;

	const mime = result[1];
	const bstr = atob(arr[1]);
	let n = bstr.length;
	let u8arr = new Uint8Array(n);

	while (n--) {
		u8arr[n] = bstr.charCodeAt(n);
	}

	return new File([u8arr], filename, { type: mime });
};

export const createImage = (url: string): Promise<CanvasImageSource> =>
	new Promise((resolve, reject) => {
		const image = new Image();
		image.addEventListener("load", () => resolve(image));
		image.addEventListener("error", (error) => reject(error));
		image.setAttribute("crossOrigin", "anonymous");
		image.src = url;
	});

export const toBase64 = (file: File) =>
	new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = (error) => reject(error);
	});

export const getBase64 = (file: File): Promise<string> => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => {
			if (typeof reader.result === "string") {
				resolve(reader.result);
			}
		};
		reader.onerror = (error) => reject(error);
	});
};

export const getCroppedImg = async (
	imageSrc: ImageType,
	crop: Crop
): Promise<File | null> => {
	const image = await createImage(imageSrc.image);
	const canvas = document.createElement("canvas");
	const ctx = canvas.getContext("2d");
	if (!ctx) return null;

	canvas.width = crop.width;
	canvas.height = crop.height;

	ctx.drawImage(
		image,
		crop.x,
		crop.y,
		crop.width,
		crop.height,
		0,
		0,
		canvas.width,
		canvas.height
	);

	const reader = new FileReader();
	return new Promise((resolve) => {
		canvas.toBlob((blob) => {
			if (!blob) return;
			reader.readAsDataURL(blob);
			reader.onloadend = () => {
				resolve(dataURLtoFile(reader.result, imageSrc.name));
			};
		}, "image/jpeg");
	});
};

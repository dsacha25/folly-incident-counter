export interface Crop {
	x: number;
	y: number;
	width: number;
	height: number;
}

export interface ImageType {
	image: string;
	upload: Blob | Uint8Array | ArrayBuffer;
	name: string;
}

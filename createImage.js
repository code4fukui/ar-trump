import { THREE } from "https://code4fukui.github.io/egxr.js/egxr.js";

export const createImage = (w, h) => {
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
	const g = canvas.getContext("2d");
	g.toTexture = () => new THREE.CanvasTexture(canvas);
	g.fillTextCenter = (s, x, y) => {
		const m = g.measureText(s);
		const sw = m.width;
		g.fillText(s, x - sw / 2, y);
	};
	return g;
};

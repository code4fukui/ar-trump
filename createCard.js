import { THREE } from "https://code4fukui.github.io/egxr.js/egxr.js";
import { createImage } from "./createImage.js";
import { createMaterialDoubleSide } from "./createMaterialDoubleSide.js";

export const createCard = (suit, num) => {
  // create texture
  const g = createImage(100, 156);
  g.font = `bold 50px sans-serif`;
  g.fillStyle = "white";
  g.fillRect(0, 0, 100, 156);
  g.fillStyle = suit % 2 == 0 ? "black" : "red";
  g.fillTextCenter("♠♥☘◆"[suit], 50, 60);
  g.fillTextCenter(num, 50, 130);
  const texture = g.toTexture();
  
  const loader = new THREE.TextureLoader();
  const texback = loader.load("cardback.jpg");

  // create plane geometry
  const sw = 4;
  const w = 0.057;
  const h = 0.089;
  const planeGeometry = new THREE.PlaneGeometry(w, h, sw, sw);
  const material = createMaterialDoubleSide(texture, texback);

  const mesh = new THREE.Mesh(planeGeometry, material);
  mesh.suit = suit;
  mesh.num = num;
  mesh.animate = t => {};
  return mesh;
};

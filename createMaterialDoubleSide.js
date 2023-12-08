import { THREE } from "https://code4fukui.github.io/egxr.js/egxr.js";

// create custom shader material for double side
export const createMaterialDoubleSide = (texfront, texback) => {
  const material = new THREE.ShaderMaterial({
    side: THREE.DoubleSide,
    uniforms: {
      frontTexture: { value: texfront },
      backTexture: { value: texback },
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      varying vec2 vUv;
      uniform sampler2D frontTexture;
      uniform sampler2D backTexture;
      void main() {
        if (gl_FrontFacing) {
          gl_FragColor = texture2D(frontTexture, vUv);
        } else {
          gl_FragColor = texture2D(backTexture, vUv);
        }
      }
    `,
  });
  return material;
};

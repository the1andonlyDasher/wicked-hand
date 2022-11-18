import * as THREE from "three";
import { extend } from "@react-three/fiber";
import { LinearMipmapLinearFilter, RepeatWrapping } from "three";
import f from "../components/gl/f";
import v from "../components/gl/v";

export default class Button extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        iProg: { type: "f", value: 0 },
        iTime: { type: "f", value: 0.0 },
        iChannel0: {
          type: "t",
          value: undefined,
        },
      },
      vertexShader: v,
      fragmentShader: f,
    });
  }

  get texture() {
    return this.uniforms.iChannel0.value;
  }
  set texture(v) {
    this.uniforms.iChannel0.value = v;
    this.uniforms.iChannel0.value.generateMipmaps = false;
    this.uniforms.iChannel0.value.wrapS = this.uniforms.iChannel0.value.wrapT =
      RepeatWrapping;
    this.uniforms.iChannel0.value.minFilter = LinearMipmapLinearFilter;
    this.uniforms.iChannel0.value.needsUpdate = true;
  }
}

// register element in r3f (<image />)
extend({ Button });
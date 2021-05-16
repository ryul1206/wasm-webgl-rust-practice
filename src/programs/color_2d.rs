use wasm_bindgen::JsCast;
use web_sys::WebGlRenderingContext as GL;
use web_sys::*;
use js_sys::WebAssembly;

pub struct Color2D {
    program: WebGlProgram,
}

impl Color2D {
    pub fn new(gl: &WebGlRenderingContext) -> Self {}
}
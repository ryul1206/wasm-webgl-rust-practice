// fn main() {
//     println!("Hello, world!");
// }

// cargo fmt
// cargo clippy
extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

// #[wasm_bindgen]
// pub fn say_hello_from_rust() {
//     log("Howdy!... from Rust")
// }

#[wasm_bindgen]
pub struct RustClient {

}

#[wasm_bindgen]
impl RustClient {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Self {
        log("New was hit.");
        Self {

        }
    }

    pub fn update(&mut self, _time: f32, _height: f32, _width: f32) -> Result<(), JsValue> {
        // log("Update was hit.");
        Ok(())
    }

    pub fn render(&self) {
        // log("Render was hit.")

    }
}
# Ant Simulation

Rust-lang practice motivated by Pezzza's Work and Sebastian Lague

- Pezzza's Work
  - YouTube: [C++ Ants Simulation](https://youtu.be/81GQNPJip2Y)
  - GitHub: [johnBuffer/AntSimulator](https://github.com/johnBuffer/AntSimulator) (MIT License)
- Sebastian Lague
  - YouTube: [C# Ant and Slime Simulations](https://youtu.be/X-iSQQgOd1A)
  - GitHub: [SebLague/Slime-Simulation](https://github.com/SebLague/Slime-Simulation) (GPL3 License)

## Requirements

- Rust
  - [wasm-pack](https://github.com/rustwasm/wasm-pack)
  - [wasm32-unknown-unknown](https://rustwasm.github.io/docs/wasm-pack/prerequisites/non-rustup-setups.html)
- Nodejs
  - yarn (optional)

## How to Build

1. `yarn install`
2. `cargo build --target wasm32-unknown-unknown`

<!-- 3. `wasm-pack build`
4. `yarn build` -->

## How to Run

1. `yarn dev`

## Good Materials

- Doug Milford, YouTube video series "Rust 3D Graphics in the Browser" [(1)](https://youtu.be/p7DtoeuDT5Y), [(2)](https://youtu.be/kjYCSySObDo), [(3)](https://youtu.be/K63uBfs1K7Y)

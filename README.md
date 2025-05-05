# horizontal-micro-frontend

A micro-frontend example using [Vite](https://vitejs.dev/) with [vite-plugin-federation](https://github.com/originjs/vite-plugin-federation), built with **React 19**.  
This project demonstrates a horizontal micro-frontend architecture with one host (`app-shell`) and two remotes (`remote-app-1` and `remote-app-2`).

---

## Features

- **Bundler:** Vite + [vite-plugin-federation](https://github.com/originjs/vite-plugin-federation)
- **Framework:** React 19
- **Architecture:** Micro-frontends (1 host + 2 remotes)

---

## Project Structure

<pre>
    horizontal-micro-frontend/
    │
    ├── app-shell # Main application (host) 
    ├── remote-app-1 # Remote micro-frontend 1 
    ├── remote-app-2 # Remote micro-frontend 2 
</pre>

Each project is an independent Vite + React app configured for module federation.

---

## Getting Started

### Prerequisites

- **Node.js** (v20 or newer recommended)
- **npm**

### Installation & Running

1. **Install dependencies in each project:**

   ```
   cd app-shell
   npm install

   cd ../remote-app-1
   npm install

   cd ../remote-app-2
   npm install
   ```

2. **Build and serve each project:**

   In each folder (`app-shell`, `remote-app-1`, `remote-app-2`), run:

   ```
   npm run serve
   ```

3. **Access the application:**

   Open your browser and go to:

   ```
   http://localhost:4173/
   ```

   > **Note:**  
   > Make sure all three apps are running at the same time for the federation to work properly.

---

## How It Works

- The **app-shell** (host) loads remote modules from **remote-app-1** and **remote-app-2** using module federation.
- Each remote exposes its components via `vite-plugin-federation` configuration.
- Shared dependencies (`react`, `react-dom`) are configured to avoid duplication and ensure compatibility.

---

## Useful Links

- [Vite Plugin Federation Documentation](https://github.com/originjs/vite-plugin-federation)
- [React 19 Release Notes](https://react.dev/blog/2024/12/05/react-19)

---

# Soar Front-End Dev Task

## Prerequisites

- [Node.js](https://nodejs.org/) (version 18+)
- npm (comes with Node.js)

## Quick Start

1. Clone the repository:
```bash
git clone https://github.com/ganeshbahire01/soar.git
```

2. Navigate to project directory:
```bash
cd soar
```

3. Install dependencies:
```bash
npm install
```

4. Start development server:
```bash
npm run dev
```

The application will start running at `http://localhost:5173`

### Build for Production
```bash
npm run build
```
Creates optimized build in `dist` directory

### Preview Production Build
```bash
npm run preview
```

## Project Structure
```
soar/
├── dist/               # Production build files
├── public/             # Static assets
├── styles/
|    └── globals.css    # Global styles
├── src/
│   ├── assets/         # Images, fonts, etc.
│   ├── components/     # React components
│   ├── App.jsx         # Root component
│   └── main.jsx        # Entry point 
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
└── README.md           # This file
```

## Adding Dependencies

Install new package:
```bash
npm install package-name
```

Install development dependency:
```bash
npm install -D package-name
```

## Environment Variables

1. Create `.env` file in root directory:
```env
VITE_API_URL=your_api_url
```

2. Access in code:
```javascript
console.log(import.meta.env.VITE_API_URL)
```

## Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://reactjs.org/)
- [Node.js Documentation](https://nodejs.org/)
- [Rechart](https://recharts.org/)

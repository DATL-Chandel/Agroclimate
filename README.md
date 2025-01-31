# Agroclimate Viewer

A web application that integrates Google Earth Engine for agricultural climate analysis with user tracking capabilities.

## Prerequisites

- React
- Git
- A Google Earth Engine account
- Firebase account (for analytics)

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/LokeshVarma-Konduru/Agroclimate-test_2.git
   cd Agroclimate-test_2
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory with the following variables:
   ```env
   VITE_FIREBASE_API_KEY="your-api-key"
   VITE_FIREBASE_AUTH_DOMAIN="your-auth-domain"
   VITE_FIREBASE_PROJECT_ID="your-project-id"
   VITE_FIREBASE_STORAGE_BUCKET="your-storage-bucket"
   VITE_FIREBASE_MESSAGING_SENDER_ID="your-sender-id"
   VITE_FIREBASE_APP_ID="your-app-id"
   VITE_FIREBASE_MEASUREMENT_ID="your-measurement-id"
   VITE_GEE_URL="your-earth-engine-app-url"
   ```
   Note: Contact the project administrator for the actual environment values.

## Development

1. **Start Development Server**
   ```bash
   npm run dev
   ```
   This will start the development server at `http://localhost:5173`

2. **Build for Production**
   ```bash
   npm run build
   ```

## Deployment to GitHub Pages

1. **First-time Setup**
   ```bash
   npm install gh-pages --save-dev
   ```

2. **Deploy**
   ```bash
   npm run deploy
   ```

3. **Post-deployment Setup (First time only)**
   - Go to your GitHub repository settings
   - Navigate to "Pages" section
   - Under "Build and deployment":
     - Source: "Deploy from a branch"
     - Branch: "gh-pages" / "/(root)"
     - Click "Save"

4. **Access the Deployed Site**
   Your site will be available at: `https://DATL-Chandel.github.io/Agroclimate/`

## Project Structure

```
agroclimate-viewer/
├── src/
│   ├── components/
│   │   └── Tracker.jsx      # User tracking component
│   ├── App.jsx             # Main application component
│   ├── firebase.jsx        # Firebase configuration
│   └── main.jsx           # Entry point
├── .env                    # Environment variables (not in git)
├── .gitignore             # Git ignore configuration
├── index.html             # HTML template
├── package.json           # Project dependencies
└── vite.config.js         # Vite configuration
```

## Important Notes

1. **Environment Variables**
   - Never commit the `.env` file to git
   - Always keep sensitive information in `.env`
   - Request the `.env` file from project administrators

2. **Deployment Process**
   - After making changes:
     ```bash
     git add .
     git commit -m "your changes"
     git push                # Push source code
     npm run deploy         # Deploy to GitHub Pages
     ```
   - To just redeploy without code changes:
     ```bash
     npm run deploy
     ```

3. **Troubleshooting**
   - If deployment fails, check:
     - All environment variables are set correctly
     - You have the necessary permissions
     - The gh-pages branch exists

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## Support

For any issues or questions, please contact the project administrators.

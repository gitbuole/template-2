I want to create a React web application for email pattern generation. Here's what I need:

1. File Structure:
   - Create a complete file structure for a React application using create-react-app
   - Include necessary configuration files
   - Organize components, utils, and constants folders

2. Dependencies:
   - List all required npm packages
   - Include package.json configuration

3. Components:
   - Main EmailGeneratorApp component that:
     * Accepts two CSV uploads: prospects and pattern dictionary
     * Prospects CSV has columns: first_name, last_name, account, domain
     * Dictionary CSV has columns: account, domain, pattern_code
   - FileUploader component for handling CSV uploads
   - ResultsTable for displaying generated emailsnp
   - Error handling component

4. Core Functionality:
   - Parse CSV files using Papaparse
   - Match prospects with patterns from dictionary
   - Generate emails based on patterns (FL_DOT, F_DOT_L, FLAST, FIRSTL)
   - Export results as CSV

5. Styling:
   - Use Tailwind CSS
   - Make it responsive
   - Include basic UI components like cards, buttons

Please provide the complete code with:
1. Initial setup instructions
2. File structure
3. Code for each component
4. Utility functions
5. Constants
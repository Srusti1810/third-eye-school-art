import { readFileSync } from 'fs';
import { resolve } from 'path';

// Dynamically import the built server
const handler = async (req, res) => {
  try {
    // Load the server module
    const serverPath = resolve(process.cwd(), 'dist/server/index.mjs');
    const { default: nitroApp } = await import(serverPath);
    
    // Call the Nitro app with the request
    return nitroApp.handle(req, res);
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default handler;

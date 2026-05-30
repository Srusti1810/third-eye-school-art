import { readFileSync } from 'fs';
import { resolve } from 'path';

export default async (req, res) => {
  try {
    // Load the server module
    const { default: nitroApp } = await import(
      new URL('../dist/server/index.mjs', import.meta.url)
    );
    
    // Handle the request
    return nitroApp.handler(req, res);
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

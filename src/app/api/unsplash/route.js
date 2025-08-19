import { createApi } from 'unsplash-js';
import fetch from 'node-fetch';

// Need to provide fetch for Node.js environment
global.fetch = fetch;

export default async function handler(req, res) {
  const { query, count = 1 } = req.query;
  
  const unsplash = createApi({
    accessKey: process.env.UNSPLASH_ACCESS_KEY,
  });

  try {
    const result = await unsplash.photos.getRandom({ 
      query: query,
      count: parseInt(count)
    });
    
    if (result.errors) {
      res.status(400).json({ errors: result.errors });
    } else {
      res.status(200).json(result.response);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
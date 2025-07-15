// Vercel Serverless Function - Node.js
export default function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }
  
  // Product data (converted from PHP)
  const products = [
    {
      product_name: 'Fudgee bar',
      product_price: 10
    },
    {
      product_name: 'Rebisco',
      product_price: 7
    },
    {
      product_name: 'Skyflakes',
      product_price: 7
    },
    {
      product_name: 'Fita',
      product_price: 7
    },
    {
      product_name: 'Hansel non/flavored',
      product_price: 7
    },
    {
      product_name: 'Rebisco flavored',
      product_price: 8
    },
    {
      product_name: 'Skyflakes flavored',
      product_price: 8
    },
    {
      product_name: 'Fita flavored',
      product_price: 8
    },
    {
      product_name: 'Marie',
      product_price: 7
    },
    {
      product_name: 'Fruitees',
      product_price: 8
    },
    {
      product_name: 'Valmer',
      product_price: 8
    },
    {
      product_name: 'Magic crackers',
      product_price: 7
    },
    {
      product_name: 'Magic small',
      product_price: 4
    },
    {
      product_name: 'Topps',
      product_price: 10
    },
    {
      product_name: 'Doowee choco',
      product_price: 13
    },
    {
      product_name: 'Pillows',
      product_price: 10
    },
    {
      product_name: 'Whoopie',
      product_price: 13
    },
    {
      product_name: 'Sumo',
      product_price: 8
    },
    {
      product_name: 'Combi',
      product_price: 8
    },
    {
      product_name: 'Calcheese',
      product_price: 15
    },
    {
      product_name: 'Calcheese M',
      product_price: 7
    },
    {
      product_name: 'Calcheese S',
      product_price: 3
    },
    {
      product_name: 'Bravo',
      product_price: 7
    },
    {
      product_name: 'Cupp Keyk',
      product_price: 8
    },
    {
      product_name: 'Yahoo',
      product_price: 6
    },
    {
      product_name: 'Eggnog',
      product_price: 8
    },
    {
      product_name: 'Kukis butter',
      product_price: 15
    },
    {
      product_name: 'Bingo',
      product_price: 8
    },
    {
      product_name: 'Dewberry',
      product_price: 8
    }
  ];
  
  // Return JSON response
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(products);
} 
exports.handler = async (event) => {
  const CORS = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  };
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers: CORS, body: '' };
  }
  return {
    statusCode: 200,
    headers: CORS,
    body: JSON.stringify({
      supabaseKey: process.env.SUPABASE_ANON_KEY || '',
      supabaseUrl: 'https://jciykcruuimxwfuhyurw.supabase.co'
    })
  };
};

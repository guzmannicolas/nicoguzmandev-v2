export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch {
        body = {};
      }
    }

    const token = body?.token;
    if (!token) {
      return res.status(400).json({ success: false, error: 'Captcha token is required' });
    }

    const secretKey = process.env.TURNSTILE_SECRET_KEY || '0x4AAAAAAF6opKzwEDgVmNgmFEGQM3oGjzw';

    const formData = new URLSearchParams();
    formData.append('secret', secretKey);
    formData.append('response', token);

    const cfRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: formData
    });

    const cfData = await cfRes.json();
    return res.status(200).json(cfData);
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
}

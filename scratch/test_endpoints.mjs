async function run() {
  const credentials = {
    grant_type: 'password',
    client_id: '0a1e105bfe7d',
    client_secret: 'f84c6da9771d42e9669f16c9365b320b',
    username: '76371864-6/abda',
    password: '39c3542401c5a6392ace44edbb533d7e'
  };

  try {
    const authRes = await fetch('https://api-billing.koywe.com/V1/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    });

    if (!authRes.ok) {
      console.error('Auth failed:', authRes.status);
      return;
    }

    const authData = await authRes.json();
    const token = authData.access_token || authData.token;
    console.log('Testing more endpoints...');

    const paths = [
      'quotations',
      'budgets',
      'proposals',
      'orders',
      'sales_orders',
      'estimates',
      'presupuestos',
      'cotizaciones_venta',
      'cotizaciones-venta'
    ];

    for (const path of paths) {
      const res = await fetch(`https://api-billing.koywe.com/V1/${path}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      console.log(`Endpoint V1/${path}: HTTP ${res.status}`);
    }

  } catch (err) {
    console.error('Error:', err);
  }
}

run();

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
    console.log('Scanning document types 1 to 1000...');

    // Fetch in batches of 50 concurrently
    const batchSize = 50;
    for (let i = 1; i <= 1000; i += batchSize) {
      const promises = [];
      for (let j = 0; j < batchSize; j++) {
        const id = i + j;
        promises.push(
          fetch(`https://api-billing.koywe.com/V1/document_types/${id}`, {
            headers: { 'Authorization': `Bearer ${token}` }
          }).then(async res => {
            if (res.ok) {
              const data = await res.json();
              return { id, name: data.name, folio: data.last_sequence_number };
            }
            return null;
          })
        );
      }
      const results = await Promise.all(promises);
      for (const r of results) {
        if (r) {
          console.log(`[FOUND] ID ${r.id}: ${r.name} (Folio: ${r.folio})`);
        }
      }
    }

  } catch (err) {
    console.error('Error:', err);
  }
}

run();

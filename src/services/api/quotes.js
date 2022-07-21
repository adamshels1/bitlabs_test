export const getQuotes = async ({ source_currency, target_crypto_asset_id, source_amount }) => {
    const headers = {
        'Content-Type': 'application/json',
    };

    const params = {
        method: 'POST',
        headers,
        body: JSON.stringify({ source_currency, target_crypto_asset_id, source_amount })
    };


    const url = `https://api-qjoa5a5qtq-uc.a.run.app/quotes`;
    console.log(url, params);
    const response = await fetch(url, params);
    console.log(response)
    const data = await response.json();
    console.log('data', data)

    return data;
}
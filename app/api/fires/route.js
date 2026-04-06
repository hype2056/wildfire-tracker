export async function GET() {
  const key = process.env.NASA_FIRMS_API_KEY;
  const url = `https://firms.modaps.eosdis.nasa.gov/api/area/csv/${key}/VIIRS_SNPP_NRT/-125,32,-114,42/1`;

  const res = await fetch(url);
  const text = await res.text();

  const lines = text.trim().split('\n');
  const headers = lines[0].split(',');

  const fires = lines.slice(1).map(line => {
    const values = line.split(',');
    const obj = {};
    headers.forEach((h, i) => obj[h.trim()] = values[i]?.trim());
    return obj;
  });

  return Response.json(fires);
}
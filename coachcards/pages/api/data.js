import { fetchCsvData } from '../../utils/fetchData';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const data = await fetchCsvData();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data' });
  }
}
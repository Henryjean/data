import Papa from 'papaparse';
import axios from 'axios';

export async function fetchCsvData() {
  // Replace with your GitHub raw CSV URL
  const csvUrl = 'https://raw.githubusercontent.com/Henryjean/data/refs/heads/main/player_rankings_2024.csv';
  
  try {
    const response = await axios.get(csvUrl);
    const parsed = Papa.parse(response.data, {
      header: true,
      skipEmptyLines: true
    });
    return parsed.data;
  } catch (error) {
    console.error('Error fetching CSV:', error);
    return [];
  }
}
import { NextApiRequest, NextApiResponse } from 'next';
import Airtable from 'airtable';

// Directly assigning the values you provided for testing
const AIRTABLE_API_KEY = "patMlcSP5EMwNjGxD.e856eb8cd24a65b4bd916bad73570946dd8011577cf85dc1bd5d16b61fef4f2e";
const AIRTABLE_BASE_ID = "appgy25uEospimmQ6";
const AIRTABLE_TABLE_NAME = "Table 1";

// Initialize Airtable with API key and base ID
const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_ID);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { fullName, email, useCase } = req.body;

    try {
      const records = await base(AIRTABLE_TABLE_NAME).create([
        {
          fields: {
            'Full Name': fullName,
            'Email Address': email,
            'Use-Case': useCase,
          },
        },
      ]);
      return res.status(200).json({ message: 'Record created', records });
    } catch (err) {
      console.error('Error creating Airtable record:', err);
      return res.status(500).json({ error: 'Failed to create record', details: err });
    }
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}

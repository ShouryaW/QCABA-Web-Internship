import { NextRequest, NextResponse } from 'next/server';
import sheets from '../../../../lib/googleSheets'; // Import the Google Sheets API client

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    const range = 'Users!A2:B';

    // Read data from Google Sheets
    const readRes = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    const rows = readRes.data.values || [];
    const user = rows.find((row) => row[0] === email && row[1] === password);

    if (!user) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    return NextResponse.json({ message: 'Login successful' }, { status: 200 });
  } catch (error) {
    console.error('Error during login:', error);
    return NextResponse.json({ error: 'Login failed. Please try again.' }, { status: 500 });
  }
}

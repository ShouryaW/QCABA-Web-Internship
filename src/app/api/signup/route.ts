import { NextRequest, NextResponse } from 'next/server';
import sheets from '../../../../lib/googleSheets';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    const range = 'Users!A2:E';

    // Check if the user already exists
    const readRes = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    const rows = readRes.data.values || [];
    const userExists = rows.some((row) => row[0] === email);

    if (userExists) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }

    // Add new user with "No Membership" initially
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'RAW',
      requestBody: {
        values: [[email, password, 'No Membership', '', '']],
      },
    });

    return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
  } catch (error) {
    console.error('Error during signup:', error);
    return NextResponse.json({ error: 'Signup failed. Please try again.' }, { status: 500 });
  }
}

import knexConnection from "./../../../database/connection";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: Request, response: Response) {
  const residues = await knexConnection('residues').select('*');

  return NextResponse.json({ residues });
}

export async function POST(request: Request, response: Response) {
  const body = await request.json();

  if (!body) return NextResponse.json({ error: 'Invalid body' });
  
  const residues = await knexConnection('residues').insert(body);

  return NextResponse.json({ residues });
}
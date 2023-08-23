import knexConnection from "@/database/connection";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const residues = await knexConnection('residues').select('*');

  return NextResponse.json({ residues });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!Object.keys(body).length) return NextResponse.json({ error: 'Invalid body' }, { status: 400 });
  
  const residues = await knexConnection('residues').insert(body);

  return NextResponse.json({ residues });
}
import knexConnection from "@/database/connection";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const collectPoints = await knexConnection('collect_points').select('*');

  return NextResponse.json({ collectPoints });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  if (!Object.keys(body).length) return NextResponse.json({ error: 'Invalid body' }, { status: 400 });
  const { residues, ...bodyWithoutResidues } = body;
  const trx = await knexConnection.transaction();
  try {
    const collectPointIds = await trx('collect_points').insert(bodyWithoutResidues);
  
    const collectPointResidues = residues.map((residue_id: number) => ({
      collect_point_id: collectPointIds[0],
      residue_id
    }));
  
    await trx('collect_point_residues').insert(collectPointResidues);
  
    trx.commit();
    return NextResponse.json({ collectPoint: { ...body, id: collectPointIds[0]} });
  } catch(e: any) {
    trx.rollback();
    return NextResponse.json({ error: e.message }, { status: 400 });
  }
}
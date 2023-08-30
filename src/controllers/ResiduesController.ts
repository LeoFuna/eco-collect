import { IResidue } from "@/entities/Residue";
import { ResiduesService } from "@/services/ResiduesService";
import { NextRequest, NextResponse } from "next/server";

const residuesService = new ResiduesService();

export class ResiduesController {
  async index() {
    const residues = await residuesService.index();
    return NextResponse.json({ residues }, { status: 200 });
  }

  async create(request: NextRequest) {
    const body = await request.json();

    if (!Object.keys(body).length) return NextResponse.json({ error: 'Invalid body' }, { status: 400 });
    
    const residueId = await residuesService.create(body as IResidue);
  
    return NextResponse.json({ residueId }, { status: 201 });
  }
}
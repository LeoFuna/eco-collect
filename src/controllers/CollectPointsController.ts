import { ICollectPointToCreate } from "@/entities/CollectPoint";
import { CollectPointService } from "@/services/CollectPointService";
import { isValidCreateCollectPointData } from "@/validations/collect-point.validations";
import { NextRequest, NextResponse } from "next/server";

export default class CollectPointsController {
  async index(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const filters = {
      uf: searchParams.get('uf') as string,
      city: searchParams.get('city') as string,
      residues: searchParams.get('residues')?.split(',')?.map((id) => Number(id)),
    };

    const collectPointService = new CollectPointService();
    const collectPoints = await collectPointService.index(filters);
  
    return NextResponse.json({ collectPoints });
  }
  async create(request: NextRequest) {
    const body: ICollectPointToCreate = await request.json();

    if (!isValidCreateCollectPointData(body)) return NextResponse.json({ error: 'Form data is invalid!' }, { status: 400 });

    const collectPointService = new CollectPointService();
    const response = await collectPointService.create(body);

    if (typeof response === 'string') {
      return NextResponse.json({ error: response }, { status: 400 });
    }
    return NextResponse.json({ collectPoint: response }, { status: 201 });
  }

  async show(request: NextRequest, { params }: { params: { id: string } }) {
    const id = Number(params.id);
    const collectPointService = new CollectPointService();
    const collectPoint = await collectPointService.show(id);

    if (!collectPoint) {
      return NextResponse.json({ error: 'Collect point not found' }, { status: 404 });
    }

    return NextResponse.json({ collectPoint });
  }
}
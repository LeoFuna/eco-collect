import { CollectPointService } from "@/services/CollectPointService";
import { NextRequest, NextResponse } from "next/server";

export default class CollectPointsController {
  async index() {
    const collectPointService = new CollectPointService();
    const collectPoints = await collectPointService.index();
  
    return NextResponse.json({ collectPoints });
  }
  async create(request: NextRequest) {
    const body = await request.json();
    if (!Object.keys(body).length) return NextResponse.json({ error: 'Invalid body' }, { status: 400 });
  
    const collectPointService = new CollectPointService();
    const response = await collectPointService.create(body);
  
    if (typeof response === 'string') {
      return NextResponse.json({ error: response }, { status: 400 });
    }
    return NextResponse.json({ collectPoint: response });
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
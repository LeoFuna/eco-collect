import CollectPointsController from "@/controllers/CollectPointsController";
import { NextRequest } from "next/server";

const collectPointsController = new CollectPointsController();

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  return collectPointsController.show(request, { params });
}

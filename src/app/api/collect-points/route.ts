import CollectPointsController from "@/controllers/CollectPointsController";
import { NextRequest } from "next/server";

const collectPointsController = new CollectPointsController();

export async function GET(request: NextRequest) {
  return collectPointsController.index(request);
}

export async function POST(request: NextRequest) {
  return collectPointsController.create(request);
}

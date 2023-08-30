import { ResiduesController } from "@/controllers/ResiduesController";
import { NextRequest } from "next/server";

const residuesController =  new ResiduesController();

export async function GET() { return residuesController.index() }

export async function POST(request: NextRequest) { return residuesController.create(request) }
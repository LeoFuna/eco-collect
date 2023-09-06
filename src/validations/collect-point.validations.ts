import { ICollectPointToCreate } from "@/entities/CollectPoint";

export function isValidCreateCollectPointData(body: ICollectPointToCreate) {
  const { name, city, email, latitude, longitude, residues, uf, whatsapp } = body
  if (!name?.length) return false;
  if (!email?.length) return false;
  if (!whatsapp?.length) return false;
  if (!uf?.length) return false;
  if (!city?.length) return false;
  if (!latitude) return false;
  if (!longitude) return false;
  if (!residues?.length) return false;
  return true;
}
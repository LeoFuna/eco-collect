export interface ICollectPoint {
  id?: number;
  image?: string;
  name: string;
  email: string;
  whatsapp: string;
  latitude: number;
  longitude: number;
  city: string;
  uf: string;
}

export interface ICollectPointToCreate extends ICollectPoint {
  residues: number[];
}
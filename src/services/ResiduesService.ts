import knexConnection from "@/database/connection";
import { IResidue } from "@/entities/Residue";

export class ResiduesService {
  async index() {
    const residues = await knexConnection('residues').select('*');

    return residues as IResidue[];
  }

  async create(body: IResidue) {
    const [residueId] = await knexConnection('residues').insert(body);

    return residueId;
  }
}
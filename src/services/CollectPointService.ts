import knexConnection from "@/database/connection";
import { ICollectPointToCreate } from "@/entities/CollectPoint";

export class CollectPointService {
  async index({ city, uf, residues }: { city?: string, uf?: string, residues?: number[] }) {
    const collectPoints = await knexConnection('collect_points')
    .join('collect_point_residues', 'collect_points.id', '=', 'collect_point_residues.collect_point_id')
    .where((builder) => {
      city && builder.where('city', city);
      uf && builder.where('uf', uf);
      residues && builder.whereIn('collect_point_residues.residue_id', residues);
    })
    .distinct()
    .select('collect_points.*');

    return collectPoints;
  }
  async create(body: ICollectPointToCreate) {
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
      return { ...body, id: collectPointIds[0]};
    } catch(e: any) {
      trx.rollback();
      return e?.message;
    }
  }

  async show(id: number) {
    const collectPoint = await knexConnection('collect_points').select('*').where('id', id).first();

    if (!collectPoint) return null;

    const residues = await knexConnection('residues')
      .join('collect_point_residues', 'residues.id', '=', 'collect_point_residues.residue_id')
      .where('collect_point_residues.collect_point_id', id)
      .select('residues.name');

    return { ...collectPoint, residues };
  }
}
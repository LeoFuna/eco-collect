import ResidueGrid from "./ResidueGrid";

export default function ResiduesFieldset() {
  return (
    <fieldset>
      <div className="fieldset-title-div">
        <h2 className="fieldset-title">Itens de coleta</h2>
        <p className="fieldset-p">Selecione um ou mais resíduos abaixo</p>
      </div>
      <ResidueGrid />
    </fieldset>
  )
}
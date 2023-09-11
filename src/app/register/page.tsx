import './register.css';
import { IResidue } from "@/entities/Residue";
import RegisterForm from "@/components/Register/RegisterForm";

const getResidues = async () => {
  const response = await fetch('http://localhost:3000/api/residues', { cache: 'no-cache' });
  if (!response.ok) throw new Error('Error fetching residues');

  const data = await response.json();
  return data.residues as IResidue[];
}

export default async function Register() {
  const residues = await getResidues();

  return (
    <main className='main-register'>
      <RegisterForm
        residues={residues}
      />
    </main>
  )
}
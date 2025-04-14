// src/components/formation-detail/FormationDetailPage.tsx

import { useParams } from "react-router-dom";
import { formationsData } from "../../data/formationsData";
import { FormationPage } from "./FormationPage"; 
// or wherever you placed FormationPage

export default function FormationDetailPage() {
  const { name } = useParams<{ name: string }>();

  // Grab the object from your data file by key
  const formation = formationsData[name as keyof typeof formationsData];

  if (!formation) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-xl font-bold">Formation introuvable</h2>
        <p>Le slug "{name}" ne correspond à aucune formation connue.</p>
      </div>
    );
  }

  // Pass that data to FormationPage (the big reusable layout)
  return <FormationPage data={formation} />;
}
import { DestinationWhereUniqueInput } from "../destination/DestinationWhereUniqueInput";

export type DrugCreateInput = {
  description?: string | null;
  destination?: DestinationWhereUniqueInput | null;
  dosage?: string | null;
  drug?: "Analgin" | "Dimidrol" | null;
  expire: Date;
};

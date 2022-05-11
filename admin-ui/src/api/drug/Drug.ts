import { Destination } from "../destination/Destination";

export type Drug = {
  createdAt: Date;
  description: string | null;
  destination?: Destination | null;
  dosage: string | null;
  drug?: "Analgin" | "Dimidrol" | null;
  expire: Date;
  id: string;
  updatedAt: Date;
};

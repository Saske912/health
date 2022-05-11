import { SortOrder } from "../../util/SortOrder";

export type DrugOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  destinationId?: SortOrder;
  dosage?: SortOrder;
  drug?: SortOrder;
  expire?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};

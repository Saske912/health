import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DestinationWhereUniqueInput } from "../destination/DestinationWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";

export type DrugWhereInput = {
  description?: StringNullableFilter;
  destination?: DestinationWhereUniqueInput;
  dosage?: StringNullableFilter;
  drug?: "Analgin" | "Dimidrol";
  expire?: DateTimeFilter;
  id?: StringFilter;
};

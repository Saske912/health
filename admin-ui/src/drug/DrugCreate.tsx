import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateInput,
} from "react-admin";

import { DestinationTitle } from "../destination/DestinationTitle";

export const DrugCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <ReferenceInput
          source="destination.id"
          reference="Destination"
          label="destination"
        >
          <SelectInput optionText={DestinationTitle} />
        </ReferenceInput>
        <TextInput label="dosage" source="dosage" />
        <SelectInput
          source="drug"
          label="Drug"
          choices={[
            { label: "analgin", value: "Analgin" },
            { label: "dimidrol", value: "Dimidrol" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateInput label="expire" source="expire" />
      </SimpleForm>
    </Create>
  );
};

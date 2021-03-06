/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DestinationWhereInput } from "./DestinationWhereInput";
import { Type } from "class-transformer";
import { DestinationOrderByInput } from "./DestinationOrderByInput";

@ArgsType()
class DestinationFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DestinationWhereInput,
  })
  @Field(() => DestinationWhereInput, { nullable: true })
  @Type(() => DestinationWhereInput)
  where?: DestinationWhereInput;

  @ApiProperty({
    required: false,
    type: [DestinationOrderByInput],
  })
  @Field(() => [DestinationOrderByInput], { nullable: true })
  @Type(() => DestinationOrderByInput)
  orderBy?: Array<DestinationOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { DestinationFindManyArgs };

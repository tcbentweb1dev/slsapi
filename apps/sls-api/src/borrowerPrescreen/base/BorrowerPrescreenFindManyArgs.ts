/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BorrowerPrescreenWhereInput } from "./BorrowerPrescreenWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { BorrowerPrescreenOrderByInput } from "./BorrowerPrescreenOrderByInput";

@ArgsType()
class BorrowerPrescreenFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BorrowerPrescreenWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => BorrowerPrescreenWhereInput, { nullable: true })
  @Type(() => BorrowerPrescreenWhereInput)
  where?: BorrowerPrescreenWhereInput;

  @ApiProperty({
    required: false,
    type: [BorrowerPrescreenOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [BorrowerPrescreenOrderByInput], { nullable: true })
  @Type(() => BorrowerPrescreenOrderByInput)
  orderBy?: Array<BorrowerPrescreenOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { BorrowerPrescreenFindManyArgs as BorrowerPrescreenFindManyArgs };

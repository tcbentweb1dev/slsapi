import * as graphql from "@nestjs/graphql";
import { BorrowerPrescreenResolverBase } from "./base/borrowerPrescreen.resolver.base";
import { BorrowerPrescreen } from "./base/BorrowerPrescreen";
import { BorrowerPrescreenService } from "./borrowerPrescreen.service";

@graphql.Resolver(() => BorrowerPrescreen)
export class BorrowerPrescreenResolver extends BorrowerPrescreenResolverBase {
  constructor(protected readonly service: BorrowerPrescreenService) {
    super(service);
  }
}

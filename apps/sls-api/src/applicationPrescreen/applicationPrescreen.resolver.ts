import * as graphql from "@nestjs/graphql";
import { ApplicationPrescreenResolverBase } from "./base/applicationPrescreen.resolver.base";
import { ApplicationPrescreen } from "./base/ApplicationPrescreen";
import { ApplicationPrescreenService } from "./applicationPrescreen.service";

@graphql.Resolver(() => ApplicationPrescreen)
export class ApplicationPrescreenResolver extends ApplicationPrescreenResolverBase {
  constructor(protected readonly service: ApplicationPrescreenService) {
    super(service);
  }
}

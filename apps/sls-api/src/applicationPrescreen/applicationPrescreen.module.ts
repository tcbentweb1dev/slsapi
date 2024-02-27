import { Module } from "@nestjs/common";
import { ApplicationPrescreenModuleBase } from "./base/applicationPrescreen.module.base";
import { ApplicationPrescreenService } from "./applicationPrescreen.service";
import { ApplicationPrescreenResolver } from "./applicationPrescreen.resolver";

@Module({
  imports: [ApplicationPrescreenModuleBase],
  providers: [ApplicationPrescreenService, ApplicationPrescreenResolver],
  exports: [ApplicationPrescreenService],
})
export class ApplicationPrescreenModule {}

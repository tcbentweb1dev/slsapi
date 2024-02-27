import { Module } from "@nestjs/common";
import { BorrowerPrescreenModuleBase } from "./base/borrowerPrescreen.module.base";
import { BorrowerPrescreenService } from "./borrowerPrescreen.service";
import { BorrowerPrescreenResolver } from "./borrowerPrescreen.resolver";

@Module({
  imports: [BorrowerPrescreenModuleBase],
  providers: [BorrowerPrescreenService, BorrowerPrescreenResolver],
  exports: [BorrowerPrescreenService],
})
export class BorrowerPrescreenModule {}

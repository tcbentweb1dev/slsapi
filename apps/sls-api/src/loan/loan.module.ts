import { Module } from "@nestjs/common";
import { LoanModuleBase } from "./base/loan.module.base";
import { LoanService } from "./loan.service";
import { LoanResolver } from "./loan.resolver";

@Module({
  imports: [LoanModuleBase],
  providers: [LoanService, LoanResolver],
  exports: [LoanService],
})
export class LoanModule {}

import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BorrowerPrescreenServiceBase } from "./base/borrowerPrescreen.service.base";

@Injectable()
export class BorrowerPrescreenService extends BorrowerPrescreenServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

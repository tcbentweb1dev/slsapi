import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ApplicationPrescreenServiceBase } from "./base/applicationPrescreen.service.base";

@Injectable()
export class ApplicationPrescreenService extends ApplicationPrescreenServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  BorrowerPrescreen, // @ts-ignore
  ApplicationPrescreen,
} from "@prisma/client";

export class BorrowerPrescreenServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.BorrowerPrescreenCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.BorrowerPrescreenCountArgs>
  ): Promise<number> {
    return this.prisma.borrowerPrescreen.count(args);
  }

  async borrowerPrescreens<T extends Prisma.BorrowerPrescreenFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.BorrowerPrescreenFindManyArgs>
  ): Promise<BorrowerPrescreen[]> {
    return this.prisma.borrowerPrescreen.findMany(args);
  }
  async borrowerPrescreen<T extends Prisma.BorrowerPrescreenFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.BorrowerPrescreenFindUniqueArgs>
  ): Promise<BorrowerPrescreen | null> {
    return this.prisma.borrowerPrescreen.findUnique(args);
  }
  async createBorrowerPrescreen<T extends Prisma.BorrowerPrescreenCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BorrowerPrescreenCreateArgs>
  ): Promise<BorrowerPrescreen> {
    return this.prisma.borrowerPrescreen.create<T>(args);
  }
  async updateBorrowerPrescreen<T extends Prisma.BorrowerPrescreenUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BorrowerPrescreenUpdateArgs>
  ): Promise<BorrowerPrescreen> {
    return this.prisma.borrowerPrescreen.update<T>(args);
  }
  async deleteBorrowerPrescreen<T extends Prisma.BorrowerPrescreenDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.BorrowerPrescreenDeleteArgs>
  ): Promise<BorrowerPrescreen> {
    return this.prisma.borrowerPrescreen.delete(args);
  }

  async getApplicationId(
    parentId: string
  ): Promise<ApplicationPrescreen | null> {
    return this.prisma.borrowerPrescreen
      .findUnique({
        where: { id: parentId },
      })
      .applicationId();
  }
}

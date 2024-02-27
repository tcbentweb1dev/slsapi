/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { ApplicationPrescreen } from "./ApplicationPrescreen";
import { ApplicationPrescreenCountArgs } from "./ApplicationPrescreenCountArgs";
import { ApplicationPrescreenFindManyArgs } from "./ApplicationPrescreenFindManyArgs";
import { ApplicationPrescreenFindUniqueArgs } from "./ApplicationPrescreenFindUniqueArgs";
import { CreateApplicationPrescreenArgs } from "./CreateApplicationPrescreenArgs";
import { UpdateApplicationPrescreenArgs } from "./UpdateApplicationPrescreenArgs";
import { DeleteApplicationPrescreenArgs } from "./DeleteApplicationPrescreenArgs";
import { ApplicationPrescreenService } from "../applicationPrescreen.service";
@graphql.Resolver(() => ApplicationPrescreen)
export class ApplicationPrescreenResolverBase {
  constructor(protected readonly service: ApplicationPrescreenService) {}

  async _applicationPrescreensMeta(
    @graphql.Args() args: ApplicationPrescreenCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ApplicationPrescreen])
  async applicationPrescreens(
    @graphql.Args() args: ApplicationPrescreenFindManyArgs
  ): Promise<ApplicationPrescreen[]> {
    return this.service.applicationPrescreens(args);
  }

  @graphql.Query(() => ApplicationPrescreen, { nullable: true })
  async applicationPrescreen(
    @graphql.Args() args: ApplicationPrescreenFindUniqueArgs
  ): Promise<ApplicationPrescreen | null> {
    const result = await this.service.applicationPrescreen(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ApplicationPrescreen)
  async createApplicationPrescreen(
    @graphql.Args() args: CreateApplicationPrescreenArgs
  ): Promise<ApplicationPrescreen> {
    return await this.service.createApplicationPrescreen({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => ApplicationPrescreen)
  async updateApplicationPrescreen(
    @graphql.Args() args: UpdateApplicationPrescreenArgs
  ): Promise<ApplicationPrescreen | null> {
    try {
      return await this.service.updateApplicationPrescreen({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ApplicationPrescreen)
  async deleteApplicationPrescreen(
    @graphql.Args() args: DeleteApplicationPrescreenArgs
  ): Promise<ApplicationPrescreen | null> {
    try {
      return await this.service.deleteApplicationPrescreen(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}

/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateDestinationArgs } from "./CreateDestinationArgs";
import { UpdateDestinationArgs } from "./UpdateDestinationArgs";
import { DeleteDestinationArgs } from "./DeleteDestinationArgs";
import { DestinationFindManyArgs } from "./DestinationFindManyArgs";
import { DestinationFindUniqueArgs } from "./DestinationFindUniqueArgs";
import { Destination } from "./Destination";
import { DrugFindManyArgs } from "../../drug/base/DrugFindManyArgs";
import { Drug } from "../../drug/base/Drug";
import { Pacient } from "../../pacient/base/Pacient";
import { User } from "../../user/base/User";
import { DestinationService } from "../destination.service";

@graphql.Resolver(() => Destination)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class DestinationResolverBase {
  constructor(
    protected readonly service: DestinationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Destination",
    action: "read",
    possession: "any",
  })
  async _destinationsMeta(
    @graphql.Args() args: DestinationFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Destination])
  @nestAccessControl.UseRoles({
    resource: "Destination",
    action: "read",
    possession: "any",
  })
  async destinations(
    @graphql.Args() args: DestinationFindManyArgs
  ): Promise<Destination[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Destination, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Destination",
    action: "read",
    possession: "own",
  })
  async destination(
    @graphql.Args() args: DestinationFindUniqueArgs
  ): Promise<Destination | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Destination)
  @nestAccessControl.UseRoles({
    resource: "Destination",
    action: "create",
    possession: "any",
  })
  async createDestination(
    @graphql.Args() args: CreateDestinationArgs
  ): Promise<Destination> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        destination: args.data.destination
          ? {
              connect: args.data.destination,
            }
          : undefined,

        doctor: args.data.doctor
          ? {
              connect: args.data.doctor,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Destination)
  @nestAccessControl.UseRoles({
    resource: "Destination",
    action: "update",
    possession: "any",
  })
  async updateDestination(
    @graphql.Args() args: UpdateDestinationArgs
  ): Promise<Destination | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          destination: args.data.destination
            ? {
                connect: args.data.destination,
              }
            : undefined,

          doctor: args.data.doctor
            ? {
                connect: args.data.doctor,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Destination)
  @nestAccessControl.UseRoles({
    resource: "Destination",
    action: "delete",
    possession: "any",
  })
  async deleteDestination(
    @graphql.Args() args: DeleteDestinationArgs
  ): Promise<Destination | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Drug])
  @nestAccessControl.UseRoles({
    resource: "Drug",
    action: "read",
    possession: "any",
  })
  async drugs(
    @graphql.Parent() parent: Destination,
    @graphql.Args() args: DrugFindManyArgs
  ): Promise<Drug[]> {
    const results = await this.service.findDrugs(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Pacient, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Pacient",
    action: "read",
    possession: "any",
  })
  async destination(
    @graphql.Parent() parent: Destination
  ): Promise<Pacient | null> {
    const result = await this.service.getDestination(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async doctor(@graphql.Parent() parent: Destination): Promise<User | null> {
    const result = await this.service.getDoctor(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}

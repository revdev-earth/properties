import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";

export class PropertyManager {
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>;

  constructor(
    prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>
  ) {
    this.prisma = prisma;
  }

  async createProperty({ data }: { data: Prisma.PropertyCreateInput }) {
    try {
      return await this.prisma.property.create({
        data: data,
      });
    } catch (error) {
      throw error;
    }
  }

  async getProperties(props?: { options?: Prisma.PropertyFindManyArgs }) {
    try {
      return await this.prisma.property.findMany(props?.options);
    } catch (error) {
      throw error;
    }
  }

  async getPropertyById({
    id,
    options,
  }: {
    id: string;
    options?: Prisma.PropertyFindUniqueArgs;
  }) {
    try {
      return await this.prisma.property.findUnique({
        where: { id },
        ...options,
      });
    } catch (error) {
      throw error;
    }
  }

  async updateProperty({
    id,
    data,
  }: {
    id: string;
    data: Prisma.PropertyUpdateInput;
  }) {
    try {
      return await this.prisma.property.update({
        where: { id },
        data: data,
      });
    } catch (error) {
      throw error;
    }
  }

  async deleteProperty({ id }: { id: string }) {
    try {
      return await this.prisma.property.delete({
        where: { id },
      });
    } catch (error) {
      throw error;
    }
  }

  async getPropertiesWithAddress() {
    try {
      return await this.prisma.property.findMany({
        include: {
          information: {
            select: { streetAndNumber: true, neighborhood: true },
          },
        },
      });
    } catch (error) {
      throw error;
    }
  }

  async getPropertyForReduxWhenComponentLoad({ id }: { id: string }) {
    try {
      return await this.prisma.property.findUnique({
        where: { id },
        include: {
          information: true,
          legal: true,
          insurances: true,
          tenant: true,
          services: { include: { servicePayment: true, incident: true } },
          economy: { include: { transactions: true } },
          equipments: { include: { maintenances: true } },
          architectures: { include: { maintenances: true, subelements: true } },
        },
      });
    } catch (error) {
      throw error;
    }
  }
}

export const propertyManager = new PropertyManager(new PrismaClient());

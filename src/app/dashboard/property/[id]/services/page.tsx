"use client";

import { useEffect, useState } from "react";
import { PropertyBasicService } from "@prisma/client";

import { PropsJustParams } from "../types";
import { getPropertyServicesByPropertyId } from " +/actions/property/actions_and_mutations";
import CardService from "./features/cardService";

export default function Services({ params }: PropsJustParams) {
  const [id, setId] = useState<string | null>(null);
  const [services, setServices] = useState<PropertyBasicService[] | null>(null);

  useEffect(() => {
    async function resolveParams() {
      const resolvedParams = await params;
      setId(resolvedParams.id);
    }
    resolveParams();
  }, [params]);

  useEffect(() => {
    if (id) {
      async function fetchServicesProperty() {
        if (id !== null) {
          const property = await getPropertyServicesByPropertyId({ id });
          const { basicService } = property || { basicService: null };
          setServices(basicService);
        }
      }
      fetchServicesProperty();
    }
  }, [id]);

  if (!services) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-5">
      {services.map((service) => (
        <CardService key={service.id} service={service} />
      ))}
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { PropertyLegal } from "@prisma/client";

import { PropsJustParams } from "../types";
import { getPropertyLegalByPropertyId } from " +/actions/property/actions_and_mutations";

export default function Information({ params }: PropsJustParams) {
  const [id, setId] = useState<string | null>(null);
  const [legal, setLegal] = useState<PropertyLegal | null>(null);

  useEffect(() => {
    async function resolveParams() {
      const resolvedParams = await params;
      setId(resolvedParams.id);
    }
    resolveParams();
  }, [params]);

  useEffect(() => {
    if (id) {
      async function fetchInformationProperty() {
        if (id !== null) {
          const property = await getPropertyLegalByPropertyId({ id });
          const { propertyLegal } = property || { propertyLegal: null };
          setLegal(propertyLegal);
        }
      }
      fetchInformationProperty();
    }
  }, [id]);

  if (!legal) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex gap-5   h-fit">
      <div
        key={legal.id}
        className="flex flex-col gap-1 border-b rounded-lg p-5  bg-slate-100"
      >
        <h3 className="font-bold text-xl mb-3">
          Property {legal.id} Legal Information
        </h3>

        <div className="p-5 rounded-lg border">
          <p>Deed number: {legal.deedNumber}</p>
          <p>Notary: {legal.notary}</p>
          <p>
            Deed registration date: {new Date(legal.deedDate).toDateString()}
          </p>
          <p>Public registry number: {legal.publicRegistry}</p>
        </div>

        <div className="p-5 rounded-lg border">
          <p>Owner name: {legal.ownerName}</p>
          <p>Owner ID: {legal.ownerID}</p>
          <p>Owner address: {legal.ownerAddress}</p>
          <p>Owner contact: {legal.ownerContact}</p>
        </div>
        <div className="p-5 rounded-lg border">
          <p>Zoning classification: {legal.zoning}</p>
          <p>Usage restrictions: {legal.usageRestrictions}</p>
          <p>Permits and licenses: {legal.permitsAndLicenses}</p>
          <p>Zoning history: {legal.zoningHistory}</p>
        </div>

        <div className="p-5 rounded-lg border">
          <p>Lease contract: {legal.leaseContract}</p>
          <p>Contract duration: {legal.contractDuration}</p>
          <p>Tenant responsibilities: {legal.tenantResponsibilities}</p>
          <p>Owner responsibilities: {legal.ownerResponsibilities}</p>
        </div>

        <div className="p-5 rounded-lg border">
          <p>Ownership changes: {legal.ownershipChanges}</p>
          <p>Mortgages or liens: {legal.mortgagesOrLiens}</p>
          <p>Legal disputes: {legal.legalDisputes}</p>
          <p>Auction history: {legal.auctionHistory}</p>
        </div>

        <div className="p-5 rounded-lg border">
          <p>Property tax: {legal.propertyTax}</p>
          <p>Special taxes or fees: {legal.specialTaxesOrFees}</p>
          <p>Debt-free certificates: {legal.debtFreeCertificates}</p>
        </div>

        <div className="p-5 rounded-lg border">
          <p>Construction warranty: {legal.constructionWarranty}</p>
          <p>Equipment warranties: {legal.equipmentWarranties}</p>
          <p>Structural safety certificates: {legal.structuralSafetyCerts}</p>
        </div>
        <div className="p-5 rounded-lg border">
          <p>Internal regulations: {legal.internalRegulations}</p>
          <p>Local norms: {legal.localNorms}</p>
          <p>Environmental permits: {legal.environmentalPermits}</p>
        </div>
      </div>
    </div>
  );
}

"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { path: "preventive", label: "Preventive" },
  { path: "corrective", label: "Corrective" },
  { path: "request", label: "Request" },
  { path: "inspectionHistory", label: "Inspection History" },
  { path: "maintenanceNotes", label: "MaintenanceNotes" },
];

export function NavLinks() {
  const pathname = usePathname();

  const pathParts = pathname.split("/"); // Split the current path by '/' and retrieve the property ID from the correct position
  const propertyId = pathParts[3]; // The property ID is assumed to be in the 4th position

  return (
    <nav className="flex gap-5">
      {navLinks.map((link) => (
        <Link
          key={link.path}
          className={`py-3 px-4 bg-[#D9D9D9] rounded-full transition-all
            ${pathname.includes(link.path) ? "font-bold" : ""}
          `}
          href={`/dashboard/property/${propertyId}/maintenance/${link.path}`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
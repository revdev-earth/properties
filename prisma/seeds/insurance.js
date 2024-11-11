const propertyInsurance1 = {
  insuranceType: "Homeowners Insurance",
  insuranceCompany: "Global Insurance Corp",
  policyNumber: "POL123456789",
  startDate: new Date("2024-01-01"),
  expirationDate: new Date("2025-01-01"),
  insuredAmount: 300000.0,
  premiumCost: 1500.0,
  mainCoverage: "Fire, Theft, and Natural Disasters",
  thirdPartyCoverage: "Liability up to $100,000",
  equipmentCoverage: "Up to $10,000 for household appliances",
  coverageExclusions: "Earthquakes and Floods",
  applicableDeductibles: "$500 per incident",
  emergencyContact: "+1234567890",
  insuranceAgentName: "John Doe",
  insuranceAgentContact: "+0987654321",
  claimProcedures: "Contact agent within 24 hours of incident",
  renewalConditions:
    "Automatic renewal unless canceled 30 days before expiration",
  coverageReviews: "Annual review recommended",
  specialClauses: "Must have a security system installed",
};

const propertyInsurance2 = {
  insuranceType: "Commercial Property Insurance",
  insuranceCompany: "SecureLife Insurance",
  policyNumber: "COM987654321",
  startDate: new Date("2024-06-15"),
  expirationDate: new Date("2025-06-15"),
  insuredAmount: 500000.0,
  premiumCost: 2500.0,
  mainCoverage: "Fire, Theft, Vandalism",
  thirdPartyCoverage: "Liability up to $200,000",
  equipmentCoverage: "Up to $20,000 for industrial equipment",
  coverageExclusions: "Damage due to tenant negligence",
  applicableDeductibles: "$1000 per incident",
  emergencyContact: "+1234567899",
  insuranceAgentName: "Jane Smith",
  insuranceAgentContact: "+0987654322",
  claimProcedures: "Submit claim through online portal within 48 hours",
  renewalConditions: "Renewal requires updated inspection report",
  coverageReviews: "Semi-annual review recommended",
  specialClauses: "Property must be inspected annually for eligibility",
};

module.exports = {
  propertyInsurance1,
  propertyInsurance2,
};
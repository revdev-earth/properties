const pay1Service1 = {
  dueDate: new Date("2024-03-10"),
  paymentStatus: "paid",
  averageAmount: 85.0,
  paymentDate: new Date("2024-03-09"),
  amount: 85.0,
  paymentNotes: "Pago completo por el servicio de electricidad, mes de marzo",
  measurementMethod: "Medidor de electricidad (kWh)",
  readingDate: new Date("2024-03-05"),
  readingValue: 270.0,
  readingNotes: "Lectura mensual del medidor de electricidad",
  averageConsumption: 260.0,
};

// Pago 2 - Electricidad (abril 2024)
const pay2Service1 = {
  dueDate: new Date("2024-04-10"),
  paymentStatus: "paid",
  averageAmount: 85.0,
  paymentDate: new Date("2024-04-09"),
  amount: 85.0,
  paymentNotes: "Pago completo por el servicio de electricidad, mes de abril",
  measurementMethod: "Medidor de electricidad (kWh)",
  readingDate: new Date("2024-04-05"),
  readingValue: 280.0,
  readingNotes: "Lectura mensual del medidor de electricidad",
  averageConsumption: 275.0,
};

// Pago 3 - Electricidad (mayo 2024)
const pay3Service1 = {
  dueDate: new Date("2024-05-10"),
  paymentStatus: "paid", // Cambio a "paid" para llenar el paymentDate
  averageAmount: 85.0,
  paymentDate: new Date("2024-05-09"),
  amount: 85.0,
  paymentNotes: "Pago completo por el servicio de electricidad, mes de mayo",
  measurementMethod: "Medidor de electricidad (kWh)",
  readingDate: new Date("2024-05-05"),
  readingValue: 300.0,
  readingNotes: "Lectura mensual del medidor de electricidad",
  averageConsumption: 290.0,
};

// Pago 1 - Internet (marzo 2024)
const pay1Service2 = {
  dueDate: new Date("2024-03-05"),
  paymentStatus: "paid",
  averageAmount: 45.0,
  paymentDate: new Date("2024-03-04"),
  amount: 45.0,
  paymentNotes: "Pago completo por el servicio de internet, mes de marzo",
  measurementMethod: "Servicio de internet",
  readingDate: new Date("2024-03-01"),
  readingValue: 1.0,
  readingNotes: "Sin incidencias en el servicio de internet",
  averageConsumption: 45.0,
};

// Pago 2 - Internet (abril 2024)
const pay2Service2 = {
  dueDate: new Date("2024-04-05"),
  paymentStatus: "paid",
  averageAmount: 45.0,
  paymentDate: new Date("2024-04-04"),
  amount: 45.0,
  paymentNotes: "Pago completo por el servicio de internet, mes de abril",
  measurementMethod: "Servicio de internet",
  readingDate: new Date("2024-04-01"),
  readingValue: 1.0,
  readingNotes: "Sin incidencias en el servicio de internet",
  averageConsumption: 45.0,
};

// Pago 3 - Internet (mayo 2024)
const pay3Service2 = {
  dueDate: new Date("2024-05-05"),
  paymentStatus: "paid", // Cambio a "paid" para llenar el paymentDate
  averageAmount: 45.0,
  paymentDate: new Date("2024-05-04"),
  amount: 45.0,
  paymentNotes: "Pago completo por el servicio de internet, mes de mayo",
  measurementMethod: "Servicio de internet",
  readingDate: new Date("2024-05-01"),
  readingValue: 1.0,
  readingNotes: "Sin incidencias en el servicio de internet",
  averageConsumption: 45.0,
};

const pay1Service3 = {
  dueDate: new Date("2024-03-15"),
  paymentStatus: "paid",
  averageAmount: 55.0,
  paymentDate: new Date("2024-03-14"),
  amount: 55.0,
  paymentNotes: "Pago completo por el servicio de agua, mes de marzo",
  measurementMethod: "Medidor de agua",
  readingDate: new Date("2024-03-10"),
  readingValue: 150.0,
  readingNotes: "Lectura mensual del medidor de agua",
  averageConsumption: 150.0,
};

// Pago 2 - Agua (abril 2024)
const pay2Service3 = {
  dueDate: new Date("2024-04-15"),
  paymentStatus: "paid", // Cambio a "paid" para llenar el paymentDate
  averageAmount: 55.0,
  paymentDate: new Date("2024-04-14"),
  amount: 55.0,
  paymentNotes: "Pago completo para el servicio de agua, mes de abril",
  measurementMethod: "Medidor de agua",
  readingDate: new Date("2024-04-10"),
  readingValue: 160.0,
  readingNotes: "Lectura mensual del medidor de agua",
  averageConsumption: 155.0,
};

// Pago 3 - Agua (mayo 2024)
const pay3Service3 = {
  dueDate: new Date("2024-05-15"),
  paymentStatus: "paid", // Cambio a "paid" para llenar el paymentDate
  averageAmount: 55.0,
  paymentDate: new Date("2024-05-14"),
  amount: 55.0,
  paymentNotes: "Pago completo para el servicio de agua, mes de mayo",
  measurementMethod: "Medidor de agua",
  readingDate: new Date("2024-05-10"),
  readingValue: 170.0,
  readingNotes: "Lectura en proceso para el medidor de agua",
  averageConsumption: 160.0,
};

// Pago 1 - Gas (marzo 2024)
const pay1Service4 = {
  dueDate: new Date("2024-03-25"),
  paymentStatus: "paid",
  averageAmount: 40.0,
  paymentDate: new Date("2024-03-24"),
  amount: 40.0,
  paymentNotes: "Pago completo por el servicio de gas, mes de marzo",
  measurementMethod: "Tanque de gas",
  readingDate: new Date("2024-03-20"),
  readingValue: 60.0,
  readingNotes: "Lectura del tanque de gas",
  averageConsumption: 55.0,
};

// Pago 2 - Gas (abril 2024)
const pay2Service4 = {
  dueDate: new Date("2024-04-25"),
  paymentStatus: "paid",
  averageAmount: 40.0,
  paymentDate: new Date("2024-04-24"),
  amount: 40.0,
  paymentNotes: "Pago completo por el servicio de gas, mes de abril",
  measurementMethod: "Tanque de gas",
  readingDate: new Date("2024-04-20"),
  readingValue: 65.0,
  readingNotes: "Lectura del tanque de gas",
  averageConsumption: 60.0,
};

// Pago 3 - Gas (mayo 2024)
const pay3Service4 = {
  dueDate: new Date("2024-05-25"),
  paymentStatus: "paid", // Cambio a "paid" para llenar el paymentDate
  averageAmount: 40.0,
  paymentDate: new Date("2024-05-24"),
  amount: 40.0,
  paymentNotes: "Pago completo por el servicio de gas, mes de mayo",
  measurementMethod: "Tanque de gas",
  readingDate: new Date("2024-05-20"),
  readingValue: 70.0,
  readingNotes: "Lectura del tanque de gas",
  averageConsumption: 65.0,
};
// Pago 1 - Teléfono móvil (mayo 2024)
const pay1Service5 = {
  dueDate: new Date("2024-05-25"),
  paymentStatus: "paid",
  averageAmount: 30.0, // Monto promedio mensual
  paymentDate: new Date("2024-05-24"),
  amount: 30.0,
  paymentNotes: "Pago completo por el servicio de teléfono móvil, mes de mayo",
  measurementMethod: "Plan de datos y llamadas",
  readingDate: new Date("2024-05-20"),
  readingValue: 1.0, // Se considera un pago único por el plan
  readingNotes: "Sin incidencias en el plan de teléfono móvil",
  averageConsumption: 30.0,
};

// Pago 2 - Teléfono móvil (abril 2024)
const pay2Service5 = {
  dueDate: new Date("2024-04-25"),
  paymentStatus: "paid",
  averageAmount: 30.0, // Monto promedio mensual
  paymentDate: new Date("2024-04-24"),
  amount: 30.0,
  paymentNotes: "Pago completo por el servicio de teléfono móvil, mes de abril",
  measurementMethod: "Plan de datos y llamadas",
  readingDate: new Date("2024-04-20"),
  readingValue: 1.0, // Se considera un pago único por el plan
  readingNotes: "Sin incidencias en el plan de teléfono móvil",
  averageConsumption: 30.0,
};

// Pago 3 - Teléfono móvil (marzo 2024)
const pay3Service5 = {
  dueDate: new Date("2024-03-25"),
  paymentStatus: "paid",
  averageAmount: 30.0, // Monto promedio mensual
  paymentDate: new Date("2024-03-24"),
  amount: 30.0,
  paymentNotes: "Pago completo por el servicio de teléfono móvil, mes de marzo",
  measurementMethod: "Plan de datos y llamadas",
  readingDate: new Date("2024-03-20"),
  readingValue: 1.0, // Se considera un pago único por el plan
  readingNotes: "Sin incidencias en el plan de teléfono móvil",
  averageConsumption: 30.0,
};
// Pago 1 - Electricidad (mayo 2024)
const pay1Service6 = {
  dueDate: new Date("2024-05-10"),
  paymentStatus: "paid",
  averageAmount: 85.0, // Monto promedio mensual
  paymentDate: new Date("2024-05-09"),
  amount: 85.0,
  paymentNotes: "Pago completo por el servicio de electricidad, mes de mayo",
  measurementMethod: "Medidor eléctrico (kWh)",
  readingDate: new Date("2024-05-05"),
  readingValue: 310.0,
  readingNotes: "Lectura mensual del medidor de electricidad",
  averageConsumption: 300.0,
};

// Pago 2 - Electricidad (abril 2024)
const pay2Service6 = {
  dueDate: new Date("2024-04-10"),
  paymentStatus: "paid",
  averageAmount: 85.0, // Monto promedio mensual
  paymentDate: new Date("2024-04-09"),
  amount: 85.0,
  paymentNotes: "Pago completo por el servicio de electricidad, mes de abril",
  measurementMethod: "Medidor eléctrico (kWh)",
  readingDate: new Date("2024-04-05"),
  readingValue: 290.0,
  readingNotes: "Lectura mensual del medidor de electricidad",
  averageConsumption: 280.0,
};

// Pago 3 - Electricidad (marzo 2024)
const pay3Service6 = {
  dueDate: new Date("2024-03-10"),
  paymentStatus: "paid",
  averageAmount: 85.0, // Monto promedio mensual
  paymentDate: new Date("2024-03-09"),
  amount: 85.0,
  paymentNotes: "Pago completo por el servicio de electricidad, mes de marzo",
  measurementMethod: "Medidor eléctrico (kWh)",
  readingDate: new Date("2024-03-05"),
  readingValue: 270.0,
  readingNotes: "Lectura mensual del medidor de electricidad",
  averageConsumption: 260.0,
};

// Pago 1 - Internet (mayo 2024)
const pay1Service7 = {
  dueDate: new Date("2024-05-05"),
  paymentStatus: "paid",
  averageAmount: 45.0, // Monto promedio mensual
  paymentDate: new Date("2024-05-04"),
  amount: 45.0,
  paymentNotes: "Pago completo por el servicio de internet, mes de mayo",
  measurementMethod: "Servicio de internet",
  readingDate: new Date("2024-05-01"),
  readingValue: 1.0, // Medido como conexión activa
  readingNotes: "Sin incidencias en el servicio de internet",
  averageConsumption: 45.0,
};

// Pago 2 - Internet (abril 2024)
const pay2Service7 = {
  dueDate: new Date("2024-04-05"),
  paymentStatus: "paid",
  averageAmount: 45.0, // Monto promedio mensual
  paymentDate: new Date("2024-04-04"),
  amount: 45.0,
  paymentNotes: "Pago completo por el servicio de internet, mes de abril",
  measurementMethod: "Servicio de internet",
  readingDate: new Date("2024-04-01"),
  readingValue: 1.0, // Medido como conexión activa
  readingNotes: "Sin incidencias en el servicio de internet",
  averageConsumption: 45.0,
};

// Pago 3 - Internet (marzo 2024)
const pay3Service7 = {
  dueDate: new Date("2024-03-05"),
  paymentStatus: "paid",
  averageAmount: 45.0, // Monto promedio mensual
  paymentDate: new Date("2024-03-04"),
  amount: 45.0,
  paymentNotes: "Pago completo por el servicio de internet, mes de marzo",
  measurementMethod: "Servicio de internet",
  readingDate: new Date("2024-03-01"),
  readingValue: 1.0, // Medido como conexión activa
  readingNotes: "Sin incidencias en el servicio de internet",
  averageConsumption: 45.0,
};

// Pago 1 - Agua (mayo 2024)
const pay1Service8 = {
  dueDate: new Date("2024-05-15"),
  paymentStatus: "paid",
  averageAmount: 55.0, // Monto promedio mensual
  paymentDate: new Date("2024-05-14"),
  amount: 55.0,
  paymentNotes: "Pago completo por el servicio de agua, mes de mayo",
  measurementMethod: "Medidor de agua",
  readingDate: new Date("2024-05-10"),
  readingValue: 175.0,
  readingNotes: "Lectura mensual del medidor de agua",
  averageConsumption: 160.0,
};

// Pago 2 - Agua (abril 2024)
const pay2Service8 = {
  dueDate: new Date("2024-04-15"),
  paymentStatus: "paid",
  averageAmount: 55.0, // Monto promedio mensual
  paymentDate: new Date("2024-04-14"),
  amount: 55.0,
  paymentNotes: "Pago completo por el servicio de agua, mes de abril",
  measurementMethod: "Medidor de agua",
  readingDate: new Date("2024-04-10"),
  readingValue: 160.0,
  readingNotes: "Lectura mensual del medidor de agua",
  averageConsumption: 150.0,
};

// Pago 3 - Agua (marzo 2024)
const pay3Service8 = {
  dueDate: new Date("2024-03-15"),
  paymentStatus: "paid",
  averageAmount: 55.0, // Monto promedio mensual
  paymentDate: new Date("2024-03-14"),
  amount: 55.0,
  paymentNotes: "Pago completo por el servicio de agua, mes de marzo",
  measurementMethod: "Medidor de agua",
  readingDate: new Date("2024-03-10"),
  readingValue: 150.0,
  readingNotes: "Lectura mensual del medidor de agua",
  averageConsumption: 140.0,
};

// Pago 1 - Gas (mayo 2024)
const pay1Service9 = {
  dueDate: new Date("2024-05-15"),
  paymentStatus: "paid",
  averageAmount: 40.0, // Monto promedio mensual
  paymentDate: new Date("2024-05-14"),
  amount: 40.0,
  paymentNotes: "Pago completo por el servicio de gas, mes de mayo",
  measurementMethod: "Tanque de gas",
  readingDate: new Date("2024-05-10"),
  readingValue: 75.0,
  readingNotes: "Lectura mensual del tanque de gas",
  averageConsumption: 70.0,
};

// Pago 2 - Gas (abril 2024)
const pay2Service9 = {
  dueDate: new Date("2024-04-15"),
  paymentStatus: "paid",
  averageAmount: 40.0, // Monto promedio mensual
  paymentDate: new Date("2024-04-14"),
  amount: 40.0,
  paymentNotes: "Pago completo por el servicio de gas, mes de abril",
  measurementMethod: "Tanque de gas",
  readingDate: new Date("2024-04-10"),
  readingValue: 70.0,
  readingNotes: "Lectura mensual del tanque de gas",
  averageConsumption: 65.0,
};

// Pago 3 - Gas (marzo 2024)
const pay3Service9 = {
  dueDate: new Date("2024-03-15"),
  paymentStatus: "paid",
  averageAmount: 40.0, // Monto promedio mensual
  paymentDate: new Date("2024-03-14"),
  amount: 40.0,
  paymentNotes: "Pago completo por el servicio de gas, mes de marzo",
  measurementMethod: "Tanque de gas",
  readingDate: new Date("2024-03-10"),
  readingValue: 65.0,
  readingNotes: "Lectura mensual del tanque de gas",
  averageConsumption: 60.0,
};
// Pago 1 - TV por cable (mayo 2024)
const pay1Service10 = {
  dueDate: new Date("2024-05-20"),
  paymentStatus: "paid",
  averageAmount: 60.0, // Monto promedio mensual
  paymentDate: new Date("2024-05-19"),
  amount: 60.0,
  paymentNotes: "Pago completo por el servicio de TV por cable, mes de mayo",
  measurementMethod: "Plan de televisión por cable",
  readingDate: new Date("2024-05-15"),
  readingValue: 1.0, // Se considera el acceso completo a los canales
  readingNotes: "Sin incidencias en el servicio de TV por cable",
  averageConsumption: 60.0,
};

// Pago 2 - TV por cable (abril 2024)
const pay2Service10 = {
  dueDate: new Date("2024-04-20"),
  paymentStatus: "paid",
  averageAmount: 60.0, // Monto promedio mensual
  paymentDate: new Date("2024-04-19"),
  amount: 60.0,
  paymentNotes: "Pago completo por el servicio de TV por cable, mes de abril",
  measurementMethod: "Plan de televisión por cable",
  readingDate: new Date("2024-04-15"),
  readingValue: 1.0, // Se considera el acceso completo a los canales
  readingNotes: "Sin incidencias en el servicio de TV por cable",
  averageConsumption: 60.0,
};

// Pago 3 - TV por cable (marzo 2024)
const pay3Service10 = {
  dueDate: new Date("2024-03-20"),
  paymentStatus: "paid",
  averageAmount: 60.0, // Monto promedio mensual
  paymentDate: new Date("2024-03-19"),
  amount: 60.0,
  paymentNotes: "Pago completo por el servicio de TV por cable, mes de marzo",
  measurementMethod: "Plan de televisión por cable",
  readingDate: new Date("2024-03-15"),
  readingValue: 1.0, // Se considera el acceso completo a los canales
  readingNotes: "Sin incidencias en el servicio de TV por cable",
  averageConsumption: 60.0,
};

module.exports = {
  pay1Service1,
  pay2Service1,
  pay3Service1,
  pay1Service2,
  pay2Service2,
  pay3Service2,
  pay1Service3,
  pay2Service3,
  pay3Service3,
  pay1Service4,
  pay2Service4,
  pay3Service4,
  pay1Service5,
  pay2Service5,
  pay3Service5,
  pay1Service6,
  pay2Service6,
  pay3Service6,
  pay1Service7,
  pay2Service7,
  pay3Service7,
  pay1Service8,
  pay2Service8,
  pay3Service8,
  pay1Service9,
  pay2Service9,
  pay3Service9,
  pay1Service10,
  pay2Service10,
  pay3Service10,
};

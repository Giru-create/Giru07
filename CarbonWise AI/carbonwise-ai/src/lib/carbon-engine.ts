// src/lib/carbon-engine.ts

// Simplified carbon calculation engine for Phase 2
// Factors are approximate kg CO2e per unit

const EMISSION_FACTORS = {
  transportation: {
    car: 0.192, // kg CO2e per km
    bus: 0.089, // kg CO2e per km
    train: 0.041, // kg CO2e per km
    flight: 0.255, // kg CO2e per km
  },
  electricity: {
    grid: 0.4, // kg CO2e per kWh (varies wildly by region, generic average)
  },
  food: {
    meat_heavy: 3.3, // kg CO2e per day
    average: 2.5, // kg CO2e per day
    vegetarian: 1.5, // kg CO2e per day
    vegan: 1.0, // kg CO2e per day
  }
};

export function calculateTransportationCarbon(distanceKm: number, type: keyof typeof EMISSION_FACTORS.transportation) {
  const factor = EMISSION_FACTORS.transportation[type] || EMISSION_FACTORS.transportation.car;
  return distanceKm * factor;
}

export function calculateElectricityCarbon(kwh: number) {
  return kwh * EMISSION_FACTORS.electricity.grid;
}

export function calculateFoodCarbon(dietType: keyof typeof EMISSION_FACTORS.food, days: number = 1) {
  const factor = EMISSION_FACTORS.food[dietType] || EMISSION_FACTORS.food.average;
  return factor * days;
}

// Generate an initial estimate based on an onboarding survey
export function calculateBaselineFootprint(data: {
  transportType: string;
  dailyDistance: number;
  monthlyElectricityKwh: number;
  diet: string;
}) {
  const transportDaily = calculateTransportationCarbon(
    data.dailyDistance, 
    data.transportType as keyof typeof EMISSION_FACTORS.transportation
  );
  
  const electricityDaily = calculateElectricityCarbon(data.monthlyElectricityKwh) / 30;
  
  const foodDaily = calculateFoodCarbon(data.diet as keyof typeof EMISSION_FACTORS.food);

  const totalDailyCo2e = transportDaily + electricityDaily + foodDaily;
  
  return {
    daily: totalDailyCo2e,
    monthly: totalDailyCo2e * 30,
    annual: totalDailyCo2e * 365,
    breakdown: {
      transportation: transportDaily,
      electricity: electricityDaily,
      food: foodDaily
    }
  };
}

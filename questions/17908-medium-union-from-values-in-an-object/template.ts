const AllMeasurementUnits = {
  weight: ['g', 'kg', 'pound'],
  length: ['cm', 'm', 'inch']
  //possibly more in the future
} as const

type AnyMeasurementUnit = any // 'g' | 'kg' | 'pound' | 'cm' | 'm' | 'inch'

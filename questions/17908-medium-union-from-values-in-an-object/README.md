Create a type AnyMeasurementUnit that will be a union of all the values from all the measurement units defined in the measurement unit arrays in AllMeasurementUnits. So AnyMeasurementUnit would be 'g' | 'kg' | 'pound' | 'cm' | 'm' | 'inch'. 

The created type should work so that if new measurement units or measurement unit keys are added to AllMeasurementUnits they will be automatically included to AnyMeasurementUnit. The task is solvable without using utility types.

```ts
const AllMeasurementUnits = {
  weight: ['g', 'kg', 'pound',], // possibly more in the future
  length: ['cm', 'm', 'inch']
  //possibly more in the future
} as const

type AnyMeasurementUnit = any // 'g' | 'kg' | 'pound' | 'cm' | 'm' | 'inch' 

const grams: AnyMeasurementUnit = 'g' //should be a valid type
const ounce: AnyMeasurementUnit = 'ounce' //shouldn't be a valid type
```

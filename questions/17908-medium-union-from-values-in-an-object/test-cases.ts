import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<AnyMeasurementUnit<typeof AllMeasurementUnits>, 'g' | 'kg' | 'pound' | 'cm' | 'm' | 'inch'>>,
]

// import { KeyInRecord } from '../../types'

// type PartialRecord<Key extends KeyInRecord, Value> = Partial<Record<Key, Value>>

// type VariantsStatesAndPartsConfig = {
//   variants?: string
//   states?: string
//   parts?: string
// }
//
// type ConditionalPartialRecord<Key, Value> =
//   | (Key extends KeyInRecord ? PartialRecord<Key, Value> : Value)
//   | Value

// type VariantsStatesAndParts<
//   Config extends VariantsStatesAndPartsConfig,
//   ValueType,
// > = ConditionalPartialRecord<
//   Config['variants'],
//   ConditionalPartialRecord<
//     Config['states'],
//     ConditionalPartialRecord<Config['parts'], ValueType>
//   >
// >

// type VariantsStatesAndPartsConfig = {
//   parts: string
//   variants: string
//   states: string
// }
// type VariantsStatesAndPartsDict<
//   Config extends VariantsStatesAndPartsConfig,
//   ValueType,
// > = Record<
//   Config['parts'],
//   PartialRecord<Config['variants'], PartialRecord<Config['states'], ValueType>>
// >

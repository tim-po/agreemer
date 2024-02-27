import { KeywordType } from './std-lib/types'

export type CountType = {
  count: number
  name: string
}

export type DisciplineType = {
  id: number
  name: string
  class: string
  control_type: string
  necessity: string
  next_disciplines: number[]
}

export type ClassType = {
  name: string
  first_semesters_disciplines: DisciplineType[]
  second_semesters_disciplines: DisciplineType[]
}

export type CourseType = {
  course: number
  coverage: number
  main_keywords: string[]
  control_type_count: CountType[]
  control_types_count: CountType[]
  classes_count: (CountType & { disciplines: CountType[] })[]
  necessity_count: CountType[]
  classes: ClassType[]
}

export interface Profession {
  category: string
  companies: string[]
  description: string
  icon: string
  id: number
  name: string
  presets_blacklist: []
  related_keywords_count: number
  salaries: number[]
  responsibilities: string[]
  related_keywords: KeywordType[]
}

export interface DisciplinesCount {
  count: number
  name: string
  disciplines: string[]
}

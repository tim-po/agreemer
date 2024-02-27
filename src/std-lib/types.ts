export type GenericModalOwnProps = {
  onModalClose: () => void
  colorCloseWhite: boolean
  children: React.ReactNode | React.ReactNode[]

  isModalVisible?: boolean

  modalIndex: number
  modalCount: number
  withoutAutofocus?: boolean
}

export type KeyInRecord = string | number | symbol

export type OptionalGenericModalProps = Partial<GenericModalOwnProps>

export type KeywordType = { text: string; id: string }

//
// © 2023 Hardcore Engineering, Inc. All Rights Reserved.
// Licensed under the Eclipse Public License v2.0 (SPDX: EPL-2.0).
//

export interface DateDescription {
  id: string
  placeholder: string
  maxlength: number
}

export interface DateValues {
  value?: number
  disabled?: boolean
  selected?: boolean
  element?: HTMLElement
}

export type DateFields = DateDescription & DateValues

export interface DateDigitValues {
  value: number | null
  disabled?: boolean
  selected?: boolean
  element?: HTMLElement
}

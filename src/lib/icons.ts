//
// © 2023 Hardcore Engineering, Inc. All Rights Reserved.
// Licensed under the Eclipse Public License v2.0 (SPDX: EPL-2.0).
//

import DefaultIcon from './default-icon.svg?raw'

export type IconId = string & { __tag: 'icon-id' }

export enum IconContentLocation {
  Url,
  Raw
}

export type IconContent = {
  location: IconContentLocation
  value: string
}

export type IconResolver = (icon: IconId) => IconContent

let __resolver: IconResolver = () => ({ location: IconContentLocation.Raw, value: DefaultIcon })

export const resolveIcon = (icon: IconId) => __resolver(icon)

export function setIconResolver(resolver: IconResolver) {
  __resolver = resolver
}

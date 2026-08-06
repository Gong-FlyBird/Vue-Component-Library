import type { LibGroupMeta } from './types'
import { glassGroup } from './glass'
import { hermesGroup } from './hermes'
import { neonGroup } from './neon'
import { mujiGroup } from './muji'
import { brutalGroup } from './brutal'
import { neumorphGroup } from './neumorph'
import { bauhausGroup } from './bauhaus'
import { terminalGroup } from './terminal'
import { vaporGroup } from './vapor'
import { linearGroup } from './linear'
import { coffeeGroup } from './coffee'
import { artdecoGroup } from './artdeco'
import { ghibliGroup } from './ghibli'
import { chromeGroup } from './chrome'
import { gradientGroup } from './gradient'
import { bentoGroup } from './bento'
import { notionGroup } from './notion'
import { y2kGroup } from './y2k'

export * from './types'

export const groups: LibGroupMeta[] = [
  glassGroup,
  hermesGroup,
  neonGroup,
  mujiGroup,
  brutalGroup,
  neumorphGroup,
  bauhausGroup,
  terminalGroup,
  vaporGroup,
  linearGroup,
  coffeeGroup,
  artdecoGroup,
  ghibliGroup,
  chromeGroup,
  gradientGroup,
  bentoGroup,
  notionGroup,
  y2kGroup,
]

export interface FlatComponent {
  id: string
  name: string
  en: string
  description: string
  tags: string[]
  groupId: string
  groupName: string
  component: LibGroupMeta['components'][number]['component']
  raw: string
}

export const allComponents: FlatComponent[] = groups.flatMap((g) =>
  g.components.map((c) => ({
    ...c,
    groupId: g.id,
    groupName: g.name,
  })),
)

export const componentMap = new Map(allComponents.map((c) => [c.id, c]))

export const ALL_TAGS = [...new Set(allComponents.flatMap((c) => c.tags))]

export const totalCount = allComponents.length

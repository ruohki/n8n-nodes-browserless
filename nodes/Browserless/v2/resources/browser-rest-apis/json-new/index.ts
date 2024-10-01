/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-description-boolean-without-whether */
/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */

import { INodePropertyOptions } from 'n8n-workflow'

// @ts-ignore
import * as helpers from '../../../helpers'

import { properties as rawProperties } from './properties'
import { runHooks } from './hooks'

export const name = 'Json New'

const rawOption: INodePropertyOptions = {
  name: 'Json New',
  value: 'Json New',
  action: 'Json New Browser Rest Apis',
  description: '/json/new',
  routing: {
    request: {
      method: 'PUT',
      url: '=/json/new',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }

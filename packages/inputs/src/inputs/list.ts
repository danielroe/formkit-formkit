import { FormKitTypeDefinition } from '@formkit/core'
import { fragment, disablesChildren } from '../compose'

/**
 * Input definition for a list.
 * @public
 */
export const list: FormKitTypeDefinition = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: fragment('$slots.default'),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: 'list',
  /**
   * An array of extra props to accept for this input.
   */
  props: [],
  /**
   * Additional features that should be added to your input
   */
  features: [disablesChildren],
}

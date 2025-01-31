/**
 * Options for ColumnTable
 * @typedef {Object} ColumnTableOptions
 * @property {Array<ColumnTableOptions>} columns Table columns
 * @property {Array} items Table items (rows)
 * @property {string} classNames Class names for <table>
 * @property {function(item: any, index: number): string} rowClassNames Class names for <tr>
 * @property {function(column: any)} resolver Resolver function for overriding default column resolver
 */

/**
 * Column definition
 * @typedef {Object} ColumnTableOptions
 * @property {string} titleClassNames Class names for <th>
 * @property {string|function} dataClassNames Class names for <td>
 * @property {*} title Definition of column title
 * @property {*} data Definition of column data
 * @property {function} onClick Click handler for data
 * @property {function} buttonText Text for button
 * @property {function} buttonClassNames Class names for button
 * @property {function} disabled Disabled state for button
 * @property {string} iconClassNames Class names for button icon
 */

/**
 * Table component with defininig table content column by column
 * @class ColumnTable
 * @classdesc
 * @property {ColumnTableOptions} options
 * @example
 * {% import ColumnTable from 'column-table' %}
 *   ...
 *   <ColumnTable/>
 *   ...
 */

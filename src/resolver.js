import Content from './components/content.sfc';
import Button from './components/button.sfc';

/**
 * Resolves a column by combining the resolved title and data.
 *
 * @param {object} column - Column definition.
 * @returns {object} Resolved column with title and data.
 */

export default function resolver( column ) {
    return Object.assign(
        { column },
        resolveTitle( column ),
        resolveData( column )
    );
}


/**
 * Resolves the title of a column.
 *
 * This function analyzes the column's title property and determines how it should be rendered.
 * If the title is a primitive, it returns a title rendered by the Content component with a getter for the title.
 * If the title is a class, it returns the title as is.
 * Otherwise, it defaults to using the Content component.
 *
 * @param {object} column - The column definition containing title and titleClassNames properties.
 * @returns {object} An object containing titleClassNames and either the resolved title or the Content component
 * with an optional titleGetter function.
 */

export function resolveTitle( column ) {
    const title = column.title;
    let titleClassNames = column.titleClassNames;

    if ( !titleClassNames ) {
        titleClassNames = '';
    }

    if ( isPrimitive( title ) ) {
        return {
            titleClassNames,
            title: Content,
            titleGetter: () => title
        };
    }

    if ( isClass( title ) ) {
        return { titleClassNames, title };
    }

    return {
        titleClassNames,
        title: Content
    };
}

/**
 * Resolves column data.
 *
 * @param {object} column - Column definition.
 * @returns {object} Resolved column data.
 *
 * If column data is a primitive value, function returns object with data
 * set to Content component and dataGetter as a function that returns the
 * value of the data.
 *
 * If column data is a class, function returns object with data set to the
 * given class.
 *
 * Otherwise, function returns object with data set to Content component.
 */
export function resolveData( column ) {
    const data = column.data;

    let dataClassNames = column.dataClassNames;
    if ( typeof dataClassNames === 'string' ) {
        dataClassNames = () => column.dataClassNames;
    } else if ( !dataClassNames ) {
        dataClassNames = () => '';
    }

    if ( typeof column.onClick === 'function' ) {
        return {
            dataClassNames,
            data: Button
        };
    }

    if ( isPrimitive( data ) ) {
        return {
            dataClassNames,
            data: Content,
            dataGetter: () => data
        };
    }

    if ( isClass( data ) ) {
        return { dataClassNames, data };
    }

    return {
        dataClassNames,
        data: Content,
        dataGetter: data
    };
}

/**
 * Checks if the given value is a primitive.
 *
 * @param {*} obj - The value to check.
 * @returns {boolean} True if obj is a primitive, false otherwise.
 */
function isPrimitive( obj ) {
    return [
        'string',
        'number',
        'boolean',
        'undefined'
    ].includes( typeof obj );
}

/**
 * Checks if an object is a class.
 *
 * This function checks both the constructor and the prototype.constructor
 * to see if it is a class.
 *
 * @param {Object} obj - The object to check.
 * @returns {boolean} True if obj is a class, false otherwise.
 */
function isClass( obj ) {
    const isCtorClass = isClassConstructor( obj );

    if ( obj.prototype === undefined ) {
        return isCtorClass;
    }

    return isCtorClass || isClassConstructor( obj.prototype );
}

/**
 * Checks if an object is a class constructor.
 *
 * @param {Object} obj - The object to check.
 * @returns {boolean} True if obj is a class constructor, false otherwise.
 */
function isClassConstructor( obj ) {
    return (
        obj &&
        obj.constructor &&
        obj.constructor.toString &&
        obj.constructor.toString().substring( 0, 5 ) === 'class'
    );
}

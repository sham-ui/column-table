import { Component } from 'sham-ui';
import resolver, { resolveTitle, resolveData } from '../../src/resolver';

it( 'renders correctly', () => {
    const data = resolver( {
        title: 'Foo',
        data: 'Bar'
    } );
    expect( data ).toMatchSnapshot();
} );

it( 'resolveTitle', () => {
    const data = resolveTitle( {
        title: 'Foo',
        data: 'Bar'
    } );
    expect( data ).toMatchSnapshot();
} );

it( 'resolveTitle titleClassNames', () => {
    const data = resolveTitle( {
        title: 'Foo',
        data: 'Bar',
        titleClassNames: 'foo bar'
    } );
    expect( data ).toMatchSnapshot();
} );

it( 'resolveTitle title', () => {
    const data = resolveTitle( {
        title: Component(),
        titleClassNames: 'foo bar'
    } );
    expect( data ).toMatchSnapshot();
} );

it( 'resolveData', () => {
    const data = resolveData( {
        data: 'Foo'
    } );
    expect( data ).toMatchSnapshot();
} );

it( 'resolveData dataClassNames string', () => {
    const data = resolveData( {
        data: 'Foo',
        dataClassNames: 'bar'
    } );
    expect( data ).toMatchSnapshot();
} );

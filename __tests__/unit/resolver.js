import resolver, { resolveTitle } from '../../src/resolver';

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

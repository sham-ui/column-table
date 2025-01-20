import resolver from '../../src/resolver';

it( 'renders correctly', () => {
    const data = resolver( {
        title: 'Foo',
        data: 'Bar'
    } );
    expect( data ).toMatchSnapshot();
} );

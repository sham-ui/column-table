import Content  from '../../../src/components/content.sfc';
import renderer from 'sham-ui-test-helpers';

it( 'renders correctly', () => {
    const meta = renderer( Content, {} );
    expect( meta.toJSON() ).toMatchSnapshot();
} );

it( 'getter', () => {
    const meta = renderer( Content, {
        item: 'Foo',
        index: 1,
        getter: ( item, index ) => item + index
    } );
    expect( meta.toJSON() ).toMatchSnapshot();
} );

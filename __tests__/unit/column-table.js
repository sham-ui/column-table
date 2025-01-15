import renderer from 'sham-ui-test-helpers';
import ColumnTable, { resolver } from '../../src/column-table.sfc';

it( 'renders correctly', () => {
    const meta = renderer( ColumnTable, {} );
    expect( meta.toJSON() ).toMatchSnapshot();
} );

it( 'resolver', () => {
    const meta = renderer( ColumnTable, {
        columns: [
            { title: 'Foo', data: 'foo' }
        ],
        items: [ 1, 2, 3 ],
        resolver: column => ( {
            ...resolver( column ),
            titleGetter: () => 'Bar'
        } )
    } );
    expect( meta.toJSON() ).toMatchSnapshot();
} );

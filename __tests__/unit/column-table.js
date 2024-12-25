import renderer from 'sham-ui-test-helpers';
import ColumnTable from '../../src/column-table.sfc';

it( 'renders correctly', () => {
    const meta = renderer( ColumnTable, {} );
    expect( meta.toJSON() ).toMatchSnapshot();
} );

import Content  from '../../../src/components/content.sfc';
import renderer from 'sham-ui-test-helpers';

it( 'renders correctly', () => {
    const meta = renderer( Content, {} );
    expect( meta.toJSON() ).toMatchSnapshot();
} );

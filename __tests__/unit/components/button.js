import { onclick, disabled } from 'sham-ui-directives';
import Button  from '../../../src/components/button.sfc';
import renderer from 'sham-ui-test-helpers';

it( 'renders correctly', () => {
    const meta = renderer( Button, {}, {
        directives: {
            onclick,
            disabled
        }
    } );
    expect( meta.toJSON() ).toMatchSnapshot();
} );

it( 'buttonText', () => {
    const meta = renderer( Button, {
        item: 'Foo',
        index: 1,
        buttonText: ( item, index ) => item + index
    }, {
        directives: {
            onclick,
            disabled
        }
    } );
    expect( meta.toJSON() ).toMatchSnapshot();
} );

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | cart-contents', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<CartContents />`);

    assert.equal(this.element.textContent.trim(), 'Subtotal: 0');

    // Template block usage:
    await render(hbs`
      <CartContents>
        Subtotal: 0
      </CartContents>
    `);

    assert.equal(this.element.textContent.trim(), 'Subtotal: 0');
  });
});

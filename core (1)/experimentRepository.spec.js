import { add } from 'Core/experimentRepository';

describe('test experimentRepository', () => {
  it('test add() must return resolved Promise when provided required fields', () => {
    return expect(
      add({
        name: 'simple_button_variant_exp',
        time: 1571734792.403,
        salt: 'simple_button_variant_exp',
        inputs: {
          id: 11,
        },
        params: {
          buttonText: 'variant 2',
        },
        event: 'clicked_button',
      })
    ).resolves.toEqual({});
  });

  it('test add() must return rejected Promise when validation fails (no name field)', () => {
    return expect(
      add({
        time: 1571734792.403,
        salt: 'simple_button_variant_exp',
        inputs: {
          id: 11,
        },
        params: {
          buttonText: 'variant 2',
        },
        event: 'clicked_button',
      })
    ).rejects.toMatchObject([{ message: 'requires property "name"' }]);
  });

  it('test add() must return rejected Promise when no validation key', () => {
    return expect(
      add(
        {
          name: 'simple_button_variant_exp',
          time: 1571734792.403,
          salt: 'simple_button_variant_exp',
          inputs: {
            id: 11,
          },
          params: {
            buttonText: 'variant 2',
          },
          event: 'clicked_button',
        },
        'nokey'
      )
    ).rejects.toThrow();
  });
});

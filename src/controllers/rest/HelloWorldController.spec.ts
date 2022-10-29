import { PlatformTest } from '@tsed/common';
import { HelloWorldController } from './HelloWorldController';

describe('HelloWorldController', () => {
  beforeEach(PlatformTest.create);
  afterEach(PlatformTest.reset);

  it('should do something', () => {
    const instance =
      PlatformTest.get<HelloWorldController>(HelloWorldController);
    // const instance = PlatformTest.invoke<HelloWorldController>(HelloWorldController); // get fresh instance

    expect(instance).toBeInstanceOf(HelloWorldController);
  });

  it('should say hi', () => {
    const instance =
      PlatformTest.get<HelloWorldController>(HelloWorldController);
    // const instance = PlatformTest.invoke<HelloWorldController>(HelloWorldController); // get fresh instance

    expect(instance.helloWorld()).toBe('hello');
  });

  it('should say hi again', () => {
    const instance =
      PlatformTest.get<HelloWorldController>(HelloWorldController);
    // const instance = PlatformTest.invoke<HelloWorldController>(HelloWorldController); // get fresh instance

    expect(instance.get()).toBe('hello');
  });

  it('should return DreamTeam', () => {
    const instance =
      PlatformTest.get<HelloWorldController>(HelloWorldController);
    // const instance = PlatformTest.invoke<HelloWorldController>(HelloWorldController); // get fresh instance

    expect(instance.getDreamTeam()).toEqual([
      {
        id: 0,
        name: 'Estuardo Villeda',
      },
      {
        id: 1,
        name: 'Francisco Morales',
      },
      {
        id: 2,
        name: 'Alejandra Recinos',
      },
      {
        id: 3,
        name: 'Mischa Tobias',
      },
    ]);
  });

  it('should reverse words', () => {
    const instance =
      PlatformTest.get<HelloWorldController>(HelloWorldController);
    // const instance = PlatformTest.invoke<HelloWorldController>(HelloWorldController); // get fresh instance

    expect(instance.reverse('hola')).toBe('aloh');
  });

  it('mock reverse words', () => {
    const instance =
      PlatformTest.get<HelloWorldController>(HelloWorldController);
    // const instance = PlatformTest.invoke<HelloWorldController>(HelloWorldController); // get fresh instance
    jest.spyOn(instance, 'reverse').mockReturnValueOnce('nope');
    expect(instance.reverse('')).toBe('nope');
    expect(instance.reverse('hola')).toBe('aloh');
  });

  it('call reverse once', () => {
    const instance =
      PlatformTest.get<HelloWorldController>(HelloWorldController);
    // const instance = PlatformTest.invoke<HelloWorldController>(HelloWorldController); // get fresh instance
    let reverseFunc = jest.spyOn(instance, 'reverse');
    expect(instance.reverse('hola')).toBe('aloh');
    expect(reverseFunc).toBeCalled();
  });
});

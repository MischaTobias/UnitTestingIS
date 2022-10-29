import { Controller } from '@tsed/di';
import { PathParams } from '@tsed/platform-params';
import { Description, Get, Returns, Summary } from '@tsed/schema';

const DREAM_TEAM = [
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
];

@Controller('/hello-world')
export class HelloWorldController {
  @Get('/')
  get() {
    return this.helloWorld();
  }

  helloWorld() {
    return 'hello';
  }

  @Get('/getDreamTeam')
  getDreamTeam() {
    return DREAM_TEAM;
  }

  @Get('reverse/:word')
  @Summary('Returns a backwards word')
  @Returns(200).Description('Obtiene la palabra del url')
  reverse(@PathParams('word') word: string): string {
    try {
      return word.split('').reverse().join('');
    } catch (x) {
      x.status = 400;
      return x;
    }
  }
}

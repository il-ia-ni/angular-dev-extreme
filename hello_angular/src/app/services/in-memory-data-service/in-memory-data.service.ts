import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const meals = [
      { id: 11, name: 'Pizza Napolitana' },
      { id: 12, name: 'Pasta Frutti di Mare' },
      { id: 13, name: 'Bombasto Salatti' },
      { id: 14, name: 'Celeritas Suppe' },
      { id: 15, name: 'Magneta Eis' },
      { id: 16, name: 'Fritties & Fisch' },
      { id: 17, name: 'Curry Chickenfingers' },
      { id: 18, name: 'Sellerie Chips' },
      { id: 19, name: 'Möhrensuppe' },
      { id: 20, name: 'Apfelsinneis' }
    ];
    return { meals };
  }
}

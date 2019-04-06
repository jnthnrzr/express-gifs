const { getUrl, loadData, simplifyData } = require('../src/utils');

const apiKey = process.env.API_KEY;

describe('simplifyData', () => {
  test('returns an array', () => {
    const data = [{}];
    const result = simplifyData(data);
    expect(Array.isArray(result)).toBe(true);
  });

  test('picks objects having id, title as the only properties', () => {
    const data = [
      { id: 1, title: 'title 1', foo: 'bar' },
      { id: 2, title: 'title 2', baz: 1 },
    ];
    const goodResult = [
      { id: 1, title: 'title 1' },
      { id: 2, title: 'title 2' },
    ];
    const result = simplifyData(data);
    expect(result).toMatchObject(goodResult);
  });

  test('picks objects iif both id, title are properties', () => {
    const data = [
      { id: 1, foo: 'bar' },
      { id: 2, title: 'title 2', baz: 1 },
      { baz: 1 },
      { id: 3, title: 'A new title' },
    ];
    const goodResult = [
      { id: 2, title: 'title 2' },
      { id: 3, title: 'A new title' },
    ];
    const result = simplifyData(data);
    expect(result).toMatchObject(goodResult);
  });
});

describe('getUrl', () => {
  test('returns a url built with correct api key and offset', () => {
    const offset = 10;
    const result = getUrl(apiKey, offset);
    const expected = `http://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&offset=${offset}`;
    expect(result).toBe(expected);
  });

  test('uses offset according to input', () => {
    const offset = 5;
    const result = getUrl(apiKey, offset);
    const expected = `http://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&offset=${offset}`;
    expect(result).toBe(expected);
  });
});

describe('loadData', () => {
  const offset = 10;
  const url = `http://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&offset=${offset}`;

  beforeEach(() => jest.mock('../src/utils'));
  afterEach(() => jest.unmock('../src/utils'));

  test('loadData returns object with correct keys', () => {
    return loadData(url).then(result => {
      const { length: keysLength } = Object.keys(result);
      expect(keysLength).toBe(3);
      expect(result).toHaveProperty('data');
      expect(result).toHaveProperty('meta');
      expect(result).toHaveProperty('pagination');
    });
  });
});

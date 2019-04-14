const { getUrl, loadData } = require('../src/utils');

const apiKey = process.env.API_KEY;

describe('getUrl', () => {
  test('returns a url built with correct api key', () => {
    const result = getUrl(apiKey);
    const expected = `http://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`;
    expect(result).toBe(expected);
  });

  test('returns wrong url if api key is invalid', () => {
    const wrongApiKey = 'madlads';
    const result = getUrl(wrongApiKey);
    const expected = `http://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`;
    expect(result).not.toBe(expected);
  });
});

describe('loadData', () => {
  const params = {
    params: {
      offset: 10,
    },
  };
  const url = `http://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`;

  beforeEach(() => jest.mock('../src/utils'));
  afterEach(() => jest.unmock('../src/utils'));

  test('loadData returns object with correct keys', () => {
    return loadData(url, params).then(result => {
      const { length: keysLength } = Object.keys(result);
      expect(keysLength).toBe(3);
      expect(result).toHaveProperty('data');
      expect(result).toHaveProperty('meta');
      expect(result).toHaveProperty('pagination');
    });
  });
});

const { getGifs } = require('../src/routeHandlers');

const mockReq = (offsetData = 10) => ({
  query: {
    offset: offsetData,
  },
});

const mockRes = () => {
  const res = {};
  res.status = jest.fn(() => res);
  res.json = jest.fn(() => res);
  return res;
};

describe('getGifs', () => {
  test('returns data object', async () => {
    const req = mockReq(10);
    const res = mockRes();

    return getGifs(req, res).then(res => {
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalledWith([
        { id: 'w7GjZ8uJvm2vWpgVqG', title: 'what the wtf GIF' },
        {
          id: '5UGYyzyXnt3et1Ynct',
          title: 'deandre ayton dancing GIF by PUMA',
        },
        { id: '8lExS0RvlqXOEeUOm1', title: 'college basketball GIF' },
        { id: '2sfgo6v1ihOGKVptoB', title: 'toy story 4 disney GIF' },
        { id: 'Bp2V8qguvweX88YrHv', title: 'see stephen curry GIF by NBA' },
        {
          id: '3XH2p7BDhIeLwA6QBb',
          title: 'comedy central gag GIF by Broad City',
        },
        { id: 'BoHTHKSB9R45kmVZh4', title: 'mood lol GIF by NBA' },
        { id: 'fWfoxww8gb8qvUgqT3', title: 'winston duke us movie GIF' },
        {
          id: 'k6F5QOCjp5mHLhHO7r',
          title: 'legit chris pratt GIF by The Paley Center for Media',
        },
        { id: 'w9d4xuyPl9dWakXraR', title: 'xavier tillman GIF' },
      ]);
    });
  });
});

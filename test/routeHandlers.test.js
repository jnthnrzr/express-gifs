const getGifs = require('../src/routeHandlers');

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
  test('returns data object', () => {
    const req = mockReq(10);
    const res = mockRes();

    return getGifs(req, res).then(res => {
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalled();
    });
  });
});

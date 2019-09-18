const mockData = require('./static/mock/index.json');
const mockCity = require('./static/mock/city.json');
const mockDetail = require('./static/mock/detail.json');

module.exports = {
  devServer: {
    port: 8080,
    before(app) {
      app.get('/static/mock/index.json', (req, res, next) => {
        res.json(mockData);
      });
      app.get('/api/city.json', (req, res, next) => {
        res.json(mockCity);
      });
      app.get('/static/mock/detail.json', (req, res, next) => {
        res.json(mockDetail);
      });
    },
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/static/mock' //这里的 /static/mock 可以写在上边，然后这里写空字符串
        }
      }
    }
  }
};
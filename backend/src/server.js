const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// 使用 body-parser 中间件
app.use(bodyParser.json());

// 连接到 MongoDB
mongoose.connect('mongodb://localhost/yourDatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

// 定义模型
const YourModel = mongoose.model('YourModel', new mongoose.Schema({
  // 定义模型结构
}));

// 定义路由
app.post('/submit-data', (req, res) => {
  const newData = new YourModel(req.body);
  newData.save()
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));

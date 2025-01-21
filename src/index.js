require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const skillsRouter = require('./routes/api/skills');

// JSON 파싱을 위한 미들웨어
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/api/skills', skillsRouter);

// 기본 라우트
app.get('/', (req, res) => {
    res.json({ message: '서버가 정상적으로 실행중입니다.' });
});

// 서버 포트 설정
const PORT = process.env.PORT || 3000;

// 서버 시작
app.listen(PORT, () => {
    console.log(`서버가 포트 ${PORT}에서 실행중입니다.`);
});

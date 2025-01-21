const express = require('express');
const router = express.Router();
const { storage } = require('../../../firebase');

const STORAGE_URL = `https://storage.googleapis.com/${process.env.FIREBASE_STORAGE_BUCKET}`;

router.get('/', (req, res) => {
    const dummyData =   
        [
            {
                "name": "React.js",
                "description": "프론트엔드 개발에서 사용하는 JavaScript 라이브러리로, 컴포넌트 기반 UI 개발을 지원합니다.",
                "image": `${STORAGE_URL}/jason_logo.png`,
                "category": "Frontend",
                "date": "2024-03-16"
            },
            {
                "name": "Node.js",
                "description": "서버 사이드 JavaScript 런타임으로, 확장 가능한 네트워크 애플리케이션 구축에 사용됩니다.",
                "image": "/images/nodejs-logo.png",
                "category": "Backend",
                "date": "2024-03-15"
            },
            {
                "name": "TypeScript",
                "description": "JavaScript의 슈퍼셋 언어로, 정적 타입을 지원하여 더 안정적인 코드 작성이 가능합니다.",
                "image": "/images/typescript-logo.png",
                "category": "Programming",
                "date": "2024-03-14"
            }
        ];
    
    res.json(dummyData).status(200);
});

module.exports = router;
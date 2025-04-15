# Auto Translate

Công cụ tự động dịch file ngôn ngữ sang các ngôn ngữ khác nhau.

## Cài đặt

```bash
npm install @google-cloud/translate
```

## Cấu hình Google Cloud

1. Tạo project trên Google Cloud Console
2. Bật Google Cloud Translation API
3. Tạo service account key và tải file JSON
4. Đặt biến môi trường GOOGLE_APPLICATION_CREDENTIALS:

```bash
export GOOGLE_APPLICATION_CREDENTIALS="path/to/service-account-key.json"
```

## Sử dụng

```javascript
const { translateFile } = require('./source/translate');

// Dịch file sang tiếng Anh
await translateFile('./source/vi.js', 'en');

// Dịch file sang tiếng Trung
await translateFile('./source/vi.js', 'zh');
```

File dịch sẽ được lưu cùng thư mục với tên định dạng: `[tên_file]_[mã_ngôn_ngữ].js`# auto_trans_key_value

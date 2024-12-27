# Trang web bán sách

![Home](/demo/Home.png)
Web full-stack cho một cửa hàng sách, phát triển bằng cách sử dụng MERN stack (MongoDB, Express.js, React, và Node.js). Ứng dụng cho phép người dùng duyệt, tìm kiếm, mua sách và bao gồm các tính năng quản lý sách.

## Tính Năng

- Xác thực và phân quyền người dùng
- Thêm sách vào giỏ hàng
- Xem lại đơn hàng
- Thanh toán và đặt hàng
- Quản lý sách

## Công Nghệ Sử Dụng

### Frontend

- React
- Redux
- Axios
- React Router

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token) cho xác thực

### Link source code

- https://github.com/dusk03/book-store-mern-frontend
- https://github.com/dusk03/book-store-mern-backend

### Một số ảnh demo

- Node.js
- npm (Node Package Manager)
- MongoDB
  ![Home](/demo/Home.png)
  ![Footer](/demo/Footer.png)
  ![Cart](/demo/Cart.png)
  ![Checkout](/demo/Checkout.png)
  ![Admin](/demo/Admin.png)
  ![ManageBook](/demo/ManageBook.png)
  ![AddNewBook](/demo/AddNewBook.png)

### 2. Cài đặt

#### Bước 1: Clone source code

```bash
git clone https://github.com/dusk03/book-store-mern-frontend.git
git clone https://github.com/dusk03/book-store-mern-backend.git
```

### Bước 2: Cài Đặt Phụ Thuộc

#### Cài Đặt Backend

1. Chuyển vào thư mục backend:

   ```bash
   cd book-store-mern-backend
   npm install
   ```

2. Tạo .env

```bash
MONGODB_URI=your_mongo_connection_url
JWT_SECRET=your_jwt_secret
```

3.Cài Đặt Frontend

```bash
    cd ../book-store-mern-frontend
    npm install
```

4. Chạy dự án backend

```bash
    npm run start
```

5. Chạy dư án frontend

```bash
npm run dev
```

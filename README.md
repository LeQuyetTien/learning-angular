# Learn Angular

[Angular - The Complete Guide (2020 Edition)](https://www.udemy.com/course/the-complete-guide-to-angular-2/).

## Getting Started

### 1. Course Introduction

Trong khóa học này chúng ta sẽ học cách để tạo một front end web application tuyệt vời bằng Angular

### 2. What is Angular

Angular là một Javascript Framework cho phép bạn tạo Single Page Applications (SPAs).

### 3. Join our Online Learning Community

Tham gia cộng đồng [Academind Community](https://discord.gg/gxvEWGU) trên Discord

### 4. Angular vs Angular 2 vs Angular 9

Trải qua quá trình phát triển, hiện tại chúng ta có 2 phiên bản Angular:

- AngularJS: Hay còn gọi là Angular 1, là phiên bản đầu tiên của Angular.
- Angular: Là phiên bản làm lại và khác hoàn toàn với AngularJS. Những phiên bản từ Angular 2, ..., 10 đến nay đều gọi chung là Angular và chúng được cập nhật mỗi 6 tháng một lần để sửa lỗi và cập nhật tính năng.

Trong khóa học này, chúng ta sẽ học Angular

### 5. CLI Deep Dive Troubleshooting

[Angular CLI](https://cli.angular.io/) là một command line interface cho Angular giúp chúng ta tạo, phát triển, quản lý, chạy ứng dụng, ...

### 6. Project Setup and First App

Yêu cầu cài đặt [NodeJS](https://nodejs.org/en/)

```cmd
// cài đặt Angular CLI
npm install -g @angular/cli

// tạo mới một project Angular
ng new my-dream-app

// truy cập project vừa tạo
cd my-dream-app

// chạy thử ứng dụng Angular
ng serve
```

### 7. Editing the First App

[Visual Studio Code](https://code.visualstudio.com/): Đây là một IDE mạnh mẽ và được nhiều developer sử dụng.

### 8. The Course Structure

- Getting Started: tìm hiểu sơ qua về Angular. Cách cài đặt và tạo ứng dụng
- The Basics: hiểu rõ hơn về Angular. Nó thực sự là cái gì? Cái gì xảy ra đằng sau nó? Cấu trúc thư mục, cách chúng kết nối với nhau
- Components & Databinding: xem xét các Component và cách liên kết dữ liệu
- Directives: tìm hiểu về các Directive trong Angular
- Services & Dependency Injection: tìm hiểu các thành phần vác cách chúng giao tiếp với nhau, cách tập trung code và theo dõi trạng thái ứng dụng
- Routing: điều hướng ứng dụng giữa các trang
- Observables: làm việc với bất đồng bộ
- Forms: tạo biểu mẫu
- Pipes: chuyển đổi dữ liệu đầu ra
- Http: kết nối với web server
- Authentication: xác thực trong ứng dụng
- Optimizations & NgModules: tối ưu hóa
- Deployment: triển khai ứng dụng từ local lên internet
- Animations & Testing: sử dụng animation và kiểm thử ứng dụng

### 9. How to get the Most out of the Course

B1: Xem video để hiểu
B2: Làm bài tập liên quan đến phần đó
B3: Làm tích hợp những gì vừa học được vào dự án
B4: Hỏi nếu không hiểu vấn đề gì đó, nhưng nhớ phải search Google trước
B5: Trả lời câu hỏi của những người trong cộng đồng Angular

### 10. What is TypeScript

Typescript là một superset của Javascript, nó mở rộng các tính năng mới như Types, Class, Interfaces, ... theo hướng đối tượng.

Khi chạy, Typescript sẽ được biên dịch sang Javascript

### 11. A Basic Project Setup using Bootstrap for Styling

Cài đặt boostrap cho dự án

```cmd
npm install --save bootstrap
```

Thêm bootstrap.min.css vào mục styles trong angular.json

```json
"styles": [
    "node_modules/bootstrap/dist/css/bootstrap.min.css",
    "src/styles.css"
],
```

### 12. Where to find the Course Source Code

Trong mỗi thư mục sẽ có file zip của source code cho mỗi phần. Nhưng chúng ta sẽ tự code và không cần dùng đến chúng :)

## The Basics

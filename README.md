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

### 13. Module Introduction

Trong phần này chúng ta sẽ đi sâu vào Angular để biết nó thực sự là cái gì? Cái gì xảy ra đằng sau nó? Cách Angular bắt đầu

### 14. How an Angular App gets Loaded and Started

Khi chúng ta chạy `ng serve`, Angular sẽ tạo ra một development server để host ứng dụng Angular ở địa chỉ http://localhost:4200/

Khi trang này được mở, file `src/index.html` sẽ được khởi chạy, trong thẻ `body` ta sẽ có nội dung sau `<app-root></app-root>`. Chúng ta có thể thấy rằng `app-root` không phải là một thẻ HTML mà là một thẻ được chúng ta định nghĩa. Nó được định nghĩa trong file `app.component.ts`

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "learn-angular";
}
```

Đoạn code trên dùng để định nghĩa thẻ `app-root` có template là từ file `app.component.html` với style trong file `app.component.css` và được xử lý bởi class `AppComponent`. Nếu bây giờ chúng ta thêm nội dung `<h3>I'm in the AppComponent!</h3>` vào file `app.component.html` và lưu lại, thì ứng dụng sẽ tự động rebuild và tải lại trang, lúc này chúng ta sẽ thấy thẻ h3 vừa thêm trên ứng dụng. Thẻ `app-root` trong thẻ `body` của file `index.html` sẽ được thay bằng nội dung trong file `app.component.html`

Tại sao ứng dụng biết mà tải thẻ `<app-root>` từ file app.component.ts? Vì lúc ứng dụng khởi động, file `main.ts` cũng sẽ chạy, trong file này nó sẽ gọi `AppModule`, trong `AppModule` có khai báo AppComponent cho nên Angular biết `app-root` ở đâu để mà lấy.

### 15. Components are Important

Components là một khai niệm quan trọng trong Angular, mỗi thành phần của ứng dụng sẽ là một Component. Ví dụ với 1 trang web cơ bản, chúng ta sẽ có 1 component cho header, 1 component cho main, 1 component cho sidebar, 1 component cho footer. Mỗi component sẽ chứa code HTML, CSS và cả logic. Việc phân tách này sẽ rất hữu ích trong việc mở rộng cũng như mainternance. Nếu bạn muốn sửa header, bạn chỉ cần sửa component header và nó không ảnh hưởng đến các thành phần khác.

### 16. Creating a New Component

Bây giờ chúng sẽ tạo một component gọi là `server`. Đầu tiên là tạo một thư mục /src/app/server và thêm vào đó file server.component.ts

Đầu tiên, chúng ta sẽ tạo một class rong file server.component.ts

```ts
export class ServerComponent {}
```

Thêm export để đảm bảo class này có thể được gọi từ bên ngoài
Tiếp theo chúng ta sẽ import Component decorator từ @angular/core sau đó thêm nó vào trước class như sau:

```ts
import { Component } from "@angular/core";

@Component({})
export class ServerComponent {}
```

Tiếp theo là cập nhật Component decorator như sau:

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
})
export class ServerComponent {}
```

Cuối cùng thêm nội dung vào server.component.html

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

### 17 Understanding the Role of AppModule and Component Declaration

Vì Angular không tự động quét các file và thư mục trong ứng dụng, cho nên sau khi thêm mới một component, chúng ta cần thêm class component vào AppModule để Angular có thể biết và sử dụng.

```ts
...
import { ServerComponent } from './server/server.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Chúng ta sẽ import ServerComponent từ đường dẫn './server/server.component' (không cần .ts, nó sẽ được thêm tự động bởi webpack) và thêm ServerComponent vào mục declarations.

### 18. Using Custom Components

Sau khi thêm ServerComponent vào AppModule. Bây giờ chúng ta đã có thể sử dụng nó.

app.component.html

```html
<h3>I'm in the AppComponent!</h3>
<hr />
<app-server></app-server>
```

Lưu lại và ta sẽ thấy nội dung trong serve.component.html xuất hiện trên trang http://localhost:4200/

### 19. Creating Components with the CLI Nesting Components

Thay vì tạo một component thủ công như trước, bây giờ chúng ta sẽ tạo mới một component bằng Angular CLI

```cmd
$ ng generate component servers // OR ng g c servers
```

Thư mục servers tự động được tạo và cũng được tự động thêm vào AppModule

Chúng ta có thể sử dụng thẻ app-serve trong Servers component như sau:

servers.component.html

```html
<app-server></app-server> <app-server></app-server>
```

### 20. Working with Component Templates

Chúng ta có thể sử dụng thuộc tính template thay cho templateUrl để thêm trực tiếp code HTML vào fiel .ts như sau:

```ts
@Component({
  selector: 'app-servers',
  template: `
    <app-server></app-server>
    <app-server></app-server>
  `,
  styleUrls: ['./servers.component.css']
})
```

Sử dụng dấu nháy `` để viết trên nhiều dòng

### 21. Working with Component Styles

Chúng ta có thể sử dụng styles thay cho styleUrls

### 22. Fully Understanding the Component Selector

Chúng ta có thể sử dụng nhiều loại selector khác nhau:

> The CSS selector that identifies this directive in a template and triggers instantiation of the directive.
>
> Declare as one of the following:
>
> element-name: Select by element name.
>
> .class: Select by class name.
>
> [attribute]: Select by attribute name.
>
> [attribute=value]: Select by attribute name and value.
>
> :not(sub_selector): Select only if the element does not match the sub_selector.
>
> selector1, selector2: Select if either selector1 or selector2 matches.

### 23. [OPTIONAL] Assignment Solution

Sau khi tạo Component bằng tay. Nhớ thêm vào AppModule

Chỉ có thế thôi mà cũng tạo một bài riêng. Ông này cũng rãnh ghê :))

### 24. What is Databinding

Bây giờ chúng ta sẽ tìm hiểu Databinding. Vậy Databinding cái gì?

Databinding là giao tiếp giữa Typescript code (Business logic) và Template (HTML).

TS xuất dữ liệu ra HTML bằng 2 cách:

- **String Interpolation** ({{ data }})
- **Property Binding** ([property]="data")

TS nhận lại phản hồi từ HTML:

- **Event Binding** ((event)="expression")

Gộp 2 cái lại chúng ta có: **Two-way-binding** ([(ngModel)]="data")

### 25. String Interpolation

Để sử dụng string interpolation, chúng ta sẽ khai báo biến trong file TS sau đó xử dụng ở file HTML như sau:

server.component.ts

```ts
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = "offline";
}
```

server.component.html

```html
<p>{{ 'Server' }} with ID {{ serverId }} is {{ serverStatus }}</p>
```

> Giá trị kiểu string hay number đều có thể sử dụng

Chúng ta cũng có thể tạo một function để trả về giá trị serrverStatus sau đó gọi hàm trong file HTML như thế này:

server.component.ts

```ts
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = "offline";

  getServerStatus() {
    return this.serverStatus;
  }
}
```

server.component.html

```html
<p>{{ 'Server' }} with ID {{ serverId }} is {{ getServerStatus() }}</p>
```

### 26. Property Binding

Để ví dụ cho trường hợp Property Binding, chúng ta sẽ thêm một giá trị là allowNewServer vào file TS và sử dụng với property như sau:

```servers.component.ts
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
}
```

```html
<button class="btn btn-primary" [disabled]="allowNewServer">Add Server</button>
```

### 27. Property Binding vs String Interpolation

Thêm [] cho property để chỉ ra rằng nó là một property động và có thể viết TS code vào trong đó. Có thể là lấy giá trị từ TS hoặc một biểu thức

### 28. Event Binding

servers.component.ts

```ts
serverCreationStatus: string = 'No server was created!';

onCreateServer() {
  this.serverCreationStatus = 'Server was created!';
}
```

servers.component.html

```html
<button class="btn btn-primary" [disabled]="!allowNewServer" (click)="onCreateServer()">Add Server</button>
<p>{{ serverCreationStatus }}</p>
```

> Đặt tên event trong ()

### 29. Bindable Properties and Events

How do you know to which Properties or Events of HTML Elements you may bind? You can basically bind to all Properties and Events - a good idea is to `console.log()` the element you're interested in to see which properties and events it offers.

Important: For events, you don't bind to onclick but only to click (=> (click)).

The MDN (Mozilla Developer Network) offers nice lists of all properties and events of the element you're interested in. Googling for `YOUR_ELEMENT properties` or `YOUR_ELEMENT events` should yield nice results.

### 30. Passing and Using Data with Event Binding

servers.component.ts

```ts
serverName = '';

onUpdateServerName(event: any): void {
  this.serverName = event.target.value;
}
```

servers.component.html

```html
<label>Server Name</label>
<input type="text" class="form-control" (input)="onUpdateServerName($event)">
<p>{{ serverName }}</p>
```

> Sử dụng **$event** để truyền event data

### 31. Important FormsModule is Required for Two-Way-Binding

Important: For Two-Way-Binding (covered in the next lecture) to work, you need to enable the ngModel  directive. This is done by adding the FormsModule  to the imports[]  array in the AppModule.

You then also need to add the import from @angular/forms  in the app.module.ts file:

import { FormsModule } from '@angular/forms'; 

### 32. Two-Way-Databinding

Sử dụng **[(ngModel)]** như sau:

```html
<label>Server Name</label>
<input type="text" class="form-control" [(ngModel)]="serverName">
<p>{{ serverName }}</p>
```

Thẻ input với ngModel có thể vừa nhận giá trị từ TS, vừa có thể truyền dữ liệu sang TS. Còn với Event Binding thì chỉ có thể truyền dữ liệu sang TS.

### 33. Combining all Forms of Databinding

Chỉnh sửa lại Demo app.

```ts
onCreateServer(): void {
  this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
}
```

# Learn Angular

[Angular - The Complete Guide (2020 Edition)](https://www.udemy.com/course/the-complete-guide-to-angular-2/).

## 01 Getting Started

### 001 Course Introduction

Trong khóa học này chúng ta sẽ học cách để tạo một front end web application tuyệt vời bằng Angular

### 002 What is Angular

Angular là một Javascript Framework cho phép bạn tạo Single Page Applications (SPAs).

### 003 Join our Online Learning Community

Tham gia cộng đồng [Academind Community](https://discord.gg/gxvEWGU) trên Discord

### 004 Angular vs Angular 2 vs Angular 9

Trải qua quá trình phát triển, hiện tại chúng ta có 2 phiên bản Angular:

- AngularJS: Hay còn gọi là Angular 1, là phiên bản đầu tiên của Angular.
- Angular: Là phiên bản làm lại và khác hoàn toàn với AngularJS. Những phiên bản từ Angular 2, ..., 10 đến nay đều gọi chung là Angular và chúng được cập nhật mỗi 6 tháng một lần để sửa lỗi và cập nhật tính năng.

Trong khóa học này, chúng ta sẽ học Angular

### 005 CLI Deep Dive Troubleshooting

[Angular CLI](https://cli.angular.io/) là một command line interface cho Angular giúp chúng ta tạo, phát triển, quản lý, chạy ứng dụng, ...

### 006 Project Setup and First App

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

### 007 Editing the First App

[Visual Studio Code](https://code.visualstudio.com/): Đây là một IDE mạnh mẽ và được nhiều developer sử dụng.

### 008 The Course Structure

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

### 009 How to get the Most out of the Course

B1: Xem video để hiểu
B2: Làm bài tập liên quan đến phần đó
B3: Làm tích hợp những gì vừa học được vào dự án
B4: Hỏi nếu không hiểu vấn đề gì đó, nhưng nhớ phải search Google trước
B5: Trả lời câu hỏi của những người trong cộng đồng Angular

### 010 What is TypeScript

Typescript là một superset của Javascript, nó mở rộng các tính năng mới như Types, Class, Interfaces, ... theo hướng đối tượng.

Khi chạy, Typescript sẽ được biên dịch sang Javascript

### 011 A Basic Project Setup using Bootstrap for Styling

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

### 012 Where to find the Course Source Code

Trong mỗi thư mục sẽ có file zip của source code cho mỗi phần. Nhưng chúng ta sẽ tự code và không cần dùng đến chúng :)

## 02 The Basics

### 013 Module Introduction

Trong phần này chúng ta sẽ đi sâu vào Angular để biết nó thực sự là cái gì? Cái gì xảy ra đằng sau nó? Cách Angular bắt đầu

### 014 How an Angular App gets Loaded and Started

Khi chúng ta chạy `ng serve`, Angular sẽ tạo ra một development server để host ứng dụng Angular ở địa chỉ http://localhost:4200/

Khi trang này được mở, file `src/index.html` sẽ được khởi chạy, trong thẻ `body` ta sẽ có nội dung sau `<app-root></app-root>`. Chúng ta có thể thấy rằng `app-root` không phải là một thẻ HTML mà là một thẻ được chúng ta định nghĩa. Nó được định nghĩa trong file `app.component.ts`

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'learn-angular';
}
```

Đoạn code trên dùng để định nghĩa thẻ `app-root` có template là từ file `app.component.html` với style trong file `app.component.css` và được xử lý bởi class `AppComponent`. Nếu bây giờ chúng ta thêm nội dung `<h3>I'm in the AppComponent!</h3>` vào file `app.component.html` và lưu lại, thì ứng dụng sẽ tự động rebuild và tải lại trang, lúc này chúng ta sẽ thấy thẻ h3 vừa thêm trên ứng dụng. Thẻ `app-root` trong thẻ `body` của file `index.html` sẽ được thay bằng nội dung trong file `app.component.html`

Tại sao ứng dụng biết mà tải thẻ `<app-root>` từ file app.component.ts? Vì lúc ứng dụng khởi động, file `main.ts` cũng sẽ chạy, trong file này nó sẽ gọi `AppModule`, trong `AppModule` có khai báo AppComponent cho nên Angular biết `app-root` ở đâu để mà lấy.

### 015 Components are Important

Components là một khai niệm quan trọng trong Angular, mỗi thành phần của ứng dụng sẽ là một Component. Ví dụ với 1 trang web cơ bản, chúng ta sẽ có 1 component cho header, 1 component cho main, 1 component cho sidebar, 1 component cho footer. Mỗi component sẽ chứa code HTML, CSS và cả logic. Việc phân tách này sẽ rất hữu ích trong việc mở rộng cũng như mainternance. Nếu bạn muốn sửa header, bạn chỉ cần sửa component header và nó không ảnh hưởng đến các thành phần khác.

### 016 Creating a New Component

Bây giờ chúng sẽ tạo một component gọi là `server`. Đầu tiên là tạo một thư mục /src/app/server và thêm vào đó file server.component.ts

Đầu tiên, chúng ta sẽ tạo một class rong file server.component.ts

```ts
export class ServerComponent {}
```

Thêm export để đảm bảo class này có thể được gọi từ bên ngoài
Tiếp theo chúng ta sẽ import Component decorator từ @angular/core sau đó thêm nó vào trước class như sau:

```ts
import { Component } from '@angular/core';

@Component({})
export class ServerComponent {}
```

Tiếp theo là cập nhật Component decorator như sau:

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {}
```

Cuối cùng thêm nội dung vào server.component.html

### 017 Understanding the Role of AppModule and Component Declaration

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

### 018 Using Custom Components

Sau khi thêm ServerComponent vào AppModule. Bây giờ chúng ta đã có thể sử dụng nó.

app.component.html

```html
<h3>I'm in the AppComponent!</h3>
<hr />
<app-server></app-server>
```

Lưu lại và ta sẽ thấy nội dung trong serve.component.html xuất hiện trên trang http://localhost:4200/

### 019 Creating Components with the CLI Nesting Components

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

### 020 Working with Component Templates

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

### 021 Working with Component Styles

Chúng ta có thể sử dụng styles thay cho styleUrls

### 022 Fully Understanding the Component Selector

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

### 023 [OPTIONAL] Assignment Solution

Sau khi tạo Component bằng tay. Nhớ thêm vào AppModule

Chỉ có thế thôi mà cũng tạo một bài riêng. Ông này cũng rãnh ghê :))

### 024 What is Databinding

Bây giờ chúng ta sẽ tìm hiểu Databinding. Vậy Databinding cái gì?

Databinding là giao tiếp giữa Typescript code (Business logic) và Template (HTML).

TS xuất dữ liệu ra HTML bằng 2 cách:

- **String Interpolation** ({{ data }})
- **Property Binding** ([property]="data")

TS nhận lại phản hồi từ HTML:

- **Event Binding** ((event)="expression")

Gộp 2 cái lại chúng ta có: **Two-way-binding** ([(ngModel)]="data")

### 025 String Interpolation

Để sử dụng string interpolation, chúng ta sẽ khai báo biến trong file TS sau đó xử dụng ở file HTML như sau:

server.component.ts

```ts
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';
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
  serverStatus: string = 'offline';

  getServerStatus() {
    return this.serverStatus;
  }
}
```

server.component.html

```html
<p>{{ 'Server' }} with ID {{ serverId }} is {{ getServerStatus() }}</p>
```

### 026 Property Binding

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

### 027 Property Binding vs String Interpolation

Thêm [] cho property để chỉ ra rằng nó là một property động và có thể viết TS code vào trong đó. Có thể là lấy giá trị từ TS hoặc một biểu thức

### 028 Event Binding

servers.component.ts

```ts
serverCreationStatus: string = 'No server was created!';

onCreateServer() {
  this.serverCreationStatus = 'Server was created!';
}
```

servers.component.html

```html
<button
  class="btn btn-primary"
  [disabled]="!allowNewServer"
  (click)="onCreateServer()"
>
  Add Server
</button>
<p>{{ serverCreationStatus }}</p>
```

> Đặt tên event trong ()

### 029 Bindable Properties and Events

How do you know to which Properties or Events of HTML Elements you may bind? You can basically bind to all Properties and Events - a good idea is to `console.log()` the element you're interested in to see which properties and events it offers.

Important: For events, you don't bind to onclick but only to click (=> (click)).

The MDN (Mozilla Developer Network) offers nice lists of all properties and events of the element you're interested in. Googling for `YOUR_ELEMENT properties` or `YOUR_ELEMENT events` should yield nice results.

### 030 Passing and Using Data with Event Binding

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
<input type="text" class="form-control" (input)="onUpdateServerName($event)" />
<p>{{ serverName }}</p>
```

> Sử dụng **$event** để truyền event data

### 031 Important FormsModule is Required for Two-Way-Binding

Important: For Two-Way-Binding (covered in the next lecture) to work, you need to enable the ngModel directive. This is done by adding the FormsModule to the imports[] array in the AppModule.

You then also need to add the import from @angular/forms in the app.module.ts file:

import { FormsModule } from '@angular/forms';

### 032 Two-Way-Databinding

Sử dụng **[(ngModel)]** như sau:

```html
<label>Server Name</label>
<input type="text" class="form-control" [(ngModel)]="serverName" />
<p>{{ serverName }}</p>
```

Thẻ input với ngModel có thể vừa nhận giá trị từ TS, vừa có thể truyền dữ liệu sang TS. Còn với Event Binding thì chỉ có thể truyền dữ liệu sang TS.

### 033 Combining all Forms of Databinding

Chỉnh sửa lại Demo app.

```ts
onCreateServer(): void {
  this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
}
```

### 034 [OPTIONAL] Assignment Solution

Chúng ta có thể sử dụng biểu thức cho property cũng như event binding như sau:

```html
<button
  class="btn btn-primary"
  [disabled]="serverName == ''"
  (click)="serverName = ''"
>
  Reset Server
</button>
```

### 035 Understanding Directives

Directives are Instructions in the DOM

Directives cũng tương tự như Component nhưng nó thường được sử dụng trong DOM

ngIf, ngFor, ... là các directives

### 036 Using ngIf to Output Data Conditionally

```html
<p *ngIf="serverCreated">Server was created! Name is {{ serverName }}</p>
```

Nếu `serverCreated==true` thì chúng ta sẽ thấy thẻ p. Ngược lại, nếu `serverCreated==false`, thẻ p sẽ không được tạo.

### 037 Enhancing ngIf with an Else Condition

Sử dụng ngIf else với ng-template như sau:

```html
<p *ngIf="serverCreated; else noServer">
  Server was created! Name is {{ serverName }}
</p>
<ng-template #noServer>
  <p>No server was created!</p>
</ng-template>
```

### 038 Styling Elements Dynamically with ngStyle

```html
<p [ngStyle]="{backgroundColor: getColor()}">...</p>
```

hoặc

```html
<p [ngStyle]="{'background-color': 'blue'}">...</p>
```

### 039 Applying CSS Classes Dynamically with ngClass

Sử dụng **ngClass** để thêm hoặc xóa class trong DOM như sau:

```html
<p [ngClass]="{online: serverStatus === 'online'}">...</p>
```

### 040 Outputting Lists with ngFor

Sử dụng ngFor để tạo danh sách như sau:

```html
<app-server *ngFor="let server of servers"></app-server>
```

Khai báo biết server duyệt qua từng phần tử trong servers

### 041 [OPTIONAL] Assignment Solution

Sử dụng ngIf để ẩn/hiện password

### 042 Getting the Index when using ngFor

```html
<div *ngFor="let server of servers; let i = index"></div>
```

## 03 Course Project - The Basics

Trong phần này chúng ta sẽ tạo một project shopping list để thực hành những cái đã học được.

### 043 Project Introduction

### 044 Planning the App

![Planling the App](https://i.ibb.co/tsnwr3b/vlcsnap-2020-11-26-07h32m56s412.png)

### 045 Installing Bootstrap Correctly

In the next lecture, we set up the course project. For that, we'll install the Bootstrap CSS Framework.

In this course, we use version 3 of the framework, install it via `npm install --save bootstrap@3` => The `@3` is important!

Additionally, when using a project created with Angular CLI 6+ (check via `ng -v`), you'll have an `angular.json` file instead of an .`angular-cli.json` file. In that file, you still need to add Bootstrap to the styles[] array as shown in the next video, but the path should be `node_modules/bootstrap/dist/css/bootstrap.min.css` , NOT `../node_modules/bootstrap/dist/css/bootstrap.min.css`. The leading `../` must not be included.

Also see this lecture - I do show the complete setup process there: https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6655614/

### 046 Setting up the Application

Khôi phục lại dự án để bắt đầu dự án mới. Thay vì phải tạo mới dự án và cài đặt Bootstrap lại.

### 047 Creating the Components

Tạo HeaderComponent bằng tay.
Tạo RecipesComponent bằng CLI:

```cmd
ng g c recipes --skipTests true
```

> Thêm `--skipTest true` nếu không cần file test .spec.ts

> Component không nhất thiết phải nằm ở thư mục `app`

Chúng ta sẽ tạo `RecipeDetailComponent` trong thư mục `recipes` như sau:

```cmd
ng g c recipes/recipe-detail --skipTests true
```

Tương tự, chúng ta sẽ tạo các component sau:

recipe/recipe-list
recipe/recipe-detail
recipe/recipe-detail/recipe-item
shopping-list
shopping-list/shopping-edit

### 048 Using the Components

### 049 Adding a Navigation Bar

### 050 Alternative Non-Collapsable Navigation Bar

### 051 Creating a Recipe Model

Chúng ta sẽ tạo một `Recipe` Model là một `class` trong `OOP` với các thuộc tính và gán giá trị trong hàm `constructor`

```ts
export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, desc: string, imagePath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}
```

### 052 Adding Content to the Recipes Components

### 053 Outputting a List of Recipes with ngFor

```html
<div class="row">
  <div class="col-xs-12">
    <a href="#" class="list-group-item clearfix" *ngFor="let recipe of recipes">
      <div class="pull-left">
        <h4 class="list-group-item-heading">{{ recipe.name }}</h4>
        <p class="list-group-item-text">{{ recipe.description }}</p>
      </div>
      <span class="pull-right">
        <img
          [src]="recipe.imagePath"
          alt=""
          class="img-responsive"
          style="max-height: 50px;"
        />
      </span>
    </a>
    <app-recipe-item></app-recipe-item>
  </div>
</div>
```

### 054 Displaying Recipe Details

### 055 Working on the ShoppingListComponent

### 056 Creating an Ingredient Model

```ts
export class Ingredient {
  public name: string;
  public amount: number;

  constructor(name: string, amount: number) {
    this.name = name;
    this.amount = amount;
  }
}
```

Viết gọn lại như sau:

```ts
export class Ingredient {
  constructor(public name: string, public amount: number) {}
}
```

### 057 Creating and Outputting the Shopping List

### 058 Adding a Shopping List Edit Section

### 059 Wrap Up Next Steps

## 04 Debugging

### 060 Understanding Angular Error Messages

Khi gặp lỗi thì nhớ mở `Console` trong `Debug Mode` của trình duyệt để kiểm tra. (`F12` in `Chrome` on `Windows`)

> Lỗi xuất hiện màu đỏ và lý do thường nằm ở dòng đầu tiên của thông báo lỗi

### 061 Debugging Code in the Browser Using Sourcemaps

Lưu ý: `Typescript` không chạy trực tiếp trong trình duyệt, khi chạy, code `Typescript` sẽ được biên dịch sang `Javascript`. Vì `Javascript` hỗ trợ `source map`, nên khi click và code `Javascript` trong thẻ `Sources` của `Debug Mode` thì nó sẽ link tới đoạn code tương ứng trong file `Typescript`

> Chúng ta có thể vào số dòng của file `Javascript` trong `Sources` để chạy `debug`

### 062 Using Augury to Dive into Angular Apps

Augury là một `extension` trong `Chrome` dùng để debug app

## 05 Components Databinding Deep Dive

### 063 Module Introduction

Understanding Components & Databinding

### 064 Splitting Apps into Components

Tách code từ AppComponent to CockpitComponent và ServerElementComponent

### 065 Property Event Binding Overview

### 066 Binding to Custom Properties

Trong bài này chúng ta học được cách sử dụng Input

Trong file `AppComponent` chúng ta có 1 mảng `serverElements`

```ts
serverElements = [
  { type: 'server', name: 'Testserver', content: 'Just a test!' },
];
```

Trong app-component chúng ta sử dụng ngFor để duyệt qua từng phần tử của mảng `serverElements` và đưa đưa vào `app-server-element`

Vấn đề bây giờ là làm sao từ app.component.html chúng ta truyền được từng giá trị của mảng `serverElements` qua ServerElementComponent để hiển thị? Câu trả lời là sử dụng `@Input`

Trong ServerElementComponent chúng ta sẽ khai báo một `Input` tên là `element` như sau:

```ts
@Input() element: { type: string, name: string, content: string };
```

Nhớ import `Input` từ `@angular/core`. Mục đích câu lệnh trên là để khai báo răng element là 1 object có 3 giá trị là `type, name, string` và nó là sẽ nhận giá trị từ bên ngoài thông qua selector `app-server-element`

Trong app.component.html chúng ta sẽ thêm vào thuộc tính element cho thẻ `app-server-element` như sau:

```html
<app-server-element
  *ngFor="let serverElement of serverElements"
  [element]="serverElement"
></app-server-element>
```

### 067 Asigning an Alias to Custom Properties

Thay vì sử dụng tên biến `element` từ `ServerElementComponent` như là tên của thuộc tính trong thẻ `app-server-element`. Chúng ta có thể sử dụng Alias để thay đổi tên của thuộc tính như sau:

Thay đổi `@Input()` thành` @Input('srvElement')`

Trong app.component.html, thuộc tính element bây giờ sẽ được đổi thành srvElement

```html
<app-server-element
  *ngFor="let serverElement of serverElements"
  [srvElement]="serverElement"
></app-server-element>
```

### 068 Binding to Custom Events

Bài trước chúng ta đã học cách sử dụng `Input`, bài này chúng ta sẽ học về `Output`

Mục tiêu là chúng ta sẽ tạo một `Custom Event`. Vậy `Custom Event` là cái gì? Những cái như (click), (onChange), ... được gọi là `event`. Vậy `Custom Event` là `event` mà do chúng ta tự tạo ra ví dụ như `(serverCreated)`, (`blueprintCreated)`

À, đã hiểu. Vậy làm sao để tạo `Custom Event`?

Trong bài này, chúng ta sẽ sử dụng Custom Event để truyền data khi click vào button từ CockpitComponent sang AppComponent

Trong `app.component.html` chúng ta sẽ thêm 2 Custom Event là `(serverCreated)`, (`blueprintCreated)` vào thẻ `app-cockpit` để thực hiện 2 funtion là `onServerAdded($event)` và `onBlueprintAdded($event)` với $event là data từ CockpitComponent truyền sang có kiểu dữ liệu là một object có 2 giá trị như sau: `{ serverName: string; serverContent: string }`.

```html
<app-cockpit
  (serverCreated)="onServerAdded($event)"
  (blueprintCreated)="onBlueprintAdded($event)"
></app-cockpit>
```

Tiếp theo chúng ta sẽ định nghĩa 2 `Custom Event` trong CockpitComponent như sau:

```ts
@Output() serverCreated = new EventEmitter<{ serverName: string; serverContent: string; }>();
@Output() blueprintCreated = new EventEmitter<{ serverName: string; serverContent: string; }>();
```

Sử dụng @Output để có thể sử dụng Custom Event từ bên ngoài

> Nhớ import Output và EventEmitter từ @angular/core

Trong file `cockpit.component.html` chúng ta sẽ có 2 button với 2 function là `onAddServer()` và `onAddBlueprint()`

```html
<div class="col-xs-12">
  <p>Add new Servers or blueprints!</p>
  <label>Server Name</label>
  <input type="text" class="form-control" [(ngModel)]="newServerName" />
  <label>Server Content</label>
  <input type="text" class="form-control" [(ngModel)]="newServerContent" />
  <br />
  <button class="btn btn-primary" (click)="onAddServer()">Add Server</button>
  <button class="btn btn-primary" (click)="onAddBlueprint()">
    Add Server Blueprint
  </button>
</div>
```

Trong `cockpit.component.ts` chúng ta sẽ định nghĩa như sau:

```ts
onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
    });
  }
```

Chúng ta Sử dụng `this.serverCreated.emit()` và `this.blueprintCreated.emit()` để truyền data sang AppComponent

### 069 Asigning an Alias to Custom Events

Tương tự hàm `Input`, với hàm `Output` chúng ta cũng có thể sử dụng Alias như sau:

app.component.html

```html
<app-cockpit
  (serverCreated)="onServerAdded($event)"
  (bpCreated)="onBlueprintAdded($event)"
></app-cockpit>
```

cockpit.component.ts

```ts
@Output('bpCreated')blueprintCreated = new EventEmitter<{ serverName: string; serverContent: string; }>();
```

### 070 Custom Property and Event Binding Summary

Cách tiếp cận sử dụng @Input and @Output chỉ phù hợp trong trường hợp chỉ có 1 parent component và 1 child component giao tiếp với nhau. Trong một số trường hợp khác thì nó không phù hợp, chúng ta sẽ có một cách tiếp cận khác sẽ học trong bài sau.

### 071 Understanding View Encapsulation

Khi chạy thử ứng dụng, chúng ta thấy rằng khi tạo Server Blueprint thì giá trị của nó không được chuyển sang màu xanh. Mặc dù Trong app.component.css chúng ta đã định nghĩa `p { color: blue; }`.

Khi inspect ra thì chúng ta sẽ thấy trong các thẻ chúng ta sử dụng trong các component sẽ có thêm các thuộc tính như `_ngcontent-poy-c42`. Đây là những giá trị mà Angular tạo ra để phân tách style cho từng component.

Bây giờ, để đổi màu của Server Bluesprint thì chúng ta cần phải thêm đoạn code vào trong component sử dụng nó là server-element.component.css như sau:

```css
p {
  color: blue;
}
```

### 072 More on View Encapsulation

Bình thường file `CSS` bên trong một component chỉ được áp dụng cho component đó.

Tuy nhiên khi thêm thuộc tính `encapsulation` vào `Component` thì những style trong component sẽ được áp dụng `Global`

```ts
@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
```

`server-element.component.css`

```css
label {
  color: red;
}
```

Sau khi chúng ta thêm style trên vào thì tất cả thẻ label trong ứng dụng đều chuyển sang màu đỏ

### 073 Using Local References in Templates

Thay vì sử dụng ngModel cho biến newSererName, chúng ta có thể sử dụng Local References như sau:

```html
<!-- <input type="text" class="form-control" [(ngModel)]="newServerName"> -->
<input type="text" class="form-control" #serverNameInput />
<label>Server Content</label>

<!-- <button class="btn btn-primary" (click)="onAddServer()">Add Server</button> -->
<button class="btn btn-primary" (click)="onAddServer(serverNameInput)">
  Add Server
</button>
```

> Lưu ý: Local References chỉ có thể sử dụng trong file HTML

Chúng ta sẽ cập nhật lại file `cockpit.component.ts` như sau:

```ts
// newServerName = '';
newServerContent = '';

constructor() {}

ngOnInit(): void {}

onAddServer(nameInput: HTMLInputElement) {
  this.serverCreated.emit({
    serverName: nameInput.value,
    serverContent: this.newServerContent,
  });
}

onAddBlueprint(nameInput: HTMLInputElement) {
  this.blueprintCreated.emit({
    serverName: nameInput.value,
    serverContent: this.newServerContent,
  });
}
```

### 074 ViewChild() in Angular 8

Trong Angular 8+, cú pháp `@ViewChild()` bị thay đổi như sau:

Thay:

```ts
@ViewChild('serverContentInput') serverContentInput: ElementRef;
```

bằng

```ts
@ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;
```

Sử dụng `{ static: true }` nếu bạn cần truy cập trong ngOnInit(). Nếu không thì sử dụng `false`.

Nếu bạn sử dụng Angular 9, bạn chỉ cần thêm { static: true } (if needed) chứ không cần thêm { static: false }.

### 075 Getting Access to the Template DOM with ViewChild

Trong bài này chúng ta sẽ học về `@ViewChild`

Chúng ta sử dụng Local Reference trong HTML và add ViewChild trong TS như sau:

cockpit.component.html

```html
<!-- <input type="text" class="form-control" [(ngModel)]="newServerContent"> -->
<input type="text" class="form-control" #serverContentInput />
```

cockpit.component.ts

```ts
@ViewChild('serverContentInput') serverContentInput: ElementRef;

constructor() {}

ngOnInit(): void {}

onAddServer(nameInput: HTMLInputElement) {
  this.serverCreated.emit({
    serverName: nameInput.value,
    serverContent: this.serverContentInput.nativeElement.value,
  });
}

onAddBlueprint(nameInput: HTMLInputElement) {
  this.blueprintCreated.emit({
    serverName: nameInput.value,
    serverContent: this.serverContentInput.nativeElement.value,
  });
}
```

### 076 Projecting Content into Components with ng-content

Mặc định, nội dung bên trong thẻ đóng và thẻ mở của một component sẽ không được áp dụng, Angular không quan tâm đến chúng. Nhưng chúng ta có thể thay đổi nó bằng cách sử dụng `<ng-content></ng-content>` trong template của component như sau:

app.component.html

```html
<app-server-element
  *ngFor="let serverElement of serverElements"
  [srvElement]="serverElement"
>
  <p>
    <strong *ngIf="serverElement.type === 'server'" style="color: red"
      >{{ serverElement.content }}</strong
    >
    <em *ngIf="serverElement.type === 'blueprint'"
      >{{ serverElement.content }}</em
    >
  </p>
</app-server-element>
```

server-element.component.html

```html
<div class="panel panel-default">
  <div class="panel-heading">{{ element.name }}</div>
  <div class="panel-body">
    <ng-content></ng-content>
  </div>
</div>
```

### 077 Understanding the Component Lifecycle

Khi chúng ta tạo component bằng CLI, chúng ta sẽ thấy hàm `ngOnInit` bên trong file TS của component. Vậy nó dùng để làm gì?

- ngOnChanges: được gọi ngay khi một component được tạo hay giá trị của @Input thay đổi
- ngOnInit: được gọi một khi component khởi tạo, sau `constructor`
- ngDoCheck: được gọi khi có sự thay đổi như khi nhập input, click button, ...
- ngAfterContentInit: được gọi sau khi content (ng-content) được gắn vào view
- ngAfterContentChecked: được gọi khi nội dung ng-content có thay đổi
- ngAfterViewInit: được gọi khi tất cả thành phần đã được render
- ngAfterViewChecked: được gọi khi có sự thay đổi sau khi tất cả thành phần đã được render

### 078 Seeing Lifecycle Hooks in Action

Để sử dụng ngOnChanges, chúng ta cần import từ @angular/core và thêm vào implements của Component class như sau:

```ts
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';

export class ServerElementComponent implements OnInit, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges called');
  }
}
```

`ngOnChanges` được gọi sau `constructor` và trước `ngOnInit`

Khi chúng ta tạo mới một giá trị thì cả `constructor`, `ngOnInit` và `ngOnChanges` đều được gọi. Nhưng khi chúng ta thay đổi giá trị thì chỉ `ngOnChanges` được gọi.

`ngDoCheck` được gọi sau `ngOnInit`, khi có bất kỳ thay đổi nào trên component

`ngAfterContentInit` được gọi sau `ngDoCheck`, và chỉ chạy 1 lần

`ngAfterContentChecked` được gọi ngay sau mỗi `ngDoCheck`

`ngAfterViewInit` và `ngAfterViewChecked` tương tự cũng như chạy sau `ngAfterContentInit` và `ngAfterContentChecked`

`ngOnDestroy` được gọi khi một component bị destroy

### 079 Lifecycle Hooks and Template Access

Bây giờ chúng ta thử tạo một ViewChild và console.log nó ra bên trong `ngOnInit` và `ngAfterViewInit` như sau:

```ts
@ViewChild('heading') header: ElementRef;

ngOnInit(): void {
  console.log('ngOnInit called');
  console.log(this.header.nativeElement.textContent);
}

ngAfterViewInit() {
  console.log('ngAfterViewInit called');
  console.log(this.header.nativeElement.textContent);
}
```

Kết quả console.log trong `ngOnInit` sẽ bị lỗi vì `this.header.nativeElement` is undefined, còn trong ngAfterViewInit sẽ có giá trị.

### 080 ContentChild() in Angular 8

### 081 Getting Access to ng-content With ContentChild

Trong bài này chúng ta sẽ học cách sử dụng `@ContentChild` để lấy giá trị của một `Local Reference` là `#contentParagraph` từ `ng-content` trong `app.component.html`

app.component.html

```html
<app-server-element
  *ngFor="let serverElement of serverElements"
  [srvElement]="serverElement"
  [name]="serverElement.name"
>
  <p #contentParagraph>
    <strong *ngIf="serverElement.type === 'server'" style="color: red"
      >{{ serverElement.content }}</strong
    >
    <em *ngIf="serverElement.type === 'blueprint'"
      >{{ serverElement.content }}</em
    >
  </p>
</app-server-element>
```

server-element.component.ts

```ts
@ContentChild('contentParagraph') paragraph: ElementRef;
```

### 082 Wrap Up

### 083 [OPTIONAL] Assignment Solution

## 06 Course Project - Components Databinding

### 084 Introduction

### 085 Adding Navigation with Event Binding

Bài này sử dụng `@Output` để nội dung của `AppComponent` chỉ hiển thị `Recipe` hoặc `Shopping List` khi chúng ta click từ `HeaderComponent`

### 086 Passing Recipe Data with Property Binding

Bài này sử dụng `@Input` để hiển thị mảng `recipes` từ `RecipeListComponent` sang `RecipeItemComponent`

### 087 Passing Data with Event and Property Binding

Bài này chúng ta sử dụng kết hợp `@Input` và `@Output` để hiển thị một `Recipe` vào `RecipeDetailComponent` khi `click` vào một `Recipe` từ `RecipeItemComponent`.

Cách làm thì hơi lằng ngoằng tí, nhưng mà nó làm việc! Cụ thể, khi `click` vào một `Recipe` trong `RecipeItemComponent`, chúng ta sẽ `@Output` sang `RecipeListComponent`, rồi sau đó lại `@Output` sang `RecipeComponent`, tại đây ta có `data` của `Recipe` được chọn, rồi `@Input` vào `RecipeDetailComponent` để hiển thị ra.

Trong bày này còn sử dụng `@ngIf` và `ng-template` để hiện thị message khi chưa có `Recipe` nào được chọn

### 088 Make sure you have FormsModule added

Nếu sử dụng form thì phải thêm FormsModule vào AppModule

### 089 Allowing the User to Add Ingredients to the Shopping List

Bài này chúng ta sử dụng `@Output` `EventEmitter` để thêm `Igradient` từ `ShoppingEditComponent` và hiển thị ra `ShoppingListComponent`

## 07 Directives Deep Dive

### 090 Module Introduction

Understanding Dierective

- Attribute Directives
- Structural Directives

### 091 ngFor and ngIf Recap

Trong 1 element không thể cùng sử dụng ngFor và ngIf

### 092 ngClass and ngStyle Recap

### 093 Creating a Basic Attibute Directive

Trong bài này chúng ta sẽ tạo một Directive đơn giản như sau:

app/basic-highlight/basic-highlight.directive.ts

```ts
import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]',
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
```

Để sử dụng được Directive thì chúng ta cần import nó vào phần `declarations` trong `app.module.ts`.

Bây giờ chúng ta có thể sử dụng nó như sau:

app.component.html

```html
<p appBasicHighlight>Style me with basic directive!</p>
```

### 094 Using the Renderer to build a Better Attribute Directive

Trong bài này chúng ta sẽ tạo `Directive` bằng `Renderer`.

> Cách này hay hơn cách trước (ông Max nói :v)

```cmd
ng g d better-highlight/better-highlight
```

better-highlight.directive.ts

```ts
import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'background-color',
      'blue'
    );
  }
}
```

### 095 More about the Renderer

In the last lecture, we used the Angular Renderer class to change the style of a HTML element. As explained in that lecture, you should use the Renderer for any DOM manipulations.

Of course, you can do more than simply change the styling of an element via setStyle(). Learn more about the available Renderer methods [here](https://angular.io/api/core/Renderer2).

### 096 Using HostListener to Listen to Host Events

Trong bài này chúng ta sử dụng HostListener để thay đổi background của thẻ p khi di chuột vào hoặc ra khỏi nó

```better-lighlight.directive.ts
import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elRef: ElementRef , private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  }
}
```

### 097 Using HostBinding to Bind to Host Properties

Trong bài này chúng ta sẽ sử dụng HostBinding thay cho Renderer

```ts
import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = 'transparent';
  }
}
```

Đây là cách tốt nhất để làm việc với `Element` bên trong `Directive`

### 098 Binding to Directive Properties

Trong bài này chúng ta sẽ chỉnh sửa Directive để nó có thể nhận giá trị động

```ts
import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }
}
```

app.component.html

```html
<p appBetterHighlight [defaultColor]="'yellow'" [highlightColor]="'red'">
  Style me with basic directive!
</p>
```

Chúng ta có thể đặt Alias cho Input cùng tên với directive và cập nhật lại như sau:

```ts
@Input('appBetterHighlight') highlightColor: string = 'blue';
```

```html
<p [appBetterHighlight]="'red'" defaultColor="yellow">
  Style me with basic directive!
</p>
```

### 099 What Happens behind the Scenes on Structural Directives

Nếu chúng ta thay `*ngIf` thành `[ngIf]` thì nó vẫn hoạt động bình thường

### 100 Building a Structural Directive

Chúng ta có thể tạo ra một `Structural Directive` tương tự như `ngIf` và `ngFor` như sau:

```ts
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]',
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}
}
```

```html
<div *appUnless="onlyOdd">
  <li
    class="list-group-item"
    *ngFor="let even of evenNumbers"
    [ngClass]="{odd: even % 2 !== 0}"
    [ngStyle]="{backgroundColor: even % 2 != 0 ? 'yellow' : 'transparent'}"
  >
    {{ even }}
  </li>
</div>
```

### 101 Understanding ngSwitch

Chúng ta có thể sử dụng ngSwitch theo template sau:

```html
<div [ngSwitch]="conditionExpression">
  <div *ngSwitchCase="expression">output</div>
  <div *ngSwitchDefault>output2</div>
</div>
```

## 08 Course Project - Directives

### 102 Building and Using a Dropdown Directive

Mục đích bài này là tạo ra `DropdownDirective` để hiển thị `dropdow` bằng cách thêm/xóa `class` tên là `open`

`dropdown.directive.ts`

```ts
import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
```

recipe-details.component.html

```html
<div class="btn-group" appDropdown>
  <button type="button" class="btn btn-primary dropdown-toggle">
    Manage Recipe <span class="caret"></span>
  </button>
  <ul class="dropdown-menu">
    <li><a href="#">To Shopping List</a></li>
    <li><a href="#">Edit Recipe</a></li>
    <li><a href="#">Delete Recipe</a></li>
  </ul>
</div>
```

### 103 Closing the Dropdown From Anywhere

If you want that a dropdown can also be closed by a click anywhere outside (which also means that a click on one dropdown closes any other one, btw.), replace the code of dropdown.directive.ts by this one (placing the listener not on the dropdown, but on the document):

Nếu bạn muốn dropdơn có thể đóng khi click vào bất kỳ đâu bên ngoài dropdown để close nó thì sử dụng code sau:

```ts
import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target)
      ? !this.isOpen
      : false;
  }
  constructor(private elRef: ElementRef) {}
}
```

## 09 Using Services Dependency Injection

### 104 Module Introduction

What are Services?

Khi có nhiều Component có dùng chung một hoặc một số chức năng thì thay vì chúng ta tạo chúng cho mỗi Component thì chúng ta sẽ tạo ra một nơi tập trung để xử lý chúng gọi là Services

### 105 Why would you Need Services

Thay vì truyền data lòng vòng giữa các Component như cách sử dụng Property và Event Binding thì chúng ta sẽ sử dụng Services để đơn giản hơn các thao tác

### 106 Creating a Logging Service

Chúng ta sẽ tạo một service cơ bản như sau:

logging.service.ts

```ts
export class LoggingService {
  logStatusChange(status: string) {
    console.log('A server status changed, new status: ' + status);
  }
}
```

Chúng ta sử dụng service này như sau:

new-account.component.ts

```ts
import { LoggingService } from '../logging.service';

export class NewAccountComponent {
  onCreateAccount(accountName: string, accountStatus: string) {
    const service = new LoggingService();
    service.logStatusChange(accountStatus);
    // console.log('A server status changed, new status: ' + accountStatus);
  }
}
```

Chỉ cần import, tạo mới class service và gọi hàm. Tuy nhiên đây không phải là cách làm đúng trong Angular. Chúng ta sẽ học trong bài sau

### 107 Injecting the Logging Service into Components

Để sử dụng Service trong Angular ta làm như sau:

1. Importing service

```ts
import { LoggingService } from '../logging.service';
```

2. Adding to providers

```ts
@Component({
  ...
  providers: [LoggingService]
})
```

3. Adding to constructor

```ts
constructor(private loggingService: LoggingService) {}
```

4. Calling in function

```ts
onCreateAccount(accountName: string, accountStatus: string) {
  this.loggingService.logStatusChange(accountStatus);
}
```

### 108 Creating a Data Service

Chúng ta tạo service như sau:

accounts.service.ts

```ts
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Testaccount',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];

  addAccount(name: string, status: string) {
    this.accounts.push({ name: name, status: status });
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
  }
}
```

Trong AccoutsService chúng ta có 1 mảng accounts và 2 hàm là addAccount và updateStatus. Bây giờ chúng ta có thể thay thế Output và EventEmitter bằng AccountsService.

Sau khi cập nhật, ứng dụng vẫn chạy bình thường nhưng khi chúng ta add/update account thì thông tin không được cập nhật. Chúng ta sẽ xử lý trong bài sau.

### 109 Understanding the Hierarchical Injector

Trong hình là phạm vi áp dụng của Service

![Hierarchical Injector](https://i.ibb.co/j3wSCgX/vlcsnap-2020-12-02-08h19m09s020.png)

### 110 How many Instances of Service Should It Be

Trong bài 109 chúng ta đã biết phạm vi áp dụng của Service. Quay lại vấn đề trong bài 108, khi chúng ta add/update account thì danh sách không được cập nhật.

Theo lý thuyết trong AppComponent chúng ta đã import AccountsService cho nên nó sẽ áp dụng cho tất cả component, cho nên lẽ ra nó nên hoạt động đúng. Tuy nhiên vấn đề ở đây là ở trong AccountComponent và NewAccountComponent chúng ta import AccountsServices một lần nữa, cho nên nó bị ghi đè và khi chúng ta add/update trong 2 component này thì nó không cập nhật được vào AccountsService trong AppComponent

Để giải quyết vấn đề này thì chúng ta chỉ cần gỡ bỏ provides AccountsService trong 2 component con là được, chỉ giữ lại provides trong AppComponent.

It works!

### 111 Injecting Services into Services

Chúng ta nên thêm services vào provides trong AppModule

Tiếp theo chúng ta sẽ chuyển logStatusChange vào AccountsService

```ts
import { LoggingService } from './logging.service';

export class AccountsService {
  accounts = [];

  constructor(private loggingService: LoggingService) {}

  addAccount(name: string, status: string) {
    this.accounts.push({ name: name, status: status });
    this.loggingService.logStatusChange(status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.logStatusChange(status);
  }
}
```

Tuy nhiên có một vấn đề và ứng dụng sẽ không chạy. Để nó hoạt động chúng ta cần phải thêm @Injectable như sau:

```ts
import { Injectable } from '@angular/core';

import { LoggingService } from './logging.service';

@Injectable()
export class AccountsService {}
```

> Lưu ý: không phải tất cả service đều cần sử dụng @Injectable. Chỉ cần phải thêm @Injectable nếu trong service đó có sử dụng một Service khác. Tuy nhiên Angular đề nghị nên sửa thêm @Injectable cho tất cả Service :))

### 112 Using Services for Cross-Component Communication

Ví dụ bây giờ chúng ta muốn bắt sự kiện khi một status thay đổi trong `NewAccountComponent` từ `AccountComponent` thì làm thế nào?

Chúng ta sẽ làm như sau:

1. Đầu tiên là sử dụng `EventEmitter` trong `AccountsService`

```ts
statusUpdated = new EventEmitter<string>();
```

2. Tiếp theo là `emit` `status` khi có thay đổi trong `AccountComponent`

```ts
this.accountsService.statusUpdated.emit(status);
```

3. Cuối cùng là `subscribe` event trong `NewAccountComponent`

```ts
this.accountsService.statusUpdated.subscribe((status: string) =>
  alert('New Status: ' + status)
);
```

### 113 Services in Angular 6

Từ Angular 6+, chúng có thể sử dụng

```ts
@Injectable({providedIn: 'root'})
export class MyService { ... }
```

thay cho:

```ts
export class MyService { ... }
```

và

```ts
import { MyService } from './path/to/my.service';

@NgModule({
  ...
  providers: [MyService]
})
export class AppModule { ... }
```

Cái này là lazy loading, services sẽ không import ngay từ đầu, mà chỉ được sử dụng khi cần.

### 114 [OPTIONAL] Assignment Solution

## 10 Course Project - Services  Dependency Injection

### 115 Introduction

Trong phần này chúng ta sẽ sử dụng Services vào dự án

### 116 Setting up the Services

Chúng ta sẽ tạo 2 services sau:

1. recipes/recipe.service.ts
2. shopping-list/shopping-list.service.ts

### 117 Managing Recipes in a Recipe Service

Chúng ta sẽ tạo RecipeService để lưu và trả về danh sách recipes như sau:

recipe.service.ts

```ts
import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Recipe Test 1',
      'This is simple a test 1',
      'https://i1.wp.com/www.eatthis.com/wp-content/uploads/2019/10/pumpkin-pad-thai-recipe.jpg'
    ),
    new Recipe(
      'Recipe Test 2',
      'This is simple a test 2',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg'
    ),
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
```

Sau đó thêm vào `provides` trong `RecipeComponent` để có thể sử dụng trong `RecipeComponent` và các `Child Components` của nó

### 118 Using a Service for Cross-Component Communication

Trong bài này chúng ta sử dụng RecipeService để thay cho cách làm ở bài 087

1. Thêm `EventEmitter` vào `recipe.service.ts`

```ts
recipeSelected = new EventEmitter<Recipe>();
```

2. `Emit` trong `recipe-item.component.ts`

```ts
onSelected(): void {
  this.recipeService.recipeSelected.emit(this.recipe);
}
```

3. `Subscribe` trong `recipes.component.ts`

```ts
ngOnInit(): void {
  this.recipeService.recipeSelected.subscribe(
    (recipe: Recipe) => {
      this.recipeSelected = recipe;
    }
  );
}
```

### 119 Adding the Shopping List Service

Chúng ta tạo `ShoppingListService` như sau:

`shopping-list.service.ts`

```ts
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
```

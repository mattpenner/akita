(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{108:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,m=d["".concat(o,".").concat(u)]||d[u]||b[u]||i;return n?r.a.createElement(m,s(s({ref:t},l),{},{components:n})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),i=(n(0),n(108)),o={title:"Ng Entity Service"},s={unversionedId:"angular/entity-service",id:"angular/entity-service",isDocsHomePage:!1,title:"Ng Entity Service",description:"There\u2019s even more boilerplate we can save you, by creating an Akita entity service, which follows the standard RESTful naming conventions by default.",source:"@site/docs/angular/entity-service.mdx",slug:"/angular/entity-service",permalink:"/akita/docs/angular/entity-service",editUrl:"https://github.com/datorama/akita/edit/master/docs/docs/angular/entity-service.mdx",version:"current",sidebar:"docs",previous:{title:"Local Component State",permalink:"/akita/docs/angular/local-state"},next:{title:"Angular Router Store",permalink:"/akita/docs/angular/router"}},c=[{value:"Getting Started",id:"getting-started",children:[]},{value:"Entity Service Loader",id:"entity-service-loader",children:[]},{value:"Entity Service Notifier",id:"entity-service-notifier",children:[]},{value:"Options",id:"options",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"There\u2019s even more boilerplate we can save you, by creating an Akita entity service, which follows the standard ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://restfulapi.net/resource-naming/"}),"RESTful naming conventions")," by default."),Object(i.b)("p",null,"Specifically, this service can be extremely useful in systems that use strict url patterns, such as CMS, admin dashboards, etc."),Object(i.b)("h2",{id:"getting-started"},"Getting Started"),Object(i.b)("p",null,"After installing Akita, we simply run:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install @datorama/akita-ng-entity-service\n")),Object(i.b)("p",null,"Let\u2019s use ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://jsonplaceholder.typicode.com/"}),"JSONPlaceholder")," as our REST API and quickly scaffold a feature for Posts. To get started we run:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"ng g af posts\n")),Object(i.b)("p",null,"This schematics command generates an Akita ",Object(i.b)("inlineCode",{parentName:"p"},"PostsStore"),", ",Object(i.b)("inlineCode",{parentName:"p"},"PostsQuery"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"PostsService"),". First we need to define the base api url that will be used for each request. This is done when adding the service configuration to the module:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="app.module.ts"',title:'"app.module.ts"'}),"import { \n  HttpMethod, \n  NG_ENTITY_SERVICE_CONFIG, \n  NgEntityServiceGlobalConfig \n} from '@datorama/akita-ng-entity-service';\n\n@NgModule({\n  ...\n  providers: [\n    {\n      provide: NG_ENTITY_SERVICE_CONFIG,\n      useValue: {\n        baseUrl: 'https://jsonplaceholder.typicode.com'\n      }\n    }\n  ],\n  bootstrap: [AppComponent]\n})\nexport class AppModule {}\n\n")),Object(i.b)("p",null,"Note that if you have server calls that use a different base url than the one you defined in the above setting, you can modify the url per service, or use a factory if you dynamically generate the url based on other providers\u2019 data. Our service looks like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="posts.service.ts"',title:'"posts.service.ts"'}),"import { Injectable } from '@angular/core';\nimport { NgEntityService } from '@datorama/akita-ng-entity-service';\nimport { PostsState, PostsStore } from './posts.store';\n\n@Injectable({ providedIn: 'root' })\nexport class PostsService extends NgEntityService<PostsState> {\n  constructor(protected store: PostsStore) {\n    super(store);\n  }\n}\n")),Object(i.b)("p",null,"This ensures that the service will automatically perform its CRUD operations on the ",Object(i.b)("inlineCode",{parentName:"p"},"PostsStore")," we\u2019ve generated. By extending ",Object(i.b)("inlineCode",{parentName:"p"},"NgEntityService"),", we get a several built-in API calls without the need to add them ourselves: ",Object(i.b)("inlineCode",{parentName:"p"},"get()"),", ",Object(i.b)("inlineCode",{parentName:"p"},"add()"),", ",Object(i.b)("inlineCode",{parentName:"p"},"update()")," and ",Object(i.b)("inlineCode",{parentName:"p"},"delete()"),". Next, let\u2019s create a component that uses those calls:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="posts.component.ts"',title:'"posts.component.ts"'}),"@Component()\nexport class PostsPageComponent {\n  posts$ = this.postsQuery.selectAll();\n\n  constructor(\n    private postsQuery: PostsQuery,\n    private postsService: PostsService\n  ) {}\n\n  ngOnInit() {\n    this.postsService.get().subscribe();\n  }\n\n  getOne(id) {\n    this.postsService.get(id).subscribe();\n  }\n\n  add() {\n    this.postsService.add({ title: 'New Post', body: '' }).subscribe();\n  }\n\n  update(id) {\n    this.postsService.update(id, { title: 'New title' }).subscribe({\n      error: (error) => {\n        this.error = error;\n      }\n    });\n  }\n\n  remove(id) {\n    this.postsService.delete(id).subscribe();\n  }\n}\n")),Object(i.b)("p",null,"As you can see, since all the tasks of initalizing the requests and updating the store are all baked in to the entity service, all we need to do is call the relevant methods. Additionally, each method takes a config object where we can pass some or all of the following parameters:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"{\n  params?: HttpParams;\n  headers?: HttpHeaders;\n  url?: string;\n  mapResponseFn?: (res) => Entity | Entity[];\n}\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"resourceName")," used in the urls is by default identical to the store name, but we can easily configure it. For instance, if we want our posts service to fetch its posts from the articles url we can set it in the service config:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="posts.service.ts"',title:'"posts.service.ts"'}),"@NgEntityServiceConfig({\n  resourceName: 'articles',\n  baseUrl: 'customBaseUrl'\n})\n@Injectable({ providedIn: 'root' })\nexport class PostsService extends NgEntityService<PostsState> {\n  constructor(protected store: PostsStore) {\n    super(store);\n  }\n}\n")),Object(i.b)("p",null,"Alternatively, we can pass the config as the second parameter in the ",Object(i.b)("inlineCode",{parentName:"p"},"super()")," call in the service\u2019s constructor."),Object(i.b)("h2",{id:"entity-service-loader"},"Entity Service Loader"),Object(i.b)("p",null,"Loading indication is a very common scenario \u2014 we often need to display to the user an indication that the server call has been made, and our app is currently in the process of loading the resulting data."),Object(i.b)("p",null,"Akita\u2019s Entity Service comes with a built-in solution for these cases; The ",Object(i.b)("inlineCode",{parentName:"p"},"NgEntityServiceLoader")," can listen to any entity service\u2019s built-in method and give us an indication of its loading status:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="posts.component.ts"',title:'"posts.component.ts"'}),"import { \n  NgEntityServiceLoader \n} from '@datorama/akita-ng-entity-service';\n\n@Component()\nexport class PostsPageComponent {\n  posts$ = this.postsQuery.selectAll();\n  loaders = this.loader.loadersFor('posts');\n\n  constructor(\n    private postsQuery: PostsQuery,\n    private postsService: PostsService,\n    private loader: NgEntityServiceLoader\n  ) {}\n\n  ngOnInit() {\n    this.postsService.get().subscribe();\n  }\n}\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"loaders")," object now contains loading indicators for each of the ",Object(i.b)("inlineCode",{parentName:"p"},"PostsService")," methods; Each one holding an ",Object(i.b)("inlineCode",{parentName:"p"},"observable")," boolean value, indicating the method\u2019s loading status. Thanks to that we can create customized gui in the component\u2019s template, based on those indicators :"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="posts.component.html"',title:'"posts.component.html"'}),'<ng-template #idle>Idle</ng-template>\n\n<h5>Loaders</h5>\n\n<p>Get => \n  <span *ngIf="(loaders.get$ | async); else idle">Loading...</span>\n</p>\n\n<p>POST => \n  <span *ngIf="(loaders.add$ | async); else idle">Loading...</span>\n</p>\n\n<p>PUT => <\n  span *ngIf="(loaders.update$ | async); else idle">Loading...</span>\n</p>\n\n<p>DELETE => \n  <span *ngIf="(loaders.delete$ | async); else idle">Loading...</span>\n </p>\n')),Object(i.b)("p",null,"We can also get indicators for a specific entity being updated or deleted by calling ",Object(i.b)("inlineCode",{parentName:"p"},"loaders.updateEntity(id)")," and ",Object(i.b)("inlineCode",{parentName:"p"},"loaders.deleteEntity(id)"),", respectively."),Object(i.b)("h2",{id:"entity-service-notifier"},"Entity Service Notifier"),Object(i.b)("p",null,"In addition to that there are cases when we need to know whether certain operation has succeded or failed. For example, a global component that displays toast notifications to the user."),Object(i.b)("p",null,"For this purpose the Entity Service package provides the ",Object(i.b)("inlineCode",{parentName:"p"},"NgEntityServiceNotifier")," service, which we can subscribe to and get the status of any HTTP call that was made:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="notification.service.ts"',title:'"notification.service.ts"'}),"import { \n  NgEntityServiceNotifier \n} from '@datorama/akita-ng-entity-service';\n\nclass NotificationService {\n\n  constructor(\n    private notifier: NgEntityServiceNotifier\n  ) {}\n\n  listen() {\n    this.notifier.action$.subscribe(action => {\n      // show toast\n    });\n  }\n}\n")),Object(i.b)("p",null,"The resulting data looks like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"{\n  storeName: string;\n  type: ActionType; // success/error\n  payload: any; // response from the server\n  method: HttpMethod;\n  successMsg?: string;\n  errorMsg?: string;\n}\n")),Object(i.b)("p",null,"The package also exposes built-in operators, which allow us to filter the ",Object(i.b)("inlineCode",{parentName:"p"},"type"),", ",Object(i.b)("inlineCode",{parentName:"p"},"store"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"HTTP")," method. For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { \n NgEntityServiceNotifier,\n filterMethod, \n ofType, \n filterStore \n} from '@datorama/akita-ng-entity-service';\n\nthis.notifier.action$.pipe(\n  filterStore('posts'),\n  ofType('success'),\n  filterMethod('DELETE'),\n)\n")),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("p",null,"The global ",Object(i.b)("inlineCode",{parentName:"p"},"config")," provide takes the following object:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"{\n  provide: NG_ENTITY_SERVICE_CONFIG,\n  useValue: {\n    return {\n      baseUrl: 'https://jsonplaceholder.typicode.com',\n      httpMethods: {\n        PUT: HttpMethod.PATCH\n      }\n    } as NgEntityServiceGlobalConfig;\n  }\n}\n")))}p.isMDXComponent=!0}}]);
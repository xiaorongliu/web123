##简介：
gulp是前端开发过程中对代码进行构建的工具，是自动化项目的构建利器；它不仅能对网站资源进行优化，而且在开发过程中很多重复的任务能够使用正确的工具自动完成；使用它，我们不仅可以很愉快的编写代码，而且大大提高我们的工作效率。
gulp是基于Nodejs的自动任务运行器， 它能自动化地完成 javascript/coffee/sass/less/html/image/css 等文件的的测试、检查、合并、压缩、格式化、浏览器自动刷新、部署文件生成，并监听文件在改动后重复指定的这些步骤。在实现上，它借鉴了Unix操作系统的管道（pipe）思想，前一级的输出，直接变成后一级的输入，使得在操作上非常简单。通过本文，我们将学习如何使用Gulp来改变开发流程，从而使开发更加快速高效。
## 入门指南
在学习前，先谈谈大致使用gulp的步骤，给读者以初步的认识。首先当然是安装nodejs，通过nodejs的npm全局安装和项目安装gulp，其次在项目里安装所需要的gulp插件，然后新建gulp的配置文件gulpfile.js并写好配置信息（定义gulp任务），最后通过命令提示符运行gulp任务即可。
安装nodejs -> 全局安装gulp -> 项目安装gulp以及gulp插件 -> 配置gulpfile.js -> 运行任务
接下来说一说gulp的特点，方便读者进一步理解为什么我们要使用gulp。
0.1、易于使用：采用代码优于配置策略，gulp让简单的事情继续简单，复杂的任务变得可管理。
0.2、高效：通过利用node.js强大的流，不需要往磁盘写中间文件，可以更快地完成构建。
0.3、高质量：gulp严格的插件指导方针，确保插件简单并且按你期望的方式工作。
0.4、易于学习：通过把API降到最少，你能在很短的时间内学会gulp。构建工作就像你设想的一样：是一系列流管道。
####1、安装nodejs
1.1、说明：gulp是基于nodejs，理所当然需要安装nodejs；
1.2、安装：打开nodejs官网，点击硕大的绿色Download按钮，它会根据系统信息选择对应版本（.msi文件）。然后像安装QQ一样安装它就可以了（安装路径随意）。
####2、使用命令行（如果你熟悉命令行，可以直接跳到第3步）
2.1、说明：什么是命令行？命令行在OSX是终端（Terminal），在windows是命令提示符（Command Prompt）；
2.2、注：之后操作都是在windows系统下；
2.3、简单介绍gulp在使用过程中常用命令，打开命令提示符执行下列命令（打开方式：window + r 输入cmd回车）：
node -v查看安装的nodejs版本，出现版本号，说明刚刚已正确安装nodejs。PS：未能出现版本号，请尝试注销电脑重试；
npm -v查看npm的版本号，npm是在安装nodejs时一同安装的nodejs包管理器，那它有什么用呢？稍后解释；
cd定位到目录，用法：cd + 路径 ；
dir列出文件列表；
cls清空命令提示符窗口内容。
####3、npm介绍
3.1、NPM的全称是Node Package Manager[1]  ，是一个NodeJS包管理和分发工具，已经成为了非官方的发布Node模块（包）的标准。
如果你熟悉ruby的gem，Python的pypi、setuptools，PHP的pear，那么你就知道NPM的作用是什么了。
Nodejs自身提供了基本的模块，但是开发实际应用过程中仅仅依靠这些基本模块则还需要较多的工作。幸运的是，Nodejs库和框架为我们提供了帮助，让我们减少工作量。但是成百上千的库或者框架管理起来又很麻烦，有了NPM，可以很快的找到特定服务要使用的包，进行下载、安装以及管理已经安装的包。
3.2、使用npm安装插件：命令提示符执行npm install <name> [-g] [--save-dev]；
3.2.1、<name>：node插件名称。例：npm install gulp-less --save-dev
3.2.2、-g：全局安装。将会安装在C:\Users\Administrator\AppData\Roaming\npm，并且写入系统环境变量；  非全局安装：将会安装在当前定位目录；  全局安装可以通过命令行在任何地方调用它，本地安装将安装在定位目录的node_modules文件夹下，通过require()调用；
3.2.3、--save：将保存配置信息至package.json（package.json是nodejs项目配置文件）；
3.2.4、-dev：保存至package.json的devDependencies节点，不指定-dev将保存至dependencies节点；一般保存在dependencies的像这些express/ejs/body-parser等等。
3.2.5、为什么要保存至package.json？因为node插件包相对来说非常庞大，所以不加入版本管理，将配置信息写入package.json并将其加入版本管理，其他开发者对应下载即可（命令提示符执行npm install，则会根据package.json下载所有需要的包，npm install --production只下载dependencies节点的包）。
3.3、使用npm卸载插件：npm uninstall <name> [-g] [--save-dev]  PS：不要直接删除本地插件包
3.3.1、删除全部插件：npm uninstall gulp-less gulp-uglify gulp-concat ……???太麻烦
3.3.2、借助rimraf：npm install rimraf -g 用法：rimraf node_modules
3.4、使用npm更新插件：npm update <name> [-g] [--save-dev]
3.4.1、更新全部插件：npm update [--save-dev]
3.5、查看npm帮助：npm help
3.6、当前目录已安装插件：npm list
#### 4. 全局安装 gulp：
4.1、_如果你之前有全局安装过一个版本的 gulp，请执行一下 `npm rm --global gulp` 来避免和 gulp-cli 冲突__然后执行
$ npm install --global gulp-cli进行安装
####5、新建package.json文件
5.1、说明：package.json是基于nodejs项目必不可少的配置文件，它是存放在项目根目录的普通json文件；
5.2、当然我们可以手动新建这个配置文件，但是作为一名有志青年，我们应该使用更为效率的方法：命令提示符执行cnpm init
5.3、查看package.json帮助文档，命令提示符执行cnpm help package.json
特别注意：package.json是一个普通json文件，所以不能添加任何注释。参看 http://www.zhihu.com/question/23004511
####6、本地安装gulp插件
6.1、安装：定位目录命令后提示符执行cnpm install --save-dev；
6.2、本示例以gulp-less为例（编译less文件），命令提示符执行cnpm install gulp-less --save-dev；
6.3、将会安装在node_modules的gulp-less目录下，该目录下有一个gulp-less的使用帮助文档README.md；
6.4、为了能正常使用，我们还得本地安装gulp：cnpm install gulp --save-dev；
PS：细心的你可能会发现，我们全局安装了gulp，项目也安装了gulp，全局安装gulp是为了执行gulp任务，本地安装gulp则是为了调用gulp插件的功能。
####7、新建gulpfile.js文件
7.1、说明：gulpfile.js是gulp项目的配置文件，是位于项目根目录的普通js文件（其实将gulpfile.js放入其他文件夹下亦可）。
####8、运行gulp
8.1、说明：命令提示符执行gulp 任务名称；
8.2、编译less：命令提示符执行gulp testLess；
8.3、当执行gulp default或gulp将会调用default任务里的所有任务[‘testLess’,’elseTask’]。
##gulp文件打包
####初始引入需要的插件
```
    var gulp = require('gulp');
    var plumber = require('gulp-plumber')
```
####把单个文件打包到指定的地方
```
 gulp.task('script', function() {
     gulp.src('./src/static/js/index.js')
         .pipe(plumber())
         .pipe(gulp.dest('./dist/static/js/'));
 });
 ```
####把两个文件打包到指定的地方 
多个文件打包在
gulp.src() 在里面使用数组方式隔开。
```
gulp.task('script', function() {
    gulp.src(['./src/static/js/index.js', './src/static/js/stark.js'])
        .pipe(plumber())
        .pipe(gulp.dest('./dist/static/js/'));
});
```
####把多个文件打包到指定的文件夹
```
// 把多个文件打包到指定的地方
gulp.task('script', function() {
    gulp.src('./src/static/js/*.js')
        .pipe(plumber())
        .pipe(gulp.dest('./dist/static/js/'));
});
```
## gulp常用插件
####流控制
  - [event-stream](http://www.atticuswhite.com/blog/merging-gulpjs-streams/) 事件流，不是插件但很有用 
  - [gulp-if](https://github.com/robrich/gulp-if) 有条件的运行一个task
  - [gulp-clone](https://github.com/mariocasciaro/gulp-clone) Clone files in memory in a gulp stream 非常有用
  - [vinyl-source-stream](https://github.com/hughsk/vinyl-source-stream) Use conventional text streams at the start of your gulp or vinyl pipelines 

####AngularJS
  - [gulp-ng-annotate](https://github.com/Kagami/gulp-ng-annotate) 注明依赖 for angular
  - [gulp-ng-html2js](https://github.com/marklagendijk/gulp-ng-html2js) html2js for angular
  - [gulp-angular-extender](https://libraries.io/npm/gulp-angular-extender) 为angular module添加dependencies
  - [gulp-angular-templatecache](https://github.com/miickel/gulp-angular-templatecache) 将html模板缓存到$templateCache中

####文件操作
  - [gulp-clean](https://github.com/peter-vilja/gulp-clean)  删除文件和目录, 请用[del](https://github.com/sindresorhus/del)来代替它[Example](https://github.com/hjzheng/CUF_meeting_knowledge_share/tree/master/2015-11-10)
  - [gulp-concat](https://github.com/wearefractal/gulp-concat) 合并文件
  - [gulp-rename](https://github.com/hparra/gulp-rename) 重命名文件
  - [gulp-order](https://github.com/sirlantis/gulp-order) 对src中的文件按照指定顺序进行排序
  - [gulp-filter](https://github.com/sindresorhus/gulp-filter) 过滤文件 非常有用 [Example](https://github.com/hjzheng/CUF_meeting_knowledge_share/blob/master/2015-11-10/gulpfile.js)
  - [gulp-flatten](https://github.com/armed/gulp-flatten) 当拷贝文件时，不想拷贝目录时使用 [segmentfault](http://segmentfault.com/q/1010000004266922)

####压缩
  - [gulp-clean-css](https://github.com/scniro/gulp-clean-css)压缩css
  - [gulp-uglify](https://github.com/terinjokes/gulp-uglify) 用uglify压缩js
  - [gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin) 压缩图片
  - [gulp-htmlmin](https://github.com/jonschlinkert/gulp-htmlmin) 压缩html
  - [gulp-csso](https://github.com/ben-eb/gulp-csso) 优化CSS

####工具
  - [gulp-load-plugins](https://github.com/jackfranklin/gulp-load-plugins) 自动导入gulp plugin
  - [gulp-load-utils](https://www.npmjs.com/package/gulp-load-utils) 增强版gulp-utils
  - [gulp-task-listing](https://github.com/OverZealous/gulp-task-listing) 快速显示gulp task列表
  - [gulp-help](https://github.com/chmontgomery/gulp-help) 为task添加帮助描述
  - [gulp-jsdoc](https://github.com/jsBoot/gulp-jsdoc) 生成JS文档
  - [gulp-plumber](https://github.com/floatdrop/gulp-plumber) Prevent pipe breaking caused by errors from gulp plugins [Example](https://github.com/hjzheng/CUF_meeting_knowledge_share/tree/master/2015-11-10)
  - [yargs](https://github.com/bcoe/yargs) 处理 process.argv
  - [run-sequence](https://github.com/OverZealous/run-sequence) 顺序执行 gulp task，gulp 4.0 已经支持该功能 `gulp.series(...tasks)`
  - [gulp-notify](https://github.com/mikaelbr/gulp-notify) gulp plugin to send messages based on Vinyl Files
  - [gulp-shell](https://github.com/sun-zheng-an/gulp-shell) 非常有用
  - [gulp-grunt](https://github.com/gratimax/gulp-grunt) 在gulp中运行grunt task

####JS/CSS自动注入
  - [gulp-usemin](https://github.com/zont/gulp-usemin) Replaces references to non-optimized scripts or stylesheets into a set of HTML files
  - [gulp-inject](https://github.com/klei/gulp-inject) 在HTML中自动添加style和script标签 [Example](https://github.com/hjzheng/CUF_meeting_knowledge_share/tree/master/2015-8-17/bower-dependence-inject)
  - [wiredep](https://github.com/taptapship/wiredep) 将bower依赖自动写到index.html中 [Example](https://github.com/hjzheng/CUF_meeting_knowledge_share/tree/master/2015-8-17/bower-dependence-inject)
  - [gulp-useref](https://github.com/jonkemp/gulp-useref) 功能类似与usemin [Example](https://github.com/hjzheng/CUF_meeting_knowledge_share/tree/master/2015-8-17/bower-dependence-inject) 新版本用法有变化，详见gulp-useref的README.md

####代码同步
  - [browser-sync](https://github.com/BrowserSync/browser-sync) 自动同步浏览器，结合gulp.watch方法一起使用 [Example 1](https://github.com/hjzheng/CUF_meeting_knowledge_share/tree/master/2015-5-30/gulp-babel-test) [Example 2](https://github.com/hjzheng/es6-practice/blob/master/gulpfile.js)
  - [gulp-nodemon](https://github.com/JacksonGariety/gulp-nodemon) server端代码同步

####Transpilation
  - [gulp-babel](https://github.com/babel/gulp-babel) 将ES6代码编译成ES5   [Example](https://github.com/hjzheng/CUF_meeting_knowledge_share/tree/master/2015-5-30/gulp-babel-test)
  - [babelify](https://github.com/babel/babelify)  Browserify transform for Babel
  - [gulp-traceur](https://github.com/sindresorhus/gulp-traceur)  Traceur is a JavaScript.next-to-JavaScript-of-today compiler 

####打包
  - [gulp-browserify](https://www.npmjs.com/package/gulp-browserify)  用它和 babelify 实现ES6 module [Example](https://github.com/hjzheng/CUF_meeting_knowledge_share/tree/master/2015-5-30/gulp-es6-module)

####编译
  - [gulp-less](https://github.com/plus3network/gulp-less)  处理less [Example](https://github.com/hjzheng/CUF_meeting_knowledge_share/tree/master/2015-7-23/gulp-less-bootstrap)
  - [gulp-sass](https://github.com/dlmanning/gulp-sass) 处理sass

####代码分析
  - [gulp-jshint](https://github.com/spalger/gulp-jshint) JSHint检查 [Example](https://github.com/hjzheng/CUF_meeting_knowledge_share/tree/master/2015-11-10)
  - [gulp-jscs](https://github.com/jscs-dev/gulp-jscs) 检查JS代码风格 [Example](https://github.com/hjzheng/CUF_meeting_knowledge_share/tree/master/2015-11-10)

####特别推荐
  - [gulp-changed](https://github.com/sindresorhus/gulp-changed) 只传输修改过的文件
  - [gulp-cached](https://github.com/wearefractal/gulp-cached) 将文件先cache起来，先不进行操作
  - [gulp-remember](https://github.com/ahaurw01/gulp-remember) 和gulp-cached一块使用
  - [gulp-newer](https://github.com/tschaub/gulp-newer) pass through newer source files only, supports many:1 source:dest

####其他
  - [webpack-stream](https://github.com/shama/webpack-stream) gulp与webpack [Example](https://github.com/hjzheng/angular-es6-practice/blob/master/gulp/scripts.js)
  - [gulp-autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer)  Prefix CSS
  - [gulp-sourcemaps](https://github.com/floridoo/gulp-sourcemaps) 生成source map文件
  - [gulp-rev](https://github.com/sindresorhus/gulp-rev) Static asset revisioning by appending content hash to filenames: unicorn.css → unicorn-d41d8cd98f.css 
  - [gulp-rev-replace](https://github.com/jamesknelson/gulp-rev-replace) [Example](https://github.com/hjzheng/CUF_meeting_knowledge_share/tree/master/2015-11-10)
  - [gulp-iconfont](https://github.com/nfroidure/gulp-iconfont) 制作iconfont [Example](https://github.com/hjzheng/CUF_meeting_knowledge_share/tree/master/2015-7-24/gulp-test-iconfont)
  - [gulp-svg-symbols](https://github.com/Hiswe/gulp-svg-symbols) 制作SVG Symbols, [关于使用SVG Symbol](http://isux.tencent.com/zh-hans/16292.html)
  - [gulp-template](https://github.com/sindresorhus/gulp-template) 模板替换
  - [gulp-dom-src](https://github.com/cgross/gulp-dom-src) 将html中的script，link等标签中的文件转成gulp stream。
  - [gulp-cheerio](https://github.com/KenPowers/gulp-cheerio) Manipulate HTML and XML files with Cheerio in Gulp. 
  - [require-dir](https://www.npmjs.com/package/require-dir) 利用它我们可以将 gulpfile.js 分成多个文件，具体用法可以参考这个[Splitting a gulpfile into multiple files](http://macr.ae/article/splitting-gulpfile-multiple-files.html)
  - [gulp-nodemon](https://github.com/JacksonGariety/gulp-nodemon) 强烈推荐, 监控你的node应用,并重现启动server
##gulp-less
####1、简介：
使用gulp-less插件将less文件编译成css，当有less文件发生改变自动编译less，并保证less语法错误或出现异常时能正常工作并提示错误信息。
####2、本地安装gulp-less
2.1、github：https://github.com/plus3network/gulp-less
2.2、安装：命令提示符执行 cnpm install gulp-less --save-dev
2.3、注意：没有安装cnpm请使用 npm install gulp-less --save-dev 什么是cnpm，如何安装？
2.4、说明：--save-dev 保存配置信息至 package.json 的 devDependencies 节点。
####3、配置gulpfile.js
3.1、基本使用
```
var gulp = require('gulp'),
    less = require('gulp-less');
 
gulp.task('testLess', function () {
    gulp.src('src/less/index.less')
        .pipe(less())
        .pipe(gulp.dest('src/css'));
});
```
3.2、编译多个less文件
```
var gulp = require('gulp'),
    less = require('gulp-less');
 
gulp.task('testLess', function () {
    gulp.src(['src/less/index.less','src/less/detail.less']) //多个文件以数组形式传入
        .pipe(less())
        .pipe(gulp.dest('src/css')); //将会在src/css下生成index.css以及detail.css 
});

```
3.3、匹配符“!”，“*”，“**”，“{}”
```
var gulp = require('gulp'),
    less = require('gulp-less');
 
gulp.task('testLess', function () {
    //编译src目录下的所有less文件
    //除了reset.less和test.less（**匹配src/less的0个或多个子文件夹）
    gulp.src(['src/less/*.less', '!src/less/**/{reset,test}.less']) 
        .pipe(less())
        .pipe(gulp.dest('src/css'));
});

```
3.4、调用多模块（编译less后压缩css）
```
var gulp = require('gulp'),
    less = require('gulp-less'),
     //确保本地已安装gulp-minify-css [cnpm install gulp-minify-css --save-dev]
    cssmin = require('gulp-minify-css');
 
gulp.task('testLess', function () {
    gulp.src('src/less/index.less')
        .pipe(less())
        .pipe(cssmin()) //兼容IE7及以下需设置compatibility属性 .pipe(cssmin({compatibility: 'ie7'}))
        .pipe(gulp.dest('src/css'));
});

```
3.5、当less有各种引入关系时，编译后不容易找到对应less文件，所以需要生成sourcemap文件，方便修改
```
var gulp = require('gulp'),
    less = require('gulp-less'),
     //确保本地已安装gulp-sourcemaps [cnpm install gulp-sourcemaps --save-dev]
    sourcemaps = require('gulp-sourcemaps');
 
gulp.task('testLess', function () {
    gulp.src('src/less/**/*.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('src/css'));
});

```
####4、执行任务
4.1、命令提示符执行：gulp testLess
####5、监听事件（自动编译less）
5.1、若每修改一次less，就要手动执行任务，显然是不合理的，所以当有less文件发生改变时使其自动编译
5.2、启动监听事件：命令提示符执行 gulp testWatch
5.3、注意：该命令提示符执行需处于打开状态，关闭后监听事件结束(Ctrl + C 或右上)
####6、异常处理
6.1、当编译less时出现语法错误或者其他异常，会终止watch事件，通常需要查看命令提示符窗口才能知道，这并不是我们所希望的，所以我们需要处理出现异常并不终止watch事件（gulp-plumber），并提示我们出现了错误（gulp-notify）。
##gulp-imagemin
####1、简介
1.1、使用gulp-imagemin压缩图片文件（包括PNG、JPEG、GIF和SVG图片）。
####2、本地安装gulp-imagemin
2.1、github：https://github.com/sindresorhus/gulp-imagemin
2.2、安装：命令提示符执行 cnpm install gulp-imagemin --save-dev
2.3、注意：没有安装cnpm请使用 npm install gulp-imagemin --save-dev什么是cnpm，如何安装？
2.4、说明：--save-dev 保存配置信息至 package.json 的 devDependencies 节点。
####3、配置gulpfile.js
3.1、基本使用
```
var gulp = require('gulp'),
    imagemin = require('gulp-imagemin');
 
gulp.task('testImagemin', function () {
    gulp.src('src/img/*.{png,jpg,gif,ico}')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});
```
3.2、gulp-imagemin其他参数
```
var gulp = require('gulp'),
    imagemin = require('gulp-imagemin');
 
gulp.task('testImagemin', function () {
    gulp.src('src/img/*.{png,jpg,gif,ico}')
        .pipe(imagemin({
            optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
        }))
        .pipe(gulp.dest('dist/img'));
});
```
3.3、深度压缩图片
```
var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    //确保本地已安装imagemin-pngquant [cnpm install imagemin-pngquant --save-dev]
    pngquant = require('imagemin-pngquant');
 
gulp.task('testImagemin', function () {
    gulp.src('src/img/*.{png,jpg,gif,ico}')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],//不要移除svg的viewbox属性
            use: [pngquant()] //使用pngquant深度压缩png图片的imagemin插件
        }))
        .pipe(gulp.dest('dist/img'));
});
```
3.4、只压缩修改的图片。压缩图片时比较耗时，在很多情况下我们只修改了某些图片，没有必要压缩所有图片，使用”gulp-cache”只压缩修改的图片，没有修改的图片直接从缓存文件读取（C:\Users\Administrator\AppData\Local\Temp\gulp-cache）。
```
var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    //确保本地已安装gulp-cache [cnpm install gulp-cache --save-dev]
    cache = require('gulp-cache');
    
gulp.task('testImagemin', function () {
    gulp.src('src/img/*.{png,jpg,gif,ico}')
        .pipe(cache(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/img'));
});
```
####4、执行任务
4.1、命令提示符执行：gulp testImagemin
##gulp-htmlmin
####1、简介：
1.1、使用gulp-htmlmin压缩html，可以压缩页面javascript、css，去除页面空格、注释，删除多余属性等操作。
####2、本地安装gulp-htmlmin
2.1、github：https://github.com/jonschlinkert/gulp-htmlmin
2.2、安装：命令提示符执行 cnpm install gulp-htmlmin --save-dev
2.3、注意：没有安装cnpm请使用 npm install gulp-htmlmin --save-dev。 什么是cnpm，如何安装？
2.4、说明：--save-dev 保存配置信息至 package.json 的 devDependencies 节点。
####3、配置gulpfile.js
3.1、基本使用
```
var gulp = require('gulp'),
    htmlmin = require('gulp-htmlmin');
 
gulp.task('testHtmlmin', function () {
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    gulp.src('src/html/*.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('dist/html'));
});
```
####4、执行任务
4.1、命令提示符执行：gulp testHtmlmin
##gulp-minify-css【gulp-clean-css】
####1、简介
1.1使用gulp-minify-css压缩css文件，减小文件大小，并给引用url添加版本号避免缓存。重要：gulp-minify-css已经被废弃，请使用gulp-clean-css，用法一致。
####2、本地安装gulp-minify-css
2.1、github：https://github.com/jonathanepollack/gulp-minify-css
2.2、安装：命令提示符执行 cnpm install gulp-minify-css --save-dev
2.3、注意：没有安装cnpm请使用 npm install gulp-minify-css --save-dev 什么是cnpm，如何安装？
2.4、说明：--save-dev 保存配置信息至 package.json 的 devDependencies 节点。
####3、配置gulpfile.js
3.1、基本使用
```
var gulp = require('gulp'),
    cssmin = require('gulp-minify-css');
 
gulp.task('testCssmin', function () {
    gulp.src('src/css/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('dist/css'));
});
```
3.2、gulp-minify-css 最终是调用clean-css
```
var gulp = require('gulp'),
    cssmin = require('gulp-minify-css');
 
gulp.task('testCssmin', function () {
    gulp.src('src/css/*.css')
        .pipe(cssmin({
            advanced: false,//类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
            compatibility: 'ie7',//保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
            keepBreaks: true,//类型：Boolean 默认：false [是否保留换行]
            keepSpecialComments: '*'
            //保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
        }))
        .pipe(gulp.dest('dist/css'));
});
```
3.3、给css文件里引用url加版本号（根据引用文件的md5生产版本号）
```
var gulp = require('gulp'),
    cssmin = require('gulp-minify-css');
    //确保已本地安装gulp-make-css-url-version [cnpm install gulp-make-css-url-version --save-dev]
    cssver = require('gulp-make-css-url-version'); 
 
gulp.task('testCssmin', function () {
    gulp.src('src/css/*.css')
        .pipe(cssver()) //给css文件里引用文件加版本号（文件MD5）
        .pipe(cssmin())
        .pipe(gulp.dest('dist/css'));
});
```
####4、执行任务
4.1、命令提示符执行：gulp testCssmin
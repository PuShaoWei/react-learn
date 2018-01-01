/**
 * web pack
 * 1. 为了装逼
 * 2. babel编译
 * 3. 热更新
 * ----------------------
 * 1. 安装
 * npm install -g webpack  | webpack cli 环境
 * npm install -g webpack-dev-server | webpack 自带服务器
 *
 * 2. 依赖
 * ## babel
 * npm install babel-core -D           | 后台编译babel工具
 * npm install babel-preset-es2015 -D  | babel对ES2015的预设
 * npm install babel-loader -D         | babel加载器
 *
 * ## webpack
 * npm install  webpack-dev-server -D  | webpack 自带服务器
 *
 * ## babel-react 预设
 * npm install  babel-preset-react -D  | webpack 自带服务器
 *
 * ## react
 * npm install react -D                | react 本身
 * npm install react-dom -D            | react-dom 本身
 * npm install react-hot-loader -D     | react-hot-loader 本身
 *
 * ## optimizer
 * npm install style-loader -D     | style-loader 优化
 * npm install css-loader -D       |  css-loader 优化
 *
 * 3. webpack 的配置文件
 * a. webpack.config.js            | webpack 配置文件
 * b. .baberc                      | baberc 预设文件
 *
 */

 /**
  * Example 1 组件通信
  *
  *  1. 父级与子级通信
  *  2. 子级与父级通信
  */
 class Child extends React.Component{
   /**
    * [constructor description]
    * @method constructor
    * @return {[type]}    [description]
    */
   constructor(...ags){
       super(...ags)
       this.num = 1;
   }
   /**
    * [render description]
    * @method render
    * @return {[type]} [description]
    */
   render(){
     this.props.closures(this.num)
     return (
       <div>
         {this.props.text}
       </div>
     );
   }
 }
 class Parent extends React.Component{
   /**
    * [constructor description]
    * @method constructor
    * @return {[type]}    [description]
    */
    constructor(...ags){
        super(...ags)
        this.text = 'current_parent'
    }
    /**
     * [handerClosures 回掉绑定]
     * @method handerClosures
     * @return {[type]}       [description]
     */
    handerClosures(event){
      alert(event += 1);
    }

   /**
    * [render description]
    * @method render
    * @return {[type]} [description]
    */
   render(){
       return (
         <div>
           <Child text={this.text} closures={this.handerClosures.bind(this)}/>
         </div>
       );
   }
 }
 (function(){
     ReactDOM.render(
         <Parent/>,
         document.getElementById('example_parent')
     );
 })()

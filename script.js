  // ES6(2015)以降で仕様が大きく変更しました


  /*HTMLでJavaScriptを表示させる方法
    <Body>タグの直前に<script>タグを埋め込みます。htmlに直接記述する場合はhtmlの処理を終わってからJavaScriptで記述するのが一般的です。
    そのため直接記述する場合は<script>(JavaScriptを記述)</script>とします。*/



  /* 外部ファイルからJavaScriptを表示させる方法
      <script type="text/javascript"src 'ファイルの相対位置'></script>
      ＊bodyの終わりに書くようにしましょう。 */


    /*・タグを作成
      document.createElement('タグ名')
    ・クラス関連のメソッド
      classList~~
    ・クラスを追加
      classList.add('クラス名')
    ・text内を編集
      textContent('変えたい内容')
    ・Math.random()
      0より1未満の整数をランダムに生成します。
    基本的に『Math.floor(Math.random() * 数字)』を使用して範囲を絞る時に使用します。 */


// イテレート(繰り返し処理)1
    /* let price =　500;
    for(let i = 0; i < 10; i++) {
        // 繰り返したい処理
      price += 100;
      console.log(`price${i} `);
    } */
    //600 700 800 900 1000 1100 1200 1300 1400 1500
    /*文字列と変数を組み合わせるときには①「``」(テンプレートリテラル)を使用して${}の中に変数を入れる場合②「+」を使う場合がある。変数が多くなってきた場合はテンプレートリテラルを使う方が読み易くなる。 */


// イテレート(繰り返し処理)1
/* let templeture = 10;
while(templeture < 100) {
  console.log(`${templeture}までもう少し`);
  templeture += 20;
} */
// *繰り返しの回数が決まっているなら「for」、条件によって終了が決まるなら「while」を使いましょう。


/* // 条件分岐（if）1
const score = 90;
if(score > 100)　{
  //処理を書いていく
  alert("テストです");
}else if (score === 60) {
  console.log('Great');
}else {
  console.log('失敗しました');
} */

/* //条件演算子(if else文での省略方法)
score > 100 ? console.log('Great') : console.log('OK.');*/


/* // 論理演算子（&&(AND) ||(OR) !(NOT)）
if(score !== 70 && score > 40) {
  console.log('Great');
} */


/*条件分岐(Switch)2
もし条件分岐にtrueが多い場合はSwitch文が使いやすい。*/
/* const signal = 'red';
 switch (signal) {
  case 'red':
    console.log('Stop!');
    break;
  case 'yellow':
    console.log('Caution!');
    break;
  case 'blue':
    console.log('Go!');
    break;
  default:
    console.log('Wrong signal!');
    break;
} */


/* JavaScriptのデータ型
文字列(string) 'hello' "世界"
数値（Number） 5 4.3 -20
Undefined undefined
Null null
真偽値（Boolean） true false
オブジェクト(Object) {name: 'MyName'} */


/* ＊JavaScriptは演算記号を使用して文字列の数値を演算することができます。ただし「’＋’」記号は例外です。これは文字列をつなぎ合わせる演算記号になります。 */

/* console.log("5" / 5);
//1
console.log("5"+ "5");
//55 *10にはなりません。 */


/* 変数（varとletの違い）について
var‥‥関数内ではどこからでも参照可能(関数スコープ)
let‥‥{}（ブロック内）のみ参照可能（ブロックスコープ）
メンテナンス関連を考えると参照できる範囲は狭いほど使いやすい。 */

/* const testScope = (scope) => {
  if(scope === 'function') {
    var functionScope = '関数スコープならどこからでも参照できます';
  }　else if(scope === 'block') {
    let blockScope = 'ブロックスコープ内でしか参照できません';
    
  }
  console.log(blockScope); 
}
testScope('block');
//letはブロックスコープなのでエラーになります。解除してみてください。 */


/* // mutable/immutable（変更可能か変更不可）
let mutableText = 'let変更前';
mutableText =  'let変更後';
//変更可能

const immutableText = 'const変更前';
immutableText = 'const変更後';
//変更不可

const mutableArray = [1, 2, 3];
mutableArray.push = (4);
console.log(mutableArray);
console.log(mutableText);
console.log(immutableText);

//定数は後から変更はできませんが配列は変数と定数関係なしで変更できる。 */


// //関数の3種類書き方
  　////関数宣言
        /* function Conversation(props) {//仮引数
          console.log(props);
        }
      　Conversation('Hello');//実引数
        //＊functionは昔の書き方 */

    ////関数式/*functionの後ろには何も関数名がないから無名関数と呼ばれています。*/
        /* const English = function(props){//仮引数
          console.log(props);
        }
        English('Hello');//実引数 */

    ////アロー関数
        /* const Conversation = (props) => {//仮引数
          console.log(props);
        }
        Conversation('Hello');//実引数 */
        //これを推奨


/* //スコープ
  　変数や定数は{}スコープの中でしか表示されません。{}外のグローバルスコープ
    に記述している場合は全範囲に及びます。＊ただしスコープ内が最優先されます。 */


//配列について
    // 配列に格納したそれぞれの値のことを『要素』(70, 80, 90)、それぞれの要素の位置のことを『インデックス（index）』と呼びます。 

    /*const numbers = [70, 80, 90];
    numbers[2] = 40;//配列の変更

    console.log(numbers[2]);//indexを指定して特定の要素を取得
    console.log(numbers.length);//要素の数を取得 */
    //[40],3



//配列の操作
/* const numbers = [70, 80, 90];
numbers.shift();//配列の先頭を一つづつ削除
numbers.unshift(20);//配列の先頭に配列を追加
numbers.pop();// 配列の末尾を一つづつ削除
numbers.push(40,60);//配列の末尾に配列を代入する*よく使うメソッドです。
console.log(numbers); */
//[20, 80, 40, 60]

//splice()・削除と追加を同時にできます。
// const numbers = [70, 80, 90];
// numbers.splice(1,/*スタート位置*/ 1,/*削除する個数*/ 60,50/*追加する要素*/);
// console.log(numbers);
//[ 70, 60, 50, 90 ]


// ...（スプレッド構文）‥配列の中に別の配列を組み込む.
/* const otherArray = [40, 30];
const numbers = [70, 80, 90, ...otherArray];
console.log(numbers);
//[ 70, 80, 90, 40, 30 ]

//...（スプレッド構文）を関数の引数に使う場合
const sum = (a,b) => {
  console.log(a + b);
}
sum(...otherArray);
//70 */


//分割代入‥‥配列の値を定数に格納したい場合に使用
    /* const numbers = [70, 80, 90];
    const [i, k, e] = numbers;
    console.log(i);
    console.log(k);
    console.log(e); */
    //70, 80, 90

  //配列の変換
    /* let numbers = 90;
    let Array = 30;
    [numbers, Array] = [Array, numbers];
    console.log(numbers);
    console.log(Array); */

// *スプレッド構文,ネスト構文は連想配列にも使用できる。


//forEach()(配列のイテレート文)  
    /* const numbers = [70, 80,90];
    numbers.forEach((number, index) => {
      console.log(`Number: ${index} は ${number}`);
    }) */
    /**関数の引数はその順番によってどの値が入るのかが決まります。今回の 配列
    では第一引数が配列の要素、第二引数がインデックス（要素）となります。*/


//Map()(既存配列に何らかの処理を加えて配列を新しく作りイテレートする方法)
    /*const numbers=[70,80,90];
    const add = numbers.map((number)=> {
      return number + 30;
    });

    console.log(add); */
    //[100, 110, 120]


//filter()(条件に合うものを配列から抽出する)
    /*const numbers =[70, 80, 90];
    const add = numbers.filter((number)=> {
      return number === 80;
    });
    console.log(add); */
    //[80]


//連想配列
    /* const Users = {
      name: 'kosuke',
      age: 23,
    }
    console.log(Users); */

　//オブジェクトの取得方法は2つある。
  　/*console.log(Users.name);
    console.log(Users['name']);*/

//オブジェクトの変更方法も2つある。
    /*Users.name = 'ike';
    Users['name'] = 'ike';
    console.log(Users.name);*/

//オブジェクトの追加方法
    /*Users.appearence='ridicuraus';
    console.log(Users); */

//オブジェクトの削除方法
  　/*delete Users.appearence;
    console.log(Users); */

/*用語の説明 
    {}内‥‥オブジェクト
    name:'kosuke'‥‥プロパティ（メンバー）
    name‥‥         キー（名前）
    'kosuke'‥‥     値  */


// 文字列に関する命令（配列→文字列、文字列→配列）
/* const year = [2019, 10, 17];
console.log(year.join("/"));//配列を文字列として結合する時
//2019/10/17
const time = '2019:10:17';//*シングルクオテーションしか使えない
const times = [hour, minite, second] = time.split(":");
console.log(hour);
console.log(minite);
console.log(second);
console.log(times); */
//[ '2019', '10', '17' ],2019 10 17


// 数値の計算
//平均の計算
    /* const numbers = [10, 40, 50];

    let sum = 0;//リテレートする場合は定数ではなく変数を使用する

    numbers.forEach(number => {
      sum += number;
    });
    const avg = sum /numbers.length;
    console.log(avg);
    console.log(Math.floor(avg));//小数点以下を切り捨て
    console.log(Math.ceil(avg));//小数点以下を切り上げ
    console.log(Math.round(avg));//四捨五入
    console.log(avg.toFixed(4));//指定したい桁数になるように数値を指定 */

// 0, ..., n
    // Math.floor(Math.random() * 3)//1以上3未満の整数値をランダムに生成

//min, ..., max
    // Math.floor(Math.random() * (max + 1 - min)) + min


//日時のメソッド
    /* const g = new Date();
    console.log(g.getDate());//今日の日にち
    console.log(g.getMonth() + 1);//今月
    console.log(g.getFullYear());//今年 */


//例外処理

      /* const name = 4;//本当は文字列のみ

      try {//例外処理‥エラーが起きても処理を止めずにエラーを吐いてから処理を開始
        console.log(name.toUpperCase());//toUpperCaseは文字列にしか使えない。
      }catch(e) {
        console.log(e);
      }

      console.log("finish"); */


//Class//（例）投稿ができるアプリを想定する。オブジェクトの値でプロパティに関数を持たせることができる。
/* const posts = [
  {
    text: 'JavaScript勉強中',
    likeCount: 0,
    show() {
      console.log(`${this.text} - ${this.likeCount}`);
    },
  },//プロパティの関数の部分をプロパティと呼ぶ
  {
    text: 'プログラミング楽しい',
    likeCount: 0,
    show() {//showはメソッドと呼ばれる
      console.log(`${this.text} - ${this.likeCount}`);
    },
  },
];
for (let i=0; i < 2; i++ ) {
  posts[i].show();  
} */

//classとインスタンス
/*   class Post {
    constructor(text) {
      this.text = text;
      this.likeCount = 0;
    }
    show() {//show()はメソッド
      console.log(`${this.text} - ${this.likeCount}like`);
    }
    like() {//like()はメソッド
      this.likeCount++;
      this.show();//同じメソッドは違う名前で呼び出せる
    }

    //静的メソッド（インスタンスを使わない方法）
    //thisは使えません。静的メソッドはインスタンスを使用しないため
    //静的メソッド
    static showInfo() {
      console.log('hello');
    }
  }
  Post.showInfo();//静的メソッドの出力の仕方

  const posts = [
    new Post('JavaScriptの勉強中…'),
    new Post('プログラミング楽しい！'),
  ];

  for (let i=0; i < 2; i++ ) {
    posts[i].like();
  } */



// const UserId = (userName) => Users[userName];
//// 上と下に関しては書き方は違いますが行っていることは同じです。どちらもreturnを返します。
// const UserId = (userName) => {
//   return Users[userName];
// } 
// const name = UserId('name');

// console.log(name);



// 配列について必要なメソッド3選
// ・使わなくても別の構文で代用できる
// ・実行速度が速いわけではない
// ・イテレート‥‥繰り返し処理

// map()メソッド {配列を新しくしてイテレートする・新しい配列を生成する}
// 基本編
// const Array = ['name', 'age', 'height'];
// const resultArray = Array.map(x => x + "です")
// console.log(resultArray);
//map(x => x + "です")は「x + "です"」をんい代入している

// //応用編(オブジェクトの連想配列をイテレートしたい場合)

// const Array = {
//   'name': {text: 'kosuke'},
//   'age': {text: '23'},
//   'height': {text: '178'}
// };

// const objectToArray = Object.keys(Array).map(key => {
//   const value = Array[key]; //valueにはArray配列のkey（名前）である文字列の配列を取得して代入される。つまりtextのオブジェクトのことを指します。
//   value['id'] = key
//   return value
// });
// console.log(objectToArray);

// // Object.keys(配列)メソッドは代入した配列のkey(名前)を文字列として取得して配列を新たに作り出す。「まとめ」連想配列を追加してもう一つの連想配列を作る時に使う


// // filter()メソッド {条件に合う要素を抽出する。配列をイテレートする。条件がtrueの要素のみを返す}

// const result = objectToArray.filter(object => {
//   return object.id === 'age';
// });
// console.log(result);

// //配列を一つずつ取り出して条件式に合うオブジェクトのみを配列として抽出する

// console.log(result[0].text);
// //filter(配列)メソッドは配列を返すのでオブジェクトを取り出したい場合は何番目かを指定してあげる。さらにプロパティを取り出したいときはその都度指定する。

// // findIndex()条件に合う要素のは何番目かがわかる

// const index = objectToArray.findIndex(object => {
//   return object.id === 'height';
// });

// console.log(index, objectToArray[2]);

// 正規表現


// // test()マッチする文字列か判定。正規表現を使う。マッチはtrueしないfalseを返す

// const kosuke = 'kosuke';
// const regex = RegExp('kosu*');
// console.log(regex.test(kosuke));//trueを返す
// // 上も下も書き方は同じになる
// console.log(/kos*/.test(kosuke));
// //trueを返す
// // <正規表現>.test(<テスト対象>)
// // 正規表現‥‥様々な文字列を一つの文字列で表現する表記法。

//イテレートの種類




// for, for of,for in, Array.map(),Array.forEach(),typed for

//・typed forが一番安定して速い
//・map()メソッドはChromeでは遅いが処理速度がそこまで必要ない場合は積極的に使用しても良い。書きやすい利点があるため




/* DOM操作（Document Object Model）
  　・JavaScriptとHTMLをつなげるもの
    ・入力したデータを取得する・新しいデータを取得する・データを送信する */



/* DOM操作の取得方法
    ・idで取得 
    document.getElementById('id名')
    ・classで取得（）
    document.getElementByClassName('class名')
    ・要素を取得
    ・document.getElementByTagName('要素名')
    ・document.querySelector('要素名')//querySelectorAllで全部の要素を取得することができる
    要素名‥‥<h1></h1>
    *Classは複数の要素を取得することができる 
    階層関係から要素を取得したい場合は別途調べてみましょう！！*/


//要素の取得
    /*function update() {
      document.querySelector('h1').textContent =//要素を取得する 'Settimeoutのテストになります。';
    }
    setTimeout(update, 2000); */ //時間を遅らせる関数
    //@関数呼び出す（この場で処理を実行してその結果をもらう）ときには()が必要、関数自体を示す（処理の内容を伝える）場合には（）は不要


/* ・form要素を取得
// 下記はHTML要素
<form name = 'demoForm'>
  <div>
    <label for='titile-id'>タイトル</label>
    <input id='title-id' name='title' type='text'/>
  </div>
</form>

JavaScript
const forms = document.forms.demoForm
const title = forms.title.value
// inputの値はvalueで取得できます。
// console.log(title);
// formsで重要なのはinputの中のname要素が一番必要 */
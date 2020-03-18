var name = "window";
var bar = { name: "bar" };
var foo = {
  name: "foo",
  say1: function() {
    console.log(this.name);
  },
  say2: () => {
    console.log(this.name);
  },
  say3: function() {
    console.log(this.name);
    return function() {
      console.log(this.name);
    };
  },
  say4: function() {
    return () => {
      console.log(this.name);
    };
  },
  say5: () => {
    return () => {
      console.log(this.name);
    };
  },
  say6: () => {
    return function() {
      console.log(this.name);
    };
  }
};

// var salary = 1000;
// function f() {
//   var salary;
//   console.log("or" + salary);
//   salary = 2000;
//   console.log("now" + salary);
// }
// f();
// foo.say2();
// foo.say2.call(bar);

// foo.say3()();
// foo.say3().call(bar);
// foo.say3.call(bar)();

// foo.say4()();
// foo.say4().call(bar);
// foo.say4.call(bar)();

// foo.say1();
// foo.say1.call(window);

// foo.say2();
// foo.say2.call(bar);

// foo.say3();
// foo.say3.call(bar).call();

// foo.say4()();
// foo.say4.call(bar)();
// foo.say4().call(bar);

// foo.say5()();
// foo.say5.call(bar)();
// foo.say5().call(bar);

// foo.say6()();
// foo.say6.call(bar)();
// foo.say6().call(bar);

// hello.call(hello);
// var boss1 = {
//   name: "boss1",
//   returnThis() {
//     return this;
//   }
// };

// var boss2 = {
//   name: "boss2",
//   returnThis() {
//     return boss1.returnThis();
//   }
// };

// var boss3 = {
//   name: "boss3",
//   returnThis() {
//     var returnThis = boss1.returnThis;
//     return returnThis();
//   }
// };

// console.log(boss1.returnThis()); // boss1
// console.log(boss2.returnThis()); // ?
// console.log(boss3.returnThis()); // ?

// outerFn 的词法作用域
// var outerFn = function() {
//   var n = 5;
//   console.log(innerItem);
//   // innerFn 的词法作用域
//   var innerFn = function() {
//     var innerItem = "inner"; // 错了。只能坐着电梯向上，不能向下。
//     console.log(n);
//   };
//   return innerFn;
// };
// outerFn()();

// var object = {
//   data: [1, 2, 3],
//   dataDouble: [1, 2, 3],
//   double: function() {
//     console.log("this inside of outerFn double()");
//     console.log(this);
//     return this.data.map(function(item) {
//       console.log(this); // 这里的 this 是什么？？
//       return item * 2;
//     });
//   },
//   doubleArrow: function() {
//     console.log("this inside of outerFn doubleArrow()");
//     console.log(this);
//     return this.dataDouble.map(item => {
//       console.log(this); // 这里的 this 是什么？？
//       return item * 2;
//     });
//   }
// };
// object.double();
// object.doubleArrow();

document.body.addEventListener(
  "click",
  () => {
    Promise.resolve().then(() => console.log(1));
    console.log(2);
  },
  false
);

document.body.addEventListener(
  "click",
  () => {
    Promise.resolve().then(() => console.log(3));
    console.log(4);
  },
  false
);

// 点击body
// document.body.click();
// document.body.onclick();
// document.body.click();

function f1() {
  Promise.resolve().then(() => console.log(1));
  console.log(2);
}
function f2() {
  Promise.resolve().then(() => console.log(3));
  console.log(4);
}
function f3() {
  f1();
  f2();
}

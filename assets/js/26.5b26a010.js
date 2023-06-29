(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{515:function(a,t,s){"use strict";s.r(t);var r=s(30),v=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h5",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[a._v("#")]),a._v(" 概述")]),a._v(" "),s("p",[a._v("在定义函数和方法的时候，作为一名开发人员，一定会对函数的参数和返回值定义为T和*T深思熟虑，有些情况下可能还会有些苦恼。")]),a._v(" "),s("p",[a._v("一般的判断标准是看副本创建的成本和需求。")]),a._v(" "),s("ul",[s("li",[a._v("1.不想变量被修改。如果你不想要变量被函数和方法修改，那么选择类型T。相反，如果想要修改原始的变量，则选择*T。")]),a._v(" "),s("li",[a._v("2.如果变量是一个大的struct或者数组，则副本的创建相对会影响性能，这个时候考虑使用*T，只创建新的指针，这个区别还是巨大的")]),a._v(" "),s("li",[a._v("3.（不针对函数参数，只针对本地变量） 对于函数作用域内的参数，如果定义为T，Go编译器尽量将对象分配到栈上，而*T很可能会分配到对象上，这对垃圾回收有影响。")])]),a._v(" "),s("h5",{attrs:{id:"什么时候发生副本创建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么时候发生副本创建"}},[a._v("#")]),a._v(" 什么时候发生副本创建")]),a._v(" "),s("ul",[s("li",[a._v("变量赋值的时候就会创建对象副本。")]),a._v(" "),s("li",[a._v("slice、map和数组在初始化和按索引设置的时候也会创建副本。")]),a._v(" "),s("li",[a._v("for-range循环也是将元素赋值给循环变量，所以变量得到的是集合元素的副本。")]),a._v(" "),s("li",[a._v("往channel中send对象的时候也会创建对象的副本")]),a._v(" "),s("li",[a._v("将变量作为参数传递给函数和方法就会发生副本的创建。对于返回值，将返回值赋值给其它变量或者传递给其它的函数或方法，就会创建副本。")])]),a._v(" "),s("h5",{attrs:{id:"不同类型的副本创建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不同类型的副本创建"}},[a._v("#")]),a._v(" 不同类型的副本创建")]),a._v(" "),s("h6",{attrs:{id:"bool-数值和指针"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bool-数值和指针"}},[a._v("#")]),a._v(" bool，数值和指针")]),a._v(" "),s("p",[a._v("bool和数值类型一般不必考了指针类型，原因在于这些对象很小，创建副本的开销可以忽略。只有你在想修改同一个变量的值的时候才考虑他们的指针。")]),a._v(" "),s("h5",{attrs:{id:"数组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数组"}},[a._v("#")]),a._v(" 数组")]),a._v(" "),s("p",[a._v("数组是值类型，赋值的时候会发生原始数组的复制，所以对于大的数组的参数传递和赋值，一定要慎重。\n对于[...]T和[...]*T的区别，[...]*T 创建的副本的元素是元数组元素指针的副本。")]),a._v(" "),s("h5",{attrs:{id:"map、slice和channel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#map、slice和channel"}},[a._v("#")]),a._v(" map、slice和channel")]),a._v(" "),s("p",[a._v("这三种类型都是指向指针类型，指向一个底层的数据结构。因此，定义类型的时候，就不必定义成*T。")]),a._v(" "),s("h5",{attrs:{id:"字符串"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字符串"}},[a._v("#")]),a._v(" 字符串")]),a._v(" "),s("p",[a._v("字符串比较特殊，它的值不能修改，任何想对字符串的值做修改都会生成新的字符串。\n当你需要nil值的时候，就必须定义为*string。因为类型string的空值为“”。")]),a._v(" "),s("h5",{attrs:{id:"函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数"}},[a._v("#")]),a._v(" 函数")]),a._v(" "),s("p",[a._v("函数也是一个指针类型，对函数对象的赋值只是又创建了一个对次函数对象的指针。")])])}),[],!1,null,null,null);t.default=v.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{506:function(t,s,a){"use strict";a.r(s);var n=a(30),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h4",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),a("p",[t._v("不像Java，Go语言为程序员提供了控制数据结构指针的能力；但你不能进行指针运算。通过给予程序员基本内存布局，Go语言允许你控制特定集合的数据结构、分配的数量以及内存访问模式，这些对构建运行良好的系统是非常重要的：指针对于性能的影响是不言而喻的，而如果你想要做的是系统编程、操作系统或者网络应用，指针更是不可或缺的一部分。")]),t._v(" "),a("p",[t._v("程序在内存中存储它的值，每个内存块有一个地址，通常用十六进制表示，如：0x6b0820.\nGo语言的取地址符是&，放到一个变量前使用就会返回相应变量的内存地址。")]),t._v(" "),a("p",[t._v("下面的代码片段可能输出 An interger：5， its location in memeory：0x6b0820（这个值随着你每次运行程序而变化）")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n\nfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"An interger：%d， its location in memeory：%p\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("i1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("这个地址可以存储在一个叫做指针的特殊数据类型中，在本例中这是一个指向int的指针，即i1:此处使用*int表示。如果我们像调用指针intP， 我们可以这样声明它。")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" intP "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("然后使用intP = &i1是合法的，此时intP 指向i1.（指针的格式化标识符为%p）")]),t._v(" "),a("p",[t._v("一个指针变量可以指向任何一个值的内存地址，它指向那个值的内存地址，在32位机器上占用4个字节，在64位机器上占用8个字节，并且与它所指向的值的大小无关。当然，可以声明指针指向任何类型的值来表明它的原始性或结构性；你可以在指针类型前面加上*号来获取指针所指向的内容。使用一个指针引用一个值被称为间接引用。\n当一个指针被定义后没有分配到任何变量时，它的值为nil。")]),t._v(" "),a("h6",{attrs:{id:"注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),a("ul",[a("li",[t._v("你不能获取一个文字或者常量的地址")]),t._v(" "),a("li",[t._v("对于一个空指针的反向引用是不合法的，并且会使程序崩溃")])])])}),[],!1,null,null,null);s.default=e.exports}}]);
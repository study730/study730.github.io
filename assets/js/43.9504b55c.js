(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{531:function(t,n,a){"use strict";a.r(n);var s=a(30),e=Object(s.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h4",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),a("p",[t._v("Java语言使用@interface语法来定义注解（Annotation），它的格式如下：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Report")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h6",{attrs:{id:"元注解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#元注解"}},[t._v("#")]),t._v(" 元注解")]),t._v(" "),a("p",[t._v("有一些注解可以修饰其他注解，这些注解就称为元注解（meta annotation）。Java标准库已经定义了一些元注解，我们只需要使用元注解，通常不需要自己去编写元注解。")]),t._v(" "),a("p",[t._v("@Target\n最常用的元注解是@Target。使用@Target可以定义Annotation能够被应用于源码哪些位置")]),t._v(" "),a("p",[t._v("@Retention\n另一个重要的元注解@Retention定义了Annotation的生命周期。如果@Retention不存在，则该Annotation默认为CLASS。因为通常我们自定义的Annotation都是RUNTIME，所以，务必要加上\n@Retention(RetentionPolicy.RUNTIME)这个元注解。")]),t._v(" "),a("ul",[a("li",[t._v("仅编译期：RetentionPolicy.SOURCE")]),t._v(" "),a("li",[t._v("仅class文件： RetentionPolicy.CLASS")]),t._v(" "),a("li",[t._v("运行期：RetentionPolicy.RUNTIME")])])])}),[],!1,null,null,null);n.default=e.exports}}]);
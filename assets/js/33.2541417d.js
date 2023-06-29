(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{522:function(s,t,n){"use strict";n.r(t);var a=n(30),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h3",{attrs:{id:"概述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),n("p",[s._v("origin 是一个由 Go 语言（golang）编写的分布式开源游戏服务器引擎。origin适用于各类游戏服务器的开发，包括 H5（HTML5）游戏服务器。")]),s._v(" "),n("p",[s._v("origin 解决的问题：")]),s._v(" "),n("ul",[n("li",[s._v("origin总体设计如go语言设计一样，总是尽可能的提供简洁和易用的模式，快速开发。")]),s._v(" "),n("li",[s._v("能够根据业务需求快速并灵活的制定服务器架构。")]),s._v(" "),n("li",[s._v("利用多核优势，将不同的service配置到不同的node，并能高效的协同工作。")]),s._v(" "),n("li",[s._v("将整个引擎抽象三大对象，node,service,module。通过统一的组合模型管理游戏中各功能模块的关系。")]),s._v(" "),n("li",[s._v("有丰富并健壮的工具库。")])]),s._v(" "),n("h3",{attrs:{id:"生命周期"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[s._v("#")]),s._v(" 生命周期")]),s._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[s._v("main"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("go")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \nnode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("go")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Start")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ncommand"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("go")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Run")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 解析命令行参数\ncommand"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("go")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("execute")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nargs  "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("byte")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 计算总长度")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" msgLen "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("uint32")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("len")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  msgLen "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("uint32")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("len")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" msgLen "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("maxMsgLen "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//长度不能大于4096")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" errors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("New")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"message too long"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" msgLen "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("minMsgLen "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//长度不能小于1")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" errors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("New")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"message too short"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//创建一个byte容器，长度 = 2 +（内容长度）")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// msg := make([]byte, uint32(p.lenMsgLen)+msgLen)")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("littleEndian "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("     "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//是否是小端")]),s._v("\n  binary"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("LittleEndian"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("PutUint16")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("msg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("uint16")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("msgLen"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  binary"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("BigEndian"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("PutUint16")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("msg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("uint16")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("msgLen"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// write data")]),s._v("\nl "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lenMsgLen\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("len")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("copy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("msg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("l"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  l "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("len")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nconn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Write")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("msg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);
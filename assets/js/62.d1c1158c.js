(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{551:function(t,a,s){"use strict";s.r(a);var e=s(30),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),s("p",[t._v("Redis是一个基于内存的高性能key-value数据库。")]),t._v(" "),s("h6",{attrs:{id:"常见的数据类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见的数据类型"}},[t._v("#")]),t._v(" 常见的数据类型")]),t._v(" "),s("p",[t._v("string、hash、list、set、zset")]),t._v(" "),s("h6",{attrs:{id:"优势"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优势"}},[t._v("#")]),t._v(" 优势")]),t._v(" "),s("ul",[s("li",[t._v("1.完全基于内存，内存速度快")]),t._v(" "),s("li",[t._v("2.采用了单线程，避免了不必要的上下文切换而消耗CPU")]),t._v(" "),s("li",[t._v("3.采用了非阻塞的IO多路复用机制")])]),t._v(" "),s("h6",{attrs:{id:"持久化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#持久化"}},[t._v("#")]),t._v(" 持久化")]),t._v(" "),s("p",[t._v("Redis提供了两种不同的持久化方法来将数据存储到硬盘里面。一种方法叫快照，他可以将存在于某一时刻的所有数据都写入硬盘里面。另一种方法叫只追加文件（append only file），它会在执行写命令时，将被执行的写命令复制到硬盘里面。")]),t._v(" "),s("h6",{attrs:{id:"缓存异常-常见问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缓存异常-常见问题"}},[t._v("#")]),t._v(" 缓存异常-常见问题")]),t._v(" "),s("ul",[s("li",[t._v("缓存雪崩\n原因：同一时间缓存失效，所有请求都去查数据库，导致数据库崩溃。\n解决方法：缓存失效时间，随机设置。")]),t._v(" "),s("li",[t._v("缓存击穿\n原因：某个热点数据失效，持续的大并发穿破缓存，直接请求数据库。\n解决方法：不设置失效时间，有更新，更新缓存。")]),t._v(" "),s("li",[t._v("缓存穿透\n原因：没有这个缓存，一直请求数据库。\n解决方法：设置空值。")])])])}),[],!1,null,null,null);a.default=r.exports}}]);
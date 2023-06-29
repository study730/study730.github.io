(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{546:function(s,a,t){"use strict";t.r(a);var n=t(30),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h4",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),t("p",[s._v("本文记录，使用docker在Linux机器，安装Prometheus与Grafana。")]),s._v(" "),t("h4",{attrs:{id:"正文"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#正文"}},[s._v("#")]),s._v(" 正文")]),s._v(" "),t("ul",[t("li",[s._v("1.新建prometheus.yml文件，内容如下")])]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("global")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("scrape_interval")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("     15s "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# By default, scrape targets every 15 seconds.")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Attach these labels to any time series or alerts when communicating with")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# external systems (federation, remote storage, Alertmanager).")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("external_labels")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("monitor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'codelab-monitor'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# A scrape configuration containing exactly one endpoint to scrape:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Here it's Prometheus itself.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("scrape_configs")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# The job name is added as a label `job=<job_name>` to any timeseries scraped from this config.")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("job_name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'prometheus'")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Override the global default and scrape targets from this job every 5 seconds.")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("scrape_interval")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 5s\n\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("static_configs")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("targets")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'localhost:9090'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'192.168.31.162:9100'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("ul",[t("li",[s._v("2.启动prometheus容器")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run --name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("prometheus -d -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9090")]),s._v(":9090 \n-v /data/prometheus/prometheus.yml:/etc/prometheus/prometheus.yml \n-v /data/prometheus/rules.yml:/etc/prometheus/rules.yml prom/prometheus \n--config.file"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/prometheus/prometheus.yml \n--web.enable-lifecycle\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("//重载配置文件命令\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -X POST http://localhost:9090/-/reload\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ul",[t("li",[s._v("3.收集Linux信息")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9100")]),s._v(":9100 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -v "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/proc:/host/proc:ro"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -v "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/sys:/host/sys:ro"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -v "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/:/rootfs:ro"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  prom/node-exporter\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("ul",[t("li",[s._v("4.启动Grafana")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3001")]),s._v(":3000 --name grafana grafana/grafana\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("5.配置模版信息")]),s._v(" "),t("li")]),s._v(" "),t("p",[s._v("https://grafana.com/grafana/dashboards/11074")])])}),[],!1,null,null,null);a.default=e.exports}}]);
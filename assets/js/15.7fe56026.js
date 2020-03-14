(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{242:function(t,s,e){"use strict";e.r(s);var a=e(2),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[e("img",{staticClass:"lazy",attrs:{alt:"","data-src":"/images/infra/sending-logs-from-pfsense-2-logstash.png",loading:"lazy"}})]),t._v(" "),e("h1",{attrs:{id:"elk-stack-整合-pfsense-一-：將-pfsense-防火牆阻擋紀錄傳送到-logstash"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#elk-stack-整合-pfsense-一-：將-pfsense-防火牆阻擋紀錄傳送到-logstash"}},[t._v("#")]),t._v(" ELK Stack 整合 pfSense (一)：將 pfSense 防火牆阻擋紀錄傳送到 Logstash")]),t._v(" "),e("PageEdit"),t._v(" "),e("div",[e("TagLinks")],1),t._v(" "),e("p",[t._v("Logstash 的功能像是一個接收器，支援從許多種 Protocol 接收 Log，如 Syslog、Netflow等，並且透過 "),e("strong",[t._v("Parser")]),t._v(" 將"),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Unstructured_data",target:"_blank",rel:"noopener noreferrer"}},[t._v("非結構化資料"),e("OutboundLink")],1),t._v("轉換成"),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Semi-structured_data",target:"_blank",rel:"noopener noreferrer"}},[t._v("半結構化資料"),e("OutboundLink")],1),t._v("。Parser 方便的是使用 Grok Pattern，可以避免自行撰寫複雜的 Regex，不過他也支援 Regex 讓我們可以自訂 Pattern，因此 Logstash 的 parsing 是很彈性的。本系列文章介紹 pfSense 與 ELK Stack (7.6 版) 的整合，藉此分析與收集阻擋的連接紀錄。")]),t._v(" "),e("h2",{attrs:{id:"elk-stack-整合-pfsense-系列文"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#elk-stack-整合-pfsense-系列文"}},[t._v("#")]),t._v(" \bELK Stack 整合 pfSense 系列文")]),t._v(" "),e("ul",[e("li",[t._v("[本篇] ELK Stack 整合 pfSense (一)：將 pfSense 防火牆阻擋紀錄傳送到 Logstash")]),t._v(" "),e("li",[e("a",{attrs:{href:"/posts/infra/elasticsearch-receives-data-from-logstash"}},[t._v("ELK Stack 整合 pfSense (二)：Elasticsearch")])]),t._v(" "),e("li",[t._v("[待續] "),e("a",{attrs:{href:"#"}},[t._v("ELK Stack 整合 pfSense (三)：Kibana Dashboard")])])]),t._v(" "),e("h2",{attrs:{id:"安裝-logstash"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安裝-logstash"}},[t._v("#")]),t._v(" 安裝 Logstash")]),t._v(" "),e("p",[t._v("裝 logstash 前需要先安裝 Java，注意一下 Logstash 和 Java 的相容性。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安裝 JRE")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" default-jre -y\njava -version\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安裝 logstash")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -L -O https://artifacts.elastic.co/downloads/logstash/logstash-7.6.1.deb\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" dpkg -i logstash-7.6.1.deb\n")])])]),e("h2",{attrs:{id:"logstash-的檔案結構"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#logstash-的檔案結構"}},[t._v("#")]),t._v(" Logstash 的檔案結構")]),t._v(" "),e("p",[t._v("請見"),e("a",{attrs:{href:"https://www.elastic.co/guide/en/logstash/7.6/dir-layout.html#deb-layout",target:"_blank",rel:"noopener noreferrer"}},[t._v("文件"),e("OutboundLink")],1),t._v("中有詳情，這邊主要是了解 Logstash 各種設定放在哪裡，以及他們有不同的作用。")]),t._v(" "),e("p",[e("code",[t._v("/etc/logstash/")]),t._v(" 底下有各種 "),e("code",[t._v("yml")]),t._v(" 檔，都是 logstash 的設定檔。下面說明設定檔的功能。")]),t._v(" "),e("h3",{attrs:{id:"pipeline-yml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pipeline-yml"}},[t._v("#")]),t._v(" "),e("code",[t._v("pipeline.yml")])]),t._v(" "),e("p",[e("code",[t._v("/etc/logstash/pipelines.yml")]),t._v(" 決定 logstash pipeline config 的路徑，預設在 "),e("code",[t._v("/etc/logstash/conf.d/*.conf")]),t._v(" 下，這邊使用預設即可。")]),t._v(" "),e("h3",{attrs:{id:"logstash-yml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#logstash-yml"}},[t._v("#")]),t._v(" "),e("code",[t._v("logstash.yml")])]),t._v(" "),e("p",[e("code",[t._v("logstash.yml")]),t._v(" 用來設定 logstash 執行時的選項，"),e("code",[t._v("logstash.yml")]),t._v(" 中大部分的設定也可以在執行指令用 "),e("a",{attrs:{href:"https://www.elastic.co/guide/en/logstash/7.6/running-logstash-command-line.html#command-line-flags",target:"_blank",rel:"noopener noreferrer"}},[t._v("Command-line Flags"),e("OutboundLink")],1),t._v(" 帶入。")]),t._v(" "),e("h3",{attrs:{id:"config-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#config-file"}},[t._v("#")]),t._v(" Config File")]),t._v(" "),e("p",[t._v("這邊是 Logstash 最重要的地方，所有 config 預設都要放在 "),e("code",[t._v("/etc/logstash/conf.d")]),t._v(" 底下。我們只要在這裡建立一個 "),e("code",[t._v(".conf")]),t._v(" 結尾的檔案就可以寫設定了。如果有多個 config file，則 Logstash 會自行整合。")]),t._v(" "),e("p",[t._v("Config File 的結構分為 3 個部分，"),e("code",[t._v("input")]),t._v("、"),e("code",[t._v("filter")]),t._v("、"),e("code",[t._v("output")]),t._v("。Logstash 有需要的話要安裝 plugin，plugin 有四種："),e("a",{attrs:{href:"https://www.elastic.co/guide/en/logstash/7.6/input-plugins.html",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("input")]),e("OutboundLink")],1),t._v("、"),e("a",{attrs:{href:"https://www.elastic.co/guide/en/logstash/7.6/filter-plugins.html",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("filter")]),e("OutboundLink")],1),t._v("、"),e("a",{attrs:{href:"https://www.elastic.co/guide/en/logstash/7.6/output-plugins.html",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("output")]),e("OutboundLink")],1),t._v("、"),e("a",{attrs:{href:"https://www.elastic.co/guide/en/logstash/7.6/codec-plugins.html",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("codec")]),e("OutboundLink")],1),t._v("。要查看已安裝的 plugin 可以透過指令 "),e("code",[t._v("bin/logstash-plugin list")]),t._v("，"),e("code",[t._v("bin")]),t._v("的路徑會因OS而不同，"),e("a",{attrs:{href:"#Logstash%20%E7%9A%84%E6%AA%94%E6%A1%88%E7%B5%90%E6%A7%8B"}},[t._v("Logstash 的檔案結構文件")]),t._v("文件有寫。")]),t._v(" "),e("h3",{attrs:{id:"bin-檔"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bin-檔"}},[t._v("#")]),t._v(" "),e("code",[t._v("bin")]),t._v(" 檔")]),t._v(" "),e("p",[t._v("放在 "),e("code",[t._v("/usr/share/logstash/bin")]),t._v("。執行 Logstash、安裝其他 Plugin 等會需要用到這裡的 binary。")]),t._v(" "),e("h3",{attrs:{id:"custom-grok-patterns"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#custom-grok-patterns"}},[t._v("#")]),t._v(" Custom Grok Patterns")]),t._v(" "),e("p",[t._v("有時我們需要自行定義 Grok Pattern，並且命名之，這可以透過"),e("code",[t._v(".grok")]),t._v(" file 進行定義，然後再從 config file 中指定 pattern 的路徑。")]),t._v(" "),e("h2",{attrs:{id:"在-pfsense-設定-syslog-的-remote-log-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在-pfsense-設定-syslog-的-remote-log-server"}},[t._v("#")]),t._v(" 在 pfSense 設定 Syslog 的 Remote log server")]),t._v(" "),e("p",[t._v("在 pfSense 的選單中進入 "),e("strong",[t._v("Status")]),t._v(" > "),e("strong",[t._v("System Logs")]),t._v("。")]),t._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://i.imgur.com/bmoFsdy.png",loading:"lazy"}})]),t._v(" "),e("p",[t._v("接著切換到 "),e("strong",[t._v("Settings")]),t._v(" 標籤：")]),t._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://i.imgur.com/zppua11.png",loading:"lazy"}})]),t._v(" "),e("p",[t._v("輸入 Logstash 的 IP 和 Port：")]),t._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://i.imgur.com/INCTORj.png",loading:"lazy"}})]),t._v(" "),e("h2",{attrs:{id:"建立-config-file-和-grok-patttern"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#建立-config-file-和-grok-patttern"}},[t._v("#")]),t._v(" 建立 Config file 和 Grok Patttern")]),t._v(" "),e("p",[t._v("我找到 Github 上已經有勇者寫好 pfSense 的 Grok pattern 了，所以直接拿來使用，把整個 "),e("a",{attrs:{href:"https://github.com/patrickjennings/logstash-pfSense",target:"_blank",rel:"noopener noreferrer"}},[t._v("Repo"),e("OutboundLink")],1),t._v(" 給"),e("code",[t._v("clone")]),t._v("下來吧。")]),t._v(" "),e("p",[t._v("如果要新增更多自己的 Pattern，很多人會使用 "),e("a",{attrs:{href:"https://grokdebug.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Grok Debugger"),e("OutboundLink")],1),t._v(" 進行除錯。")]),t._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://i.imgur.com/zLrOWa5.png",loading:"lazy"}})]),t._v(" "),e("p",[t._v("最上面就是輸入原始的 Log；中間的欄位輸入 Grok Pattern；如果有額外定義的 custom pattern (像 "),e("code",[t._v("logstash-pfSense/patterns")]),t._v(" 裡的內容就是 custom pattern)，請將 "),e("strong",[t._v("Add custom patterns")]),t._v(" 打勾就會可以輸入了。最下方就是預覽 Parsed 後的結果。")]),t._v(" "),e("p",[e("code",[t._v("logstash-pfSense/conf.d")]),t._v(" 裡的檔案複製到"),e("code",[t._v("/etc/logstash/conf.d")]),t._v("，"),e("code",[t._v("logstash-pfSense/patterns")]),t._v("複製到 "),e("code",[t._v("etc/logstash/patterns")]),t._v("。記得修改"),e("code",[t._v("01-inputs.conf")]),t._v("的 port 和"),e("code",[t._v("10-syslog.conf")]),t._v("的 IP，須對應到 pfSense 的 syslog 設定。還有"),e("code",[t._v("30-outputs.conf")]),t._v("的 Elasticsearch host IP。")]),t._v(" "),e("h4",{attrs:{id:"_01-inputs-conf"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_01-inputs-conf"}},[t._v("#")]),t._v(" "),e("code",[t._v("01-inputs.conf")])]),t._v(" "),e("p",[t._v("例子使用 Port "),e("code",[t._v("6514")])]),t._v(" "),e("div",{staticClass:"language-conf extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('#tcp syslog stream via 5140\ninput {\n  tcp {\n    type => "syslog"\n    port => 6514\n  }\n}\n#udp syslogs stream via 5140\ninput {\n  udp {\n    type => "syslog"\n    port => 6514\n  }\n}\n')])])]),e("h4",{attrs:{id:"_10-syslog-conf-前半段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-syslog-conf-前半段"}},[t._v("#")]),t._v(" "),e("code",[t._v("10-syslog.conf")]),t._v(" 前半段")]),t._v(" "),e("div",{staticClass:"language-conf extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('filter {\n  if [type] == "syslog" {\n    #change to pfSense ip address\n    if [host] =~ /172\\.30\\.0\\.1/ { # 這邊要修改\n      mutate {\n        add_tag => ["pfSense", "Ready"]\n      }\n    }\n    if "Ready" not in [tags] {\n      mutate {\n        add_tag => [ "syslog" ]\n      }\n    }\n  }\n}\n')])])]),e("p",[e("strong",[t._v("架 ELK 需要特別注意服務之間溝通的 Port")]),t._v("，預設 "),e("strong",[t._v("Elasticsearch")]),t._v(" 會使用 "),e("mark",[t._v("Port "),e("code",[t._v("9200")])]),t._v(" 來接收 Logstash 的資料，因此"),e("code",[t._v("30-outputs.conf")]),t._v("的設定請參考下面：")]),t._v(" "),e("h4",{attrs:{id:"_30-outputs-conf"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_30-outputs-conf"}},[t._v("#")]),t._v(" "),e("code",[t._v("30-outputs.conf")])]),t._v(" "),e("div",{staticClass:"language-conf extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('output {\n  if [type] == "syslog" {\n    elasticsearch {\n        hosts => "172.30.0.5:9200"\n        index => "logstash-pfSense-%{+YYYY.MM.dd}"\n    }\n    stdout { codec => rubydebug }\n  }\n}\n')])])]),e("p",[t._v("接著啟動 Logstash。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" logstash start\n")])])]),e("p",[t._v("如何確定 Logstash 有接收到 Syslog?\n確認 OS 有 Listen 我設定的 Port "),e("code",[t._v("6514")]),t._v(" 後，我是使用 TCPDump 查看，因為目前還沒架起 Elasticsearch，所以用很原始的方式看。")]),t._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://i.imgur.com/AqOehqC.png",loading:"lazy"}})]),t._v(" "),e("p",[t._v("要驗證 Log 被 parse 的結果，可以從 Wireshark 複製 log 內容，到 Grok Debugger 試試看套用 pattern。接著下一篇就是架 Elasticsearch。")]),t._v(" "),e("h2",{attrs:{id:"references"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[t._v("#")]),t._v(" References")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.elastic.co/guide/en/logstash/7.6/configuration-file-structure.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Structure of a Config File | Logstash Reference [7.6] | Elastic"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://docs.netgate.com/pfSense/en/latest/book/monitoring/remote-logging.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("System Monitoring — Remote Logging with Syslog | pfSense Documentation"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/patrickjennings/logstash-pfSense",target:"_blank",rel:"noopener noreferrer"}},[t._v("patrickjennings/logstash-pfSense: Logstash configuration for pfSense syslog events."),e("OutboundLink")],1)])]),t._v(" "),e("Disqus")],1)}),[],!1,null,null,null);s.default=n.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{239:function(t,s,a){"use strict";a.r(s);var e=a(2),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"/images/infra/elasticsearch-receives-data-from-logstash.png",loading:"lazy"}})]),t._v(" "),a("h1",{attrs:{id:"elk-stack-整合-pfsense-二-：elasticsearch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#elk-stack-整合-pfsense-二-：elasticsearch"}},[t._v("#")]),t._v(" ELK Stack 整合 pfSense (二)：Elasticsearch")]),t._v(" "),a("PageEdit"),t._v(" "),a("div",[a("TagLinks")],1),t._v(" "),a("p",[t._v("本系列文章介紹 pfSense 與 ELK Stack (7.6 版) 的整合，藉此分析與收集阻擋的連接紀錄。Elasticsearch 是個"),a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E5%85%A8%E6%96%87%E6%AA%A2%E7%B4%A2",target:"_blank",rel:"noopener noreferrer"}},[t._v("全文搜尋引擎"),a("OutboundLink")],1),t._v("，透過 "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Inverted_index",target:"_blank",rel:"noopener noreferrer"}},[t._v("Inverted Index"),a("OutboundLink")],1),t._v(" 的資料結構來提供即時的搜尋和分析功能。整個 ELK Stack 讀取和分析的 Log 就是儲存在 Elasticsearch，因此 Elasticsearch 需要足夠的儲存空間，而且它專門接收 JSON 型態的資料，所以除了和 Logstash 整合，只要能輸出 JSON 格式的工具都能與 Elasticsearch 整合。在查詢時皆透過 REST API，文件中有提到可使用 "),a("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/search-uri-request.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Query String"),a("OutboundLink")],1),t._v(" 或是 Query DSL "),a("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/search-request-body.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("在 GET 的 request body 塞 JSON 查詢指令"),a("OutboundLink")],1),t._v("，雖然目前沒有定義 GET method 的 body 的用途，關於是否可以這樣使用也存在不少爭議，不過看起來 Elastic 他們就自行使用了。")]),t._v(" "),a("h2",{attrs:{id:"elk-stack-整合-pfsense-系列文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#elk-stack-整合-pfsense-系列文"}},[t._v("#")]),t._v(" \bELK Stack 整合 pfSense 系列文")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/posts/infra/sending-logs-from-pfsense-2-logstash.html"}},[t._v("ELK Stack 整合 pfSense (一)：將 pfSense 防火牆阻擋紀錄傳送到 Logstash")])],1),t._v(" "),a("li",[t._v("[本篇] ELK Stack 整合 pfSense (二)：Elasticsearch")]),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/posts/infra/monitoring-pfsense-via-kibana.html"}},[t._v("ELK Stack 整合 pfSense (三)：Kibana Dashboard")])],1)]),t._v(" "),a("h2",{attrs:{id:"安裝-elasticsearch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安裝-elasticsearch"}},[t._v("#")]),t._v(" 安裝 Elasticsearch")]),t._v(" "),a("p",[t._v("依照"),a("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/deb.html#deb-repo",target:"_blank",rel:"noopener noreferrer"}},[t._v("文件"),a("OutboundLink")],1),t._v("步驟安裝，一樣要先裝 Java，再裝 Elasticsearch。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" default-jre -y\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" apt-key "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y apt-transport-https\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"deb https://artifacts.elastic.co/packages/7.x/apt stable main"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tee")]),t._v(" -a /etc/apt/sources.list.d/elastic-7.x.list\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y elasticsearch\n")])])]),a("p",[t._v("Elasticsearch 的設定檔放在"),a("code",[t._v("/etc/elasticsearch/elasticsearch.yml")]),t._v("，"),a("code",[t._v("elasticsearch.yml")]),t._v("有幾個地方需要特別注意。")]),t._v(" "),a("h4",{attrs:{id:"elasticsearch-yml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch-yml"}},[t._v("#")]),t._v(" "),a("code",[t._v("elasticsearch.yml")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 因為我另外掛載大容量的 NFS 來當作儲存空間，所以需要修改預設的路徑。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 儲存 data 的地放")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path.data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /boot/lib/elasticsearch\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 儲存 log 的地方")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path.log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /boot/log/elasticserch\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果 Kibana 和 Elasticsearch 不在同一台，一定要修改 IP。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 預設是 Listen 127.0.0.1 的，不修改的話無法讓其他主機連接")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("network.host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 172.30.0.5\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 由於 network.host 非 loopback address")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Elasticsearch 會認為這是 Production 環境")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 所以必須修改 discovery.seed_hosts")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("discovery.seed_hosts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"172.30.0.5"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("接著就可以啟動 Elasticsearch，Elasticsearch 會透過 "),a("mark",[t._v("Port 9200")]),t._v(" 接收 Logstash 的資料和接收查詢指令，然後透過 "),a("mark",[t._v("Port 9300")]),t._v(" 和 Kibana 進行 Keepalive。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl start elasticsearch.service\n")])])]),a("p",[t._v("然後檢查 Port 狀態：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("netstat")]),t._v(" -nlt\n")])])]),a("p",[t._v("注意 9200 與 9300：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("tcp        0      0 127.0.0.53:53           0.0.0.0:*               LISTEN\ntcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN\ntcp6       0      0 172.30.0.5:9200         :::*                    LISTEN\ntcp6       0      0 172.30.0.5:9300         :::*                    LISTEN\ntcp6       0      0 :::22                   :::*                    LISTEN\n")])])]),a("p",[t._v("如果 Logstash 已經在運作，我們會看得到 Elasticsearch 和 Logstash 建立的 connection：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("root@elasticsearch:/etc/elasticsearch# netstat -net | grep 9200\ntcp6       0      0 172.30.0.5:9200         172.30.0.4:51242        ESTABLISHED 111        253749\n")])])]),a("p",[t._v("接著等待 Logstash 傳送一些資料之後，可以透過 API 查詢看看是否收到資料。之前在 Logstash 的 output config 有定義 "),a("strong",[t._v("index")]),t._v(" 名稱為 "),a("code",[t._v("logstash-pfSense-%{+YYYY.MM.dd}")]),t._v("，所以查詢所有資料可以在 URL 用"),a("code",[t._v("logstash-pfSense-\\*")]),t._v("，"),a("code",[t._v("_search")]),t._v("就是查詢所有資料，"),a("code",[t._v("?pretty=true")]),t._v("是為了讓輸出結果方便人類閱讀。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" http://172.30.0.5:9200/logstash-pfSense-"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("*/_search"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("?pretty"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true\n")])])]),a("p",[t._v("如果有看到一堆 JSON 格式的資料，就代表成功了，這邊沒有要特別研究查詢語法，因為接下來的工作就是讓 Kibana 查詢並製作視覺化 Dashboard。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://i.imgur.com/Mj39JDh.png",loading:"lazy"}})]),t._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[t._v("#")]),t._v(" References")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/deb.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Install Elasticsearch with Debian Package | Elasticsearch Reference [7.6] | Elastic"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/search-uri-request.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("URI Search | Elasticsearch Reference [7.6] | Elastic"),a("OutboundLink")],1)])]),t._v(" "),a("Disqus")],1)}),[],!1,null,null,null);s.default=r.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{264:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"openflow-1-5-從入門到交報告-一-mininet-基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#openflow-1-5-從入門到交報告-一-mininet-基本概念"}},[t._v("#")]),t._v(" OpenFlow 1.5 從入門到交報告 (一) - Mininet 基本概念")]),t._v(" "),a("PageEdit"),t._v(" "),a("div",[a("TagLinks")],1),t._v(" "),a("p",[a("img",{attrs:{src:"http://mininet.org/images/frontpage_diagram.png",alt:""}})]),t._v(" "),a("p",[t._v("Mininet 是一個虛擬網路的模擬器，可以在單一主機、VM 或 Container 中執行。一開始我想用 Container 的環境玩玩看 Mininet，主要目的是學習 OpenFlow。為了產出研究所課程的期末加分報告，自訂題目中我選擇 OpenFlow，也是想藉由這個機會學習 OpenFlow，而這一系列文章同時作為學習筆記與報告題材。本篇主要以 Mininet 官方的 "),a("a",{attrs:{href:"https://github.com/mininet/openflow-tutorial/wiki/Home",target:"_blank",rel:"noopener noreferrer"}},[t._v("openflow-tutorial"),a("OutboundLink")],1),t._v(" 為主軸，唯一不同是我使用 Container 環境取代官方的 OVF VM 範本。")]),t._v(" "),a("h2",{attrs:{id:"sdn-與-openflow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sdn-與-openflow"}},[t._v("#")]),t._v(" SDN 與 OpenFlow")]),t._v(" "),a("p",[t._v("簡易來說，Controller 負責決定封包如何轉發，即負責 Control Plane 的部分。Controller 透過南向介面與 Switch 溝通，並調整 Switch 的 Flow Table，更動 Flow Table 中的 Entry。 而 Switch 只會依照 Flow Entry 的規則進行轉發，也就是負責 Data Plane 的部分。OpenFlow 就是 Controller 和交換器間的溝通協定。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/SDN%20Structure.png",alt:""}})]),t._v(" "),a("p",[t._v("基本上 Cotroller 和 Switch 的溝通是透過南向介面 (Southbound Interfaces)，包含 OpenFlow、NETCONF、SNMP 等。而北向介面 (Northbound Interfaces) 是各種服務與 Controller 溝通的介面，例如許多廠牌如 Cisco ACI 解決方案，具備讓使用者透過圖形介面操作 Controller 的功能，則北向介面使用 RESTful API 居多。北向介面也包含 gRPC、RESTCONF、YANG Data Model 等。接著使用 Mininet 操作 SDN 拓樸，我會把實際做過的 Commands 列出，並搭配解釋說明。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/Southbound%20&%20Northbound.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"安裝-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安裝-docker"}},[t._v("#")]),t._v(" 安裝 Docker")]),t._v(" "),a("p",[t._v("因為常常要在各種 VM 安裝 Docker，所以乾脆偷懶把安裝指另一次寫成腳本執行。這個 Script 主要會安裝最新版本的 Docker CE，如果要安裝特定版本，請不要使用此 Script。")]),t._v(" "),a("p",[a("em",[t._v("註: 我使用的環境是 Ubuntu 18.04")]),t._v("\n請先用過一次"),a("code",[t._v("sudo")]),t._v("，再直接執行：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" https://gist.githubusercontent.com/LYTzeng/bc67f4cb051f92ce7206a4a585229e25/raw/e403038cfa5c8ff2f4900425882213b57f31d0bb/install_docker_ubuntu.sh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("原始 Script 如下，參考自官方步驟。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Install using the repository")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    apt-transport-https "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    ca-certificates "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    gnupg-agent "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    software-properties-common\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -fsSL https://download.docker.com/linux/ubuntu/gpg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" apt-key "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" apt-key fingerprint 0EBFCD88\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" add-apt-repository "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"deb [arch=amd64] https://download.docker.com/linux/ubuntu \\\n   '),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("lsb_release -cs"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(' \\\n   stable"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Install the latest version of Docker Engine - Community and containerd")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y docker-ce docker-ce-cli containerd.io\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Disable swap")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" swapoff -a\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" -i "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/ swap / s/^\\(.*\\)$/#"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\1"}},[t._v("\\1")]),t._v("/g'")]),t._v(" /etc/fstab\n")])])]),a("h2",{attrs:{id:"把-mininet-image-拉下來並執行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#把-mininet-image-拉下來並執行"}},[t._v("#")]),t._v(" 把 Mininet Image 拉下來並執行")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker pull iwaseyusuke/mininet\ndocker run -it --rm --privileged -e "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("DISPLAY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n             -v /tmp/.X11-unix:/tmp/.X11-unix "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n             -v /lib/modules:/lib/modules "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n             iwaseyusuke/mininet\n")])])]),a("p",[t._v("這時注意 Command line 應該已經進入到容器裡面了。")]),t._v(" "),a("h2",{attrs:{id:"建立簡易拓樸"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#建立簡易拓樸"}},[t._v("#")]),t._v(" 建立簡易拓樸")]),t._v(" "),a("p",[t._v("一個 OpenFlow 簡易拓樸可以包含一個 OpenFlow Controller、OpenFlow Switch 和三個 Host。執行以下指令建立網路。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("mn --topo single,3 --mac --switch ovsk --controller remote\n")])])]),a("p",[a("code",[t._v("--topo single,3")]),t._v(" 告訴 Mininet 產生 Single-Switch Topology，包含 3 個 Hosts\n"),a("code",[t._v("--mac")]),t._v(" 讓 Hosts 的 MAC 等同於 IP Address\n"),a("code",[t._v("--switch ovsk")]),t._v(" 指定交換器類型為 OVSK\n"),a("code",[t._v("--controller remote")]),t._v(" 讓 OpenFlow Switch 指到 Remote 的 Controller，預設是 localhost")]),t._v(" "),a("p",[t._v("這個網路架構會長這樣，參考自官方 Tutorial")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/Swvc2xk.png",alt:""}})]),t._v(" "),a("p",[t._v("觀察指令輸出可以看到一些細節。")]),t._v(" "),a("div",{staticClass:"language-batch extra-class"},[a("pre",{pre:!0,attrs:{class:"language-batch"}},[a("code",[a("span",{pre:!0,attrs:{class:"token command"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("root")]),t._v("@8987721c841b:~# mn "),a("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[t._v("--topo")]),t._v(" single,"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[t._v("--mac")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[t._v("--switch")]),t._v(" ovsk "),a("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[t._v("--controller")]),t._v(" remote")]),t._v("\n　*** Error setting resource limits. Mininet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("s performance may be affected.\n　*** Creating network\n　*** Adding controller\n　Unable to contact the remote controller at 127.0.0.1:6653\n　Unable to contact the remote controller at 127.0.0.1:6633\n　Setting remote controller to 127.0.0.1:6653\n　*** Adding hosts:\n　h1 h2 h3 \n　*** Adding switches:\n　s1 \n　*** Adding links:\n　"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token command"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("h1")]),t._v(", s1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token command"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("h2")]),t._v(", s1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token command"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("h3")]),t._v(", s1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n　*** Configuring hosts\n　h1 h2 h3 \n　*** Starting controller\n　c0\n　*** Starting 1 switches\n　s1 ...\n　*** Starting CLI:\n"),a("span",{pre:!0,attrs:{class:"token command"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mininet")]),t._v(">")]),t._v("\n")])])]),a("h2",{attrs:{id:"mininet-指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mininet-指令"}},[t._v("#")]),t._v(" Mininet 指令")]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v("mininet>")]),t._v(" 下可以執行很多指令，包含查看節點、在節點直營特定指令等等。\n查看所有節點：")]),t._v(" "),a("div",{staticClass:"language-batch extra-class"},[a("pre",{pre:!0,attrs:{class:"language-batch"}},[a("code",[a("span",{pre:!0,attrs:{class:"token command"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mininet")]),t._v("> nodes")]),t._v("\n　available nodes are:\n　c0 h1 h2 h3 s1\n")])])]),a("p",[t._v("在 "),a("code",[t._v("h1")]),t._v(" 節點執行指令：")]),t._v(" "),a("div",{staticClass:"language-batch extra-class"},[a("pre",{pre:!0,attrs:{class:"language-batch"}},[a("code",[a("span",{pre:!0,attrs:{class:"token command"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mininet")]),t._v("> h1 ifconfig")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token command"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("h1")]),t._v("-eth0: flags="),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4163")]),t._v("<UP,BROADCAST,RUNNING,MULTICAST>  mtu "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1500")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token command"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("inet")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("  netmask "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  broadcast "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token command"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("inet6")]),t._v(" fe80::"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v(":ff:fe00:"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("  prefixlen "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v("  scopeid 0x20<link>")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token command"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ether")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),t._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),t._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),t._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),t._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),t._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("01")]),t._v("  txqueuelen "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v("  (Ethernet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token command"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RX")]),t._v(" packets "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  bytes "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" ("),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" B")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token command"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RX")]),t._v(" errors "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  dropped "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  overruns "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  frame "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token command"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TX")]),t._v(" packets "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("  bytes "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1316")]),t._v(" ("),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" KB")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token command"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TX")]),t._v(" errors "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  dropped "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" overruns "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  carrier "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  collisions "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token command"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("lo")]),t._v(": flags="),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("73")]),t._v("<UP,LOOPBACK,RUNNING>  mtu "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("65536")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token command"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("inet")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("  netmask "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token command"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("inet6")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token label property"}},[t._v("::1")]),t._v("  prefixlen "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),t._v("  scopeid 0x10<host>")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token command"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("loop")]),t._v("  txqueuelen "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v("  (Local Loopback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token command"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RX")]),t._v(" packets "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  bytes "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" ("),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" B")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token command"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RX")]),t._v(" errors "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  dropped "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  overruns "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  frame "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token command"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TX")]),t._v(" packets "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  bytes "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" ("),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" B")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token command"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TX")]),t._v(" errors "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  dropped "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" overruns "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  carrier "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  collisions "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")])]),t._v("\n")])])]),a("p",[t._v("我覺得有一個指令也很方便，可以查看 Host 連接到 Switch 的第幾 Port：")]),t._v(" "),a("div",{staticClass:"language-batch extra-class"},[a("pre",{pre:!0,attrs:{class:"language-batch"}},[a("code",[a("span",{pre:!0,attrs:{class:"token command"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mininet")]),t._v("> net")]),t._v("\n　h1 h1-eth0:s1-eth1\n　h2 h2-eth0:s1-eth2\n　h3 h3-eth0:s1-eth3\n　s1 lo:  s1-eth1:h1-eth0 s1-eth2:h2-eth0 s1-eth3:h3-eth0\n　c0\n")])])]),a("p",[t._v("為了之後的操作，這時候需要開多個 CLI 到同一個 Container 裡面，可以開多個視窗SSH進入VM，先用"),a("code",[t._v("docker ps")]),t._v("查看容器名稱，再執行"),a("code",[t._v("exec")]),t._v("打開多個 bash。")]),t._v(" "),a("div",{staticClass:"language-batch extra-class"},[a("pre",{pre:!0,attrs:{class:"language-batch"}},[a("code",[a("span",{pre:!0,attrs:{class:"token command"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("root")]),t._v("@ubuntu:~# docker ps")]),t._v('\n　CONTAINER ID        IMAGE                 COMMAND             CREATED             STATUS              PORTS                          NAMES\n　ba8cee17af88        iwaseyusuke/mininet   "/ENTRYPOINT.sh"    9 minutes ago       Up 9 minutes        6633/tcp, 6640/tcp, 6653/tcp   　confident_wilson\n\n'),a("span",{pre:!0,attrs:{class:"token command"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("root")]),t._v("@ubuntu:~# docker exec -it ba8cee17af88 /bin"),a("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[t._v("/bash")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token command"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("root")]),t._v("@ba8cee17af88:~#")]),t._v("\n")])])]),a("h2",{attrs:{id:"ovs-ofctl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ovs-ofctl"}},[t._v("#")]),t._v(" ovs-ofctl")]),t._v(" "),a("p",[t._v("查看 Switch 的 Port 狀態和其他資訊，在另一個 CLI 輸入")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("ovs-ofctl show s1\n")])])]),a("p",[t._v("輸出如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("root@ba8cee17af88:~# ovs-ofctl show s1\nOFPT_FEATURES_REPLY (xid=0x2): dpid:0000000000000001\nn_tables:254, n_buffers:0\ncapabilities: FLOW_STATS TABLE_STATS PORT_STATS QUEUE_STATS ARP_MATCH_IP\nactions: output enqueue set_vlan_vid set_vlan_pcp strip_vlan mod_dl_src mod_dl_dst mod_nw_src mod_nw_dst mod_nw_tos mod_tp_src mod_tp_dst\n 1(s1-eth1): addr:f2:38:c2:6b:c5:b2\n     config:     0\n     state:      0\n     current:    10GB-FD COPPER\n     speed: 10000 Mbps now, 0 Mbps max\n 2(s1-eth2): addr:e6:0d:27:7a:72:bd\n     config:     0\n     state:      0\n     current:    10GB-FD COPPER\n     speed: 10000 Mbps now, 0 Mbps max\n 3(s1-eth3): addr:1e:a6:3b:48:61:41\n     config:     0\n     state:      0\n     current:    10GB-FD COPPER\n     speed: 10000 Mbps now, 0 Mbps max\n LOCAL(s1): addr:16:10:2d:1b:8a:46\n     config:     PORT_DOWN\n     state:      LINK_DOWN\n     speed: 0 Mbps now, 0 Mbps max\nOFPT_GET_CONFIG_REPLY (xid=0x4): frags=normal miss_send_len=0\n")])])]),a("p",[t._v("輸出 Flow table，目前Controller 沒有任何 Flow，所以是空的：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ovs-ofctl dump-flows s1\n")])])]),a("p",[t._v("這時候 Hosts 之間還不能溝通，因為 Switch 無法得知進來的封包要往哪送，因此要在 Controller 加入 Flow。先加入 h1 和 h2 之間的 Flow。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ovs-ofctl add-flow s1 in_port=1,actions=output:2\novs-ofctl add-flow s1 in_port=2,actions=output:1\n")])])]),a("p",[t._v("會發現 h1 可以 ping h2 了")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("mininet> h1 ping -c4 h2\nPING 10.0.0.2 (10.0.0.2) 56(84) bytes of data.\n64 bytes from 10.0.0.2: icmp_seq=1 ttl=64 time=0.072 ms\n64 bytes from 10.0.0.2: icmp_seq=2 ttl=64 time=0.082 ms\n")])])]),a("p",[t._v("再 Dump 一次 Flow table，有東西了：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('root@ba8cee17af88:~# ovs-ofctl dump-flows s1\n cookie=0x0, duration=314.375s, table=0, n_packets=25, n_bytes=1694, in_port="s1-eth1" actions=output:"s1-eth2"\n cookie=0x0, duration=285.479s, table=0, n_packets=16, n_bytes=1316, in_port="s1-eth2" actions=output:"s1-eth1"\n')])])]),a("p",[t._v("恭喜！這時候你已經成功在 SDN 環境讓兩台電腦溝通了！"),a("s",[t._v("有沒有回想到第一天學CCNA時的興奮呢哈")])]),t._v(" "),a("h2",{attrs:{id:"觀察-controller-啟動時和-switch-的交涉訊息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#觀察-controller-啟動時和-switch-的交涉訊息"}},[t._v("#")]),t._v(" 觀察 Controller 啟動時和 Switch 的交涉訊息")]),t._v(" "),a("p",[t._v("我們會透過 "),a("code",[t._v("tcpdump")]),t._v(" 監聽封包，並輸出檔案至 Wireshark 讀取。因為容器中的檔案系統會隨著容器生命週期存亡，因此要透過 Volume 使容器中的檔案系統和本機的某個資料夾建立連結。砍掉剛才的容器，先建立一個存放"),a("code",[t._v("tcpdump")]),t._v(" 輸出 pcap 檔的資料夾，用下面的指令建立一個新的：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" ~/tcpdump\ndocker run -it --rm --privileged -e "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("DISPLAY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n             -v /tmp/.X11-unix:/tmp/.X11-unix "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n             -v /lib/modules:/lib/modules "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n             -v ~/tcpdump:/tcpdump "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n             iwaseyusuke/mininet\n")])])]),a("p",[t._v("接著我們需要至少3個 CLI 視窗，方便操作。我是使用 Hyper Terminal 操作，分割4個視窗很方便。其中3個都"),a("code",[t._v("exec")]),t._v("到 Container 裡面。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/XCik8CR.png",alt:""}})]),t._v(" "),a("p",[t._v("首先啟動 Controller，讓控制器在 localhost 的 6633 port 執行：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("root@13559bb74f97:~# ovs-testcontroller ptcp:6633 &\n[1] 89\nroot@13559bb74f97:~#\n")])])]),a("p",[t._v("然後另一個視窗開 tcpdump：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("root@13559bb74f97:~# tcpdump -i lo -w /tcpdump/take1.pcap\ntcpdump: listening on lo, link-type EN10MB (Ethernet), capture size 262144 bytes\n")])])]),a("p",[t._v("接著啟動 Mininet：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("root@13559bb74f97:~# mn --topo single,3 --mac --switch ovsk --controller remote\n")])])]),a("p",[t._v("這時候 ping 看看，可以通：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("mininet"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" h1 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ping")]),t._v(" -c4 h2\n")])])]),a("p",[t._v("結束 tcpdump，將檔案放進 Wireshark 研究封包")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/1ihFAFw.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"startup-訊息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#startup-訊息"}},[t._v("#")]),t._v(" Startup 訊息")]),t._v(" "),a("p",[t._v("從 Wireshark 中觀察到，整個 Mininet 啟動時，Switch 和 Controller 進行了許多來往。分別如下：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("傳送方向")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("OFPT_HELLO")]),t._v(" "),a("td",[t._v("Controller->Switch")]),t._v(" "),a("td",[t._v("Controller 傳送 Hello 訊息，裡面包含 Openlow 版本，例如版本 1.4 就是 0x05")])]),t._v(" "),a("tr",[a("td",[t._v("OFPT_HELLO")]),t._v(" "),a("td",[t._v("Switch->Controller")]),t._v(" "),a("td",[t._v("Switch 回傳支援的版本")])]),t._v(" "),a("tr",[a("td",[t._v("OFPT_FEATURES_REQUEST")]),t._v(" "),a("td",[t._v("Controller->Switch")]),t._v(" "),a("td",[t._v("Controller 向 Switch 要求支援的功能")])]),t._v(" "),a("tr",[a("td",[t._v("OFPT_SET_CONFIG")]),t._v(" "),a("td",[t._v("Controller->Switch")]),t._v(" "),a("td",[t._v("裡面有一個 Flags 欄位，我看起來應該是對 Switch 進行設定的部分")])]),t._v(" "),a("tr",[a("td",[t._v("OFPT_FEATURES_REPLY")]),t._v(" "),a("td",[t._v("Switch->Controller")]),t._v(" "),a("td",[t._v("Switch 將支援的功能回應給 Controller，如圖 "),a("img",{attrs:{src:"https://i.imgur.com/Pv5yTzS.png",alt:""}})])]),t._v(" "),a("tr",[a("td",[t._v("OFPT_PORT_STATUS")]),t._v(" "),a("td",[t._v("Switch->Controller")]),t._v(" "),a("td",[t._v("通知 Controller ，交換器上 port 的狀態")])])])]),t._v(" "),a("p",[t._v("接著是一些常見的封包， "),a("code",[t._v("OFPT_PACKET_IN")]),t._v(" 和 "),a("code",[t._v("OFPT_PACKET_OUT")]),t._v(" ，可能還會有 "),a("code",[t._v("OFPT_FLOW_MOD")]),t._v("。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("傳送方向")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("OFPT_PACKET_IN")]),t._v(" "),a("td",[t._v("Switch->Controller")]),t._v(" "),a("td",[t._v("當 Switch 不知道要把封包往哪送，則送給 Controller 處理")])]),t._v(" "),a("tr",[a("td",[t._v("OFPT_PACKET_OUT")]),t._v(" "),a("td",[t._v("Controller->Switch")]),t._v(" "),a("td",[t._v("Controller 送給 Switch 的封包")])]),t._v(" "),a("tr",[a("td",[t._v("OFPT_FLOW_MOD")]),t._v(" "),a("td",[t._v("Controller->Switch")]),t._v(" "),a("td",[t._v("指示 Switch 新增 Flow table 欄位")])]),t._v(" "),a("tr",[a("td",[t._v("OFPT_FLOW_EXPIRED")]),t._v(" "),a("td",[t._v("Switch->Controller")]),t._v(" "),a("td",[t._v("Flow 過期")])])])]),t._v(" "),a("p",[t._v("下一篇，也是這次期末報告的下半段，會介紹 Ryu Controller 的簡易操作和程式碼。")]),t._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[t._v("#")]),t._v(" References")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-docker-engine---community",target:"_blank",rel:"noopener noreferrer"}},[t._v("Install Docker Engine - Community"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://hub.docker.com/r/iwaseyusuke/mininet/",target:"_blank",rel:"noopener noreferrer"}},[t._v("iwaseyusuke/mininet - Docker Hub"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/mininet/openflow-tutorial/wiki",target:"_blank",rel:"noopener noreferrer"}},[t._v("Home · mininet/openflow-tutorial Wiki"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://medium.com/kokster/mount-volumes-into-a-running-container-65a967bee3b5",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mount volumes into a running container - Koki - Medium"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.openvswitch.org/support/dist-docs/ovs-testcontroller.8.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ovs-testcontroller - simple OpenFlow controller for testing"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://larrylu.blog/using-volumn-to-persist-data-in-container-a3640cc92ce4",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker 實戰系列（三）：使用 Volume 保存容器內的數據 - Larry・Blog"),a("OutboundLink")],1)])]),t._v(" "),a("Disqus")],1)}),[],!1,null,null,null);s.default=n.exports}}]);
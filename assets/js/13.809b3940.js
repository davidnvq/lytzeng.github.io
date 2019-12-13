(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{245:function(t,a,s){"use strict";s.r(a);var r=s(0),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"在實驗室自架-vmware-esxi-—-使用電腦教室汰換之電腦"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在實驗室自架-vmware-esxi-—-使用電腦教室汰換之電腦"}},[t._v("#")]),t._v(" 在實驗室自架 VMware ESXi — 使用電腦教室汰換之電腦")]),t._v(" "),s("PageEdit"),t._v(" "),s("div",[s("TagLinks")],1),t._v(" "),s("p",[t._v("自從離開前一間實習的公司，我就缺乏一個可以做 Lab 的地方，深刻感受到「伺服器戒斷症」。想當初公司是天天有 Server 可以使用，有 Cisco UCS、Hyperflex 和 Supermicro 的等等，離開後變成只能偶爾用 AWS Educate 帳號開個限制滿滿的 EC2。這次學校電腦教室有汰換下來的幾台電腦，聽說當初買一台要價 10 萬元，不過也是好幾年前了。規格不會太差，因此開始動起"),s("s",[t._v("歪")]),t._v("腦筋，抱了一台到座位旁開始研究。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.imgur.com/YZS8IRs.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"規格"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#規格"}},[t._v("#")]),t._v(" 規格")]),t._v(" "),s("p",[t._v("規格還不差：")]),t._v(" "),s("ol",[s("li",[t._v("CPU: Intel Xeon E5 2620")]),t._v(" "),s("li",[t._v("MB: ASUS Z9PE-D8 WS 支援雙CPU、四通道、單科 CPU 支援到 64GB RAM、自帶兩個 1G 網路介面")]),t._v(" "),s("li",[t._v("RAM: 原本很寒酸的差了一條 8GB (PC3-12800)，我打算怒擴到 32GB")]),t._v(" "),s("li",[t._v("顯卡：NVIDIA GeForce GTX 780， 其實我裝 ESXi 根本不太需要顯卡")]),t._v(" "),s("li",[t._v("SSD: 200GB")]),t._v(" "),s("li",[t._v("HDD: 1TB")]),t._v(" "),s("li",[t._v("噢易還原卡 (畢竟電腦教室的電腦，正常)")])]),t._v(" "),s("h2",{attrs:{id:"前置作業"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前置作業"}},[t._v("#")]),t._v(" 前置作業")]),t._v(" "),s("p",[t._v("首先當然是拔掉還原卡，然後格式化硬碟，製作開機 USB 來安裝 ESXi。到 VMware 官網下載了 VMware vSphere Hypervisor 6.7 (ESXi)，接著使用 "),s("a",{attrs:{href:"https://rufus.ie/",target:"_blank",rel:"noopener noreferrer"}},[t._v("rufus"),s("OutboundLink")],1),t._v(" 做成開機片。 附帶一提，ESXi 是可以免費使用的，灌完記得去剛才的下載頁面，上面會有免費版序號，再從 ESXi web GUI 貼上即可，沒有期限，但不能搭配 vCenter。")]),t._v(" "),s("p",[t._v("回想以前灌 ESXi 時，安裝過程會做格式化，所以我就懶的手動自己格式化一遍。")]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("結果，")]),t._v(" "),s("p",[t._v("這才是麻煩的開始。")])]),t._v(" "),s("h2",{attrs:{id:"踩雷"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#踩雷"}},[t._v("#")]),t._v(" 踩雷")]),t._v(" "),s("p",[t._v("安裝 ESXi 時，看進度條看很爽，結果重開機後出現：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.imgur.com/iCiHrIQ.png",alt:""}})]),t._v(" "),s("p",[t._v("這簡直被澆冷水！ Google 之後發現和 Windows 有關，"),s("a",{attrs:{href:"https://communities.vmware.com/thread/429698",target:"_blank",rel:"noopener noreferrer"}},[t._v("這個提問有人回答"),s("OutboundLink")],1),t._v("。由於這台電腦的硬碟是安裝 Win 10，而 Win 10 會複寫 "),s("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E4%B8%BB%E5%BC%95%E5%AF%BC%E8%AE%B0%E5%BD%95",target:"_blank",rel:"noopener noreferrer"}},[t._v("MBR"),s("OutboundLink")],1),t._v("分割表，使其有數值而非為0，所以造成 ESXi 錯誤，如下圖。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://communities.vmware.com/servlet/JiveServlet/showImage/2-2499870-50004/everpic-20150422_210158.367.png",alt:""}})]),t._v(" "),s("p",[t._v('好，所以這時候只得乖乖格式化硬碟了，而且經過查詢，格式化不見得會清除 MBR 的部分，為了保險起見，MBR 那 512 Bytes 最好全部變成"0"。但是作業系統已經被我弄掉了，要格式化除非拔下來，不然就是製作 Linux Live 的開機片，使用指令操作格式化。因為該硬碟看起來不好拔，我決定使用後者的方法。(幸好今天一口氣帶了3個隨身碟)')]),t._v(" "),s("h2",{attrs:{id:"救星：gparted"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#救星：gparted"}},[t._v("#")]),t._v(" 救星：GParted")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://gparted.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GParted"),s("OutboundLink")],1),t._v(" 是一個 partition editor，有圖形介面和 CLI，可以安裝到現有OS，也可以做成開機片 (正是我想要的！)。我到"),s("a",{attrs:{href:"https://gparted.org/download.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("這裡"),s("OutboundLink")],1),t._v("下載 iso 映像檔，加上"),s("a",{attrs:{href:"http://www.linuxliveusb.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("LinuxLive USB Creator"),s("OutboundLink")],1),t._v("，把 USB 做成開機片。從 BIOS 設定 USB 開機後出現畫面了。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.imgur.com/MYhwsgp.png",alt:""}})]),t._v(" "),s("p",[t._v("第一次進到 GParted 選擇第一個選項就被雷了，馬上沒有畫面訊號。後來我選了第三個選項 "),s("code",[t._v("Other modes of GParted")]),t._v("。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.imgur.com/JGuzlWQ.png",alt:""}})]),t._v(" "),s("p",[t._v("接著選擇 "),s("code",[t._v("GParted Live Safe graphics settings")]),t._v("，如果你發現你的電腦也不能開啟 GParted，請嘗試這個選項。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.imgur.com/bdbjNxf.png",alt:""}})]),t._v(" "),s("p",[t._v("成功進入了，可以敲 command 了")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.imgur.com/NPbQOeD.png",alt:""}})]),t._v(" "),s("p",[t._v("首先列出所有硬碟：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" /dev/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("sh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("d*\n/dev/sda  /dev/sdb "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])]),s("p",[t._v("接著猜猜看，我覺得目標是 "),s("code",[t._v("/dev/sda/")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fdisk")]),t._v(" -l /dev/sda\n")])])]),s("p",[s("img",{attrs:{src:"https://i.imgur.com/P0b9guO.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"處理mbr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#處理mbr"}},[t._v("#")]),t._v(" 處理MBR")]),t._v(" "),s("p",[t._v("看容量，果然是 "),s("code",[t._v("sda")]),t._v("，我先把他的 MBR 抹成 0。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dd")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/dev/zero "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("of")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/dev/sda "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("bs")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("512")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("count")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#然後再確認一次")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fdisk")]),t._v(" -l /dev/sda\n")])])]),s("p",[t._v("你會發現 "),s("code",[t._v("GPT Table is corrupted")]),t._v(" 的錯誤訊息消失了。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.imgur.com/voXIWDy.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"切磁區"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#切磁區"}},[t._v("#")]),t._v(" 切磁區")]),t._v(" "),s("p",[t._v("我想用 "),s("a",{attrs:{href:"https://zh.wikipedia.org/wiki/GUID%E7%A3%81%E7%A2%9F%E5%88%86%E5%89%B2%E8%A1%A8",target:"_blank",rel:"noopener noreferrer"}},[t._v("GPT"),s("OutboundLink")],1),t._v("，所以接著使用 "),s("code",[t._v("parted")]),t._v("工具進行磁區分割，這目的是為了讓 ESXi installer 更有可能認出這顆硬碟。所以我只切一個磁區，指定範圍從 1 到 240GB，它會自動掠過 MBR 和 GPT的部分，所以"),s("code",[t._v("START")]),t._v('可以放心打上"1"。')]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.imgur.com/D10gxIy.png",alt:""}})]),t._v(" "),s("p",[t._v("也可以用下面這行指令代替：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parted")]),t._v(" /dev/sda mklabel gpt mkpart P1 fat32 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" 240GB\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意：")]),t._v(" "),s("p",[t._v("使用這些指令請格外小心！")])]),t._v(" "),s("h3",{attrs:{id:"格式化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#格式化"}},[t._v("#")]),t._v(" 格式化")]),t._v(" "),s("p",[t._v("接著使用 "),s("code",[t._v("mkfs")]),t._v(" 格式化，保險起見使用 FAT32，不要用 ext2 或 ext3，文件有提到這可能會讓 ESXi 安裝失敗，至少我使用 FAT32 最後成功安裝了。VMware 會把硬碟格式化成 VMFS，但是安裝前也要注意格式，減少踩雷機率。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("mkfs.vfat -F "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),t._v(" /dev/sda1\n")])])]),s("p",[t._v("重新安裝，成功。看到熟悉的黃灰畫面。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.imgur.com/0LtDy0Z.png",alt:""}})]),t._v(" "),s("p",[t._v("折騰半天，終於成功在 LAB 擁有自己的 Server 了 "),s("s",[t._v("不用花自己的電費和硬體$$")])])],1)}),[],!1,null,null,null);a.default=e.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{265:function(a,t,s){"use strict";s.r(t);var e=s(0),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"想擁有一台伺服器等級-mac-macos-10-15-catalina-on-vmware-esxi-6-7"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#想擁有一台伺服器等級-mac-macos-10-15-catalina-on-vmware-esxi-6-7"}},[a._v("#")]),a._v(" 想擁有一台伺服器等級 Mac? macOS 10.15 Catalina on VMware ESXi 6.7")]),a._v(" "),s("PageEdit"),a._v(" "),s("div",[s("TagLinks")],1),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://i.imgur.com/BojArA4.png",loading:"lazy"}})]),a._v(" "),s("blockquote",[s("p",[a._v("蘋果真高價，何不自己架？ — me")])]),a._v(" "),s("p",[a._v("如果覺得"),s("s",[a._v("蘋果的刨絲器")]),a._v(" Mac Pro 很貴，或是說需要更進一步客製化硬體，何不考慮自己在伺服器上架設一台 Mac 呢？要多少 Storage 和 Memory 就有多少。總之，能省錢又不犧牲效能，就是爽！可以參考 "),s("a",{attrs:{href:"https://www.youtube.com/watch?v=mIB389tqzCI",target:"_blank",rel:"noopener noreferrer"}},[a._v("Linus Tech Tips 對 Mac Pro 的評論"),s("OutboundLink")],1),a._v("。網路上有一些關於 ESXi 安裝 macOS 的教學，但是大多是給 VMware Workstation，不然就是版本不夠新，這裡提供我親自嘗試過、可行的且最新的 ESXi 搭配 macOS 的安裝方式。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://i.imgur.com/MkTKNFE.png",loading:"lazy"}}),a._v("\n2019 Mac Pro 選好一點的規格，就跟買車一樣了。")]),a._v(" "),s("h2",{attrs:{id:"更新-esxi-6-7-至-update-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新-esxi-6-7-至-update-3"}},[a._v("#")]),a._v(" 更新 ESXi 6.7 至 Update 3")]),a._v(" "),s("p",[a._v("首先請更新 ESXi Server 到 Update 3，才能支援 MacOS 10.15。我們必須依序從 Update 1 更新到 Update 3。以下過程需要進行三遍，分別安裝三次 Update 的更新。")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("到 https://my.vmware.com/group/vmware/patch#search 找到對應版本，下載 zip 檔。Update 1 的檔名為 "),s("code",[a._v("update-from-esxi6.7-6.7_update01.zip")]),a._v("。")])]),a._v(" "),s("li",[s("p",[a._v("讓 Server 進入維護模式。\n"),s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://i.imgur.com/R2FS7Cj.png",loading:"lazy"}})])]),a._v(" "),s("li",[s("p",[a._v("zip 上傳至 Datastore，SSH 進入 ESXi，執行指令，注意檔名和路徑要改：")])])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("esxcli software vib "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -d /vmfs/volumes/datastore1/updates/update-from-esxi6.7-6.7_update01.zip\n")])])]),s("ol",{attrs:{start:"4"}},[s("li",[a._v("重新開機")])]),a._v(" "),s("h2",{attrs:{id:"安裝-unlocker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安裝-unlocker"}},[a._v("#")]),a._v(" 安裝 Unlocker")]),a._v(" "),s("p",[a._v("ESXi 6.7 必須使用 Unlocker 3.0 版才能讓 MacOS 成功開機，舊版本都會進入無限自動重開循環。"),s("strong",[a._v("如果你的 Server 安裝過 Unlocker，更新 ESXi 後需重新再安裝 Unlocker。")])]),a._v(" "),s("p",[s("strong",[a._v("下載 ESXi Unlocker 3.0 (二擇一):")])]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.insanelymac.com/forum/files/file/964-macos-unlocker-v30-for-vmware-esxi/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Unlocker 作者的載點，需登入會員"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://drive.google.com/file/d/14rkRT8cRavA8QxvTseSQjSUeJ-gZ3WfV/view?usp=sharing",target:"_blank",rel:"noopener noreferrer"}},[a._v("我的 Google Drive 載點"),s("OutboundLink")],1)])]),a._v(" "),s("p",[a._v("將 "),s("code",[a._v("esxi-unlocker-300.tgz")]),a._v(" 上傳至 ESXi，在自己電腦執行:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("scp")]),a._v(" /你的下載路徑/esxi-unlocker-300.tgz root@xxx.xxx.xxx.xxx:/vmfs/volumes/datastore1/\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /vmfs/volumes/datastore1/\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" xvf esxi-unlocker-300.tgz\n")])])]),s("p",[a._v("然後執行 "),s("code",[a._v("esxi-install.sh")]),a._v("，結束後重開機:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("chomod "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("777")]),a._v(" esxi-install.sh\n./esxi-install.sh\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("reboot")]),a._v(" -f\n")])])]),s("p",[a._v("Unlocker 安裝完畢後，可以執行"),s("code",[a._v("esxi-smctest.sh")]),a._v(" 檢查 Unlocker 是否成功安裝。成功安裝的話會有以下 Output：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("/bin/vmx\nsmcPresent = true\ncustom.vgz     false   38930360 B\n")])])]),s("h2",{attrs:{id:"macos-的-vmdk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#macos-的-vmdk"}},[a._v("#")]),a._v(" macOS 的 VMDK")]),a._v(" "),s("p",[a._v("接著我們會使用比較不同的安裝方式。有別於一般使用映像檔安裝，我們會先建立一個 VM，再將 macOS 的 VMDK 新增到該 VM。這樣開機時該虛擬硬碟就會被讀取。和 ISO 安裝相比，這是我目前嘗試過成功機率最高的方法。安裝的 macOS 版本是 10.15，請特別留意"),s("a",{attrs:{href:"https://www.vmware.com/resources/compatibility/pdf/VMware_GOS_Compatibility_Guide.pdf?fbclid=IwAR3TwlRY_63Q5KsiInF-1bnQyNi40OnpElkrZ9TMgfzXgwOST8FMB2MYKFY#page=6",target:"_blank",rel:"noopener noreferrer"}},[a._v("文件中"),s("OutboundLink")],1),a._v("有註明 ESXi 所支援的 macOS 版本。")]),a._v(" "),s("p",[s("strong",[a._v("VMDK 載點 (二擇一):")])]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://drive.google.com/drive/folders/1X8ImVEeM5GCvYgGEVifM21E-6Je7dHD3",target:"_blank",rel:"noopener noreferrer"}},[a._v("Geekrar Google Drive 載點"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://drive.google.com/file/d/1xHMtphpCj-EJr687_MQ0cSMlsKk9K-MY/view?usp=sharing",target:"_blank",rel:"noopener noreferrer"}},[a._v("我的 Google Drive 載點"),s("OutboundLink")],1)])]),a._v(" "),s("p",[a._v("把 VMDK 上傳到 ESXi，可以使用任何 UI 或 SCP。接著先使用 VMDK 來登錄虛體機器。\n接著我們要對 VMDK 動一點手腳，不然會開不起來，因此要使用"),s("code",[a._v("vmkfstools")]),a._v("轉換 VMDK。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /vmfs/volumes/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("datastore 名稱"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\nvmkfs -i macOS_Catalina_Final.vmdk -d thin macOS_Catalina_Final_new.vmdk\n")])])]),s("p",[a._v("接著開始建立新的虛擬機器。")]),a._v(" "),s("h2",{attrs:{id:"建立新的虛擬機器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#建立新的虛擬機器"}},[a._v("#")]),a._v(" 建立新的虛擬機器")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://i.imgur.com/apJi6c0.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("OS 請選擇 Apple macOS 10.14 即可。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://i.imgur.com/vGoO0XT.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("其實對於資源大小沒有別的要求，只要不要太小即可。接著在下面的畫面中，砍掉預設的硬碟，我們要在這裡新增剛剛轉換好的 VMDK 硬碟。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://i.imgur.com/jSDsoCv.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("選擇「新增磁碟」> 「新增現有磁碟」，如圖：")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://i.imgur.com/mihE5cW.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("接著選擇剛才轉換好的 VMDK "),s("code",[a._v("macOS_Catalina_Final_new.vmdk")])]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://i.imgur.com/Im7EMI8.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("接著「下一步」、「完成」，成功建立虛擬機器。")]),a._v(" "),s("h2",{attrs:{id:"修改-vmx-設定"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改-vmx-設定"}},[a._v("#")]),a._v(" 修改 VMX 設定")]),a._v(" "),s("p",[a._v("接著我們要修改 VMX 設定，SSH 進入 ESXi，"),s("code",[a._v("cd")]),a._v("到 VM 的位置。"),s("code",[a._v("[datastore 名稱]")]),a._v("請換成你的 datastore 名稱，"),s("code",[a._v("[虛擬機器名稱]")]),a._v("請換成你的 VM 名稱。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /vmfs/volumes/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("datastore 名稱"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("虛擬機器名稱"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'smc.version = \"0\"'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("虛擬機器名稱"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(".vmx\n")])])]),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://i.imgur.com/xyIxpjb.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("接著就可以開機了，開機成功的話會進入各種設定，之後就只要照流程走完即可。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://i.imgur.com/ThA71sp.png",loading:"lazy"}})]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://i.imgur.com/3wf0H3L.png",loading:"lazy"}})]),a._v(" "),s("h2",{attrs:{id:"在-macos-內安裝-vmware-tools"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在-macos-內安裝-vmware-tools"}},[a._v("#")]),a._v(" 在 macOS 內安裝 VMware tools")]),a._v(" "),s("p",[a._v("最後就剩安裝 VMware tools 的部分了，VMware Tools 提供 Guest OS 和 ESXi 的相容度，讓我們可以調整螢幕解析度、。到這個"),s("a",{attrs:{href:"http://softwareupdate.vmware.com/cds/vmw-desktop/fusion/11.1.0/13668589/packages/com.vmware.fusion.tools.darwin.zip.tar",target:"_blank",rel:"noopener noreferrer"}},[a._v("官方連結"),s("OutboundLink")],1),a._v("下載 VMware tools，解壓縮後把 "),s("code",[a._v("darwin.iso")]),a._v(" 檔上傳到 ESXi。")]),a._v(" "),s("p",[a._v("接著掛載"),s("code",[a._v("darwin.iso")]),a._v("，macOS 會自動讀取光碟。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://i.imgur.com/RnSlhC8.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v('直接點選 "Install VMware Tools" 並使用「下一步安裝法」。')]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://i.imgur.com/Ke5X0kX.png",loading:"lazy"}})]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://i.imgur.com/LMIzHuK.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("中間需要從設定那邊 Allow 一下，點選 Allow 即可。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://i.imgur.com/ebkv229.png",loading:"lazy"}})]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://i.imgur.com/kuqISrT.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("安裝完後重開機，即可使用。成功安裝就可以看見 ESXi 偵測到 VMware Tools：\n"),s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://i.imgur.com/5OBM3xJ.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("如果發現螢幕解析度沒有隨著調整視窗尺寸而改變，請試著提升虛擬顯示卡記憶體。\n"),s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://i.imgur.com/nRWrrGb.png",loading:"lazy"}})]),a._v(" "),s("h2",{attrs:{id:"references"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[a._v("#")]),a._v(" References")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.stevenannett.co.uk/2019/04/11/how-to-patch-your-vmware-esxi-6-7-server/",target:"_blank",rel:"noopener noreferrer"}},[a._v("How to patch your VMware ESXi 6.7 server - StevenAnnett.co.uk"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"http://blog.ilc.edu.tw/blog/blog/25793/post/105209/690915",target:"_blank",rel:"noopener noreferrer"}},[a._v("頭城國小資訊組 | VMware ESXi - 安裝 macOS Sierra 10.12.4"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"http://blog.sina.com.cn/s/blog_6452c6b40102x313.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("【VMware】失败 - “scsi0:0”的磁盘类型 2 不受支持或无效。请确保磁盘已导入_永无止境的Pasu_新浪博客"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://www.geekrar.com/install-macos-mojave-on-vmware/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Install macOS Mojave on VMware on Windows PC - Geekrar"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://www.insanelymac.com/forum/files/file/964-macos-unlocker-v30-for-vmware-esxi/",target:"_blank",rel:"noopener noreferrer"}},[a._v("macOS Unlocker V3.0 for VMware ESXi - Miscellaneous - InsanelyMac Forum"),s("OutboundLink")],1)])]),a._v(" "),s("Disqus")],1)}),[],!1,null,null,null);t.default=r.exports}}]);
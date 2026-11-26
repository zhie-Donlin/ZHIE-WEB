/*
 * 致一科技網站「可後台修改項目」清單與預設值(前台 index.html 與後台 manage-zhie-2024.html 共用)
 * ---------------------------------------------------------------
 * 重點:
 *  - 前台看得見的文字/圖片,每一項都在這裡有一個 key。
 *  - 資料庫表 site_settings (key, value) 有存值就用資料庫的,沒有就用這裡的預設值 def。
 *  - type: text=單行文字 / textarea=多行文字 / image=圖片 / toggle=勾選顯示(存 '1' 或 '0') / num=數字
 *          list=可新增/刪除的清單(存成 JSON 文字),fields 為每一筆裡的欄位。
 *  - 要新增一個可改的項目:在這裡加一筆,並在 index.html 對應位置加 data-k="key" 即可。
 *  - 交接給 MIS:改這個檔案 = 改預設值/後台欄位;日常改文字請用後台,不要改程式。
 */
var ZHIE_SCHEMA = [
{ id:'common', title:'網站共用(Logo・公司名・選單・頁尾)', fields:[
  {k:'site_title', label:'瀏覽器分頁標題', type:'text', def:'致一科技 ZHIE Technology — 專業顯示模組'},
  {k:'site_favicon', label:'網站小圖示(分頁上的小圖)', type:'image', def:'logo.png'},
  {k:'logo_img', label:'頂端 Logo 圖', type:'image', def:'logo.png'},
  {k:'alt_logo', label:'Logo 圖片說明文字(搜尋引擎/視障用,不會顯示)', type:'text', def:'ZHIE'},
  {k:'company_zh', label:'公司中文名(頂端)', type:'text', def:'致一科技有限公司'},
  {k:'company_en', label:'公司英文名(頂端)', type:'text', def:'ZHIE CO., LTD.'},
  {k:'nav_about', label:'選單:關於我們', type:'text', def:'關於我們'},
  {k:'nav_products', label:'選單:產品', type:'text', def:'產品'},
  {k:'nav_solutions', label:'選單:解決方案', type:'text', def:'解決方案'},
  {k:'nav_gallery', label:'選單:公司環境(有放照片才會出現)', type:'text', def:'公司環境'},
  {k:'nav_contact', label:'選單:聯絡我們(藍色按鈕)', type:'text', def:'聯絡我們'},
  {k:'footer_copy', label:'頁尾版權文字', type:'text', def:'© 2025 ZHIE CO., LTD. 致一科技有限公司'},
  {k:'footer_about', label:'頁尾連結:關於我們', type:'text', def:'關於我們'},
  {k:'footer_products', label:'頁尾連結:產品', type:'text', def:'產品'},
  {k:'footer_contact', label:'頁尾連結:聯絡', type:'text', def:'聯絡'}
]},
{ id:'hero', title:'首頁大橫幅', fields:[
  {k:'hero_badge', label:'小標籤', type:'text', def:'Since 2017 · LCD Module Expert'},
  {k:'hero_title_1', label:'大標題第一行(黑字)', type:'text', def:'專業顯示模組'},
  {k:'hero_title_2', label:'大標題第二行(藍字)', type:'text', def:'研發設計夥伴'},
  {k:'hero_desc', label:'說明文字', type:'textarea', def:'致一科技深耕 LCD Module 與電容式觸控屏設計開發，擁有超過 15 年光電產業經驗，為工業、醫療、車載等領域提供高品質客製化顯示解決方案。'},
  {k:'hero_btn1', label:'按鈕一文字(藍色)', type:'text', def:'瀏覽產品'},
  {k:'hero_btn2', label:'按鈕二文字(白色)', type:'text', def:'詢價聯繫'},
  {k:'hero_stats', label:'三個數字亮點(可增減)', type:'list', itemLabel:'亮點', max:6, fields:[
     {k:'num', label:'數字(例:15+)', type:'text'}, {k:'label', label:'說明(例:年光電產業經驗)', type:'text'}],
   def:[{num:'15+',label:'年光電產業經驗'},{num:'100+',label:'顯示模組型號'},{num:'100%',label:'客製化服務'}]},
  {k:'hero_img', label:'右側大圖', type:'image', def:''},
  {k:'alt_hero', label:'大圖圖片說明文字(不會顯示)', type:'text', def:'ZHIE TFT Display Module'},
  {k:'hero_img_ph', label:'大圖尚未上傳時顯示的字', type:'text', def:'首頁圖片可由後台上傳'}
]},
{ id:'about', title:'關於我們', fields:[
  {k:'about_title', label:'標題', type:'text', def:'由研發驅動的顯示專家'},
  {k:'about_desc', label:'介紹文字', type:'textarea', def:'致一科技由資深研發負責人於 2017 年創立，核心團隊擁有超過 15 年光電顯示產業資歷。專精於 LCD Module 與電容式觸控屏設計開發，整合內外部資源，提供品質第一、顧客滿意的高附加價值產品。'},
  {k:'about_img', label:'左側圖片', type:'image', def:''},
  {k:'about_img_scale', label:'圖片縮放(1=原大小,0.9=縮小一點)', type:'num', def:'1'},
  {k:'about_img_x', label:'圖片左右位置(正數往右,負數往左)', type:'num', def:'0'},
  {k:'about_img_y', label:'圖片上下位置(正數往下,負數往上)', type:'num', def:'0'},
  {k:'alt_about', label:'圖片說明文字(不會顯示)', type:'text', def:'關於我們'},
  {k:'about_img_ph', label:'圖片尚未上傳時顯示的字', type:'text', def:'關於我們圖片可由後台上傳'},
  {k:'about_points', label:'重點項目(可增減)', type:'list', itemLabel:'重點', max:9, fields:[
     {k:'icon', label:'圖示(貼一個表情符號,例:🔬)', type:'text'}, {k:'title', label:'標題', type:'text'}, {k:'desc', label:'說明', type:'textarea'}],
   def:[{icon:'🔬',title:'研發能力',desc:'從規格確認到量產交貨，提供完整一站式顯示解決方案'},
        {icon:'⚙️',title:'客製化設計',desc:'Mono LCM 及 TFT 彩色顯示模組，含周邊電子電路設計'},
        {icon:'🤝',title:'品質保證',desc:'嚴格品質管控，彈性生產，即時交貨'}]}
]},
{ id:'gallery', title:'公司環境照片(沒放照片,前台整區不顯示)', fields:[
  {k:'gallery_title', label:'區塊標題', type:'text', def:'公司環境'},
  {k:'gallery_desc', label:'區塊說明', type:'text', def:''},
  {k:'gallery_imgs', label:'環境照片(建議 4~8 張)', type:'list', itemLabel:'照片', max:8, fields:[
     {k:'img', label:'照片', type:'image'}, {k:'caption', label:'照片說明(可留空)', type:'text'}],
   def:[]}
]},
{ id:'products', title:'產品區(標題・分類・用字)', fields:[
  {k:'prod_title', label:'區塊標題', type:'text', def:'顯示模組產品'},
  {k:'prod_desc', label:'區塊說明', type:'text', def:'工業等級顯示解決方案，支援寬溫、高亮度、電容觸控等多元規格'},
  {k:'prod_cat_all', label:'分類按鈕:全部', type:'text', def:'全部'},
  {k:'prod_cats', label:'產品分類按鈕(可增減)', type:'list', itemLabel:'分類', max:12, fields:[
     {k:'name', label:'按鈕上顯示的字', type:'text'},
     {k:'value', label:'產品資料裡的分類名稱(新增產品時選的分類;要和產品一致,舊分類請勿亂改)', type:'text'}],
   def:[{name:'TFT 彩色',value:'TFT彩色'},{name:'MONO LCM',value:'MONO LCM'},{name:'觸控模組',value:'觸控模組'},{name:'客製化',value:'客製化'}]},
  {k:'txt_inch', label:'尺寸單位(例:吋)', type:'text', def:'吋'},
  {k:'txt_models', label:'尺寸卡片:型號數量單位(例:款型號)', type:'text', def:'款型號'},
  {k:'txt_count_unit', label:'列表:數量單位(例:款)', type:'text', def:'款'},
  {k:'txt_back', label:'返回按鈕', type:'text', def:'← 返回所有尺寸'},
  {k:'txt_no_img', label:'沒有圖片時的字', type:'text', def:'暫無圖片'},
  {k:'txt_empty', label:'分類下沒有產品時的字', type:'text', def:'此分類暫無產品'},
  {k:'txt_loading', label:'載入中的字', type:'text', def:'載入中...'},
  {k:'txt_load_fail', label:'載入失敗的字', type:'text', def:'載入失敗，請重新整理'},
  {k:'txt_tp_none', label:'沒有觸控的標示', type:'text', def:'無'},
  {k:'th_model', label:'表格欄名:型號', type:'text', def:'型號'},
  {k:'th_resolution', label:'表格欄名:解析度', type:'text', def:'解析度'},
  {k:'th_tp', label:'表格欄名:觸控', type:'text', def:'觸控'},
  {k:'th_brightness', label:'表格欄名:亮度', type:'text', def:'亮度'},
  {k:'th_interface', label:'表格欄名:介面', type:'text', def:'介面'},
  {k:'th_temp', label:'表格欄名:溫度範圍', type:'text', def:'溫度範圍'},
  {k:'txt_detail', label:'每列右側的「詳細」字樣', type:'text', def:'詳細 →'},
  {k:'modal_suffix', label:'詳細視窗標題後綴(例:顯示模組)', type:'text', def:'顯示模組'},
  {k:'modal_btn_inquiry', label:'詳細視窗按鈕:詢價', type:'text', def:'詢價這款產品'},
  {k:'modal_btn_close', label:'詳細視窗按鈕:關閉', type:'text', def:'關閉'},
  {k:'sp_panel', label:'規格名稱:Panel Size', type:'text', def:'Panel Size'},
  {k:'sp_resolution', label:'規格名稱:解析度', type:'text', def:'解析度'},
  {k:'sp_gray', label:'規格名稱:灰階', type:'text', def:'灰階'},
  {k:'sp_outline', label:'規格名稱:Outline', type:'text', def:'Outline'},
  {k:'sp_active', label:'規格名稱:Active Area', type:'text', def:'Active Area'},
  {k:'sp_brightness', label:'規格名稱:亮度', type:'text', def:'亮度'},
  {k:'sp_backlight', label:'規格名稱:背光條件', type:'text', def:'背光條件'},
  {k:'sp_driver', label:'規格名稱:Driver IC', type:'text', def:'Driver IC'},
  {k:'sp_interface', label:'規格名稱:Interface', type:'text', def:'Interface'},
  {k:'sp_pin', label:'規格名稱:Pin Out', type:'text', def:'Pin Out'},
  {k:'sp_temp', label:'規格名稱:操作溫度', type:'text', def:'操作溫度'},
  {k:'sp_note', label:'規格名稱:備註', type:'text', def:'備註'}
  /* 各尺寸卡片的照片(size_imgs)在後台「產品→尺寸照片」另有專用畫面 */
]},
{ id:'solutions', title:'行業解決方案', fields:[
  {k:'sol_title', label:'區塊標題', type:'text', def:'行業解決方案'},
  {k:'sol_desc', label:'區塊說明', type:'text', def:'針對不同應用場景提供專屬顯示解決方案'},
  {k:'sol_cards', label:'解決方案卡片(可增減)', type:'list', itemLabel:'卡片', max:12, fields:[
     {k:'icon', label:'圖示(貼一個表情符號)', type:'text'}, {k:'title', label:'標題', type:'text'},
     {k:'desc', label:'說明', type:'textarea'}, {k:'tags', label:'標籤(用逗號分隔)', type:'text'}],
   def:[{icon:'🏭',title:'工業自動化',desc:'HMI 面板、PLC 控制器、工業儀表、設備監控介面，支援寬溫設計 -40°C～85°C',tags:'HMI 面板,工業儀表,寬溫設計'},
        {icon:'🏥',title:'醫療設備',desc:'生命體征監測、手術設備、可攜式醫療儀器，符合高可靠性與抗干擾需求',tags:'生命監測,醫療顯示,高可靠性'},
        {icon:'🚗',title:'車載系統',desc:'儀表板顯示、車載娛樂、導航系統，符合車規級嚴苛環境需求',tags:'儀表板,車載娛樂,導航系統'}]}
]},
{ id:'contact', title:'聯絡我們與詢價表單', fields:[
  {k:'contact_title', label:'聯絡區標題', type:'text', def:'如有產品規格等相關問題，歡迎聯繫我們'},
  {k:'contact_desc', label:'聯絡區說明', type:'textarea', def:'無論標準規格選型或全客製化開發，我們的團隊都能提供專業建議與快速報價。'},
  {k:'show_email', label:'前台顯示 Email', type:'toggle', def:'1'},
  {k:'contact_email', label:'Email(顯示在前台)', type:'text', def:'info@zhietech.com'},
  {k:'show_person', label:'前台顯示聯絡人', type:'toggle', def:'0'},
  {k:'contact_person', label:'聯絡人(例:王先生 業務部)', type:'text', def:''},
  {k:'show_phone', label:'前台顯示電話', type:'toggle', def:'0'},
  {k:'contact_phone', label:'電話', type:'text', def:''},
  {k:'show_line', label:'前台顯示 LINE', type:'toggle', def:'0'},
  {k:'contact_line', label:'LINE ID', type:'text', def:''},
  {k:'show_web', label:'前台顯示網址', type:'toggle', def:'1'},
  {k:'contact_web', label:'網址', type:'text', def:'www.zhietech.com'},
  {k:'show_addr', label:'前台顯示地址(中文)', type:'toggle', def:'1'},
  {k:'contact_addr', label:'地址(中文)', type:'text', def:'台灣'},
  {k:'show_addr_en', label:'前台顯示地址(英文)', type:'toggle', def:'0'},
  {k:'contact_addr_en', label:'地址(英文)', type:'text', def:''},
  {k:'show_map', label:'前台顯示 Google 地圖', type:'toggle', def:'0'},
  {k:'map_query', label:'地圖搜尋文字(留空=用中文地址)', type:'text', def:''},
  {k:'inquiry_to', label:'詢價收件 Email(客戶按「送出詢價」後通知寄到這裡)', type:'text', def:'zhie@zhietech.com'},
  {k:'form_title', label:'表單標題', type:'text', def:'快速詢價'},
  {k:'form_company', label:'欄位名稱:公司名稱', type:'text', def:'公司名稱'},
  {k:'form_company_ph', label:'公司名稱欄位的提示字', type:'text', def:'您的公司名稱'},
  {k:'form_email', label:'欄位名稱:Email', type:'text', def:'Email'},
  {k:'form_email_ph', label:'Email 欄位的提示字', type:'text', def:'email@company.com'},
  {k:'form_msg', label:'欄位名稱:需求說明', type:'text', def:'需求說明'},
  {k:'form_msg_ph', label:'需求說明欄位的提示字', type:'text', def:'請描述您的顯示需求，例如：尺寸、解析度、觸控、數量...'},
  {k:'form_btn', label:'送出按鈕文字', type:'text', def:'送出詢價'},
  {k:'form_ok', label:'送出成功訊息', type:'text', def:'✅ 已收到您的詢價，我們將盡快與您聯繫！'},
  {k:'form_need_email', label:'沒填 Email 的提醒', type:'text', def:'請填入 Email'},
  {k:'form_fail', label:'送出失敗訊息', type:'text', def:'送出失敗，請稍後再試或直接來信聯繫'}
]}
];

/* 把 schema 攤平成 {key: 預設值} */
function zhieDefaults(){
  var d={};
  ZHIE_SCHEMA.forEach(function(s){s.fields.forEach(function(f){d[f.k]=f.def;});});
  return d;
}
/* 把資料庫讀到的 {key:value} 與預設值合併;list 類存的是 JSON 文字 */
function zhieMerge(raw){
  var d=zhieDefaults(), out={};
  ZHIE_SCHEMA.forEach(function(s){s.fields.forEach(function(f){
    var v=raw&&raw[f.k];
    if(v===undefined||v===null){out[f.k]=d[f.k];return;}
    if(f.type==='list'){try{var j=JSON.parse(v);out[f.k]=Array.isArray(j)?j:d[f.k];}catch(e){out[f.k]=d[f.k];}}
    else out[f.k]=v;
  });});
  return out;
}

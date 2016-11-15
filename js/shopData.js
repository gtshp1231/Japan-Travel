$(function() {
	$('.travel1').click(function() {
		$('#spotPhoto1').attr('src', 'media/ueno1.jpg');
		$('#spotPhoto1').attr('alt', '上野公園');
		$('#photoCaption1').text('');
		$('#spotPhoto2').attr('src', 'media/ueno2.jpg');
		$('#spotPhoto2').attr('alt', '上野公園');
		$('#photoCaption2').text('');
		$('#spotPhoto3').attr('src', 'media/ueno3.jpg');
		$('#spotPhoto3').attr('alt', '上野公園');
		$('#photoCaption3').text('');
		$('#spotName').text('上野公園');
		$('#spotPhone').text('03-3828-5644');
		$('#spotAddr').text('東京都台東区上野公園・池之端三丁目');
		$('#spotTimeTitle').text('營業時間');
		$('#spotTime').text('05:00~23:00');
		$('#spotLink').attr('href', 'http://www.kensetsu.metro.tokyo.jp/toubuk/ueno/index_top.html');
		$('#spotLinkText').text('前往官方網站');
		$('#spotDescription').text('上野公園，是日本第一座公園，佔地廣大，約53萬平方公尺。每到賞花季節，公園內的櫻花爭相盛開，形成絕美的景色，這裡可說是東京最高人氣的賞花景點！即便不是賞花季節，也很適合來這兒散散步，若是親子旅行，還可以到鄰近的上野動物園走走喔～');
		$('#spotMap').attr('src', makeMap('上野公園'));
	});

	$('.travel2').click(function() {
		$('#spotPhoto1').attr('src', 'media/skytree1.jpg');
		$('#spotPhoto1').attr('alt', '晴空塔');
		$('#photoCaption1').text('');
		$('#spotPhoto2').attr('src', 'media/skytree2.jpg');
		$('#spotPhoto2').attr('alt', '晴空塔');
		$('#photoCaption2').text('');
		$('#spotPhoto3').attr('src', 'media/skytree3.jpg');
		$('#spotPhoto3').attr('alt', '晴空塔');
		$('#photoCaption3').text('');
		$('#spotName').text('晴空塔');
		$('#spotPhone').text('無');
		$('#spotAddr').text('東京都墨田區押上1丁目1-2');
		$('#spotTimeTitle').text('營業時間');
		$('#spotTime').text('8:00~22:00');
		$('#spotLink').attr('href', 'http://www.tokyo-skytree.jp/index.html');
		$('#spotLinkText').text('前往官方網站');
		$('#spotDescription').text('東京晴空塔，又稱東京天空樹、新東京鐵塔，是東京最高的建築物，也是東京的新地標。登上距離地面350公尺高的塔頂，白天能俯瞰整個東京市區，晚上能欣賞繁華的東京夜景！除此之外，塔內還有好多好吃、好逛的小店，絕對可以讓人耗一整天啊！');
		$('#spotMap').attr('src', makeMap('晴空塔'));
	});

	$('.travel3').click(function() {
		$('#spotPhoto1').attr('src', 'media/akihabara1.jpg');
		$('#spotPhoto1').attr('alt', '秋葉原');
		$('#photoCaption1').text('');
		$('#spotPhoto2').attr('src', 'media/akihabara2.jpg');
		$('#spotPhoto2').attr('alt', '秋葉原');
		$('#photoCaption2').text('');
		$('#spotPhoto3').attr('src', 'media/akihabara3.jpg');
		$('#spotPhoto3').attr('alt', '秋葉原');
		$('#photoCaption3').text('');
		$('#spotName').text('秋葉原');
		$('#spotPhone').text('依店家');
		$('#spotAddr').text('山手線「秋葉原駅」，交會線含JR山手線、JR京濱東北線、JR總武線、筑波快線、地鐵日比谷線');
		$('#spotTimeTitle').text('營業時間');
		$('#spotTime').text('依店家');
		$('#spotLink').attr('href', 'http://www.gotokyo.org/tc/tourists/areas/areamap/akihabara.html');
		$('#spotLinkText').text('前往官方網站（東京觀光官方網站）');
		$('#spotDescription').text('秋葉原是以秋葉原車站為中心，以大量電器賣場、商城與資訊產業企業聚集而聞名的電子商圈。在這裡除了琳琅滿目的電器用品，還有許多動漫的周邊商品、經典模型，是喜愛日本動漫文化的旅客絕不錯過的聖地。');
		$('#spotMap').attr('src', makeMap('秋葉原駅'));
	});

	$('.travel4').click(function() {
		$('#spotPhoto1').attr('src', 'media/meiji1.jpg');
		$('#spotPhoto1').attr('alt', '明治神宮');
		$('#photoCaption1').text('');
		$('#spotPhoto2').attr('src', 'media/meiji2.jpg');
		$('#spotPhoto2').attr('alt', '明治神宮');
		$('#photoCaption2').text('');
		$('#spotPhoto3').attr('src', 'media/meiji3.jpg');
		$('#spotPhoto3').attr('alt', '明治神宮');
		$('#photoCaption3').text('');
		$('#spotName').text('明治神宮');
		$('#spotPhone').text('03-3379-5511');
		$('#spotAddr').text('東京都澀谷區代代木神園町1-1');
		$('#spotTimeTitle').text('營業時間');
		$('#spotTime').text('依月份不同，約為6:00~17:00');
		$('#spotLink').attr('href', 'http://www.meijijingu.or.jp/index.html');
		$('#spotLinkText').text('前往官方網站');
		$('#spotDescription').text('為悼念明治天皇與昭憲皇太后，於1920年創建的神社。在創建時，由日本全國進獻約10萬株樹木組成，是一處人工樹林，也是東京市中心除了皇居之外最大的一塊綠地。每年初次參拜的人數為日本首位。');
		$('#spotMap').attr('src', makeMap('明治神宮'));
	});

	$('.travel5').click(function() {
		$('#spotPhoto1').attr('src', 'media/omote1.jpg');
		$('#spotPhoto1').attr('alt', '表參道');
		$('#photoCaption1').text('');
		$('#spotPhoto2').attr('src', 'media/omote2.jpg');
		$('#spotPhoto2').attr('alt', '表參道');
		$('#photoCaption2').text('');
		$('#spotPhoto3').attr('src', 'media/omote3.jpg');
		$('#spotPhoto3').attr('alt', '表參道');
		$('#photoCaption3').text('');
		$('#spotName').text('表參道');
		$('#spotPhone').text('依店家');
		$('#spotAddr').text('東京Metro地鐵銀座線、千代田線、半藏門線「表參道站」');
		$('#spotTimeTitle').text('營業時間');
		$('#spotTime').text('依店家');
		$('#spotLink').attr('href', 'http://www.gotokyo.org/tc/tourists/areas/areamap/harajuku.html');
		$('#spotLinkText').text('前往官方網站（東京觀光官方網站）');
		$('#spotDescription').text('原宿表參道、竹下通一帶為著名的逛街聖地，表參道聚集許多國際知名品牌，竹下通則販賣時下流行的衣物與飾品，想體驗日本流行文化，絕對要來這裡好好逛逛。');
		$('#spotMap').attr('src', makeMap('表參道駅'));
	});

	$('.travel6').click(function() {
		$('#spotPhoto1').attr('src', 'media/disney1.jpg');
		$('#spotPhoto1').attr('alt', '東京迪士尼樂園');
		$('#photoCaption1').text('');
		$('#spotPhoto2').attr('src', 'media/disney2.jpg');
		$('#spotPhoto2').attr('alt', '東京迪士尼樂園');
		$('#photoCaption2').text('');
		$('#spotPhoto3').attr('src', 'media/disney3.jpg');
		$('#spotPhoto3').attr('alt', '東京迪士尼樂園');
		$('#photoCaption3').text('');
		$('#spotName').text('東京迪士尼樂園');
		$('#spotPhone').text('045-330-5211');
		$('#spotAddr').text('千葉縣浦安市舞濱');
		$('#spotTimeTitle').text('營業時間');
		$('#spotTime').text('根據星期、季節不同');
		$('#spotLink').attr('href', 'http://www.tokyodisneyresort.jp/tc/');
		$('#spotLinkText').text('前往官方網站');
		$('#spotDescription').text('大朋友小朋友最愛去的地方！東京迪士尼分成東京迪士尼樂園和東京迪士尼海洋兩大主題樂園，園區內好玩的遊樂設施玩一整天還嫌不夠，有時間的旅客還可選擇在園區內住宿，好好體驗這個實現愛與夢想的夢幻國度。');
		$('#spotMap').attr('src', makeMap('東京迪士尼樂園'));
	});

	$('.food1').click(function() {
		$('#spotPhoto1').attr('src', 'media/tsuna1.jpg');
		$('#spotPhoto1').attr('alt', '新宿つな八');
		$('#photoCaption1').text('');
		$('#spotPhoto2').attr('src', 'media/tsuna2.jpg');
		$('#spotPhoto2').attr('alt', '新宿つな八');
		$('#photoCaption2').text('');
		$('#spotPhoto3').attr('src', 'media/tsuna3.jpg');
		$('#spotPhoto3').attr('alt', '新宿つな八');
		$('#photoCaption3').text('');
		$('#spotName').text('新宿つな八');
		$('#spotPhone').text('03-3352-1012');
		$('#spotAddr').text('東京都新宿区新宿3-31-8');
		$('#spotTimeTitle').text('營業時間');
		$('#spotTime').text('11:00~22:30');
		$('#spotLink').attr('href', 'http://www.tunahachi.co.jp/index.html');
		$('#spotLinkText').text('前往官方網站');
		$('#spotDescription').text('新宿超美味天婦羅老店，新宿つな八的總本店不管什麼時候都能看到排隊人潮。師傅憑藉多年的技術，炸出酥脆而不膩口的天婦羅，多種海鮮和蔬菜天婦羅滿足每個饕客的胃，來新宿必吃！');
		$('#spotMap').attr('src', makeMap('新宿つな八'));
	});

	$('.food2').click(function() {
		$('#spotPhoto1').attr('src', 'media/oyako1.jpg');
		$('#spotPhoto1').attr('alt', '鳥つね自然洞');
		$('#photoCaption1').text('');
		$('#spotPhoto2').attr('src', 'media/oyako2.jpg');
		$('#spotPhoto2').attr('alt', '鳥つね自然洞');
		$('#photoCaption2').text('');
		$('#spotPhoto3').attr('src', 'media/oyako3.jpg');
		$('#spotPhoto3').attr('alt', '鳥つね自然洞');
		$('#photoCaption3').text('');
		$('#spotName').text('鳥つね自然洞');
		$('#spotPhone').text('03-5818-3566');
		$('#spotAddr').text('東京都千代田区外神田5-5-2');
		$('#spotTimeTitle').text('營業時間');
		$('#spotTime').text('11:30~13:30 17:30~21:00');
		$('#spotLink').attr('href', '#');
		$('#spotLinkText').text('此店無官方網站');
		$('#spotDescription').text('位於秋葉原附近的鳥つね自然洞可是大有來頭，它曾登上「黃金傳說」東京前20名蓋飯排行榜的第一名。限量的特上親子丼從雞肉、蛋、米飯，甚至洗米用的水全都是精挑細選的高級食材，讓人好吃到哭出來！');
		$('#spotMap').attr('src', makeMap('鳥つね自然洞'));
	});

	$('.food3').click(function() {
		$('#spotPhoto1').attr('src', 'media/tsukiji1.jpg');
		$('#spotPhoto1').attr('alt', '築地市場');
		$('#photoCaption1').text('');
		$('#spotPhoto2').attr('src', 'media/tsukiji2.jpg');
		$('#spotPhoto2').attr('alt', '築地市場');
		$('#photoCaption2').text('');
		$('#spotPhoto3').attr('src', 'media/tsukiji3.jpg');
		$('#spotPhoto3').attr('alt', '築地市場');
		$('#photoCaption3').text('');
		$('#spotName').text('築地市場');
		$('#spotPhone').text('依店舖');
		$('#spotAddr').text('都営大江戸線「築地市場駅」A1出口徒步1分／東京metro日比谷線「築地駅」1號、2號出口徒步1分');
		$('#spotTimeTitle').text('營業時間');
		$('#spotTime').text('依店舖');
		$('#spotLink').attr('href', 'http://www.tsukiji.or.jp/index.html');
		$('#spotLinkText').text('前往官方網站');
		$('#spotDescription').text('築地市場是東京最知名的傳統市場，也是日本最大的魚市場。除了新鮮漁獲，築地市場的美食琳琅滿目，壽司、玉子燒、生魚片蓋飯等等，許多超人氣名店聚集於此，另外還能體驗日本傳統市場的真實風貌。');
		$('#spotMap').attr('src', makeMap('築地市場'));
	});

	$('.food4').click(function() {
		$('#spotPhoto1').attr('src', 'media/unagi1.jpg');
		$('#spotPhoto1').attr('alt', '御徒町天ぷら酒処「天正」');
		$('#photoCaption1').text('圖片來源／天正官方臉書');
		$('#spotPhoto2').attr('src', 'media/unagi2.jpg');
		$('#spotPhoto2').attr('alt', '御徒町天ぷら酒処「天正」');
		$('#photoCaption2').text('圖片來源／天正官方臉書');
		$('#spotPhoto3').attr('src', 'media/unagi3.jpg');
		$('#spotPhoto3').attr('alt', '御徒町天ぷら酒処「天正」');
		$('#photoCaption3').text('圖片來源／天正官方臉書');
		$('#spotName').text('御徒町天ぷら酒処「天正」');
		$('#spotPhone').text('03-3831-9553');
		$('#spotAddr').text('東京都台東区台東3-8-8');
		$('#spotTimeTitle').text('營業時間');
		$('#spotTime').text('11:00~13:30　17:30~22:00');
		$('#spotLink').attr('href', 'http://www.okachimachi-tenmasa.com/');
		$('#spotLinkText').text('前往官方網站');
		$('#spotDescription').text('魄力滿點的鰻魚天丼！天正距離上野約十多分鐘的步行距離，是內行人才知道的小店。鰻魚天丼CP值爆表，一大塊鰻魚炸的金黃酥脆，加上其他海鮮和野菜炸物，放在香噴噴的飯上，獨門醬汁畫龍點睛，兼具味覺與視覺的享受～');
		$('#spotMap').attr('src', makeMap('御徒町天ぷら酒処「天正」'));
	});

	$('.food5').click(function() {
		$('#spotPhoto1').attr('src', 'media/dozeu1.jpg');
		$('#spotPhoto1').attr('alt', '駒形どぜう');
		$('#photoCaption1').text('');
		$('#spotPhoto2').attr('src', 'media/dozeu2.jpg');
		$('#spotPhoto2').attr('alt', '駒形どぜう');
		$('#photoCaption2').text('');
		$('#spotPhoto3').attr('src', 'media/dozeu3.jpg');
		$('#spotPhoto3').attr('alt', '駒形どぜう');
		$('#photoCaption3').text('');
		$('#spotName').text('駒形どぜう');
		$('#spotPhone').text('03-3842-4001');
		$('#spotAddr').text('東京都台東区駒形1-7-12');
		$('#spotTimeTitle').text('營業時間');
		$('#spotTime').text('11:00~21:00');
		$('#spotLink').attr('href', 'http://www.dozeu.com');
		$('#spotLinkText').text('前往官方網站');
		$('#spotDescription').text('江戶時期至今200多年的老店，賣的是東京的鄉土料理：泥鰍火鍋。可別被泥鰍嚇著了，江戶人吃泥鰍的習俗已久，現在更是升級為高級料理。淺鍋內擺入數尾泥鰍，與醬汁和蔥花一起燉煮，想嚐嚐這特別的滋味嗎？');
		$('#spotMap').attr('src', makeMap('駒形どぜう'));
	});

	$('.hotel1').click(function() {
		$('#spotPhoto1').attr('src', 'media/narita1.jpg');
		$('#spotPhoto1').attr('alt', '成田機場旅館');
		$('#photoCaption1').text('圖片來源／成田機場旅館官網');
		$('#spotPhoto2').attr('src', 'media/narita2.jpg');
		$('#spotPhoto2').attr('alt', '成田機場旅館');
		$('#photoCaption2').text('圖片來源／成田機場旅館官網');
		$('#spotPhoto3').attr('src', 'media/narita3.jpg');
		$('#spotPhoto3').attr('alt', '成田機場旅館');
		$('#photoCaption3').text('圖片來源／成田機場旅館官網');
		$('#spotName').text('成田機場旅館');
		$('#spotPhone').text('0476-32-1212');
		$('#spotAddr').text('千葉県成田市成田国際空港内');
		$('#spotTimeTitle').text('價格範圍');
		$('#spotTime').text('4000~10000日圓');
		$('#spotLink').attr('href', 'http://www.apo-resthouse.com');
		$('#spotLinkText').text('前往官方網站');
		$('#spotDescription').text('廉價航空便宜，許多人喜歡搭乘，但有些廉價航空的班機時間不是很早就是很晚，有些人可能會選擇直接睡在機場大廳，但現在你可以考慮成田機場旅館。它位於成田機場一、二航站之間，步行至一航站5分鐘，至二航站10分鐘，是搭乘廉航時的好選擇。');
		$('#spotMap').attr('src', makeMap('Narita Airport Rest House'));
	});

	$('.hotel2').click(function() {
		$('#spotPhoto1').attr('src', 'media/kadoya1.jpg');
		$('#spotPhoto1').attr('alt', 'Kadoya Hotel');
		$('#photoCaption1').text('圖片來源／Kadoya Hotel官網');
		$('#spotPhoto2').attr('src', 'media/kadoya2.jpg');
		$('#spotPhoto2').attr('alt', 'Kadoya Hotel');
		$('#photoCaption2').text('圖片來源／Kadoya Hotel官網');
		$('#spotPhoto3').attr('src', 'media/kadoya3.jpg');
		$('#spotPhoto3').attr('alt', 'Kadoya Hotel');
		$('#photoCaption3').text('圖片來源／Kadoya Hotel官網');
		$('#spotName').text('Kadoya Hotel');
		$('#spotPhone').text('03-3346-2561');
		$('#spotAddr').text('東京都新宿区西新宿1-23-1');
		$('#spotTimeTitle').text('價格範圍');
		$('#spotTime').text('9500~17500日圓');
		$('#spotLink').attr('href', 'http://www.kadoya-hotel.co.jp/?viewmode=pc');
		$('#spotLinkText').text('前往官方網站');
		$('#spotDescription').text('Kadoya Hotel位於新宿西口，地理位置極為方便，從新宿西口步行5分鐘內即可到達，都營大江戶線也在步行範圍之內，去哪裡都很方便。除此之外飯店附近還有大型電器賣場、24小時便利商店等，生活機能非常良好！');
		$('#spotMap').attr('src', makeMap('Kadoya Hotel'));
	});

	$('.hotel3').click(function() {
		$('#spotPhoto1').attr('src', 'media/mitsui1.jpg');
		$('#spotPhoto1').attr('alt', '上野三井花園酒店');
		$('#photoCaption1').text('圖片來源／上野三井花園酒店官網');
		$('#spotPhoto2').attr('src', 'media/mitsui2.jpg');
		$('#spotPhoto2').attr('alt', '上野三井花園酒店');
		$('#photoCaption2').text('圖片來源／上野三井花園酒店官網');
		$('#spotPhoto3').attr('src', 'media/mitsui3.jpg');
		$('#spotPhoto3').attr('alt', '上野三井花園酒店');
		$('#photoCaption3').text('圖片來源／上野三井花園酒店官網');
		$('#spotName').text('上野三井花園酒店');
		$('#spotPhone').text('03-3839-1131');
		$('#spotAddr').text('東京都台東区東上野3-19-7');
		$('#spotTimeTitle').text('價格範圍');
		$('#spotTime').text('14000~43000日圓');
		$('#spotLink').attr('href', 'http://www.gardenhotels.co.jp/ueno/');
		$('#spotLinkText').text('前往官方網站');
		$('#spotDescription').text('上野區域有小吃、藥妝多的阿美橫町，還有知名的上野公園與動物園，想逛電器也有大型電器賣場，要什麼有什麼。座落在上野的三井花園酒店屬於較高級的飯店，住在這不僅能好好放鬆身心，外頭也有許多好吃好玩的地方～');
		$('#spotMap').attr('src', makeMap('上野三井花園酒店'));
	});

	$('.hotel4').click(function() {
		$('#spotPhoto1').attr('src', 'media/prince1.jpg');
		$('#spotPhoto1').attr('alt', '品川王子大飯店');
		$('#photoCaption1').text('圖片來源／品川王子大飯店官網');
		$('#spotPhoto2').attr('src', 'media/prince2.jpg');
		$('#spotPhoto2').attr('alt', '品川王子大飯店');
		$('#photoCaption2').text('圖片來源／品川王子大飯店官網');
		$('#spotPhoto3').attr('src', 'media/prince3.jpg');
		$('#spotPhoto3').attr('alt', '品川王子大飯店');
		$('#photoCaption3').text('圖片來源／品川王子大飯店官網');
		$('#spotName').text('品川王子大飯店');
		$('#spotPhone').text('03-3440-1111');
		$('#spotAddr').text('東京都港區高輪4-10-30');
		$('#spotTimeTitle').text('價格範圍');
		$('#spotTime').text('7000~12000日圓');
		$('#spotLink').attr('href', 'http://www.princehotels.com/shinagawa/zh-tw/');
		$('#spotLinkText').text('前往官方網站');
		$('#spotDescription').text('品川王子大飯店位於JR品川車站的正對面，而品川車站位於山手線上，山手線環繞東京市區，去哪裡都方便。而飯店本身就像大型百貨一樣，結合了百貨公司、電影院、水族館、保齡球館等等，想住在這一整天都不出門也可以！');
		$('#spotMap').attr('src', makeMap('品川プリンスホテル'));
	});

	$('.hotel5').click(function() {
		$('#spotPhoto1').attr('src', 'media/gate1.jpg');
		$('#spotPhoto1').attr('alt', 'The Gate Hotel 雷門');
		$('#photoCaption1').text('圖片來源／The Gate Hotel官網');
		$('#spotPhoto2').attr('src', 'media/gate2.jpg');
		$('#spotPhoto2').attr('alt', 'The Gate Hotel 雷門');
		$('#photoCaption2').text('圖片來源／The Gate Hotel官網');
		$('#spotPhoto3').attr('src', 'media/gate3.jpg');
		$('#spotPhoto3').attr('alt', 'The Gate Hotel 雷門');
		$('#photoCaption3').text('圖片來源／The Gate Hotel官網');
		$('#spotName').text('The Gate Hotel 雷門');
		$('#spotPhone').text('03-5826-3877');
		$('#spotAddr').text('東京都台東区雷門2-16-11');
		$('#spotTimeTitle').text('價格範圍');
		$('#spotTime').text('18000~81000日圓');
		$('#spotLink').attr('href', 'http://www.gate-hotel.jp');
		$('#spotLinkText').text('前往官方網站');
		$('#spotDescription').text('淺草雷門是東京的代表性景點之一，不遠處還有晴空塔，住在這裡要到達這些景點就十分方便。The Gate Hotel於2012年夏天剛開幕，算是很新的飯店，房間大又富有設計感，更棒的是，從窗戶就可看到清楚的晴空塔！');
		$('#spotMap').attr('src', makeMap('The Gate Hotel 雷門'));
	});
});

function makeMap(spot) {
	var map = 'https://www.google.com/maps/embed/v1/place?q=' + spot + '&key=AIzaSyA-wsm5_0EBAhZrX1u8llsVeAkOvrXs2ug';
	return map;
}
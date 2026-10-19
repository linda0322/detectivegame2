const storyData = [
  {
    type: "dialogue",
    portrait: "👵🏻 Agatha Christie \n 聖誕節謀殺案 The Christmas Tragedy",
    filter: false
  },
  {
    type: "dialogue",
    text: "你是 Miss Marple，一位明察秋毫的老小姐，也是 Tuesday Night Club 的成員。Tuesday Night Club 的成員喜歡在星期二晚上聚會，每人會講一個其他人沒聽過的故事。",
    portrait: "🔍 你",
    filter: false
  },
  {
    type: "quiz",
    question: "【詞語理解】「明察秋毫」是甚麼意思？",
    options: [
      "感官敏銳，比其他人更快感受到秋意",
      "觀察力強，能看到細微之處",
      "視力出眾，能看到別人肉眼看不見的東西"
    ],
    answer: 1,
    points: 10,
    explanation: "答對了！"
  },
  {
    type: "writing",
    words: [
      { term: "觀察力", remarks: "power of observation"},
      { term: "想像力", remarks: "imagination"},
      { term: "物外之趣", remarks: "pleasure beyond the object itself"},
      { term: "藐小微物", remarks: "tiny things"}
    ],
    pointsPerWord: 150
  },
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: false,
    text: "今天分享故事的人是你。"
  },
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: false,
    text: "我曾被捲入（dragged into）一場悲劇，事情發生在一所水療院（hydro）裡。」"
  },
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: false,
    text: "第一眼看到 Mr. Sanders，我就知道他想擺脫妻子。"
  },
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: false,
    text: "Mr. Sanders 是個高大英俊、臉色紅潤的男人，與周圍的人都很合得來，但妻子 Gladys 就不那麼討人喜歡了。我毫不懷疑 Mr. Sanders 想離開她。",
  },
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: false,
    text: "第一眼看到 Mr. Sanders，就發現他有點奇怪。那是在擠擁的電車上，我們下樓梯時，Mr. Sanders 突然倒向妻子，讓妻子差點頭朝下跌倒，幸虧售票員及時抓住了她！Mr. Sanders 曾長時間在商船工作，怎麼可能這麼容易就站不穩？那絕不是意外！",
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 老警察 Henry",
    filter: false,
    text: "我認為這是你的想像，Miss Marple。",
  },
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: false,
    text: "我知道這聽起來有點武斷（arbitrary），但請你繼續聽下去。",
  },
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: false,
    text: "我相信自己的判斷，另一次意外使我對此更深信不疑。當我知道有一位幸福的已婚婦女馬上就會被謀殺，我該怎麼做，Henry？",
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 老警察 Henry",
    filter: false,
    text: "Miss Marple，你讓我很吃驚。",
  },
  {
    type: "quiz",
    question: "為甚麼 Henry 說 Miss Marple 讓他很吃驚？",
    options: [
      "Henry 認為 Miss Marple 行為異常，與平常的她不太一樣。",
      "Henry 認為 Miss Marple 對 Mr. Sanders 的人格妄下判斷，不講道理。",
      "Henry 認為 Miss Marple 說錯了話，對他造成傷害。"
    ],
    answer: 1,
    points: 10,
    explanation: "答對了！"
  },
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: false,
    text: "Henry，你沒有面對現實，正如大多數人也不相信我。我當時真是束手無策，既不能到警察局去報案，也不能去警告 Gladys，那是無用的。因為我看得出來，Gladys 很愛她的丈夫。",
  },
  {
    type: "quiz",
    question: "「束手無策」與下列哪個詞語最相近？",
    options: [
      "急中生智",
      "胸有成竹",
      "無計可施",
      "無拘無束"
    ],
    answer: 2,
    points: 10,
    explanation: "答對了！"
  },
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: false,
    text: "Gladys 不太願意與人交談。他們好像剛結婚不久，那時的生活過得很拮据，實際上，他們是在靠她那點可憐的工資過日子。",
  },
  {
    type: "quiz",
    question: "以下哪句句子最適合填入「拮据」一詞？",
    options: [
      "雖然他們過得不⬜️⬜️，卻每天都很幸福。",
      "他每天辛勤工作，卻一直沒能過上⬜️⬜️的生活。",
      "眼見他的家境不太⬜️⬜️，小明便主動資助他一些生活用品。",
      "因為最近失業，他手頭十分⬜️⬜️，連基本開銷都要精打細算。"
    ],
    answer: 3,
    points: 10,
    explanation: "答對了！"
  },
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: false,
    text: "我後來發現，那些屬於她的錢已被她用遺囑的形式留給了別人。就在他們結婚的同時，他們就分別立了份對對方有利的遺囑，非常感人。",
  },
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: false,
    text: "當時他們很需要錢。他們住在頂樓，和僕人住在一起，一旦失火是很危險的。如果真有火災發生的話，緊急通道就在窗戶外面。我很小心地問她，房間外是否有陽台，因為陽台上，只需輕輕一推⋯⋯",
    clue: "⚠️ Mr. Sanders、Gladys 和僕人一起住在頂樓，頂樓外有陽台"
  },
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: false,
    text: "我當時既不能去報案，也不能去警告 Gladys。我開始相信，唯有給 Mr. Sanders 設個陷阱，將他的面具撕下來，Gladys 就不得不面對現實，儘管這對她來說是一次很大的打擊，但這樣才能阻止悲劇發生。"
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 老警察 Henry",
    filter: false,
    text: "你用甚麼妙計？"
  },
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: false,
    text: "那男人比我想像中聰明得多。他知道搞成意外會受到懷疑，便把計劃改成了一次謀殺。"
  },
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: false,
    text: "離聖誕節只有四天，療養院搬運工因肺炎去世，接著一位女傭患上敗血症死去。",
    clue: "⚠️ 療養院有兩人去世"
  },
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: false,
    text: "迷信的 Mrs. Carpenter 說：「禍不單行，肯定還會有第三個人要死的！」這時，Mr. Sanders 正好站在門口，這句話深深鑽進了他的腦子。"
  },
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: false,
    text: "下午，Dr. Coles 告訴我，Mr. Sanders 請他去看 Gladys，說她消化不良。但當天 Gladys 才跟我說她消化系統很好！我對這男人的懷疑頓時增加了一百倍——他正在為某種行動鋪路！",
    clue: "⚠️ Mr. Sanders 向醫生謊稱妻子「消化不良」"
  },
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: false,
    text: "五點多，Mr. Sanders 從樓上下來，一副外出的打扮，問我是否需要他從城裡給我帶點甚麼回來。我能做的僅僅是跟他客套一番。我徑直走到休息室，要了杯茶。"
  },
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: false,
    text: "我在休息室里一直呆到七點。這時候，Mr. Sanders 走了進來，有兩位男士與他一起，三個人步履輕快。Mr. Sanders 向我和 Miss Trollope 坐的地方走來，說他給 Gladys 買了件聖誕禮物，是一個配晚禮服用的手提包，想聽聽我們的意見。"
  },
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: false,
    text: "我們就跟他上了樓。隨後發生的事我一輩子都不會忘記，至今我仍然覺得我的小手指在隱隱作痛。"
  },
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: false,
    text: "打開房門、亮了燈，竟然看到 Gladys 倒在地板上，命歸黃泉！頭邊是一隻裝滿沙子的長襪，她的胳膊已經冰涼發直！",
    clue: "⚠️ 裝滿沙子的長襪"
  },
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: false,
    text: "Mr. Sanders 大叫着衝向屍體。"
  },
  {
    type: "quiz",
    question: "你要做甚麼？",
    options: [
      "讓 Mr. Sanders 跑過去抱着 Gladys，一同痛哭",
      "安撫 Mr. Sanders，親自報警求助",
      "擋住 Mr. Sanders，讓 Miss Trollope 找水療院經理協助",
    ],
    answer: 2,
    points: 10,
    explanation: "答對了！"
  },
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: false,
    text: "但我立刻阻止他：「冷靜點！別碰，什麼也不許碰！」當時我就肯定是他做的，他一定是想把甚麼東西拿走或藏起來。"
  },
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: false,
    text: "我留在屋裡，跪在屍體旁，我不能讓 Mr. Sanders 單獨與她在一起。但我不得不承認，他確實演得很好，看上去是那樣茫然，完全給嚇傻了的樣子。"
  },
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: false,
    text: "不一會兒，水療院經理來到現場，迅速把房間查了一遍，然後把我們都趕了出來，鎖上門。他自己拿著鑰匙，再親自給警察打電話。",
    clue: "⚠️ 案發後經理鎖上了門"
  },
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: false,
    text: "我們好像等了一個世紀，警察都還沒來，後來我們才知道是電話線路出了問題，經理不得不派信使去警察局。水療院離市中心很遠，在荒野的邊境上。"
  },
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: false,
    text: "警察來之前，Mr. Sanders 雙手抱頭在花園裡呻吟，漫無目的地走，向大家展現他的悲痛。"
  },
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: false,
    text: "最後，警察終於來了，與經理、Mr. Sanders 一起上樓。稍後，他們讓我也上去，警察正坐在桌子旁邊寫字，看上去很聰明，我喜歡他。"
  },
  {
    type: "dialogue",
    portrait: "👮🏻‍♀️ 警察",
    filter: true,
    text: "我聽說，屍體被發現的時候，你在現場。"
  },
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: true,
    text: "是的。當時⋯⋯"
  },
  {
    type: "dialogue",
    portrait: "👮🏻‍♀️ 警察",
    filter: true,
    text: "謝謝你，女士。我得請你再看看屍體，她是否還在原來的地方，是否被動過，與你第一眼看到的位置一樣嗎？",
  },
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: true,
    text: "看上去是的，除了帽子。",
    clue: "⚠️ 屍體上的帽子被動過"
  },
  {
    type: "dialogue",
    portrait: "👮🏻‍♀️ 警察",
    filter: true,
    text: "甚麼意思？那帽子怎麼了？",
  },
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: true,
    text: "那帽子原本是在 Gladys 頭上的，現在卻落在她頭邊。是你們動的嗎？",
  },
  {
    type: "dialogue",
    portrait: "👮🏻‍♀️ 警察",
    filter: true,
    text: "（皺眉，看著面朝下的屍體）不是。",
    clue: "⚠️ 屍體面部朝下"
  },
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: false,
    text: "Gladys 當時穿着出門的衣服，一件深紅色的有領花呢外套，那頂紅色的廉價氈帽靜靜地躺在她邊上。",
  },
  {
    type: "dialogue",
    portrait: "👮🏻‍♀️ 警察",
    filter: true,
    text: "你能否記起死者耳朵上是否有耳環，或者死者生前有沒有戴耳環的習慣？",
  },
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: true,
    text: "幸虧我有仔細觀察事物的習慣，我記得有一對珍珠在帽沿下面熠熠閃光，我當時雖然沒有特別注意這對耳環，但我能給你肯定的答覆。",
    clue: "⚠️ 珍珠耳環被偷走"
  },
  {
    type: "dialogue",
    portrait: "👮🏻‍♀️ 警察",
    filter: true,
    text: "這就對了。這位女士的珠寶盒被打劫，我知道，她並沒有什麼太值錢的東西，手指上戴的戒指被摘了下來。",
    clue: "⚠️ 珠寶盒和戒指也被偷走"
  },
  {
    type: "dialogue",
    portrait: "👮🏻‍♀️ 警察",
    filter: true,
    text: "兇手應該是忘了耳環，所以在謀殺被發現後返回摘走耳環，一個冷血的傢伙！也許他就藏在這個房間，而且一直都在房間裡。",
  },
  {
    type: "quiz",
    question: "你同意警察說「兇手一直藏在房間」嗎？",
    options: [
      "同意",
      "不同意",
    ],
    answer: 1,
    points: 10,
    explanation: "答對了！"
  },
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: true,
    text: "我不同意他的結論，我跟他解釋，我親自查看過床底，經理也打開衣櫥看過，房間沒有別的地方可以藏身。衣櫥中間裝帽子的小櫃子倒是鎖著的，但那只是淺淺的隔板，沒辦法藏人。",
    clue: "⚠️ 衣櫥中間裝帽子的小櫃子是鎖著的"
  },
  {
    type: "checkbox",
    question: "Miss Marple 有甚麼特點？",
    options: [
      "能夠獨立思考",
      "性格冷靜聰明",
      "極度排斥權威",
      "擅長觀察細節",
    ],
    answer: [0, 1, 3],
    points: 15,
    explanation: "答對了！"
  },
  {
    type: "dialogue",
    portrait: "👮🏻‍♀️ 警察",
    filter: true,
    text: "我同意你的看法，我覺得他曾一度折返。",
  },
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: true,
    text: "但經理鎖上了門，且把鑰匙收好。",
  },
  {
    type: "dialogue",
    portrait: "👮🏻‍♀️ 警察",
    filter: true,
    text: "那說明不了甚麼，陽台和防火通道是小偷出入的捷徑。可能你們的闖入逼迫他從窗戶溜走。你們都離開之後，他又重新返回繼續他的勾當。",
  },
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: true,
    text: "你能肯定是小偷所為嗎？",
  },
  {
    type: "dialogue",
    portrait: "👮🏻‍♀️ 警察",
    filter: true,
    text: "（不肯定的語調）看上去像是的，不是嗎？",
  },
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: false,
    text: "我對 Mr. Sanders 的判斷絕對不會錯的，那人是個惡棍，他裝出來的悲傷一刻也沒有騙過我的眼睛。與警察交談後，奇怪的念頭爬上我的腦際：如果這可怕的事是 Mr. Sanders 幹的，我想不出甚麼令人信服的理由能使他返回案發現場，取走他妻子的耳環。",
  },
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: false,
    text: "我是如此地相信我的判斷，正是這種固執，使我對其他一切都視而不見，但是結果卻完全出乎我意料，事實證明不是 Mr. Sanders 做的……"
  },
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: false,
    text: "但在我心裡，兇手就是 Mr. Sanders，無論怎樣也動搖不了我的看法。」"
  },
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: false,
    text: "讓我重整當天發生的事。Gladys 整個下午都在與朋友打牌，包括 Mortimer 夫婦。大約在六點，Gladys 離開了他們。走得快的話，從 Mortimer 家裡到水療院不用一小時，她六點半就能到達。沒人看見她進來，可能是因為她是從側門直接回到房間。"
  },
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: false,
    text: "她換了衣服，本來穿着去打牌的那件淺黃褐色的外套和裙子就掛在衣櫥裡，很顯然，她正準備外出。他們說，她根本不知道是誰把她擊倒的。當時，兇手大概就藏在房間，可能在沒開的衣櫥裡。"
  },
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: false,
    text: "我們再看看 Mr. Sanders 的行蹤。"
  },
  {
    type: "quiz",
    question: "Mr. Sanders 有不在場證據嗎？",
    options: [
      "有",
      "沒有",
    ],
    answer: 0,
    points: 10,
    explanation: "答對了！"
  },
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: false,
    text: "他是五點多出去的，在商店買了些東西。六點鐘左右，他進了旅館，邂逅了兩個朋友，就是後來與他一起回到水療院的兩個人，Hitchcock 和 Spender。六點以後他們一直在一起，直到七點，他們回來並走向我和 Miss Trollope。那時候，Gladys 已經死了。"
  },
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: false,
    text: "有一個小插曲，玩牌的過程中，有人打電話找 Gladys，是一個叫 Littleworth 的人。聽完電話的 Gladys 又興奮又激動，打牌時出了一兩次不該出的錯，而且她還提早離開了。"
  },
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: false,
    text: "問到 Mr. Sanders 知不知道太太有一位叫 Littleworth 的朋友時，他說他從未聽說過這個名字。不管是誰打的電話，他肯定沒有說出他的真實姓名，對嗎？"
  },  
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: false,
    text: "不管怎麼說，把此案看作一般的偷盜案有些站不住腳。另一種推論是，Gladys 準備外出見某個人，那個人是不是從防火通道進了她的房間？他們是不是吵架了？或許就是他無情無義地將她殺害了？"
  },    
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 老警察 Henry",
    filter: false,
    text: "為甚麼那個裝帽子的櫃子是鎖上的呢？"
  },     
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: false,
    text: "答案很簡單，裏面是一雙繡花拖鞋和一盒手絹，是 Gladys 給丈夫的聖誕禮物，是她親手繡的，這就是她把櫃子鎖上的原因，而警察在她手袋裡找到了鑰匙。但這正是兇手露出馬腳的地方！"
  }, 
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: false,
    text: "我想了兩天，忽然一切都清楚了。我立即去找警察，請他做個試驗，他同意了。"
  },     
  {
    type: "quiz",
    question: "Miss Marple 找警察做了甚麼試驗？",
    options: [
      "看死者是否能戴上地上的帽子",
      "看兇手從防火通道逃跑需要多少時間",
      "看沙袋裝滿沙子後的重量和撞擊力",
    ],
    answer: 0,
    points: 10,
    explanation: "答對了！"
  },
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: false,
    text: "我請他把地上的帽子戴到死者的頭上看看是否能戴上，結果戴不上去，因為那根本不是死者的帽子。",
  },     
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: false,
    text: "我們一直都認為躺在地上的那具屍體就是 Gladys，誰都沒去看她的臉，她臉朝下，還記得嗎？帽子把頭和臉都蓋住了。"
  },       
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: false,
    text: "Gladys 當時還沒有死。"
  },   
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 老警察 Henry",
    filter: false,
    text: "你不是看到她的屍體嗎？"
  },         
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: false,
    text: "是具死屍，但不是 Gladys。"
  },   
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: false,
    text: "我們在休息廳的談話使 Mr. Sanders 萌生了這個計劃：為甚麼不利用那可憐的女僕的屍體呢？還記得他們和僕人的房間都在頂樓嗎？女僕的房間離他們的房間只有兩個門，殯儀員要天黑以後才能到，他把時間都計算好了。"
  },   
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: false,
    text: "他沿著陽台把屍體搬過來，五點的時候，天已經黑了，給她穿上妻子的衣服，再套上那件對她來說太大的紅外套。他發現他太太裝帽子的櫃子是鎖著的，唯有找一頂女僕自己的帽子，沒有人會注意到這些的。他把沙袋放在她邊上，然後離開房間，出去的時候，讓我們都看見，以證明案發時他不在現場。"
  },   
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: false,
    text: "他給他太大打電話，稱自己是 Littleworth。我不知道他說了甚麼，但我說過 Gladys 是個輕信丈夫的妻子，丈夫讓她提早離開牌局，約她七點鐘在防火通道附近的花園與他見面，她一定覺得是丈夫想給她一個驚喜。"
  }, 
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: false,
    text: "之後，再和朋友一起回到水療院，設計讓我和 Miss Trollope 一起發現謀殺案，他裝着試圖把屍體翻過來，知道我一定會阻攔他。派人去找警察後，他便搖搖晃晃向花園走去，打算把妻子殺害！"
  },     
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: false,
    text: "他在花園裡與妻子碰頭，叫她從防火通道上走，一起回到他的房間，再拾起沙袋向她猛擊下去……噢，上帝啊！然後他飛快地把她的衣服和裙子脫下來。掛在衣櫥，再從另一具屍體上脫下衣服，給她穿上。"
  },       
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: false,
    text: "但帽子戴不上去，女僕的頭髮短，而 Gladys 有一頭齊肩的長捲髮。他不得不把帽子放在屍體邊上，希望不會有人注意到這一點。然後，再把瑪麗的屍體搬回她自己的房間，再把一切弄好。"
  },   
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: false,
    text: "線路壞了也是他計劃的一部分。他不能讓警察馬上就趕到現場，況且警察來了之後，先到經理辦公室去與經理談了一會兒，然後才到樓上去的，這是最糟糕的，本來完全有機會察覺一具死了兩小時的屍體與一具剛死半小時的屍體是有差別的。但是警察卻指望能先從發現屍體的外行人那兒找到線索。"
  },   
  {
    type: "dialogue",
    portrait: "🔍 你",
    filter: false,
    text: "我經常為未能挽救姑娘的生命深感內疚。但誰會願意聽一位老太太匆匆做出的結論呢？哎，那是一個突如其來的不幸，她愛那惡魔，相信他，她從來也沒看破他的真面目。"
  },   
  {
    type: "complete",
    text: "🏆 恭喜你！成功破獲聖誕節謀殺案！"
  }
];

let currentIndex = 0;
let score = 0;
let collectedClues = [];
let initialSuspectAnswer = null;
let currentQuestionFailed = false; // 追蹤當前題目是否曾經答錯

// DOM 元素
const scoreValEl = document.getElementById("score-val");
const dialogueTextEl = document.getElementById("dialogue-text");
const characterPortraitEl = document.getElementById("character-portrait");
const charLabelEl = document.getElementById("char-label");
const nextBtn = document.getElementById("next-btn");

const quizModal = document.getElementById("quiz-modal");
const quizQuestionEl = document.getElementById("quiz-question");
const quizOptionsEl = document.getElementById("quiz-options");
const quizFeedbackEl = document.getElementById("quiz-feedback");

const profileBtn = document.getElementById("profile-btn");
const profileModal = document.getElementById("profile-modal");
const closeProfileBtn = document.getElementById("close-profile-btn");
const clueListEl = document.getElementById("clue-list");

function updateScore(pts) {
  score += pts;
  scoreValEl.textContent = score;
}

function renderStep() {
  const step = storyData[currentIndex];
  quizModal.classList.add("hidden");
  quizOptionsEl.style.display = "flex";
  nextBtn.style.display = "inline-block";
  currentQuestionFailed = false; // 切換新步驟時重置答錯狀態

  // 處理線索收集
  if (step.clue && !collectedClues.includes(step.clue)) {
    collectedClues.push(step.clue);
  }

  // 處理角色立繪與濾鏡
  if (step.portrait) {
    characterPortraitEl.classList.remove("hidden");
    charLabelEl.textContent = step.portrait;
    if (step.filter) {
      characterPortraitEl.classList.add("grayscale-mode");
    } else {
      characterPortraitEl.classList.remove("grayscale-mode");
    }
  } else {
    characterPortraitEl.classList.add("hidden");
  }


if (step.type === "dialogue") {
    dialogueTextEl.textContent = step.text;
  } else if (step.type === "quiz") {
    dialogueTextEl.textContent = "【案情鑑識門檻】請解答以下問題：";
    nextBtn.style.display = "none";
    quizModal.classList.remove("hidden");
    quizQuestionEl.textContent = step.question;
    quizFeedbackEl.textContent = "";
    quizOptionsEl.innerHTML = "";

    step.options.forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.className = "opt-btn";
      btn.textContent = opt;
      btn.onclick = () => checkQuizAnswer(idx, step.answer, step.points, step.explanation, step.isInitialSuspect);
      quizOptionsEl.appendChild(btn);
    });
  } else if (step.type === "checkbox") {
    dialogueTextEl.textContent = "【多項選擇題】請選出所有正確答案：";
    nextBtn.style.display = "none";
    quizModal.classList.remove("hidden");
    quizQuestionEl.textContent = step.question;
    quizFeedbackEl.textContent = "";
    quizOptionsEl.innerHTML = "";

      let selectedIndexes = [];
    step.options.forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.className = "opt-btn";
      btn.textContent = opt;
      btn.onclick = () => {
        if (selectedIndexes.includes(idx)) {
          selectedIndexes = selectedIndexes.filter(i => i !== idx);
          btn.classList.remove("selected");
        } else {
          selectedIndexes.push(idx);
          btn.classList.add("selected");
        }
      };
      quizOptionsEl.appendChild(btn);
    });

    const submitBtn = document.createElement("button");
    submitBtn.className = "opt-btn";
    submitBtn.style.background = "#2ed573";
    submitBtn.style.color = "#000";
    submitBtn.style.fontWeight = "bold";
    submitBtn.textContent = "✅ 確認答案";
    submitBtn.onclick = () => {
      checkCheckboxAnswer(selectedIndexes, step.answer, step.points, step.explanation);
    };
    quizOptionsEl.appendChild(submitBtn);

  
  } else if (step.type === "writing") {
    // 現場書寫挑戰：Checkbox 逐個詞語剔選，若沒挑選任何一項則扣 500 分
    dialogueTextEl.textContent = "【現場書寫挑戰】";
    nextBtn.style.display = "none";
    quizModal.classList.remove("hidden");
    quizQuestionEl.textContent = "請剔選學生正確書寫的詞語（若未挑選任何詞語將扣 500 分）：";
    quizOptionsEl.innerHTML = "";

    let checkedWritingIndexes = [];
    step.words.forEach((w, idx) => {
      const label = document.createElement("label");
      label.className = "opt-btn";
      label.style.display = "flex";
      label.style.alignItems = "center";
      label.style.gap = "12px";
      label.style.cursor = "pointer";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.style.transform = "scale(1.3)";
      checkbox.onchange = () => {
        if (checkbox.checked) {
          if (!checkedWritingIndexes.includes(idx)) checkedWritingIndexes.push(idx);
        } else {
          checkedWritingIndexes = checkedWritingIndexes.filter(i => i !== idx);
        }
      };

     const span = document.createElement("span");
      span.innerHTML = `✍️ <b>${w.term}</b> <span style="font-size:0.9rem; color:#a4b0be;">(${w.remarks})</span>`;

      label.appendChild(checkbox);
      label.appendChild(span);
      quizOptionsEl.appendChild(label);
    });

    const submitWritingBtn = document.createElement("button");
    submitWritingBtn.className = "opt-btn";
    submitWritingBtn.style.background = "#2ed573";
    submitWritingBtn.style.color = "#000";
    submitWritingBtn.style.fontWeight = "bold";
    submitWritingBtn.textContent = "✅ 確認書寫評分";
    submitWritingBtn.onclick = () => {
      if (checkedWritingIndexes.length === 0) {
        updateScore(-500);
        quizFeedbackEl.className = "feedback-text feedback-wrong";
        quizFeedbackEl.textContent = "⚠️ 沒有勾選任何正確詞語，扣 500 分！";
      } else {
        const earned = checkedWritingIndexes.length * step.pointsPerWord;
        updateScore(earned);
        quizFeedbackEl.className = "feedback-text feedback-correct";
        quizFeedbackEl.textContent = `🎉 評分完成！獲得 +${earned} 分！`;
      }
      quizOptionsEl.style.display = "none";
      nextBtn.style.display = "inline-block";
    };
    quizOptionsEl.appendChild(submitWritingBtn);

  } else if (step.type === "suspectConfirm") {
    dialogueTextEl.textContent = "【終極推理確認】";
    nextBtn.style.display = "none";
    quizModal.classList.remove("hidden");
    quizQuestionEl.textContent = step.question;
    quizFeedbackEl.textContent = "";
    quizOptionsEl.innerHTML = "";

    step.options.forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.className = "opt-btn";
      btn.textContent = opt;
      btn.onclick = () => {
        let bonus = 0;
        if (idx === step.answer) {
          if (initialSuspectAnswer === 2) {
            bonus = 60;
          } else if (initialSuspectAnswer === 3) {
            bonus = 20;
          } else {
            bonus = 10;
          }
          if (currentQuestionFailed) bonus = 0; // 若先前此步驟失敗過也不加額外獎勵
          updateScore(bonus);
          quizFeedbackEl.className = "feedback-text feedback-correct";
          quizFeedbackEl.textContent = `✅ ${step.explanation} 獲得附加獎勵 +${bonus} 分！`;
        } else {
          currentQuestionFailed = true;
          quizFeedbackEl.className = "feedback-text feedback-wrong";
          quizFeedbackEl.textContent = `❌ 推理有誤。兇手其實是 Nurse Copling。（注意：再次嘗試將不獲加分）`;
        }
        nextBtn.style.display = "inline-block";
      };
      quizOptionsEl.appendChild(btn);
    });


    } else if (step.type === "complete") {
    dialogueTextEl.textContent = step.text;
    nextBtn.style.display = "none";
  }
}

// 檢查單選答案（答錯再答不加分）
function checkQuizAnswer(selectedIndex, correctIndex, points, explanation, isInitial) {
  if (isInitial) {
    initialSuspectAnswer = selectedIndex;
  }

  if (selectedIndex === correctIndex) {
    let awarded = currentQuestionFailed ? 0 : points;
    updateScore(awarded);
    quizFeedbackEl.className = "feedback-text feedback-correct";
    if (currentQuestionFailed) {
      quizFeedbackEl.textContent = `✅ ${explanation}（因先前曾答錯，本次不加分 0 分）`;
    } else {
      quizFeedbackEl.textContent = `✅ ${explanation} (+${points} 分)`;
    }
    nextBtn.style.display = "inline-block";
  } else {
    currentQuestionFailed = true;
    quizFeedbackEl.className = "feedback-text feedback-wrong";
    quizFeedbackEl.textContent = "❌ 答案不正確，請再思索一下原著細節！（注意：再次答對將不獲加分）";
  }
}

function checkCheckboxAnswer(selected, correct, totalPoints, explanation) {
  const isMatch = selected.length === correct.length && selected.every(val => correct.includes(val));
  let earned = 0;
  if (isMatch) {
    earned = currentQuestionFailed ? 0 : totalPoints;
    updateScore(earned);
    quizFeedbackEl.className = "feedback-text feedback-correct";
    if (currentQuestionFailed) {
      quizFeedbackEl.textContent = `✅ 完全答對！${explanation}（因先前曾答錯，本次不加分 0 分）`;
    } else {
      quizFeedbackEl.textContent = `✅ 完全答對！${explanation} (+${totalPoints} 分)`;
    }
    nextBtn.style.display = "inline-block";
  } else {
    currentQuestionFailed = true;
    let correctCount = selected.filter(val => correct.includes(val)).length;
    let wrongCount = selected.filter(val => !correct.includes(val)).length;
    let partialEarned = currentQuestionFailed ? 0 : Math.max(0, (correctCount * 5) - (wrongCount * 5));
    updateScore(partialEarned);
    quizFeedbackEl.className = "feedback-text feedback-wrong";
    quizFeedbackEl.textContent = `⚠️ 部分正確或有誤。${explanation} (+${partialEarned} 分，注意：再次嘗試正確將不獲額外加分)`;
  }
}


nextBtn.addEventListener("click", () => {
  if (currentIndex < storyData.length - 1) {
    currentIndex++;
    renderStep();
  }
});

// 人物檔案彈窗控制
profileBtn.onclick = () => {
  clueListEl.innerHTML = collectedClues.length > 0 
    ? collectedClues.map(c => `<li>🔹 ${c}</li>`).join('') 
    : '<li>尚未收集到任何線索。</li>';
  profileModal.classList.remove("hidden");
};

closeProfileBtn.onclick = () => {
  profileModal.classList.add("hidden");
};

// 初始化遊戲
renderStep();

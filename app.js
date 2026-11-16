// 莎士比亞劇本詞彙與金句題庫（A–Z 完整 26 組）
// 抽換規則：
// 1. 印象派油畫圖片（獨立 .jpg）：放入 assets/images/，例如 a-archaic.jpg
// 2. 單字朗讀音檔（外部 .mp3）：放入 assets/audio/，例如 a-archaic-word.mp3
// 3. 金句朗讀音檔（外部 .mp3）：放入 assets/audio/，例如 a-archaic-quote.mp3

const lexiconData = [
  {
    letter: "A",
    word: "archaic",
    meaning: "古風的、古體的",
    quote: "Thy words are archaic, yet thy passion rings eternal.",
    translation: "你的言辭雖帶古風，然情意永恆不朽。",
    source: "《十四行詩》意象選句",
    image: "assets/images/a-archaic.jpg",
    wordAudio: "assets/audio/a-archaic-word.mp3",
    quoteAudio: "assets/audio/a-archaic-quote.mp3"
  },
  {
    letter: "B",
    word: "brevity",
    meaning: "簡潔、短暫",
    quote: "Brevity is the soul of wit.",
    translation: "簡潔是智慧的靈魂。",
    source: "《哈姆雷特》第二幕第二景",
    image: "assets/images/b-brevity.jpg",
    wordAudio: "assets/audio/b-brevity-word.mp3",
    quoteAudio: "assets/audio/b-brevity-quote.mp3"
  },
  {
    letter: "C",
    word: "cowardice",
    meaning: "懦弱、膽怯",
    quote: "Cowards die many times before their deaths; the valiant never taste of death but once.",
    translation: "懦夫在未死之前已死過多次；勇者一生只嚐一次死味。",
    source: "《凱撒大帝》第二幕第二景",
    image: "assets/images/c-cowardice.jpg",
    wordAudio: "assets/audio/c-cowardice-word.mp3",
    quoteAudio: "assets/audio/c-cowardice-quote.mp3"
  },
  {
    letter: "D",
    word: "doth",
    meaning: "做（does 的古語）",
    quote: "The lady doth protest too much, methinks.",
    translation: "依我看，這位女士抗議得太過頭了。",
    source: "《哈姆雷特》第三幕第二景",
    image: "assets/images/d-doth.jpg",
    wordAudio: "assets/audio/d-doth-word.mp3",
    quoteAudio: "assets/audio/d-doth-quote.mp3"
  },
  {
    letter: "E",
    word: "ere",
    meaning: "在……之前（古語）",
    quote: "Ere the bat hath flown his cloistered flight.",
    translation: "在蝙蝠飛完牠幽閉的夜航之前。",
    source: "《馬克白》第三幕第二景",
    image: "assets/images/e-ere.jpg",
    wordAudio: "assets/audio/e-ere-word.mp3",
    quoteAudio: "assets/audio/e-ere-quote.mp3"
  },
  {
    letter: "F",
    word: "frailty",
    meaning: "脆弱、薄弱",
    quote: "Frailty, thy name is woman!",
    translation: "脆弱啊，你的名字是女人！",
    source: "《哈姆雷特》第一幕第二景",
    image: "assets/images/f-frailty.jpg",
    wordAudio: "assets/audio/f-frailty-word.mp3",
    quoteAudio: "assets/audio/f-frailty-quote.mp3"
  },
  {
    letter: "G",
    word: "gilded",
    meaning: "鍍金的、華而不實的",
    quote: "To gild refined gold, to paint the lily, is wasteful and ridiculous excess.",
    translation: "為純金鍍金，為百合塗彩，皆是浪費而荒謬的多餘。",
    source: "《約翰王》第四幕第二景",
    image: "assets/images/g-gilded.jpg",
    wordAudio: "assets/audio/g-gilded-word.mp3",
    quoteAudio: "assets/audio/g-gilded-quote.mp3"
  },
  {
    letter: "H",
    word: "hark",
    meaning: "傾聽（古語）",
    quote: "Hark, hark! the lark at heaven's gate sings.",
    translation: "聽啊，聽啊！雲雀在天堂之門歌唱。",
    source: "《辛白林》第二幕第三景",
    image: "assets/images/h-hark.jpg",
    wordAudio: "assets/audio/h-hark-word.mp3",
    quoteAudio: "assets/audio/h-hark-quote.mp3"
  },
  {
    letter: "I",
    word: "idle",
    meaning: "虛幻的、閒散的",
    quote: "True is it that we have seen better days, and have with holy bell been knolled to church.",
    translation: "我們確實見過更美好的日子，也曾隨神聖鐘聲步入教堂。",
    source: "《皆大歡喜》第二幕第七景",
    image: "assets/images/i-idle.jpg",
    wordAudio: "assets/audio/i-idle-word.mp3",
    quoteAudio: "assets/audio/i-idle-quote.mp3"
  },
  {
    letter: "J",
    word: "jest",
    meaning: "玩笑、戲謔",
    quote: "He jests at scars that never felt a wound.",
    translation: "未曾受過傷的人，才會嘲笑別人的傷疤。",
    source: "《羅密歐與茱麗葉》第二幕第二景",
    image: "assets/images/j-jest.jpg",
    wordAudio: "assets/audio/j-jest-word.mp3",
    quoteAudio: "assets/audio/j-jest-quote.mp3"
  },
  {
    letter: "K",
    word: "kinsman",
    meaning: "親族、同胞",
    quote: "A little more than kin, and less than kind.",
    translation: "比親戚多一點，比同類少一點。",
    source: "《哈姆雷特》第一幕第二景",
    image: "assets/images/k-kinsman.jpg",
    wordAudio: "assets/audio/k-kinsman-word.mp3",
    quoteAudio: "assets/audio/k-kinsman-quote.mp3"
  },
  {
    letter: "L",
    word: "lament",
    meaning: "哀悼、悲嘆",
    quote: "Wise men ne'er sit and wail their woes, but presently prevent the ways to wail.",
    translation: "智者從不坐困愁城哀嘆不幸，而是即刻尋法止息悲傷。",
    source: "《理查二世》第三幕第二景",
    image: "assets/images/l-lament.jpg",
    wordAudio: "assets/audio/l-lament-word.mp3",
    quoteAudio: "assets/audio/l-lament-quote.mp3"
  },
  {
    letter: "M",
    word: "methinks",
    meaning: "我認為、依我看（古語）",
    quote: "Methinks I see my father in my mind's eye.",
    translation: "我彷彿在心靈的眼眸中看見了父親。",
    source: "《哈姆雷特》第一幕第二景",
    image: "assets/images/m-methinks.jpg",
    wordAudio: "assets/audio/m-methinks-word.mp3",
    quoteAudio: "assets/audio/m-methinks-quote.mp3"
  },
  {
    letter: "N",
    word: "naught",
    meaning: "虛無、一無所有",
    quote: "Nothing will come of nothing: speak again.",
    translation: "一無所有只會換來一無所有：再說一次吧。",
    source: "《李爾王》第一幕第一景",
    image: "assets/images/n-naught.jpg",
    wordAudio: "assets/audio/n-naught-word.mp3",
    quoteAudio: "assets/audio/n-naught-quote.mp3"
  },
  {
    letter: "O",
    word: "orison",
    meaning: "祈禱（古語）",
    quote: "Nymph, in thy orisons be all my sins remembered.",
    translation: "仙女啊，在妳的祈禱中，請銘記我所有的罪愆。",
    source: "《哈姆雷特》第三幕第一景",
    image: "assets/images/o-orison.jpg",
    wordAudio: "assets/audio/o-orison-word.mp3",
    quoteAudio: "assets/audio/o-orison-quote.mp3"
  },
  {
    letter: "P",
    word: "parting",
    meaning: "離別、分手",
    quote: "Good night, good night! Parting is such sweet sorrow.",
    translation: "晚安，晚安！離別是如此甜蜜的憂傷。",
    source: "《羅密歐與茱麗葉》第二幕第二景",
    image: "assets/images/p-parting.jpg",
    wordAudio: "assets/audio/p-parting-word.mp3",
    quoteAudio: "assets/audio/p-parting-quote.mp3"
  },
  {
    letter: "Q",
    word: "quench",
    meaning: "熄滅、止渴",
    quote: "Fire that's closest kept burns most of all; no water can quench true desire.",
    translation: "深藏的火焰燃燒最烈；任何水皆無法澆熄真摯渴望。",
    source: "《維洛那二紳士》第一幕第二景",
    image: "assets/images/q-quench.jpg",
    wordAudio: "assets/audio/q-quench-word.mp3",
    quoteAudio: "assets/audio/q-quench-quote.mp3"
  },
  {
    letter: "R",
    word: "revel",
    meaning: "狂歡、宴樂",
    quote: "Our revels now are ended. These our actors were all spirits.",
    translation: "我們的狂歡現已落幕，這些演員全都是精靈所化。",
    source: "《暴風雨》第四幕第一景",
    image: "assets/images/r-revel.jpg",
    wordAudio: "assets/audio/r-revel-word.mp3",
    quoteAudio: "assets/audio/r-revel-quote.mp3"
  },
  {
    letter: "S",
    word: "soliloquy",
    meaning: "獨白、自言自語",
    quote: "To be, or not to be, that is the question.",
    translation: "生存還是毀滅，這是一個值得考慮的問題。",
    source: "《哈姆雷特》第三幕第一景",
    image: "assets/images/s-soliloquy.jpg",
    wordAudio: "assets/audio/s-soliloquy-word.mp3",
    quoteAudio: "assets/audio/s-soliloquy-quote.mp3"
  },
  {
    letter: "T",
    word: "tempest",
    meaning: "暴風雨、動盪",
    quote: "What cares these roarers for the name of king?",
    translation: "這些咆哮的巨浪哪裡在乎國王的名號？",
    source: "《暴風雨》第一幕第一景",
    image: "assets/images/t-tempest.jpg",
    wordAudio: "assets/audio/t-tempest-word.mp3",
    quoteAudio: "assets/audio/t-tempest-quote.mp3"
  },
  {
    letter: "U",
    word: "undiscovered",
    meaning: "未知的、未經探索的",
    quote: "The undiscovered country from whose bourn no traveller returns.",
    translation: "那無人探訪的國度，從未有旅人自其邊界歸來。",
    source: "《哈姆雷特》第三幕第一景",
    image: "assets/images/u-undiscovered.jpg",
    wordAudio: "assets/audio/u-undiscovered-word.mp3",
    quoteAudio: "assets/audio/u-undiscovered-quote.mp3"
  },
  {
    letter: "V",
    word: "valiant",
    meaning: "英勇的、無畏的",
    quote: "Virtue is bold, and goodness never fearful.",
    translation: "美德是勇敢的，善良從不畏懼。",
    source: "《一報還一報》第三幕第一景",
    image: "assets/images/v-valiant.jpg",
    wordAudio: "assets/audio/v-valiant-word.mp3",
    quoteAudio: "assets/audio/v-valiant-quote.mp3"
  },
  {
    letter: "W",
    word: "wherefore",
    meaning: "為何、為了什麼（古語）",
    quote: "O Romeo, Romeo! wherefore art thou Romeo?",
    translation: "喔，羅密歐，羅密歐！你為什麼是羅密歐？",
    source: "《羅密歐與茱麗葉》第二幕第二景",
    image: "assets/images/w-wherefore.jpg",
    wordAudio: "assets/audio/w-wherefore-word.mp3",
    quoteAudio: "assets/audio/w-wherefore-quote.mp3"
  },
  {
    letter: "X",
    word: "xanthic",
    meaning: "金黃色的、燦爛的",
    quote: "Shall I compare thee to a summer's day? Thou art more lovely and more temperate.",
    translation: "我能否將你比作夏日？你比夏日更可愛也更溫婉。",
    source: "《十四行詩》第 18 首",
    image: "assets/images/x-xanthic.jpg",
    wordAudio: "assets/audio/x-xanthic-word.mp3",
    quoteAudio: "assets/audio/x-xanthic-quote.mp3"
  },
  {
    letter: "Y",
    word: "yonder",
    meaning: "在那邊、遠處的（古語）",
    quote: "But, soft! what light through yonder window breaks?",
    translation: "且慢！那邊窗戶透出的是什麼光芒？",
    source: "《羅密歐與茱麗葉》第二幕第二景",
    image: "assets/images/y-yonder.jpg",
    wordAudio: "assets/audio/y-yonder-word.mp3",
    quoteAudio: "assets/audio/y-yonder-quote.mp3"
  },
  {
    letter: "Z",
    word: "zeal",
    meaning: "熱忱、虔誠",
    quote: "Had I but served my God with half the zeal I served my king.",
    translation: "若我侍奉上帝能有侍奉君王一半的熱忱。",
    source: "《亨利八世》第三幕第二景",
    image: "assets/images/z-zeal.jpg",
    wordAudio: "assets/audio/z-zeal-word.mp3",
    quoteAudio: "assets/audio/z-zeal-quote.mp3"
  }
];

let currentIndex = 0;
let activeAudio = null;
let activeBtn = null;

const alphabetNav = document.getElementById("alphabet-nav");
const letterStamp = document.getElementById("letter-stamp");
const vocabImage = document.getElementById("vocab-image");
const paintingCaption = document.getElementById("painting-caption");
const vocabWord = document.getElementById("vocab-word");
const vocabMeaning = document.getElementById("vocab-meaning");
const vocabQuote = document.getElementById("vocab-quote");
const vocabTranslation = document.getElementById("vocab-translation");
const vocabSource = document.getElementById("vocab-source");
const playWordBtn = document.getElementById("play-word-btn");
const playQuoteBtn = document.getElementById("play-quote-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const counterText = document.getElementById("counter-text");

// 停止正在播放的音檔（確保換卡停止舊聲音、連按不疊音）
function stopAudio() {
  if (activeAudio) {
    activeAudio.pause();
    activeAudio.currentTime = 0;
    activeAudio = null;
  }
  if (activeBtn) {
    activeBtn.classList.remove("playing");
    activeBtn = null;
  }
}

// 播放外部 .mp3 音檔
function playMp3(filePath, buttonEl) {
  stopAudio();
  activeBtn = buttonEl;
  activeBtn.classList.add("playing");

  activeAudio = new Audio(filePath);
  activeAudio.addEventListener("ended", stopAudio);
  activeAudio.play().catch((err) => {
    stopAudio();
    alert(`找不到外部音檔或瀏覽器阻擋播放：\n${filePath}\n\n請確認您已將錄製好的 .mp3 檔案放入對應的 assets/audio/ 資料夾中。`);
    console.warn("音檔載入失敗：", filePath, err);
  });
}

function renderNav() {
  alphabetNav.innerHTML = "";
  lexiconData.forEach((item, idx) => {
    const btn = document.createElement("button");
    btn.textContent = item.letter;
    if (idx === currentIndex) btn.classList.add("active");
    btn.addEventListener("click", () => goToIndex(idx));
    alphabetNav.appendChild(btn);
  });
}

function renderExhibit() {
  const item = lexiconData[currentIndex];
  letterStamp.textContent = item.letter;
  vocabImage.src = item.image;
  vocabImage.alt = `${item.word} - 印象派油畫配圖`;
  paintingCaption.textContent = `Impressionist Oil Painting · ${item.image}`;

  vocabWord.textContent = item.word;
  vocabMeaning.textContent = item.meaning;
  vocabQuote.textContent = `“${item.quote}”`;
  vocabTranslation.textContent = item.translation;
  vocabSource.textContent = `——${item.source}`;

  const numStr = String(currentIndex + 1).padStart(2, "0");
  counterText.textContent = `${numStr} / ${lexiconData.length}`;

  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === lexiconData.length - 1;

  renderNav();
}

function goToIndex(idx) {
  if (idx < 0 || idx >= lexiconData.length) return;
  stopAudio();
  currentIndex = idx;
  renderExhibit();
}

playWordBtn.addEventListener("click", () => {
  playMp3(lexiconData[currentIndex].wordAudio, playWordBtn);
});

playQuoteBtn.addEventListener("click", () => {
  playMp3(lexiconData[currentIndex].quoteAudio, playQuoteBtn);
});

prevBtn.addEventListener("click", () => goToIndex(currentIndex - 1));
nextBtn.addEventListener("click", () => goToIndex(currentIndex + 1));

renderExhibit();
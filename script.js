const questions = [
  "If you had to describe yourself in three words, which three would you choose? Why?（如果让你用三个词形容自己，你会选哪三个？为什么？）",

"What do you think is the most unique thing about you?（你觉得自己身上最“与众不同”的地方是什么？）",

"Has there ever been an experience that suddenly changed one of your ideas or habits?（有没有一次经历让你突然改变了某个想法或者习惯？）",

"What do you usually do to relax when you feel stressed?（你平时压力大的时候，会用什么方式让自己放松？）",

"If you could recommend a place, movie, book, or game that you really love, what would it be?（如果让你推荐一个自己特别喜欢的地方/电影/书/游戏，你会推荐什么？）",

"If you could go back in time and say one thing to your younger self, what would you say?（如果可以回到过去和小时候的自己说一句话，你会说什么？）",

"What does your “ideal day” look like?（你觉得“理想的一天”是什么样子的？）",

"What was the last thing that made you laugh really hard?（最近一次让你大笑的事情是什么？）",

"If you suddenly had one month of vacation, how would you spend it?（如果突然多出一个月假期，你会怎么安排？）",

"What is the one thing you most want to improve about yourself right now?（你现在最想提升自己的哪一方面？）",

"Is there a sentence or quote that has always influenced you?（有没有一句话一直影响着你？）",

"What is the most important lesson you’ve learned while growing up?（你觉得成长过程中学到的最重要的一课是什么？）",

"If you suddenly had a superpower, what power would you want the most?（如果你突然有超能力，你最想要什么？）",

"What kind of person do you think you are?（你觉得自己是个什么样的人？）",

"What have you been paying attention to or interested in recently?（你最近在关注或者感兴趣的东西是什么？）",

"If you could share one useful life tip, what would it be?（如果让你分享一个生活小经验，你会分享什么？）",

"What kind of animal do you think you are most like?（你觉得自己最像哪一种动物？）"
];

// 游戏状态
let remainingQuestions = [...questions]; // 剩余问题数组
let currentQuestion = null; // 当前显示的问题

// DOM 元素
const questionText = document.getElementById('question-text');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');

// 初始化
function init() {
    // 初始化完成
}

// 随机抽取问题
function getRandomQuestion() {
    if (remainingQuestions.length === 0) {
        return null; // 没有剩余问题
    }

    const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
    const selectedQuestion = remainingQuestions[randomIndex];

    // 从剩余问题中移除已抽取的问题
    remainingQuestions.splice(randomIndex, 1);

    return selectedQuestion;
}

// 显示问题
function displayQuestion(question) {
    if (question) {
        questionText.textContent = question;
        currentQuestion = question;
    } else {
        questionText.innerHTML = `
            <div class="game-over">
                <h3>🎉 COMPLETED!</h3>
                <p>All questions answered!</p>
                <button class="restart-btn" onclick="restartGame()">RESTART</button>
            </div>
        `;
        nextBtn.disabled = true;
        nextBtn.textContent = "FINISHED";
    }
}

// 开始游戏
function startGame() {
    if (remainingQuestions.length === 0) {
        // 如果所有问题都抽完了，重置游戏
        remainingQuestions = [...questions];
        nextBtn.disabled = false;
        nextBtn.textContent = "下一个问题";
    }

    const question = getRandomQuestion();
    displayQuestion(question);

    // 切换按钮状态
    startBtn.classList.add('hidden');
    nextBtn.classList.remove('hidden');
}

// 下一个问题
function nextQuestion() {
    const question = getRandomQuestion();
    displayQuestion(question);
}

// 重新开始游戏
function restartGame() {
    remainingQuestions = [...questions];
    nextBtn.disabled = false;
    nextBtn.textContent = "下一个问题";
    init();
}

// 事件监听器
startBtn.addEventListener('click', startGame);
nextBtn.addEventListener('click', nextQuestion);

// 初始化游戏
init();

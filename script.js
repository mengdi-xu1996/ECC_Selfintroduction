// 科幻主题问题列表
const questions = [
    "Describe your ideal day. How would you spend it?（描述一下你心目中理想的一天应该怎么度过？）",
"If you could set the speed of your life, would you choose 0.75x or 1.25x?（如果给生活按一个倍速，你希望是 0.75x 还是 1.25x？）",
"At what battery percentage on your phone do you start to feel anxious and need to charge it?（手机的电掉到百分之多少之后，你就会开始变得焦虑，必须要去充电？）",
"Is there a song or a phrase that instantly makes you slow down? Share and explain.（有没有一首歌或一句话会让你立刻放慢脚步？分享并解释）",
"Do you feel like too many meetings steal your time?（你会不会因为开会太多感觉时间被“偷走”？）",
"Why do you think modern people are increasingly afraid of silence or boredom?（你觉得现代人为什么越来越怕安静、怕无聊？）",
"Is your current pace your own, or are you being pushed along?（你现在的节奏是“自己的节奏”还是“被推着走”？）",
"Do you ever feel like algorithms are controlling you, making you scroll endlessly?（你有没有被算法带着跑的感觉？比如越刷手机越停不下来。）",
"In today's 'instant reply era,' how long is a normal time to respond to messages?（在现在这个“信息秒回时代”，你认为多久回复消息算“正常节奏”？）",
"What are some things that really need to be done slowly to be enjoyable?（你觉得什么事情必须慢慢来才有味道？）",
"If you could write a reminder to your future self to maintain your own pace, what would it be? Explain.（如果要给未来的自己写一句提醒，帮助保持“你自己的节奏”，你会写什么？写句子并解释）",
"What is the one activity that relaxes you the most?（最让你放松的一件事是什么？）",
"Do you have something you’ve been procrastinating, but once you did it, it wasn’t as hard as you thought? Why?（有没有一个你一直拖着不做，但最后做完发现没想象中那么难的例子？为什么会拖）",
"Share a small hobby you’ve recently picked up. How does it help you adjust your pace?（分享一个你最近培养的小兴趣，它如何帮助你调整节奏。讲效果）",
"If you could compare your life pace to a vehicle, which one would it be and why?（如果把你现在的生活节奏比喻成一种交通工具，它是什么？解释为什么）"

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

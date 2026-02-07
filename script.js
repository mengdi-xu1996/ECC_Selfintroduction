// 科幻主题问题列表
const questions = [
   
    "Describe the last small thing that made you laugh for no reason.（最近一件让你无缘无故笑出来的小事是什么？）",
    
    "When you were a child, what did you do just for fun — but adults thought it was useless?（小时候你做过哪些只是为了好玩，但大人觉得没用的事？）",
    
    "What is something you enjoy, but you almost never tell other people?（有没有一件你其实很喜欢，但几乎不跟别人说的事？）",
    
    "If you had one free afternoon and no phone, no computer, what would you do just for fun?（如果你有一个完全空闲的下午，而且不能用手机和电脑，你会做什么来打发时间？）",
    
    "What do you usually do for fun when you feel tired after work or study?（下班或下课很累的时候，你一般怎么放松、找点乐子？）",
    
    "If money and other people’s opinions didn’t matter, what would you like to try just for fun?（如果不用担心钱，也不用在意别人看法，你最想尝试什么纯为了好玩的事？）",
    
    "Do you think ‘just for fun’ is important for adults? Why or why not?（你觉得“只是为了开心”对成年人重要吗？为什么？）",
    
    "What is a very cheap or free thing that brings you a lot of fun?（有没有一种很便宜，甚至免费的快乐来源？）",
    
    "What was your favorite way to have fun when you were a child or a student? Is it different now?（你小时候或学生时代最喜欢的娱乐方式是什么？现在有变化吗？）",
    
    "Have you ever tried something just for fun and then accidentally became quite good at it?（你有没有因为好玩开始做一件事，结果后来还挺擅长的？）",
    
    "What do you usually watch, read, or listen to just for fun — not for learning or self-improvement?（你平时纯为了娱乐，会看什么、读什么或听什么？不是为了学习那种。）",
    
    "What is one silly habit you have that makes you feel happy?（你有没有一个有点傻的小习惯，但会让你很开心？）",
    
    "When was the last time you did something only because you wanted to, not because you had to?（你上一次做一件事只是因为想做，而不是因为必须，是在什么时候？）",
    
    "If your job suddenly disappeared for one month, how would you spend that month just for fun?（如果你的工作突然消失一个月，你会怎么用这一个月来好好玩？）",
    
    "What is the most interesting thing you did in the last month?（你最近一个月做过的最有趣的一件事是什么？）",
    
    "If you could have a monthly ‘fun budget’ that could only be used to make you happy, what would you spend it on?（如果你每个月有一笔只能用来让自己开心的“快乐预算”，你会花在什么上？）",
    
    "What’s a simple and free activity that always cheers you up, like blowing bubbles, skipping, or singing off-key?（有没有一种简单又免费的事，总能让你开心，比如吹泡泡、跳绳、跑调唱歌？）",
    
    "If you could invent a new holiday just for fun, what would it celebrate and how would people celebrate it?（如果你能发明一个纯为了好玩的节日，它会庆祝什么？大家会怎么过？）",
    
    "What’s a funny or weird talent you have that most people don’t know about?（你有什么好笑或奇怪的小技能，是大多数人不知道的？）"    
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

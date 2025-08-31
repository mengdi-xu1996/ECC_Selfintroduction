// 科幻主题问题列表
const questions = [
    "Which sci-fi gadget would you most like to have?（你最想拥有哪种科幻电影里的道具？）",
    "If you could teleport instantly, where would you go?（如果你可以瞬间传送，你会去哪？）",
    "Would you like to be friends with aliens?（你希望能和外星人做朋友吗？）",
    "Which sci-fi character do you feel most like?（你觉得自己像哪个科幻角色？）",
    "Would you choose immortality or enhanced intelligence?（你会选择永生还是高智商增强？为什么？）",
    "Which part of the universe would you most like to explore?（你最想探索宇宙的哪一部分？）",
    "If you could install a futuristic 'body enhancement module,' which would you pick?（如果能给自己装一个未来科技的'身体增强模块'，你会选哪种？）",
    "Would you try driving a flying car?（你会尝试驾驶飞行汽车吗？）",
    "Would you rather travel to the future or the past?（你会选择穿越到未来还是回到过去？）",
    "Would you want your pet to talk?（你会选择让自己的宠物说话吗？）",
    "If aliens captured you, what would scare you most?（如果你被外星人抓走，你最害怕什么？）",
    "Would you sacrifice your memory to save Earth?（你愿意为了拯救地球牺牲自己的记忆吗？）",
    "Would you rather have a brain-computer interface to remember everything or keep normal memory?（你会选择用脑机接口记住一切，还是保持正常记忆？）",
    "If AI could completely replace your job, what would you do?（如果有 AI 能完全替代你工作，你会怎么做？）",
    "Would you move to Mars if given the chance?（你会选择移居火星吗？为什么？）",
    "Would you choose to become a superhero overnight?（你会选择让自己一夜变成超级英雄吗？）",
    "Which sci-fi monster scares you the most?（你最害怕的科幻怪物是哪种？）",
    "If aliens offered to change your appearance, would you accept?（如果外星人给你一个改变外貌的机会，你会改变吗？）",
    "Would you try consciousness uploading?（你愿意尝试意识上传吗？）",
    "Would you choose to become a cyborg (half-human, half-robot)?（如果有机会成为半机器人半人类，你愿意吗？）",
    "Would you date a robot if you could?（如果你能和机器人约会，你会尝试吗？）",
    "Would you rather have the power of flight or invisibility?（你希望自己能飞行还是隐身？）",
    "Which sci-fi character would you most like to save?（你最想拯救哪个科幻世界的角色？）",
    "If you could live in any sci-fi world, which one would you choose?（如果可以选择一个科幻世界生活，你会选哪一部？）",
    "Would you try futuristic food?（你会尝试吃未来科技食品吗？）",
    "Would you swap a day of life with an alien?（你愿意和外星人交换一天生活吗？）",
    "If you could control time, what small thing would you change?（如果能控制时间，你会改变什么小事？）",
    "What type of sci-fi robot assistant would you want?（你想拥有哪种科幻风格的机器人助手？）",
    "Would you try holographic socializing?（你愿意尝试全息投影社交吗？）",
    "If you could instantly learn an alien language, would you?（如果能让自己瞬间懂一门外星语言，你会学吗？）",
    "Would you swap lives with a parallel universe version of yourself?（如果有一个平行世界的你想和你交换人生，你会同意吗？）",
    "Would you betray a friend to gain superpowers?（你会为了获得超能力背叛朋友吗？）",
    "If AI could predict your future love life, would you want to know?（如果 AI 能预测你未来的感情生活，你想知道吗？）",
    "Would you sacrifice your emotions for scientific experiments?（你愿意为了科研实验牺牲自己的情绪体验吗？）",
    "Would you choose to live forever in a virtual world?（你会选择永远活在虚拟世界吗？）",
    "If aliens asked you to perform a dangerous mission, would you accept?（如果外星文明要求你做一件危险任务，你会接受吗？）",
    "Would you let your genes be completely rewritten?（你愿意让自己的基因完全重写吗？）",
    "Would you erase some memories to ensure world peace?（你会为了世界和平删除一部分记忆吗？）",
    "Would you live fully dependent on AI?（你会选择与 AI 共同生活，完全依赖它吗？）",
    "Would you want to see the mistakes your future self will make?（如果能看到未来自己犯的错误，你想看吗？）"
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

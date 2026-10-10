// 背景飄落愛心
const hearts = ["❤️", "💕", "💖", "💗", "🌸", "✨"];
function spawnHeart() {
    const h = document.createElement("div");
    h.className = "heart-fall";
    h.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    h.style.left = Math.random() * 100 + "vw";
    h.style.fontSize = (14 + Math.random() * 14) + "px";
    h.style.animationDuration = (3.5 + Math.random() * 3.5) + "s";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 7000);
}
setInterval(spawnHeart, 450);

function acceptTask() {
    const msg = document.getElementById('response-msg');
    msg.innerHTML = "🎉 綁定成功！司機已準備出發！";
    msg.classList.add('success-pop');
    document.querySelector('.btn-container').style.display = 'none';

    // 慶祝愛心大爆發
    for (let i = 0; i < 25; i++) {
        setTimeout(spawnHeart, i * 50);
    }

    // 延遲 2 秒（2000 毫秒）後，隱藏第一頁並顯示第二頁
    setTimeout(() => {
        document.getElementById('task-card').style.display = 'none';
        document.getElementById('second-screen').style.display = 'block';
    }, 2000);
}

// 手機與電腦共用的防呆逃跑按鈕
function moveButtonMobile(e) {
    e.preventDefault();
    const btnNo = document.getElementById('btn-no');
    const x = (Math.random() - 0.5) * 140;
    const y = (Math.random() - 0.5) * 60;
    btnNo.style.transform = `translate(${x}px, ${y}px)`;
}

function rejectTask(e) {
    e.preventDefault();
    const btnNo = document.getElementById('btn-no');
    btnNo.style.display = 'none';
    document.getElementById('response-msg').innerHTML = "系統錯誤：此選項不存在，請乖乖按接受 ❤️";
}
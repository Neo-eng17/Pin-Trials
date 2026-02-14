
// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Verbatim Content
    const NARRATIVES = [
        {
            title: "How We Met",
            content: "Remember that day I bought those shoes at your workplace? It started with a short but incredible convo that turned into texts, then a confession, and finally this unbreakable connection. For over 3 years, we've fought through tough times, but you've always taken the chances to love me, hether I was breathing fire, nonchalant, or full of joy. You're royal and so loyal, my queen. I'm grateful every day for how it all began."
        },
        {
            title: "What I Cherish About You",
            content: "I've come to love your determination in growing our love, it's inspiring. Your emotional intelligence has blossomed so swiftly over time, making us stronger in love. That laughter of yours, especially when I catch you being a little naughty, lights up my world. Your maturity and desire to be my source of peace is everything I seek. You're the one who calms my storms and celebrates my highs."
        },
        {
            title: "Our Journey and Future",
            content: "Through every up and down, you've been my rock—loyal, loving, and always there. I cherish how you've embraced my flaws and amplified my strengths. Our love isn't perfect, but it's real, and I'm so thankful for the ways you've chosen us time and again. Here's to more years of building this together, my queen. You are the heartbeat of my future."
        }
    ];

    const QUIZZES = [
        {
            question: "What sparked our first real connection?",
            options: [
                { label: "A random text out of the blue", isCorrect: false, feedback: "Not quite! Think of that specific workplace moment..." },
                { label: "That shoe-buying chat at your work", isCorrect: true, feedback: "Yes! That short convo changed everything forever. ❤️" },
                { label: "A late-night confession in the stars", isCorrect: false, feedback: "Beautiful, but that came a little bit later!" }
            ]
        },
        {
            question: "Which of these traits of yours makes my heart skip a beat most?",
            options: [
                { label: "Your incredible determination", isCorrect: true, feedback: "I love how you grow our love every single day. 👑" },
                { label: "Your sharp emotional intelligence", isCorrect: true, feedback: "You understand me better than anyone else. ✨" },
                { label: "That adorable naughty laughter", isCorrect: true, feedback: "I live for that specific sound of joy! 😂❤️" }
            ]
        },
        {
            question: "How would you describe our unbreakable bond?",
            options: [
                { label: "A series of happy coincidences", isCorrect: false, feedback: "It's way deeper than just luck, my queen!" },
                { label: "Choosing each other through every storm", isCorrect: true, feedback: "Exactly. Your loyalty is my ultimate peace. ⚓" }
            ]
        },
        {
            question: "Are you ready to see what's hidden in my heart?",
            options: [
                { label: "Maybe... I'm curious!", isCorrect: true, feedback: "The best is yet to come! 🎁" },
                { label: "Yes, show me everything!", isCorrect: true, feedback: "Your wish is my command, my Queen. 👑" }
            ]
        }
    ];

    const GIFTS = [
        { id: 'letter', title: 'A Royal Letter', icon: 'mail', desc: "For my Queen's eyes only", color: "bg-rose-700" },
        { id: 'music', title: 'Our Melody', icon: 'music', desc: "Westlife - Hello My Love", color: "bg-rose-800" },
        { id: 'locket', title: 'Eternal Promise', icon: 'lock', desc: "A vow sealed forever", color: "bg-rose-900" }
    ];

    // Global App State
    let currentStep = 0;
    let currentQuizIdx = 0;

    // Background Animation
    function createParticle() {
        const container = document.getElementById('particle-container');
        if (!container) return;
        const particle = document.createElement('div');
        const isHeart = Math.random() > 0.5;
        const size = 12 + Math.random() * 24;
        const duration = 12 + Math.random() * 15;
        const left = Math.random() * 100;
        
        particle.className = 'particle';
        particle.style.left = `${left}%`;
        particle.style.animationDuration = `${duration}s`;
        
        if (isHeart) {
            particle.innerHTML = `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="#f43f5e"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>`;
        } else {
            particle.innerHTML = `<div style="width: ${size}px; height: ${size}px; background-color: #fb7185; border-radius: 50% 50% 0 50%; transform: rotate(45deg); filter: blur(1px);"></div>`;
        }
        
        container.appendChild(particle);
        setTimeout(() => particle.remove(), duration * 1000);
    }
    setInterval(createParticle, 1000);

    // Navigation and Logic attached to Window for HTML accessibility
    window.showSection = (id) => {
        const sections = ['landing-section', 'narrative-section', 'gifts-section', 'closing-section'];
        sections.forEach(s => {
            const el = document.getElementById(s);
            if (el) el.classList.add('hidden');
        });
        const target = document.getElementById(id);
        if (target) target.classList.remove('hidden');
        
        const progress = document.getElementById('progress-bar-container');
        if (currentStep >= 1 && currentStep <= 3) {
            progress.classList.remove('hidden');
            renderProgressBar();
        } else {
            progress.classList.add('hidden');
        }
        window.scrollTo(0, 0);
    };



    window.showSameEnergyFeedback = function () {
    const feedbackEl = document.getElementById("journey-feedback");
    if (!feedbackEl) return;

    const message = "I knew you felt the same 😉";
    feedbackEl.textContent = message;

    // Reset state in case it's mid-animation
    feedbackEl.classList.add("opacity-0", "translate-y-2");

    // Small reflow trick so animation always triggers
    void feedbackEl.offsetWidth;

    // Fade + slide in
    feedbackEl.classList.remove("opacity-0", "translate-y-2");

    // Reading speed logic
    const words = message.split(" ").length;
    const readingTime = words * 200;
    const totalVisibleTime = Math.max(1000, readingTime);

    setTimeout(() => {
        feedbackEl.classList.add("opacity-0", "translate-y-2");
    }, totalVisibleTime);
};


    function renderProgressBar() {
        const stepsContainer = document.getElementById('progress-steps');
        if (!stepsContainer) return;
        stepsContainer.innerHTML = '';
        for (let i = 1; i <= 4; i++) {
            const isActive = currentStep >= i;
            const stepHtml = `
                <div class="flex items-center">
                    <div class="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-colors ${isActive ? 'bg-rose-500' : 'bg-rose-100'}">
                        <i data-lucide="heart" class="w-3 h-3 md:w-4 md:h-4 ${isActive ? 'text-white fill-white' : 'text-rose-300'}"></i>
                    </div>
                    ${i < 4 ? `<div class="w-4 md:w-8 h-0.5 ${currentStep > i ? 'bg-rose-500' : 'bg-rose-100'}"></div>` : ''}
                </div>
            `;
            stepsContainer.insertAdjacentHTML('beforeend', stepHtml);
        }
        lucide.createIcons();
    }

    window.startJourney = (isBonus) => {
        currentStep = 1;
        currentQuizIdx = 0;
        renderNarrative();
        window.showSection('narrative-section');
    };

    function renderNarrative() {
        const data = NARRATIVES[currentStep - 1];
        if (!data) return;
        document.getElementById('narrative-chapter').innerText = `Chapter ${currentStep}`;
        document.getElementById('narrative-title').innerText = data.title;
        document.getElementById('narrative-content').innerText = data.content;
    }

    window.triggerQuiz = () => {
        const modal = document.getElementById('quiz-modal');
        const questionData = QUIZZES[currentQuizIdx];
        if (!questionData) return;
        
        document.getElementById('quiz-question').innerText = questionData.question;
        const optionsContainer = document.getElementById('quiz-options');
        optionsContainer.innerHTML = '';
        
        questionData.options.forEach((opt, idx) => {
            const btn = document.createElement('button');
            btn.className = "w-full p-4 rounded-xl text-left transition-all border-2 flex items-center justify-between group bg-white border-rose-100 hover:border-rose-300 text-gray-700 active:scale-95";
            btn.innerHTML = `<span class="font-medium pr-2 text-sm md:text-base">${opt.label}</span><div class="icon-placeholder"></div>`;
            btn.onclick = () => handleOptionClick(idx, opt, btn);
            optionsContainer.appendChild(btn);
        });
        
        document.getElementById('quiz-feedback').classList.add('hidden');
        modal.classList.remove('hidden');
        lucide.createIcons();
    };

    function handleOptionClick(idx, opt, btn) {
        const feedbackEl = document.getElementById('quiz-feedback');
        feedbackEl.innerText = opt.feedback;
        feedbackEl.classList.remove('hidden', 'text-rose-600', 'text-green-600');
        
        const btns = document.querySelectorAll('#quiz-options button');
        btns.forEach(b => {
            b.className = "w-full p-4 rounded-xl text-left transition-all border-2 flex items-center justify-between bg-white border-rose-100 text-gray-700";
            b.querySelector('.icon-placeholder').innerHTML = '';
        });

        if (opt.isCorrect) {
            btn.className = "w-full p-4 rounded-xl text-left transition-all border-2 flex items-center justify-between bg-green-50 border-green-500 text-green-700";
            btn.querySelector('.icon-placeholder').innerHTML = `<i data-lucide="heart" class="fill-green-500 text-green-500"></i>`;
            feedbackEl.classList.add('text-green-600');
            
            setTimeout(() => {
                document.getElementById('quiz-modal').classList.add('hidden');
                currentQuizIdx++;
                if (currentStep < 3) {
                    currentStep++;
                    renderNarrative();
                    window.showSection('narrative-section');
                } else {
                    currentStep = 4;
                    renderGifts();
                    window.showSection('gifts-section');
                }
            }, 2000);
        } else {
            btn.className = "w-full p-4 rounded-xl text-left transition-all border-2 flex items-center justify-between bg-rose-50 border-rose-500 text-rose-700";
            btn.querySelector('.icon-placeholder').innerHTML = `<i data-lucide="x-circle" class="text-rose-500"></i>`;
            feedbackEl.classList.add('text-rose-600');
        }
        lucide.createIcons();
    }

    function renderGifts() {
        const grid = document.getElementById('gifts-grid');
        if (!grid) return;
        grid.innerHTML = '';
        GIFTS.forEach(gift => {
            const card = `
                <div onclick="window.openGift('${gift.id}')" class="${gift.color} p-6 md:p-8 rounded-3xl shadow-2xl cursor-pointer border border-rose-700/50 flex flex-col items-center justify-center text-center space-y-4 group hover:-translate-y-2 transition-transform active:scale-95">
                    <div class="p-4 bg-white/10 rounded-full group-hover:scale-110 transition-transform">
                        <i data-lucide="${gift.icon}" class="w-10 h-10 md:w-12 md:h-12 text-rose-100"></i>
                    </div>
                    <h3 class="text-lg md:text-xl font-bold text-rose-100">${gift.title}</h3>
                    <p class="text-rose-300 text-xs md:text-sm">${gift.desc}</p>
                </div>
            `;
            grid.insertAdjacentHTML('beforeend', card);
        });
        lucide.createIcons();
    }

    window.openGift = (id) => {
    const modal = document.getElementById('gift-modal');
    const contentArea = document.getElementById('gift-content-area');
    const backBtn = document.getElementById('gift-back-btn');

    contentArea.innerHTML = '';
    modal.classList.remove('hidden');

    // Reset button styles
    backBtn.className = "absolute top-6 left-6 p-2 rounded-full z-10 transition-all";

    if (id === 'letter') {

        // Dark text button for light background
        backBtn.classList.add(
            "text-stone-800",
            "bg-white",
            "hover:bg-stone-200",
            "shadow-md"
        );

        contentArea.innerHTML = `
            <div class="relative p-8 md:p-10 rounded-3xl 
    bg-gradient-to-br from-pink-50 via-rose-100 to-red-200
    shadow-[0_20px_50px_rgba(244,63,94,0.25)]
    border border-rose-300/40
    min-h-[260px] overflow-hidden
    font-serif text-base md:text-lg text-rose-950 leading-relaxed">

    <!-- Ambient glow layers -->
    <div class="absolute -top-12 -right-12 w-52 h-52 bg-rose-400/20 rounded-full blur-3xl"></div>
    <div class="absolute -bottom-12 -left-12 w-52 h-52 bg-red-400/20 rounded-full blur-3xl"></div>

    <!-- Subtle decorative line -->
    <div class="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>

    <!-- Header tag -->
    <div class="absolute top-4 right-6 text-rose-500 font-sans text-[10px] uppercase tracking-[0.2em]">
        Nakapenda
    </div>

    <!-- Typewriter content -->
    <p id="typewriter-text" class="relative z-10 italic"></p>

    <!-- Signature -->
    <div class="mt-10 text-right font-semibold text-rose-700 tracking-wide">
        — with Love ❤️
    </div>
</div> `;

        const paragraphs = [
  "Shiku,",
  "From the very first moment our paths crossed, I felt something I couldn't quite put into words. I thought I was just passing through, but you stopped me in my tracks and changed my world. What began with a smile, a glance, and 1000+ Chats and calls has grown into a bond that has strengthened over time.",
"We have fought. We have laughed. We have grown. You’ve witnessed every side of me; the calm, the storm, the silence, and the chaos, and through it all, you’ve chosen to stay $ love anyway👩‍❤️‍💋‍👨. Honestly babygal, your loyalty is rare, and because of it my ordinary days feel valuable and worth living. ",
"You are not just someone I love, you are my partner, my source of peace, and most importantly, my Queen👸🏻. You’re my everything, baby girl. And I’m forever yours."
];
        runTypewriter(paragraphs);

    } else {

        // Light text button for dark backgrounds
        backBtn.classList.add(
            "text-white",
            "bg-white/10",
            "hover:bg-white/20",
            "backdrop-blur-md"
        );

        if (id === 'music') {
            contentArea.innerHTML = `
                <div class="aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-2xl">
                    <iframe class="w-full h-full" 
                        src="https://www.youtube.com/embed/tZqUTu1FM4I" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
            `;
        }

        if (id === 'locket') {
            contentArea.innerHTML = `
                <div class="flex flex-col items-center text-center space-y-6 py-6 md:py-12">
                    <div class="relative w-32 h-32 md:w-48 md:h-48 perspective-1000">
                        <div class="w-full h-full animate-rotate-y">
                            <svg viewBox="0 0 24 24" fill="#be123c" class="w-full h-full drop-shadow-2xl">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                            </svg>
                        </div>
                    </div>
                    <div class="space-y-3">
                        <h3 class="text-2xl md:text-3xl font-bold text-rose-200">My Eternal Promise</h3>
                        <p class="text-rose-400 max-w-md mx-auto text-sm md:text-base px-2">
                            This Icon represents a promise that, just as my soul within is eternal, so is my love for you ❤️‍🔥. No matter where life takes us, this promise will always be a reminder of our unbreakable bond and the love that will endure forever. 
                        </p>
                        <p class="text-lg md:text-xl text-rose-100 italic">"Te amo, mi amor 🌹. "</p>
                    </div>
                </div>
            `;
        }
    }

    if (window.lucide) {
        lucide.createIcons();
    }
};


    function runTypewriter(paragraphs) {
    const el = document.getElementById('typewriter-text');
    if (!el) return;

    el.innerHTML = ""; // clear previous content
    let pIndex = 0;

    function typeParagraph() {
        if (pIndex >= paragraphs.length) return;

        let charIndex = 0;
        const p = document.createElement("p");
        p.className = "mb-4";
        el.appendChild(p);

        const interval = setInterval(() => {
            p.textContent += paragraphs[pIndex].charAt(charIndex);
            charIndex++;

            if (charIndex >= paragraphs[pIndex].length) {
                clearInterval(interval);
                pIndex++;
                setTimeout(typeParagraph, 500); // pause between paragraphs
            }
        }, 25);
    }

    typeParagraph();
}
    window.closeGiftModal = () => {
        document.getElementById('gift-modal').classList.add('hidden');
        document.getElementById('gift-content-area').innerHTML = '';
    };

    window.restartAdventure = () => {
        currentStep = 0;
        currentQuizIdx = 0;
        window.showSection('landing-section');
    };

    window.goToClosing = () => {
        currentStep = 5;
        window.showSection('closing-section');
    };

    window.goToGifts = () => {
        currentStep = 4;
        window.showSection('gifts-section');
    };

    // Initial Start
    lucide.createIcons();
    window.showSection('landing-section');
});

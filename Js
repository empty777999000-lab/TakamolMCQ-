// তাকামুল (Takamul) পরীক্ষার ৩০টি প্রশ্ন
const TAKAMUL_QUESTIONS = {
    Cleaner: [
        { q: "মেঝে ভেজা থাকলে কাজ করার সময় কোন সেফটি সাইন ব্যবহার করতে হবে?", opts: ["ধূমপান নিষেধ", "ভেজা মেঝে (Wet Floor)", "গতি কমান", "প্রবেশ নিষেধ"], ans: 1 },
        { q: "বাথরুম পরিষ্কার করার জন্য কোন কেমিক্যালটি বেশি কার্যকর ও নিরাপদ?", opts: ["শুধু পানি", "ব্লিচিং পাউডার/টয়লেট ক্লিনার", "রান্নার তেল", "পেট্রোল"], ans: 1 },
        { q: "ব্লিচিং পাউডার এবং এসিড (Acid) একসাথে মেশানো কি নিরাপদ?", opts: ["হ্যাঁ", "না"], ans: 1 },
        { q: "কেমিক্যাল ব্যবহারের সময় আপনার সুরক্ষার জন্য কী পরা বাধ্যতামূলক?", opts: ["গ্লাভস ও মাস্ক", "শুধু সানগ্লাস", "খালি হাত", "ঘড়ি"], ans: 0 },
        { q: "কোনো বৈদ্যুতিক সুইচে পানি বা ভেজা হাত লাগানো উচিত?", opts: ["হ্যাঁ", "না"], ans: 1 },
        { q: "ডাস্টবিন থেকে বাজে গন্ধ এড়াতে কতক্ষণ পর পর পরিষ্কার করা উচিত?", opts: ["সপ্তাহে একবার", "প্রতিদিন নিয়মিত", "মাসে একবার", "বছরে একবার"], ans: 1 },
        { q: "ফ্লোর মোছার পর ফ্যান ছেড়ে দ্রুত শুকিয়ে নেওয়া উচিত।", opts: ["সত্য", "মিথ্যা"], ans: 0 },
        { q: "টয়লেট পরিষ্কারের ব্রাশ দিয়ে কি বেসিন বা কিচেন পরিষ্কার করা যাবে?", opts: ["হ্যাঁ", "না"], ans: 1 },
        { q: "অতিরিক্ত ধুলাবালি পরিষ্কার করার সময় অবশ্যই ফেস মাস্ক পরা উচিত।", opts: ["সত্য", "মিথ্যা"], ans: 0 },
        { q: "কেমিক্যাল বোতলে অবশ্যই নাম লেখা (লেবেল) থাকা উচিত।", opts: ["সত্য", "মিথ্যা"], ans: 0 },
        { q: "গ্লাস বা কাঁচ পরিষ্কার করার সময় সুতি কাপড়ের চেয়ে মাইক্রোফাইবার কাপড় ব্যবহার করা ভালো?", opts: ["হ্যাঁ", "না"], ans: 0 },
        { q: "পরিষ্কারের কাজ শেষ করার পর হাত ভালো করে সাবান দিয়ে ধোয়া প্রয়োজন।", opts: ["সত্য", "মিথ্যা"], ans: 0 },
        { q: "ভারী ক্লিনিং মেশিন এক স্থান থেকে অন্য স্থানে নেওয়ার সময় কেবল শক্ত করে টানা উচিত?", opts: ["হ্যাঁ", "না"], ans: 1 },
        { q: "কেমিক্যাল চোখের মধ্যে পড়লে অবিলম্বে প্রচুর ঠান্ডা পানি দিয়ে ধোয়া উচিত।", opts: ["সত্য", "মিথ্যা"], ans: 0 },
        { q: "কাজ শুরু করার আগে সকল নিরাপত্তার সরঞ্জাম (PPE) পরীক্ষা করে নেওয়া উচিত।", opts: ["সত্য", "মিথ্যা"], ans: 0 }
    ],
    LoadUnload: [
        { q: "ভারী জিনিস মাটি থেকে তোলার সময় শরীরের কোন অংশের ওপর জোর দিতে হবে?", opts: ["পিঠের ওপর", "পায়ের ওপর (হাঁটু ভাঁজ করে)", "ঘাড়ের ওপর", "শুধু হাতের ওপর"], ans: 1 },
        { q: "ভারী জিনিস তোলার সময় পিঠ সোজা রাখা উচিত।", opts: ["সত্য", "মিথ্যা"], ans: 0 },
        { q: "নির্মাণ বা লোডিং সাইটে মাথায় আঘাত থেকে বাঁচতে কী পরতে হয়?", opts: ["টুপি", "গামছা", "সেফটি হেলমেট", "কিছুই না"], ans: 2 },
        { q: "অনেক বেশি ভারী জিনিস একা তোলা কি নিরাপদ?", opts: ["হ্যাঁ", "না, অন্যের সাহায্য বা ট্রলি নিতে হবে"], ans: 1 },
        { q: "পায়ে যেন ভারী বস্তু পড়ে আঘাত না লাগে, সেজন্য কী পরা উচিত?", opts: ["স্যান্ডেল", "খালি পা", "সেফটি সু (Safety Shoes)", "কাপড়ের জুতা"], ans: 2 },
        { q: "পিচ্ছিল বা ভেজা রাস্তায় ভারী মাল টানা নিরাপদ নয়।", opts: ["সত্য", "মিথ্যা"], ans: 0 },
        { q: "ভারী কার্টন বহন করার সময় তা শরীরের কত কাছে রাখা উচিত?", opts: ["যতটা সম্ভব দূরে", "শরীরের সাথে লাগিয়ে", "মাথার উপরে", "এক হাতে ঝুলিয়ে"], ans: 1 },
        { q: "ক্লান্ত অবস্থায় ভারী মাল লোড-আনলোড করা উচিত নয়।", opts: ["সত্য", "মিথ্যা"], ans: 0 },
        { q: "উঁচুতে মাল তোলার সময় অবশ্যই মই বা নিরাপদ প্ল্যাটফর্ম ব্যবহার করতে হবে।", opts: ["সত্য", "মিথ্যা"], ans: 0 },
        { q: "কাজ শেষে লোডিং ট্রলি বা যন্ত্রপাতি যত্রতত্র ফেলে রাখা উচিত?", opts: ["হ্যাঁ", "না, নির্দিষ্ট স্থানে রাখতে হবে"], ans: 1 },
        { q: "চলন্ত কন্টেইনার বা ট্রাক থেকে লাফিয়ে নামা কি নিরাপদ?", opts: ["হ্যাঁ", "না"], ans: 1 },
        { q: "কাঠের প্যালেট ব্যবহারের আগে কোনো ভাঙা বা আলগা পেরেক আছে কি না চেক করা দরকার।", opts: ["সত্য", "মিথ্যা"], ans: 0 },
        { q: "মালপত্র লোড করার সময় হালকা জিনিস নিচে এবং ভারী জিনিস ওপরে রাখা উচিত?", opts: ["হ্যাঁ", "না, ভারী জিনিস নিচে রাখতে হয়"], ans: 1 },
        { q: "হাইড্রোলিক জেক বা হ্যান্ড লিফটার ব্যবহার করার সময় সর্বোচ্চ লোড ক্যাপাসিটি মেনে চলা উচিত।", opts: ["সত্য", "মিথ্যা"], ans: 0 },
        { q: "লোড করার পর মালামাল যেন গাড়িতে নড়াচড়া না করে সেজন্য বেল্ট দিয়ে শক্ত করে বাঁধা উচিত।", opts: ["সত্য", "মিথ্যা"], ans: 0 }
    ]
};

class CBTApp {
    constructor() {
        this.dbKey = 'takamul_cbt_v4';
        this.currentCategory = 'Cleaner';
        this.currentIndex = 0;
        this.userAnswers = {};
        this.questionsData = {};
        this.timer = null;
        this.timeLeft = 1800; // ৩০ মিনিট
        this.isExamActive = false;

        this.init();
    }

    init() {
        this.loadDatabase();
        this.switchCategory(this.currentCategory);
    }

    loadDatabase() {
        try {
            const localData = localStorage.getItem(this.dbKey);
            if (localData) {
                const parsed = JSON.parse(localData);
                if (parsed && parsed.Cleaner && parsed.LoadUnload) {
                    this.questionsData = parsed;
                    return;
                }
            }
        } catch (e) {
            console.warn("Storage error, loading defaults.");
        }
        this.questionsData = JSON.parse(JSON.stringify(TAKAMUL_QUESTIONS));
        this.saveDatabase();
    }

    saveDatabase() {
        localStorage.setItem(this.dbKey, JSON.stringify(this.questionsData));
    }

    resetDefaultData() {
        if (confirm("আপনি কি নিশ্চিত? কাস্টম যুক্ত করা প্রশ্ন মুছে তাকামুলের অরিজিনাল ৩০টি প্রশ্ন রিসেট হবে।")) {
            this.questionsData = JSON.parse(JSON.stringify(TAKAMUL_QUESTIONS));
            this.saveDatabase();
            this.renderAdminList();
            alert("ডাটা রিসেট সম্পন্ন হয়েছে!");
        }
    }

    switchCategory(category) {
        this.currentCategory = category;
        this.currentIndex = 0;
        this.userAnswers = {};

        document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
        document.getElementById(`cat-${category}`).classList.add('active');

        this.startLiveTimer();
        this.renderQuiz();
    }

    startLiveTimer() {
        clearInterval(this.timer);
        this.timeLeft = 1800; 
        this.isExamActive = true;
        this.updateTimerDisplay();

        this.timer = setInterval(() => {
            if (!this.isExamActive) {
                clearInterval(this.timer);
                return;
            }
            this.timeLeft--;
            this.updateTimerDisplay();
            
            if (this.timeLeft <= 0) {
                clearInterval(this.timer);
                alert("সময় শেষ! আপনার পরীক্ষা জমা নেওয়া হলো।");
                this.submitExam();
            }
        }, 1000);
    }

    updateTimerDisplay() {
        const minutes = Math.floor(this.timeLeft / 60).toString().padStart(2, '0');
        const seconds = (this.timeLeft % 60).toString().padStart(2, '0');
        document.getElementById('timer-display').innerText = `${minutes}:${seconds}`;
        
        if (this.timeLeft <= 300) {
            document.getElementById('timer-display').style.color = '#ef4444';
        } else {
            document.getElementById('timer-display').style.color = 'inherit';
        }
    }

    get currentQuestions() {
        return this.questionsData[this.currentCategory] || [];
    }

    renderQuiz() {
        const list = this.currentQuestions;
        const palette = document.getElementById('q-palette');
        const qText = document.getElementById('q-text-display');
        const qNum = document.getElementById('q-num-display');
        const optContainer = document.getElementById('options-display');

        palette.innerHTML = '';
        
        if (list.length === 0) {
            qNum.innerText = '!';
            qText.innerText = 'এই ক্যাটাগরিতে কোনো প্রশ্ন নেই।';
            optContainer.innerHTML = '';
            return;
        }

        // প্যালেট রেন্ডারিং (১, ২, ৩, ৪... একটির নিচে আরেকটি)
        list.forEach((_, idx) => {
            const btn = document.createElement('button');
            btn.className = `pal-btn ${idx === this.currentIndex ? 'current' : ''} ${this.userAnswers[idx] !== undefined ? 'answered' : ''}`;
            btn.innerText = idx + 1;
            btn.onclick = () => { this.currentIndex = idx; this.renderQuiz(); };
            palette.appendChild(btn);
        });

        // প্রশ্ন ও অপশন লোড
        const current = list[this.currentIndex];
        qNum.innerText = this.currentIndex + 1;
        qText.innerText = current.q;
        optContainer.innerHTML = '';
        
        const labels = ['A', 'B', 'C', 'D'];
        current.opts.forEach((opt, idx) => {
            if (!opt) return;
            const optEl = document.createElement('div');
            const isSelected = this.userAnswers[this.currentIndex] === idx;
            optEl.className = `opt-item ${isSelected ? 'selected' : ''}`;
            optEl.innerHTML = `
                <input type="radio" name="opt" ${isSelected ? 'checked' : ''}>
                <span class="opt-tag">${labels[idx]}.</span>
                <span class="opt-text">${opt}</span>
            `;
            optEl.onclick = () => {
                this.userAnswers[this.currentIndex] = idx;
                this.renderQuiz();
            };
            optContainer.appendChild(optEl);
        });

        document.getElementById('btn-prev').style.visibility = this.currentIndex === 0 ? 'hidden' : 'visible';
        const nextBtn = document.getElementById('btn-next');
        if (this.currentIndex === list.length - 1) {
            nextBtn.innerText = 'পরীক্ষা শেষ করুন';
            nextBtn.style.background = '#ef4444';
        } else {
            nextBtn.innerText = 'এগিয়ে যান';
            nextBtn.style.background = 'var(--primary)';
        }
    }

    navigate(direction) {
        const max = this.currentQuestions.length;
        const newIndex = this.currentIndex + direction;

        if (newIndex >= 0 && newIndex < max) {
            this.currentIndex = newIndex;
            this.renderQuiz();
        } else if (newIndex >= max) {
            this.submitExam();
        }
    }

    submitExam() {
        this.isExamActive = false;
        clearInterval(this.timer);
        
        let score = 0;
        const list = this.currentQuestions;
        list.forEach((q, idx) => {
            if (this.userAnswers[idx] === q.ans) score++;
        });

        document.getElementById('exam-app').style.display = 'none';
        document.getElementById('admin-app').style.display = 'none';
        document.getElementById('result-app').style.display = 'block';

        let catName = this.currentCategory === 'Cleaner' ? 'Cleaner (ক্লিনার)' : 'Load & Unload (লোড-আনলোড)';
        document.getElementById('res-cat').innerText = catName;
        document.getElementById('res-score').innerText = score;
        document.getElementById('res-total').innerText = list.length;
    }

    restartExam() {
        document.getElementById('result-app').style.display = 'none';
        document.getElementById('exam-app').style.display = 'block';
        this.switchCategory(this.currentCategory);
    }

    openAdmin() {
        const pass = prompt("এডমিন প্যানেলে ঢুকতে পাসওয়ার্ড দিন:");
        if (pass === "RAKIN1234") {
            this.isExamActive = false;
            document.getElementById('exam-app').style.display = 'none';
            document.getElementById('result-app').style.display = 'none';
            document.getElementById('admin-app').style.display = 'block';
            
            document.getElementById('admin-cat-select').value = this.currentCategory;
            this.renderAdminList();
        } else if(pass) {
            alert("ভুল পাসওয়ার্ড!");
        }
    }

    closeAdmin() {
        document.getElementById('admin-app').style.display = 'none';
        document.getElementById('exam-app').style.display = 'block';
        this.switchCategory(document.getElementById('admin-cat-select').value);
    }

    renderAdminList() {
        const cat = document.getElementById('admin-cat-select').value;
        const container = document.getElementById('admin-list');
        document.getElementById('admin-cat-label').innerText = cat === 'Cleaner' ? 'Cleaner' : 'Load & Unload';
        
        container.innerHTML = '';
        const list = this.questionsData[cat] || [];
        
        if(list.length === 0) {
            container.innerHTML = '<p style="color:red;">কোনো প্রশ্ন নেই।</p>';
            return;
        }

        list.forEach((q, idx) => {
            const item = document.createElement('div');
            item.className = 'admin-q-item';
            item.innerHTML = `
                <div style="flex:1;">
                    <strong style="color:#1f2937; font-size: 14px;">${idx + 1}. ${q.q}</strong><br>
                    <small style="color:var(--primary); font-weight:bold; font-size: 13px;">সঠিক উত্তর: ${q.opts[q.ans]}</small>
                </div>
                <button class="btn-delete" onclick="app.deleteQuestion('${cat}', ${idx})">ডিলিট</button>
            `;
            container.appendChild(item);
        });
    }

    quickFill(type) {
        if(type === 'yesno') {
            document.getElementById('adm-opt-0').value = 'হ্যাঁ';
            document.getElementById('adm-opt-1').value = 'না';
            document.getElementById('adm-opt-2').value = '';
            document.getElementById('adm-opt-3').value = '';
        } else if (type === 'truefalse') {
            document.getElementById('adm-opt-0').value = 'সত্য';
            document.getElementById('adm-opt-1').value = 'মিথ্যা';
            document.getElementById('adm-opt-2').value = '';
            document.getElementById('adm-opt-3').value = '';
        } else {
            document.getElementById('adm-opt-0').value = '';
            document.getElementById('adm-opt-1').value = '';
            document.getElementById('adm-opt-2').value = '';
            document.getElementById('adm-opt-3').value = '';
        }
    }

    addQuestion() {
        const cat = document.getElementById('admin-cat-select').value;
        const qText = document.getElementById('adm-q').value.trim();
        const opt0 = document.getElementById('adm-opt-0').value.trim();
        const opt1 = document.getElementById('adm-opt-1').value.trim();
        const opt2 = document.getElementById('adm-opt-2').value.trim();
        const opt3 = document.getElementById('adm-opt-3').value.trim();
        const ans = parseInt(document.getElementById('adm-ans').value);

        if (!qText || !opt0 || !opt1) {
            alert("প্রশ্ন এবং অন্তত প্রথম দুটি অপশন (A ও B) দেওয়া বাধ্যতামূলক!");
            return;
        }

        const opts = [opt0, opt1];
        if (opt2) opts.push(opt2);
        if (opt3) opts.push(opt3);

        if (ans >= opts.length) {
            alert("যে অপশনটি সঠিক উত্তর হিসেবে নির্বাচন করেছেন, সেই ঘরটি খালি!");
            return;
        }

        this.questionsData[cat].push({ q: qText, opts, ans });
        this.saveDatabase();
        this.renderAdminList();

        document.getElementById('adm-q').value = '';
        this.quickFill('clear');
        alert("প্রশ্ন যুক্ত করা হয়েছে!");
    }

    deleteQuestion(cat, index) {
        if (confirm("প্রশ্নটি মুছে ফেলতে চান?")) {
            this.questionsData[cat].splice(index, 1);
            this.saveDatabase();
            this.renderAdminList();
        }
    }
}

// একদম শেষে এই লাইনটি গ্লোবালি সব ফাংশন চালু করবে
window.app = new CBTApp();

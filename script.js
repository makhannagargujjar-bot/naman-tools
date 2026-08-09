/* =========================================
   NAMAN TOOLS
   MAIN JAVASCRIPT
   STEP 2
========================================= */

"use strict";


/* =========================================
   MOBILE MENU
========================================= */

const menuBtn =
    document.getElementById("menuBtn");

const mobileMenu =
    document.getElementById("mobileMenu");


if(menuBtn && mobileMenu){

    menuBtn.addEventListener("click", () => {

        mobileMenu.classList.toggle("active");

    });


    /* Close menu after clicking a link */

    mobileMenu
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener("click", () => {

                mobileMenu.classList.remove("active");

            });

        });

}


/* =========================================
   PAGE LOADER
========================================= */


/* =========================================
   SMOOTH SCROLL
========================================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener("click", function(event){

            const target =
                document.querySelector(
                    this.getAttribute("href")
                );


            if(target){

                event.preventDefault();

                target.scrollIntoView({

                    behavior:"smooth",

                    block:"start"

                });

            }

        });

    });


/* =========================================
   TOOL CARD TOUCH FEEDBACK
========================================= */

document
    .querySelectorAll(".tool-card")
    .forEach(card => {

        card.addEventListener(
            "touchstart",
            () => {

                card.classList.add("touching");

            },
            {passive:true}
        );


        card.addEventListener(
            "touchend",
            () => {

                card.classList.remove("touching");

            },
            {passive:true}
        );

    });


/* =========================================
   CONSOLE
========================================= */

console.log(
    "Naman Tools loaded successfully ⚡"
);const toolSearch = document.getElementById("toolSearch");

if(toolSearch){

    toolSearch.addEventListener("input", function(){

        const search = this.value.toLowerCase().trim();

        document.querySelectorAll(".tool-card").forEach(card => {

            const text = card.innerText.toLowerCase();

            card.style.display =
                text.includes(search) ? "flex" : "none";

        });

    });

}/* ================================
   NAMAN TOOLS SEARCH
================================ */

document.addEventListener("DOMContentLoaded", function () {

    const searchBox = document.getElementById("toolSearch");

    if (!searchBox) return;

    searchBox.addEventListener("input", function () {

        const searchText = this.value.toLowerCase().trim();

        // All possible tool cards
        const tools = document.querySelectorAll(
            ".tool-card, .tool-box, .tool-item, .tool"
        );

        tools.forEach(function (tool) {

            const toolText = tool.innerText.toLowerCase();

            if (toolText.includes(searchText)) {
                tool.style.display = "";
            } else {
                tool.style.display = "none";
            }

        });

    });

});/* =================================
   NAMAN TOOLS PAGE LOADER
================================= */

const pageLoader = document.getElementById("pageLoader");

if (pageLoader) {

    // Check: kya homepage fresh open hua hai?
    const isFreshOpen =
        !sessionStorage.getItem("namanToolsVisited");

    if (isFreshOpen) {

        // First visit → logo show
        pageLoader.style.display = "flex";

        sessionStorage.setItem(
            "namanToolsVisited",
            "true"
        );

        setTimeout(() => {

            pageLoader.style.opacity = "0";

            setTimeout(() => {
                pageLoader.style.display = "none";
            }, 300);

        }, 900);

    } else {

        // Tool se Back → logo nahi
        pageLoader.style.display = "none";

    }
}/* =========================================
   WORD COUNTER
========================================= */

const wordInput = document.getElementById("wordInput");
const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");
const sentenceCount = document.getElementById("sentenceCount");
const clearText = document.getElementById("clearText");


if (wordInput) {

    wordInput.addEventListener("input", function () {

        const text = wordInput.value.trim();


        // Character Count
        charCount.textContent =
            wordInput.value.length;


        // Word Count
        if (text === "") {

            wordCount.textContent = "0";

        } else {

            wordCount.textContent =
                text.split(/\s+/).length;

        }


        // Sentence Count
        if (text === "") {

            sentenceCount.textContent = "0";

        } else {

            const sentences =
                text
                    .split(/[.!?]+/)
                    .filter(sentence =>
                        sentence.trim().length > 0
                    );

            sentenceCount.textContent =
                sentences.length;

        }

    });


    // Clear Text
    if (clearText) {

        clearText.addEventListener("click", function () {

            wordInput.value = "";

            wordCount.textContent = "0";
            charCount.textContent = "0";
            sentenceCount.textContent = "0";

            wordInput.focus();

        });

    }

}/* =========================================
   NAMAN TOOLS
   TEXT CASE CONVERTER
========================================= */

const caseInput =
    document.getElementById("caseInput");

const caseWordCount =
    document.getElementById("caseWordCount");

const caseCharTotal =
    document.getElementById("caseCharTotal");

const caseCharCount =
    document.getElementById("caseCharCount");

const caseCopy =
    document.getElementById("caseCopy");

const caseClear =
    document.getElementById("caseClear");

const caseMessage =
    document.getElementById("caseMessage");


if (caseInput) {


    /* ===============================
       UPDATE COUNTS
    =============================== */

    function updateCaseCounts() {

        const text =
            caseInput.value;

        const trimmed =
            text.trim();

        let words = 0;

        if (trimmed !== "") {

            words =
                trimmed.split(/\s+/).length;

        }


        caseWordCount.textContent =
            words;

        caseCharTotal.textContent =
            text.length;

        caseCharCount.textContent =
            text.length + " characters";

    }


    /* ===============================
       SHOW MESSAGE
    =============================== */

    function showCaseMessage(message) {

        caseMessage.textContent =
            message;

        setTimeout(() => {

            caseMessage.textContent = "";

        }, 1800);

    }


    /* ===============================
       UPPERCASE
    =============================== */

    function makeUppercase(text) {

        return text.toUpperCase();

    }


    /* ===============================
       LOWERCASE
    =============================== */

    function makeLowercase(text) {

        return text.toLowerCase();

    }


    /* ===============================
       TITLE CASE
    =============================== */

    function makeTitleCase(text) {

        return text
            .toLowerCase()
            .replace(
                /\b\w/g,
                letter => letter.toUpperCase()
            );

    }


    /* ===============================
       SENTENCE CASE
    =============================== */

    function makeSentenceCase(text) {

        const lower =
            text.toLowerCase();

        return lower.replace(
            /(^\s*\w|[.!?]\s*\w)/g,
            match => match.toUpperCase()
        );

    }


    /* ===============================
       TOGGLE CASE
    =============================== */

    function makeToggleCase(text) {

        return [...text]
            .map(letter => {

                if (
                    letter === letter.toUpperCase() &&
                    letter !== letter.toLowerCase()
                ) {

                    return letter.toLowerCase();

                }

                if (
                    letter === letter.toLowerCase() &&
                    letter !== letter.toUpperCase()
                ) {

                    return letter.toUpperCase();

                }

                return letter;

            })
            .join("");

    }


    /* ===============================
       CASE BUTTONS
    =============================== */

    document
        .querySelectorAll(".case-action")
        .forEach(button => {

            button.addEventListener(
                "click",
                function () {

                    const type =
                        this.dataset.case;

                    const text =
                        caseInput.value;


                    if (type === "upper") {

                        caseInput.value =
                            makeUppercase(text);

                    }


                    if (type === "lower") {

                        caseInput.value =
                            makeLowercase(text);

                    }


                    if (type === "title") {

                        caseInput.value =
                            makeTitleCase(text);

                    }


                    if (type === "sentence") {

                        caseInput.value =
                            makeSentenceCase(text);

                    }


                    if (type === "toggle") {

                        caseInput.value =
                            makeToggleCase(text);

                    }


                    updateCaseCounts();

                    caseInput.focus();

                }

            );

        });


    /* ===============================
       INPUT
    =============================== */

    caseInput.addEventListener(
        "input",
        updateCaseCounts
    );


    /* ===============================
       COPY
    =============================== */

    if (caseCopy) {

        caseCopy.addEventListener(
            "click",
            async function () {

                const text =
                    caseInput.value;

                if (!text.trim()) {

                    showCaseMessage(
                        "Nothing to copy"
                    );

                    return;

                }


                try {

                    await navigator.clipboard.writeText(
                        text
                    );

                    showCaseMessage(
                        "✓ Text copied successfully"
                    );

                } catch (error) {

                    caseInput.select();

                    document.execCommand("copy");

                    showCaseMessage(
                        "✓ Text copied"
                    );

                }

            }
        );

    }


    /* ===============================
       CLEAR
    =============================== */

    if (caseClear) {

        caseClear.addEventListener(
            "click",
            function () {

                caseInput.value = "";

                updateCaseCounts();

                showCaseMessage(
                    "Text cleared"
                );

                caseInput.focus();

            }
        );

    }


    /* Initial count */

    updateCaseCounts();

}/* =========================================
   NAMAN TOOLS
   RANDOM NUMBER GENERATOR
========================================= */

const randomMin =
    document.getElementById("randomMin");

const randomMax =
    document.getElementById("randomMax");

const randomQuantity =
    document.getElementById("randomQuantity");

const uniqueNumbers =
    document.getElementById("uniqueNumbers");

const generateRandom =
    document.getElementById("generateRandom");

const randomResult =
    document.getElementById("randomResult");

const randomCount =
    document.getElementById("randomCount");

const copyRandom =
    document.getElementById("copyRandom");

const clearRandom =
    document.getElementById("clearRandom");

const randomMessage =
    document.getElementById("randomMessage");


if (
    randomMin &&
    randomMax &&
    randomQuantity &&
    generateRandom &&
    randomResult
) {


    let generatedNumbers = [];


    /* ===============================
       MESSAGE
    =============================== */

    function showRandomMessage(message) {

        randomMessage.textContent =
            message;

        setTimeout(() => {

            randomMessage.textContent = "";

        }, 1800);

    }


    /* ===============================
       GENERATE
    =============================== */

    function generateNumbers() {

        let min =
            Number(randomMin.value);

        let max =
            Number(randomMax.value);

        let quantity =
            Number(randomQuantity.value);


        /* Fix invalid values */

        if (!Number.isFinite(min)) {
            min = 1;
        }

        if (!Number.isFinite(max)) {
            max = 100;
        }

        if (!Number.isFinite(quantity)) {
            quantity = 1;
        }


        min = Math.ceil(min);
        max = Math.floor(max);

        quantity = Math.floor(quantity);


        /* Swap if needed */

        if (min > max) {

            const temp = min;

            min = max;
            max = temp;

        }


        /* Quantity limits */

        quantity =
            Math.max(
                1,
                Math.min(100, quantity)
            );


        /* Unique check */

        const available =
            max - min + 1;


        if (
            uniqueNumbers &&
            uniqueNumbers.checked &&
            quantity > available
        ) {

            showRandomMessage(
                "Not enough unique numbers in this range"
            );

            return;

        }


        generatedNumbers = [];


        /* Generate numbers */

        if (
            uniqueNumbers &&
            uniqueNumbers.checked
        ) {

            const used =
                new Set();


            while (
                generatedNumbers.length <
                quantity
            ) {

                const number =
                    Math.floor(
                        Math.random() *
                        (max - min + 1)
                    ) + min;


                if (!used.has(number)) {

                    used.add(number);

                    generatedNumbers.push(
                        number
                    );

                }

            }

        } else {

            for (
                let i = 0;
                i < quantity;
                i++
            ) {

                const number =
                    Math.floor(
                        Math.random() *
                        (max - min + 1)
                    ) + min;


                generatedNumbers.push(
                    number
                );

            }

        }


        /* Display */

        randomResult.innerHTML =
            generatedNumbers
                .map(number => {

                    return `
                        <span class="random-number">
                            ${number}
                        </span>
                    `;

                })
                .join("");


        randomCount.textContent =
            generatedNumbers.length +
            (
                generatedNumbers.length === 1
                    ? " number"
                    : " numbers"
            );

    }


    /* ===============================
       GENERATE BUTTON
    =============================== */

    generateRandom.addEventListener(
        "click",
        generateNumbers
    );


    /* ===============================
       COPY
    =============================== */

    if (copyRandom) {

        copyRandom.addEventListener(
            "click",
            async function () {

                if (
                    generatedNumbers.length === 0
                ) {

                    showRandomMessage(
                        "Generate numbers first"
                    );

                    return;

                }


                const text =
                    generatedNumbers.join(", ");


                try {

                    await navigator.clipboard.writeText(
                        text
                    );

                    showRandomMessage(
                        "✓ Numbers copied"
                    );

                } catch (error) {

                    showRandomMessage(
                        "Copy failed"
                    );

                }

            }
        );

    }


    /* ===============================
       CLEAR
    =============================== */

    if (clearRandom) {

        clearRandom.addEventListener(
            "click",
            function () {

                generatedNumbers = [];

                randomResult.innerHTML = `
                    <span class="random-placeholder">
                        Your random numbers will appear here
                    </span>
                `;

                randomCount.textContent =
                    "0 numbers";

                showRandomMessage(
                    "Cleared"
                );

            }
        );

    }

}/* =========================================
   NAMAN TOOLS
   STOPWATCH
========================================= */

const stopwatchDisplay =
    document.getElementById("stopwatchDisplay");

const stopwatchHours =
    document.getElementById("stopwatchHours");

const stopwatchMinutes =
    document.getElementById("stopwatchMinutes");

const stopwatchSeconds =
    document.getElementById("stopwatchSeconds");

const stopwatchMilliseconds =
    document.getElementById("stopwatchMilliseconds");

const stopwatchStatus =
    document.getElementById("stopwatchStatus");

const stopwatchStart =
    document.getElementById("stopwatchStart");

const stopwatchPause =
    document.getElementById("stopwatchPause");

const stopwatchLap =
    document.getElementById("stopwatchLap");

const stopwatchReset =
    document.getElementById("stopwatchReset");

const lapList =
    document.getElementById("lapList");

const lapCount =
    document.getElementById("lapCount");


if (
    stopwatchDisplay &&
    stopwatchStart &&
    stopwatchPause &&
    stopwatchReset
) {


    let stopwatchStartTime = 0;

    let stopwatchElapsed = 0;

    let stopwatchTimer = null;

    let isStopwatchRunning = false;

    let lapNumber = 0;

    let lastLapTime = 0;


    /* ===============================
       FORMAT TIME
    =============================== */

    function formatStopwatchTime(milliseconds) {

        const hours =
            Math.floor(
                milliseconds / 3600000
            );

        const minutes =
            Math.floor(
                (milliseconds % 3600000) / 60000
            );

        const seconds =
            Math.floor(
                (milliseconds % 60000) / 1000
            );

        const ms =
            Math.floor(
                (milliseconds % 1000) / 10
            );


        return {

            hours:
                String(hours).padStart(2, "0"),

            minutes:
                String(minutes).padStart(2, "0"),

            seconds:
                String(seconds).padStart(2, "0"),

            milliseconds:
                String(ms).padStart(2, "0")

        };

    }


    /* ===============================
       UPDATE DISPLAY
    =============================== */

    function updateStopwatch() {

        const time =
            stopwatchElapsed +
            (
                isStopwatchRunning
                    ? performance.now() -
                      stopwatchStartTime
                    : 0
            );


        const formatted =
            formatStopwatchTime(time);


        stopwatchHours.textContent =
            formatted.hours;

        stopwatchMinutes.textContent =
            formatted.minutes;

        stopwatchSeconds.textContent =
            formatted.seconds;

        stopwatchMilliseconds.textContent =
            formatted.milliseconds;

    }


    /* ===============================
       ANIMATION LOOP
    =============================== */

    function stopwatchLoop() {

        updateStopwatch();

        if (isStopwatchRunning) {

            stopwatchTimer =
                requestAnimationFrame(
                    stopwatchLoop
                );

        }

    }


    /* ===============================
       START
    =============================== */

    stopwatchStart.addEventListener(
        "click",
        function () {

            if (isStopwatchRunning) {
                return;
            }


            stopwatchStartTime =
                performance.now();


            isStopwatchRunning = true;


            stopwatchStatus.textContent =
                "Running";


            stopwatchStatus.style.background =
                "#ecfdf3";

            stopwatchStatus.style.color =
                "#027a48";


            stopwatchStart.disabled =
                true;

            stopwatchPause.disabled =
                false;

            stopwatchLap.disabled =
                false;


            stopwatchLoop();

        }
    );


    /* ===============================
       PAUSE
    =============================== */

    stopwatchPause.addEventListener(
        "click",
        function () {

            if (!isStopwatchRunning) {
                return;
            }


            stopwatchElapsed +=
                performance.now() -
                stopwatchStartTime;


            isStopwatchRunning = false;


            cancelAnimationFrame(
                stopwatchTimer
            );


            updateStopwatch();


            stopwatchStatus.textContent =
                "Paused";


            stopwatchStatus.style.background =
                "#fff7ed";

            stopwatchStatus.style.color =
                "#c2410c";


            stopwatchStart.disabled =
                false;

            stopwatchPause.disabled =
                true;

            stopwatchLap.disabled =
                true;

        }
    );


    /* ===============================
       LAP
    =============================== */

    stopwatchLap.addEventListener(
        "click",
        function () {

            if (!isStopwatchRunning) {
                return;
            }


            const currentTime =
                stopwatchElapsed +
                (
                    performance.now() -
                    stopwatchStartTime
                );


            const lapTime =
                currentTime -
                lastLapTime;


            lastLapTime =
                currentTime;


            lapNumber++;


            const formatted =
                formatStopwatchTime(
                    lapTime
                );


            const empty =
                lapList.querySelector(
                    ".lap-empty"
                );


            if (empty) {
                empty.remove();
            }


            const lap =
                document.createElement("div");


            lap.className =
                "lap-item";


            lap.innerHTML = `

                <span class="lap-number">
                    Lap ${lapNumber}
                </span>

                <span class="lap-time">
                    ${formatted.hours}:${formatted.minutes}:${formatted.seconds}.${formatted.milliseconds}
                </span>

            `;


            lapList.prepend(lap);


            lapCount.textContent =
                lapNumber;

        }
    );


    /* ===============================
       RESET
    =============================== */

    stopwatchReset.addEventListener(
        "click",
        function () {

            isStopwatchRunning = false;


            cancelAnimationFrame(
                stopwatchTimer
            );


            stopwatchElapsed = 0;

            stopwatchStartTime = 0;

            lapNumber = 0;

            lastLapTime = 0;


            updateStopwatch();


            stopwatchStatus.textContent =
                "Ready";


            stopwatchStatus.style.background =
                "#f2f4f7";

            stopwatchStatus.style.color =
                "#667085";


            stopwatchStart.disabled =
                false;

            stopwatchPause.disabled =
                true;

            stopwatchLap.disabled =
                true;


            lapList.innerHTML = `

                <div class="lap-empty">
                    No laps recorded yet
                </div>

            `;


            lapCount.textContent =
                "0";

        }
    );


    /* Initial display */

    updateStopwatch();

}/* =========================================
   NAMAN TOOLS
   COUNTDOWN TIMER
========================================= */

const countdownDisplay =
    document.getElementById("countdownDisplay");

const countdownHours =
    document.getElementById("countdownHours");

const countdownMinutes =
    document.getElementById("countdownMinutes");

const countdownSeconds =
    document.getElementById("countdownSeconds");

const countdownStatus =
    document.getElementById("countdownStatus");

const countdownHoursInput =
    document.getElementById("countdownHoursInput");

const countdownMinutesInput =
    document.getElementById("countdownMinutesInput");

const countdownSecondsInput =
    document.getElementById("countdownSecondsInput");

const countdownStart =
    document.getElementById("countdownStart");

const countdownPause =
    document.getElementById("countdownPause");

const countdownReset =
    document.getElementById("countdownReset");

const countdownMessage =
    document.getElementById("countdownMessage");


if (
    countdownDisplay &&
    countdownHours &&
    countdownMinutes &&
    countdownSeconds &&
    countdownStart
) {


    let countdownTotal = 0;

    let countdownRemaining = 0;

    let countdownEndTime = 0;

    let countdownTimer = null;

    let countdownRunning = false;


    /* ===============================
       FORMAT
    =============================== */

    function formatCountdown(milliseconds) {

        const totalSeconds =
            Math.max(
                0,
                Math.ceil(
                    milliseconds / 1000
                )
            );


        const hours =
            Math.floor(
                totalSeconds / 3600
            );


        const minutes =
            Math.floor(
                (totalSeconds % 3600) / 60
            );


        const seconds =
            totalSeconds % 60;


        return {

            hours:
                String(hours).padStart(2, "0"),

            minutes:
                String(minutes).padStart(2, "0"),

            seconds:
                String(seconds).padStart(2, "0")

        };

    }


    /* ===============================
       UPDATE DISPLAY
    =============================== */

    function updateCountdownDisplay() {

        const formatted =
            formatCountdown(
                countdownRemaining
            );


        countdownHours.textContent =
            formatted.hours;

        countdownMinutes.textContent =
            formatted.minutes;

        countdownSeconds.textContent =
            formatted.seconds;

    }


    /* ===============================
       GET INPUT TIME
    =============================== */

    function getInputMilliseconds() {

        let hours =
            Number(
                countdownHoursInput.value
            );

        let minutes =
            Number(
                countdownMinutesInput.value
            );

        let seconds =
            Number(
                countdownSecondsInput.value
            );


        if (!Number.isFinite(hours)) {
            hours = 0;
        }

        if (!Number.isFinite(minutes)) {
            minutes = 0;
        }

        if (!Number.isFinite(seconds)) {
            seconds = 0;
        }


        hours =
            Math.max(
                0,
                Math.min(99, Math.floor(hours))
            );


        minutes =
            Math.max(
                0,
                Math.min(59, Math.floor(minutes))
            );


        seconds =
            Math.max(
                0,
                Math.min(59, Math.floor(seconds))
            );


        countdownHoursInput.value =
            hours;

        countdownMinutesInput.value =
            minutes;

        countdownSecondsInput.value =
            seconds;


        return (
            hours * 3600000
        ) + (
            minutes * 60000
        ) + (
            seconds * 1000
        );

    }


    /* ===============================
       STATUS
    =============================== */

    function setCountdownStatus(
        text,
        background,
        color
    ) {

        countdownStatus.textContent =
            text;

        countdownStatus.style.background =
            background;

        countdownStatus.style.color =
            color;

    }


    /* ===============================
       START
    =============================== */

    function startCountdown() {

        if (countdownRunning) {
            return;
        }


        if (countdownRemaining <= 0) {

            countdownTotal =
                getInputMilliseconds();

            countdownRemaining =
                countdownTotal;

        }


        if (countdownRemaining <= 0) {

            countdownMessage.textContent =
                "Please set a time first.";

            setTimeout(() => {

                countdownMessage.textContent =
                    "";

            }, 1800);

            return;

        }


        countdownEndTime =
            Date.now() +
            countdownRemaining;


        countdownRunning = true;


        countdownStart.disabled =
            true;

        countdownPause.disabled =
            false;


        setCountdownStatus(
            "Running",
            "#ecfdf3",
            "#027a48"
        );


        countdownLoop();

    }


    /* ===============================
       LOOP
    =============================== */

    function countdownLoop() {

        if (!countdownRunning) {
            return;
        }


        countdownRemaining =
            Math.max(
                0,
                countdownEndTime -
                Date.now()
            );


        updateCountdownDisplay();


        if (countdownRemaining <= 0) {

            countdownRunning =
                false;


            countdownTimer =
                null;


            countdownStart.disabled =
                false;

            countdownPause.disabled =
                true;


            setCountdownStatus(
                "Time's Up!",
                "#fef2f2",
                "#dc2626"
            );


            countdownMessage.textContent =
                "⏰ Countdown finished!";


            return;

        }


        countdownTimer =
            requestAnimationFrame(
                countdownLoop
            );

    }


    /* ===============================
       START BUTTON
    =============================== */

    countdownStart.addEventListener(
        "click",
        startCountdown
    );


    /* ===============================
       PAUSE
    =============================== */

    countdownPause.addEventListener(
        "click",
        function () {

            if (!countdownRunning) {
                return;
            }


            countdownRemaining =
                Math.max(
                    0,
                    countdownEndTime -
                    Date.now()
                );


            countdownRunning =
                false;


            cancelAnimationFrame(
                countdownTimer
            );


            updateCountdownDisplay();


            countdownStart.disabled =
                false;

            countdownPause.disabled =
                true;


            setCountdownStatus(
                "Paused",
                "#fff7ed",
                "#c2410c"
            );

        }
    );


    /* ===============================
       RESET
    =============================== */

    countdownReset.addEventListener(
        "click",
        function () {

            countdownRunning =
                false;


            cancelAnimationFrame(
                countdownTimer
            );


            countdownTotal =
                getInputMilliseconds();


            countdownRemaining =
                countdownTotal;


            updateCountdownDisplay();


            countdownStart.disabled =
                false;

            countdownPause.disabled =
                true;


            setCountdownStatus(
                "Ready",
                "#f2f4f7",
                "#667085"
            );


            countdownMessage.textContent =
                "";

        }
    );


    /* ===============================
       INPUT CHANGES
    =============================== */

    [
        countdownHoursInput,
        countdownMinutesInput,
        countdownSecondsInput
    ].forEach(input => {

        input.addEventListener(
            "input",
            function () {

                if (countdownRunning) {
                    return;
                }


                countdownTotal =
                    getInputMilliseconds();


                countdownRemaining =
                    countdownTotal;


                updateCountdownDisplay();


                setCountdownStatus(
                    "Ready",
                    "#f2f4f7",
                    "#667085"
                );

            }
        );

    });


    /* Initial display */

    countdownTotal =
        getInputMilliseconds();

    countdownRemaining =
        countdownTotal;

    updateCountdownDisplay();

}/* =========================================
   NAMAN TOOLS
   PASSWORD GENERATOR
========================================= */

const passwordOutput =
    document.getElementById("passwordOutput");

const passwordLength =
    document.getElementById("passwordLength");

const lengthValue =
    document.getElementById("lengthValue");

const uppercase =
    document.getElementById("uppercase");

const lowercase =
    document.getElementById("lowercase");

const numbers =
    document.getElementById("numbers");

const symbols =
    document.getElementById("symbols");

const generatePassword =
    document.getElementById("generatePassword");

const copyPassword =
    document.getElementById("copyPassword");

const copyMessage =
    document.getElementById("copyMessage");

const strengthText =
    document.getElementById("strengthText");

const strengthBar =
    document.getElementById("strengthBar");


if (
    passwordOutput &&
    passwordLength &&
    generatePassword
) {


    /* =====================================
       CHARACTER SETS
    ===================================== */

    const upperChars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const lowerChars =
        "abcdefghijklmnopqrstuvwxyz";

    const numberChars =
        "0123456789";

    const symbolChars =
        "!@#$%^&*()_+-=[]{}|;:,.<>?";


    /* =====================================
       SECURE RANDOM CHARACTER
    ===================================== */

    function secureRandom(max) {

        const array =
            new Uint32Array(1);

        crypto.getRandomValues(array);

        return array[0] % max;

    }


    /* =====================================
       GENERATE PASSWORD
    ===================================== */

    function createPassword() {

        let characters = "";

        const selectedSets = [];


        if (uppercase.checked) {

            characters += upperChars;

            selectedSets.push(
                upperChars
            );

        }


        if (lowercase.checked) {

            characters += lowerChars;

            selectedSets.push(
                lowerChars
            );

        }


        if (numbers.checked) {

            characters += numberChars;

            selectedSets.push(
                numberChars
            );

        }


        if (symbols.checked) {

            characters += symbolChars;

            selectedSets.push(
                symbolChars
            );

        }


        /* At least one option */

        if (!characters) {

            lowercase.checked = true;

            characters = lowerChars;

            selectedSets.length = 0;

            selectedSets.push(
                lowerChars
            );

        }


        const length =
            Number(
                passwordLength.value
            );


        let password = "";


        /*
           Put one character from every
           selected category first.
        */

        selectedSets.forEach(set => {

            password +=
                set[
                    secureRandom(
                        set.length
                    )
                ];

        });


        /* Fill remaining characters */

        while (
            password.length < length
        ) {

            password +=
                characters[
                    secureRandom(
                        characters.length
                    )
                ];

        }


        /* Shuffle password */

        const passwordArray =
            password.split("");


        for (
            let i =
                passwordArray.length - 1;
            i > 0;
            i--
        ) {

            const j =
                secureRandom(i + 1);


            [
                passwordArray[i],
                passwordArray[j]
            ] = [
                passwordArray[j],
                passwordArray[i]
            ];

        }


        password =
            passwordArray.join("");


        passwordOutput.value =
            password;


        updateStrength();

    }


    /* =====================================
       STRENGTH
    ===================================== */

    function updateStrength() {

        const length =
            Number(
                passwordLength.value
            );


        let options = 0;


        if (uppercase.checked)
            options++;


        if (lowercase.checked)
            options++;


        if (numbers.checked)
            options++;


        if (symbols.checked)
            options++;


        let score = 0;


        if (length >= 8)
            score++;


        if (length >= 12)
            score++;


        if (length >= 16)
            score++;


        if (options >= 2)
            score++;


        if (options >= 3)
            score++;


        if (score <= 2) {

            strengthText.textContent =
                "Weak";

            strengthText.style.color =
                "#dc2626";

            strengthBar.style.width =
                "30%";

            strengthBar.style.background =
                "#ef4444";

        }

        else if (score <= 4) {

            strengthText.textContent =
                "Good";

            strengthText.style.color =
                "#c2410c";

            strengthBar.style.width =
                "60%";

            strengthBar.style.background =
                "#f59e0b";

        }

        else {

            strengthText.textContent =
                "Strong";

            strengthText.style.color =
                "#027a48";

            strengthBar.style.width =
                "100%";

            strengthBar.style.background =
                "#22c55e";

        }

    }


    /* =====================================
       LENGTH
    ===================================== */

    passwordLength.addEventListener(
        "input",
        function () {

            lengthValue.textContent =
                this.value;

            createPassword();

        }
    );


    /* =====================================
       OPTIONS
    ===================================== */

    [
        uppercase,
        lowercase,
        numbers,
        symbols
    ].forEach(option => {

        option.addEventListener(
            "change",
            function () {

                createPassword();

            }
        );

    });


    /* =====================================
       GENERATE
    ===================================== */

    generatePassword.addEventListener(
        "click",
        function () {

            createPassword();

            copyMessage.textContent =
                "";

        }
    );


    /* =====================================
       COPY
    ===================================== */

    if (copyPassword) {

        copyPassword.addEventListener(
            "click",
            async function () {

                if (!passwordOutput.value) {
                    return;
                }


                try {

                    await navigator.clipboard.writeText(
                        passwordOutput.value
                    );


                    copyMessage.textContent =
                        "✓ Password copied!";


                } catch (error) {

                    passwordOutput.select();

                    document.execCommand(
                        "copy"
                    );


                    copyMessage.textContent =
                        "✓ Password copied!";

                }


                setTimeout(() => {

                    copyMessage.textContent =
                        "";

                }, 1800);

            }
        );

    }


    /* =====================================
       INITIAL PASSWORD
    ===================================== */

    lengthValue.textContent =
        passwordLength.value;

    createPassword();

}/* =========================================
   NAMAN TOOLS
   TOOL #8
   PASSWORD STRENGTH CHECKER
========================================= */

const strengthPassword =
    document.getElementById(
        "strengthPassword"
    );

const toggleStrengthPassword =
    document.getElementById(
        "toggleStrengthPassword"
    );

const strengthStatus =
    document.getElementById(
        "strengthStatus"
    );

const strengthMeter =
    document.getElementById(
        "strengthMeter"
    );

const reqLength =
    document.getElementById(
        "reqLength"
    );

const reqUpper =
    document.getElementById(
        "reqUpper"
    );

const reqLower =
    document.getElementById(
        "reqLower"
    );

const reqNumber =
    document.getElementById(
        "reqNumber"
    );

const reqSymbol =
    document.getElementById(
        "reqSymbol"
    );

const passwordLengthCount =
    document.getElementById(
        "passwordLengthCount"
    );

const passwordScore =
    document.getElementById(
        "passwordScore"
    );

const securityTip =
    document.getElementById(
        "securityTip"
    );

const clearStrength =
    document.getElementById(
        "clearStrength"
    );


if (strengthPassword) {


    /* =====================================
       CHECK PASSWORD
    ===================================== */

    function checkPasswordStrength() {

        const password =
            strengthPassword.value;


        const hasLength =
            password.length >= 8;

        const hasUpper =
            /[A-Z]/.test(password);

        const hasLower =
            /[a-z]/.test(password);

        const hasNumber =
            /[0-9]/.test(password);

        const hasSymbol =
            /[^A-Za-z0-9]/.test(password);


        /* =================================
           UPDATE REQUIREMENTS
        ================================= */

        reqLength.classList.toggle(
            "valid",
            hasLength
        );

        reqUpper.classList.toggle(
            "valid",
            hasUpper
        );

        reqLower.classList.toggle(
            "valid",
            hasLower
        );

        reqNumber.classList.toggle(
            "valid",
            hasNumber
        );

        reqSymbol.classList.toggle(
            "valid",
            hasSymbol
        );


        /* =================================
           SCORE
        ================================= */

        let score = 0;


        if (hasLength)
            score++;


        if (hasUpper)
            score++;


        if (hasLower)
            score++;


        if (hasNumber)
            score++;


        if (hasSymbol)
            score++;


        passwordLengthCount.textContent =
            password.length;


        passwordScore.textContent =
            score + "/5";


        /* =================================
           EMPTY PASSWORD
        ================================= */

        if (password.length === 0) {

            strengthStatus.textContent =
                "Enter Password";

            strengthStatus.style.color =
                "#98a2b3";

            strengthMeter.style.width =
                "0%";

            strengthMeter.style.background =
                "#d1d5db";

            securityTip.textContent =
                "Use a long password with letters, numbers and symbols.";

            return;

        }


        /* =================================
           WEAK
        ================================= */

        if (score <= 2) {

            strengthStatus.textContent =
                "Weak";

            strengthStatus.style.color =
                "#dc2626";

            strengthMeter.style.width =
                "30%";

            strengthMeter.style.background =
                "#ef4444";

            securityTip.textContent =
                "Add more characters, uppercase letters, numbers and symbols.";

        }


        /* =================================
           MEDIUM
        ================================= */

        else if (score === 3) {

            strengthStatus.textContent =
                "Medium";

            strengthStatus.style.color =
                "#d97706";

            strengthMeter.style.width =
                "55%";

            strengthMeter.style.background =
                "#f59e0b";

            securityTip.textContent =
                "Good start. Add another character type to make it stronger.";

        }


        /* =================================
           STRONG
        ================================= */

        else if (score === 4) {

            strengthStatus.textContent =
                "Strong";

            strengthStatus.style.color =
                "#0284c7";

            strengthMeter.style.width =
                "78%";

            strengthMeter.style.background =
                "#0ea5e9";

            securityTip.textContent =
                "Strong password. A longer password is even better.";

        }


        /* =================================
           VERY STRONG
        ================================= */

        else {

            strengthStatus.textContent =
                "Very Strong";

            strengthStatus.style.color =
                "#027a48";

            strengthMeter.style.width =
                "100%";

            strengthMeter.style.background =
                "#22c55e";

            securityTip.textContent =
                "Excellent! Your password meets all basic security requirements.";

        }

    }


    /* =====================================
       LIVE CHECK
    ===================================== */

    strengthPassword.addEventListener(
        "input",
        checkPasswordStrength
    );


    /* =====================================
       SHOW / HIDE
    ===================================== */

    if (toggleStrengthPassword) {

        toggleStrengthPassword.addEventListener(
            "click",
            function () {

                if (
                    strengthPassword.type ===
                    "password"
                ) {

                    strengthPassword.type =
                        "text";

                    toggleStrengthPassword.textContent =
                        "🙈";

                }

                else {

                    strengthPassword.type =
                        "password";

                    toggleStrengthPassword.textContent =
                        "👁️";

                }

            }
        );

    }


    /* =====================================
       CLEAR
    ===================================== */

    if (clearStrength) {

        clearStrength.addEventListener(
            "click",
            function () {

                strengthPassword.value = "";

                strengthPassword.type =
                    "password";

                toggleStrengthPassword.textContent =
                    "👁️";

                checkPasswordStrength();

                strengthPassword.focus();

            }
        );

    }


    /* =====================================
       INITIAL STATE
    ===================================== */

    checkPasswordStrength();

}/* =========================================
   NAMAN TOOLS
   TOOL #9
   COLOR PICKER
========================================= */

const colorInput =
    document.getElementById("colorInput");

const colorPreview =
    document.getElementById("colorPreview");

const hexValue =
    document.getElementById("hexValue");

const rgbValue =
    document.getElementById("rgbValue");

const hslValue =
    document.getElementById("hslValue");

const randomColor =
    document.getElementById("randomColor");

const colorCopyMessage =
    document.getElementById(
        "colorCopyMessage"
    );


if (
    colorInput &&
    colorPreview &&
    hexValue &&
    rgbValue &&
    hslValue
) {


    /* =====================================
       HEX → RGB
    ===================================== */

    function hexToRgb(hex) {

        hex = hex.replace("#", "");

        const r =
            parseInt(
                hex.substring(0, 2),
                16
            );

        const g =
            parseInt(
                hex.substring(2, 4),
                16
            );

        const b =
            parseInt(
                hex.substring(4, 6),
                16
            );

        return {
            r: r,
            g: g,
            b: b
        };

    }


    /* =====================================
       RGB → HSL
    ===================================== */

    function rgbToHsl(r, g, b) {

        r /= 255;
        g /= 255;
        b /= 255;


        const max =
            Math.max(r, g, b);

        const min =
            Math.min(r, g, b);

        let h = 0;

        let s = 0;

        const l =
            (max + min) / 2;


        if (max !== min) {

            const difference =
                max - min;


            s =
                l > 0.5
                    ? difference /
                      (2 - max - min)
                    : difference /
                      (max + min);


            switch (max) {

                case r:

                    h =
                        (
                            (g - b) /
                            difference
                        ) +
                        (g < b ? 6 : 0);

                    break;


                case g:

                    h =
                        (
                            (b - r) /
                            difference
                        ) +
                        2;

                    break;


                case b:

                    h =
                        (
                            (r - g) /
                            difference
                        ) +
                        4;

                    break;

            }


            h /= 6;

        }


        return {

            h: Math.round(h * 360),

            s: Math.round(s * 100),

            l: Math.round(l * 100)

        };

    }


    /* =====================================
       UPDATE COLOR
    ===================================== */

    function updateColor(hex) {

        const rgb =
            hexToRgb(hex);


        const hsl =
            rgbToHsl(
                rgb.r,
                rgb.g,
                rgb.b
            );


        /* Preview */

        colorPreview.style.background =
            hex;


        /* HEX */

        hexValue.textContent =
            hex.toUpperCase();


        /* RGB */

        rgbValue.textContent =
            `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;


        /* HSL */

        hslValue.textContent =
            `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;

    }


    /* =====================================
       COLOR INPUT
    ===================================== */

    colorInput.addEventListener(
        "input",
        function () {

            updateColor(
                this.value
            );

        }
    );


    /* =====================================
       RANDOM COLOR
    ===================================== */

    if (randomColor) {

        randomColor.addEventListener(
            "click",
            function () {

                const characters =
                    "0123456789ABCDEF";

                let hex = "#";


                for (
                    let i = 0;
                    i < 6;
                    i++
                ) {

                    hex +=
                        characters[
                            Math.floor(
                                Math.random() *
                                characters.length
                            )
                        ];

                }


                colorInput.value =
                    hex;


                updateColor(hex);


                colorCopyMessage.textContent =
                    "✓ Random color generated!";


                setTimeout(() => {

                    colorCopyMessage.textContent =
                        "";

                }, 1500);

            }
        );

    }


    /* =====================================
       COPY BUTTONS
    ===================================== */

    document
        .querySelectorAll(".copy-color")
        .forEach(button => {

            button.addEventListener(
                "click",
                async function () {

                    const type =
                        this.dataset.copy;

                    let value = "";


                    if (type === "hex") {

                        value =
                            hexValue.textContent;

                    }


                    if (type === "rgb") {

                        value =
                            rgbValue.textContent;

                    }


                    if (type === "hsl") {

                        value =
                            hslValue.textContent;

                    }


                    if (!value) {
                        return;
                    }


                    try {

                        await navigator
                            .clipboard
                            .writeText(value);

                    }

                    catch (error) {

                        const temp =
                            document.createElement(
                                "textarea"
                            );

                        temp.value = value;

                        document.body.appendChild(
                            temp
                        );

                        temp.select();

                        document.execCommand(
                            "copy"
                        );

                        temp.remove();

                    }


                    colorCopyMessage.textContent =
                        `✓ ${type.toUpperCase()} copied!`;


                    setTimeout(() => {

                        colorCopyMessage.textContent =
                            "";

                    }, 1500);

                }
            );

        });


    /* =====================================
       INITIAL COLOR
    ===================================== */

    updateColor(
        colorInput.value
    );

}/* =========================================
   NAMAN TOOLS
   TOOL #10
   COLOR CONVERTER
========================================= */

const converterInput =
    document.getElementById(
        "converterInput"
    );

const converterInputLabel =
    document.getElementById(
        "converterInputLabel"
    );

const convertColor =
    document.getElementById(
        "convertColor"
    );

const converterPreview =
    document.getElementById(
        "converterPreview"
    );

const converterHex =
    document.getElementById(
        "converterHex"
    );

const converterRgb =
    document.getElementById(
        "converterRgb"
    );

const converterHsl =
    document.getElementById(
        "converterHsl"
    );

const converterMessage =
    document.getElementById(
        "converterMessage"
    );

const randomConverterColor =
    document.getElementById(
        "randomConverterColor"
    );

const formatButtons =
    document.querySelectorAll(
        ".format-btn"
    );


if (
    converterInput &&
    converterPreview &&
    converterHex &&
    converterRgb &&
    converterHsl
) {

    let currentFormat = "hex";


    /* =====================================
       HEX → RGB
    ===================================== */

    function hexToRgb(hex) {

        hex = hex.replace("#", "");

        if (hex.length !== 6) {
            return null;
        }

        const r =
            parseInt(
                hex.substring(0, 2),
                16
            );

        const g =
            parseInt(
                hex.substring(2, 4),
                16
            );

        const b =
            parseInt(
                hex.substring(4, 6),
                16
            );

        if (
            Number.isNaN(r) ||
            Number.isNaN(g) ||
            Number.isNaN(b)
        ) {
            return null;
        }

        return { r, g, b };

    }


    /* =====================================
       RGB → HSL
    ===================================== */

    function rgbToHsl(r, g, b) {

        r /= 255;
        g /= 255;
        b /= 255;


        const max =
            Math.max(r, g, b);

        const min =
            Math.min(r, g, b);

        let h = 0;

        let s = 0;

        const l =
            (max + min) / 2;


        if (max !== min) {

            const d =
                max - min;


            s =
                l > 0.5
                    ? d / (2 - max - min)
                    : d / (max + min);


            switch (max) {

                case r:

                    h =
                        (g - b) / d +
                        (g < b ? 6 : 0);

                    break;


                case g:

                    h =
                        (b - r) / d + 2;

                    break;


                case b:

                    h =
                        (r - g) / d + 4;

                    break;

            }


            h /= 6;

        }


        return {

            h: Math.round(h * 360),

            s: Math.round(s * 100),

            l: Math.round(l * 100)

        };

    }


    /* =====================================
       RGB → HEX
    ===================================== */

    function rgbToHex(r, g, b) {

        return "#" +

            [r, g, b]
                .map(value =>
                    value
                        .toString(16)
                        .padStart(2, "0")
                )
                .join("")
                .toUpperCase();

    }


    /* =====================================
       HSL → RGB
    ===================================== */

    function hslToRgb(h, s, l) {

        h /= 360;
        s /= 100;
        l /= 100;


        let r;
        let g;
        let b;


        if (s === 0) {

            r = g = b = l;

        } else {

            const hue2rgb =
                function(p, q, t) {

                    if (t < 0)
                        t += 1;

                    if (t > 1)
                        t -= 1;

                    if (t < 1 / 6)
                        return p +
                            (q - p) *
                            6 * t;

                    if (t < 1 / 2)
                        return q;

                    if (t < 2 / 3)
                        return p +
                            (q - p) *
                            (2 / 3 - t) *
                            6;

                    return p;

                };


            const q =
                l < 0.5
                    ? l * (1 + s)
                    : l + s - l * s;


            const p =
                2 * l - q;


            r =
                hue2rgb(
                    p,
                    q,
                    h + 1 / 3
                );


            g =
                hue2rgb(
                    p,
                    q,
                    h
                );


            b =
                hue2rgb(
                    p,
                    q,
                    h - 1 / 3
                );

        }


        return {

            r: Math.round(r * 255),

            g: Math.round(g * 255),

            b: Math.round(b * 255)

        };

    }


    /* =====================================
       RGB INPUT PARSER
    ===================================== */

    function parseRgb(value) {

        const match =
            value.match(
                /^\s*rgb\s*\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)\s*$/i
            );


        if (!match) {
            return null;
        }


        const r = Number(match[1]);

        const g = Number(match[2]);

        const b = Number(match[3]);


        if (
            r > 255 ||
            g > 255 ||
            b > 255
        ) {
            return null;
        }


        return { r, g, b };

    }


    /* =====================================
       HSL INPUT PARSER
    ===================================== */

    function parseHsl(value) {

        const match =
            value.match(
                /^\s*hsl\s*\(\s*(-?\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)%\s*,\s*(\d+(?:\.\d+)?)%\s*\)\s*$/i
            );


        if (!match) {
            return null;
        }


        const h =
            Number(match[1]);

        const s =
            Number(match[2]);

        const l =
            Number(match[3]);


        if (
            s > 100 ||
            l > 100
        ) {
            return null;
        }


        return hslToRgb(
            ((h % 360) + 360) % 360,
            s,
            l
        );

    }


    /* =====================================
       GET RGB FROM INPUT
    ===================================== */

    function getInputRgb() {

        const value =
            converterInput.value.trim();


        if (currentFormat === "hex") {

            let hex = value;

            if (!hex.startsWith("#")) {
                hex = "#" + hex;
            }

            return hexToRgb(hex);

        }


        if (currentFormat === "rgb") {

            return parseRgb(value);

        }


        if (currentFormat === "hsl") {

            return parseHsl(value);

        }


        return null;

    }


    /* =====================================
       CONVERT
    ===================================== */

    function convertCurrentColor() {

        const rgb =
            getInputRgb();


        if (!rgb) {

            converterMessage.textContent =
                "⚠️ Please enter a valid color.";

            converterMessage.style.color =
                "#dc2626";

            return;

        }


        const hex =
            rgbToHex(
                rgb.r,
                rgb.g,
                rgb.b
            );


        const hsl =
            rgbToHsl(
                rgb.r,
                rgb.g,
                rgb.b
            );


        converterHex.textContent =
            hex;


        converterRgb.textContent =
            `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;


        converterHsl.textContent =
            `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;


        converterPreview.style.background =
            hex;


        converterMessage.textContent =
            "✓ Color converted successfully!";

        converterMessage.style.color =
            "#027a48";


        setTimeout(() => {

            converterMessage.textContent =
                "";

        }, 1500);

    }


    /* =====================================
       FORMAT BUTTONS
    ===================================== */

    formatButtons.forEach(button => {

        button.addEventListener(
            "click",
            function () {

                formatButtons.forEach(btn => {

                    btn.classList.remove(
                        "active"
                    );

                });


                this.classList.add(
                    "active"
                );


                currentFormat =
                    this.dataset.format;


                if (
                    currentFormat ===
                    "hex"
                ) {

                    converterInputLabel.textContent =
                        "HEX Color";

                    converterInput.placeholder =
                        "#2563EB";

                    converterInput.value =
                        converterHex.textContent;

                }


                if (
                    currentFormat ===
                    "rgb"
                ) {

                    converterInputLabel.textContent =
                        "RGB Color";

                    converterInput.placeholder =
                        "rgb(37, 99, 235)";

                    converterInput.value =
                        converterRgb.textContent;

                }


                if (
                    currentFormat ===
                    "hsl"
                ) {

                    converterInputLabel.textContent =
                        "HSL Color";

                    converterInput.placeholder =
                        "hsl(217, 83%, 53%)";

                    converterInput.value =
                        converterHsl.textContent;

                }

            }
        );

    });


    /* =====================================
       CONVERT BUTTON
    ===================================== */

    if (convertColor) {

        convertColor.addEventListener(
            "click",
            convertCurrentColor
        );

    }


    /* =====================================
       ENTER KEY
    ===================================== */

    converterInput.addEventListener(
        "keydown",
        function(event) {

            if (
                event.key === "Enter"
            ) {

                convertCurrentColor();

            }

        }
    );


    /* =====================================
       COPY
    ===================================== */

    document
        .querySelectorAll(
            ".converter-copy"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                async function () {

                    const type =
                        this.dataset.copy;

                    let value = "";


                    if (type === "hex") {

                        value =
                            converterHex.textContent;

                    }


                    if (type === "rgb") {

                        value =
                            converterRgb.textContent;

                    }


                    if (type === "hsl") {

                        value =
                            converterHsl.textContent;

                    }


                    try {

                        await navigator
                            .clipboard
                            .writeText(value);

                    } catch (error) {

                        const temp =
                            document.createElement(
                                "textarea"
                            );

                        temp.value = value;

                        document.body.appendChild(
                            temp
                        );

                        temp.select();

                        document.execCommand(
                            "copy"
                        );

                        temp.remove();

                    }


                    converterMessage.textContent =
                        `✓ ${type.toUpperCase()} copied!`;

                    converterMessage.style.color =
                        "#027a48";


                    setTimeout(() => {

                        converterMessage.textContent =
                            "";

                    }, 1500);

                }
            );

        });


    /* =====================================
       RANDOM COLOR
    ===================================== */

    if (randomConverterColor) {

        randomConverterColor.addEventListener(
            "click",
            function () {

                const characters =
                    "0123456789ABCDEF";

                let hex = "#";


                for (
                    let i = 0;
                    i < 6;
                    i++
                ) {

                    hex +=
                        characters[
                            Math.floor(
                                Math.random() *
                                characters.length
                            )
                        ];

                }


                converterInput.value =
                    hex;


                currentFormat =
                    "hex";


                formatButtons.forEach(btn => {

                    btn.classList.remove(
                        "active"
                    );

                });


                document
                    .querySelector(
                        '.format-btn[data-format="hex"]'
                    )
                    ?.classList.add(
                        "active"
                    );


                converterInputLabel.textContent =
                    "HEX Color";


                convertCurrentColor();

            }
        );

    }


    /* =====================================
       INITIAL
    ===================================== */

    convertCurrentColor();

}/* =========================================
   NAMAN TOOLS
   TOOL #11
   UNIT CONVERTER
========================================= */

const unitCategory =
    document.getElementById("unitCategory");

const unitValue =
    document.getElementById("unitValue");

const fromUnit =
    document.getElementById("fromUnit");

const toUnit =
    document.getElementById("toUnit");

const unitResult =
    document.getElementById("unitResult");

const swapUnits =
    document.getElementById("swapUnits");

const copyUnitResult =
    document.getElementById("copyUnitResult");

const unitMessage =
    document.getElementById("unitMessage");


if (
    unitCategory &&
    unitValue &&
    fromUnit &&
    toUnit &&
    unitResult
) {


    /* =====================================
       UNIT DATA
    ===================================== */

    const units = {

        length: {

            meter: {
                name: "Meter (m)",
                factor: 1
            },

            kilometer: {
                name: "Kilometer (km)",
                factor: 1000
            },

            centimeter: {
                name: "Centimeter (cm)",
                factor: 0.01
            },

            millimeter: {
                name: "Millimeter (mm)",
                factor: 0.001
            },

            mile: {
                name: "Mile (mi)",
                factor: 1609.344
            },

            yard: {
                name: "Yard (yd)",
                factor: 0.9144
            },

            foot: {
                name: "Foot (ft)",
                factor: 0.3048
            },

            inch: {
                name: "Inch (in)",
                factor: 0.0254
            }

        },


        weight: {

            kilogram: {
                name: "Kilogram (kg)",
                factor: 1
            },

            gram: {
                name: "Gram (g)",
                factor: 0.001
            },

            milligram: {
                name: "Milligram (mg)",
                factor: 0.000001
            },

            pound: {
                name: "Pound (lb)",
                factor: 0.45359237
            },

            ounce: {
                name: "Ounce (oz)",
                factor: 0.0283495231
            },

            ton: {
                name: "Metric Ton (t)",
                factor: 1000
            }

        },


        temperature: {

            celsius: {
                name: "Celsius (°C)"
            },

            fahrenheit: {
                name: "Fahrenheit (°F)"
            },

            kelvin: {
                name: "Kelvin (K)"
            }

        },


        area: {

            squareMeter: {
                name: "Square Meter (m²)",
                factor: 1
            },

            squareKilometer: {
                name: "Square Kilometer (km²)",
                factor: 1000000
            },

            squareCentimeter: {
                name: "Square Centimeter (cm²)",
                factor: 0.0001
            },

            squareFoot: {
                name: "Square Foot (ft²)",
                factor: 0.09290304
            },

            squareInch: {
                name: "Square Inch (in²)",
                factor: 0.00064516
            },

            acre: {
                name: "Acre",
                factor: 4046.8564224
            },

            hectare: {
                name: "Hectare",
                factor: 10000
            }

        },


        volume: {

            liter: {
                name: "Liter (L)",
                factor: 1
            },

            milliliter: {
                name: "Milliliter (mL)",
                factor: 0.001
            },

            cubicMeter: {
                name: "Cubic Meter (m³)",
                factor: 1000
            },

            gallon: {
                name: "US Gallon",
                factor: 3.785411784
            },

            quart: {
                name: "US Quart",
                factor: 0.946352946
            },

            pint: {
                name: "US Pint",
                factor: 0.473176473
            },

            cup: {
                name: "US Cup",
                factor: 0.2365882365
            }

        },


        time: {

            second: {
                name: "Second (s)",
                factor: 1
            },

            minute: {
                name: "Minute (min)",
                factor: 60
            },

            hour: {
                name: "Hour (h)",
                factor: 3600
            },

            day: {
                name: "Day",
                factor: 86400
            },

            week: {
                name: "Week",
                factor: 604800
            },

            month: {
                name: "Month (30 days)",
                factor: 2592000
            },

            year: {
                name: "Year (365 days)",
                factor: 31536000
            }

        }

    };


    /* =====================================
       POPULATE UNITS
    ===================================== */

    function populateUnits() {

        const category =
            unitCategory.value;

        const categoryUnits =
            units[category];


        fromUnit.innerHTML = "";

        toUnit.innerHTML = "";


        Object.keys(categoryUnits)
            .forEach(key => {

                const option1 =
                    document.createElement(
                        "option"
                    );

                option1.value = key;

                option1.textContent =
                    categoryUnits[key].name;


                fromUnit.appendChild(
                    option1
                );


                const option2 =
                    document.createElement(
                        "option"
                    );

                option2.value = key;

                option2.textContent =
                    categoryUnits[key].name;


                toUnit.appendChild(
                    option2
                );

            });


        /* Default units */

        if (category === "length") {

            fromUnit.value = "meter";

            toUnit.value = "foot";

        }

        else if (category === "weight") {

            fromUnit.value = "kilogram";

            toUnit.value = "pound";

        }

        else if (category === "temperature") {

            fromUnit.value = "celsius";

            toUnit.value = "fahrenheit";

        }

        else if (category === "area") {

            fromUnit.value = "squareMeter";

            toUnit.value = "squareFoot";

        }

        else if (category === "volume") {

            fromUnit.value = "liter";

            toUnit.value = "milliliter";

        }

        else if (category === "time") {

            fromUnit.value = "hour";

            toUnit.value = "minute";

        }


        convertUnit();

    }


    /* =====================================
       TEMPERATURE CONVERSION
    ===================================== */

    function convertTemperature(
        value,
        from,
        to
    ) {

        let celsius;


        /* From → Celsius */

        if (from === "celsius") {

            celsius = value;

        }

        else if (from === "fahrenheit") {

            celsius =
                (value - 32) * 5 / 9;

        }

        else {

            celsius =
                value - 273.15;

        }


        /* Celsius → To */

        if (to === "celsius") {

            return celsius;

        }

        if (to === "fahrenheit") {

            return (
                celsius * 9 / 5
            ) + 32;

        }

        return celsius + 273.15;

    }


    /* =====================================
       CONVERT
    ===================================== */

    function convertUnit() {

        const value =
            parseFloat(
                unitValue.value
            );


        if (
            Number.isNaN(value)
        ) {

            unitResult.textContent =
                "Enter a value";

            return;

        }


        const category =
            unitCategory.value;


        const from =
            fromUnit.value;


        const to =
            toUnit.value;


        let result;


        /* Temperature */

        if (
            category ===
            "temperature"
        ) {

            result =
                convertTemperature(
                    value,
                    from,
                    to
                );

        }

        else {

            const fromFactor =
                units[category][from]
                    .factor;

            const toFactor =
                units[category][to]
                    .factor;


            result =
                (
                    value *
                    fromFactor
                ) /
                toFactor;

        }


        /* Same unit */

        if (from === to) {

            result = value;

        }


        unitResult.textContent =
            formatNumber(result) +
            " " +
            getShortName(
                category,
                to
            );

    }


    /* =====================================
       NUMBER FORMAT
    ===================================== */

    function formatNumber(number) {

        if (
            Math.abs(number) >= 1000000000
        ) {

            return number
                .toExponential(6);

        }


        if (
            Math.abs(number) < 0.000001 &&
            number !== 0
        ) {

            return number
                .toExponential(6);

        }


        return Number(
            number.toFixed(10)
        ).toString();

    }


    /* =====================================
       SHORT UNIT NAME
    ===================================== */

    function getShortName(
        category,
        unit
    ) {

        const names = {

            meter: "m",
            kilometer: "km",
            centimeter: "cm",
            millimeter: "mm",
            mile: "mi",
            yard: "yd",
            foot: "ft",
            inch: "in",

            kilogram: "kg",
            gram: "g",
            milligram: "mg",
            pound: "lb",
            ounce: "oz",
            ton: "t",

            celsius: "°C",
            fahrenheit: "°F",
            kelvin: "K",

            squareMeter: "m²",
            squareKilometer: "km²",
            squareCentimeter: "cm²",
            squareFoot: "ft²",
            squareInch: "in²",
            acre: "acre",
            hectare: "ha",

            liter: "L",
            milliliter: "mL",
            cubicMeter: "m³",
            gallon: "gal",
            quart: "qt",
            pint: "pt",
            cup: "cup",

            second: "s",
            minute: "min",
            hour: "h",
            day: "day",
            week: "week",
            month: "month",
            year: "year"

        };


        return names[unit] || unit;

    }


    /* =====================================
       CATEGORY CHANGE
    ===================================== */

    unitCategory.addEventListener(
        "change",
        populateUnits
    );


    /* =====================================
       VALUE CHANGE
    ===================================== */

    unitValue.addEventListener(
        "input",
        convertUnit
    );


    fromUnit.addEventListener(
        "change",
        convertUnit
    );


    toUnit.addEventListener(
        "change",
        convertUnit
    );


    /* =====================================
       SWAP
    ===================================== */

    if (swapUnits) {

        swapUnits.addEventListener(
            "click",
            function () {

                const oldFrom =
                    fromUnit.value;


                fromUnit.value =
                    toUnit.value;


                toUnit.value =
                    oldFrom;


                convertUnit();

            }
        );

    }


    /* =====================================
       COPY
    ===================================== */

    if (copyUnitResult) {

        copyUnitResult.addEventListener(
            "click",
            async function () {

                const value =
                    unitResult.textContent;


                try {

                    await navigator
                        .clipboard
                        .writeText(value);

                }

                catch (error) {

                    const temp =
                        document.createElement(
                            "textarea"
                        );

                    temp.value = value;

                    document.body.appendChild(
                        temp
                    );

                    temp.select();

                    document.execCommand(
                        "copy"
                    );

                    temp.remove();

                }


                unitMessage.textContent =
                    "✓ Result copied!";


                setTimeout(() => {

                    unitMessage.textContent =
                        "";

                }, 1500);

            }
        );

    }


    /* =====================================
       INITIAL
    ===================================== */

    populateUnits();

}/* =========================================
   NAMAN TOOLS
   TOOL #12
   PERCENTAGE CALCULATOR
========================================= */

const percentageTabs =
    document.querySelectorAll(
        ".percentage-tab"
    );

const percentageModes =
    document.querySelectorAll(
        ".percentage-mode"
    );


const percentInput =
    document.getElementById(
        "percentInput"
    );

const numberInput =
    document.getElementById(
        "numberInput"
    );

const percentOfResult =
    document.getElementById(
        "percentOfResult"
    );


const partInput =
    document.getElementById(
        "partInput"
    );

const totalInput =
    document.getElementById(
        "totalInput"
    );

const whatPercentResult =
    document.getElementById(
        "whatPercentResult"
    );


const originalInput =
    document.getElementById(
        "originalInput"
    );

const newInput =
    document.getElementById(
        "newInput"
    );

const changeResult =
    document.getElementById(
        "changeResult"
    );


const copyPercentageResult =
    document.getElementById(
        "copyPercentageResult"
    );

const percentageMessage =
    document.getElementById(
        "percentageMessage"
    );


if (
    percentageTabs.length &&
    percentageModes.length
) {


    /* =====================================
       CURRENT MODE
    ===================================== */

    let currentPercentageMode =
        "percentOf";


    /* =====================================
       FORMAT NUMBER
    ===================================== */

    function formatPercentageNumber(
        value
    ) {

        if (
            !Number.isFinite(value)
        ) {

            return "0";

        }


        return Number(
            value.toFixed(10)
        ).toString();

    }


    /* =====================================
       CALCULATE % OF NUMBER
    ===================================== */

    function calculatePercentOf() {

        const percent =
            parseFloat(
                percentInput?.value
            );

        const number =
            parseFloat(
                numberInput?.value
            );


        if (
            Number.isNaN(percent) ||
            Number.isNaN(number)
        ) {

            if (percentOfResult) {

                percentOfResult.textContent =
                    "0";

            }

            return;

        }


        const result =
            (percent / 100) *
            number;


        percentOfResult.textContent =
            formatPercentageNumber(
                result
            );

    }


    /* =====================================
       CALCULATE WHAT %
    ===================================== */

    function calculateWhatPercent() {

        const part =
            parseFloat(
                partInput?.value
            );

        const total =
            parseFloat(
                totalInput?.value
            );


        if (
            Number.isNaN(part) ||
            Number.isNaN(total) ||
            total === 0
        ) {

            if (whatPercentResult) {

                whatPercentResult.textContent =
                    "0%";

            }

            return;

        }


        const result =
            (part / total) * 100;


        whatPercentResult.textContent =
            formatPercentageNumber(
                result
            ) + "%";

    }


    /* =====================================
       CALCULATE CHANGE
    ===================================== */

    function calculateChange() {

        const original =
            parseFloat(
                originalInput?.value
            );

        const newValue =
            parseFloat(
                newInput?.value
            );


        if (
            Number.isNaN(original) ||
            Number.isNaN(newValue) ||
            original === 0
        ) {

            if (changeResult) {

                changeResult.textContent =
                    "0%";

            }

            return;

        }


        const result =
            (
                (newValue - original) /
                Math.abs(original)
            ) * 100;


        const formatted =
            formatPercentageNumber(
                Math.abs(result)
            );


        if (result > 0) {

            changeResult.textContent =
                "+" + formatted + "% ↑";

            changeResult.style.color =
                "#027a48";

        }

        else if (result < 0) {

            changeResult.textContent =
                "-" + formatted + "% ↓";

            changeResult.style.color =
                "#dc2626";

        }

        else {

            changeResult.textContent =
                "0%";

            changeResult.style.color =
                "#2563eb";

        }

    }


    /* =====================================
       CALCULATE CURRENT
    ===================================== */

    function calculatePercentage() {

        if (
            currentPercentageMode ===
            "percentOf"
        ) {

            calculatePercentOf();

        }


        else if (
            currentPercentageMode ===
            "whatPercent"
        ) {

            calculateWhatPercent();

        }


        else if (
            currentPercentageMode ===
            "increaseDecrease"
        ) {

            calculateChange();

        }

    }


    /* =====================================
       TAB SWITCH
    ===================================== */

    percentageTabs.forEach(tab => {

        tab.addEventListener(
            "click",
            function () {

                const mode =
                    this.dataset.mode;


                currentPercentageMode =
                    mode;


                percentageTabs.forEach(
                    button => {

                        button.classList.remove(
                            "active"
                        );

                    }
                );


                this.classList.add(
                    "active"
                );


                percentageModes.forEach(
                    section => {

                        section.classList.remove(
                            "active"
                        );

                    }
                );


                const targetMode =
                    document.getElementById(
                        mode === "percentOf"
                            ? "percentOfMode"
                            : mode === "whatPercent"
                            ? "whatPercentMode"
                            : "increaseDecreaseMode"
                    );


                if (targetMode) {

                    targetMode.classList.add(
                        "active"
                    );

                }


                calculatePercentage();

            }
        );

    });


    /* =====================================
       LIVE CALCULATION
    ===================================== */

    [
        percentInput,
        numberInput,
        partInput,
        totalInput,
        originalInput,
        newInput

    ].forEach(input => {

        if (input) {

            input.addEventListener(
                "input",
                calculatePercentage
            );

        }

    });


    /* =====================================
       COPY RESULT
    ===================================== */

    if (copyPercentageResult) {

        copyPercentageResult.addEventListener(
            "click",
            async function () {

                let result = "";


                if (
                    currentPercentageMode ===
                    "percentOf"
                ) {

                    result =
                        percentOfResult.textContent;

                }


                else if (
                    currentPercentageMode ===
                    "whatPercent"
                ) {

                    result =
                        whatPercentResult.textContent;

                }


                else {

                    result =
                        changeResult.textContent;

                }


                try {

                    await navigator
                        .clipboard
                        .writeText(result);

                }

                catch (error) {

                    const temp =
                        document.createElement(
                            "textarea"
                        );

                    temp.value =
                        result;

                    document.body.appendChild(
                        temp
                    );

                    temp.select();

                    document.execCommand(
                        "copy"
                    );

                    temp.remove();

                }


                percentageMessage.textContent =
                    "✓ Result copied!";


                setTimeout(() => {

                    percentageMessage.textContent =
                        "";

                }, 1500);

            }
        );

    }


    /* =====================================
       INITIAL
    ===================================== */

    calculatePercentage();

}/* =========================================
   NAMAN TOOLS
   TOOL #13
   EMI CALCULATOR
========================================= */

const loanAmount =
    document.getElementById(
        "loanAmount"
    );

const interestRate =
    document.getElementById(
        "interestRate"
    );

const loanTenure =
    document.getElementById(
        "loanTenure"
    );

const tenureType =
    document.getElementById(
        "tenureType"
    );

const calculateEMI =
    document.getElementById(
        "calculateEMI"
    );

const emiResult =
    document.getElementById(
        "emiResult"
    );

const principalResult =
    document.getElementById(
        "principalResult"
    );

const interestResult =
    document.getElementById(
        "interestResult"
    );

const totalResult =
    document.getElementById(
        "totalResult"
    );

const copyEMI =
    document.getElementById(
        "copyEMI"
    );

const emiMessage =
    document.getElementById(
        "emiMessage"
    );


if (
    loanAmount &&
    interestRate &&
    loanTenure &&
    tenureType &&
    emiResult
) {


    /* =====================================
       FORMAT CURRENCY
    ===================================== */

    function formatINR(value) {

        if (
            !Number.isFinite(value)
        ) {

            return "₹0";

        }


        return "₹" +
            value.toLocaleString(
                "en-IN",
                {
                    maximumFractionDigits: 0
                }
            );

    }


    /* =====================================
       CALCULATE EMI
    ===================================== */

    function calculateLoanEMI() {

        const principal =
            parseFloat(
                loanAmount.value
            );

        const annualRate =
            parseFloat(
                interestRate.value
            );

        const tenure =
            parseFloat(
                loanTenure.value
            );


        /* Validation */

        if (
            Number.isNaN(principal) ||
            Number.isNaN(annualRate) ||
            Number.isNaN(tenure) ||
            principal <= 0 ||
            annualRate < 0 ||
            tenure <= 0
        ) {

            emiResult.textContent =
                "₹0";

            principalResult.textContent =
                "₹0";

            interestResult.textContent =
                "₹0";

            totalResult.textContent =
                "₹0";

            return;

        }


        /* =================================
           MONTHS
        ================================= */

        let months;


        if (
            tenureType.value ===
            "years"
        ) {

            months =
                tenure * 12;

        }

        else {

            months =
                tenure;

        }


        /* =================================
           MONTHLY INTEREST
        ================================= */

        const monthlyRate =
            annualRate /
            12 /
            100;


        let emi;


        /* Zero interest loan */

        if (
            monthlyRate === 0
        ) {

            emi =
                principal /
                months;

        }

        else {

            const power =
                Math.pow(
                    1 + monthlyRate,
                    months
                );


            emi =
                principal *
                monthlyRate *
                power /
                (power - 1);

        }


        const totalPayment =
            emi * months;


        const totalInterest =
            totalPayment -
            principal;


        /* =================================
           DISPLAY
        ================================= */

        emiResult.textContent =
            formatINR(emi);


        principalResult.textContent =
            formatINR(principal);


        interestResult.textContent =
            formatINR(
                totalInterest
            );


        totalResult.textContent =
            formatINR(
                totalPayment
            );

    }


    /* =====================================
       LIVE CALCULATION
    ===================================== */

    [
        loanAmount,
        interestRate,
        loanTenure

    ].forEach(input => {

        input.addEventListener(
            "input",
            calculateLoanEMI
        );

    });


    tenureType.addEventListener(
        "change",
        calculateLoanEMI
    );


    /* =====================================
       BUTTON
    ===================================== */

    if (calculateEMI) {

        calculateEMI.addEventListener(
            "click",
            calculateLoanEMI
        );

    }


    /* =====================================
       COPY RESULT
    ===================================== */

    if (copyEMI) {

        copyEMI.addEventListener(
            "click",
            async function () {

                const text =
                    "Monthly EMI: " +
                    emiResult.textContent +
                    "\nPrincipal: " +
                    principalResult.textContent +
                    "\nTotal Interest: " +
                    interestResult.textContent +
                    "\nTotal Payment: " +
                    totalResult.textContent;


                try {

                    await navigator
                        .clipboard
                        .writeText(text);

                }

                catch (error) {

                    const temp =
                        document.createElement(
                            "textarea"
                        );

                    temp.value = text;

                    document.body.appendChild(
                        temp
                    );

                    temp.select();

                    document.execCommand(
                        "copy"
                    );

                    temp.remove();

                }


                emiMessage.textContent =
                    "✓ EMI details copied!";


                setTimeout(() => {

                    emiMessage.textContent =
                        "";

                }, 1600);

            }
        );

    }


    /* =====================================
       INITIAL CALCULATION
    ===================================== */

    calculateLoanEMI();

}/* =========================================
   NAMAN TOOLS
   TOOL #14
   BMI CALCULATOR
========================================= */

const bmiUnitTabs =
    document.querySelectorAll(
        ".bmi-unit-tab"
    );

const metricFields =
    document.getElementById(
        "metricFields"
    );

const imperialFields =
    document.getElementById(
        "imperialFields"
    );


const heightCm =
    document.getElementById(
        "heightCm"
    );

const weightKg =
    document.getElementById(
        "weightKg"
    );


const heightFt =
    document.getElementById(
        "heightFt"
    );

const heightIn =
    document.getElementById(
        "heightIn"
    );

const weightLb =
    document.getElementById(
        "weightLb"
    );


const calculateBMI =
    document.getElementById(
        "calculateBMI"
    );

const bmiResult =
    document.getElementById(
        "bmiResult"
    );

const bmiCategory =
    document.getElementById(
        "bmiCategory"
    );

const copyBMI =
    document.getElementById(
        "copyBMI"
    );

const bmiMessage =
    document.getElementById(
        "bmiMessage"
    );


if (
    bmiUnitTabs.length &&
    bmiResult
) {


    /* =====================================
       CURRENT UNIT
    ===================================== */

    let currentBMIUnit =
        "metric";


    /* =====================================
       FORMAT BMI
    ===================================== */

    function formatBMI(value) {

        return Number(
            value.toFixed(1)
        ).toString();

    }


    /* =====================================
       CATEGORY
    ===================================== */

    function getBMICategory(bmi) {

        if (bmi < 18.5) {

            return {
                text: "Underweight",
                color: "#2563eb"
            };

        }


        if (bmi < 25) {

            return {
                text: "Normal weight",
                color: "#059669"
            };

        }


        if (bmi < 30) {

            return {
                text: "Overweight",
                color: "#d97706"
            };

        }


        return {
            text: "Obesity",
            color: "#dc2626"
        };

    }


    /* =====================================
       CALCULATE BMI
    ===================================== */

    function calculateBodyBMI() {

        let bmi;


        /* =================================
           METRIC
        ================================= */

        if (
            currentBMIUnit ===
            "metric"
        ) {

            const height =
                parseFloat(
                    heightCm?.value
                );

            const weight =
                parseFloat(
                    weightKg?.value
                );


            if (
                Number.isNaN(height) ||
                Number.isNaN(weight) ||
                height <= 0 ||
                weight <= 0
            ) {

                bmiResult.textContent =
                    "0.0";

                bmiCategory.textContent =
                    "Enter your details";

                bmiCategory.style.color =
                    "#475467";

                return;

            }


            const heightMeters =
                height / 100;


            bmi =
                weight /
                (
                    heightMeters *
                    heightMeters
                );

        }


        /* =================================
           IMPERIAL
        ================================= */

        else {

            const feet =
                parseFloat(
                    heightFt?.value
                ) || 0;

            const inches =
                parseFloat(
                    heightIn?.value
                ) || 0;

            const weight =
                parseFloat(
                    weightLb?.value
                );


            const totalInches =
                (
                    feet * 12
                ) + inches;


            if (
                totalInches <= 0 ||
                Number.isNaN(weight) ||
                weight <= 0
            ) {

                bmiResult.textContent =
                    "0.0";

                bmiCategory.textContent =
                    "Enter your details";

                bmiCategory.style.color =
                    "#475467";

                return;

            }


            bmi =
                (
                    weight /
                    (
                        totalInches *
                        totalInches
                    )
                ) * 703;

        }


        /* =================================
           DISPLAY
        ================================= */

        const category =
            getBMICategory(bmi);


        bmiResult.textContent =
            formatBMI(bmi);


        bmiCategory.textContent =
            category.text;


        bmiCategory.style.color =
            category.color;

    }


    /* =====================================
       UNIT SWITCH
    ===================================== */

    bmiUnitTabs.forEach(tab => {

        tab.addEventListener(
            "click",
            function () {

                currentBMIUnit =
                    this.dataset.unit;


                bmiUnitTabs.forEach(
                    button => {

                        button.classList.remove(
                            "active"
                        );

                    }
                );


                this.classList.add(
                    "active"
                );


                if (
                    currentBMIUnit ===
                    "metric"
                ) {

                    metricFields.classList.add(
                        "active"
                    );

                    imperialFields.classList.remove(
                        "active"
                    );

                }

                else {

                    imperialFields.classList.add(
                        "active"
                    );

                    metricFields.classList.remove(
                        "active"
                    );

                }


                calculateBodyBMI();

            }
        );

    });


    /* =====================================
       LIVE CALCULATION
    ===================================== */

    [
        heightCm,
        weightKg,
        heightFt,
        heightIn,
        weightLb

    ].forEach(input => {

        if (input) {

            input.addEventListener(
                "input",
                calculateBodyBMI
            );

        }

    });


    /* =====================================
       BUTTON
    ===================================== */

    if (calculateBMI) {

        calculateBMI.addEventListener(
            "click",
            calculateBodyBMI
        );

    }


    /* =====================================
       COPY
    ===================================== */

    if (copyBMI) {

        copyBMI.addEventListener(
            "click",
            async function () {

                const text =
                    "BMI: " +
                    bmiResult.textContent +
                    "\nCategory: " +
                    bmiCategory.textContent;


                try {

                    await navigator
                        .clipboard
                        .writeText(text);

                }

                catch (error) {

                    const temp =
                        document.createElement(
                            "textarea"
                        );

                    temp.value = text;

                    document.body.appendChild(
                        temp
                    );

                    temp.select();

                    document.execCommand(
                        "copy"
                    );

                    temp.remove();

                }


                bmiMessage.textContent =
                    "✓ BMI result copied!";


                setTimeout(() => {

                    bmiMessage.textContent =
                        "";

                }, 1600);

            }
        );

    }

}/* =========================================
   NAMAN TOOLS
   TOOL #15
   DATE DIFFERENCE
========================================= */

const startDate =
    document.getElementById(
        "startDate"
    );

const endDate =
    document.getElementById(
        "endDate"
    );

const calculateDateDifference =
    document.getElementById(
        "calculateDateDifference"
    );

const dateMainResult =
    document.getElementById(
        "dateMainResult"
    );

const dateYears =
    document.getElementById(
        "dateYears"
    );

const dateMonths =
    document.getElementById(
        "dateMonths"
    );

const dateDays =
    document.getElementById(
        "dateDays"
    );

const dateTotalDays =
    document.getElementById(
        "dateTotalDays"
    );

const copyDateDifference =
    document.getElementById(
        "copyDateDifference"
    );

const dateMessage =
    document.getElementById(
        "dateMessage"
    );


if (
    startDate &&
    endDate &&
    dateMainResult
) {


    /* =====================================
       FORMAT DATE
    ===================================== */

    function getDateOnly(value) {

        const parts =
            value.split("-");

        return new Date(
            Number(parts[0]),
            Number(parts[1]) - 1,
            Number(parts[2])
        );

    }


    /* =====================================
       CALCULATE
    ===================================== */

    function calculateDateDiff() {

        if (
            !startDate.value ||
            !endDate.value
        ) {

            dateMainResult.textContent =
                "0 Days";

            dateYears.textContent =
                "0";

            dateMonths.textContent =
                "0";

            dateDays.textContent =
                "0";

            dateTotalDays.textContent =
                "0";

            return;

        }


        let start =
            getDateOnly(
                startDate.value
            );

        let end =
            getDateOnly(
                endDate.value
            );


        /* Allow dates in either order */

        if (start > end) {

            const temp = start;

            start = end;

            end = temp;

        }


        /* =================================
           TOTAL DAYS
        ================================= */

        const milliseconds =
            end.getTime() -
            start.getTime();


        const totalDays =
            Math.round(
                milliseconds /
                86400000
            );


        /* =================================
           EXACT YEARS / MONTHS / DAYS
        ================================= */

        let years =
            end.getFullYear() -
            start.getFullYear();


        let months =
            end.getMonth() -
            start.getMonth();


        let days =
            end.getDate() -
            start.getDate();


        if (days < 0) {

            months--;

            const previousMonth =
                new Date(
                    end.getFullYear(),
                    end.getMonth(),
                    0
                );

            days +=
                previousMonth.getDate();

        }


        if (months < 0) {

            years--;

            months += 12;

        }


        /* =================================
           DISPLAY
        ================================= */

        dateYears.textContent =
            years;

        dateMonths.textContent =
            months;

        dateDays.textContent =
            days;

        dateTotalDays.textContent =
            totalDays.toLocaleString(
                "en-IN"
            );


        /* Main result */

        let resultText = "";


        if (years > 0) {

            resultText +=
                years +
                (
                    years === 1
                        ? " Year"
                        : " Years"
                );

        }


        if (months > 0) {

            if (resultText) {
                resultText += ", ";
            }

            resultText +=
                months +
                (
                    months === 1
                        ? " Month"
                        : " Months"
                );

        }


        if (days > 0 || !resultText) {

            if (resultText) {
                resultText += ", ";
            }

            resultText +=
                days +
                (
                    days === 1
                        ? " Day"
                        : " Days"
                );

        }


        dateMainResult.textContent =
            resultText;

    }


    /* =====================================
       LIVE UPDATE
    ===================================== */

    startDate.addEventListener(
        "change",
        calculateDateDiff
    );


    endDate.addEventListener(
        "change",
        calculateDateDiff
    );


    /* =====================================
       CALCULATE BUTTON
    ===================================== */

    if (calculateDateDifference) {

        calculateDateDifference
            .addEventListener(
                "click",
                calculateDateDiff
            );

    }


    /* =====================================
       COPY
    ===================================== */

    if (copyDateDifference) {

        copyDateDifference
            .addEventListener(
                "click",
                async function () {

                    const text =
                        "Date Difference: " +
                        dateMainResult.textContent +
                        "\nTotal Days: " +
                        dateTotalDays.textContent;


                    try {

                        await navigator
                            .clipboard
                            .writeText(text);

                    }

                    catch (error) {

                        const temp =
                            document.createElement(
                                "textarea"
                            );

                        temp.value =
                            text;

                        document.body.appendChild(
                            temp
                        );

                        temp.select();

                        document.execCommand(
                            "copy"
                        );

                        temp.remove();

                    }


                    dateMessage.textContent =
                        "✓ Result copied!";


                    setTimeout(() => {

                        dateMessage.textContent =
                            "";

                    }, 1600);

                }
            );

    }

}/* =========================================
   NAMAN TOOLS
   TOOL #16
   NUMBER CALCULATOR
========================================= */

const numberButtons =
    document.querySelectorAll(
        ".num-btn"
    );

const numberExpression =
    document.getElementById(
        "numberExpression"
    );

const numberResult =
    document.getElementById(
        "numberResult"
    );

const historyList =
    document.getElementById(
        "historyList"
    );

const clearHistory =
    document.getElementById(
        "clearHistory"
    );


if (
    numberButtons.length &&
    numberResult
) {


    /* =====================================
       VARIABLES
    ===================================== */

    let expression = "";

    let justCalculated = false;


    /* =====================================
       DISPLAY
    ===================================== */

    function updateDisplay() {

        numberExpression.textContent =
            expression;

    }


    /* =====================================
       SAFE CALCULATION
    ===================================== */

    function calculateExpression(value) {

        try {

            let clean =
                value
                    .replace(/×/g, "*")
                    .replace(/÷/g, "/")
                    .replace(/−/g, "-")
                    .replace(/%/g, "/100");


            if (
                !/^[0-9+\-*/.%\s]+$/.test(
                    clean
                )
            ) {

                return null;

            }


            /* Prevent invalid ending */

            if (
                /[+\-*/.]$/.test(
                    clean
                )
            ) {

                return null;

            }


            const result =
                Function(
                    '"use strict"; return (' +
                    clean +
                    ')'
                )();


            if (
                typeof result !== "number" ||
                !Number.isFinite(result)
            ) {

                return null;

            }


            return result;

        }

        catch (error) {

            return null;

        }

    }


    /* =====================================
       FORMAT RESULT
    ===================================== */

    function formatNumber(value) {

        if (
            !Number.isFinite(value)
        ) {

            return "Error";

        }


        return Number(
            value.toFixed(10)
        ).toLocaleString(
            "en-IN",
            {
                maximumFractionDigits: 10
            }
        );

    }


    /* =====================================
       CALCULATE
    ===================================== */

    function performCalculation() {

        if (!expression) {

            return;

        }


        const result =
            calculateExpression(
                expression
            );


        if (result === null) {

            numberResult.textContent =
                "Error";

            return;

        }


        const formatted =
            formatNumber(result);


        addHistory(
            expression,
            formatted
        );


        numberExpression.textContent =
            expression + " =";


        numberResult.textContent =
            formatted;


        expression =
            String(result);


        justCalculated = true;

    }


    /* =====================================
       ADD HISTORY
    ===================================== */

    function addHistory(
        calculation,
        result
    ) {

        if (!historyList) {

            return;

        }


        const empty =
            historyList.querySelector(
                "p"
            );


        if (empty) {

            empty.remove();

        }


        const item =
            document.createElement(
                "div"
            );


        item.className =
            "history-item";


        const calc =
            document.createElement(
                "span"
            );

        calc.textContent =
            calculation;


        const answer =
            document.createElement(
                "strong"
            );

        answer.textContent =
            result;


        item.appendChild(calc);

        item.appendChild(answer);


        historyList.prepend(item);


        /* Keep only latest 5 */

        const items =
            historyList.querySelectorAll(
                ".history-item"
            );


        if (items.length > 5) {

            items[items.length - 1]
                .remove();

        }

    }


    /* =====================================
       CLEAR
    ===================================== */

    function clearCalculator() {

        expression = "";

        justCalculated = false;

        numberExpression.textContent =
            "";

        numberResult.textContent =
            "0";

    }


    /* =====================================
       DELETE
    ===================================== */

    function deleteLast() {

        if (justCalculated) {

            clearCalculator();

            return;

        }


        expression =
            expression.slice(
                0,
                -1
            );


        updateDisplay();


        if (!expression) {

            numberResult.textContent =
                "0";

        }

    }


    /* =====================================
       ADD VALUE
    ===================================== */

    function addValue(value) {

        if (justCalculated) {

            if (
                !isNaN(value) ||
                value === "."
            ) {

                expression = "";

            }

            else {

                expression =
                    String(
                        calculateExpression(
                            expression
                        ) ?? ""
                    );

            }


            justCalculated = false;

        }


        /* =================================
           DECIMAL CONTROL
        ================================= */

        if (value === ".") {

            const parts =
                expression.split(
                    /[+\-×÷]/
                );

            const currentNumber =
                parts[parts.length - 1];


            if (
                currentNumber.includes(".")
            ) {

                return;

            }


            if (
                !currentNumber
            ) {

                expression +=
                    "0.";

                updateDisplay();

                return;

            }

        }


        /* =================================
           OPERATOR CONTROL
        ================================= */

        const operators =
            ["+", "−", "×", "÷"];


        if (
            operators.includes(value)
        ) {

            if (!expression) {

                return;

            }


            const last =
                expression.slice(-1);


            if (
                operators.includes(last)
            ) {

                expression =
                    expression.slice(
                        0,
                        -1
                    );

            }

        }


        expression += value;


        updateDisplay();


        const live =
            calculateExpression(
                expression
            );


        if (live !== null) {

            numberResult.textContent =
                formatNumber(live);

        }

        else if (
            !operators.includes(
                expression.slice(-1)
            )
        ) {

            numberResult.textContent =
                "0";

        }

    }


    /* =====================================
       BUTTON EVENTS
    ===================================== */

    numberButtons.forEach(button => {

        button.addEventListener(
            "click",
            function () {

                const value =
                    this.dataset.value;

                const action =
                    this.dataset.action;


                if (
                    action === "clear"
                ) {

                    clearCalculator();

                    return;

                }


                if (
                    action === "delete"
                ) {

                    deleteLast();

                    return;

                }


                if (
                    action === "calculate"
                ) {

                    performCalculation();

                    return;

                }


                if (value) {

                    addValue(value);

                }

            }
        );

    });


    /* =====================================
       KEYBOARD SUPPORT
    ===================================== */

    document.addEventListener(
        "keydown",
        function(event) {

            const key =
                event.key;


            if (
                /[0-9.]/
                    .test(key)
            ) {

                addValue(key);

                return;

            }


            if (
                key === "+"
            ) {

                addValue("+");

                return;

            }


            if (
                key === "-"
            ) {

                addValue("−");

                return;

            }


            if (
                key === "*"
            ) {

                addValue("×");

                return;

            }


            if (
                key === "/"
            ) {

                addValue("÷");

                return;

            }


            if (
                key === "%"
            ) {

                addValue("%");

                return;

            }


            if (
                key === "Enter" ||
                key === "="
            ) {

                performCalculation();

                return;

            }


            if (
                key === "Backspace"
            ) {

                deleteLast();

                return;

            }


            if (
                key === "Escape"
            ) {

                clearCalculator();

            }

        }
    );


    /* =====================================
       CLEAR HISTORY
    ===================================== */

    if (clearHistory) {

        clearHistory.addEventListener(
            "click",
            function() {

                historyList.innerHTML =
                    "<p>No calculations yet.</p>";

            }
        );

    }


    /* =====================================
       INITIAL
    ===================================== */

    updateDisplay();

}/* =========================================
   NAMAN TOOLS
   TOOL #17
   DECIMAL / BINARY CONVERTER
========================================= */

const decimalInput =
    document.getElementById(
        "decimalInput"
    );

const binaryInput =
    document.getElementById(
        "binaryInput"
    );

const decimalToBinary =
    document.getElementById(
        "decimalToBinary"
    );

const binaryToDecimal =
    document.getElementById(
        "binaryToDecimal"
    );

const binaryResult =
    document.getElementById(
        "binaryResult"
    );

const binaryClear =
    document.getElementById(
        "binaryClear"
    );

const binaryMessage =
    document.getElementById(
        "binaryMessage"
    );


if (
    decimalInput &&
    binaryInput &&
    binaryResult
) {


    /* =====================================
       SHOW MESSAGE
    ===================================== */

    function showBinaryMessage(
        message
    ) {

        if (!binaryMessage) {
            return;
        }


        binaryMessage.textContent =
            message;


        setTimeout(() => {

            binaryMessage.textContent =
                "";

        }, 1600);

    }


    /* =====================================
       DECIMAL → BINARY
    ===================================== */

    function convertDecimalToBinary() {

        const value =
            decimalInput.value.trim();


        if (!value) {

            binaryResult.textContent =
                "Enter a number";

            return;

        }


        const number =
            Number(value);


        if (
            !Number.isInteger(number)
        ) {

            binaryResult.textContent =
                "Whole numbers only";

            return;

        }


        if (
            number < 0
        ) {

            binaryResult.textContent =
                "Positive numbers only";

            return;

        }


        if (
            !Number.isSafeInteger(number)
        ) {

            binaryResult.textContent =
                "Number is too large";

            return;

        }


        const result =
            number.toString(2);


        binaryInput.value =
            result;


        binaryResult.textContent =
            result;

    }


    /* =====================================
       BINARY → DECIMAL
    ===================================== */

    function convertBinaryToDecimal() {

        const value =
            binaryInput.value
                .trim();


        if (!value) {

            binaryResult.textContent =
                "Enter binary";

            return;

        }


        /* Only 0 and 1 allowed */

        if (
            !/^[01]+$/.test(
                value
            )
        ) {

            binaryResult.textContent =
                "Only 0 and 1 allowed";

            return;

        }


        const result =
            parseInt(
                value,
                2
            );


        if (
            !Number.isSafeInteger(
                result
            )
        ) {

            binaryResult.textContent =
                "Number is too large";

            return;

        }


        decimalInput.value =
            result;


        binaryResult.textContent =
            result.toString();

    }


    /* =====================================
       DECIMAL BUTTON
    ===================================== */

    decimalToBinary.addEventListener(
        "click",
        convertDecimalToBinary
    );


    /* =====================================
       BINARY BUTTON
    ===================================== */

    binaryToDecimal.addEventListener(
        "click",
        convertBinaryToDecimal
    );


    /* =====================================
       LIVE BINARY VALIDATION
    ===================================== */

    binaryInput.addEventListener(
        "input",
        function () {

            this.value =
                this.value.replace(
                    /[^01]/g,
                    ""
                );

        }
    );


    /* =====================================
       ENTER KEY
    ===================================== */

    decimalInput.addEventListener(
        "keydown",
        function(event) {

            if (
                event.key === "Enter"
            ) {

                convertDecimalToBinary();

            }

        }
    );


    binaryInput.addEventListener(
        "keydown",
        function(event) {

            if (
                event.key === "Enter"
            ) {

                convertBinaryToDecimal();

            }

        }
    );


    /* =====================================
       CLEAR
    ===================================== */

    binaryClear.addEventListener(
        "click",
        function () {

            decimalInput.value =
                "";

            binaryInput.value =
                "";

            binaryResult.textContent =
                "—";

            showBinaryMessage(
                "✓ Cleared"
            );

        }
    );

}/* =========================================
   NAMAN TOOLS
   TOOL #18
   URL ENCODER / DECODER
========================================= */

const urlInput =
    document.getElementById(
        "urlInput"
    );

const urlResult =
    document.getElementById(
        "urlResult"
    );

const encodeUrl =
    document.getElementById(
        "encodeUrl"
    );

const decodeUrl =
    document.getElementById(
        "decodeUrl"
    );

const copyUrlResult =
    document.getElementById(
        "copyUrlResult"
    );

const clearUrl =
    document.getElementById(
        "clearUrl"
    );

const urlMessage =
    document.getElementById(
        "urlMessage"
    );


if (
    urlInput &&
    urlResult
) {


    /* =====================================
       MESSAGE
    ===================================== */

    function showUrlMessage(
        message
    ) {

        if (!urlMessage) {
            return;
        }


        urlMessage.textContent =
            message;


        setTimeout(() => {

            urlMessage.textContent =
                "";

        }, 1600);

    }


    /* =====================================
       ENCODE
    ===================================== */

    function encodeURL() {

        const text =
            urlInput.value;


        if (!text.trim()) {

            urlResult.value =
                "";

            showUrlMessage(
                "Please enter some text."
            );

            return;

        }


        try {

            urlResult.value =
                encodeURIComponent(
                    text
                );

        }

        catch (error) {

            urlResult.value =
                "Unable to encode text.";

        }

    }


    /* =====================================
       DECODE
    ===================================== */

    function decodeURL() {

        const text =
            urlInput.value;


        if (!text.trim()) {

            urlResult.value =
                "";

            showUrlMessage(
                "Please enter encoded text."
            );

            return;

        }


        try {

            urlResult.value =
                decodeURIComponent(
                    text
                );

        }

        catch (error) {

            urlResult.value =
                "Invalid encoded URL/text.";

            showUrlMessage(
                "Invalid encoded text."
            );

        }

    }


    /* =====================================
       ENCODE BUTTON
    ===================================== */

    if (encodeUrl) {

        encodeUrl.addEventListener(
            "click",
            encodeURL
        );

    }


    /* =====================================
       DECODE BUTTON
    ===================================== */

    if (decodeUrl) {

        decodeUrl.addEventListener(
            "click",
            decodeURL
        );

    }


    /* =====================================
       COPY RESULT
    ===================================== */

    if (copyUrlResult) {

        copyUrlResult.addEventListener(
            "click",
            async function () {

                const text =
                    urlResult.value;


                if (!text) {

                    showUrlMessage(
                        "Nothing to copy."
                    );

                    return;

                }


                try {

                    await navigator
                        .clipboard
                        .writeText(
                            text
                        );

                }

                catch (error) {

                    urlResult.select();

                    document.execCommand(
                        "copy"
                    );

                    urlResult.setSelectionRange(
                        0,
                        0
                    );

                }


                showUrlMessage(
                    "✓ Result copied!"
                );

            }
        );

    }


    /* =====================================
       CLEAR
    ===================================== */

    if (clearUrl) {

        clearUrl.addEventListener(
            "click",
            function () {

                urlInput.value =
                    "";

                urlResult.value =
                    "";

                showUrlMessage(
                    "✓ Cleared"
                );

            }
        );

    }

}/* =========================================
   NAMAN TOOLS
   TOOL #19
   QUICK NOTES
========================================= */

const noteTitle =
    document.getElementById(
        "noteTitle"
    );

const noteText =
    document.getElementById(
        "noteText"
    );

const saveNote =
    document.getElementById(
        "saveNote"
    );

const notesList =
    document.getElementById(
        "notesList"
    );

const clearAllNotes =
    document.getElementById(
        "clearAllNotes"
    );

const notesMessage =
    document.getElementById(
        "notesMessage"
    );


if (
    noteTitle &&
    noteText &&
    saveNote &&
    notesList
) {


    /* =====================================
       STORAGE KEY
    ===================================== */

    const NOTES_KEY =
        "namanToolsQuickNotes";


    let notes = [];

    let editingId = null;


    /* =====================================
       LOAD NOTES
    ===================================== */

    function loadNotes() {

        try {

            const saved =
                localStorage.getItem(
                    NOTES_KEY
                );


            notes =
                saved
                    ? JSON.parse(saved)
                    : [];

        }

        catch (error) {

            notes = [];

        }


        renderNotes();

    }


    /* =====================================
       SAVE TO STORAGE
    ===================================== */

    function saveToStorage() {

        localStorage.setItem(
            NOTES_KEY,
            JSON.stringify(notes)
        );

    }


    /* =====================================
       MESSAGE
    ===================================== */

    function showNotesMessage(
        message
    ) {

        if (!notesMessage) {
            return;
        }


        notesMessage.textContent =
            message;


        setTimeout(() => {

            notesMessage.textContent =
                "";

        }, 1600);

    }


    /* =====================================
       ESCAPE HTML
    ===================================== */

    function escapeHTML(
        text
    ) {

        const div =
            document.createElement(
                "div"
            );

        div.textContent =
            text;

        return div.innerHTML;

    }


    /* =====================================
       RENDER NOTES
    ===================================== */

    function renderNotes() {

        if (!notes.length) {

            notesList.innerHTML =
                `
                <div class="empty-notes">
                    No notes saved yet.
                </div>
                `;

            return;

        }


        notesList.innerHTML =
            notes.map(note => {

                return `
                    <article
                        class="note-item"
                        data-id="${note.id}"
                    >

                        <h3 class="note-item-title">
                            ${escapeHTML(note.title)}
                        </h3>

                        <div class="note-item-text">
                            ${escapeHTML(note.text)}
                        </div>

                        <div class="note-item-footer">

                            <span class="note-date">
                                ${escapeHTML(note.date)}
                            </span>

                            <div class="note-actions">

                                <button
                                    type="button"
                                    class="note-edit-btn"
                                    data-edit="${note.id}"
                                >
                                    Edit
                                </button>

                                <button
                                    type="button"
                                    class="note-delete-btn"
                                    data-delete="${note.id}"
                                >
                                    Delete
                                </button>

                            </div>

                        </div>

                    </article>
                `;

            }).join("");

    }


    /* =====================================
       SAVE / UPDATE NOTE
    ===================================== */

    saveNote.addEventListener(
        "click",
        function () {

            const title =
                noteTitle.value.trim();

            const text =
                noteText.value.trim();


            if (!title && !text) {

                showNotesMessage(
                    "Please write a note."
                );

                return;

            }


            const finalTitle =
                title || "Untitled Note";


            /* =================================
               UPDATE
            ================================= */

            if (editingId !== null) {

                const index =
                    notes.findIndex(
                        note =>
                            note.id ===
                            editingId
                    );


                if (index !== -1) {

                    notes[index].title =
                        finalTitle;

                    notes[index].text =
                        text;

                    notes[index].date =
                        new Date()
                            .toLocaleString(
                                "en-IN",
                                {
                                    day: "2-digit",
                                    month: "short",
                                    year: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit"
                                }
                            );

                }


                editingId = null;

                saveNote.textContent =
                    "💾 Save Note";


                showNotesMessage(
                    "✓ Note updated!"
                );

            }


            /* =================================
               NEW NOTE
            ================================= */

            else {

                const newNote = {

                    id:
                        Date.now(),

                    title:
                        finalTitle,

                    text:
                        text,

                    date:
                        new Date()
                            .toLocaleString(
                                "en-IN",
                                {
                                    day: "2-digit",
                                    month: "short",
                                    year: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit"
                                }
                            )

                };


                notes.unshift(
                    newNote
                );


                showNotesMessage(
                    "✓ Note saved!"
                );

            }


            saveToStorage();

            renderNotes();


            noteTitle.value =
                "";

            noteText.value =
                "";

        }
    );


    /* =====================================
       EDIT / DELETE
    ===================================== */

    notesList.addEventListener(
        "click",
        function (event) {

            const editButton =
                event.target.closest(
                    "[data-edit]"
                );

            const deleteButton =
                event.target.closest(
                    "[data-delete]"
                );


            /* =================================
               EDIT
            ================================= */

            if (editButton) {

                const id =
                    Number(
                        editButton.dataset.edit
                    );


                const note =
                    notes.find(
                        item =>
                            item.id === id
                    );


                if (!note) {
                    return;
                }


                noteTitle.value =
                    note.title;

                noteText.value =
                    note.text;


                editingId =
                    id;


                saveNote.textContent =
                    "✏️ Update Note";


                noteTitle.focus();


                showNotesMessage(
                    "Edit mode enabled"
                );

                return;

            }


            /* =================================
               DELETE
            ================================= */

            if (deleteButton) {

                const id =
                    Number(
                        deleteButton.dataset.delete
                    );


                notes =
                    notes.filter(
                        note =>
                            note.id !== id
                    );


                saveToStorage();

                renderNotes();


                showNotesMessage(
                    "✓ Note deleted"
                );

            }

        }
    );


    /* =====================================
       CLEAR ALL
    ===================================== */

    if (clearAllNotes) {

        clearAllNotes.addEventListener(
            "click",
            function () {

                if (!notes.length) {

                    showNotesMessage(
                        "No notes to clear."
                    );

                    return;

                }


                const confirmClear =
                    window.confirm(
                        "Delete all saved notes?"
                    );


                if (!confirmClear) {
                    return;
                }


                notes = [];

                editingId = null;


                saveToStorage();

                renderNotes();


                noteTitle.value =
                    "";

                noteText.value =
                    "";


                saveNote.textContent =
                    "💾 Save Note";


                showNotesMessage(
                    "✓ All notes cleared"
                );

            }
        );

    }


    /* =====================================
       INITIAL LOAD
    ===================================== */

    loadNotes();

}/* =========================================
   NAMAN TOOLS
   TOOL #20
   AGE IN TIME
========================================= */

const birthDate =
    document.getElementById(
        "birthDate"
    );

const birthTime =
    document.getElementById(
        "birthTime"
    );

const calculateAgeTime =
    document.getElementById(
        "calculateAgeTime"
    );

const ageTimeResult =
    document.getElementById(
        "ageTimeResult"
    );

const ageTimeLive =
    document.getElementById(
        "ageTimeLive"
    );

const clearAgeTime =
    document.getElementById(
        "clearAgeTime"
    );


if (
    birthDate &&
    birthTime &&
    calculateAgeTime &&
    ageTimeResult
) {

    let birthDateTime = null;

    let liveTimer = null;


    /* =====================================
       CALCULATE AGE
    ===================================== */

    function calculateExactAge(
        birth
    ) {

        const now =
            new Date();


        let years =
            now.getFullYear()
            -
            birth.getFullYear();


        let months =
            now.getMonth()
            -
            birth.getMonth();


        let days =
            now.getDate()
            -
            birth.getDate();


        let hours =
            now.getHours()
            -
            birth.getHours();


        let minutes =
            now.getMinutes()
            -
            birth.getMinutes();


        let seconds =
            now.getSeconds()
            -
            birth.getSeconds();


        if (seconds < 0) {

            seconds += 60;

            minutes--;

        }


        if (minutes < 0) {

            minutes += 60;

            hours--;

        }


        if (hours < 0) {

            hours += 24;

            days--;

        }


        if (days < 0) {

            const previousMonth =
                new Date(
                    now.getFullYear(),
                    now.getMonth(),
                    0
                ).getDate();


            days +=
                previousMonth;

            months--;

        }


        if (months < 0) {

            months += 12;

            years--;

        }


        return {
            years,
            months,
            days,
            hours,
            minutes,
            seconds
        };

    }


    /* =====================================
       DISPLAY AGE
    ===================================== */

    function displayAge() {

        if (!birthDateTime) {
            return;
        }


        const age =
            calculateExactAge(
                birthDateTime
            );


        ageTimeResult.innerHTML = `

            <div class="age-result-grid">

                <div class="age-result-box">
                    <strong>${age.years}</strong>
                    <span>Years</span>
                </div>

                <div class="age-result-box">
                    <strong>${age.months}</strong>
                    <span>Months</span>
                </div>

                <div class="age-result-box">
                    <strong>${age.days}</strong>
                    <span>Days</span>
                </div>

                <div class="age-result-box">
                    <strong>${age.hours}</strong>
                    <span>Hours</span>
                </div>

                <div class="age-result-box">
                    <strong>${age.minutes}</strong>
                    <span>Minutes</span>
                </div>

                <div class="age-result-box">
                    <strong>${age.seconds}</strong>
                    <span>Seconds</span>
                </div>

            </div>

        `;


        ageTimeLive.textContent =
            "● Live age updating every second";

    }


    /* =====================================
       CALCULATE BUTTON
    ===================================== */

    calculateAgeTime.addEventListener(
        "click",
        function () {

            if (
                !birthDate.value ||
                !birthTime.value
            ) {

                ageTimeResult.innerHTML = `

                    <div class="age-time-error">
                        Please enter your date and time of birth.
                    </div>

                `;

                ageTimeLive.textContent =
                    "";

                return;

            }


            const selected =
                birthDate.value
                +
                "T"
                +
                birthTime.value;


            birthDateTime =
                new Date(
                    selected
                );


            const now =
                new Date();


            if (
                birthDateTime > now
            ) {

                ageTimeResult.innerHTML = `

                    <div class="age-time-error">
                        Birth date and time cannot be in the future.
                    </div>

                `;

                ageTimeLive.textContent =
                    "";

                birthDateTime =
                    null;

                return;

            }


            displayAge();


            /* Clear old timer */

            if (liveTimer) {

                clearInterval(
                    liveTimer
                );

            }


            /* Live update */

            liveTimer =
                setInterval(
                    displayAge,
                    1000
                );

        }
    );


    /* =====================================
       CLEAR
    ===================================== */

    clearAgeTime.addEventListener(
        "click",
        function () {

            birthDate.value =
                "";

            birthTime.value =
                "";


            birthDateTime =
                null;


            if (liveTimer) {

                clearInterval(
                    liveTimer
                );

                liveTimer =
                    null;

            }


            ageTimeResult.innerHTML = `

                <div class="age-time-placeholder">
                    Enter your birth date and time
                </div>

            `;


            ageTimeLive.textContent =
                "";

        }
    );


    /* =====================================
       PREVENT FUTURE DATE
    ===================================== */

    birthDate.addEventListener(
        "change",
        function () {

            if (!this.value) {
                return;
            }


            const selectedDate =
                new Date(
                    this.value
                );


            const today =
                new Date();


            today.setHours(
                0,
                0,
                0,
                0
            );


            if (
                selectedDate > today
            ) {

                this.value =
                    "";

            }

        }
    );

}/* =========================================
   NAMAN TOOLS
   TOOL #21
   JSON FORMATTER & VALIDATOR
========================================= */

const jsonInput =
    document.getElementById(
        "jsonInput"
    );

const jsonResult =
    document.getElementById(
        "jsonResult"
    );

const formatJson =
    document.getElementById(
        "formatJson"
    );

const minifyJson =
    document.getElementById(
        "minifyJson"
    );

const validateJson =
    document.getElementById(
        "validateJson"
    );

const copyJson =
    document.getElementById(
        "copyJson"
    );

const clearJson =
    document.getElementById(
        "clearJson"
    );

const jsonStatus =
    document.getElementById(
        "jsonStatus"
    );


if (
    jsonInput &&
    jsonResult
) {


    /* =====================================
       STATUS MESSAGE
    ===================================== */

    function showJsonStatus(
        message,
        type = "success"
    ) {

        jsonStatus.textContent =
            message;


        if (type === "error") {

            jsonStatus.style.color =
                "#dc2626";

        }

        else {

            jsonStatus.style.color =
                "#027a48";

        }


        setTimeout(() => {

            jsonStatus.textContent =
                "";

        }, 2200);

    }


    /* =====================================
       GET JSON
    ===================================== */

    function getJSON() {

        const text =
            jsonInput.value.trim();


        if (!text) {

            showJsonStatus(
                "Please enter JSON.",
                "error"
            );

            return null;

        }


        try {

            return JSON.parse(
                text
            );

        }

        catch (error) {

            showJsonStatus(
                "Invalid JSON: " +
                error.message,
                "error"
            );

            return null;

        }

    }


    /* =====================================
       FORMAT JSON
    ===================================== */

    if (formatJson) {

        formatJson.addEventListener(
            "click",
            function () {

                const data =
                    getJSON();


                if (data === null) {
                    return;
                }


                jsonResult.value =
                    JSON.stringify(
                        data,
                        null,
                        4
                    );


                showJsonStatus(
                    "✓ Valid JSON formatted successfully."
                );

            }
        );

    }


    /* =====================================
       MINIFY JSON
    ===================================== */

    if (minifyJson) {

        minifyJson.addEventListener(
            "click",
            function () {

                const data =
                    getJSON();


                if (data === null) {
                    return;
                }


                jsonResult.value =
                    JSON.stringify(
                        data
                    );


                showJsonStatus(
                    "✓ JSON minified successfully."
                );

            }
        );

    }


    /* =====================================
       VALIDATE JSON
    ===================================== */

    if (validateJson) {

        validateJson.addEventListener(
            "click",
            function () {

                const data =
                    getJSON();


                if (data === null) {
                    return;
                }


                jsonResult.value =
                    JSON.stringify(
                        data,
                        null,
                        4
                    );


                showJsonStatus(
                    "✓ JSON is valid."
                );

            }
        );

    }


    /* =====================================
       COPY RESULT
    ===================================== */

    if (copyJson) {

        copyJson.addEventListener(
            "click",
            async function () {

                const text =
                    jsonResult.value;


                if (!text) {

                    showJsonStatus(
                        "Nothing to copy.",
                        "error"
                    );

                    return;

                }


                try {

                    await navigator
                        .clipboard
                        .writeText(
                            text
                        );

                }

                catch (error) {

                    jsonResult.select();

                    document.execCommand(
                        "copy"
                    );

                    jsonResult.setSelectionRange(
                        0,
                        0
                    );

                }


                showJsonStatus(
                    "✓ Result copied!"
                );

            }
        );

    }


    /* =====================================
       CLEAR
    ===================================== */

    if (clearJson) {

        clearJson.addEventListener(
            "click",
            function () {

                jsonInput.value =
                    "";

                jsonResult.value =
                    "";

                jsonStatus.textContent =
                    "";

            }
        );

    }

}/* =========================================
   NAMAN TOOLS
   TOOL #22
   BASE64 ENCODER / DECODER
========================================= */

const base64Input =
    document.getElementById(
        "base64Input"
    );

const base64Result =
    document.getElementById(
        "base64Result"
    );

const encodeBase64 =
    document.getElementById(
        "encodeBase64"
    );

const decodeBase64 =
    document.getElementById(
        "decodeBase64"
    );

const copyBase64 =
    document.getElementById(
        "copyBase64"
    );

const clearBase64 =
    document.getElementById(
        "clearBase64"
    );

const base64Status =
    document.getElementById(
        "base64Status"
    );


if (
    base64Input &&
    base64Result
) {


    /* =====================================
       STATUS
    ===================================== */

    function showBase64Status(
        message,
        error = false
    ) {

        base64Status.textContent =
            message;

        base64Status.style.color =
            error
                ? "#dc2626"
                : "#027a48";


        setTimeout(() => {

            base64Status.textContent =
                "";

        }, 2000);

    }


    /* =====================================
       UTF-8 ENCODE
    ===================================== */

    if (encodeBase64) {

        encodeBase64.addEventListener(
            "click",
            function () {

                const text =
                    base64Input.value;


                if (!text) {

                    showBase64Status(
                        "Please enter some text.",
                        true
                    );

                    return;

                }


                try {

                    const encoded =
                        btoa(
                            unescape(
                                encodeURIComponent(
                                    text
                                )
                            )
                        );


                    base64Result.value =
                        encoded;


                    showBase64Status(
                        "✓ Text encoded successfully."
                    );

                }

                catch (error) {

                    showBase64Status(
                        "Unable to encode text.",
                        true
                    );

                }

            }
        );

    }


    /* =====================================
       UTF-8 DECODE
    ===================================== */

    if (decodeBase64) {

        decodeBase64.addEventListener(
            "click",
            function () {

                const text =
                    base64Input.value.trim();


                if (!text) {

                    showBase64Status(
                        "Please enter Base64 data.",
                        true
                    );

                    return;

                }


                try {

                    const decoded =
                        decodeURIComponent(
                            escape(
                                atob(text)
                            )
                        );


                    base64Result.value =
                        decoded;


                    showBase64Status(
                        "✓ Base64 decoded successfully."
                    );

                }

                catch (error) {

                    base64Result.value =
                        "";

                    showBase64Status(
                        "Invalid Base64 data.",
                        true
                    );

                }

            }
        );

    }


    /* =====================================
       COPY
    ===================================== */

    if (copyBase64) {

        copyBase64.addEventListener(
            "click",
            async function () {

                const text =
                    base64Result.value;


                if (!text) {

                    showBase64Status(
                        "Nothing to copy.",
                        true
                    );

                    return;

                }


                try {

                    await navigator
                        .clipboard
                        .writeText(
                            text
                        );

                }

                catch (error) {

                    base64Result.select();

                    document.execCommand(
                        "copy"
                    );

                    base64Result.setSelectionRange(
                        0,
                        0
                    );

                }


                showBase64Status(
                    "✓ Result copied!"
                );

            }
        );

    }


    /* =====================================
       CLEAR
    ===================================== */

    if (clearBase64) {

        clearBase64.addEventListener(
            "click",
            function () {

                base64Input.value =
                    "";

                base64Result.value =
                    "";

                base64Status.textContent =
                    "";

            }
        );

    }

}/* =========================================
   NAMAN TOOLS
   TOOL #23
   TIMESTAMP CONVERTER
========================================= */

const timestampInput =
    document.getElementById(
        "timestampInput"
    );

const timestampToDate =
    document.getElementById(
        "timestampToDate"
    );

const dateInput =
    document.getElementById(
        "dateInput"
    );

const dateToTimestamp =
    document.getElementById(
        "dateToTimestamp"
    );

const dateResult =
    document.getElementById(
        "dateResult"
    );

const timestampResult =
    document.getElementById(
        "timestampResult"
    );

const currentTimestamp =
    document.getElementById(
        "currentTimestamp"
    );

const clearTimestamp =
    document.getElementById(
        "clearTimestamp"
    );


if (
    timestampInput &&
    timestampToDate &&
    dateInput &&
    dateToTimestamp
) {


    /* =====================================
       FORMAT DATE
    ===================================== */

    function formatDate(date) {

        return date.toLocaleString(
            "en-IN",
            {
                day: "2-digit",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            }
        );

    }


    /* =====================================
       TIMESTAMP → DATE
    ===================================== */

    timestampToDate.addEventListener(
        "click",
        function () {

            const value =
                timestampInput.value.trim();


            if (!value) {

                dateResult.textContent =
                    "Please enter a timestamp.";

                dateResult.classList.add(
                    "timestamp-error"
                );

                return;

            }


            const number =
                Number(value);


            if (!Number.isFinite(number)) {

                dateResult.textContent =
                    "Invalid timestamp.";

                dateResult.classList.add(
                    "timestamp-error"
                );

                return;

            }


            /*
             * Unix timestamp normally uses
             * seconds. 13-digit timestamps
             * use milliseconds.
             */

            const milliseconds =
                Math.abs(number) >= 100000000000
                    ? number
                    : number * 1000;


            const date =
                new Date(
                    milliseconds
                );


            if (
                Number.isNaN(
                    date.getTime()
                )
            ) {

                dateResult.textContent =
                    "Invalid timestamp.";

                dateResult.classList.add(
                    "timestamp-error"
                );

                return;

            }


            dateResult.classList.remove(
                "timestamp-error"
            );


            dateResult.textContent =
                formatDate(date);

        }
    );


    /* =====================================
       DATE → TIMESTAMP
    ===================================== */

    dateToTimestamp.addEventListener(
        "click",
        function () {

            if (!dateInput.value) {

                timestampResult.textContent =
                    "Please select a date and time.";

                timestampResult.classList.add(
                    "timestamp-error"
                );

                return;

            }


            const date =
                new Date(
                    dateInput.value
                );


            if (
                Number.isNaN(
                    date.getTime()
                )
            ) {

                timestampResult.textContent =
                    "Invalid date.";

                timestampResult.classList.add(
                    "timestamp-error"
                );

                return;

            }


            const timestamp =
                Math.floor(
                    date.getTime() / 1000
                );


            timestampResult.classList.remove(
                "timestamp-error"
            );


            timestampResult.textContent =
                timestamp;

        }
    );


    /* =====================================
       CURRENT TIMESTAMP
    ===================================== */

    function updateCurrentTimestamp() {

        const now =
            Math.floor(
                Date.now() / 1000
            );


        currentTimestamp.textContent =
            now;

    }


    updateCurrentTimestamp();


    setInterval(
        updateCurrentTimestamp,
        1000
    );


    /* =====================================
       CLEAR
    ===================================== */

    if (clearTimestamp) {

        clearTimestamp.addEventListener(
            "click",
            function () {

                timestampInput.value =
                    "";

                dateInput.value =
                    "";


                dateResult.textContent =
                    "Result will appear here";


                timestampResult.textContent =
                    "Result will appear here";


                dateResult.classList.remove(
                    "timestamp-error"
                );


                timestampResult.classList.remove(
                    "timestamp-error"
                );

            }
        );

    }

}/* =========================================
   NAMAN TOOLS
   TOOL #24
   TEXT REVERSER
========================================= */

const reverseInput =
    document.getElementById(
        "reverseInput"
    );

const reverseResult =
    document.getElementById(
        "reverseResult"
    );

const reverseBtn =
    document.getElementById(
        "reverseBtn"
    );

const copyReverse =
    document.getElementById(
        "copyReverse"
    );

const clearReverse =
    document.getElementById(
        "clearReverse"
    );

const reverseStatus =
    document.getElementById(
        "reverseStatus"
    );

const reverseOptions =
    document.querySelectorAll(
        ".reverse-option"
    );


let reverseMode =
    "characters";


if (
    reverseInput &&
    reverseResult &&
    reverseBtn
) {


    /* =====================================
       SELECT MODE
    ===================================== */

    reverseOptions.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    reverseOptions.forEach(
                        function (item) {

                            item.classList.remove(
                                "active"
                            );

                        }
                    );


                    this.classList.add(
                        "active"
                    );


                    reverseMode =
                        this.dataset.mode;

                }
            );

        }
    );


    /* =====================================
       REVERSE TEXT
    ===================================== */

    reverseBtn.addEventListener(
        "click",
        function () {

            const text =
                reverseInput.value;


            if (!text.trim()) {

                reverseStatus.textContent =
                    "Please enter some text.";

                reverseStatus.style.color =
                    "#dc2626";

                return;

            }


            let result = "";


            /* Characters */

            if (
                reverseMode ===
                "characters"
            ) {

                result =
                    Array.from(text)
                        .reverse()
                        .join("");

            }


            /* Words */

            else if (
                reverseMode ===
                "words"
            ) {

                result =
                    text
                        .trim()
                        .split(/\s+/)
                        .reverse()
                        .join(" ");

            }


            /* Lines */

            else if (
                reverseMode ===
                "lines"
            ) {

                result =
                    text
                        .split(/\r?\n/)
                        .reverse()
                        .join("\n");

            }


            reverseResult.value =
                result;


            reverseStatus.textContent =
                "✓ Text reversed successfully.";

            reverseStatus.style.color =
                "#027a48";


            setTimeout(
                function () {

                    reverseStatus.textContent =
                        "";

                },
                2000
            );

        }
    );


    /* =====================================
       COPY
    ===================================== */

    if (copyReverse) {

        copyReverse.addEventListener(
            "click",
            async function () {

                const text =
                    reverseResult.value;


                if (!text) {

                    reverseStatus.textContent =
                        "Nothing to copy.";

                    reverseStatus.style.color =
                        "#dc2626";

                    return;

                }


                try {

                    await navigator
                        .clipboard
                        .writeText(
                            text
                        );

                }

                catch (error) {

                    reverseResult.select();

                    document.execCommand(
                        "copy"
                    );

                    reverseResult.setSelectionRange(
                        0,
                        0
                    );

                }


                reverseStatus.textContent =
                    "✓ Result copied!";

                reverseStatus.style.color =
                    "#027a48";

            }
        );

    }


    /* =====================================
       CLEAR
    ===================================== */

    if (clearReverse) {

        clearReverse.addEventListener(
            "click",
            function () {

                reverseInput.value =
                    "";

                reverseResult.value =
                    "";

                reverseStatus.textContent =
                    "";

            }
        );

    }

}/* =========================================
   NAMAN TOOLS
   TOOL #25
   LOREM IPSUM GENERATOR
========================================= */

const loremAmount =
    document.getElementById(
        "loremAmount"
    );

const loremType =
    document.getElementById(
        "loremType"
    );

const generateLorem =
    document.getElementById(
        "generateLorem"
    );

const loremResult =
    document.getElementById(
        "loremResult"
    );

const copyLorem =
    document.getElementById(
        "copyLorem"
    );

const clearLorem =
    document.getElementById(
        "clearLorem"
    );

const loremStatus =
    document.getElementById(
        "loremStatus"
    );


if (
    loremAmount &&
    loremType &&
    generateLorem &&
    loremResult
) {


    /* =====================================
       LOREM WORD BANK
    ===================================== */

    const loremWords = [
        "lorem",
        "ipsum",
        "dolor",
        "sit",
        "amet",
        "consectetur",
        "adipiscing",
        "elit",
        "integer",
        "vitae",
        "mauris",
        "praesent",
        "vel",
        "lectus",
        "donec",
        "semper",
        "nunc",
        "eget",
        "massa",
        "aliquam",
        "erat",
        "volutpat",
        "curabitur",
        "blandit",
        "tincidunt",
        "duis",
        "auctor",
        "magna",
        "facilisis",
        "nulla",
        "sodales",
        "porta",
        "vestibulum",
        "accumsan",
        "tortor",
        "pharetra",
        "fermentum",
        "finibus",
        "laoreet",
        "tempus",
        "libero",
        "mattis",
        "faucibus",
        "ornare",
        "tellus",
        "suscipit",
        "congue",
        "sapien",
        "fringilla"
    ];


    /* =====================================
       RANDOM WORD
    ===================================== */

    function randomWord() {

        return loremWords[
            Math.floor(
                Math.random() *
                loremWords.length
            )
        ];

    }


    /* =====================================
       GENERATE WORDS
    ===================================== */

    function generateWords(count) {

        const words = [];

        for (
            let i = 0;
            i < count;
            i++
        ) {

            words.push(
                randomWord()
            );

        }

        return words;

    }


    /* =====================================
       GENERATE SENTENCE
    ===================================== */

    function generateSentence() {

        const length =
            Math.floor(
                Math.random() * 9
            ) + 8;


        const words =
            generateWords(length);


        words[0] =
            words[0]
                .charAt(0)
                .toUpperCase() +
            words[0].slice(1);


        return (
            words.join(" ") +
            "."
        );

    }


    /* =====================================
       GENERATE PARAGRAPH
    ===================================== */

    function generateParagraph() {

        const sentenceCount =
            Math.floor(
                Math.random() * 4
            ) + 4;


        const sentences = [];

        for (
            let i = 0;
            i < sentenceCount;
            i++
        ) {

            sentences.push(
                generateSentence()
            );

        }


        return sentences.join(" ");

    }


    /* =====================================
       GENERATE
    ===================================== */

    generateLorem.addEventListener(
        "click",
        function () {

            let amount =
                parseInt(
                    loremAmount.value,
                    10
                );


            if (
                Number.isNaN(amount) ||
                amount < 1
            ) {

                amount = 1;

            }


            if (amount > 50) {

                amount = 50;

                loremAmount.value =
                    50;

            }


            const type =
                loremType.value;


            let result = "";


            /* WORDS */

            if (
                type === "words"
            ) {

                result =
                    generateWords(
                        amount
                    ).join(" ");

            }


            /* SENTENCES */

            else if (
                type === "sentences"
            ) {

                const sentences = [];

                for (
                    let i = 0;
                    i < amount;
                    i++
                ) {

                    sentences.push(
                        generateSentence()
                    );

                }

                result =
                    sentences.join(" ");

            }


            /* PARAGRAPHS */

            else {

                const paragraphs = [];

                for (
                    let i = 0;
                    i < amount;
                    i++
                ) {

                    paragraphs.push(
                        generateParagraph()
                    );

                }

                result =
                    paragraphs.join("\n\n");

            }


            loremResult.value =
                result;


            loremStatus.textContent =
                "✓ Text generated successfully.";

            loremStatus.style.color =
                "#027a48";


            setTimeout(
                function () {

                    loremStatus.textContent =
                        "";

                },
                2000
            );

        }
    );


    /* =====================================
       COPY
    ===================================== */

    if (copyLorem) {

        copyLorem.addEventListener(
            "click",
            async function () {

                const text =
                    loremResult.value;


                if (!text) {

                    loremStatus.textContent =
                        "Nothing to copy.";

                    loremStatus.style.color =
                        "#dc2626";

                    return;

                }


                try {

                    await navigator
                        .clipboard
                        .writeText(
                            text
                        );

                }

                catch (error) {

                    loremResult.select();

                    document.execCommand(
                        "copy"
                    );

                    loremResult.setSelectionRange(
                        0,
                        0
                    );

                }


                loremStatus.textContent =
                    "✓ Result copied!";

                loremStatus.style.color =
                    "#027a48";

            }
        );

    }


    /* =====================================
       CLEAR
    ===================================== */

    if (clearLorem) {

        clearLorem.addEventListener(
            "click",
            function () {

                loremResult.value =
                    "";

                loremStatus.textContent =
                    "";

            }
        );

    }

}
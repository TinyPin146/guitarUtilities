const guitarUtils = (function() {
    const notes = ['A', 'Aisz/B', 'H', 'C', 'Cisz/Desz', 'D', 'Disz/Esz', 'E', 'F', 'Fisz/Gisz', 'G', 'Gisz/Asz'];
    const guitarStrings = ['E', 'A', 'D', 'G', 'H', 'E'];
    const modes = ['dúr', 'dór', 'frig', 'líd', 'mixolíd', 'moll(eol)', 'lokriszi'];

    // * Private functions

    // * Public functions
    function getNumberOfNotes(num, includeAccidentals, noteList = notes) {
        let numOfNotes = [];
        for (let i = 0; i < num; i++) {
            const newNote = utils.getRandomElOfArr(noteList);
            if (!numOfNotes.includes(newNote)) {
                if (!!includeAccidentals && newNote.split('').length !== 1) {
                    console.log(includeAccidentals, newNote.split('').length !== 1);
                    i--;
                    continue;
                }
                numOfNotes.push(newNote);
                continue;
            }
            i--;
        }
        return numOfNotes.join(', ');
    }

    function getRandomScale(noteList = notes, modeList = modes) {
        return `${utils.getRandomElOfArr(noteList)}-${utils.getRandomElOfArr(modeList)}`
    }
    return {
        getNumberOfNotes,
        getRandomScale,
    }
})();

const utils = (function() {
    function getRandomElOfArr(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    return {
        getRandomElOfArr,
    }
})();

const renderOnDom = (function() {
    const scaleButton = document.querySelector('#random-scale--button');
    const noteButton = document.querySelector('#random-notes--button');
    const display = document.querySelector('#display');
    const numSelect = document.querySelector('#note-number');
    const accidentalSelect = document.querySelector('#accidentals');

    function renderNotes() {
        display.textContent = guitarUtils.getNumberOfNotes(numSelect.value, Number(accidentalSelect.value));
    }

    function renderScale() {
        display.textContent = guitarUtils.getRandomScale();
    }

    function init() {
        scaleButton.addEventListener('click', renderScale);
        noteButton.addEventListener('click', renderNotes);
    }
    init();

    return {
        accidentalSelect,
    }
})();
const guitarUtils = (function() {
    const notes = ['A', 'Aisz/B', 'H', 'C', 'Cisz/Desz', 'D', 'Disz/Esz', 'E', 'F', 'Fisz/Gisz', 'G', 'Gisz/Asz'];
    const guitarStrings = ['E', 'A', 'D', 'G', 'H', 'E'];
    const modes = ['dúr', 'dór', 'frig', 'líd', 'mixolíd', 'moll(eol)', 'lokriszi'];

    function getNumberOfNotes(num = 5, noteList = notes) {
        let numOfNotes = [];
        for (let i = 0; i < num; i++) {
            const newNote = noteList[Math.floor(Math.random() * noteList.length)]
            if (!numOfNotes.includes(newNote)) {
                numOfNotes.push(newNote);
                continue;
            }
            i--;
        }
        return numOfNotes.join(', ');
    }

    function getRandomScale(noteList = notes, modeList = modes) {
        return [notes[Math.floor(Math.random() * notes.length)], modes[Math.floor(Math.random() * modes.length)]].join(' ');
    }
    return {
        getNumberOfNotes,
        getRandomScale,
    }
})();

const renderOnDom = (function() {
    const scaleButton = document.querySelector('#random-scale--button');
    const noteButton = document.querySelector('#random-notes--button');
    const display = document.querySelector('#display');

    function renderNotes() {
        display.textContent = guitarUtils.getNumberOfNotes();
    }

    function renderScale() {
        display.textContent = guitarUtils.getRandomScale();
    }

    function init() {
        scaleButton.addEventListener('click', renderScale);
        noteButton.addEventListener('click', renderNotes);
    }
    init();
})();
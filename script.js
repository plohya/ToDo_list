const $choiseInput = document.getElementById('input');
const $noteList = document.getElementById('noteList');

// $choiseInput.focus();

document.addEventListener('click', workNote);

function workNote(e){
    if (e.target.classList.contains('saveNote')) {
        console.log($choiseInput.value);
        addNote($choiseInput.value);
    } else if (e.target.classList.contains('clearAllNotes')) {
        console.log('all notes are deleted');
        clearAllNotes($noteList);
    } else if(e.target.classList.contains('list-item')) {
        if(e.target.classList.contains('completed')) {
            console.log('completed item deleted');
            e.target.remove();
        } else {  
            console.log(`${e.target.textContent} note is completed`);
            makeComplete(e.target);
        }
    } else if(e.target.classList.contains('clearAllCompleted')) {
        console.log('all completed notes are deleted');
        clearAllCompleted();
    }
}

function addNote(note) {
    if($choiseInput.value.trim() == '') {
        return 1;
    }
    let $li = document.createElement("li");
    $li.textContent = $choiseInput.value;
    $noteList.append($li);
    $li.classList.add("list-item");
    console.log(`${note} note written!`);
    $choiseInput.value = '';
    console.log('input.value is clear now');
}

function clearAllNotes(list){
    list.innerHTML = '';
}

function makeComplete(item){
    item.classList.add('completed');
}

function clearAllCompleted(){
    const $nList = document.querySelectorAll('.list-item');
    $nList.forEach(item => {
        if(item.classList.contains('completed')) {
            item.remove();
        }
    });
}
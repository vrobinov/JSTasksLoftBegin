// #2 Модальное окно
// На странице создан произвольный контент и кнопка вызова модального окна.По нажатию нужно отобразить оверлей(блок с затемнением) и модальное окно по середине экрана.Разметка внутри оверлея должа быть создана при помощи javaScript.Закрыть модальное окно можно нажатием на кнопку закрыть либо по клику вне области модального окна.

const openButton = document.querySelector('#openOverlay');
const body = document.body;
const succesModal = createModal('The message has been sent');

openButton.addEventListener('click', e => {
    body.appendChild(succesModal);
});

function createModal(content) {
    const overlayElement = document.createElement('div');
    overlayElement.classList.add('overlay');

    overlayElement.addEventListener('click', e => {
        if (e.target === overlayElement) {
            closeElement.click();
        }

    })

    const containerElement = document.createElement('div');
    containerElement.classList.add('modal-container');

    const contentElement = document.createElement('div');
    contentElement.classList.add('content');

    contentElement.innerHTML = (content);

    const closeElement = document.createElement('a');
    closeElement.classList.add('close');
    closeElement.textContent = 'x';
    closeElement.href = '#';

    closeElement.addEventListener('click', e => {
        e.preventDefault();
        body.removeChild(overlayElement);
    })

    overlayElement.appendChild(containerElement);
    containerElement.appendChild(closeElement)
    containerElement.appendChild(contentElement);

    return overlayElement;
}
function selectCard(card, stringAfterCard, stringAfterSelectedCard) {
    card.classList.add('selected-card');
    card.querySelector('.card__weight').classList.add('selected-weight');
    stringAfterCard.classList.add('hide');
    stringAfterSelectedCard.classList.remove('hide');
}

function removeSelect(card, stringAfterCard, stringAfterSelectedCard) {
    card.classList.remove('selected-card');
    card.querySelector('.card__weight').classList.remove('selected-weight');
    stringAfterCard.classList.remove('hide');
    stringAfterSelectedCard.classList.add('hide');
    leaveSelectedCard(card);
}

function enterSelectedCard(card) {
    card.querySelector('.card__first-line').classList.add('hide');
    card.querySelector('.card__before-cancel').classList.remove('hide');
}

function leaveSelectedCard(card) {
    if (card.querySelector('.card__first-line').classList.contains('hide')) {
        card.querySelector('.card__first-line').classList.remove('hide');
        card.querySelector('.card__before-cancel').classList.add('hide');
    }
}

function disable(card, stringAfterCard, stringAfterCardDisabled) {
    card.querySelectorAll('p').forEach(string => {
        string.classList.add('disabled-string');
    })
    card.querySelector('.card__weight').classList.add('disabled-weight');
    stringAfterCard.classList.add('hide');
    stringAfterCardDisabled.classList.remove('hide');
}

function card() {

    const cards = document.querySelectorAll('.element__card');
    const stringsAfterCard = document.querySelectorAll('.element__after-card');
    const stringsAfterSelectedCard = document.querySelectorAll('.element__after-selected-card');
    const stringsAfterCardDisabled = document.querySelectorAll('.element__after-card-disabled');

    cards.forEach((card, index) => {
        if (!card.classList.contains('disabled')) {
            card.addEventListener('click', () => {
                if (card.classList.contains('selected-card')) {
                    removeSelect(card, stringsAfterCard[index], stringsAfterSelectedCard[index]);
                } else {
                    selectCard(card, stringsAfterCard[index], stringsAfterSelectedCard[index]);
                }
            });
            card.addEventListener('mouseenter', () => {
                if(card.classList.contains('selected-card')) {
                    enterSelectedCard(card);
                }
            });
            card.addEventListener('mouseleave', () => {
                if(card.classList.contains('selected-card')) {
                    leaveSelectedCard(card);
                }
            });
        } else {
            disable(card, stringsAfterCard[index], stringsAfterCardDisabled[index]);
        }
    });

    stringsAfterCard.forEach((string, index) => {
        string.querySelector('span').addEventListener('click', () => {
            selectCard(cards[index], string, stringsAfterSelectedCard[index]);
        });
    })
}

export {card};
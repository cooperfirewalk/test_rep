const userEmotions = [
    'smile',
    'crying',
];

const emojiContainer = document.querySelector('.emojis')
const emojiList = emojiContainer.querySelectorAll('.emoji');

//   emojiList.forEach((emojiListItem) => {
//     const isNecessary = userEmotions.some(
//       (userEmotion) => emojiListItem.classList.contains
//       ('emoji--' + userEmotion),
//     );

//     if (!isNecessary) {
//       emojiListItem.remove();
//     }
//   });

// emojiList.forEach((emojiListItem) => {
//     isNecessary = 0;
//     userEmotions.forEach(
//         (userEmotion) => isNecessary += emojiListItem.classList.contains
//             ('emoji--' + userEmotion)
//     );
//     if (!isNecessary) {
//         emojiListItem.remove();
//     }
// });

emojiList.forEach((emojiListItem) => {
    let classFull = emojiListItem.classList[1];
    let classShort = classFull.substring(classFull.indexOf('--')+2)
    let isNecessary = userEmotions.includes(classShort)
    if (!isNecessary) {
        emojiListItem.remove();
    }
});

emojiContainer.dataset.x = 5;


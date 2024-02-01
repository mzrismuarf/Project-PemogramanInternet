const folderText = document.getElementById('folder-text');
const fileList = document.getElementById('file-list');

const files = [
    { name: 'contohDo.php', link: 'contohDo.php' },
    { name: 'contohDoWhile.php', link: 'contohDoWhile.php' },
    { name: 'contohFor.php', link: 'contohFor.php' },
    { name: 'contohFor2.php', link: 'contohFor2.php' },
    { name: 'contohForeach.php', link: 'contohForeach.php' }
];



function typeText(element, text, delay = 100) {
    return new Promise((resolve) => {
        let index = 0;

        function type() {
            element.textContent += text[index++];
            if (index < text.length) {
                setTimeout(type, delay);
            } else {
                resolve();
            }
        }

        type();
    });
}

async function displayFiles() {
    for (const file of files) {
        const fileLink = document.createElement('a');
        fileLink.href = file.link;
        fileLink.textContent = file.name;
        fileList.appendChild(fileLink);
        fileList.appendChild(document.createElement('br'));

        await new Promise((resolve) => setTimeout(resolve, 500)); // Delay before typing the next file
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    await typeText(folderText, 'ls');
    await displayFiles();
});

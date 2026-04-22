const board = document.getElementById('board');
const cardTemplate = document.getElementById('cardTemplate');
const draggedCardLabel = document.getElementById('draggedCardLabel');
const draggedTargetLabel = document.getElementById('draggedTargetLabel');
const seedBtn = document.getElementById('seedBtn');
const clearBtn = document.getElementById('clearBtn');

const seedData = {
    todo: [
        { title: "Design the Button", description: "Create columns, counts and polished space" },
        { title: "Design the Textarea", description: "Create columns, counts and polished space" },
        { title: "Design the Input box", description: "Create columns, counts and polished space" }
    ],
    doing: [
        { title: "Design the Button", description: "Create columns, counts and polished space" },
        { title: "Design the Textarea", description: "Create columns, counts and polished space" }
    ],
    review: [
        { title: "Design the Button", description: "Create columns, counts and polished space" }
    ],
    done: [
        { title: "Design the Button", description: "Create columns, counts and polished space" }
    ]
}

function resetLabels() {
    draggedCardLabel.textContent = "None";
    draggedTargetLabel.textContent = "None";
}

function uniqueId() {
    return 'card-' + Math.random().toString(36).slice(2, 9);
}

function createArticle(title, description) {
    const fragment = cardTemplate.content.cloneNode(true);
    const article = fragment.querySelector('.card');
    const id = uniqueId();

    article.dataset.cardId = id;

    article.querySelector('.card-title').textContent = title;
    article.querySelector('.card-body').textContent = description;
    article.querySelector('.card-id').textContent = id;

    return article;
}


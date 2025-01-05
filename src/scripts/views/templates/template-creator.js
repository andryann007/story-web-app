const createStoryItemTemplate = (story) => `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 g-3 m-3">
        <story-item 
            id="${story.id}"
            name="${story.name}"
            description="${story.description}"
            photo-url="${story.photoUrl}"
            created-at="${story.createdAt}">
        </story-item>
    </div>
`;

export { createStoryItemTemplate };

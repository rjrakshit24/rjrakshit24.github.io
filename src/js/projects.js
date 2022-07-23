function projectCard(projectTitle, projectDescription, projectTopics, projectLanguage){
    const cardParent = document.createElement('div');
    cardParent.className = 'col-12 my-2';

    const card = document.createElement('div');
    card.className = 'card project-card';
    
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title text-primary';
    var span = document.createElement('span');
    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-book-bookmark me-2';
    span.appendChild(icon);
    cardTitle.appendChild(span);
    span = document.createElement('span');
    span.className = 'fw-semibold';
    span.appendChild(document.createTextNode(projectTitle));
    cardTitle.appendChild(span);
    cardBody.appendChild(cardTitle);

    const cardDescription = document.createElement('p');
    cardDescription.className = 'card-text';
    cardDescription.appendChild(document.createTextNode(projectDescription));
    cardBody.appendChild(cardDescription);

    const cardBadges = document.createElement('div');
    projectTopics.forEach(element => {
        
        if(element == 'live'){return;}
        var spanBadge = document.createElement('span');
        spanBadge.className = 'badge rounded-pill text-bg-success opacity-75 me-1';
        spanBadge.appendChild(document.createTextNode(element));
        cardBadges.appendChild(spanBadge);
    });
    cardBody.appendChild(cardBadges);

    const cardLanguage = document.createElement('div');
    cardLanguage.className = 'my-1';
    span = document.createElement('span');
    span.className = 'badge rounded-pill text-bg-primary opacity-75';
    span.appendChild(document.createTextNode(projectLanguage));
    cardLanguage.appendChild(span);
    cardBody.appendChild(cardLanguage);

    card.appendChild(cardBody);
    cardParent.appendChild(card);
    return cardParent;
}
$.ajax({
    method: 'GET',
    url: "https://api.github.com/users/rjrakshit24/repos",
    dataType: "json",
    mimeType: "application/json",
    success: function(data) {
        const projectList = $('#projectList');
        console.log(projectList);
        $(projectList).empty();
        console.log($(projectList))
        data.filter(element => element.topics.includes('live')).forEach(element => {$(projectList).append(projectCard(element.name, element.description, element.topics, element.language));});
        console.log($(projectList))
        //console.log(projectCard(data[0].name, data[0].description, data[0].topics, data[0].language));
    },
    error: function(data) {}   // error handler,
})

{/* <div class="card project-card">
    <div class="card-body">
        <h5 class="card-title text-primary"><span><i class="fa-solid fa-book-bookmark me-2"></i></span><span class="fw-semibold">authd</span></h5>
        <p class="card-text">Authenticated Service is a password protected network service developed with defence against DOS, password brute-force, Slowloris attacks along with client concurrency and invalid requests identification.</p>
        <div>
            <span class="badge rounded-pill text-bg-success opacity-75">cybersecurity</span>
            <span class="badge rounded-pill text-bg-success opacity-75">protobuf3</span>
            <span class="badge rounded-pill text-bg-success opacity-75">network-security</span>
        </div>
        <div class="my-1">
            <span class="badge rounded-pill text-bg-primary opacity-75">Python</span>
            <!-- <span class="fw-semibold text-secondary" style="font-size: 0.75rem;">Last Updated</span> -->
        </div>
    </div>
</div> */}
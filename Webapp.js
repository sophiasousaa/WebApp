// Data
const members = [
    {
        name: "Harry Styles",
        role: "Vocal Principal",
        description: "Conhecido por sua voz distintiva e presença carismática no palco",
        image: "🎤"
    },
    {
        name: "Niall Horan", 
        role: "Guitarra & Vocal",
        description: "Músico irlandês trazendo habilidades de guitarra e harmonias",
        image: "🎸"
    },
    {
        name: "Louis Tomlinson",
        role: "Vocal",
        description: "Vocal forte e contribuições para composição de músicas",
        image: "🎵"
    },
    {
        name: "Liam Payne",
        role: "Vocal",
        description: "Vocal versátil e habilidades de beatbox",
        image: "🎶"
    },
    {
        name: "Zayn Malik",
        role: "Vocal (2010-2015)",
        description: "Vocal agudo e influência R&B durante seu tempo com a banda",
        image: "⭐"
    }
];

const albums = [
    {
        title: "Up All Night",
        year: "2011",
        description: "Seu álbum de estreia que os lançou ao estrelato internacional",
        songs: ["What Makes You Beautiful", "Gotta Be You", "One Thing"],
        color: "linear-gradient(135deg, #3b82f6, #8b5cf6)"
    },
    {
        title: "Take Me Home", 
        year: "2012",
        description: "Segundo álbum de estúdio com um som mais maduro",
        songs: ["Live While We're Young", "Little Things", "Kiss You"],
        color: "linear-gradient(135deg, #8b5cf6, #ec4899)"
    },
    {
        title: "Midnight Memories",
        year: "2013", 
        description: "Terceiro álbum com influência rock mostrando sua evolução",
        songs: ["Best Song Ever", "Story of My Life", "Diana"],
        color: "linear-gradient(135deg, #6366f1, #3b82f6)"
    },
    {
        title: "Four",
        year: "2014",
        description: "Quarto álbum com composições mais profundas e temas",
        songs: ["Steal My Girl", "Night Changes", "18"],
        color: "linear-gradient(135deg, #14b8a6, #10b981)"
    },
    {
        title: "Made in the A.M.",
        year: "2015",
        description: "Álbum final como grupo, mostrando sua maturidade artística",
        songs: ["Drag Me Down", "Perfect", "History"],
        color: "linear-gradient(135deg, #f97316, #ef4444)"
    }
];

// Utility Functions
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// DOM Manipulation Functions
function loadMembers() {
    const membersGrid = document.getElementById('membersGrid');
    
    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.className = 'member-card';
        memberCard.innerHTML = `
            <span class="member-emoji">${member.image}</span>
            <h3 class="member-name">${member.name}</h3>
            <p class="member-role">${member.role}</p>
            <p class="member-description">${member.description}</p>
        `;
        membersGrid.appendChild(memberCard);
    });
}

function loadAlbums() {
    const albumsGrid = document.getElementById('albumsGrid');
    
    albums.forEach(album => {
        const albumCard = document.createElement('div');
        albumCard.className = 'album-card';
        albumCard.innerHTML = `
            <div class="album-color" style="background: ${album.color}"></div>
            <div class="album-content">
                <h3 class="album-title">${album.title}</h3>
                <span class="album-year">${album.year}</span>
                <p class="album-description">${album.description}</p>
                <div class="album-tracks">
                    <h4>Faixas em Destaque:</h4>
                    ${album.songs.map(song => `
                        <div class="track-item">
                            <span class="track-dot"></span>
                            ${song}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        albumsGrid.appendChild(albumCard);
    });
}

// Search Functionality
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    function performSearch() {
        const query = searchInput.value.trim().toLowerCase();
        if (query === '') {
            showModal("Nenhum resultado encontrado.", "Por favor, digite um nome de cantor ou um álbum para pesquisar.");
            return;
        }

        const foundMember = members.find(member => member.name.toLowerCase().includes(query));
        const foundAlbum = albums.find(album => album.title.toLowerCase().includes(query));

        if (foundMember) {
            const memberAlbums = albums.map(album => album.title).join(", ");
            const content = `
                <h3>Detalhes do Cantor: ${foundMember.name}</h3>
                <p><strong>Função:</strong> ${foundMember.role}</p>
                <p><strong>Descrição:</strong> ${foundMember.description}</p>
                <p><strong>Participação em Álbuns:</strong> ${memberAlbums}</p>
            `;
            showModal("Resultado da Pesquisa", content);
        } else if (foundAlbum) {
            const albumSongs = foundAlbum.songs.map(song => `- ${song}`).join("<br>");
            const content = `
                <h3>Detalhes do Álbum: ${foundAlbum.title}</h3>
                <p><strong>Ano de Lançamento:</strong> ${foundAlbum.year}</p>
                <p><strong>Descrição:</strong> ${foundAlbum.description}</p>
                <p><strong>Faixas:</strong><br>${albumSongs}</p>
            `;
            showModal("Resultado da Pesquisa", content);
        } else {
            showModal("Nenhum Resultado", `Não foram encontrados resultados para "${query}".`);
        }
    }
    
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

// Modal Functions
function showModal(title, content) {
    const modal = document.getElementById('searchModal');
    const modalContentDiv = document.getElementById('modalContent');
    
    modalContentDiv.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
    `;
    modal.style.display = 'flex';
}

function setupModal() {
    const modal = document.getElementById('searchModal');
    const closeBtn = document.querySelector('.close-btn');

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Initialize App
function initApp() {
    loadMembers();
    loadAlbums();
    setupSearch();
    setupModal();
}

document.addEventListener('DOMContentLoaded', initApp);

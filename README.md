<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Músicas do One Direction</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary-color: #7b1fa2; /* Tom de roxo */
            --secondary-color: #f3e5f5; /* Tom de lilás claro */
            --card-bg: #fff;
            --font-family: 'Poppins', sans-serif;
        }

        body {
            font-family: var(--font-family);
            margin: 0;
            padding: 0;
            background: var(--secondary-color);
            color: #333;
        }

        .container {
            max-width: 1200px;
            margin: auto;
            padding: 20px;
        }

        header {
            text-align: center;
            padding: 40px 0;
        }

        header h1 {
            color: var(--primary-color);
            font-size: 2.5em;
            font-weight: 700;
        }

        .search-bar {
            display: flex;
            justify-content: center;
            margin: 20px 0;
        }

        .search-bar input {
            width: 80%;
            max-width: 400px;
            padding: 12px 15px;
            border: 2px solid var(--primary-color);
            border-radius: 30px;
            font-size: 1em;
            outline: none;
            transition: border-color 0.3s;
        }

        .search-bar input:focus {
            border-color: #9c27b0;
        }

        .music-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }

        .music-card {
            background: var(--card-bg);
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s, box-shadow 0.3s;
            text-align: center;
            position: relative;
            cursor: pointer; /* Adicionado para indicar que o card é clicável */
        }

        .music-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
        }

        .music-card img {
            width: 100%;
            height: 250px;
            object-fit: cover;
            pointer-events: none; /* Impede que a imagem interfira no evento de clique do card */
        }

        .music-card-info {
            padding: 15px;
            pointer-events: none;
        }

        .music-card-info h3 {
            margin: 0 0 5px;
            color: var(--primary-color);
        }

        .music-card-info p {
            margin: 0;
            font-size: 0.9em;
            color: #777;
        }

        .details-btn {
            background-color: var(--primary-color);
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            margin-top: 10px;
            cursor: pointer;
            transition: background-color 0.3s;
            pointer-events: all; /* Garante que o botão seja clicável */
        }

        .details-btn:hover {
            background-color: #9c27b0;
        }
        
        .remove-btn {
            position: absolute;
            top: 10px;
            right: 10px;
            background: rgba(211, 47, 47, 0.8);
            border: none;
            color: white;
            font-size: 1.2em;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            cursor: pointer;
            transition: background-color 0.3s;
            line-height: 1;
        }

        .remove-btn:hover {
            background: #d32f2f;
        }

        .modal {
            display: none;
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.6);
            align-items: center;
            justify-content: center;
            animation: fadeIn 0.3s forwards;
        }

        .modal-content {
            background-color: var(--card-bg);
            padding: 30px;
            border-radius: 10px;
            width: 90%;
            max-width: 900px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
            text-align: left;
            position: relative;
            animation: slideIn 0.5s forwards;
            display: flex;
            flex-direction: row;
            gap: 30px;
        }

        .modal-image-container {
            flex: 1;
            text-align: center;
        }

        .modal-image-container img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .modal-info-container {
            flex: 2;
        }
        
        .modal-info-container h3 {
            margin-top: 0;
            color: var(--primary-color);
        }

        .close-btn {
            position: absolute;
            top: 15px;
            right: 25px;
            color: #aaa;
            font-size: 2em;
            font-weight: bold;
            cursor: pointer;
            transition: color 0.3s;
        }

        .close-btn:hover {
            color: #333;
        }

        .no-results {
            text-align: center;
            color: #888;
            margin-top: 50px;
        }

        .favorites-section {
            margin-top: 40px;
            text-align: center;
        }

        .favorites-list {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
            margin-top: 20px;
        }
        
        .favorite-card {
            width: 150px;
            background: var(--card-bg);
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            position: relative;
            text-align: center;
            transition: transform 0.3s, box-shadow 0.3s;
            cursor: pointer; /* Adicionado para indicar que o card é clicável */
        }

        .favorite-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }
        
        .favorite-card img {
            width: 100%;
            height: 150px;
            object-fit: cover;
            pointer-events: none;
        }
        
        .favorite-card-info {
            padding: 10px;
            pointer-events: none;
        }

        .favorite-card-info h3 {
            font-size: 1em;
            margin: 0;
            color: var(--primary-color);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .favorite-card-info p {
            font-size: 0.8em;
            margin: 0;
            color: #777;
        }

        .favorite-card .remove-btn {
            top: 5px;
            right: 5px;
            width: 25px;
            height: 25px;
            font-size: 1em;
            pointer-events: all;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes slideIn {
            from { transform: translateY(-50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        
        @media (max-width: 768px) {
            .modal-content {
                flex-direction: column;
                max-width: 90%;
                text-align: center;
            }
            .music-card img {
                height: 200px;
            }
            .favorite-card {
                width: 120px;
            }
        }
    </style>
</head>
<body>

    <div class="container">
        <header>
            <h1>Explore as Músicas do One Direction</h1>
            <div class="search-bar">
                <input type="text" id="musicInput" placeholder="Buscar música...">
            </div>
        </header>

        <section id="musicGrid" class="music-grid"></section>
        <div id="noResults" class="no-results" style="display:none;">
            <p>Nenhuma música encontrada. Tente novamente.</p>
        </div>

        <section class="favorites-section">
            <h2>Favoritas</h2>
            <div id="favoritesList" class="favorites-list"></div>
        </section>
    </div>

    <div id="musicModal" class="modal">
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <div class="modal-image-container">
                <img id="modalImage" src="" alt="">
            </div>
            <div class="modal-info-container">
                <h3 id="modalTitle"></h3>
                <p><strong>Álbum:</strong> <span id="modalAlbum"></span></p>
                <p><strong>Ano:</strong> <span id="modalYear"></span></p>
                <p id="modalDescription"></p>
                <button id="favoriteBtn" class="details-btn">Adicionar às Favoritas</button>
            </div>
        </div>
    </div>

    <script>
        const oneDirectionSongs = [
            {
                title: "What Makes You Beautiful",
                image: "https://www.usatoday.com/gcdn/-mm-/1a0e16bacab4e395de086715678a62d8062393fe/c=0-78-768-511/local/-/media/USATODAY/USATODAY/2014/03/26//1395853638017-7.jpg?width=1200&disable=upscale&format=pjpg&auto=webp",
                album: "Up All Night",
                year: "2011",
                description: "O single de estreia que catapultou a banda para a fama mundial e se tornou um hino para os fãs."
            },
            {
                title: "Live While We're Young",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_JISeNPdh83tPEnS6qkBFYFKH2bdCpH6now&s",
                album: "Take Me Home",
                year: "2012",
                description: "Uma música pop vibrante e cheia de energia que celebra a juventude e a vida sem preocupações."
            },
            {
                title: "Story of My Life",
                image: "https://assets.papelpop.com/wp-content/uploads/2020/07/WhatsApp-Image-2020-07-25-at-16.10.34.jpeg",
                album: "Midnight Memories",
                year: "2013",
                description: "Uma balada acústica com uma letra emocionante sobre a vida e as experiências que formam uma pessoa."
            },
            {
                title: "Night Changes",
                image: "https://imgix.bustle.com/lovelace/uploads/114/522d5390-53d0-0132-0b3f-0eae5eefacd9.png?w=414&h=248&fit=crop&crop=faces&dpr=2",
                album: "Four",
                year: "2014",
                description: "Uma canção suave e romântica que reflete sobre o crescimento e a mudança em um relacionamento."
            },
            {
                title: "Drag Me Down",
                image: "https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2015/08/one-direction.jpg",
                album: "Made in the A.M.",
                year: "2015",
                description: "O primeiro single lançado após a saída de Zayn Malik, com uma sonoridade pop-rock mais madura."
            },
            {
                title: "Perfect",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1UdBFv-S_Fv-JXNBpkFNL5Vr1pqmW6xaOUg&s",
                album: "Made in the A.M.",
                year: "2015",
                description: "Uma canção de amor divertida e cativante, conhecida por sua letra que muitos consideram uma resposta a Taylor Swift."
            },
            {
                title: "Little Things",
                image: "https://capricho.abril.com.br/wp-content/uploads/2016/07/1d-clipe-little-things.jpg?quality=70&strip=all",
                album: "Take Me Home",
                year: "2012",
                description: "Uma balada suave e acústica que se tornou um sucesso global por sua mensagem de autoaceitação e amor."
            },
            {
                title: "Best Song Ever",
                image: "https://www.pluggedin.com/wp-content/uploads/2020/01/best-song-ever-one-direction-review-image.jpg",
                album: "Midnight Memories",
                year: "2013",
                description: "Uma faixa pop-rock energética e divertida que se tornou um dos maiores sucessos da banda e o tema do filme 'This Is Us'."
            },
            {
                title: "One Thing",
                image: "https://feedlimmy.wordpress.com/wp-content/uploads/2012/01/one-direction-one-thing-music-video-harry-styles.png",
                album: "Up All Night",
                year: "2012",
                description: "Uma canção otimista e contagiante, conhecida por seu refrão viciante e clipe icônico em Londres."
            },
            {
                title: "Steal My Girl",
                image: "https://s2.glbimg.com/3HBH9ktXQhu76yfDm26JR41LNX8=/e.glbimg.com/og/ed/f/original/2014/10/24/one.jpg" ,
                album: "Four",
                year: "2014",
                description: "Um hino com sonoridade de rock de estádio que celebra o amor e a devoção a uma pessoa especial."
            }
        ];

        function renderMusic(songs) {
            const musicGrid = document.getElementById('musicGrid');
            musicGrid.innerHTML = '';
            
            if (songs.length === 0) {
                document.getElementById('noResults').style.display = 'block';
            } else {
                document.getElementById('noResults').style.display = 'none';
                songs.forEach(song => {
                    const card = document.createElement('div');
                    card.className = 'music-card';
                    card.innerHTML = `
                        <img src="${song.image}" alt="${song.title}">
                        <div class="music-card-info">
                            <h3>${song.title}</h3>
                            <p>${song.album}</p>
                            <button class="details-btn">Ver Detalhes</button>
                        </div>
                    `;
                    // Adiciona o evento de clique ao card completo
                    card.addEventListener('click', () => showMusicDetails(song));
                    musicGrid.appendChild(card);
                });
            }
        }

        function showMusicDetails(song) {
            const modal = document.getElementById('musicModal');
            document.getElementById('modalImage').src = song.image;
            document.getElementById('modalImage').alt = song.title;
            document.getElementById('modalTitle').textContent = song.title;
            document.getElementById('modalAlbum').textContent = song.album;
            document.getElementById('modalYear').textContent = song.year;
            document.getElementById('modalDescription').textContent = song.description;

            const favoriteBtn = document.getElementById('favoriteBtn');
            favoriteBtn.onclick = () => saveFavorite(song);
            
            modal.style.display = 'flex';
        }

        function setupModal() {
            const modal = document.getElementById('musicModal');
            const closeBtn = document.querySelector('.close-btn');

            closeBtn.onclick = () => {
                modal.style.display = 'none';
            };

            window.onclick = (event) => {
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            };
        }

        function saveFavorite(song) {
            let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
            if (favorites.find(fav => fav.title === song.title)) {
                alert("Esta música já está nas favoritas!");
                return;
            }

            favorites.push(song);
            localStorage.setItem("favorites", JSON.stringify(favorites));
            loadFavorites();
            alert("Música adicionada às favoritas!");
        }

        function loadFavorites() {
            let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
            const favoritesList = document.getElementById('favoritesList');
            favoritesList.innerHTML = '';

            if (favorites.length === 0) {
                const noFavs = document.createElement('p');
                noFavs.textContent = "Nenhuma música favorita ainda.";
                noFavs.style.textAlign = "center";
                noFavs.style.color = "#888";
                favoritesList.appendChild(noFavs);
                return;
            }

            favorites.forEach((fav, index) => {
                const card = document.createElement('div');
                card.className = 'favorite-card';
                card.innerHTML = `
                    <img src="${fav.image}" alt="${fav.title}">
                    <div class="favorite-card-info">
                        <h3>${fav.title}</h3>
                        <p>${fav.album}</p>
                    </div>
                    <button class="remove-btn" onclick="removeFavorite(${index})">&times;</button>
                `;
                // Adiciona o evento de clique ao card de favorito
                card.addEventListener('click', () => showMusicDetails(fav));
                favoritesList.appendChild(card);
            });
        }

        function removeFavorite(index) {
            let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
            favorites.splice(index, 1);
            localStorage.setItem("favorites", JSON.stringify(favorites));
            loadFavorites();
        }

        function setupSearch() {
            const searchInput = document.getElementById('musicInput');
            searchInput.addEventListener('input', () => {
                const query = searchInput.value.trim().toLowerCase();
                const filteredSongs = oneDirectionSongs.filter(song =>
                    song.title.toLowerCase().includes(query) || song.album.toLowerCase().includes(query)
                );
                renderMusic(filteredSongs);
            });
        }

        window.onload = () => {
            renderMusic(oneDirectionSongs);
            setupModal();
            loadFavorites();
            setupSearch();
        };
    </script>
</body>
</html>

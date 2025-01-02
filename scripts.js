function createHearts() {
    const container = document.querySelector('.container');
    const numberOfHearts = 40; // Increased number of hearts
    const duration = 7000;
    const colors = ['#ff69b4', '#ff1493', '#ff0000', '#ff69b4', '#dc143c', '#e91e63', '#ff006f'];
    const symbols = ['❤️', '💝', '💖', '💕', '💗'];

    for (let i = 0; i < numberOfHearts; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';

            // Randomly choose between symbol and icon
            if (Math.random() > 0.7) {
                heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
            } else {
                heart.innerHTML = '<i class="fas fa-heart"></i>';
                heart.style.color = colors[Math.floor(Math.random() * colors.length)];
            }

            // Random positioning and styling
            heart.style.left = Math.random() * 100 + '%';
            heart.style.fontSize = `${Math.random() * (35 - 20) + 20}px`;
            heart.style.opacity = Math.random() * (1 - 0.7) + 0.7;
            heart.style.filter = `blur(${Math.random() * 0.5}px)`;

            // Enhanced animations
            const rotateAngle = Math.random() * 360;
            const floatDistance = 50 + Math.random() * 100;
            heart.style.animation = `
                floatUpAndFade ${duration/1000}s ease-out forwards,
                heartBeat 1.5s ease-in-out infinite,
                rotate ${Math.random() * 4 + 2}s linear infinite
            `;
            heart.style.transform = `rotate(${rotateAngle}deg) translateY(${floatDistance}px)`;

            container.appendChild(heart);
            setTimeout(() => heart.remove(), duration);
        }, i * 50); // Reduced delay between hearts
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('botao');
    if (!botao) {
        console.error('Elemento botao não encontrado');
        return;
    }
    const fraseElement = document.getElementById('frase');
    if (!fraseElement) {
        console.error('Elemento frase não encontrado');
        return;
    }

    const playPauseBtn = document.getElementById('playPauseBtn');
    const audioPlayer = document.getElementById('audioPlayer')

    const playIcon = document.getElementById('playIcon');
    const pauseIcon = document.getElementById('pauseIcon');

    let isMusicPlaying = false;
    let audio = true;

    // Event Listeners with improved feedback
    playPauseBtn.addEventListener('click', () => {
        if (isMusicPlaying) {
            audioPlayer.pause();
            pauseIcon.classList.toggle('hidden');
            playIcon.classList.toggle('hidden');
            showToast('Música pausada');
        } else {
            audioPlayer.play().catch(() => showToast('Erro ao reproduzir música'));
            playIcon.classList.toggle('hidden');
            pauseIcon.classList.toggle('hidden');
            showToast('Música iniciada');
        }
        isMusicPlaying = !isMusicPlaying;
    });

    const frases = [
        "Você é uma pessoa incrível e merece todo o amor do mundo.",
        "Sua luz brilha intensamente e ilumina a vida de todos ao seu redor.",
        "Você é amada exatamente como é, sem precisar mudar nada.",
        "Sua presença traz alegria e felicidade para aqueles que te cercam.",
        "Você é forte, corajosa e capaz de conquistar qualquer coisa.",
        "Seu sorriso tem o poder de transformar o dia de alguém.",
        "Você é única e especial, e isso é o que te torna maravilhosa.",
        "Você é digna de amor e respeito em todas as suas formas.",
        "Sua bondade e generosidade são verdadeiramente inspiradoras.",
        "Você é uma fonte de amor e luz neste mundo.",
        "Você é perfeita do jeito que é, com todas as suas imperfeições.",
        "Sua força interior é admirável e te leva longe.",

        "Você merece ser feliz e realizada em todos os aspectos da sua vida.",
        "Sua beleza vai além da aparência; ela vem de dentro.",
        "Você é uma pessoa que faz a diferença na vida dos outros.",
        "Você é digna de todos os sonhos que deseja realizar.",
        "Sua autenticidade é uma das suas maiores qualidades.",
        "Você é uma inspiração para todos que têm o privilégio de te conhecer.",
        "Você é amada por quem você é, não pelo que faz.",
        "Sua risada é música para os meus ouvidos.",
        "Você é uma guerreira e sempre encontrará força dentro de si.",
        "Você é capaz de realizar tudo o que deseja.",
        "Você é uma luz na vida de quem te conhece.",
        "Você é digna de amor e felicidade todos os dias.",
        "Você é uma pessoa maravilhosa e merece ser celebrada.",

        "Você é uma fonte de inspiração e motivação.",
        "Você é linda, por dentro e por fora.",
        "Você é uma pessoa que traz paz e amor ao mundo.",
        "Você é uma artista da vida, criando beleza em tudo o que faz.",
        "Você é uma flor que desabrocha em meio ao caos.",
        "Você é uma estrela brilhante no céu da vida.",
        "Você é uma pessoa que merece ser ouvida e valorizada.",
        "Você é uma força da natureza, cheia de vida e energia.",

        "Você é uma pessoa que irradia amor e bondade.",
        "Você é uma inspiração diária para todos ao seu redor.",
        "Você tem um coração de ouro e uma alma pura.",
        "Você é uma pessoa que faz o mundo um lugar melhor.",
        "Você é uma joia rara e preciosa.",
        "Você é uma pessoa que merece todo o sucesso do mundo.",
        "Você é uma pessoa que espalha alegria por onde passa.",
        "Você é uma pessoa que merece ser feliz todos os dias.",
        "Você é uma pessoa que ilumina a vida de todos ao seu redor.",
        "Você é uma pessoa que merece todo o amor e carinho.",
        "Você é uma pessoa que faz a diferença no mundo.",
        "Você é uma pessoa que merece ser amada e respeitada.",
        "Você é uma pessoa que merece ser feliz e realizada.",
        "Você é uma pessoa que merece todo o sucesso e felicidade.",
        "Você é uma pessoa que merece ser celebrada todos os dias.",
        "Você é uma pessoa que merece todo o amor e carinho do mundo.",
        "Você é uma pessoa que traz esperança aos corações.",
        "Sua determinação é um exemplo para todos.",
        "Você tem o poder de transformar sonhos em realidade.",
        "Sua gentileza faz do mundo um lugar mais bonito.",
        "Você é uma pessoa que inspira confiança e amor.",
        "Sua força interior é maior do que qualquer desafio.",
        "Você tem um dom especial de fazer as pessoas sorrirem.",
        "Sua presença é um presente para todos que te conhecem.",
        "Você é uma fonte inesgotável de amor e compaixão.",
        "Sua sabedoria toca os corações de todos ao seu redor.",
        "Você é uma pessoa que merece todas as bênçãos da vida.",
        "Sua energia positiva é contagiante e inspiradora.",
        "Você tem o poder de realizar grandes transformações.",
        "Sua dedicação e amor são admiráveis.",
        "Você é um exemplo de perseverança e coragem.",
        "Seu amor próprio inspira outras pessoas.",
        "Você é capaz de superar qualquer obstáculo.",
        "Sua presença ilumina até os dias mais escuros.",
        "Você tem o poder de realizar seus maiores sonhos.",
        "Sua força de vontade move montanhas.",
        "Você é uma fonte inesgotável de esperança.",
        "Sua essência é única e especial.",
        "Você torna o mundo mais bonito só por existir.",
        "Sua coragem inspira mudanças positivas.",
        "Você é mais forte do que imagina.",
        "Seu potencial é infinito e inspirador.",
        "Você é amada além das palavras.",
        "Sua jornada inspira outros a seguirem em frente.",
        "Você é um milagre da vida.",
        "Seu amor é um presente para o mundo.",
        "Você é uma fonte de alegria e esperança.",
        "Sua força interior é admirável.",
        "Você é uma bênção na vida de muitos.",
        "Sua alma é pura e seu coração é gentil.",
        "Você é uma pessoa extraordinária.",
        "Sua presença traz paz e harmonia.",
        "Você é um exemplo de superação.",
        "Sua beleza interior é radiante.",
        "Você é um anjo na Terra.",
        "Sua bondade não tem limites.",
        "Você é uma inspiração diária.",
        "Seu sorriso ilumina o mundo.",
        "Você é uma guerreira invencível.",
        "Sua força move montanhas.",
        "Cada dia com você é uma nova aventura de amor.",
        "Seu otimismo transforma vidas ao seu redor.",
        "Você é um raio de sol em dias nublados.",
        "Sua determinação é admirável e contagiante.",
        "Você é um presente divino neste mundo.",
        "Sua gentileza toca corações silenciosamente.",
        "Você tem o poder de tornar o impossível possível.",
        "Sua resiliência é uma inspiração para todos.",
        "Você é uma fonte infinita de amor e carinho.",
        "Sua presença torna tudo mais especial.",
        "Você é uma bênção na vida de quem te conhece.",
        "Sua força interior é inquebrável.",
        "Você é uma estrela que brilha eternamente.",
        "Sua compaixão transforma vidas.",
        "Você é uma pessoa extraordinariamente especial.",
        "Sua alma é um jardim de virtudes.",
        "Você é uma fonte de inspiração constante.",
        "Sua alegria é contagiante e verdadeira.",
        "Você é uma pessoa genuinamente maravilhosa.",
        "Sua força de espírito é admirável.",
        "Você é um exemplo de perseverança.",
        "Sua dedicação inspira mudanças positivas.",
        "Você é uma pessoa verdadeiramente única.",
        "Sua presença é um presente diário.",
        "Você é capaz de realizar milagres.",
        "Sua bondade transforma o mundo.",
        "Você é uma fonte de amor infinito.",
        "Sua coragem inspira grandes conquistas.",
        "Você é uma pessoa extraordinariamente forte.",
        "Sua luz interior nunca se apaga.",
        "Você é uma pessoa incrivelmente talentosa.",
        "Sua força de vontade é incomparável.",
        "Você é uma bênção em forma de pessoa.",
        "Sua determinação move montanhas.",
        "Você é uma pessoa verdadeiramente especial.",
        "Sua presença é um raio de esperança.",
        "Você é capaz de grandes realizações.",
        "Sua bondade não conhece limites.",
        "Você é uma fonte inesgotável de amor.",
        "Sua coragem inspira transformações.",
        "Você é uma pessoa extraordinariamente resiliente.",
        "Sua luz brilha em qualquer escuridão.",
        "Você é uma pessoa incrivelmente especial.",
        "Sua força interior é sua maior aliada.",
        "Você é uma bênção para este mundo.",
        "Sua determinação é admirável.",
        "Você é uma pessoa verdadeiramente única.",
        "Sua presença é um presente divino.",
        "Você é capaz de superar qualquer desafio.",
        "Sua bondade transforma vidas.",
        "Você é uma fonte constante de amor.",
        "Sua coragem inspira mudanças positivas.",
        "Você é uma pessoa extraordinariamente especial.",
        "Sua luz interior é radiante.",
        "Você é uma pessoa incrivelmente forte.",
        "Sua força de vontade é inspiradora.",
        "Você é uma bênção em nossas vidas.",
        "Sua determinação é contagiante."
        , "Você ilumina cada momento com sua presença.",
        "Sua gentileza toca profundamente os corações.",
        "Você é uma fonte inesgotável de inspiração.",
        "Sua força interior é admirável e contagiante.",
        "Você traz alegria para todos ao seu redor.",
        "Sua determinação move montanhas e inspira outros.",
        "Você é única e especial em todos os sentidos.",
        "Sua compaixão transforma vidas silenciosamente.",
        "Você tem o dom de fazer outros sorrirem.",
        "Sua presença é um presente precioso.",
        "Você é uma luz que guia outros na escuridão.",
        "Sua bondade não conhece limites.",
        "Você é uma bênção na vida de muitos.",
        "Sua coragem inspira transformações positivas.",
        "Você tem uma força interior incomparável.",
        "Sua alma é pura e seu coração é generoso.",
        "Você é uma pessoa extraordinariamente especial.",
        "Sua resiliência é inspiradora.",
        "Você traz paz e harmonia onde quer que vá.",
        "Sua dedicação é admirável e motivadora.",
        "Você é capaz de realizar grandes feitos.",
        "Sua energia positiva contagia a todos.",
        "Você é uma fonte de amor incondicional.",
        "Sua sabedoria toca profundamente as pessoas.",
        "Você tem um coração de ouro.",
        "Sua perseverança é admirável.",
        "Você é uma pessoa verdadeiramente incrível.",
        "Sua força transformadora é inspiradora.",
        "Você é um presente para este mundo.",
        "Sua gentileza faz toda a diferença.",
        "Você tem um dom especial para amar.",
        "Sua presença traz conforto e paz.",
        "Você é uma pessoa extraordinariamente forte.",
        "Sua luz interior brilha intensamente.",
        "Você inspira outros a serem melhores.",
        "Sua bondade toca vidas profundamente.",
        "Você é uma fonte de inspiração constante.",
        "Sua força de vontade é admirável.",
        "Você tem um coração genuinamente bondoso.",
        "Sua presença é uma bênção diária.",
        "Você é capaz de superar qualquer obstáculo.",
        "Sua determinação é verdadeiramente inspiradora.",
        "Você traz esperança para os corações.",
        "Sua força interior é incomparável.",
        "Você é uma pessoa genuinamente especial.",
        "Sua luz nunca se apaga.",
        "Você tem um dom para fazer outros felizes.",
        "Sua presença é um raio de sol.",
        "Você é uma fonte de amor e carinho.",
        "Sua coragem inspira mudanças positivas.",
        "Você tem uma força extraordinária.",
        "Sua bondade transforma o mundo.",
        "Você é uma pessoa incrivelmente resiliente.",
        "Sua determinação move montanhas.",
        "Você é uma bênção em forma de pessoa.",
        "Sua presença traz alegria constante.",
        "Você tem um coração verdadeiramente nobre.",
        "Sua força interior é admirável.",
        "Você é uma pessoa extraordinariamente especial.",
        "Sua luz brilha em qualquer situação.",
        "Você tem um dom para amar incondicionalmente.",
        "Sua presença é um presente divino.",
        "Você é uma fonte de inspiração diária.",
        "Sua coragem transforma vidas.",
        "Você tem uma força incomparável.",
        "Sua bondade toca corações profundamente.",
        "Você é uma pessoa verdadeiramente única.",
        "Sua determinação é contagiante.",
        "Você traz esperança onde quer que vá.",
        "Sua força interior é inspiradora.",
        "Você é uma pessoa extraordinariamente amada.",
        "Sua luz interior é radiante.",
        "Você tem um coração genuinamente puro.",
        "Sua presença é uma bênção constante.",
        "Você é capaz de realizar milagres.",
        "Sua determinação é admirável.",
        "Você traz paz aos corações.",
        "Sua força é incomparável.",
        "Você é uma pessoa verdadeiramente especial.",
        "Sua luz nunca se apaga.",
        "Você tem um dom para fazer outros felizes.",
        "Sua presença é um raio de esperança.",
        "Você é uma fonte de amor infinito.",
        "Sua coragem inspira grandes conquistas.",
        "Você tem uma força extraordinária.",
        "Sua bondade transforma vidas silenciosamente.",
        "Você é uma pessoa incrivelmente resiliente.",
        "Sua determinação move montanhas.",
        "Você é uma bênção para todos.",
        "Sua presença traz alegria constante.",
        "Você tem um coração verdadeiramente nobre.",
        "Sua força interior é admirável.",
        "Você é uma pessoa extraordinariamente especial.",
        "Sua luz brilha intensamente.",
        "Você tem um dom para amar incondicionalmente.",
        "Sua presença é um presente divino.",
        "Você é uma fonte de inspiração diária.",
        "Sua coragem transforma vidas.",
        "Você tem uma força incomparável.",
        "Sua bondade toca corações profundamente.",
        "Você é uma pessoa verdadeiramente única.",
        "Sua determinação é contagiante.",
        "Você traz esperança onde quer que vá.",
    ];

    let frasesUsadas = new Set();
    let isAnimating = false;

    function getFraseAleatoria() {
        if (frasesUsadas.size === frases.length) {
            frasesUsadas.clear();
        }

        let fraseAleatoria;
        do {
            fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
        } while (frasesUsadas.has(fraseAleatoria));

        frasesUsadas.add(fraseAleatoria);
        return fraseAleatoria;
    }

    function createHearts() {
        if (isAnimating) return;
        isAnimating = true;

        const container = document.querySelector('.container');
        const numberOfHearts = 20;
        const duration = 7000;
        const colors = ['#ff69b4', '#ff1493', '#ff0000', '#ff69b4', '#dc143c'];

        for (let i = 0; i < numberOfHearts; i++) {
            setTimeout(() => {
                const heart = document.createElement('i');
                heart.className = 'fas fa-heart floating-heart';

                // Enhanced styling
                heart.style.left = Math.random() * 100 + '%';
                heart.style.color = colors[Math.floor(Math.random() * colors.length)];
                heart.style.fontSize = `${Math.random() * (35 - 20) + 20}px`;
                heart.style.filter = `blur(${Math.random()}px)`;
                heart.style.opacity = Math.random() * (1 - 0.7) + 0.7;

                // Advanced animations
                const rotateAngle = Math.random() * 360;
                const floatDistance = 50 + Math.random() * 100;
                heart.style.animation = `
                    floatUpAndFade ${duration / 1000}s cubic-bezier(0.4, 0, 0.2, 1) forwards,
                    heartBeat 1.5s ease-in-out infinite,
                    rotate ${Math.random() * 4 + 2}s linear infinite
                `;
                heart.style.transform = `rotate(${rotateAngle}deg) translateY(${floatDistance}px)`;

                container.appendChild(heart);
                setTimeout(() => heart.remove(), duration);
            }, i * 80);
        }

        setTimeout(() => isAnimating = false, duration);
    }

    function showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast animate__animated animate__fadeIn';
        toast.textContent = message;
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('animate__fadeOut');
            setTimeout(() => toast.remove(), 500);
        }, 2500);
    }

    function animateFrase(texto) {
        fraseElement.classList.add('animate__animated', 'animate__fadeOut');

        setTimeout(() => {
            fraseElement.textContent = texto;
            fraseElement.classList.remove('animate__fadeOut');
            fraseElement.classList.add('animate__fadeIn');

            setTimeout(() => {
                fraseElement.classList.remove('animate__animated', 'animate__fadeIn');
            }, 1000);
        }, 500);
    }



    document.querySelector('.copy').addEventListener('click', async () => {
        try {
            if (navigator.clipboard && window.isSecureContext) {
                // For modern browsers
                await navigator.clipboard.writeText(fraseElement.textContent);
                showToast('Mensagem copiada! 📋');
            } else {
                // Fallback for older browsers and mobile
                const textArea = document.createElement('textarea');
                textArea.value = fraseElement.textContent;
                textArea.style.position = 'fixed';
                textArea.style.opacity = '0';
                document.body.appendChild(textArea);
                textArea.select();
                try {
                    document.execCommand('copy');
                    showToast('Mensagem copiada! 📋');
                } catch (err) {
                    showToast('Erro ao copiar 😢');
                } finally {
                    document.body.removeChild(textArea);
                }
            }
        } catch (err) {
            showToast('Erro ao copiar 😢');
        }
    });

    botao.addEventListener('click', () => {
        if (isAnimating) return;

        const novaFrase = getFraseAleatoria();
        animateFrase(novaFrase);

        botao.classList.add('clicked', 'animate__animated', 'animate__pulse');
        setTimeout(() => {
            botao.classList.remove('clicked', 'animate__animated', 'animate__pulse');
        }, 500);

        createHearts();
    });

    // Initial Setup
    animateFrase('Clique no botão para gerar uma mensagem especial! ❤️');
});
//////


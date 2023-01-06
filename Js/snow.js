const createSnow = (n) => {
    const style = document.createElement('style');

    style.textContent =
        `
    body{
        position: relative
    }

    .snow{
        position: fixed;
        width: 30px;
        height: 30px;
        top: -30px;
        background-repeat: no-repeat;
        animation-name: fall;
        animation-timing-function: linear;
        pointer-events: none;
    }

    @keyframes fall{
        0%{
            transform: translateY(0)
        }
        33%{
            transform: translateY(30vh)
        }
        66%{
            transform: translateY(60vh)
        }
        100%{
            transform: translateY(100vh)
        }
    }

    `;

    document.head.append(style);

    let start = 1;
    const count = 4;

    const createSnowItem = () => {
        const snowItem = document.createElement('div');
        snowItem.classList.add('snow');

        snowItem.style.cssText = `
            left: ${Math.random() * document.documentElement.clientWidth}px;
            opacity: ${Math.random()};
            animation-duration: ${(Math.random() * n / 2) + 2}s;
            background-image: url('images/snowflake${start}.svg');
            background-size: ${Math.random() * 30}px;
        `
        start++;
        if (start === count) {
            start = 1;
        }
        document.body.append(snowItem)

        setTimeout(() => {
            snowItem.remove();
        }, 5000)
    }

    setInterval(createSnowItem, 100)
};

createSnow(10);
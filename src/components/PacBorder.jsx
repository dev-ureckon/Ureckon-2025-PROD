import { useEffect, useRef, useState } from "react";

const PacBorder = () => {
    const canvasRef = useRef(null);
    const pacmanImage = new Image();
    pacmanImage.src = "animations.gif";

    const [canvasSize, setCanvasSize] = useState({ width: 600, height: 400 });

    useEffect(() => {
        const updateCanvasSize = () => {
            const width = window.innerWidth < 768 ? window.innerWidth - 40 : 600;
            const height = window.innerWidth < 768 ? window.innerHeight * 0.6 : 400;
            setCanvasSize({ width, height });
        };

        updateCanvasSize();
        window.addEventListener("resize", updateCanvasSize);
        return () => window.removeEventListener("resize", updateCanvasSize);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const oneBlockSize = canvas.width / 15;
        const speed = oneBlockSize / 25;
        const frameWidth = 20;
        const frameCount = 8;
        let frameIndex = 0;
        let direction = "right";
        let x = 0;
        let y = 0;
        let food = [];

        function generateFood() {
            food = [];
            for (let i = 0; i < canvas.width; i += oneBlockSize) food.push({ x: i, y: 0 });
            for (let i = 0; i < canvas.height; i += oneBlockSize) food.push({ x: canvas.width - oneBlockSize, y: i });
            for (let i = canvas.width - oneBlockSize; i >= 0; i -= oneBlockSize) food.push({ x: i, y: canvas.height - oneBlockSize });
            for (let i = canvas.height - oneBlockSize; i >= 0; i -= oneBlockSize) food.push({ x: 0, y: i });
        }

        generateFood();

        function respawnFood(dot) {
            setTimeout(() => {
                food.push(dot);
            }, 2000);
        }

        function update() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw food
            ctx.fillStyle = "yellow";
            food.forEach(dot => {
                ctx.beginPath();
                ctx.arc(dot.x + oneBlockSize / 2, dot.y + oneBlockSize / 2, 5, 0, Math.PI * 2);
                ctx.fill();
            });

            // Draw Pac-Man
            ctx.save();
            ctx.translate(x + oneBlockSize / 2, y + oneBlockSize / 2);

            if (direction === "right") ctx.rotate(0);
            else if (direction === "down") ctx.rotate(Math.PI / 2);
            else if (direction === "left") ctx.rotate(Math.PI);
            else if (direction === "up") ctx.rotate(-Math.PI / 2);

            ctx.drawImage(
                pacmanImage,
                frameIndex * frameWidth,
                0,
                frameWidth,
                frameWidth,
                -oneBlockSize / 2,
                -oneBlockSize / 2,
                oneBlockSize,
                oneBlockSize
            );
            ctx.restore();

            // Movement logic
            if (direction === "right") {
                x += speed;
                if (x + oneBlockSize >= canvas.width) direction = "down";
            } else if (direction === "down") {
                y += speed;
                if (y + oneBlockSize >= canvas.height) direction = "left";
            } else if (direction === "left") {
                x -= speed;
                if (x <= 0) direction = "up";
            } else if (direction === "up") {
                y -= speed;
                if (y <= 0) direction = "right";
            }

            // Eat food logic
            food = food.filter(dot => {
                if (Math.abs(dot.x - x) < speed && Math.abs(dot.y - y) < speed) {
                    respawnFood(dot);
                    return false;
                }
                return true;
            });

            frameIndex = (frameIndex + 1) % frameCount;
            requestAnimationFrame(update);
        }

        update();
    }, [canvasSize]);

    return (
        <div className="flex justify-center items-center h-screen bg-black p-2">
            <canvas
                ref={canvasRef}
                width={canvasSize.width}
                height={canvasSize.height}
                className="border-4 border-white rounded-lg"
            ></canvas>
        </div>
    );
};

export default PacBorder;

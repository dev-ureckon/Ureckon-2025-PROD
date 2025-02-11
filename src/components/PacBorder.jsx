import { useEffect, useRef, useState } from "react";

const PacBorderWrapper = ({ children, className = "" }) => {
    const [container, setContainer] = useState(null);
    const canvasRef = useRef(null);
    const pacmanImage = new Image();
    pacmanImage.src = "animations.gif";
    const observerRef = useRef(null);

    useEffect(() => {
        if (!container) return;
        
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        
        const updateCanvasSize = () => {
            const scrollHeight = Math.max(
                container.scrollHeight,
                document.documentElement.scrollHeight,
                container.offsetHeight,
                document.documentElement.offsetHeight
            );
            canvas.width = container.offsetWidth;
            canvas.height = scrollHeight;
        };

        observerRef.current = new ResizeObserver(updateCanvasSize);
        observerRef.current.observe(container);
        
        updateCanvasSize();
        window.addEventListener("resize", updateCanvasSize);

        const oneBlockSize = 20;
        const speed = 1;
        const frameWidth = 20;
        const frameCount = 8;
        let frameIndex = 0;
        let direction = "right";
        let x = 0;
        let y = 0;
        let food = [];

        function generateFood() {
            food = [];
            const width = canvas.width;
            const height = canvas.height;
            const spacing = 25; 
            
            for (let i = 0; i < width; i += spacing) {
                food.push({ x: i, y: 0 });
            }
            
            for (let i = 0; i < height; i += spacing) {
                food.push({ x: width - oneBlockSize, y: i });
            }
            
            for (let i = width - oneBlockSize; i >= 0; i -= spacing) {
                food.push({ x: i, y: height - oneBlockSize });
            }
            
            for (let i = height - oneBlockSize; i >= 0; i -= spacing) {
                food.push({ x: 0, y: i });
            }
        }

        function respawnFood(dot) {
            setTimeout(() => food.push(dot), 4000);
        }

        function update() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "yellow";
            food.forEach(dot => {
                ctx.beginPath();
                ctx.arc(dot.x + oneBlockSize / 2, dot.y + oneBlockSize / 2, 4, 0, Math.PI * 2); 
                ctx.fill();
            });

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

            if (direction === "right") {
                x += speed;
                if (x + oneBlockSize >= canvas.width - 2) direction = "down";
            } else if (direction === "down") {
                y += speed;
                if (y + oneBlockSize >= canvas.height - 2) direction = "left";
            } else if (direction === "left") {
                x -= speed;
                if (x <= 2) direction = "up";
            } else if (direction === "up") {
                y -= speed;
                if (y <= 2) direction = "right";
            }

            food = food.filter(dot => {
                if (Math.abs(dot.x - x) < oneBlockSize/2 && Math.abs(dot.y - y) < oneBlockSize/2) {
                    respawnFood(dot);
                    return false;
                }
                return true;
            });

            frameIndex = (frameIndex + 1) % frameCount;
            requestAnimationFrame(update);
        }

        generateFood();
        update();

        return () => {
            window.removeEventListener("resize", updateCanvasSize);
            observerRef.current?.disconnect();
        };
    }, [container]);

    return (
        <div 
            ref={setContainer} 
            className={`relative h-full lg:m-8 m-2 ${className}`}
        >
            {/* Hide Pac-Man border animation on small screens */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 pointer-events-none hidden lg:block"
            />
            <div className="relative p-14 z-10">
                {children}
            </div>
        </div>
    );
};

export default PacBorderWrapper;

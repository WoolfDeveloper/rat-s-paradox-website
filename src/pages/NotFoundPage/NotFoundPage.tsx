import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from 'react';
import Matter from 'matter-js';

const NotFoundPage = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const sceneRef = useRef<HTMLDivElement>(null);
    const engineRef = useRef<Matter.Engine | null>(null);
    const requestRef = useRef<number>();

    useEffect(() => {
        if (!sceneRef.current) return;

        const { Engine, Render, World, Bodies, Mouse, MouseConstraint, Runner, Composite } = Matter;

        // Crear engine
        engineRef.current = Engine.create({
            enableSleeping: false,
            gravity: { x: 0, y: 1 }
        });

        const engine = engineRef.current;

        // Crear render
        const render = Render.create({
            element: sceneRef.current,
            engine: engine,
            options: {
                width: sceneRef.current.clientWidth,
                height: 400,
                wireframes: false,
                background: 'transparent'
            }
        });

        // Función para crear el texto
        const textBody = Bodies.rectangle(render.canvas.width / 2, 200, 120, 80, {
            restitution: 0.8,
            friction: 0.005,
            density: 0.001,
            render: {
                fillStyle: 'transparent'
            }
        });

        // Paredes
        const walls = [
            Bodies.rectangle(render.canvas.width/2, -10, render.canvas.width, 20, { 
                isStatic: true,
                restitution: 0.8,
                render: { fillStyle: 'transparent' }
            }),
            Bodies.rectangle(render.canvas.width/2, render.canvas.height + 10, render.canvas.width, 20, { 
                isStatic: true,
                restitution: 0.8,
                render: { fillStyle: 'transparent' }
            }),
            Bodies.rectangle(-10, render.canvas.height/2, 20, render.canvas.height, { 
                isStatic: true,
                restitution: 0.8,
                render: { fillStyle: 'transparent' }
            }),
            Bodies.rectangle(render.canvas.width + 10, render.canvas.height/2, 20, render.canvas.height, { 
                isStatic: true,
                restitution: 0.8,
                render: { fillStyle: 'transparent' }
            })
        ];

        // Configurar el mouse
        const mouse = Mouse.create(render.canvas);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });

        // Añadir todos los cuerpos al mundo
        Composite.add(engine.world, [...walls, textBody, mouseConstraint]);

        // Configurar el runner
        const runner = Runner.create();
        Runner.run(runner, engine);

        // Función personalizada de renderizado
        const renderScene = () => {
            const context = render.context;
            const canvas = render.canvas;

            // Limpiar el canvas
            context.clearRect(0, 0, canvas.width, canvas.height);

            // Renderizar el texto
            context.save();
            context.translate(textBody.position.x, textBody.position.y);
            context.rotate(textBody.angle);
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.font = 'bold 72px jetbrains_mono';
            context.fillStyle = '#FFF';
            context.fillText('404', 0, 0);
            context.restore();

            // Verificar posición y resetear si está fuera de límites
            if (
                textBody.position.y > render.canvas.height + 100 || 
                textBody.position.y < -100 ||
                textBody.position.x > render.canvas.width + 100 ||
                textBody.position.x < -100
            ) {
                Matter.Body.setPosition(textBody, {
                    x: render.canvas.width / 2,
                    y: 200
                });
                Matter.Body.setVelocity(textBody, { x: 0, y: 0 });
                Matter.Body.setAngularVelocity(textBody, 0);
            }

            requestRef.current = requestAnimationFrame(renderScene);
        };

        // Iniciar el renderizado
        renderScene();

        // Ajustar el tamaño del canvas
        render.canvas.style.width = '100%';
        render.canvas.style.height = '400px';

        // Función para manejar el resize de la ventana
        const handleResize = () => {
            if (sceneRef.current) {
                render.canvas.width = sceneRef.current.clientWidth;
                render.canvas.height = 400;
                Matter.Body.setPosition(textBody, {
                    x: render.canvas.width / 2,
                    y: 200
                });
            }
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
            Runner.stop(runner);
            World.clear(engine.world, false);
            Engine.clear(engine);
            render.canvas.remove();
            if (mouseConstraint.mouse.element) {
                Mouse.clearSourceEvents(mouseConstraint.mouse);
            }
            window.removeEventListener('resize', handleResize);
            engineRef.current = null;
        };
    }, []);

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <div 
                ref={sceneRef} 
                className="w-full max-w-2xl h-[400px] mb-4"
            />
            <div className="font-whacky text-md text-center">
                {t('notFound.description')}
            </div>
            <a 
                className="text-primary font-whacky text-md cursor-pointer transition-all duration-100 ease-in-out hover:text-secondary"
                onClick={() => navigate('/')}
            > 
                {t('notFound.back')}
            </a>
        </div>
    );
};

export default NotFoundPage;
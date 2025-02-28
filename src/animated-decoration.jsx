"use client";

import { useEffect, useRef } from "react";

export function AnimatedDecorations() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateSize();
    window.addEventListener("resize", updateSize);

    // Particle system for petals and sparkles
    class Particle {
      constructor(type) {
        this.x = Math.random() * canvas.width;
        this.y = -20;
        this.size =
          type === "petal" ? Math.random() * 8 + 4 : Math.random() * 3 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 + 1;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
        this.opacity = Math.random() * 0.5 + 0.5;
        this.type = type;
      }

      update() {
        this.x += this.speedX + Math.sin(this.y * 0.01) * 0.5;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;

        if (this.type === "petal") {
          this.opacity -= 0.002;
        } else {
          this.opacity -= 0.01;
        }

        if (this.y > canvas.height || this.opacity <= 0) {
          this.y = -20;
          this.x = Math.random() * canvas.width;
          this.opacity = Math.random() * 0.5 + 0.5;
        }
      }

      draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.globalAlpha = this.opacity;

        if (this.type === "petal") {
          // Draw petal
          ctx.beginPath();
          ctx.fillStyle = "#fecdd3"; // Light pink color
          ctx.ellipse(0, 0, this.size, this.size / 2, 0, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Draw sparkle
          ctx.beginPath();
          ctx.fillStyle = "#fffbeb"; // Light yellow color
          const points = 4;
          for (let i = 0; i < points * 2; i++) {
            const radius = i % 2 === 0 ? this.size : this.size / 2;
            const angle = (i * Math.PI) / points;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.fill();
        }

        ctx.restore();
      }
    }

    // Create particles
    const particles = [];
    const numPetals = 30;
    const numSparkles = 20;

    for (let i = 0; i < numPetals; i++) {
      particles.push(new Particle("petal"));
    }
    for (let i = 0; i < numSparkles; i++) {
      particles.push(new Particle("sparkle"));
    }

    // Animation loop
    let animationFrameId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", updateSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
    />
  );
}

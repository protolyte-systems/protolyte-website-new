import { useEffect, useRef, type JSX } from "react";
import { useNavigate } from "react-router-dom";
import type { HeroContent } from "../../types/home";
import PrimaryButton from "../common/PrimaryButton";
import styles from "./HeroSection.module.css";

interface HeroSectionProps {
  content: HeroContent;
}

function HeroSection({ content }: HeroSectionProps): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    let animationFrame = 0;
    let time = 0;

    const resizeCanvas = (): void => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawGrid = (width: number, height: number): void => {
      const horizonY = height * 0.24;
      const vanishingX = width * 0.52;

      context.strokeStyle = "rgba(96, 165, 250, 0.15)";
      context.lineWidth = 1;

      for (let i = 0; i <= 14; i += 1) {
        const y = horizonY + ((height - horizonY) / 14) * i;
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(width, y);
        context.stroke();
      }

      for (let i = -8; i <= 8; i += 1) {
        context.beginPath();
        context.moveTo(vanishingX, horizonY);
        context.lineTo(vanishingX + i * 80, height);
        context.stroke();
      }
    };

    const draw = (): void => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const horizonY = height * 0.24;

      context.clearRect(0, 0, width, height);

      const bgGradient = context.createLinearGradient(0, 0, 0, height);
      bgGradient.addColorStop(0, "rgba(15, 23, 42, 0.15)");
      bgGradient.addColorStop(1, "rgba(2, 6, 23, 0.9)");
      context.fillStyle = bgGradient;
      context.fillRect(0, 0, width, height);

      drawGrid(width, height);

      const waveConfigs = [
        { amp: 22, freq: 0.012, speed: 0.032, color: "rgba(59, 130, 246, 0.95)", widthScale: 2.8, yOffset: 0.56 },
        { amp: 18, freq: 0.014, speed: 0.027, color: "rgba(37, 99, 235, 0.75)", widthScale: 2.2, yOffset: 0.62 },
        { amp: 14, freq: 0.016, speed: 0.021, color: "rgba(147, 197, 253, 0.58)", widthScale: 1.7, yOffset: 0.68 },
      ];

      waveConfigs.forEach((config, index) => {
        context.beginPath();
        context.strokeStyle = config.color;
        context.lineWidth = config.widthScale;
        context.shadowColor = "rgba(59, 130, 246, 0.4)";
        context.shadowBlur = 12;

        for (let x = 0; x <= width; x += 3) {
          const businessRise = ((x / width) * 26) * (1 - index * 0.22);
          const y =
            height * config.yOffset -
            businessRise +
            Math.sin(x * config.freq + time * config.speed + index * 0.9) * config.amp +
            Math.sin(time * 0.012 + x * 0.002) * 4;

          if (x === 0) {
            context.moveTo(x, y);
          } else {
            context.lineTo(x, y);
          }
        }

        context.stroke();
        context.shadowBlur = 0;
      });

      for (let i = 0; i < 11; i += 1) {
        const x = (width / 10) * i;
        const y = height * 0.56 - (x / width) * 26 + Math.sin(x * 0.012 + time * 0.032) * 22;

        context.beginPath();
        context.fillStyle = "rgba(147, 197, 253, 0.9)";
        context.arc(x, y, 2.4, 0, Math.PI * 2);
        context.fill();
      }

      context.beginPath();
      context.strokeStyle = "rgba(37, 99, 235, 0.35)";
      context.lineWidth = 1;
      context.moveTo(0, horizonY);
      context.lineTo(width, horizonY);
      context.stroke();

      time += 1;
      animationFrame = window.requestAnimationFrame(draw);
    };

    resizeCanvas();
    draw();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <header className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.copyBlock}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            <span>{content.badge}</span>
          </div>

          <h1 className={styles.title}>
            {content.title} <span>{content.highlightedTitle}</span>
          </h1>

          <p className={styles.description}>{content.description}</p>

          <div className={styles.actions}>
            <PrimaryButton onClick={() => navigate("/products/martlyte")}>{content.primaryAction}</PrimaryButton>
          </div>
        </div>

        <div className={styles.visualWrap}>
          <div className={styles.blur} />
          <div className={styles.visualFrame}>
            <canvas ref={canvasRef} className={styles.waveCanvas} aria-label="Animated business transformation wave" />
            <div className={styles.gridOverlay} />
            <div className={styles.scanLine} />
            <div className={styles.visualTag}>Riding the Next Wave of AI Innovation</div>
            <div className={styles.visualMetric}>
              <span>Building the Next Dimension</span>
              <strong>of Digital Transformation for Modern Businesses</strong>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeroSection;

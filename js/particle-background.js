/**
 * Particle Background Effect System
 * Creates a Three.js particle background that can be applied to any element
 */

class ParticleBackground {
    constructor(options = {}) {
        this.options = {
            container: options.container || 'body',
            particleCount: options.particleCount || 500,
            particleColor: options.particleColor || 0x6e4bc3,
            particleSize: options.particleSize || 0.1,
            rotationSpeed: {
                x: options.rotationSpeed?.x || 0.0005,
                y: options.rotationSpeed?.y || 0.0007
            },
            particleRange: {
                x: options.particleRange?.x || 10,
                y: options.particleRange?.y || 10,
                z: options.particleRange?.z || 10
            },
            cameraDistance: options.cameraDistance || 5,
            zIndex: options.zIndex || 0,
            ...options
        };

        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.particleSystem = null;
        this.canvas = null;
        this.container = null;
        this.animationId = null;

        this.init();
    }

    init() {
        this.createContainer();
        this.createScene();
        this.createParticles();
        this.setupEventListeners();
        this.animate();
    }

    createContainer() {
        // Get the target container
        if (typeof this.options.container === 'string') {
            this.container = document.querySelector(this.options.container);
        } else {
            this.container = this.options.container;
        }

        if (!this.container) {
            console.error('ParticleBackground: Container not found');
            return;
        }

        // Create canvas
        this.canvas = document.createElement('canvas');
        this.canvas.style.position = 'absolute';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.zIndex = this.options.zIndex;
        this.canvas.style.pointerEvents = 'none';

        // Ensure container has relative positioning
        const containerStyle = window.getComputedStyle(this.container);
        if (containerStyle.position === 'static') {
            this.container.style.position = 'relative';
        }

        // Add canvas to container
        this.container.prepend(this.canvas);
    }

    createScene() {
        // Create Three.js scene
        this.scene = new THREE.Scene();
        
        // Create camera
        const width = this.canvas.clientWidth || window.innerWidth;
        const height = this.canvas.clientHeight || window.innerHeight;
        this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        this.camera.position.z = this.options.cameraDistance;

        // Create renderer
        this.renderer = new THREE.WebGLRenderer({ 
            canvas: this.canvas, 
            alpha: true, 
            antialias: true 
        });
        this.renderer.setSize(width, height);
    }

    createParticles() {
        // Create particle material
        const particleMaterial = new THREE.PointsMaterial({
            color: this.options.particleColor,
            size: this.options.particleSize,
            transparent: true,
            blending: THREE.AdditiveBlending,
            map: new THREE.TextureLoader().load('https://threejs.org/examples/textures/sprites/disc.png')
        });

        // Create particle geometry
        const particleGeometry = new THREE.BufferGeometry();
        const vertices = [];

        for (let i = 0; i < this.options.particleCount; i++) {
            const x = (Math.random() - 0.5) * this.options.particleRange.x;
            const y = (Math.random() - 0.5) * this.options.particleRange.y;
            const z = (Math.random() - 0.5) * this.options.particleRange.z;
            vertices.push(x, y, z);
        }

        particleGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
        
        // Create particle system
        this.particleSystem = new THREE.Points(particleGeometry, particleMaterial);
        this.scene.add(this.particleSystem);
    }

    animate() {
        this.animationId = requestAnimationFrame(() => this.animate());
        
        // Rotate particles
        if (this.particleSystem) {
            this.particleSystem.rotation.x += this.options.rotationSpeed.x;
            this.particleSystem.rotation.y += this.options.rotationSpeed.y;
        }

        // Render scene
        if (this.renderer && this.scene && this.camera) {
            this.renderer.render(this.scene, this.camera);
        }
    }

    handleResize() {
        if (!this.canvas || !this.camera || !this.renderer) return;

        const width = this.canvas.clientWidth || window.innerWidth;
        const height = this.canvas.clientHeight || window.innerHeight;

        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height);
    }

    setupEventListeners() {
        window.addEventListener('resize', () => this.handleResize());
    }

    // Public methods
    updateParticleColor(color) {
        if (this.particleSystem && this.particleSystem.material) {
            this.particleSystem.material.color.setHex(color);
        }
    }

    updateParticleCount(count) {
        if (this.particleSystem) {
            this.scene.remove(this.particleSystem);
        }
        this.options.particleCount = count;
        this.createParticles();
    }

    updateRotationSpeed(x, y) {
        this.options.rotationSpeed.x = x;
        this.options.rotationSpeed.y = y;
    }

    destroy() {
        // Stop animation
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }

        // Clean up Three.js objects
        if (this.particleSystem) {
            if (this.particleSystem.geometry) this.particleSystem.geometry.dispose();
            if (this.particleSystem.material) this.particleSystem.material.dispose();
            this.scene.remove(this.particleSystem);
        }

        if (this.renderer) {
            this.renderer.dispose();
        }

        // Remove canvas
        if (this.canvas && this.canvas.parentNode) {
            this.canvas.parentNode.removeChild(this.canvas);
        }

        // Remove event listeners
        window.removeEventListener('resize', this.handleResize);
    }

    // Static method to create multiple instances easily
    static createForElement(selector, options = {}) {
        return new ParticleBackground({
            container: selector,
            ...options
        });
    }
}

// Export for both module and global usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ParticleBackground;
} else if (typeof define === 'function' && define.amd) {
    define([], function() { return ParticleBackground; });
} else {
    window.ParticleBackground = ParticleBackground;
}

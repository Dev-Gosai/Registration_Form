const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.size > 0.2) this.size -= 0.1;
    }

    draw() {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }
}

let particles = [];

function createParticles(x, y) {
    const particleCount = 5;
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(x, y, Math.random() * 5 + 2));
    }
}

function animateParticles() {
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        if (particles[i].size <= 0.2) {
            particles.splice(i, 1);
            i--;
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        if (particles[i].size <= 0.2) {
            particles.splice(i, 1);
            i--;
        }
    }

    requestAnimationFrame(animate);
}

function handleMouseMove(event) {
    const x = event.x;
    const y = event.y;
    createParticles(x, y);
}

function handleResize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// Attach event listeners
window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('resize', handleResize);

// Initial setup
handleResize();
animate();


function formValidation() {
    if (document.form - fill.username.value == "") {
        document.getElementById("result").innerHTML = "Fill UserName*";
        return false;
    }
    else if (document.form - fill.department.value == "") {
        document.getElementById("result").innerHTML = "Fill Department EX : CSE";
        return false;
    }
    else if (document.form - fill.rollno.value == "") {
        document.getElementById("result").innerHTML = "Fill Roll Number EX : 001";
        return false;
    }
    else if (document.form - fill.enrollment.value == "") {
        document.getElementById("result").innerHTML = "Fill Enrollment ID EX : 12345678901";
        return false;
    }
    else if (document.form - fill.email.value == "") {
        document.getElementById("result").innerHTML = "Fill Email";
        return false;
    }
    else if (document.form - fill.contactno.value == "") {
        document.getElementById("result").innerHTML = "Fill Contact Number";
        return false;
    }
    else if (document.form - fill.expertise.value == "") {
        document.getElementById("result").innerHTML = "Fill Skill & Knowledge";
        return false;
    }
}
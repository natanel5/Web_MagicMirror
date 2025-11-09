export function initGreeting() {
    const greetingElement = document.getElementById('greeting');
    const hour = new Date().getHours();
    let greeting;

    if (hour < 12) {
        greeting = 'Good morning, Natanel';
    } else if (hour < 18) {
        greeting = 'Good afternoon, Natanel';
    } else {
        greeting = 'Good evening, Natanel';
    }
    greetingElement.textContent = greeting;
}
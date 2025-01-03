document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('main-content');

    // Check if sections already exist to prevent duplicates
    if (!document.getElementById('benefits-section') && !document.getElementById('features-section')) {
        // Create Benefits Section
        const benefitsSection = document.createElement('section');
        benefitsSection.id = 'benefits-section';
        benefitsSection.className = 'card';
        benefitsSection.innerHTML = `
            <h2 id="benefits-title">Benefits of Renewable Energy</h2>
            <p id="benefits-description">Overview of renewable energy benefits...</p>
        `;

        // Create Features Section
        const featuresSection = document.createElement('section');
        featuresSection.id = 'features-section';
        featuresSection.className = 'card';
        featuresSection.innerHTML = `
            <h2 id="features-title">System Features</h2>
            <ul id="features-list">
                <li>Predicted Solar Energy Output</li>
                <li>Grid Energy Dependency</li>
                <li>Electricity Bill Estimation</li>
            </ul>
        `;

        // Append sections to main content
        mainContent.appendChild(benefitsSection);
        mainContent.appendChild(featuresSection);

        // Trigger the animation by adding the 'loaded' class after a slight delay
        setTimeout(() => {
            benefitsSection.classList.add('loaded');
            featuresSection.classList.add('loaded');
        }, 100); // Delay to allow for the animation to be visible
    }
});
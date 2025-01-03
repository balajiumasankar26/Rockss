document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('main-content');

    const benefitsSection = document.createElement('section');
    benefitsSection.id = 'benefits-section';
    benefitsSection.className = 'card';
    benefitsSection.innerHTML = `
        <h2 id="benefits-title">Benefits of Renewable Energy</h2>
        <p id="benefits-description">
            Conventional energy sources, such as coal and natural gas, significantly contribute to CO2 emissions through combustion, releasing greenhouse gases that trap heat in the atmosphere. 
            The burning of fossil fuels is responsible for over 75% of global greenhouse gas emissions, leading to climate change and health issues due to poor air quality.
        </p>
        <p>
            Transitioning to renewable energy sources like solar, wind, and hydropower can drastically reduce CO2 emissions. These sources produce little to no greenhouse gases during operation, helping to mitigate climate change.
        </p>
        <p>
            Small steps can lead to great success. Simple actions, such as using energy-efficient appliances, reducing energy consumption, and supporting local renewable energy projects, can collectively lead to significant reductions in carbon footprints.
        </p>
        <p>
            Local communities can implement small-scale renewable energy projects, such as solar panel installations or community wind farms, contributing to larger sustainability goals. 
            By recognizing the detrimental effects of conventional energy and taking small, actionable steps towards renewable energy adoption, we can collectively achieve significant progress in reducing our carbon footprint and fostering a healthier planet.
        </p>
    `;

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

    mainContent.appendChild(benefitsSection);
    mainContent.appendChild(featuresSection);

    setTimeout(() => {
        benefitsSection.classList.add('loaded');
        featuresSection.classList.add('loaded');
    }, 100);

    const sections = [benefitsSection, featuresSection];

    sections.forEach(section => {
        section.addEventListener('mouseenter', () => {
            section.classList.add('near-hover');
        });
        section.addEventListener('mouseleave', () => {
            section.classList.remove('near-hover');
        });
    });
});
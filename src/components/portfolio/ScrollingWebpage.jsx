import React from 'react';

const ScrollingWebpage = () => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f0f0', padding: '20px' }}>
            <h1 style={{ color: '#333333', textAlign: 'center' }}>Welcome to the Scrolling Webpage!</h1>

            <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: '#ffffff', padding: '20px', borderRadius: '10px', boxShadow: '0px 2px 5px rgba(0,0,0,0.1)' }}>
                <p>
                    Here are some random facts to entertain you while you scroll down:
                </p>

                <ul>
                    <li style={{ color: '#007bff' }}>The Earth's atmosphere is about 78% nitrogen, 21% oxygen, and 1% other gases.</li>
                    <li style={{ color: '#28a745' }}>A group of flamingos is called a "flamboyance."</li>
                    <li style={{ color: '#dc3545' }}>Octopuses have three hearts.</li>
                    <li style={{ color: '#6610f2' }}>The Eiffel Tower can be 15 cm taller during the summer, due to thermal expansion of the metal.</li>
                    <li style={{ color: '#fd7e14' }}>Bananas are berries, but strawberries are not.</li>
                    <li style={{ color: '#6f42c1' }}>The average person spends about 6 months of their life waiting for red lights to turn green.</li>
                    <li style={{ color: '#ffc107' }}>The shortest war in history was between Zanzibar and England in 1896. Zanzibar surrendered after 38 minutes.</li>
                    <li style={{ color: '#20c997' }}>Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible!</li>
                    <li style={{ color: '#17a2b8' }}>A day on Venus is longer than a year on Venus. It takes Venus 243 Earth days to rotate on its axis.</li>
                    <li style={{ color: '#343a40' }}>The first computer virus was created in 1983 and was called "Elk Cloner."</li>
                    <li style={{ color: '#007bff' }}>Tennis was originally played with bare hands.</li>
                </ul>

                <p>
                    Isn't learning fun? Keep scrolling for more!
                </p>

                <div style={{ height: '1500px' }}></div> {/* Adding empty div for scrolling */}
            </div>

            <footer style={{ textAlign: 'center', marginTop: '20px', color: '#999999' }}>
                <p>Thanks for scrolling! Hope you enjoyed these random facts.</p>
                <p>&copy; 2024 Scrolling Webpage. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default ScrollingWebpage;

import "../style/index.css";

function DesktopNotice() {
    return (
        <div className="desktopNotice">
            <h1>This app is made for mobile devices.</h1>
            <h2>Please open this page on a mobile device and add to your home screen for easy access.</h2>
            <div className="desktopNoticeLists">
                <ol>
                    <p>APPLE</p>
                    <li>Open this webpage in Safari</li>
                    <li>Tap the Share button on the bottom of the page.</li>
                    <li>In the list of options that appear, scroll down until you see Add to Home Screen. Click it.</li>
                    <li>Choose a name for the website shortcut, and then Safari will at it to your homescreen.</li>
                </ol>
                <ol>
                    <p>ANDRIOID</p>
                    <li>Open this webpage in Chrome</li>
                    <li>Tap the menu icon (3 dots in upper right-hand corner) and tap Add to homescreen.</li>
                    <li>Choose a name for the website shortcut, then Chrome will add it to your home screen.</li>
                </ol>
            </div>
        </div>
    );
}

export default DesktopNotice;


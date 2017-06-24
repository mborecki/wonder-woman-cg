import App from './app';

let app = new App();

app.runFistTurnCode();

while (true) {
    app.runNextTurnCode();
}

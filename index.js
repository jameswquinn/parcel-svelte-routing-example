import App from './components/App.svelte'

document.addEventListener("DOMContentLoaded", function (event) {
    const app = new App({
        target: document.getElementById('app')
    });
});

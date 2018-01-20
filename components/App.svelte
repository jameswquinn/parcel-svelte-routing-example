<div>
    <h1>Hello {{name}}</h1>

    <RouterLink to="/">Page1</RouterLink>
    <RouterLink to="/page2">Page2</RouterLink>

    <div id="routes"></div>
</div>

<script>
    import SvelteRouter from 'svelte-router';
    import Page1 from './Page1.svelte';
    import Page2 from './Page2.svelte';

    const { createRouter, RouterLink } = SvelteRouter;

    const router = createRouter({
        '/': Page1,
        '/page2': Page2,
        default: Page1
    })

    export default {
        data() {
            return {
                name: 'world'
            }
        },

        oncreate() {
            router.create('#routes')
        },

        ondestroy() {
            router.destroy()
        },

        components: {
            RouterLink,
            Page1,
            Page2
        }
    }
</script>
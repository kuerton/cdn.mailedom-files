const app = Vue.createApp({
    data() {
        return {
            images: [
                // General
                'img/main/general/background.svg',
                'img/main/general/bot.svg',
                'img/main/general/discord.svg',
                'img/main/general/favicon.svg',
                'img/main/general/mailedom.svg',
                'img/main/general/telegram.svg',
                'img/main/general/vk.svg',
                'img/main/general/youtube.svg',
                'img/main/general/stream.svg',
                'img/main/general/yoomoney.svg',
                'img/main/general/qiwi.svg',
                'img/main/general/sbp.svg',
                // hud
                'img/main/hud/bankcard.svg',
                'img/main/hud/cash.svg',
                'img/main/hud/cloud.svg',
                'img/main/hud/coin.svg',
                'img/main/hud/tablet.svg',
                // pay
                'img/main/pay/mastercard.svg',
                'img/main/pay/mir.svg',
                'img/main/pay/visa.svg',
            ],
            searchQuery: ''
        }
    },
    computed: {
        filteredImages() {
            return this.images.filter(image => image.includes(this.searchQuery));
        }
    },
    methods: {
        openImage() {
            if (this.filteredImages.length > 0) {
                window.open(`${this.filteredImages[0]}`, '_blank');
                this.searchQuery = '';
            }
        }
    }
});

app.mount('#app');

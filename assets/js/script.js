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
                'img/main/general/secure-icon.svg',
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
                'img/main/pay/yoomoney.svg',
                'img/main/pay/qiwi.svg',
                'img/main/pay/sbp.svg',
                'img/main/pay/ethereum.svg',
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

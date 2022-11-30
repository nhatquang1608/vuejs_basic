var vueInstance = new Vue({
    el: '#app',
    data: {
        title: 'Áo thun nam thể thao hàng VNXK vải dày mịn - Vải Đốm',
        url: 'https://www.lazada.vn/products/ao-thun-nam-the-thao-hang-vnxk-vai-day-min-vai-dom-i265780948-s382816279.html',
        target: '_blank', // an vao link se chuyen sang tab moi
        // target: '_top' (load lai trang hien tai)
        originPrice: 20000,
        check: true,
        counter: 0,
        sale: 0.5,
        store: 0,
        selectedProduct: 0,
        listProductDetail: [
            {
                image: './images/red.jpg',
                quantity: 8,
                textColor: 'Màu Đỏ'
            }, {
                image: './images/blue.jpg',
                quantity: 0,
                textColor: 'Màu Xanh'
            }, {
                image: './images/black.jpg',
                quantity: 2,
                textColor: 'Màu Đen'
            },
        ],
        listDesc: [
            'Chất liệu: polyester và thun',
            'Thoát mồ hôi tốt',
            'Áo thun cổ tròn thể thao Hiye chuyên được may từ chất liệu nilon thoáng mát',
            'Kết hợp thêm sợi thun tạo độ co giãn giúp người tiêu dùng thoải mái khi mặc',
            'Chất liệu: polyester và thun'
        ],
        description: '<p>M&ocirc; tả: &Aacute;o thun cổ tr&ograve;n thể thao Hiye chuy&ecirc;n được may từ chất liệu nilon tho&aacute;ng m&aacute;t v&agrave; tho&aacute;t mồ h&ocirc;i tốt, kết hợp th&ecirc;m sợi thun tạo độ co gi&atilde;n gi&uacute;p người ti&ecirc;u d&ugrave;ng thoải m&aacute;i khi mặc</p> ',
        testDescription: `<p>Test hjskhfk h</p>
        <p><strong><span style="background-color:#8e44ad">fhsdjkfhsk&nbsp; hsdjkfk&nbsp;</span></strong></p>`
    },
    methods: {
        handleClickColor(index) {
            this.selectedProduct = index
        },

        classActive(index) {
            return {
                active: this.selectedProduct === index
            }
        },

        handleAddToCart(e){
            if(this.getProduct.quantity === 0){
                alert('Số lượng không đủ')
            } else {
                this.store += 1,
                this.getProduct.quantity -= 1
            }
        },

        handleCancel(){
            this.getProduct.quantity += this.store
            this.store = 0
        }
    },
    computed: {
        formatOriginPrice() {
            var number = this.originPrice

            return new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'VND'
            }).format(number)
        },

        // Dua ve VND
        formatFinalPrice() {
            var number = this.originPrice * this.sale

            return new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'VND'
            }).format(number)
        },

        getProduct() {
            let index = this.selectedProduct
            return this.listProductDetail[index]
        },
    }
});
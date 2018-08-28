const vm = new Vue({
    el: "#app ",
    data: {
        kg: 0,
        selected: 0,
        scale: [
            [0.38, 0.09, 0.07, 0.25, 0.2, 0.01], //小型犬
            [0.36, 0.08, 0.05, 0.25, 0.25, 0.01], //中型犬
            [0.28, 0.06, 0.05, 0.35, 0.25, 0.01]
        ], //大型犬
        factor: [{
            type: '0~4M',
            num: 3
        }, {
            type: '4~12M',
            num: 2
        }, {
            type: '一歲以上已結紮',
            num: 1.6
        }, {
            type: '一歲以上未結紮',
            num: 1.8
        }, {
            type: '減重',
            num: 1.4
        }, {
            type: '懷孕六周以下',
            num: 1.8
        }, {
            type: '懷孕六周以上',
            num: 2
        }, {
            type: '哺乳',
            num: 6
        }, {
            type: '大型手術後',
            num: 1.8
        }, {
            type: '年老少活動',
            num: 1.5
        }],
        dog: '',
    },
    computed: {
        cal() {
            let calTemp = 0;
            if (isNaN(this.kg) || this.kg <= 0 || !this.selected) {
                this.dog = '';
                return '請輸入狗狗資料'
            }
            if (this.kg <= 10) {
                calTemp = (this.kg * 30 + 70) * this.selected / 1.4;
                this.dog = '小型犬'
            } else if (this.kg <= 20) {
                calTemp = (this.kg * 30 + 70) * this.selected / 1.5;
                this.dog = '中型犬'
            } else if (this.kg > 20) {
                calTemp = (this.kg * 30 + 70) * this.selected / 1.6;
                this.dog = '大型犬'
            }
            return Math.round(calTemp, 10);
        },
        food() {
            switch (this.dog) {
                case '小型犬':
                    temp = this.scale[0].map(value => Math.round(value * this.cal));
                    break;
                case '中型犬':
                    temp = this.scale[1].map(value => Math.round(value * this.cal));
                    break;
                case '大型犬':
                    temp = this.scale[2].map(value => Math.round(value * this.cal));
                    break;
            }
            return temp;
        }
    }
})
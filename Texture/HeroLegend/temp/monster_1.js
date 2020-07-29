
cc.Class({
    extends: cc.Component,

    properties: {
        HP_pro: cc.ProgressBar,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.pos_region = Global.MapLeng - Global.TileLeng * 2;
        this.ani_com = this.getComponent(cc.Animation);
        this.init();
    },


    init() {
        this.HP_num = 20;
        this.HP_num2 = 20;
        this.HP_pro.progress = 1;
        this.countTime_1 = Math.random() * 2;
        this.countTime_2 = Math.random() * 5;
    },

    updateHP(num){
        this.HP_num -= num;
        if(this.HP_num>0){
            this.HP_pro.progress = this.HP_num/this.HP_num2;
        }else{
            this.node.active = false;
            Global.buffs.create_1(this.node.position);
            return true;
        }
    },

    update (dt) {
        if(Global.isOver)return;
        this.countTime_1 += dt;
        this.countTime_2 += dt;
        if(this.countTime_2 >= 5) {
            this.countTime_1 = 0;
            this.countTime_2 = 0;
            this.node.x = this.pos_region * (Math.random() - 0.5);
            this.node.y = this.pos_region * (Math.random() - 0.5);
            return;
        }
        if(this.countTime_1 >= 2) {
            this.countTime_1 -= 2;
            this.ani_com.play("monster_1");
        }
    },
});
